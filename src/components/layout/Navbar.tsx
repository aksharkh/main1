
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Calendar, MessageCircle, Rocket, Target, Users, Trophy, Zap, TrendingUp, Shield, Search, CheckCircle2, ArrowUpRight, BarChart3, Smartphone, Globe } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { premiumEase } from '../../lib/utils';
import akshar from '../../assets/akshar.jpeg';

// ─── Data ────────────────────────────────────────────────────────────────────

type PanelType = 'story' | 'audit' | null;

const MILESTONES = [
  { icon: <Rocket className="w-4 h-4" />, value: '2026', label: 'Founded' },
  { icon: <Trophy className="w-4 h-4" />, value: '17+', label: 'Projects' },
  { icon: <Users className="w-4 h-4" />, value: '4', label: 'Engineers' },
  { icon: <Target className="w-4 h-4" />, value: '100%', label: 'Satisfaction' },
];

const AUDIT_ITEMS = [
  { icon: <TrendingUp className="w-5 h-5" />, label: 'SEO & Rankings', desc: 'Find missing keywords & ranking gaps' },
  { icon: <Zap className="w-5 h-5" />, label: 'Page Speed', desc: 'Core Web Vitals & load time report' },
  { icon: <Shield className="w-5 h-5" />, label: 'Security Audit', desc: 'HTTPS, vulnerabilities & SSL check' },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Conversion CRO', desc: 'CTA clarity & funnel bottlenecks' },
  { icon: <Smartphone className="w-5 h-5" />, label: 'Mobile UX', desc: 'Responsiveness across all devices' },
  { icon: <Globe className="w-5 h-5" />, label: 'Competitor Gap', desc: "What rivals do that you don't" },
];

const WHAT_WE_CHECK = ['Core Web Vitals', 'On-page SEO gaps', 'Broken links & 404s', 'CTA & UX analysis', 'Accessibility issues', 'Mobile performance'];

// ─── Story Panel ─────────────────────────────────────────────────────────────

const StoryPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [panelScrolled, setPanelScrolled] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setPanelScrolled(el.scrollTop > 50);
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
      transition={{ duration: 0.85, ease: premiumEase }}
      className="fixed inset-0 z-[70] bg-[#0a0a0a] text-white overflow-y-auto"
    >
      {/* Background accents */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#CCFF00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Close bar — scroll-aware */}
      <div
        className="sticky top-0 z-10 flex justify-between items-center px-6 md:px-12 transition-all duration-300"
        style={{
          paddingTop: panelScrolled ? '14px' : '24px',
          paddingBottom: panelScrolled ? '14px' : '24px',
          background: panelScrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: panelScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: panelScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: panelScrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: panelScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#CCFF00]">Our Story</span>
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          Close
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <X size={14} />
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: premiumEase }}
            className="w-full lg:w-2/5 shrink-0"
          >
            <div className="relative mb-8">
              <div className="w-full aspect-[3/4] max-w-[320px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={akshar}
                  alt="Akshar — Founder of Axoraa"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3">
                <p className="text-base font-bold uppercase tracking-tight">Akshar K H</p>
                <p className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest">Founder &amp; Lead Developer</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: premiumEase }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 transition-colors"
                >
                  <span className="text-[#CCFF00] mb-1.5 block">{m.icon}</span>
                  <p className="text-2xl font-bold tracking-tighter">{m.value}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-0.5">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: premiumEase }}
            className="w-full lg:w-3/5"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-10 leading-[0.9]">
              Built by{' '}
              <span className="font-serif italic text-transparent normal-case block" style={{ WebkitTextStroke: '2px white' }}>
                Builders.
              </span>
            </h1>

            <div className="flex flex-col gap-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Axoraa was born out of a simple frustration:{' '}
                <strong className="text-white font-semibold">most agencies charge a fortune for average work</strong>
                , and most freelancers lack the depth to build truly scalable products.
              </p>
              <p>
                I’m Akshar — a full-stack developer who spent years working on enterprise-grade applications at scale. In 2026, I assembled a collective of senior engineers from top companies. Our mission?{' '}
                <strong className="text-white font-semibold">Build websites and apps that actually bring business — not just look good.</strong>
              </p>
              <p>
                Every project we take is treated like our own. We embed ourselves in your business, understand your customers, and engineer digital experiences that convert visitors into revenue. Based in{' '}
                <strong className="text-white font-semibold">Bengaluru, India</strong> — working with ambitious founders worldwide.
              </p>
              <div className="p-6 rounded-2xl bg-[#CCFF00]/5 border border-[#CCFF00]/20 mt-2">
                <p className="text-white font-medium italic text-xl leading-relaxed">
                  “We don’t just write code. We engineer growth. Every pixel, every API call, every database query — designed to make your business more money.”
                </p>
                <p className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mt-4">— Akshar K H, Founder</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                onClick={onClose}
                id="story-panel-cta"
                className="flex items-center justify-center gap-2 bg-[#CCFF00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
              >
                Work With Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

// ─── Audit Panel ─────────────────────────────────────────────────────────────

function AuditPanel({ onClose }: { onClose: () => void }) {
  const [url, setUrl] = useState('');
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [panelScrolled, setPanelScrolled] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => setPanelScrolled(el.scrollTop > 50);
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      const msg = `Hi Axoraa! I'd like a FREE website audit for: ${url.trim()}`;
      window.open(`https://wa.me/919353443100?text=${encodeURIComponent(msg)}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      ref={scrollRef}
      initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
      transition={{ duration: 0.85, ease: premiumEase }}
      className="fixed inset-0 z-[70] overflow-y-auto"
      style={{ background: 'linear-gradient(135deg, #080808 0%, #0f0f0f 50%, #090909 100%)' }}
    >
      {/* Background grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(204,255,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.6) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="fixed -top-32 right-0 w-[600px] h-[600px] bg-[#CCFF00]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Close bar — scroll-aware */}
      <div
        className="sticky top-0 z-10 flex justify-between items-center px-6 md:px-12 transition-all duration-300"
        style={{
          paddingTop: panelScrolled ? '14px' : '24px',
          paddingBottom: panelScrolled ? '14px' : '24px',
          background: panelScrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: panelScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: panelScrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: panelScrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
          boxShadow: panelScrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#CCFF00]">Free Website Audit</span>
        </div>
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
        >
          Close
          <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <X size={14} />
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 text-white">

        {/* Hero headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: premiumEase }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] mb-6">
            Is Your Site
            <br />
            <span className="font-serif italic text-transparent normal-case" style={{ WebkitTextStroke: '2px #CCFF00' }}>
              Losing Money?
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Get a <strong className="text-white">free detailed audit</strong> — SEO, speed, UX, and conversion — delivered within 24 hours. No signup, no card needed.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Left: Audit items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.8, ease: premiumEase }}
            className="flex flex-col gap-3"
          >
            {AUDIT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: premiumEase }}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#CCFF00]/30 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] shrink-0 group-hover:bg-[#CCFF00]/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
              </motion.div>
            ))}

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-6 mt-4 pt-6 border-t border-white/8"
            >
              {[{ v: '17+', l: 'Audits done' }, { v: '24h', l: 'Response time' }, { v: 'Free', l: 'Always' }].map((s, i) => (
                <div key={i} className="text-center flex-1">
                  <p className="text-xl font-bold text-[#CCFF00] tracking-tighter">{s.v}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mt-0.5">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: premiumEase }}
          >
            <div
              className="rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #141414, #101010)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/60 to-transparent" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#CCFF00]/[0.06] rounded-full blur-[60px] pointer-events-none" />

              <div className="p-8 md:p-10 relative z-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#CCFF00] rounded-xl flex items-center justify-center shrink-0">
                          <Search className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold uppercase tracking-tight">Get Your Free Audit</h3>
                          <p className="text-gray-500 text-xs">Delivered within 24 hours</p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        We manually analyse your site and send a detailed PDF report with prioritised, actionable fixes.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                          <label className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2.5 block">
                            Your Website URL
                          </label>
                          <div
                            className="relative rounded-xl overflow-hidden transition-all duration-300"
                            style={{
                              border: focused ? '1px solid #CCFF00' : '1px solid rgba(255,255,255,0.12)',
                              boxShadow: focused ? '0 0 0 3px rgba(204,255,0,0.1)' : 'none',
                            }}
                          >
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                              <Globe className="w-4 h-4" />
                            </div>
                            <input
                              id="audit-panel-url-input"
                              type="url"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                              onFocus={() => setFocused(true)}
                              onBlur={() => setFocused(false)}
                              placeholder="https://yourwebsite.com"
                              required
                              className="w-full bg-white/[0.04] pl-11 pr-5 py-4 text-white placeholder-gray-600 focus:outline-none text-sm"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="audit-panel-submit-btn"
                          className="group w-full flex items-center justify-center gap-2 bg-[#CCFF00] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(204,255,0,0.25)] hover:shadow-[0_0_60px_rgba(204,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Analyse My Website — Free
                        </button>

                        <p className="text-center text-xs text-gray-600">
                          Opens WhatsApp · Reply within 24h · Bengaluru team
                        </p>
                      </form>

                      <div className="my-7 border-t border-white/8" />

                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-3">What's included</p>
                      <div className="grid grid-cols-2 gap-2">
                        {WHAT_WE_CHECK.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: premiumEase }}
                      className="flex flex-col items-center text-center py-12 gap-5"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        className="relative"
                      >
                        <div className="w-20 h-20 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(204,255,0,0.5)]">
                          <CheckCircle2 className="w-10 h-10 text-black" strokeWidth={2.5} />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-[#CCFF00]/30 animate-ping" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Request Sent! 🎉</h3>
                        <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                          WhatsApp is open. We'll send your full audit report within <strong className="text-white">24 hours</strong>.
                        </p>
                      </div>
                      <button
                        onClick={() => { setSubmitted(false); setUrl(''); }}
                        className="text-[#CCFF00] text-sm hover:text-white transition-colors underline underline-offset-4"
                      >
                        Audit another website →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SCROLL_THRESHOLD = 60;

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelType>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when any overlay is open
  useEffect(() => {
    if (mobileMenuOpen || activePanel) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, activePanel]);

  const openPanel = (panel: PanelType) => {
    setMobileMenuOpen(false);
    setActivePanel(panel);
  };

  const closePanel = () => setActivePanel(null);

  return (
    <>
      {/* ── Desktop / Mobile bar ─────────────────────────────────────────────── */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-40 pointer-events-none"
      >
        <motion.div
          layout
          transition={{ duration: 0.8, ease: premiumEase }}
          className={`mx-auto flex items-center pointer-events-auto transition-all duration-500 ${
            scrolled
              ? 'w-full px-6 md:px-12 py-3 md:py-4 justify-between bg-black md:rounded-b-[2.5rem] rounded-b-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
              : 'w-full md:w-max px-6 md:px-10 pt-5 pb-5 justify-between md:justify-center md:gap-12 bg-black md:rounded-b-[2.5rem] rounded-b-[1.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.5)]'
          }`}
        >
          <motion.div layout className="shrink-0 md:flex-1 flex justify-start">
            <Magnetic strength={0.1}>
              <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[#CCFF00] transition-colors block text-white w-max">
                AXORAA©
              </a>
            </Magnetic>
          </motion.div>

          {/* Desktop links */}
          <motion.div layout className="hidden md:flex items-center justify-center gap-6 font-medium tracking-wide text-sm uppercase text-white shrink-0">
            {['Work', 'Process', 'Team'].map((item) => (
              <Magnetic key={item} strength={0.3}>
                <a href={`#${item.toLowerCase()}`} className="relative group overflow-hidden block p-2 -m-2">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{item}</span>
                  <span className="block absolute top-2 text-[#CCFF00] group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{item}</span>
                </a>
              </Magnetic>
            ))}

            {/* Divider */}
            <div className="w-px h-4 bg-white/20" />

            {/* Our Story panel trigger */}
            <Magnetic strength={0.3}>
              <button
                id="navbar-story-btn"
                onClick={() => openPanel('story')}
                className="relative group overflow-hidden block p-2 -m-2 cursor-pointer"
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">Our Story</span>
                <span className="block absolute top-2 text-[#CCFF00] group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">Our Story</span>
              </button>
            </Magnetic>

            {/* Free Audit panel trigger */}
            <Magnetic strength={0.3}>
              <button
                id="navbar-audit-btn"
                onClick={() => openPanel('audit')}
                className="relative group overflow-hidden block p-2 -m-2 cursor-pointer"
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">Free Audit</span>
                <span className="block absolute top-2 text-[#CCFF00] group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">Free Audit</span>
              </button>
            </Magnetic>
          </motion.div>

          {/* Book Free Call CTA */}
          <motion.div layout className="hidden md:flex items-center justify-end shrink-0 md:flex-1">
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                id="navbar-book-consultation-btn"
                className="flex items-center gap-2 bg-[#CCFF00] text-black px-5 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
              >
                <Calendar size={13} />
                Book Free Call
              </a>
            </Magnetic>
          </motion.div>

          {/* Mobile hamburger */}
          <motion.div layout className="md:hidden shrink-0 flex items-center justify-end flex-1">
            <button
              className="bg-white/10 p-2 rounded-full backdrop-blur-md text-white pointer-events-auto"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* ── Mobile fullscreen menu ────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="fixed inset-0 bg-[#CCFF00] text-black z-[60] flex flex-col p-6 md:px-12 py-8"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-bold tracking-tighter">AXORAA©</span>
              <button onClick={() => setMobileMenuOpen(false)} className="hover:rotate-90 transition-transform bg-black text-white p-2 rounded-full">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-5 text-5xl font-bold tracking-tighter">
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

              {/* Panel triggers in mobile */}
              <button
                id="mobile-story-btn"
                onClick={() => openPanel('story')}
                className="text-left hover:ml-8 hover:text-white transition-all duration-300"
              >
                OUR STORY,
              </button>
              <button
                id="mobile-audit-btn"
                onClick={() => openPanel('audit')}
                className="text-left hover:ml-8 hover:text-white transition-all duration-300"
              >
                FREE AUDIT,
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:ml-8 transition-all mt-6 border-b-4 border-black hover:border-white inline-block w-max text-4xl"
              >
                BOOK FREE CALL <ArrowRight className="inline w-10 h-10" />
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Panels ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activePanel === 'story' && <StoryPanel key="story" onClose={closePanel} />}
        {activePanel === 'audit' && <AuditPanel key="audit" onClose={closePanel} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
