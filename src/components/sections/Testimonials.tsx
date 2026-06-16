import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, ArrowLeftRight, Activity, Percent, Eye } from 'lucide-react';
import { testimonials } from '../../data';
import { premiumEase } from '../../lib/utils';

const Testimonials: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const rotateVal = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  // Track slider position state (percentage 0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseLeave = () => {
    setSliderPosition(50);
  };

  // Calculate dynamic metrics based on slider position
  const fraction = sliderPosition / 100;
  const loadTime = (4.8 - 4.4 * fraction).toFixed(1);
  const conversionRate = (0.9 + 3.3 * fraction).toFixed(1);
  const bounceRate = Math.round(72 - 51 * fraction);

  return (
    <section id="testimonials" className="py-24 md:py-48 px-6 md:px-12 bg-zinc-950 text-white relative z-10 overflow-hidden border-b border-white/5">
      {/* Dot matrix backdrop */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      {/* Grid Layout Lines */}
      <div className="absolute inset-y-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ ease: premiumEase, duration: 1 }}
          className="mb-24 text-center"
        >
          <div className="flex items-center gap-3 mb-6 justify-center">
            <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">CASE STUDY</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Real Business <span className="text-[#CCFF00]">Impact</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Websites & Apps should grow your revenue, not just look pretty. Drag the UI slider below to analyze performance differences.
          </p>
        </motion.div>

        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Interactive Before/After Comparison Slider */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4 relative">
              <div className="absolute inset-0 bg-[#CCFF00] opacity-[0.03] filter blur-[100px] rounded-full z-0 pointer-events-none"></div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="w-full relative z-10"
              >
                {/* Interactive Slider Box */}
                <div 
                  ref={sliderRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="w-full aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 bg-zinc-900 cursor-ew-resize select-none shadow-2xl"
                >
                  {/* Before Redesign */}
                  <div className="absolute inset-0 w-full h-full grayscale opacity-40">
                    <div className="absolute top-4 left-4 z-20 bg-black/80 px-3.5 py-1.5 uppercase font-mono text-[9px] tracking-widest text-red-500 border border-red-500/20 backdrop-blur-md rounded-full">
                      Before (Slow UI)
                    </div>
                    {testimonial.beforeImage && (
                      <img 
                        src={testimonial.beforeImage} 
                        alt="Before redesign" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* After Redesign (cropped via clipPath) */}
                  <div 
                    className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-all duration-75"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <div className="absolute top-4 right-4 z-20 bg-[#CCFF00] px-3.5 py-1.5 uppercase font-mono text-[9px] tracking-widest text-black font-bold rounded-full">
                      After (Axoraa Eng)
                    </div>
                    {testimonial.afterImage && (
                      <img 
                        src={testimonial.afterImage} 
                        alt="After redesign" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Divider line */}
                  <div 
                    className="absolute inset-y-0 w-[2px] bg-[#CCFF00] z-20 pointer-events-none shadow-[0_0_10px_rgba(204,255,0,0.8)]"
                    style={{ left: `${sliderPosition}%` }}
                  />

                  {/* Slide indicator handle */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black border border-[#CCFF00]/50 text-[#CCFF00] flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)] z-30 pointer-events-none transition-all duration-75"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <ArrowLeftRight size={18} className="animate-pulse" />
                  </div>
                </div>

                <p className="text-center text-xs text-gray-500 font-mono mt-4 uppercase tracking-widest animate-pulse">
                  Move mouse horizontally across image to compare UI
                </p>
              </motion.div>
            </div>

            {/* Right Column: Content & Live Conversion Audit Panel */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
              <motion.div style={{ rotate: rotateVal }} className="text-[#CCFF00] mb-6 opacity-30 flex justify-start">
                <Quote size={48} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase }}
                className="text-xl md:text-2xl font-light leading-relaxed mb-6 text-gray-200"
              >
                "{testimonial.content}"
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8 border-l-4 border-[#CCFF00] pl-6"
              >
                <h4 className="text-lg font-bold uppercase tracking-widest text-white">{testimonial.clientName}</h4>
                <p className="text-gray-500 font-mono text-[10px] mt-1">{testimonial.clientRole}, {testimonial.companyName}</p>
              </motion.div>

              {/* Conversion Audit Cockpit widget */}
              <div className="border border-white/10 rounded-3xl p-6 bg-zinc-950 flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-1">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">GSC_AUDIT: Impact_Simulation</span>
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                </div>

                {/* Audit KPIs */}
                <div className="grid grid-cols-3 gap-3">
                  {/* KPI 1: Speed */}
                  <div className="p-4 rounded-2xl bg-black border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-gray-500">
                      <Activity size={14} className={parseFloat(loadTime) < 1.0 ? "text-[#CCFF00]" : "text-gray-500"} />
                      <span className="text-[8px] font-mono tracking-wider uppercase">Load_Time</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">{loadTime}s</span>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#CCFF00] transition-all duration-75" 
                        style={{ width: `${100 - (parseFloat(loadTime) / 4.8) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* KPI 2: Conversion */}
                  <div className="p-4 rounded-2xl bg-black border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-gray-500">
                      <Percent size={14} className={parseFloat(conversionRate) > 3.0 ? "text-[#CCFF00]" : "text-gray-500"} />
                      <span className="text-[8px] font-mono tracking-wider uppercase">Conversion</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">{conversionRate}%</span>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#CCFF00] transition-all duration-75" 
                        style={{ width: `${(parseFloat(conversionRate) / 4.2) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* KPI 3: Bounce Rate */}
                  <div className="p-4 rounded-2xl bg-black border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-gray-500">
                      <Eye size={14} className={bounceRate < 35 ? "text-[#CCFF00]" : "text-gray-500"} />
                      <span className="text-[8px] font-mono tracking-wider uppercase">Bounce_Rt</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">{bounceRate}%</span>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#CCFF00] transition-all duration-75" 
                        style={{ width: `${100 - (bounceRate / 72) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
