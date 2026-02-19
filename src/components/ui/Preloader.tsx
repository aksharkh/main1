
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { premiumEase } from '../../lib/utils';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div 
      exit={{ y: "-100%" }} 
      transition={{ duration: 1.2, ease: premiumEase }}
      className="fixed inset-0 z-[200] bg-[#CCFF00] flex flex-col justify-end p-6 md:p-12 overflow-hidden"
    >
      <div className="flex justify-between items-end">
        <div className="text-black text-sm md:text-xl font-bold uppercase tracking-widest max-w-xs">
          Loading the Collective Experience
        </div>
        <div className="text-[25vw] md:text-[20vw] font-bold text-black leading-[0.75] tracking-tighter">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
