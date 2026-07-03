import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { animate, stagger } from 'animejs';
import Magnetic from '../ui/Magnetic';
import ScrambleText from '../ui/ScrambleText';
import InteractiveStaggeredGrid from '../ui/InteractiveStaggeredGrid';
import { useLocalTime } from '../../hooks/useLocalTime';
import { premiumEase } from '../../lib/utils';

interface HeroProps {
  loading: boolean;
}

const Hero: React.FC<HeroProps> = ({ loading }) => {
  const localTime = useLocalTime();
  const { scrollYProgress } = useScroll();
  const rotateHeroElement = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // AnimeJS staggered character reveal on mount
  useEffect(() => {
    if (!loading) {
      animate('.hero-char', {
        translateY: {
          from: 120,
          to: 0
        },
        rotate: {
          from: 10,
          to: 0
        },
        opacity: {
          from: 0,
          to: 1
        },
        delay: stagger(15),
        ease: 'outExpo',
        duration: 1200
      });
    }
  }, [loading]);

  const splitText = (text: string, isItalic = false) => {
    const words = text.split(' ');
    return words.map((word, wordIdx) => (
      <span key={wordIdx} className="inline-block whitespace-nowrap">
        {word.split('').map((char, charIdx) => (
          <span 
            key={charIdx} 
            className={`hero-char inline-block opacity-0 ${isItalic ? 'font-serif italic text-transparent' : ''}`}
            style={isItalic ? { WebkitTextStroke: '2px white' } : {}}
          >
            {char}
          </span>
        ))}
        {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  return (
    <section className="min-h-screen flex flex-col justify-end pb-12 pt-28 md:pt-40 px-5 md:px-12 relative z-10 bg-transparent overflow-hidden">
      
      {/* Background Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover "
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark vignette overlay for premium contrast and readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" /> */}
        {/* Smooth fade transition into the next black section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </div>

      {/* Interactive Staggered Grid Ripple Backdrop using AnimeJS */}
      <InteractiveStaggeredGrid />

      <div className="w-full mx-auto relative z-10 px-6 md:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? -20 : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-white/20 pb-8 mb-12 text-xs md:text-sm text-gray-400 font-mono uppercase tracking-widest"
        >
          <div className="text-zinc-500">Based in<br/><span className="text-white"><ScrambleText text="Bengaluru, IN" /></span></div>
          <div className="text-zinc-500">Status<br/><span className="text-[#CCFF00] animate-pulse"><ScrambleText text="Taking Projects" /></span></div>
          <div className="hidden md:block text-zinc-500">Local Time<br/><span className="text-white flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse inline-block"></span>{localTime}</span></div>
          <div className="hidden md:block text-zinc-500 text-right">Est<br/><span className="text-white"><ScrambleText text="2026" /></span></div>
        </motion.div>
 
        <h1 className="text-[11vw] md:text-[7.5vw] lg:text-[6vw] leading-[0.85] font-bold tracking-tighter uppercase mb-8 md:mb-12 flex flex-col mix-blend-difference text-white">
          <div className="overflow-hidden py-1">
            <div className="inline-block">
              {splitText("Websites & Apps")}
            </div>
          </div>
          <div className="overflow-hidden py-1">
            <div className="inline-block">
              {splitText("That Bring")}
            </div>
          </div>
          <div className="overflow-hidden py-1">
            <div className="inline-block">
              {splitText("Business,", true)}
            </div>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 py-1">
            <div className="inline-block">
              {splitText("Not Just Beauty")}
            </div>
            <motion.div 
              style={{ rotate: rotateHeroElement }}
              className="hidden md:flex w-[8vw] h-[8vw] bg-[#CCFF00] rounded-full text-black items-center justify-center  shrink-0"
            >
              <ArrowDown className="w-1/3 h-1/3" />
            </motion.div>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mr-10">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl max-w-2xl font-light leading-snug text-gray-300"
          >
            We are a collective of senior developers building high-performance websites and apps that generate real revenue — not just pretty pixels.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.8 : 1 }} transition={{ delay: 1, duration: 0.8, ease: premiumEase }}>
            <Magnetic strength={0.2}>
              <a href="#contact" className="group flex items-center gap-6 text-lg font-bold uppercase tracking-widest p-4 mix-blend-difference text-white">
                Let's Talk 
                <span className="w-20 h-20 rounded-full border border-white flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
