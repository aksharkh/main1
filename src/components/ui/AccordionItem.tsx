
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { AccordionProps } from '../../types';
import ScrambleText from './ScrambleText';
import { premiumEase } from '../../lib/utils';

const AccordionItem: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/20">
      <button 
        className="w-full py-8 flex justify-between items-center text-left group"
        onClick={onClick}
      >
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter group-hover:text-[#CCFF00] transition-colors duration-300">
          <ScrambleText text={title} />
        </h3>
        <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'border-[#CCFF00] bg-[#CCFF00] text-black rotate-180' : 'border-white/20 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: premiumEase }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-xl text-gray-400 max-w-3xl leading-relaxed">
              {content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
