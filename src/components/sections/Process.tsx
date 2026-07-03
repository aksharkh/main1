import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, MotionValue } from 'framer-motion';
import { processSteps } from '../../data';
import { premiumEase } from '../../lib/utils';

// Phase 02 Sandbox: Theme Customizer
const ThemeCustomizerSandbox: React.FC = () => {
  const [theme, setTheme] = useState<'lime' | 'cyber' | 'zinc'>('lime');
  
  const primaryColor = theme === 'lime' ? '#CCFF00' : theme === 'cyber' ? '#FF007F' : '#FFFFFF';
  const primaryBg = theme === 'lime' ? 'rgba(204,255,0,0.1)' : theme === 'cyber' ? 'rgba(255,0,127,0.1)' : 'rgba(255,255,255,0.1)';

  return (
    <motion.div
      key="design"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col justify-between p-8 bg-zinc-950 border border-white/10 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
        Phase_02: UI Customization
      </div>

      <div className="flex-1 flex flex-col justify-center items-center py-6">
        <div className="w-full max-w-[200px] border border-white/10 rounded-2xl p-4 bg-black flex flex-col gap-3 transition-colors duration-300">
          <div className="flex justify-between items-center">
            <div className="w-12 h-2 rounded bg-zinc-800" />
            <div className="w-4 h-4 rounded-full transition-colors duration-500" style={{ backgroundColor: primaryColor }} />
          </div>
          <div className="w-full h-2 rounded bg-zinc-900" />
          <div className="w-4/5 h-2 rounded bg-zinc-900" />
          
          <div className="w-full h-12 rounded-xl flex items-center justify-center border transition-all duration-500" style={{ borderColor: `${primaryColor}30`, backgroundColor: primaryBg }}>
            <span className="font-mono text-[9px] uppercase tracking-widest transition-colors duration-500" style={{ color: primaryColor }}>
              {theme === 'lime' ? 'lime_neon' : theme === 'cyber' ? 'cyber_pink' : 'monochrome'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        {(['lime', 'cyber', 'zinc'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`flex-1 py-1.5 rounded-lg border font-mono text-[9px] uppercase tracking-wider transition-all ${theme === t ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/20'}`}
          >
            {t}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

// Phase 03 Sandbox: Compiler Progress
const CompilerSandbox: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Resolving dependencies...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setStatus('Build succeeded! bundle.js (38.4kb)');
          return 100;
        }
        const next = prev + 5;
        if (next === 25) setStatus('Compiling source code...');
        if (next === 60) setStatus('Executing unit tests... [PASS]');
        if (next === 85) setStatus('Optimizing bundle assets...');
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const restartCompiler = () => {
    setProgress(0);
    setStatus('Resolving dependencies...');
  };

  return (
    <motion.div
      key="develop"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col justify-between p-8 bg-zinc-950 border border-white/10 rounded-3xl relative overflow-hidden font-mono"
    >
      <div className="absolute top-4 left-4 text-[9px] text-zinc-500 tracking-widest uppercase">
        Phase_03: Compilation Compiler
      </div>

      <div className="flex-1 flex flex-col justify-center gap-2">
        <div className="text-[10px] text-zinc-400">$ npm run build</div>
        <div className="text-[10px] text-zinc-300">&gt; {status}</div>
        
        <div className="w-full h-3 border border-white/10 rounded-full bg-black overflow-hidden relative mt-2">
          <div 
            className="h-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[9px] text-right text-gray-500">{progress}% COMPLETED</div>
      </div>

      <button
        onClick={restartCompiler}
        className="w-full py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] text-[9px] font-bold uppercase tracking-wider text-white transition-all"
      >
        Re-Run Compile Build
      </button>
    </motion.div>
  );
};

// Phase 04 Sandbox: Global CDN map
const CDNMapSandbox: React.FC = () => {
  const [ping, setPing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPing((prev) => !prev);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key="deliver"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col justify-between p-8 bg-zinc-950 border border-white/10 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
        Phase_04: Global Delivery CDN
      </div>

      <div className="flex-1 flex items-center justify-center relative min-h-[140px]">
        <svg viewBox="0 0 240 140" className="w-full h-full">
          <circle cx="120" cy="80" r="6" fill="#CCFF00" className="shadow-[0_0_10px_#CCFF00]" />
          <text x="120" y="94" fill="#CCFF00" fontSize="6" textAnchor="middle" fontFamily="monospace">BLR (HQ)</text>

          <circle cx="40" cy="40" r="4" fill="white" />
          <text x="40" y="52" fill="white" fontSize="6" textAnchor="middle" fontFamily="monospace">NYC: 14ms</text>
          <line x1="120" y1="80" x2="40" y2="40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {ping && <circle cx="40" cy="40" r="10" fill="none" stroke="#CCFF00" strokeWidth="1" className="animate-ping" />}

          <circle cx="100" cy="30" r="4" fill="white" />
          <text x="100" y="20" fill="white" fontSize="6" textAnchor="middle" fontFamily="monospace">LDN: 9ms</text>
          <line x1="120" y1="80" x2="100" y2="30" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {ping && <circle cx="100" cy="30" r="10" fill="none" stroke="#CCFF00" strokeWidth="1" className="animate-ping" />}

          <circle cx="200" cy="50" r="4" fill="white" />
          <text x="200" y="42" fill="white" fontSize="6" textAnchor="middle" fontFamily="monospace">NRT: 21ms</text>
          <line x1="120" y1="80" x2="200" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          {ping && <circle cx="200" cy="50" r="10" fill="none" stroke="#CCFF00" strokeWidth="1" className="animate-ping" />}
        </svg>
      </div>

      <div className="font-mono text-[9px] text-[#CCFF00] uppercase tracking-widest text-center animate-pulse">
        Edge servers verified: online
      </div>
    </motion.div>
  );
};

interface ProcessStepItemProps {
  step: typeof processSteps[0];
  idx: number;
  scaleY: MotionValue<number>;
  targetFraction: number;
  stepColor: string;
}

const ProcessStepItem: React.FC<ProcessStepItemProps> = ({ step, idx, scaleY, targetFraction, stepColor }) => {
  const activeProgress = useTransform(
    scaleY, 
    idx === 0 ? [0, 0.05] : [targetFraction - 0.08, targetFraction - 0.02], 
    idx === 0 ? [1, 1] : [0, 1],
    { clamp: true }
  );

  const backgroundColor = useTransform(activeProgress, [0, 1], ["#000000", stepColor]);
  const borderColor = useTransform(activeProgress, [0, 1], ["rgba(255, 255, 255, 0.1)", stepColor]);
  const color = useTransform(activeProgress, [0, 1], ["#ffffff", "#000000"]);
  const boxShadow = useTransform(
    activeProgress, 
    [0, 1], 
    ["0px 0px 0px rgba(0,0,0,0)", `0px 0px 30px ${stepColor}`]
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-20%" }} 
      transition={{ duration: 1, ease: premiumEase }}
      className="relative pl-16 md:pl-20 py-8 md:py-12 group transition-colors duration-500 rounded-r-2xl hover:bg-white/[0.01]"
    >
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#CCFF00] opacity-0 group-hover:opacity-[0.03] filter blur-[80px] rounded-full transition-opacity duration-700 pointer-events-none"></div>

      {/* Circle Step indicator */}
      <motion.div 
        className="step-circle step-circle-hover absolute top-8 md:top-12 left-0 md:-left-10 w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center font-mono text-lg md:text-xl transition-all duration-500 z-20 border font-bold"
        style={{
          backgroundColor,
          borderColor,
          color,
          boxShadow,
        }}
      >
        {step.id}
      </motion.div>
      
      <div className="mb-6 inline-block p-4 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#CCFF00]/30 group-hover:bg-white/10 transition-all duration-500" style={{ '--hover-accent': stepColor } as React.CSSProperties}>
        {step.icon}
      </div>
      
      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 text-white group-hover:text-white transition-colors duration-300">
        {step.title}
      </h3>
      
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
        {step.desc}
      </p>

      <div className="absolute bottom-0 right-0 left-10 md:left-20 h-px bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
    </motion.div>
  );
};

const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineCoords, setLineCoords] = useState({ top: 0, height: 0 });
  const [circleCenters, setCircleCenters] = useState<number[]>([]);
  const [scrollRange, setScrollRange] = useState({ start: 0, end: 1 });
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  
  // Track scroll progress of the steps container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress to scaleY relative to the first and last circles (clamp to 0.99 so it ends exactly at the center of the last circle)
  const scaleY = useTransform(scrollYProgress, [scrollRange.start, scrollRange.end], [0, 0.99], { clamp: true });

  useMotionValueEvent(scaleY, "change", (latest) => {
    if (circleCenters.length > 0 && lineCoords.height > 0) {
      let activeIdx = 0;
      for (let i = 0; i < circleCenters.length; i++) {
        const targetFraction = circleCenters[i] / lineCoords.height;
        if (latest >= targetFraction - 0.07) {
          activeIdx = i;
        }
      }
      setActiveStepIdx(activeIdx);
    }
  });

  useEffect(() => {
    const updateLine = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const circles = container.querySelectorAll('.step-circle');
      
      if (circles.length > 0) {
        const firstCircle = circles[0];
        const firstRect = firstCircle.getBoundingClientRect();
        const firstRadius = firstRect.height / 2;
        const firstCenter = firstRect.top + firstRadius - containerRect.top;

        const lastCircle = circles[circles.length - 1];
        const lastRect = lastCircle.getBoundingClientRect();
        const lastRadius = lastRect.height / 2;
        const lastCenter = lastRect.top + (lastRect.height / 2) - containerRect.top;

        // Start line 1.8 radii above the first circle, end slightly above the center of the last circle to prevent overflow
        const top = firstCenter - firstRadius * 1.8;
        const bottom = lastCenter - lastRadius * 0.8;
        const height = bottom - top;

        const centers: number[] = [];
        circles.forEach((circle) => {
          const rect = circle.getBoundingClientRect();
          const center = rect.top + rect.height / 2 - containerRect.top;
          // Store center offset relative to the line start (top)
          centers.push(center - top);
        });

        setLineCoords({ top, height });
        setCircleCenters(centers);

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

  // Active stage index is set directly inside the useMotionValueEvent change listener to avoid cascading state updates.

  // Renders the active stage's showcase dashboard
  const renderStickySandbox = () => {
    switch (activeStepIdx) {
      case 0: // Phase 01: Discover Map
        return (
          <motion.div
            key="discover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex flex-col justify-between p-8 bg-zinc-950 border border-white/10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 font-mono text-[9px] text-[#CCFF00] tracking-widest uppercase">
              Phase_01: Discover & Map
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <svg viewBox="0 0 200 200" className="w-full h-full max-h-[160px]">
                <line x1="100" y1="100" x2="50" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="100" y1="100" x2="150" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="100" y1="100" x2="40" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeDasharray="3 3" />

                <circle cx="100" cy="100" r="14" fill="#CCFF00" />
                <text x="100" y="103" fill="black" fontSize="7" textAnchor="middle" fontWeight="bold">IDEAS</text>

                <circle cx="50" cy="60" r="10" fill="black" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="hover:stroke-[#CCFF00] transition-colors cursor-pointer" />
                <text x="50" y="63" fill="white" fontSize="6" textAnchor="middle">Flows</text>

                <circle cx="150" cy="60" r="10" fill="black" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="hover:stroke-[#CCFF00] transition-colors cursor-pointer" />
                <text x="150" y="63" fill="white" fontSize="6" textAnchor="middle">Market</text>

                <circle cx="40" cy="130" r="10" fill="black" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="hover:stroke-[#CCFF00] transition-colors cursor-pointer" />
                <text x="40" y="133" fill="white" fontSize="6" textAnchor="middle">Scope</text>

                <circle cx="160" cy="130" r="10" fill="black" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" className="hover:stroke-[#CCFF00] transition-colors cursor-pointer" />
                <text x="160" y="133" fill="white" fontSize="6" textAnchor="middle">Tech</text>
              </svg>
            </div>
            <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-center">
              Hover nodes to trace architecture constraints
            </div>
          </motion.div>
        );

      case 1:
        return <ThemeCustomizerSandbox />;

      case 2:
        return <CompilerSandbox />;

      case 3:
        return <CDNMapSandbox />;

      default:
        return null;
    }
  };

  return (
    <section id="process" className="py-20 md:py-40 px-5 md:px-12 bg-[#050508] relative z-10 border-b border-white/5">
      <div 
        className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1.2px, transparent 1.2px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10 px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column (Sticky morphing visual dashboard) */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-40 z-10 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">METHODOLOGY</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-white">
                  How We <br/> <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: '2px #CCFF00' }}>Build.</span>
                </h2>
              </div>

              {/* Dynamic Showcase Viewport Box */}
              <div className="w-full aspect-[4/3] rounded-3xl bg-zinc-900/10 border border-white/5 shadow-2xl relative p-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  {renderStickySandbox()}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column (Scrolling list connected via dynamic progress line) */}
          <div 
            ref={containerRef}
            className="w-full lg:w-1/2 flex flex-col gap-12 lg:gap-24 pt-10 relative"
          >
            {/* Background continuous line */}
            <div 
              style={{ top: `${lineCoords.top}px`, height: `${lineCoords.height}px` }}
              className="absolute left-6 md:left-0 w-[2px] bg-white/10 z-0 pointer-events-none" 
            />
            
            {/* Animated active progress line */}
            <motion.div 
              style={{ 
                top: `${lineCoords.top}px`, 
                height: `${lineCoords.height}px`,
                scaleY, 
                originY: 0 
              }}
              className="absolute left-6 md:left-0 w-[2px] bg-gradient-to-b from-[#CCFF00] to-[#00F0FF] z-10 shadow-[0_0_15px_rgba(0,240,255,0.8),0_0_8px_rgba(204,255,0,0.9)] origin-top pointer-events-none"
            />

            {processSteps.map((step, idx) => {
              const targetFraction = lineCoords.height > 0 ? circleCenters[idx] / lineCoords.height : 0;
              const stepColors = ['#CCFF00', '#85F966', '#00F0FF', '#00F0FF'];
              const stepColor = stepColors[idx];

              return (
                <ProcessStepItem
                  key={step.id}
                  step={step}
                  idx={idx}
                  scaleY={scaleY}
                  targetFraction={targetFraction}
                  stepColor={stepColor}
                />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
