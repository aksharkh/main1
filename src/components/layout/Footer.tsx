
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

          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 100, delay: 0.2 }} className="flex gap-6 shrink-0">
            <Magnetic strength={0.2}>
            <a 
              href="mailto:aksharkh04@gmail.com"
                className="group flex flex-col items-center justify-center w-40 h-40 md:w-52 md:h-52 bg-black text-white rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-500"
                >
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest mb-2 group-hover:-translate-y-2 transition-transform">Email Us</span>
                  <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-300" />
            </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="https://wa.me/919353443100?text=Hi%20Axoraa!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="group flex flex-col items-center justify-center w-40 h-40 md:w-52 md:h-52 bg-[#25D366] text-white rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(37,211,102,0.4)] transition-all duration-500"
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest mb-2 group-hover:-translate-y-2 transition-transform">WhatsApp</span>
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </Magnetic>
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
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/akshar-k-h-1b404521b/' },
                { name: 'GitHub', url: 'https://github.com/aksharkh' }
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden hover:text-[#CCFF00] transition-colors">
                  <span className="block group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social.name}</span>
                  <span className="block absolute top-full group-hover:-translate-y-full transition-transform duration-500 ease-[0.76,0,0.24,1]">{social.name}</span>
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
