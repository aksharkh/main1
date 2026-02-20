
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import ScrambleText from '../ui/ScrambleText';
import { useLocalTime } from '../../hooks/useLocalTime';
import { premiumEase } from '../../lib/utils';

interface HeroProps {
  loading: boolean;
}

const Hero: React.FC<HeroProps> = ({ loading }) => {
  const localTime = useLocalTime();
  const { scrollYProgress } = useScroll();
  const rotateHeroElement = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const textReveal = {
    hidden: { y: "120%", rotateZ: 5 },
    visible: { y: "0%", rotateZ: 0, transition: { duration: 1.2, ease: premiumEase } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 pt-40 px-6 md:px-12 relative z-10 bg-gradient-to-b from-transparent to-black overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' }}></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? -20 : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-white/20 pb-8 mb-12 text-xs md:text-sm text-gray-400 font-mono uppercase tracking-widest"
        >
          <div>Based in<br/><span className="text-white"><ScrambleText text="Bengaluru, IN" /></span></div>
          <div>Status<br/><span className="text-[#CCFF00] animate-pulse"><ScrambleText text="Taking Projects" /></span></div>
          <div className="hidden md:block">Local Time<br/><span className="text-white">{localTime}</span></div>
          <div className="hidden md:block text-right">Est<br/><span className="text-white"><ScrambleText text="2026" /></span></div>
        </motion.div>

        <h1 className="text-[16vw] md:text-[13vw] leading-[0.8] font-bold tracking-tighter uppercase mb-12 flex flex-col mix-blend-difference text-white">
          <div className="overflow-hidden py-2">
            <motion.div initial="hidden" animate={loading ? "hidden" : "visible"} variants={textReveal} transition={{ delay: 0.2 }}>
              Digital
            </motion.div>
          </div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-8 py-2">
            <motion.div 
              initial="hidden" animate={loading ? "hidden" : "visible"} variants={textReveal} transition={{ delay: 0.35 }}
              className="text-transparent italic font-serif origin-left"
              style={{ WebkitTextStroke: '2px white' }}
            >
              Excellence
            </motion.div>
            <motion.div 
              style={{ rotate: rotateHeroElement }}
              className="hidden md:flex w-[10vw] h-[10vw] bg-[#CCFF00] rounded-full text-black items-center justify-center -mb-4 shrink-0"
            >
              <ArrowDown className="w-1/3 h-1/3" />
            </motion.div>
          </div>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }} transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl max-w-2xl font-light leading-snug text-gray-300"
          >
            We are a collective of senior developers building high-performance websites and platforms for industry leaders.
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
