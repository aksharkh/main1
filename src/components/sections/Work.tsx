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
    </section>
  );
};

export default Work;
