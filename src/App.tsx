import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import GlowOrb from './components/ui/GlowOrb';
import MobileWarning from './components/ui/MobileWarning';
import CinematicNoise from './components/ui/CinematicNoise';
import ScrollProgress from './components/ui/ScrollProgress';
import ContactWidget from './components/ui/ContactWidget';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import PricingPage from './pages/PricingPage';
import Footer from './components/layout/Footer';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasRun = sessionStorage.getItem('preloader-run');
      if (hasRun) return false;
    }
    return true;
  });
  const [preloaderUnmounted, setPreloaderUnmounted] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasRun = sessionStorage.getItem('preloader-run');
      if (hasRun) return true;
    }
    return false;
  });
  const { pathname, hash } = useLocation();

  // Memoize preloader completion to prevent inline function recreation causing preloader resets on mousemove
  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    sessionStorage.setItem('preloader-run', 'true');
  }, []);

  // Scroll to hash or top on route change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  // Screen bezel color tracking (matches navbar)
  const [isDarkBg, setIsDarkBg] = useState(true);

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

      if (pathname === '/team' || pathname === '/pricing') {
        setIsDarkBg(true);
        return;
      }
      if (window.scrollY < 300) {
        setIsDarkBg(false);
        return;
      }
      
      const workSection = document.getElementById('work');
      if (workSection) {
        const rect = workSection.getBoundingClientRect();
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
  }, [pathname]);
  
  // Global Mouse Tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringGlobal, setIsHoveringGlobal] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHoveringGlobal(!!(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')));
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-clip">
      <Analytics />
      <SpeedInsights/>
      
      <AnimatePresence mode="wait" onExitComplete={() => setPreloaderUnmounted(true)}>
        {loading && <Preloader key="preloader" onComplete={handlePreloaderComplete} />}
      </AnimatePresence>

      <MobileWarning />

      {/* Screen Edge Bezel Frames */}
      <div className={`fixed top-0 left-0 right-0 h-3 md:h-5 z-[100] pointer-events-none transition-colors duration-500 ${isDarkBg ? 'bg-white' : 'bg-[#0a0a0a]'}`} />
      <div className={`fixed bottom-0 left-0 right-0 h-3 md:h-5 z-[100] pointer-events-none transition-colors duration-500 ${isDarkBg ? 'bg-white' : 'bg-[#0a0a0a]'}`} />
      <div className={`fixed top-0 bottom-0 left-0 w-3 md:w-5 z-[100] pointer-events-none transition-colors duration-500 ${isDarkBg ? 'bg-white' : 'bg-[#0a0a0a]'}`} />
      <div className={`fixed top-0 bottom-0 right-0 w-3 md:w-5 z-[100] pointer-events-none transition-colors duration-500 ${isDarkBg ? 'bg-white' : 'bg-[#0a0a0a]'}`} />

      {/* SVG Screen Corners Masks */}
      <svg className={`fixed top-3 md:top-5 left-3 md:left-5 pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-[#0a0a0a]'}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className={`fixed top-3 md:top-5 right-3 md:right-5 pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 rotate-90 transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-[#0a0a0a]'}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className={`fixed bottom-3 md:bottom-5 left-3 md:left-5 pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 -rotate-90 transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-[#0a0a0a]'}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className={`fixed bottom-3 md:bottom-5 right-3 md:right-5 pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 rotate-180 transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-[#0a0a0a]'}`} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>

      <CustomCursor globalMouse={mousePosition} isHovering={isHoveringGlobal} />
      <CinematicNoise />
      <GlowOrb mousePosition={mousePosition} />
      {preloaderUnmounted && <ScrollProgress />}
      <ContactWidget />

      {/* Centered screen content wrapper (removes outer width constraint to let section backgrounds span full bezel-width, only mounts after preloader unmounts) */}
      {preloaderUnmounted && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full min-h-screen bg-black relative flex flex-col pt-3 md:pt-5 pb-3 md:pb-5 px-3 md:px-5"
        >
          <Navbar />

          <main className="flex-1 w-full relative">
            <Routes>
              <Route path="/" element={<Home loading={!preloaderUnmounted} />} />
              <Route path="/team" element={<TeamPage mousePosition={mousePosition} />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
