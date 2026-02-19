

import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import type { Project, ProcessStep, ExpertiseItem, TeamMember } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aura Brew',
    category: 'E-Commerce / 3D',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    tags: ['WebGL', 'React', 'Shopify Plus']
  },
  {
    id: 2,
    title: 'Nexus SaaS',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    tags: ['Next.js', 'PostgreSQL', 'AWS']
  },
  {
    id: 3,
    title: 'Lumina',
    category: 'Brand Identity / Web',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    tags: ['Vue.js', 'GSAP', 'Figma']
  },
  {
    id: 4,
    title: 'FinEdge',
    category: 'Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=1200',
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    tags: ['React', 'TypeScript', 'Node.js']
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'Discovery & Strategy',
    desc: 'We start by deeply understanding your business goals, target audience, and technical constraints. We define the architecture and set a roadmap for success.',
    icon: <Search className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    id: '02',
    title: 'Design & Prototyping',
    desc: 'Our design philosophy merges aesthetics with usability. We create wireframes, interactive prototypes, and a visual language that captivates your users.',
    icon: <PenTool className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    id: '03',
    title: 'Precision Engineering',
    desc: 'This is where the magic happens. We write clean, modular, and scalable code using React, Node.js, and modern cloud infrastructure.',
    icon: <Code2 className="w-8 h-8 text-[#CCFF00]" />
  },
  {
    id: '04',
    title: 'Launch & Scale',
    desc: 'Zero-downtime deployment. We ensure your application is secure, incredibly fast, SEO-optimized, and ready to handle massive amounts of traffic.',
    icon: <Rocket className="w-8 h-8 text-[#CCFF00]" />
  }
];

export const expertise: ExpertiseItem[] = [
  {
    title: "Frontend Engineering",
    content: "We push the boundaries of the browser. Using React, Next.js, and WebGL, we build buttery-smooth, award-winning interfaces that captivate users and drive engagement."
  },
  {
    title: "Backend Architecture",
    content: "Rock-solid, scalable systems. We design APIs and microservices using Node.js, Go, and PostgreSQL that can handle millions of requests without breaking a sweat."
  },
  {
    title: "Cloud Infrastructure",
    content: "Zero-downtime deployments. We utilize AWS, Docker, and Kubernetes to ensure your application is secure, incredibly fast, and always online."
  }
];

export const team: TeamMember[] = [
  { id: 1, name: 'Akshar', role: 'Frontend & Creative Dev', link: '#', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'Sarah', role: 'Backend Architecture', link: '#', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'David', role: 'DevOps & Infrastructure', link: '#', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600' }
];
