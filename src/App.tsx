
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/ui/Preloader';
import CustomCursor from './components/ui/CustomCursor';
import GlowOrb from './components/ui/GlowOrb';
import MobileWarning from './components/ui/MobileWarning';
import CinematicNoise from './components/ui/CinematicNoise';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Marquee from './components/ui/Marquee';
import Work from './components/sections/Work';
import Process from './components/sections/Process';
import Expertise from './components/sections/Expertise';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Footer from './components/layout/Footer';

import { Analytics } from '@vercel/analytics/react';

function App() {
  const [loading, setLoading] = useState(true);
  
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#CCFF00] selection:text-black relative overflow-x-hidden">
      <Analytics />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <MobileWarning />

      <CustomCursor globalMouse={mousePosition} isHovering={isHoveringGlobal} />
      <CinematicNoise />
      <GlowOrb mousePosition={mousePosition} />
      {!loading && <ScrollProgress />}

      <Navbar />

      <main>
        <Hero loading={loading} />
        <Philosophy />
        <Marquee />
        <Work />
        <Process />
        <Expertise />
        <Team mousePosition={mousePosition} />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />

      {/* Mobile Phone Screen Bezel Overlay (Top and Sides Only) */}
      <div className="fixed top-0 left-0 right-0 -bottom-10 z-[100] pointer-events-none border-x-[12px] border-t-[12px] md:border-x-[24px] md:border-t-[24px] border-b-0 border-black rounded-t-[2rem] md:rounded-t-[3.5rem] shadow-[0_0_0_30px_black]"></div>

    </div>
  );
}

export default App;
