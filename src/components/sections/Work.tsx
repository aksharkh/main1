import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../../data';
import ProjectCard from '../ui/ProjectCard';
import ProjectDetailsModal from '../ui/ProjectDetailsModal';
import type { Project } from '../../types';
import { premiumEase } from '../../lib/utils';

const Work: React.FC = () => {
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = Array.from(new Set(projects.map(p => p.category)));

  return (
    <section id="work" className="py-12 md:py-32 px-5 md:px-12 bg-zinc-50 text-black relative z-10" style={{ backgroundColor: '#fafafa', color: '#000000' }}>
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

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
                  {visibleProjects.map((project, index) => (
                    <motion.div 
                      key={project.id}
                      initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: premiumEase, delay: index * 0.1 }}
                      className={`md:col-span-6 flex flex-col ${index % 2 !== 0 ? 'mt-4 md:mt-32' : ''}`}
                    >
                      <div className="flex flex-col w-full h-full group">
                        <div className="w-full mb-6 md:mb-8">
                          <ProjectCard 
                            project={project} 
                          />
                        </div>
                        
                        <div className="flex flex-col gap-4 border-t border-black/10 pt-6 mt-auto">
                          <div className="flex justify-between items-start">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-gray-500 transition-colors">{project.title}</h3>
                            <span className="text-sm font-mono uppercase tracking-widest text-gray-500">{project.category}</span>
                          </div>

                          <div className="flex flex-wrap gap-3 mt-1">
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-5 py-3 bg-black hover:bg-black/80 text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2 transition-colors border border-black/10"
                            >
                              Live Preview
                              <ArrowUpRight size={13} />
                            </a>

                            <button 
                              onClick={() => setSelectedProject(project)}
                              className="px-5 py-3 bg-transparent hover:bg-black/5 text-black border border-black/25 font-bold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2 transition-colors"
                            >
                              Details
                              <Eye size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
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

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Sawtooth brutalist cut from Work (#fafafa) to Process (#050508) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[99%] pointer-events-none">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="relative block w-full h-4 md:h-8 text-[#050508]">
          <path d="M0,40 L20,0 L40,40 L60,0 L80,40 L100,0 L120,40 L140,0 L160,40 L180,0 L200,40 L220,0 L240,40 L260,0 L280,40 L300,0 L320,40 L340,0 L360,40 L380,0 L400,40 L420,0 L440,40 L460,0 L480,40 L500,0 L520,40 L540,0 L560,40 L580,0 L600,40 L620,0 L640,40 L660,0 L680,40 L700,0 L720,40 L740,0 L760,40 L780,0 L800,40 L820,0 L840,40 L860,0 L880,40 L900,0 L920,40 L940,0 L960,40 L980,0 L1000,40 L1020,0 L1040,40 L1060,0 L1080,40 L1100,0 L1120,40 L1140,0 L1160,40 L1180,0 L1200,40 L1200,40 L0,40 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Work;
