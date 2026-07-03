import React from 'react';
import { motion } from 'framer-motion';
import ScrollRevealText from '../ui/ScrollRevealText';

const Philosophy: React.FC = () => {
  return (
    <section className="py-28 md:py-56 px-6 md:px-12 relative z-10 bg-[#030008] overflow-hidden border-y border-white/5">

      {/* Premium Dot Matrix Backdrop Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1.2px, transparent 1.2px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      {/* Dual Floating Ambient Glow Orbs for Space Nebula Depth */}
      <motion.div 
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-10 md:left-1/4 top-1/4 w-[280px] md:w-[350px] h-[280px] md:h-[350px] rounded-full bg-[#CCFF00] opacity-[0.07] filter blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          x: [0, -70, 70, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute right-10 md:right-1/4 bottom-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-[#00F0FF] opacity-[0.05] filter blur-[130px] pointer-events-none z-0"
      />

      {/* Giant Outline Background Typography */}
      <div className="flex justify-center items-center  select-none pointer-events-none opacity-50 z-0 font-sans font-black uppercase text-[12vw] leading-none tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px white' }}>
        PHILOSOPHY
      </div>

      <div className="max-w-5xl mx-auto flex justify-center relative z-10 px-6 md:px-12 mt-12">
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
