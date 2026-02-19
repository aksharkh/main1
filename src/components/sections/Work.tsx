
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';
import TiltCard from '../ui/TiltCard';
import ParallaxImage from '../ui/ParallaxImage';
import { premiumEase } from '../../lib/utils';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-zinc-50 text-black relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: premiumEase, duration: 1 }}
          className="flex justify-between items-end mb-20 border-b border-black/20 pb-8"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Work</h2>
          <p className="text-xl font-medium hidden md:block">(04 Selected)</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: premiumEase, delay: index * 0.1 }}
              className={`${project.col} group cursor-pointer flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <TiltCard>
                <div className={`w-full ${project.aspect} overflow-hidden mb-8 bg-black relative rounded-xl shadow-2xl`}>
                  <ParallaxImage src={project.image} alt={project.title} />
                  
                  {/* Advanced Hover State Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[0.76,0,0.24,1] pointer-events-none">
                     <div className="flex gap-3 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-5 py-2.5 bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-widest rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] shadow-xl">
                            {tag}
                          </span>
                        ))}
                     </div>
                     <div className="self-end w-20 h-20 bg-white text-black rounded-full flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]">
                       <ArrowUpRight size={32} />
                     </div>
                  </div>
                </div>
              </TiltCard>
              
              <div className="flex justify-between items-start border-t border-black/10 pt-6 mt-auto">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-gray-500 transition-colors">{project.title}</h3>
                <span className="text-sm font-mono uppercase tracking-widest text-gray-500">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
