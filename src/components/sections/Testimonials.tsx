import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowLeftRight, TrendingUp } from 'lucide-react';
import { testimonials } from '../../data';
import { premiumEase } from '../../lib/utils';

const Testimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateVal = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  // Track slider position state (percentage 0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseLeave = () => {
    // Return to middle position smoothly when mouse leaves
    setSliderPosition(50);
  };

  return (
    <section id="testimonials" className="py-24 md:py-48 px-6 md:px-12 bg-zinc-950 text-white relative z-10 overflow-hidden border-b border-white/5">
      {/* Dot matrix backdrop */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Grid Layout Lines */}
      <div className="absolute inset-y-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ ease: premiumEase, duration: 1 }}
          className="mb-24 text-center"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">CASE STUDY</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Real <span className="text-[#CCFF00]">Impact</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            We don't just build websites; we engineer business growth. See the transformation for yourself.
          </p>
        </motion.div>

        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Interactive Before/After Split-Screen Slider Showcase */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 relative">
              {/* Decorative Background Ambient Glow */}
              <div className="absolute inset-0 bg-[#CCFF00] opacity-[0.03] filter blur-[100px] rounded-full z-0 pointer-events-none"></div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="w-full relative z-10"
              >
                {/* Interactive Slider Container */}
                <div 
                  ref={sliderRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 bg-zinc-900 cursor-ew-resize select-none shadow-2xl"
                >
                  {/* Before version (underneath) */}
                  <div className="absolute inset-0 w-full h-full grayscale opacity-40">
                    <div className="absolute top-4 left-4 z-20 bg-black/80 px-3.5 py-1.5 uppercase font-mono text-[9px] tracking-widest text-red-500 border border-red-500/20 backdrop-blur-md rounded-full shadow-lg">
                      Before (Basic UI)
                    </div>
                    {testimonial.beforeImage && (
                      <img 
                        src={testimonial.beforeImage} 
                        alt="Before redesign" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* After version (on top, cropped via clipPath) */}
                  <div 
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-all duration-75"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <div className="absolute top-4 right-4 z-20 bg-[#CCFF00] px-3.5 py-1.5 uppercase font-mono text-[9px] tracking-widest text-black font-bold shadow-lg rounded-full">
                      After (Axoraa UI)
                    </div>
                    {testimonial.afterImage && (
                      <img 
                        src={testimonial.afterImage} 
                        alt="After redesign" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Vertical separator handle */}
                  <div 
                    className="absolute inset-y-0 w-[2px] bg-[#CCFF00] z-20 pointer-events-none shadow-[0_0_10px_rgba(204,255,0,0.8)]"
                    style={{ left: `${sliderPosition}%` }}
                  />

                  {/* Drag indicator icon */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-[#CCFF00]/50 text-[#CCFF00] flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] z-30 pointer-events-none transition-all duration-75"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <ArrowLeftRight size={18} className="animate-pulse" />
                  </div>
                </div>

                {/* Subtitle helper */}
                <p className="text-center text-xs text-gray-500 font-mono mt-4 uppercase tracking-widest animate-pulse">
                  Hover & slide mouse horizontally to compare UI
                </p>
              </motion.div>
            </div>

            {/* Content & Stats */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
              <motion.div style={{ rotate: rotateVal }} className="text-[#CCFF00] mb-8 opacity-40 flex justify-start">
                <Quote size={56} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-10 text-gray-200"
              >
                "{testimonial.content}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-12 border-l-4 border-[#CCFF00] pl-6"
              >
                <h4 className="text-xl font-bold uppercase tracking-widest text-white">{testimonial.clientName}</h4>
                <p className="text-gray-500 font-mono text-xs mt-1">{testimonial.clientRole}, {testimonial.companyName}</p>
              </motion.div>

              {/* Stats blocks inside high-fidelity border grid boxes */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {testimonial.growthStats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), ease: premiumEase }}
                    className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-[#CCFF00]/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-center items-center text-center gap-2"
                  >
                    <TrendingUp className="w-5 h-5 text-[#CCFF00] mb-1" />
                    <span className="text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
