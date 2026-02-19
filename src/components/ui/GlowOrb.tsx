
import React from 'react';
import { motion, useSpring } from 'framer-motion';

interface GlowOrbProps {
  mousePosition: { x: number, y: number };
}

const GlowOrb: React.FC<GlowOrbProps> = ({ mousePosition }) => {
  const smoothX = useSpring(mousePosition.x, { damping: 40, stiffness: 40, mass: 1 });
  const smoothY = useSpring(mousePosition.y, { damping: 40, stiffness: 40, mass: 1 });

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
      className="fixed top-0 left-0 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#CCFF00] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none z-0"
    />
  );
};

export default GlowOrb;
