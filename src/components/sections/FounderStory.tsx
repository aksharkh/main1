
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, Trophy } from 'lucide-react';
import { premiumEase } from '../../lib/utils';
import akshar from '../../assets/akshar.jpeg';

const MILESTONES = [
  { icon: <Rocket className="w-5 h-5" />, value: '2026', label: 'Founded' },
  { icon: <Trophy className="w-5 h-5" />, value: '17+', label: 'Projects Delivered' },
  { icon: <Users className="w-5 h-5" />, value: '4', label: 'Expert Engineers' },
  { icon: <Target className="w-5 h-5" />, value: '100%', label: 'Client Satisfaction' },
];

const FounderStory: React.FC = () => {
  return (
    <section
      id="story"
      className="py-20 md:py-32 px-6 md:px-12 bg-zinc-950 text-white relative z-10 overflow-hidden border-y border-white/5"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CCFF00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Our Story</span>
          <div className="h-px flex-1 bg-white/10" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Founder Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: premiumEase }}
            className="w-full lg:w-2/5"
          >
            {/* Founder photo */}
            <div className="relative mb-10">
              <div className="w-full aspect-[3/4] max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={akshar}
                  alt="Akshar — Founder of Axoraa"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating name tag */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <p className="text-lg font-bold uppercase tracking-tight">Akshar K H</p>
                <p className="text-xs font-mono text-[#CCFF00] uppercase tracking-widest">Founder & Lead Developer</p>
              </div>
            </div>

            {/* Milestones grid */}
            <div className="grid grid-cols-2 gap-4">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i, ease: premiumEase }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#CCFF00]/30 transition-colors group"
                >
                  <span className="text-[#CCFF00] mb-2 block">{m.icon}</span>
                  <p className="text-3xl font-bold tracking-tighter">{m.value}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: premiumEase }}
            className="w-full lg:w-3/5 flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[0.9]">
              Built by{' '}
              <span
                className="font-serif italic text-transparent normal-case block"
                style={{ WebkitTextStroke: '2px white' }}
              >
                Builders.
              </span>
            </h2>

            <div className="flex flex-col gap-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                Axoraa was born out of a simple frustration:{' '}
                <strong className="text-white font-semibold">
                  most agencies charge a fortune for average work
                </strong>
                , and most freelancers lack the depth to build truly scalable products.
              </p>

              <p>
                I'm Akshar — a full-stack developer who spent years working on enterprise-grade
                applications at scale. In 2026, I assembled a collective of senior engineers from
                top companies. Our mission?{' '}
                <strong className="text-white font-semibold">
                  Build websites and apps that actually bring business — not just look good.
                </strong>
              </p>

              <p>
                Every project we take is treated like our own. We embed ourselves in your business,
                understand your customers, and engineer digital experiences that convert visitors
                into revenue. We're based in{' '}
                <strong className="text-white font-semibold">Bengaluru, India</strong> — working
                with ambitious founders and growth-stage companies worldwide.
              </p>

              <div className="mt-6 p-6 rounded-2xl bg-[#CCFF00]/5 border border-[#CCFF00]/20">
                <p className="text-white font-medium italic text-xl leading-relaxed">
                  "We don't just write code. We engineer growth. Every pixel, every API call,
                  every database query — designed to make your business more money."
                </p>
                <p className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mt-4">
                  — Akshar K H, Founder
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                id="story-book-consultation-btn"
                className="flex items-center justify-center gap-2 bg-[#CCFF00] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.2)]"
              >
                Work With Us
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderStory;
