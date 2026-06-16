import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ChevronDown, BarChart3, Clock, Shield, TrendingUp, Sparkles } from 'lucide-react';
import { pricingPlans } from '../../data';
import { premiumEase } from '../../lib/utils';
import TiltCard from '../ui/TiltCard';

interface ComparisonRow {
  feature: string;
  description: string;
  landing: { text: string; status: 'basic' | 'premium' | 'enterprise' | 'none' };
  custom: { text: string; status: 'basic' | 'premium' | 'enterprise' | 'none' };
  software: { text: string; status: 'basic' | 'premium' | 'enterprise' | 'none' };
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Target Use Case",
    description: "The primary business objective and functional focus of the engineered product.",
    landing: { text: "Lead Capture & Sales", status: "basic" },
    custom: { text: "Brand & High Traffic", status: "premium" },
    software: { text: "Workflows & CRM", status: "enterprise" }
  },
  {
    feature: "Page Layouts",
    description: "The number of custom-engineered pages included in the system structure.",
    landing: { text: "1 Premium Page", status: "basic" },
    custom: { text: "Up to 12 Pages", status: "premium" },
    software: { text: "Unlimited Pages", status: "enterprise" }
  },
  {
    feature: "Visual Aesthetics",
    description: "The visual style grade. Custom layouts, bespoke typography hierarchy, and creative direction.",
    landing: { text: "Modern CSS Grid", status: "basic" },
    custom: { text: "Awwwards-Grade Design", status: "premium" },
    software: { text: "Futuristic Enterprise HUD", status: "enterprise" }
  },
  {
    feature: "Motion & Interactions",
    description: "Fluid animation layer implementing bespoke timelines, physics-based triggers, and shaders.",
    landing: { text: "CSS Transitions", status: "basic" },
    custom: { text: "GSAP & Motion Timelines", status: "premium" },
    software: { text: "WebGL & Interactive Shaders", status: "enterprise" }
  },
  {
    feature: "CMS & Admin Portal",
    description: "Database integrations letting your team modify, add, or manage live pages and contents.",
    landing: { text: "Form Intake Only", status: "basic" },
    custom: { text: "Sanity / Payload CMS", status: "premium" },
    software: { text: "Custom CRM & Admin Portal", status: "enterprise" }
  },
  {
    feature: "AI & Automations",
    description: "Autonomous backend routines, API integrations, and server agents to eliminate manual operations.",
    landing: { text: "None", status: "none" },
    custom: { text: "Webhook Trigger Syncs", status: "basic" },
    software: { text: "AI Agents & Autonomous Cron", status: "enterprise" }
  },
  {
    feature: "Hosting & CDN Matrix",
    description: "High-performance edge hosting with automatic failovers and serverless global replication.",
    landing: { text: "Vercel Edge", status: "basic" },
    custom: { text: "Multi-Region Cloud CDN", status: "premium" },
    software: { text: "AWS Serverless Clusters", status: "enterprise" }
  },
  {
    feature: "Support & SLA",
    description: "Post-launch maintenance covering dependency upgrades, security updates, server monitoring, and updates.",
    landing: { text: "3 Years SLA", status: "basic" },
    custom: { text: "3 Years + CMS SLA", status: "premium" },
    software: { text: "3 Years + Dedicated SLA", status: "enterprise" }
  },
  {
    feature: "Project Delivery Time",
    description: "The time window needed to complete design sprints, engineering, debugging, and live deploy.",
    landing: { text: "5 - 7 Days", status: "basic" },
    custom: { text: "14 - 21 Days", status: "premium" },
    software: { text: "Iterative Agile Sprints", status: "enterprise" }
  }
];

const faqData = [
  { q: "What does the 3 years free maintenance include?", a: "It covers regular dependency upgrades, security updates, minor bug fixes, hosting adjustments, and performance checkups. We make sure your site stays fast and secure without any monthly fees." },
  { q: "Can we upgrade our plan later?", a: "Absolutely. Our codebases are designed to be modular. You can start with a custom website and add a dashboard, CRM database, or AI automation layer later without rewriting anything." },
  { q: "What tech stack do you use?", a: "We primarily build frontend solutions with React, Next.js, and TypeScript styled with custom CSS. For backend architectures, we use Node.js, Python, PostgreSQL, and deploy on AWS, Vercel, and Docker." },
  { q: "Are there any recurring hosting costs?", a: "We help you deploy directly to platforms like Vercel, Netlify, or AWS under your own account. Many basic plans are free or low-cost ($10-20/month), meaning you only pay the direct hosting charges—we charge no markup." },
  { q: "How do your AI integrations save business time?", a: "We engineer autonomous agents that handle document parsing, automated invoice checking, customer intake processing, and database syncing, reducing repetitive tasks from hours to seconds." },
];

