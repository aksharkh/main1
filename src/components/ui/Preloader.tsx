import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { premiumEase } from '../../lib/utils';

interface PreloaderProps {
  onComplete: () => void;
}

const keywords = ["STRATEGY", "CREATIVE", "DESIGN", "ENGINEERING", "ELEVATION"];
const letters = ["A", "X", "O", "R", "A", "A"];
const randomChars = "XYZ01@#$%&*+=-!?";

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>(["_", "_", "_", "_", "_", "_"]);
  const [keywordIndex, setKeywordIndex] = useState(0);

  // Core Progress Tracker
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 1400); // Allow exit animations to complete
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  // Scramble letters based on progress
  useEffect(() => {
    let animationFrame: number;
    
    const scramble = () => {
      const currentScramble = letters.map((targetLetter, index) => {
        // As progress grows, lock in letters one by one
        const threshold = (index / letters.length) * 90;
        if (progress >= threshold) {
          return targetLetter;
        }
        // Otherwise, render a random scrambling character
        return randomChars[Math.floor(Math.random() * randomChars.length)];
      });
      
      setScrambledLetters(currentScramble);
      animationFrame = requestAnimationFrame(scramble);
    };

    animationFrame = requestAnimationFrame(scramble);
    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  // Cycle keywords slowly
  useEffect(() => {
    const keywordInterval = setInterval(() => {
      setKeywordIndex(prev => (prev + 1) % keywords.length);
    }, 400);
    return () => clearInterval(keywordInterval);
  }, []);

  // SVG liquid wipe morphing paths (full screen rectangle to thin curved line)
  const initialPath = "M0 0 L100 0 L100 100 L0 100 Z";
  const targetPath = "M0 0 L100 0 L100 0 C50 60, 50 60, 0 0 Z"; // Pulls upward with a sleek liquid curve

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Morphing Liquid SVG wipe */}
      <svg className="absolute inset-0 w-full h-full fill-black pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          initial={{ d: initialPath }}
          exit={{ 
            d: targetPath,
            transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } 
          }}
        />
      </svg>

      {/* Interactive Glowing Orb Behind Loading Text */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[400px] h-[400px] rounded-full bg-[#CCFF00] filter blur-[150px] pointer-events-none z-0"
      />

      {/* Preloader Main Interface Content */}
      <motion.div 
        exit={{ 
          opacity: 0, 
          y: -80,
          transition: { duration: 0.6, ease: premiumEase } 
        }}
        className="w-full h-full flex flex-col justify-between p-8 md:p-16 relative z-10 text-white pointer-events-auto"
      >
        {/* Top bar header */}
        <div className="flex justify-between items-center w-full font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          <div>AXORAA© Digital Agency</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping"></span>
            <span>SYSTEM INIT</span>
          </div>
        </div>

        {/* Center: Glowing Scramble Text */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="flex gap-4 md:gap-8 justify-center items-center mb-4">
            {scrambledLetters.map((char, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: premiumEase }}
                className={`text-6xl md:text-[8vw] font-black tracking-tighter uppercase font-sans ${char === letters[i] ? 'text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.4)]' : 'text-zinc-700'}`}
              >
                {char}
              </motion.span>
            ))}
          </div>
          
          {/* Active Keyword Cycler */}
          <div className="h-6 overflow-hidden relative w-full flex justify-center mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35, ease: premiumEase }}
                className="text-xs md:text-sm font-mono text-[#CCFF00] uppercase tracking-[0.25em]"
              >
                {keywords[keywordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom bar stats */}
        <div className="flex justify-between items-end w-full">
          <div className="text-zinc-500 font-mono text-xs uppercase max-w-[200px] leading-relaxed hidden sm:block">
            Elevating digital frameworks with seamless animation physics.
          </div>
          
          {/* Percent Counter */}
          <div className="text-6xl md:text-8xl font-black font-sans leading-none tracking-tighter text-white flex items-end">
            <span className="w-[100px] text-right mr-1">{progress}</span>
            <span className="text-xl md:text-2xl text-[#CCFF00] font-bold mb-1.5 md:mb-3">%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
