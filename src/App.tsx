
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
      <ContactWidget />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route path="/team" element={<TeamPage mousePosition={mousePosition} />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