const planAnalytics = {
  landing: {
    loadSpeed: "1.2s",
    speedPct: 75,
    trafficBoost: "+35%",
    roiFactor: "2.0x",
    automationLevel: "15%",
    automationDesc: "Basic Intake Webhook",
    latency: "120ms",
    performanceRating: "A-"
  },
  custom: {
    loadSpeed: "0.4s",
    speedPct: 92,
    trafficBoost: "+150%",
    roiFactor: "5.5x",
    automationLevel: "65%",
    automationDesc: "CMS Workflow Syncing",
    latency: "25ms",
    performanceRating: "A+"
  },
  software: {
    loadSpeed: "0.1s",
    speedPct: 99,
    trafficBoost: "+300%",
    roiFactor: "12.0x",
    automationLevel: "95%",
    automationDesc: "AI Agents & Cron Triggers",
    latency: "8ms",
    performanceRating: "S-Tier"
  }
};

const StatusCapsule: React.FC<{ value: { text: string; status: 'basic' | 'premium' | 'enterprise' | 'none' } }> = ({ value }) => {
  const { text, status } = value;
  
  if (status === 'none') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-zinc-600 font-mono text-[9px] uppercase tracking-wider">
        <span>Not Included</span>
      </span>
    );
  }

  if (status === 'basic') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono text-[10px] tracking-wide">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        <span>{text}</span>
      </span>
    );
  }

  if (status === 'premium') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/5 text-[#CCFF00] font-mono text-[10px] font-bold tracking-wide shadow-[0_0_12px_rgba(204,255,0,0.05)]">
        <Sparkles size={10} className="animate-pulse" />
        <span>{text}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] font-mono text-[10px] font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.08)]">
      <Zap size={10} className="animate-bounce" style={{ animationDuration: '3s' }} />
      <span>{text}</span>
    </span>
  );
};

