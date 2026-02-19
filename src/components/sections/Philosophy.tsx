
import React from 'react';
import ScrollRevealText from '../ui/ScrollRevealText';

const Philosophy: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 relative z-10 bg-black">
      <div className="max-w-[1400px] mx-auto flex justify-center">
        <div className="max-w-5xl">
           <ScrollRevealText text="We refuse to build ordinary digital experiences. Our obsession with detail, motion physics, and uncompromising performance transforms ambitious brands into industry icons." />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
