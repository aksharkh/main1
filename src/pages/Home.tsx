import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Marquee from '../components/ui/Marquee';
import Work from '../components/sections/Work';
import Process from '../components/sections/Process';
import Expertise from '../components/sections/Expertise';
import Testimonials from '../components/sections/Testimonials';

interface HomeProps {
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ loading }) => {
  return (
    <>
      <Hero loading={loading} />
      <Philosophy />
      <Marquee />
      <Work />
      <Process />
      <Expertise />
      <Testimonials />
    </>
  );
};

export default Home;
