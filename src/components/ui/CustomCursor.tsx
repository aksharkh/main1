
import React from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  globalMouse: { x: number, y: number };
  isHovering: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ globalMouse, isHovering }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[#CCFF00] pointer-events-none z-[150] mix-blend-difference hidden md:flex items-center justify-center"
      animate={{
        x: globalMouse.x - 12,
        y: globalMouse.y - 12,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? '#CCFF00' : 'transparent',
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
