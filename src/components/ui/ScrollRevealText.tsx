
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealTextProps {
  text: string;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({ text }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 85%", "end 50%"]
  });
  const words = text.split(" ");

  return (
    <p ref={targetRef} className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight flex flex-wrap gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const colorProgress = useTransform(scrollYProgress, [start, end], ["#333333", "#ffffff"]);
        return (
          <motion.span key={i} style={{ color: colorProgress }}>
            {word}
          </motion.span>
        )
      })}
    </p>
  );
};

export default ScrollRevealText;
