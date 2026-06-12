import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { processSteps } from '../../data';
import { premiumEase } from '../../lib/utils';

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineCoords, setLineCoords] = useState({ top: 0, height: 0 });
  const [circleOffsets, setCircleOffsets] = useState<number[]>([]);
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 1 });
  const [activeStepProgress, setActiveStepProgress] = useState(0);
  
  // Track scroll progress of the steps container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to scaleY relative to the first and last circles
  const scaleY = useTransform(scrollYProgress, [scrollRange.start, scrollRange.end], [0, 1], { clamp: true });

  // Track the change of scroll progress in react state
  useMotionValueEvent(scaleY, "change", (latest) => {
    setActiveStepProgress(latest);
  });

  useEffect(() => {
    const updateLine = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const circles = container.querySelectorAll('.step-circle');
      
      if (circles.length > 0) {
        const coords: number[] = [];
        const offsets: number[] = [];
        
        const firstCircle = circles[0];
        const firstRect = firstCircle.getBoundingClientRect();
        const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;

        circles.forEach((circle) => {
          const rect = circle.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - containerRect.top;
          coords.push(center);
          offsets.push(center - firstCenter);
        });

        const top = coords[0];
        const bottom = coords[coords.length - 1];
        const height = bottom - top;

        setLineCoords({ top, height });
        setCircleOffsets(offsets);

        if (containerHeight > 0) {
          const pStart = top / containerHeight;
          const pEnd = bottom / containerHeight;
          setScrollRange({ start: pStart, end: pEnd });
        }
      }
    };

    updateLine();

    const resizeObserver = new ResizeObserver(() => updateLine());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', updateLine);

    const timer1 = setTimeout(updateLine, 100);
    const timer2 = setTimeout(updateLine, 500);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLine);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="process" className="py-20 md:py-40 px-5 md:px-12 bg-zinc-950 relative z-10 overflow-hidden border-b border-white/5">
      {/* Subtle Dot matrix grid overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Grid Layout Lines */}
      <div className="absolute inset-y-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-5 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column (Sticky) */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-40 z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">METHODOLOGY</span>
              </div>

              <motion.h2 
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease: premiumEase, duration: 1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-white"
              >
                How We <br/> <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: '2px #CCFF00' }}>Build.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }}
                className="text-gray-400 text-lg leading-relaxed font-light pr-4"
              >
                Our methodology is refined from years of experience in enterprise environments. We don't skip steps, and we guarantee excellence from wireframe to deployment.
              </motion.p>
            </div>
          </div>

          {/* Right Column (Step list with continuous scroll progress line) */}
          <div 
            ref={containerRef}
            className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-24 pt-10 relative"
          >
            {/* Background continuous line (connected exactly from center of first step's circle to center of last step's circle) */}
            <div 
              style={{ top: `${lineCoords.top}px`, height: `${lineCoords.height}px` }}
              className="absolute left-0 w-[2px] bg-white/10 z-0 pointer-events-none" 
            />
            
            {/* Animated active progress line (connected exactly from center of first step's circle to center of last step's circle) */}
            <motion.div 
              style={{ 
                top: `${lineCoords.top}px`, 
                height: `${lineCoords.height}px`,
                scaleY, 
                originY: 0 
              }}
              className="absolute left-0 w-[2px] bg-[#CCFF00] z-10 shadow-[0_0_10px_#CCFF00] origin-top pointer-events-none"
            />

            {processSteps.map((step, idx) => {
              // Calculate if the scroll line has reached the center of the step's circle
              const targetFraction = lineCoords.height > 0 ? circleOffsets[idx] / lineCoords.height : 0;
              const isActive = circleOffsets.length > 0 
                ? (activeStepProgress >= targetFraction - 0.01)
                : idx === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1, ease: premiumEase }}
                  className="relative pl-10 md:pl-20 py-8 md:py-12 group transition-colors duration-500 rounded-r-2xl hover:bg-white/[0.01]"
                >
                  {/* Glowing backing blob on hover */}
                  <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#CCFF00] opacity-0 group-hover:opacity-[0.03] filter blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none"></div>

                  {/* Progress dot / Step index (turns neon green as the scroll progress line reaches it) */}
                  <div className={`step-circle absolute top-8 md:top-12 -left-6 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-black border rounded-full flex items-center justify-center font-mono text-lg md:text-xl transition-all duration-500 z-20 ${
                    isActive 
                      ? 'border-[#CCFF00] text-black bg-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.4)] font-bold' 
                      : 'border-white/10 text-white group-hover:bg-[#CCFF00] group-hover:text-black group-hover:border-[#CCFF00] group-hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                  }`}>
                    {step.id}
                  </div>
                  
                  {/* Icon display */}
                  <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#CCFF00]/30 group-hover:bg-white/10 transition-all duration-500">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white group-hover:text-[#CCFF00] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Desc */}
                  <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>

                  {/* Decorative horizontal card end line */}
                  <div className="absolute bottom-0 right-0 left-10 md:left-20 h-px bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
