import React from 'react';
import Team from '../components/sections/Team';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

interface TeamPageProps {
  mousePosition: { x: number; y: number };
}

const TeamPage: React.FC<TeamPageProps> = ({ mousePosition }) => {
  useDocumentMetadata({
    title: 'The Collective | Axoraa Senior Engineers & Developers',
    description: 'Meet the Axoraa team. We are a collective of elite senior engineers and freelance developers building high-performance digital products, web apps, and AI automations.',
    canonical: 'https://axoraa.tech/team'
  });

  return (
    <div className="min-h-screen pt-20">
      <Team mousePosition={mousePosition} />
    </div>
  );
};

export default TeamPage;
