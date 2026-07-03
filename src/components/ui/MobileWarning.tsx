import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor } from 'lucide-react';

const MobileWarning: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const [showWarning, setShowWarning] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', checkMobile);
    
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isMobile && showWarning) {
      timer = setTimeout(() => {
        setShowWarning(false);
      }, 2000);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (timer) clearTimeout(timer);
    };
  }, [isMobile, showWarning]);

  return (
    <AnimatePresence>
      {isMobile && showWarning && (
        <motion.div 
          initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
          exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/60 px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-zinc-900 border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 max-w-sm"
          >
            <div className="w-16 h-16 bg-[#CCFF00] rounded-full flex items-center justify-center text-black mb-2 animate-bounce">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-white">Desktop Recommended</h3>
            <p className="text-gray-400 text-sm font-light">
              Please use a laptop or desktop computer to see the best experience of this website. It looks best on larger screens.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileWarning;
