
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const [loading, setLoading] = useState(true);
  const [preloaderUnmounted, setPreloaderUnmounted] = useState(false);
  
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
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-hidden">
      <Analytics />
      
      <AnimatePresence mode="wait" onExitComplete={() => setPreloaderUnmounted(true)}>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <MobileWarning />

      {/* Screen Edge Bezel Frames */}
      <div className="fixed top-0 left-0 right-0 h-3 md:h-5 bg-[#0a0a0a] z-[100] pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-3 md:h-5 bg-[#0a0a0a] z-[100] pointer-events-none" />
      <div className="fixed top-0 bottom-0 left-0 w-3 md:w-5 bg-[#0a0a0a] z-[100] pointer-events-none" />
      <div className="fixed top-0 bottom-0 right-0 w-3 md:w-5 bg-[#0a0a0a] z-[100] pointer-events-none" />

      {/* SVG Screen Corners Masks */}
      <svg className="fixed top-3 md:top-5 left-3 md:left-5 text-[#0a0a0a] pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className="fixed top-3 md:top-5 right-3 md:right-5 text-[#0a0a0a] pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 rotate-90" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className="fixed bottom-3 md:bottom-5 left-3 md:left-5 text-[#0a0a0a] pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 -rotate-90" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>
      <svg className="fixed bottom-3 md:bottom-5 right-3 md:right-5 text-[#0a0a0a] pointer-events-none z-[100] w-8 h-8 md:w-12 md:h-12 rotate-180" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C22.4 0 0 22.4 0 50V0H50Z" fill="currentColor" />
      </svg>

      <CustomCursor globalMouse={mousePosition} isHovering={isHoveringGlobal} />
      <CinematicNoise />
      <GlowOrb mousePosition={mousePosition} />
      {preloaderUnmounted && <ScrollProgress />}
      <ContactWidget />

      {/* Centered screen content wrapper (removes outer width constraint to let section backgrounds span full bezel-width) */}
      <div className="w-full min-h-screen bg-black relative flex flex-col pt-3 md:pt-5 pb-3 md:pb-5 px-3 md:px-5">
        <Navbar />

        <main className="flex-1 w-full relative">
          <Routes>
            <Route path="/" element={<Home loading={!preloaderUnmounted} />} />
            <Route path="/team" element={<TeamPage mousePosition={mousePosition} />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
