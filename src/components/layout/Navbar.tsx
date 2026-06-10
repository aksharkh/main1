import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '../ui/Magnetic';
import { premiumEase } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Work', path: '/#work', isHash: true },
    { name: 'Process', path: '/#process', isHash: true },
    { name: 'Collective', path: '/team', isHash: false },
    { name: 'Pricing', path: '/pricing', isHash: false },
  ];

  const mobileNavItems = [
    { name: 'WORK', path: '/#work' },
    { name: 'PROCESS', path: '/#process' },
    { name: 'EXPERTISE', path: '/#expertise' },
    { name: 'COLLECTIVE', path: '/team' },
    { name: 'PRICING', path: '/pricing' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-40 mix-blend-difference px-6 md:px-12 py-8 flex justify-between items-center pointer-events-none">
        <Magnetic strength={0.1}>
          <Link to="/" className="text-2xl font-bold tracking-tighter pointer-events-auto hover:text-[#CCFF00] transition-colors p-2 -m-2 text-white">
            AXORAA©
          </Link>
        </Magnetic>
        
        <div className="hidden md:flex gap-12 font-medium tracking-wide pointer-events-auto text-sm uppercase text-white">
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={0.1}>
              {item.isHash ? (
                <a href={item.path} className="hover:text-[#CCFF00] transition-colors duration-300 p-2 -m-2 block">
                  {item.name}
                </a>
              ) : (
                <Link to={item.path} className="hover:text-[#CCFF00] transition-colors duration-300 p-2 -m-2 block">
                  {item.name}
                </Link>
              )}
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
              <span className="text-2xl font-bold tracking-tighter">AXORAA©</span>
              <button onClick={() => setMobileMenuOpen(false)} className="hover:rotate-90 transition-transform bg-black text-white p-2 rounded-full"><X size={24} /></button>
            </div>
            
            <div className="flex flex-col gap-6 text-6xl font-bold tracking-tighter overflow-y-auto pb-20">
              {mobileNavItems.map((item) => (
                item.path.startsWith('/#') ? (
                  <a 
                    key={item.name}
                    href={item.path} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="hover:ml-8 hover:text-white transition-all duration-300"
                  >
                    {item.name},
                  </a>
                ) : (
                  <Link 
                    key={item.name}
                    to={item.path} 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="hover:ml-8 hover:text-white transition-all duration-300"
                  >
                    {item.name},
                  </Link>
                )
              ))}
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="hover:ml-8 transition-all mt-12 border-b-4 border-black hover:border-white inline-block w-max">HIRE US <ArrowRight className="inline w-12 h-12" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
