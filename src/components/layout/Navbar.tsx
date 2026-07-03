import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from '../ui/Magnetic';
import { premiumEase } from '../../lib/utils';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    const checkBg = () => {
      // Footer Section (#contact) should be black (on all pages)
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= 60) {
          setIsDarkBg(false);
          return;
        }
      }

      // If we are on team or pricing page, they are dark backgrounds
      if (location.pathname === '/team' || location.pathname === '/pricing') {
        setIsDarkBg(true);
        return;
      }
      
      // Section 1 (Hero) should be black
      if (window.scrollY < 300) {
        setIsDarkBg(false);
        return;
      }
      
      const workSection = document.getElementById('work');
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        // If the work section is at the top of viewport (covering y = 60px), it's a light background
        if (rect.top <= 60 && rect.bottom >= 60) {
          setIsDarkBg(false);
          return;
        }
      }
      setIsDarkBg(true);
    };

    checkBg();
    window.addEventListener('scroll', checkBg);
    window.addEventListener('resize', checkBg);
    return () => {
      window.removeEventListener('scroll', checkBg);
      window.removeEventListener('resize', checkBg);
    };
  }, [location.pathname]);

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const hash = path.split('#')[1];
    
    if (location.pathname === '/') {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-3 md:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] max-w-5xl z-50 rounded-b-2xl md:rounded-b-[2.5rem] shadow-2xl flex justify-between items-center px-6 md:px-12 h-16 md:h-20 border-b transition-all duration-500 ${
          isDarkBg 
            ? 'bg-white text-black border-black/5' 
            : 'bg-[#0a0a0a] text-white border-white/5'
        }`}
      >
        {/* Left negative curve */}
        <svg 
          className={`absolute top-0 -left-12 rotate-180 pointer-events-none w-12 h-12 hidden md:block transition-colors duration-500 ${
            isDarkBg ? 'text-white' : 'text-[#0a0a0a]'
          }`} 
          viewBox="0 0 50 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0C0 37.3 9 50 50 50H0V0Z" fill="currentColor" />
        </svg>

        {/* Right negative curve */}
        <svg 
          className={`absolute top-0 -right-12 rotate-90 pointer-events-none w-12 h-12 hidden md:block transition-colors duration-500 ${
            isDarkBg ? 'text-white' : 'text-[#0a0a0a]'
          }`} 
          viewBox="0 0 50 50" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0C0 37.3 9 50 50 50H0V0Z" fill="currentColor" />
        </svg>

        {/* Left: Logo */}
        <Magnetic strength={0.1}>
          <Link 
            to="/" 
            className={`flex items-center gap-2 pointer-events-auto transition-colors p-2 -m-2 ${
              isDarkBg ? 'hover:text-[#4A6B00]' : 'hover:text-[#CCFF00]'
            }`}
          >
            <span className="text-base md:text-lg font-bold tracking-tighter uppercase">AXORAA©</span>
          </Link>
        </Magnetic>
        
        {/* Center: Links */}
        <div className={`hidden md:flex gap-10 font-medium tracking-wide pointer-events-auto text-xs uppercase ${
          isDarkBg ? 'text-black' : 'text-zinc-400'
        }`}>
          {navItems.map((item) => (
            <Magnetic key={item.name} strength={0.1}>
              {item.isHash ? (
                <a 
                  href={item.path} 
                  onClick={(e) => handleHashLinkClick(e, item.path)}
                  className={`transition-colors duration-300 p-2 -m-2 block ${
                    isDarkBg ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  to={item.path} 
                  className={`transition-colors duration-300 p-2 -m-2 block ${
                    isDarkBg ? 'hover:text-black' : 'hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </Magnetic>
          ))}
        </div>

        {/* Right: Actions */}
        {/* <div className="hidden md:flex items-center gap-6 pointer-events-auto">
          <Magnetic strength={0.15}>
            <div className="flex items-center">
              <a 
                href="#contact" 
                className={`px-4 py-2 rounded-l-xl text-[10px] font-bold uppercase tracking-widest transition-colors h-9 flex items-center ${
                  isDarkBg 
                    ? 'bg-black text-white hover:bg-zinc-800' 
                    : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                Try for free
              </a>
              <span className={`w-9 h-9 rounded-r-xl flex items-center justify-center font-bold transition-colors ${
                isDarkBg ? 'bg-[#4A6B00] text-white' : 'bg-[#CCFF00] text-black'
              }`}>
                <ArrowRight size={14} className="rotate-45" />
              </span>
            </div>
          </Magnetic>
        </div> */}

        {/* Mobile menu button */}
        <button 
          className={`pointer-events-auto md:hidden p-2 rounded-full backdrop-blur-md transition-colors ${
            isDarkBg ? 'bg-black/10 text-black' : 'bg-white/10 text-white'
          }`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} />
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
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleHashLinkClick(e, item.path);
                    }}
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
