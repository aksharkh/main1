import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../ui/ScrollRevealText';

const Philosophy: React.FC = () => {
  return (
    <section className="py-28 md:py-56 px-6 md:px-12 relative z-10 bg-black overflow-hidden border-y border-white/5">
      {/* Premium Dot Matrix Backdrop Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      {/* Thin Geometric Column Grid lines (Architectural Awwwards aesthetic) */}
      <div className="absolute inset-x-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      {/* Floating Blurred Ambient Neon Orb */}
      <motion.div 
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-1/3 top-1/4 w-[300px] h-[300px] rounded-full bg-[#CCFF00] opacity-10 filter blur-[120px] pointer-events-none z-0"
      />

      {/* Giant Outline Background Typography */}
      <div className="absolute left-6 md:left-24 bottom-6 md:bottom-12 select-none pointer-events-none opacity-5 z-0 font-sans font-black uppercase text-[12vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>
        PHILOSOPHY
      </div>

      <div className="max-w-5xl mx-auto flex justify-center relative z-10 px-6 md:px-12">
        <div className="max-w-5xl text-center md:text-left">
          {/* Section Indicator */}
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">AXORAA STATEMENT</span>
          </div>

          <ScrollRevealText text="We refuse to build ordinary digital experiences. Our obsession with detail, motion physics, and uncompromising performance transforms ambitious brands into industry icons." />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
