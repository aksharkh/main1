
import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="fixed bottom-26 right-8 z-[100] mix-blend-difference hidden md:flex items-center justify-center cursor-pointer group"
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
       <svg width="60" height="60" viewBox="0 0 100 100" className="-rotate-90">
         <defs>
           <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#CCFF00" />
             <stop offset="100%" stopColor="#00F0FF" />
           </linearGradient>
         </defs>
         <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="2" fill="none" className="opacity-20" />
         <motion.circle 
            cx="50" cy="50" r="46" 
            stroke="url(#scrollProgressGradient)" strokeWidth="2" fill="none" 
            style={{ pathLength: scrollYProgress }} 
         />
       </svg>
       <ArrowDown className="absolute text-neon-lime group-hover:text-neon-cyan group-hover:-translate-y-1 rotate-180 w-5 h-5 transition-all duration-300" />
    </motion.div>
  );
};

export default ScrollProgress;