const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'landing' | 'custom' | 'software'>('custom');
  const [mobileTab, setMobileTab] = useState<'landing' | 'custom' | 'software'>('custom');
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [openMobileRow, setOpenMobileRow] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = planAnalytics[activePlan];

  const handlePlanSelect = (id: string) => {
    setActivePlan(id as 'landing' | 'custom' | 'software');
  };

  return (
    <section id="pricing" className="py-24 md:py-40 px-6 md:px-12 bg-black text-white relative z-10 overflow-hidden border-b border-white/5">
      {/* Background grids */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="absolute inset-y-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-2.5 h-2.5 bg-[#00F0FF] rounded-full shadow-[0_0_10px_#00F0FF]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF]">PRICING MATRIX</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Investment <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: '2px #CCFF00' }}>Architecture</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            World-class engineering mapped directly to business returns. Choose a plan to calculate your system analytics below.
          </p>
        </div>

        {/* 1. Overview Plan Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => {
            const isSelected = activePlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => handlePlanSelect(plan.id)}
                className="cursor-pointer h-full transition-all duration-300"
              >
                <TiltCard>
                  <div className={`relative h-full rounded-3xl p-8 md:p-10 flex flex-col transition-all duration-500 bg-zinc-950/40 border ${
                    isSelected 
                      ? 'border-transparent glow-border-flow glow-card-shadow-active bg-zinc-900/80 scale-[1.02]' 
                      : 'border-white/10 glow-card-shadow hover:border-[#CCFF00]/40'
                  }`}>
                    
                    {plan.recommended && (
                      <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#CCFF00] text-black px-4 py-1.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest shadow-lg">
                        Recommended
                      </div>
                    )}

                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`font-mono text-xs uppercase tracking-widest ${isSelected ? 'text-[#CCFF00]' : 'text-gray-400'}`}>
                          {plan.id === 'landing' ? 'Phase_01' : plan.id === 'custom' ? 'Phase_02' : 'Phase_03'}
                        </span>
                        {isSelected && (
                          <Sparkles size={14} className="text-[#00F0FF] animate-pulse" />
                        )}
                      </div>
                      <h3 className="text-3xl font-bold uppercase tracking-tight mb-2 text-white">{plan.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed h-12">{plan.description}</p>
                    </div>

                    <div className="mb-8 flex items-end gap-3 border-b border-white/10 pb-6 mt-auto">
                      <span className="text-4xl font-bold tracking-tighter text-white">{plan.price}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-500 line-through mb-1 uppercase font-mono">{plan.originalPrice}</span>
                      )}
                    </div>

                    <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-[#CCFF00] to-[#00F0FF] text-black hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.3)]' 
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black'
                    }`}>
                      {isSelected ? 'Active Selection' : 'Select Plan'}
                    </button>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive ROI / Plan Analytics Cockpit HUD */}
        <motion.div 
          layout
          className="w-full bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden glow-card-shadow"
        >
          {/* HUD Tech Borders */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#00F0FF]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00F0FF]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00F0FF]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00F0FF]" />
          
          <div className="absolute top-4 left-6 font-mono text-[9px] text-gray-500 tracking-widest uppercase select-none">
            SPEC_HUD // COMPILER: ANALYTICS_v3.6 // ACTIVE: {activePlan.toUpperCase()}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-4 items-center">
            
            {/* HUD Left: Speed and performance diagnostic dial */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 border-r border-white/10 pr-0 lg:pr-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2">Diagnostic_Metrics</h4>
                <div className="text-3xl font-bold tracking-tight text-white uppercase">Performance Profile</div>
              </div>

              {/* Speed Progress Dial */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Page Load Speed</span>
                  <span className="text-2xl font-bold text-white font-mono">{stats.loadSpeed}</span>
                </div>
                
                <div className="w-full h-3 border border-white/10 rounded-full bg-black overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${stats.speedPct}%` }}
                    transition={{ duration: 0.8, ease: premiumEase }}
                    className="h-full bg-gradient-to-r from-[#CCFF00] to-[#00F0FF] shadow-[0_0_12px_#00F0FF]"
                  />
                </div>
                
                <div className="flex justify-between text-[9px] font-mono text-gray-500">
                  <span>Target: &lt; 2.0s</span>
                  <span>Rating: {stats.performanceRating}</span>
                </div>
              </div>

              {/* Latency HUD Row */}
              <div className="flex justify-between items-center p-4 rounded-xl bg-black border border-white/5 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#CCFF00]" />
                  <span className="text-gray-400">DNS Edge Latency</span>
                </div>
                <span className="text-[#00F0FF] font-bold">{stats.latency}</span>
              </div>
            </div>

            {/* HUD Right: ROI, Traffic & Automations */}
            <div className="col-span-1 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Box 1: Traffic Growth */}
              <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col justify-between h-[160px] relative">
                <div className="flex justify-between text-gray-500">
                  <TrendingUp size={18} className="text-[#00F0FF]" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Growth_Stat</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight mb-1">{stats.trafficBoost}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">Est. Organic Traffic Increase</p>
                </div>
              </div>

              {/* Box 2: Conversions */}
              <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col justify-between h-[160px] relative">
                <div className="flex justify-between text-gray-500">
                  <BarChart3 size={18} className="text-[#CCFF00]" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">ROI_Factor</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight mb-1">{stats.roiFactor}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">Conversion Rate Multiplier</p>
                </div>
              </div>

              {/* Box 3: Automations */}
              <div className="p-6 rounded-2xl bg-black border border-white/5 flex flex-col justify-between h-[160px] relative">
                <div className="flex justify-between text-gray-500">
                  <Shield size={18} className="text-[#00F0FF]" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Automation</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white tracking-tight mb-1">{stats.automationLevel}</div>
                  <p className="text-gray-400 text-xs leading-relaxed font-mono text-[10px] text-gray-400 truncate mb-1">{stats.automationDesc}</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 3. Detailed Comparison Matrix Table */}
        <div className="mb-28">
          <div className="mb-10 text-left">
            <div className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2">SYSTEM_SPECS // COMPARE</div>
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              System Specifications Comparison
            </h3>
            <p className="text-gray-400 text-md font-light max-w-xl">
              Tap any parameter row below to expand detailed technology stacks, architectural rationale, and engineering breakdowns.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block relative border border-white/10 rounded-3xl bg-zinc-950/20 backdrop-blur-md overflow-hidden glow-card-shadow">
            {/* Tech bracket accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30" />

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-950 font-mono text-xs uppercase tracking-wider text-gray-400 select-none">
                  <th className="p-6 font-semibold w-1/4">Capability / Spec</th>
                  
                  {/* Column 1: Basic Landing */}
                  <th className={`p-6 w-1/4 relative transition-colors duration-300 ${activePlan === 'landing' ? 'bg-zinc-900/60' : ''}`}>
                    {activePlan === 'landing' && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
                    )}
                    <span className={activePlan === 'landing' ? 'text-[#CCFF00] font-bold' : ''}>Basic Landing</span>
                  </th>
                  
                  {/* Column 2: Custom Website */}
                  <th className={`p-6 w-1/4 relative transition-colors duration-300 ${activePlan === 'custom' ? 'bg-zinc-900/60' : ''}`}>
                    {activePlan === 'custom' && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                    )}
                    <span className={activePlan === 'custom' ? 'text-[#00F0FF] font-bold' : ''}>Custom Website</span>
                  </th>
                  
                  {/* Column 3: Software & CRM */}
                  <th className={`p-6 w-1/4 relative transition-colors duration-300 ${activePlan === 'software' ? 'bg-zinc-900/60' : ''}`}>
                    {activePlan === 'software' && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                    )}
                    <span className={activePlan === 'software' ? 'text-[#00F0FF] font-bold' : ''}>Software & CRM</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => {
                  const isRowOpen = openRow === i;
                  return (
                    <React.Fragment key={i}>
                      {/* Interactive Row Header */}
                      <tr 
                        onClick={() => setOpenRow(isRowOpen ? null : i)}
                        className={`border-b border-white/5 cursor-pointer transition-all duration-300 group ${
                          isRowOpen ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'
                        }`}
                      >
                        <td className="p-6 text-white font-semibold flex items-center gap-3 select-none">
                          <motion.div
                            animate={{ rotate: isRowOpen ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-500 group-hover:text-white"
                          >
                            <ChevronDown size={14} />
                          </motion.div>
                          <span className="group-hover:text-[#CCFF00] transition-colors">{row.feature}</span>
                        </td>
                        <td className={`p-6 transition-all duration-300 ${activePlan === 'landing' ? 'bg-zinc-900/20' : ''}`}>
                          <StatusCapsule value={row.landing} />
                        </td>
                        <td className={`p-6 transition-all duration-300 ${activePlan === 'custom' ? 'bg-zinc-900/20' : ''}`}>
                          <StatusCapsule value={row.custom} />
                        </td>
                        <td className={`p-6 transition-all duration-300 ${activePlan === 'software' ? 'bg-zinc-900/20' : ''}`}>
                          <StatusCapsule value={row.software} />
                        </td>
                      </tr>
                      
                      {/* Expandable Details Row */}
                      <tr className="border-none">
                        <td colSpan={4} className="p-0">
                          <AnimatePresence initial={false}>
                            {isRowOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: premiumEase }}
                                className="overflow-hidden bg-black/60 border-b border-white/5"
                              >
                                <div className="px-12 py-6 text-sm text-gray-400 font-light leading-relaxed flex flex-col gap-2 relative">
                                  <div className="absolute top-6 left-6 w-[2px] h-3/5 bg-gradient-to-b from-[#CCFF00] to-transparent" />
                                  <div className="font-mono text-[9px] uppercase tracking-widest text-[#00F0FF] mb-1">Architectural_Scope //</div>
                                  <p className="max-w-4xl text-gray-300 pl-4">{row.description}</p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cockpit Layout */}
          <div className="block md:hidden">
            {/* Mobile Plan Selector Tabs */}
            <div className="flex border border-white/10 rounded-full p-1 bg-zinc-950 mb-6 w-full">
              {(['landing', 'custom', 'software'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMobileTab(tab)}
                  className={`flex-1 py-3 text-center text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all ${
                    mobileTab === tab 
                      ? 'bg-gradient-to-r from-[#CCFF00] to-[#00F0FF] text-black shadow-md' 
                      : 'text-gray-400 hover:text-white bg-transparent'
                  }`}
                >
                  {tab === 'landing' ? 'Landing' : tab === 'custom' ? 'Custom' : 'CRM/App'}
                </button>
              ))}
            </div>

            {/* Mobile specs card */}
            <div className="border border-white/10 rounded-3xl p-6 bg-zinc-950/40 glow-card-shadow flex flex-col gap-4 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00F0FF]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00F0FF]" />
              
              <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest mb-2 border-b border-white/5 pb-2">
                active_view: spec_matrix // {mobileTab.toUpperCase()}
              </div>

              {comparisonData.map((row, i) => {
                const isMobileOpen = openMobileRow === i;
                const value = mobileTab === 'landing' ? row.landing : mobileTab === 'custom' ? row.custom : row.software;

                return (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-none last:pb-0">
                    <div 
                      onClick={() => setOpenMobileRow(isMobileOpen ? null : i)}
                      className="flex justify-between items-center cursor-pointer py-1 text-sm text-white hover:text-[#CCFF00] transition-colors"
                    >
                      <span className="font-medium flex items-center gap-1.5">
                        <motion.div animate={{ rotate: isMobileOpen ? 90 : 0 }} className="text-zinc-600">
                          <ChevronDown size={12} />
                        </motion.div>
                        {row.feature}
                      </span>
                      <StatusCapsule value={value} />
                    </div>

                    <AnimatePresence initial={false}>
                      {isMobileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-2"
                        >
                          <p className="text-[11px] text-gray-400 font-light leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5">
                            {row.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4. Interactive FAQs Accordion */}
        <div>
          <div className="mb-12 text-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Zap size={16} className="text-[#CCFF00]" />
              <h3 className="text-3xl font-bold uppercase tracking-tight text-white">Frequently Asked Questions</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">Get answers to critical delivery questions and technical workflows.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {faqData.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-white/10 rounded-2xl bg-zinc-950/40 overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-white hover:text-[#CCFF00] transition-colors"
                  >
                    <span className="text-md font-semibold tracking-tight">{item.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: premiumEase }}
                      className="text-[#00F0FF] shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: premiumEase }}
                      >
                        <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
