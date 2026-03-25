
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
  github: string;
  linkedin: string;
  image: string;
}

export interface AccordionProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  content: string;
  growthStats: { label: string; value: string }[];
  beforeImage?: string;
  afterImage?: string;
}
