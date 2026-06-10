import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { expertise } from '../../data';
import AccordionItem from '../ui/AccordionItem';

const Expertise: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  return (
    <section id="expertise" className="py-24 md:py-48 px-6 md:px-12 relative z-10 bg-transparent mix-blend-difference text-white overflow-hidden">
      {/* Dot matrix grid backdrop */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#CCFF00 1px, transparent 1px)', 
          backgroundSize: '36px 36px' 
        }}
      ></div>

      {/* Grid Layout Lines */}
      <div className="absolute inset-y-0 top-0 bottom-0 max-w-[1400px] mx-auto w-full flex justify-between pointer-events-none z-0 px-6 md:px-12">
        <div className="w-px h-full bg-white/5"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5 hidden md:block"></div>
        <div className="w-px h-full bg-white/5"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Left Column (Sticky Title & Rotating Wireframe Node Graphic) */}
          <div className="md:col-span-5 flex flex-col h-full justify-between pr-0 md:pr-10">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 bg-[#CCFF00] rounded-full shadow-[0_0_10px_#CCFF00]"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#CCFF00]">CAPABILITIES</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8">
                Core <br/> <span className="text-[#CCFF00]">Focus</span>
              </h2>

              {/* Awwwards-style Interactive Rotating Tech Wireframe Graphic */}
              <div className="relative w-full aspect-square max-w-[280px] bg-zinc-950/20 border border-white/5 rounded-full flex items-center justify-center p-6 mx-auto md:mx-0 overflow-hidden shadow-2xl shadow-black/80">
                {/* Neon blurred ambient glow */}
                <div className="absolute w-24 h-24 bg-[#CCFF00]/10 filter blur-[40px] rounded-full z-0"></div>

                {/* Outer dotted circular ring (clockwise) */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border border-dotted border-white/10 rounded-full z-10"
                ></motion.div>

                {/* Middle dashed circular ring (counter-clockwise) */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border border-dashed border-[#CCFF00]/15 rounded-full z-10"
                ></motion.div>

                {/* Inner solid ring (clockwise) */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 border border-white/5 rounded-full z-10"
                ></motion.div>

                {/* Pulsing Core Tech Node */}
                <motion.div 
                  animate={{
                    scale: [0.95, 1.15, 0.95],
                    boxShadow: [
                      "0 0 10px rgba(204, 255, 0, 0.2)",
                      "0 0 25px rgba(204, 255, 0, 0.5)",
                      "0 0 10px rgba(204, 255, 0, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center z-20 text-black font-mono text-[9px] font-bold tracking-tight shadow-lg shadow-[#CCFF00]/20"
                >
                  CORE
                </motion.div>

                {/* Floating graphic wireframe radar line */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[2px] h-full bg-gradient-to-b from-transparent via-[#CCFF00]/30 to-transparent origin-center z-10"
                ></motion.div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Accordion List) */}
          <div className="md:col-span-7">
            <div className="border-t border-white/10">
              {expertise.map((item, index) => (
                <AccordionItem 
                  key={index} title={item.title} content={item.content}
                  isOpen={openAccordion === index} onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
