import React from 'react';
import Team from '../components/sections/Team';

interface TeamPageProps {
  mousePosition: { x: number; y: number };
}

const TeamPage: React.FC<TeamPageProps> = ({ mousePosition }) => {
  return (
    <div className="min-h-screen pt-20">
      <Team mousePosition={mousePosition} />
    </div>
  );
};

export default TeamPage;
