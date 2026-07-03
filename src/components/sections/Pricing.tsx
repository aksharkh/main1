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
    feature: "Vibe Check (Design)",
    description: "Are we talking basic cookie-cutter templates, or full-on Awwwards-grade custom flexing that makes competitors cry?",
    landing: { text: "Clean Grid Layout", status: "basic" },
    custom: { text: "Awwwards-Level Custom Layouts", status: "premium" },
    software: { text: "Next-Gen 3D Interactive HUD", status: "enterprise" }
  },
  {
    feature: "Performance Speed",
    description: "Attention spans are short. Slow sites are an instant bounce. We optimize down to the millisecond.",
    landing: { text: "1.2s Load (Decent)", status: "basic" },
    custom: { text: "0.4s Page-Load (Fast AF)", status: "premium" },
    software: { text: "0.1s Instant (Supercomputer)", status: "enterprise" }
  },
  {
    feature: "Custom Pages Cooked",
    description: "How many subroutes and pages are we building from scratch? Tell your story without constraints.",
    landing: { text: "1 Premium Landing Page", status: "basic" },
    custom: { text: "Up to 12 Custom Pages", status: "premium" },
    software: { text: "Unlimited Page Routes", status: "enterprise" }
  },
  {
    feature: "Database & Backend",
    description: "Do you need actual databases, data storage, automated user systems, or just a clean contact form?",
    landing: { text: "None (Form Intake only)", status: "none" },
    custom: { text: "Headless CMS Syncing", status: "premium" },
    software: { text: "Custom CRM/HRM Portal & DB", status: "enterprise" }
  },
  {
    feature: "AI Integration Bots",
    description: "Let AI handle your boring workflows (invoice reading, lead scoring, database syncs) while you sleep.",
    landing: { text: "Not Included", status: "none" },
    custom: { text: "Zapier / Webhook Automations", status: "basic" },
    software: { text: "Autonomous Custom AI Agents", status: "enterprise" }
  },
  {
    feature: "Search Engine Conquest",
    description: "SEO settings designed to hijack search results and rank you high on Google without ad spend.",
    landing: { text: "Basic Meta Config", status: "basic" },
    custom: { text: "Advanced Rank-Boosting Plan", status: "premium" },
    software: { text: "Dominant Search Conquest", status: "enterprise" }
  },
  {
    feature: "Support & Red-Line SLA",
    description: "We monitor the servers, rotate logs, and upgrade packages. Free premium maintenance covers everything.",
    landing: { text: "3 Years Standard SLA", status: "basic" },
    custom: { text: "3 Years Priority Support SLA", status: "premium" },
    software: { text: "24/7 Dedicated Support SLA", status: "enterprise" }
  },
  {
    feature: "Internal Management",
    description: "Internal software panels built specifically to automate staff, track pipelines, and manage documents.",
    landing: { text: "Not Included", status: "none" },
    custom: { text: "Not Included", status: "none" },
    software: { text: "Full Custom HRM/CRM Portal", status: "enterprise" }
  },
  {
    feature: "Delivery Window",
    description: "How fast we code, debug, polish, and launch your high-performance platform to production.",
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
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 font-mono text-[9px] md:text-[10px] tracking-wide shrink-0">
        <span className="text-xs">✕</span>
        <span className="truncate max-w-[120px] md:max-w-none">Not Included</span>
      </span>
    );
  }

  if (status === 'basic') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 font-mono text-[9px] md:text-[10px] tracking-wide shrink-0">
        <span className="text-xs text-gray-400 font-bold">✓</span>
        <span className="truncate max-w-[120px] md:max-w-none">{text}</span>
      </span>
    );
  }

  if (status === 'premium') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 text-[#CCFF00] font-mono text-[9px] md:text-[10px] font-bold tracking-wide shadow-[0_0_12px_rgba(204,255,0,0.05)] shrink-0">
        <span className="text-xs">✨</span>
        <span className="truncate max-w-[120px] md:max-w-none">{text}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 text-[#00F0FF] font-mono text-[9px] md:text-[10px] font-bold tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.08)] shrink-0">
      <span className="text-xs">⚡</span>
      <span className="truncate max-w-[120px] md:max-w-none">{text}</span>
    </span>
  );
};

