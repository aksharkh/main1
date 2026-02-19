
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  
  return (
    <div ref={ref} className="w-full h-full relative overflow-hidden bg-[#111]">
      <motion.img 
        style={{ y, scale }}
        src={src} 
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-700"
      />
    </div>
  );
};

export default ParallaxImage;
