
import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data';
import { premiumEase } from '../../lib/utils';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-zinc-950 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="w-full lg:w-1/3">
            <div className="sticky top-40">
              <motion.h2 
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ ease: premiumEase, duration: 1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-white"
              >
                How We <br/> <span className="font-serif italic text-transparent" style={{ WebkitTextStroke: '2px #CCFF00' }}>Build.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 1 }}
                className="text-gray-400 text-lg leading-relaxed font-light"
              >
                Our methodology is refined from years of experience in enterprise environments. We don't skip steps, and we guarantee excellence from wireframe to deployment.
              </motion.p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-24 lg:gap-40 pt-10">
            {processSteps.map((step) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1, ease: premiumEase }}
                className="relative pl-8 md:pl-16 border-l border-white/10 group"
              >
                <div className="absolute top-0 -left-6 md:-left-10 w-12 h-12 md:w-20 md:h-20 bg-black border border-white/20 rounded-full flex items-center justify-center font-mono text-xl md:text-2xl group-hover:bg-[#CCFF00] group-hover:text-black group-hover:border-[#CCFF00] transition-colors duration-500 text-white">
                  {step.id}
                </div>
                
                <div className="mb-6 inline-block p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-[#CCFF00]/50 transition-colors duration-500">
                  {step.icon}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 text-white">{step.title}</h3>
                <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
