
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  aspect: string;
  col: string;
  link: string;
  tags: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export interface ExpertiseItem {
  title: string;
  content: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  link: string;
  image: string;
}

export interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}
