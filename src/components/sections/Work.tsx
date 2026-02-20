
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';
import TiltCard from '../ui/TiltCard';
import ParallaxImage from '../ui/ParallaxImage';
import { premiumEase } from '../../lib/utils';

const Work: React.FC = () => {
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});

  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-zinc-50 text-black relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: premiumEase, duration: 1 }}
          className="flex justify-between items-end mb-20 border-b border-black/20 pb-8"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase">Work</h2>
          <p className="text-xl font-medium hidden md:block">({projects.length} Selected)</p>
        </motion.div>

        <div>
          {categories.map((category) => {
            const categoryProjects = projects.filter(p => p.category === category);
            const isExpanded = expandedCats[category];
            const visibleProjects = isExpanded ? categoryProjects : categoryProjects.slice(0, 2);

            return (
              <div key={category} className="mb-32 last:mb-0">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8, ease: premiumEase }}
                  className="mb-12 flex justify-between items-center border-b border-black/10 pb-4"
                >
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{category}</h3>
                  <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">{categoryProjects.length} Projects</span>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                  {visibleProjects.map((project, index) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: premiumEase, delay: index * 0.1 }}
                      className={`md:col-span-6 flex flex-col ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full group cursor-pointer">
                        <TiltCard>
                          <div className="w-full aspect-[16/10] overflow-hidden mb-8 bg-black relative rounded-xl shadow-2xl">
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
                      </a>
                    </motion.div>
                  ))}
                </div>

                {!isExpanded && categoryProjects.length > 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-30 flex justify-center"
                  >
                    <button
                      onClick={() => setExpandedCats(prev => ({ ...prev, [category]: true }))}
                      className="px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#CCFF00] hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                      Show More {category} ({categoryProjects.length - 2})
                    </button>
                  </motion.div>
                )}
                
                {isExpanded && categoryProjects.length > 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
                    className="mt-30 flex justify-center"
                  >
                     <button
                      onClick={() => setExpandedCats(prev => ({ ...prev, [category]: false }))}
                      className="px-10 py-5 bg-transparent border-2 border-black text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                      Show Less
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
