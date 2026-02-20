
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { team } from '../../data';
import { premiumEase } from '../../lib/utils';

interface TeamProps {
  mousePosition: { x: number, y: number };
}

const Team: React.FC<TeamProps> = ({ mousePosition }) => {
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-32 px-6 md:px-12 bg-black border-y border-white/10 relative z-10 text-white">
      
      {/* Floating Image element (desktop only) */}
      <AnimatePresence>
        {hoveredTeamMember !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: premiumEase }}
            className="fixed z-50 pointer-events-none hidden md:block w-72 h-96 overflow-hidden rounded-xl border border-white/20 shadow-2xl"
            style={{
              left: mousePosition.x + 40,
              top: mousePosition.y - 192,
            }}
          >
            <img 
              src={team.find(t => t.id === hoveredTeamMember)?.image} 
              alt="Team member" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: premiumEase }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6">The Collective</h2>
          <p className="text-2xl text-gray-400 max-w-2xl font-light">Engineers by day. Elite freelancers by night. We combine enterprise-grade experience with creative agility.</p>
        </motion.div>

        <div className="flex flex-col relative">
          {team.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: premiumEase }}
              onMouseEnter={() => setHoveredTeamMember(member.id)}
              onMouseLeave={() => setHoveredTeamMember(null)}
              className="group border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:hover:bg-white/5 transition-colors px-4 -mx-4 md:px-10 md:-mx-10 duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-8 mb-6 md:mb-0 relative z-10">
                <span className="text-xl font-mono text-gray-500 group-hover:text-[#CCFF00] transition-colors">0{index + 1}</span>
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase group-hover:text-white md:group-hover:translate-x-8 transition-all duration-500 ease-[0.76,0,0.24,1] text-gray-300">
                  {member.name}
                </h3>
              </div>
              
              <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end relative z-10">
                <span className="text-lg font-mono text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{member.role}</span>
                <div className="flex gap-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300"><Github size={20}/></a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all duration-300"><Linkedin size={20}/></a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
