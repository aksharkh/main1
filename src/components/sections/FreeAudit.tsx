
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, TrendingUp, Shield, Search, CheckCircle2, ArrowUpRight, BarChart3, Smartphone, Globe } from 'lucide-react';
import { premiumEase } from '../../lib/utils';

const AUDIT_ITEMS = [
  { icon: <TrendingUp className="w-6 h-6" />, label: 'SEO & Rankings', desc: 'Find missing keywords & ranking gaps' },
  { icon: <Zap className="w-6 h-6" />, label: 'Page Speed', desc: 'Core Web Vitals & load time report' },
  { icon: <Shield className="w-6 h-6" />, label: 'Security Audit', desc: 'HTTPS, vulnerabilities & SSL check' },
  { icon: <BarChart3 className="w-6 h-6" />, label: 'Conversion CRO', desc: 'CTA clarity & funnel bottlenecks' },
  { icon: <Smartphone className="w-6 h-6" />, label: 'Mobile UX', desc: 'Responsiveness across all devices' },
  { icon: <Globe className="w-6 h-6" />, label: 'Competitor Gap', desc: 'What rivals do that you don\'t' },
];

const WHAT_WE_CHECK = ['Core Web Vitals score', 'On-page SEO gaps', 'Broken links & 404s', 'CTA & UX bottlenecks', 'Accessibility issues', 'Mobile performance'];

const FreeAudit: React.FC = () => {
  const [url, setUrl] = useState('');
  const [focused, setFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      const message = `Hi Axoraa! I'd like a FREE website audit for: ${url.trim()}`;
      const waUrl = `https://wa.me/919353443100?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <section
      id="audit"
      className="py-24 md:py-40 px-6 md:px-12 relative z-10 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)' }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(204,255,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large glowing orb */}
      <div className="absolute -top-32 right-0 w-[700px] h-[700px] bg-[#CCFF00]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#CCFF00]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="inline-flex items-center gap-2 border border-[#CCFF00]/40 text-[#CCFF00] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />
            Free · No signup · Results in 24h
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        {/* Hero headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: premiumEase }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter uppercase leading-[0.85] text-white mb-6">
            Is Your Site
            <br />
            <span
              className="font-serif italic text-transparent normal-case"
              style={{ WebkitTextStroke: '2px #CCFF00' }}
            >
              Losing Money?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Enter your URL and get a <strong className="text-white">detailed, actionable audit</strong> — covering SEO, speed, UX, and conversion — completely free.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

          {/* Left: Audit items */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="flex flex-col gap-4"
          >
            {AUDIT_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: premiumEase }}
                className="group flex items-center gap-5 p-5 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#CCFF00]/30 transition-all duration-400 cursor-default"
              >
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] shrink-0 group-hover:bg-[#CCFF00]/20 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm tracking-wide">{item.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{item.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-700 group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: premiumEase }}
          >
            <div className="h-full rounded-3xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #141414 0%, #101010 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/60 to-transparent" />

              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/[0.06] rounded-full blur-[80px] pointer-events-none" />

              <div className="p-8 md:p-10 relative z-10">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card header */}
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#CCFF00] rounded-xl flex items-center justify-center shrink-0">
                            <Search className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold uppercase tracking-tight text-white">Get Your Free Audit</h3>
                            <p className="text-gray-500 text-xs">Delivered within 24 hours</p>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          We manually analyse your site and deliver a detailed PDF report with exact, prioritised fixes.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* URL input */}
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
                              id="audit-url-input"
                              type="url"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                              onFocus={() => setFocused(true)}
                              onBlur={() => setFocused(false)}
                              placeholder="https://yourwebsite.com"
                              required
                              className="w-full bg-white/[0.04] pl-11 pr-5 py-4 text-white placeholder-gray-600 focus:outline-none text-sm transition-all duration-300"
                            />
                          </div>
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          id="audit-submit-btn"
                          className="group w-full flex items-center justify-center gap-3 bg-[#CCFF00] text-black py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(204,255,0,0.25)] hover:shadow-[0_0_60px_rgba(204,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          Analyse My Website — It's Free
                        </button>

                        <p className="text-center text-xs text-gray-600">
                          Sent via WhatsApp · Reply within 24h · Bengaluru team
                        </p>
                      </form>

                      {/* Divider */}
                      <div className="my-8 border-t border-white/8" />

                      {/* What we check */}
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-600 mb-4">What's included</p>
                        <div className="grid grid-cols-2 gap-2.5">
                          {WHAT_WE_CHECK.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: premiumEase }}
                      className="flex flex-col items-center justify-center text-center py-16 gap-6"
                    >
                      {/* Success icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                        className="relative"
                      >
                        <div className="w-24 h-24 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(204,255,0,0.5)]">
                          <CheckCircle2 className="w-12 h-12 text-black" strokeWidth={2.5} />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-[#CCFF00]/30 animate-ping" />
                      </motion.div>

                      <div>
                        <h3 className="text-3xl font-bold uppercase tracking-tight text-white mb-3">
                          Request Sent! 🎉
                        </h3>
                        <p className="text-gray-400 max-w-xs leading-relaxed text-sm">
                          WhatsApp opened with your request. Our team will send you a full audit report within <strong className="text-white">24 hours</strong>.
                        </p>
                      </div>

                      <button
                        onClick={() => { setSubmitted(false); setUrl(''); }}
                        className="text-[#CCFF00] text-sm font-medium hover:text-white transition-colors underline underline-offset-4"
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

        {/* Bottom social proof strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-t border-white/8"
        >
          {[
            { value: '17+', label: 'Projects audited' },
            { value: '24h', label: 'Average response time' },
            { value: '100%', label: 'Free, no strings' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <div className="hidden md:block w-px h-8 bg-white/10" />}
              <div className="text-center">
                <p className="text-2xl font-bold text-[#CCFF00] tracking-tighter">{stat.value}</p>
                <p className="text-xs font-mono uppercase tracking-widest text-gray-600 mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FreeAudit;
