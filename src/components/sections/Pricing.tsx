import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { animate, stagger } from 'animejs';
import { pricingPlans } from '../../data';
import { premiumEase } from '../../lib/utils';
import TiltCard from '../ui/TiltCard';

const Pricing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate('.pricing-card-wrapper', {
              translateY: {
                from: 50,
                to: 0
              },
              opacity: {
                from: 0,
                to: 1
              },
              delay: stagger(150),
              ease: 'outQuad',
              duration: 800
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-32 px-6 md:px-12 bg-black text-white relative z-10">
      
      {/* Special Offer Banner */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center mt-6 z-20 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: premiumEase }}
          className="bg-gradient-to-r from-[#CCFF00]/80 via-[#CCFF00] to-[#CCFF00]/80 text-black px-6 py-3 md:px-12 md:py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm shadow-[0_0_40px_rgba(204,255,0,0.4)] flex items-center gap-3 backdrop-blur-md border border-white/50 pointer-events-auto"
        >
          <Zap className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
          <span>Limited Time Offer: Next 2 Weeks • Reduced Pricing + 3 Years Maintenance Included</span>
          <Zap className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 md:mt-24 px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ ease: premiumEase, duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">
            Investment <span className="font-serif italic text-transparent normal-case" style={{ WebkitTextStroke: '2px white' }}>Plans</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Transparent pricing for world-class engineering. We build assets that scale your business.
          </p>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="pricing-card-wrapper opacity-0 h-full"
            >
              <TiltCard>
                <div className={`relative h-full rounded-3xl p-8 md:p-10 flex flex-col ${plan.recommended ? 'bg-zinc-900 border-2 border-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.1)]' : 'bg-zinc-950 border border-white/10'}`}>
                  
                  {plan.recommended && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CCFF00] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm h-12">{plan.description}</p>
                  </div>

                  <div className="mb-8 flex items-end gap-3 border-b border-white/10 pb-8">
                    <span className="text-5xl font-bold tracking-tighter">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-xl text-gray-500 line-through mb-1 uppercase font-mono">{plan.originalPrice}</span>
                    )}
                  </div>

                  <ul className="flex-1 flex flex-col gap-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${feature.includes('Maintenance') ? 'text-[#CCFF00]' : 'text-gray-500'}`} />
                        <span className={`text-sm ${feature.includes('Maintenance') ? 'text-white font-semibold' : 'text-gray-300'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${plan.recommended ? 'bg-[#CCFF00] text-black hover:bg-white hover:scale-105' : 'bg-white/10 text-white hover:bg-white hover:text-black hover:scale-105'}`}>
                    Get Started
                  </button>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