const Pricing: React.FC = () => {
  const [activePlan, setActivePlan] = useState<'landing' | 'custom' | 'software'>('custom');
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [openMobileRow, setOpenMobileRow] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stats = planAnalytics[activePlan];

  const handlePlanSelect = (id: string) => {
    setActivePlan(id as 'landing' | 'custom' | 'software');
  };

  return (
    <section id="pricing" className="py-24 md:py-40 px-6 md:px-12 bg-[#020508] text-white relative z-10 overflow-hidden border-b border-white/5">
      {/* Decorative Neon Section Corner Brackets */}
      <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[#00F0FF]/15 pointer-events-none z-0 hidden md:block" />
      <div className="absolute top-10 right-10 w-12 h-12 border-t border-r border-[#00F0FF]/15 pointer-events-none z-0 hidden md:block" />
      <div className="absolute bottom-10 left-10 w-12 h-12 border-b border-l border-[#00F0FF]/15 pointer-events-none z-0 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-[#00F0FF]/15 pointer-events-none z-0 hidden md:block" />

      {/* Background grids */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#00F0FF 1.2px, transparent 1.2px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

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

        {/* GenZ Value Prop Callout Banner */}
        <div className="mb-16 max-w-4xl mx-auto p-8 rounded-3xl border border-[#CCFF00]/25 bg-zinc-950/80 relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.02)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#CCFF00]/5 rounded-full filter blur-xl pointer-events-none" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#CCFF00]/10 text-[#CCFF00] font-mono text-[10px] uppercase tracking-wider">
                Math Check 🧠
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">One-Time Burn, Lifetime Returns</h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
                Instead of paying recurring salaries or monthly SaaS subscriptions forever, invest <span className="text-[#CCFF00] font-semibold">1 month of a single staff member's salary</span> into a high-performance digital asset. It runs 24/7/365, never takes sick leave, and builds your brand value for a lifetime. One-time investment, lifelong margins. Period.
              </p>
            </div>
            <div className="font-mono text-zinc-500 text-[10px] border border-white/5 bg-white/[0.02] p-4 rounded-xl shrink-0 self-stretch md:self-auto flex flex-col justify-center gap-1.5 min-w-[200px] text-left">
              <div className="flex justify-between"><span className="text-[#CCFF00]">1mo Staff Pay</span><span>= 1x Cost</span></div>
              <div className="flex justify-between"><span className="text-[#00F0FF]">AXORAA Site</span><span>= ∞ Returns</span></div>
              <div className="border-t border-white/10 my-1"></div>
              <div className="text-[9px] uppercase tracking-wider text-center text-zinc-400">Zero subscription fees</div>
            </div>
          </div>
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
            
            {/* HUD Left: ROI, Traffic & Automations */}
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

            {/* HUD Right: Speed and performance diagnostic dial */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:border-l border-white/10 lg:pl-12 pl-0">
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

          </div>
        </motion.div>
      </div> {/* End max-w-[1400px] main top wrapper */}

      {/* 3. Detailed Comparison Matrix Table (Alternative Background Band) */}
        <div className="py-24 bg-gradient-to-b from-[#03060c] to-[#010204] border-y border-white/5 relative z-10 my-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="mb-10 text-left">
              <div className="font-mono text-xs uppercase tracking-widest text-[#00F0FF] mb-2">SYSTEM_SPECS // COMPARE</div>
              <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
                System Specifications Comparison
              </h3>
              <p className="text-gray-400 text-md font-light max-w-xl">
                Click any plan header to toggle active selection, or tap parameter rows to expand technology breakdowns.
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
                    <th 
                      onClick={() => handlePlanSelect('landing')}
                      className={`p-6 w-1/4 relative transition-colors duration-300 cursor-pointer group hover:bg-zinc-900/40 ${activePlan === 'landing' ? 'bg-zinc-900/60' : ''}`}
                    >
                      {activePlan === 'landing' && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                      )}
                      <span className={`transition-colors flex flex-col gap-0.5 ${activePlan === 'landing' ? 'text-[#00F0FF] font-bold' : 'text-gray-400 group-hover:text-white'}`}>
                        <span>Basic Landing</span>
                        <span className="text-[8px] font-mono font-light opacity-60">Click to Select</span>
                      </span>
                    </th>
                    
                    {/* Column 2: Custom Website */}
                    <th 
                      onClick={() => handlePlanSelect('custom')}
                      className={`p-6 w-1/4 relative transition-colors duration-300 cursor-pointer group hover:bg-zinc-900/40 ${activePlan === 'custom' ? 'bg-zinc-900/60' : ''}`}
                    >
                      {activePlan === 'custom' && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
                      )}
                      <span className={`transition-colors flex flex-col gap-0.5 ${activePlan === 'custom' ? 'text-[#CCFF00] font-bold' : 'text-gray-400 group-hover:text-white'}`}>
                        <span>Custom Website</span>
                        <span className="text-[8px] font-mono font-light opacity-60">Click to Select</span>
                      </span>
                    </th>
                    
                    {/* Column 3: Software & CRM */}
                    <th 
                      onClick={() => handlePlanSelect('software')}
                      className={`p-6 w-1/4 relative transition-colors duration-300 cursor-pointer group hover:bg-zinc-900/40 ${activePlan === 'software' ? 'bg-zinc-900/60' : ''}`}
                    >
                      {activePlan === 'software' && (
                        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]" />
                      )}
                      <span className={`transition-colors flex flex-col gap-0.5 ${activePlan === 'software' ? 'text-[#00F0FF] font-bold' : 'text-gray-400 group-hover:text-white'}`}>
                        <span>Software & CRM</span>
                        <span className="text-[8px] font-mono font-light opacity-60">Click to Select</span>
                      </span>
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
                    onClick={() => handlePlanSelect(tab)}
                    className={`flex-1 py-3 text-center text-xs font-mono font-bold uppercase tracking-wider rounded-full transition-all ${
                      activePlan === tab 
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
                  active_view: spec_matrix // {activePlan.toUpperCase()}
                </div>

                {comparisonData.map((row, i) => {
                  const isMobileOpen = openMobileRow === i;
                  const value = activePlan === 'landing' ? row.landing : activePlan === 'custom' ? row.custom : row.software;

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
        </div> {/* End Alternative Background Band */}

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24 relative z-10">
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
                    className={`border rounded-2xl bg-zinc-950/40 overflow-hidden transition-all duration-300 ${
                      isOpen ? 'border-[#CCFF00]/40 shadow-[0_0_20px_rgba(204,255,0,0.05)]' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex justify-between items-center gap-4 transition-colors duration-300"
                    >
                      <span className={`text-md font-semibold tracking-tight transition-colors duration-300 ${
                        isOpen ? 'text-[#CCFF00]' : 'text-white hover:text-[#CCFF00]'
                      }`}>{item.q}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: premiumEase }}
                        className={`shrink-0 transition-colors duration-300 ${
                          isOpen ? 'text-[#CCFF00]' : 'text-[#00F0FF]'
                        }`}
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
                          <div className="px-6 pb-6 text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                            <span className="text-[#00F0FF]/90 font-light">{item.a}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Custom FAQ Question Input Form */}
            <div className="mt-16 max-w-xl mx-auto p-8 rounded-3xl border border-white/10 bg-zinc-950/40 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F0FF]/5 rounded-full filter blur-xl pointer-events-none" />
              <div className="font-mono text-[9px] text-[#00F0FF] uppercase tracking-widest mb-2 select-none">
                Got a different question?
              </div>
              <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Ask Us Anything</h4>
              <p className="text-xs text-gray-400 mb-6 font-light">Can't find what you need? Drop your question here and we'll hit you back ASAP.</p>
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  const input = (e.currentTarget.elements.namedItem('faqQuestion') as HTMLInputElement);
                  alert(`Question submitted: "${input.value}". We'll get back to you!`); 
                  input.value = '';
                }} 
                className="flex flex-col sm:flex-row gap-3 relative z-10"
              >
                <input 
                  name="faqQuestion"
                  type="text" 
                  placeholder="Type your question here..." 
                  className="flex-1 px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#CCFF00] transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="px-6 py-3.5 rounded-xl bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-colors shrink-0"
                >
                  Submit Query
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
