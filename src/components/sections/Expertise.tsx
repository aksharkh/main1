import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu, Layers } from 'lucide-react';
import ScrambleText from '../ui/ScrambleText';
import { premiumEase } from '../../lib/utils';

export const Expertise: React.FC = () => {
  // Frontend Card state
  const [rotate, setRotate] = useState({ x: 15, y: -15 });
  const [isHoveredFrontend, setIsHoveredFrontend] = useState(false);
  const [autoRotate, setAutoRotate] = useState({ x: 15, y: -15 });

  // 1. Auto-rotation loop for Frontend 3D Sandbox
  useEffect(() => {
    if (isHoveredFrontend) return;
    let frame: number;
    const start = performance.now();
    const animate = (time: number) => {
      const elapsed = time - start;
      const angleX = 15 + Math.sin(elapsed * 0.001) * 20;
      const angleY = -15 + Math.cos(elapsed * 0.001) * 25;
      setAutoRotate({ x: angleX, y: angleY });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHoveredFrontend]);
  
  const handleFrontendMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 40,
      y: (x / (rect.width / 2)) * 40,
    });
  };

  const handleFrontendMouseLeave = () => {
    setIsHoveredFrontend(false);
    setRotate({ x: 15, y: -15 });
  };

  // Backend Card state
  const [logs, setLogs] = useState<string[]>([
    "Sys initialized. Node cluster online.",
    "DB connection established (primary).",
    "API gateway listening on port 8080."
  ]);
  const [isPinging, setIsPinging] = useState(false);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setLogs((prev) => [...prev.slice(-5), `[${time}] ${msg}`]);
  };

  // 2. Auto-log metrics effect for Backend Console
  useEffect(() => {
    const activities = [
      "HEALTH: Cluster status: 100% healthy",
      "METRICS: CPU: 12% | RAM: 29% | Disk: 15%",
      "SYNC: cron-sync completed - 0 mutations",
      "API: GET /api/v1/health - 200 OK - 2.8ms",
      "CACHE: Recompiling cache metrics... Ready",
      "DB: Transaction logs rotated successfully",
      "AUDIT: Redis Cache hit ratio: 99.8%"
    ];
    const interval = setInterval(() => {
      const randomMsg = activities[Math.floor(Math.random() * activities.length)];
      addLog(randomMsg);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const triggerApi = () => {
    if (isPinging) return;
    setIsPinging(true);
    addLog("PING -> GET /api/v1/metrics");
    setTimeout(() => {
      addLog("DB QUERY: SELECT SUM(value) FROM ledger - 2.1ms");
    }, 200);
    setTimeout(() => {
      addLog("REDIS: Cache hit for ledger_sum");
    }, 450);
    setTimeout(() => {
      addLog("RESPONSE: 200 OK - Latency: 4ms");
      setIsPinging(false);
    }, 700);
  };

  const triggerDbHeavy = () => {
    addLog("WARNING: Running database diagnostic audit...");
    setTimeout(() => {
      addLog("DB: Compacting transaction shards... Done.");
      addLog("DB: Rebuilding indices... Done.");
      addLog("AUDIT: 0 leaks. Cache hit ratio 99.8%.");
    }, 400);
  };

  // Cloud Card state
  const [trafficActive, setTrafficActive] = useState(false);

  const simulateTraffic = () => {
    if (trafficActive) return;
    setTrafficActive(true);
    setTimeout(() => setTrafficActive(false), 2500);
  };

  // 3. Auto-traffic effect for Cloud Infrastructure
  useEffect(() => {
    simulateTraffic();
    const interval = setInterval(() => {
      simulateTraffic();
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="expertise" className="py-24 md:py-48 px-6 md:px-12 relative z-10 bg-[#020202] text-white overflow-hidden border-b border-white/5">
      {/* Rotating Tech Radar Backdrop */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 -top-40 w-[600px] h-[600px] opacity-[0.03] text-[#CCFF00] pointer-events-none z-0 select-none"
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="30" />
          <line x1="10" y1="100" x2="190" y2="100" strokeDasharray="1 3" />
          <line x1="100" y1="10" x2="100" y2="190" strokeDasharray="1 3" />
          <line x1="36.36" y1="36.36" x2="163.64" y2="163.64" />
          <line x1="36.36" y1="163.64" x2="163.64" y2="36.36" />
        </svg>
      </motion.div>

      {/* Dot matrix grid backdrop */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.18] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1.2px, transparent 1.2px)', 
          backgroundSize: '36px 36px' 
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 text-left">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">CAPABILITIES</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Engineering <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: '2px #CCFF00' }}>Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            We don't build generic websites. We engineer high-performance systems, custom browser experiences, and automated cloud architectures.
          </p>
        </div>

        {/* 3-Column Interactive Sandbox Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Frontend Engineering */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex flex-col rounded-3xl border border-white/10 bg-zinc-950/40 p-8 hover:border-[#CCFF00]/20 transition-colors duration-500 h-full group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight"><ScrambleText text="Frontend" /></h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We push browser limits. Using React, Vite, and custom shaders, we build buttery-smooth, interactive interfaces.
            </p>

            {/* Interactive Sandbox: CSS 3D Rotate Cube */}
            <div 
              onMouseEnter={() => setIsHoveredFrontend(true)}
              onMouseMove={handleFrontendMouseMove}
              onMouseLeave={handleFrontendMouseLeave}
              className="mt-auto aspect-square rounded-2xl bg-black border border-white/5 flex flex-col items-center justify-center relative overflow-hidden p-6 cursor-grab active:cursor-grabbing shadow-inner group-hover:border-white/10 transition-colors"
            >
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              {/* Monospace coordinates HUD */}
              <div className="absolute top-3 left-4 font-mono text-[9px] text-gray-500 uppercase tracking-widest pointer-events-none">
                3D_ROTATE: RX:{Math.round(isHoveredFrontend ? rotate.x : autoRotate.x)}° RY:{Math.round(isHoveredFrontend ? rotate.y : autoRotate.y)}°
              </div>
              <div className="absolute bottom-3 left-4 font-mono text-[9px] text-[#CCFF00] uppercase tracking-widest pointer-events-none animate-pulse">
                {isHoveredFrontend ? "Manual_Override" : "Auto_Rotate_Active"}
              </div>

              {/* 3D Container */}
              <div className="perspective-[400px] w-24 h-24 flex items-center justify-center">
                <div 
                  className="w-20 h-20 relative transition-transform duration-200" 
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: `rotateX(${isHoveredFrontend ? rotate.x : autoRotate.x}deg) rotateY(${isHoveredFrontend ? rotate.y : autoRotate.y}deg)`
                  }}
                >
                  {/* Cube Faces */}
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'translateZ(40px)' }} />
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'rotateY(180deg) translateZ(40px)' }} />
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'rotateY(90deg) translateZ(40px)' }} />
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'rotateY(-90deg) translateZ(40px)' }} />
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'rotateX(90deg) translateZ(40px)' }} />
                  <div className="absolute inset-0 border border-[#CCFF00]/30 bg-[#CCFF00]/5" style={{ transform: 'rotateX(-90deg) translateZ(40px)' }} />
                  
                  {/* Inner glowing sphere node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#CCFF00] shadow-[0_0_15px_#CCFF00]" style={{ transform: 'translateZ(0px)' }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Backend Architecture */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
            className="flex flex-col rounded-3xl border border-white/10 bg-zinc-950/40 p-8 hover:border-[#CCFF00]/20 transition-colors duration-500 h-full group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
                <Database size={24} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight"><ScrambleText text="Backend" /></h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              High-throughput systems. We write clean, optimized microservices using Java and Node.js that handle massive traffic effortlessly.
            </p>

            {/* Interactive Sandbox: Mock Log Terminal */}
            <div className="mt-auto aspect-square rounded-2xl bg-black border border-white/5 flex flex-col p-4 font-mono text-[10px] relative overflow-hidden group-hover:border-white/10 transition-colors">
              {/* Terminal Title Bar */}
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                </div>
                <div className="text-[8px] text-gray-500 uppercase tracking-widest flex items-center gap-1">
                  <Terminal size={10} /> console.sh
                </div>
              </div>

              {/* Terminal Logs Output */}
              <div className="flex-1 flex flex-col gap-1 text-gray-400 select-all overflow-y-auto mb-4">
                {logs.map((log, i) => (
                  <div key={i} className={log.includes("PING") ? "text-[#CCFF00]" : log.includes("WARNING") ? "text-yellow-400" : "text-zinc-400"}>
                    {log}
                  </div>
                ))}
              </div>

              {/* Interactive buttons row */}
              <div className="flex gap-2">
                <button 
                  onClick={triggerApi}
                  disabled={isPinging}
                  className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] text-[9px] font-bold uppercase tracking-wider text-white transition-all disabled:opacity-50"
                >
                  Ping API
                </button>
                <button 
                  onClick={triggerDbHeavy}
                  className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] text-[9px] font-bold uppercase tracking-wider text-white transition-all"
                >
                  DB Diagnostic
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Cloud Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            className="flex flex-col rounded-3xl border border-white/10 bg-zinc-950/40 p-8 hover:border-[#CCFF00]/20 transition-colors duration-500 h-full group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
                <Layers size={24} />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight"><ScrambleText text="Infrastructure" /></h3>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Zero-downtime, self-healing deployments. We leverage AWS, Docker, and CDNs for secure, blazing-fast hosting.
            </p>

            {/* Interactive Sandbox: Server Network Topology Node Graph */}
            <div className="mt-auto aspect-square rounded-2xl bg-black border border-white/5 flex flex-col p-4 relative overflow-hidden group-hover:border-white/10 transition-colors justify-between">
              
              {/* Canvas Visual SVG */}
              <div className="w-full flex-1 flex items-center justify-center min-h-[140px] relative">
                <svg viewBox="0 0 240 140" className="w-full h-full">
                  {/* Connection lines */}
                  <line x1="30" y1="70" x2="90" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="90" y1="70" x2="150" y2="35" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="90" y1="70" x2="150" y2="105" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="150" y1="35" x2="210" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                  <line x1="150" y1="105" x2="210" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />

                  {/* Pulsing traffic overlays */}
                  {trafficActive && (
                    <>
                      <path d="M 30 70 L 90 70 L 150 35 L 210 70" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="10 15" className="cloud-traffic-path" />
                      <path d="M 30 70 L 90 70 L 150 105 L 210 70" fill="none" stroke="#CCFF00" strokeWidth="2" strokeDasharray="10 15" className="cloud-traffic-path" />
                    </>
                  )}

                  {/* Nodes */}
                  {/* Client */}
                  <circle cx="30" cy="70" r="10" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="hover:stroke-[#CCFF00] hover:r-12 transition-all cursor-pointer" />
                  <text x="30" y="73" fill="white" fontSize="8" textAnchor="middle" fontWeight="bold">C</text>
                  
                  {/* Load Balancer */}
                  <circle cx="90" cy="70" r="12" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="hover:stroke-[#CCFF00] transition-all cursor-pointer" />
                  <text x="90" y="73" fill="#CCFF00" fontSize="8" textAnchor="middle" fontWeight="bold">LB</text>
                  
                  {/* Web Nodes */}
                  <circle cx="150" cy="35" r="10" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="hover:stroke-[#CCFF00] transition-all cursor-pointer" />
                  <text x="150" y="38" fill="white" fontSize="8" textAnchor="middle">N1</text>
                  
                  {/* Web Node 2 */}
                  <circle cx="150" cy="105" r="10" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="hover:stroke-[#CCFF00] transition-all cursor-pointer" />
                  <text x="150" y="108" fill="white" fontSize="8" textAnchor="middle">N2</text>
                  
                  {/* Database */}
                  <circle cx="210" cy="70" r="10" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="2" className="hover:stroke-[#CCFF00] transition-all cursor-pointer" />
                  <text x="210" y="73" fill="white" fontSize="8" textAnchor="middle">DB</text>
                </svg>
                <div className="absolute top-0 right-0 font-mono text-[8px] text-gray-500 uppercase tracking-widest">
                  Auto_Scale: {trafficActive ? "2_NODES" : "1_NODE"}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={simulateTraffic}
                disabled={trafficActive}
                className="w-full py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] text-[9px] font-bold uppercase tracking-wider text-white transition-all disabled:opacity-50"
              >
                {trafficActive ? "Simulating Traffic..." : "Fire Traffic Wave"}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
