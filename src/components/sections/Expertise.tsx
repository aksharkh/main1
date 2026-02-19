
import React, { useState } from 'react';
import { expertise } from '../../data';
import AccordionItem from '../ui/AccordionItem';

const Expertise: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number>(0);

  return (
    <section id="expertise" className="py-32 px-6 md:px-12 relative z-10 bg-transparent mix-blend-difference text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase sticky top-32">
              Core <br/> <span className="text-[#CCFF00]">Focus</span>
            </h2>
          </div>
          
          <div className="md:col-span-7">
            <div className="border-t border-white/20">
              {expertise.map((item, index) => (
                <AccordionItem 
                  key={index} title={item.title} content={item.content}
                  isOpen={openAccordion === index} onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
