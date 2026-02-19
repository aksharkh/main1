
import React from 'react';
import { motion } from 'framer-motion';

const SparkleIcon: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18M3 12h18M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"/>
  </svg>
);

const Marquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#CCFF00] py-5 border-y border-black z-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        <div className="flex items-center text-black font-bold text-3xl md:text-5xl tracking-tighter uppercase">
          <span className="mx-8">AVAILABLE FOR FREELANCE</span> <SparkleIcon />
          <span className="mx-8">AWARD WINNING COLLECTIVE</span> <SparkleIcon />
          <span className="mx-8">AVAILABLE FOR FREELANCE</span> <SparkleIcon />
          <span className="mx-8">AWARD WINNING COLLECTIVE</span> <SparkleIcon />
          <span className="mx-8">AVAILABLE FOR FREELANCE</span> <SparkleIcon />
          <span className="mx-8">AWARD WINNING COLLECTIVE</span> <SparkleIcon />
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
