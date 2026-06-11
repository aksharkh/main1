import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const fullText = "AXORAA";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        // Pause briefly after typing is complete, then trigger unmount
        setTimeout(onComplete, 600);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="text-center font-mono">
        <h1 className="text-4xl md:text-7xl font-bold tracking-[0.2em] text-white">
          {displayedText}
          <span className={`text-[#CCFF00] font-normal transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            |
          </span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Preloader;
