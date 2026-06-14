import React from 'react';
import Hero from '../components/sections/Hero';
import Philosophy from '../components/sections/Philosophy';
import Marquee from '../components/ui/Marquee';
import Work from '../components/sections/Work';
import Process from '../components/sections/Process';
import Expertise from '../components/sections/Expertise';
import Testimonials from '../components/sections/Testimonials';

import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

interface HomeProps {
  loading: boolean;
}

const Home: React.FC<HomeProps> = ({ loading }) => {
  useDocumentMetadata({
    title: 'Axoraa | Premium Websites, Apps, Automations & AI Integrations',
    description: 'Axoraa is a collective of senior developers building high-performance websites, custom mobile apps, workflow automations, and AI integrations to bring businesses into the digital era.',
    canonical: 'https://axoraa.tech/'
  });
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
