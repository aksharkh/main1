import React from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import type { Project } from '../../types';
import { premiumEase } from '../../lib/utils';

interface ProjectDetailsModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ project, onClose }) => {
  // Generate a premium descriptive pitch based on the project category and tags
  const getPitch = () => {
    switch (project.category) {
      case 'Company Portfolio':
        return `A bespoke digital portfolio designed for next-generation agencies. Built with full fluid responsiveness, Awwwards-winning aesthetics, and butter-smooth animation physics. Engineered to present brand capabilities at first glance.`;
      case 'Cafe Website':
        return `An atmospheric, custom digital storefront tailored for luxury cafes and restaurants. Features real-time reservations, dynamic menu browsing, and immersive visual storytelling. Form and function engineered in harmony.`;
      case 'Internal Software':
        return `An enterprise-grade internal dashboard built to automate operational bottlenecks and scale efficiency. Incorporates secure state management, live data charting, role-based workflows, and database synchronization.`;
      case 'Personal Portfolio':
        return `An ultra-premium personal showcase focusing on individual expertise and design narrative. Implements unique cursor states, micro-interactions, and flawless typography to elevate personal branding.`;
      default:
        return `A state-of-the-art web application engineered with precision. Implements modern frontend principles, high-performance optimization, and beautiful interface physics to drive seamless customer interaction.`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
    >
      {/* Backing dismiss trigger */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>

      <motion.div
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.95, opacity: 0 }}
        transition={{ ease: premiumEase, duration: 0.6 }}
        className="bg-zinc-950 border border-white/10 rounded-3xl w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]"
      >
        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all duration-300"
        >
          <X size={20} />
        </button>

        {/* Left Visual Column */}
        <div className="md:col-span-6 bg-zinc-900 overflow-hidden relative group h-64 md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[0.76,0,0.24,1]"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <span className="px-3.5 py-1.5 bg-[#CCFF00] text-black font-mono text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
              {project.category}
            </span>
          </div>
        </div>

        {/* Right Info Column */}
        <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between overflow-y-auto h-[calc(90vh-16rem)] md:h-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-widest mb-3">
              <Cpu size={14} className="text-[#CCFF00]" />
              <span>Project Case Study</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white">
              {project.title}
            </h3>

            <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-6">
              {getPitch()}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Key Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-white font-mono text-[11px] uppercase rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 mb-8">
              <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">Quality Benchmarks</h4>
              <ul className="grid grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle2 size={16} className="text-[#CCFF00] shrink-0" />
                  <span>SEO Score 95+</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle2 size={16} className="text-[#CCFF00] shrink-0" />
                  <span>Fluid Motion</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <CheckCircle2 size={16} className="text-[#CCFF00] shrink-0" />
                  <span>Fast Load Time</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300 font-light">
                  <ShieldCheck size={16} className="text-[#CCFF00] shrink-0" />
                  <span>Zero-Downtime</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10 mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 px-6 bg-[#CCFF00] hover:bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:scale-[1.02] transition-all duration-300"
            >
              Live Preview
              <ArrowUpRight size={16} />
            </a>
            <button
              onClick={onClose}
              className="flex-1 py-4 px-6 bg-white/5 border border-white/10 hover:bg-white hover:text-black font-bold uppercase tracking-widest text-xs rounded-xl text-white transition-all duration-300"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsModal;
