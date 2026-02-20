
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { premiumEase } from '../../lib/utils';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 bg-[#CCFF00] text-black relative z-10 overflow-hidden">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="absolute -top-20 left-0 text-[30vw] font-bold text-black/5 whitespace-nowrap pointer-events-none select-none"
      >
        LET'S BUILD LET'S BUILD
      </motion.div>

      <div className="max-w-[1400px] mx-auto flex flex-col h-full justify-between gap-32 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: premiumEase }}
            className="text-[15vw] md:text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase"
          >
            Got a <br/> 
            <span className="text-transparent font-serif italic pr-4" style={{ WebkitTextStroke: '3px black' }}>Project?</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}>
            
            <a 
              href="mailto:aksharkh04@gmail.com"
                className="group flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 bg-black text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-500 shrink-0"
                >
                  <span className="text-sm md:text-lg font-bold uppercase tracking-widest mb-2 group-hover:-translate-y-2 transition-transform">Email Us</span>
                  <ArrowUpRight size={36} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
            
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-t border-black/20 pt-12 gap-12">
          <div className="font-bold text-3xl tracking-tighter">
            AXORAA©<br/>
            <span className="text-sm font-medium tracking-normal text-black/60">BENGALURU, INDIA</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-sm font-bold uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <a href="mailto:aksharkh04@gmail.com" className="hover:text-white transition-colors">aksharkh04@gmail.com</a>
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 93534 43100</a>
            </div>
            
            <div className="flex gap-8 md:items-end">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="relative group overflow-hidden">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social}</span>
                  <span className="block absolute top-full text-white group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
