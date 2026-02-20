
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { premiumEase } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 mix-blend-difference px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none">
        <Magnetic strength={0.1}>
          <a href="#" className="text-2xl font-bold tracking-tighter pointer-events-auto hover:text-[#CCFF00] transition-colors p-2 -m-2 text-white">
            AXORAA©
          </a>
        </Magnetic>
        
        <div className="hidden md:flex gap-12 font-medium tracking-wide pointer-events-auto text-sm uppercase text-white">
          {['Work', 'Process', 'Team'].map((item) => (
            <Magnetic key={item} strength={0.3}>
              <a href={`#${item.toLowerCase()}`} className="relative group overflow-hidden block p-2 -m-2">
                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{item}</span>
                <span className="block absolute top-2 text-[#CCFF00] group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{item}</span>
              </a>
            </Magnetic>
          ))}
        </div>

        <button 
          className="pointer-events-auto md:hidden bg-white/10 p-2 rounded-full backdrop-blur-md text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="fixed inset-0 bg-[#CCFF00] text-black z-[60] flex flex-col p-6 md:px-12 py-8"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-2xl font-bold tracking-tighter">COLLECTIVE©</span>
              <button onClick={() => setMobileMenuOpen(false)} className="hover:rotate-90 transition-transform bg-black text-white p-2 rounded-full"><X size={24} /></button>
            </div>
            
            <div className="flex flex-col gap-6 text-6xl font-bold tracking-tighter">
              {['WORK', 'PROCESS', 'EXPERTISE', 'TEAM'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="hover:ml-8 hover:text-white transition-all duration-300"
                >
                  {item},
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:ml-8 transition-all mt-12 border-b-4 border-black hover:border-white inline-block w-max">HIRE US <ArrowRight className="inline w-12 h-12" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
