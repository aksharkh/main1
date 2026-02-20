
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import type { Project, ProcessStep, ExpertiseItem, TeamMember } from '../types';
import main2 from '../assets/main2.png';
import main3 from '../assets/main3.png';
import main4 from '../assets/main4.png';

import cafe1 from '../assets/cafe1.png';
import cafe2 from '../assets/cafe2.png';
import cafe3 from '../assets/cafe3.png';
import cafe4 from '../assets/cafe4.png';
import cafe5 from '../assets/cafe5.png';
import cafe6 from '../assets/cafe6.png';

import soft1 from '../assets/soft1.png';
import soft2 from '../assets/soft2.png';
import soft3 from '../assets/soft3.png';
import soft4 from '../assets/soft4.png';
import soft5 from '../assets/soft5.png';

import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port3 from '../assets/port3.png';

import akshar from '../assets/akshar.jpeg';
import abhinav from '../assets/abhinav.jpeg';
import adnaan from '../assets/adnaan.jpeg';
import chandan from '../assets/chandan.jpeg';
import bhuvan from '../assets/bhuvan.jpeg';





export const projects: Project[] = [
  // Company Portfolios
  {
    id: 1,
    title: 'DevStudio',
    category: 'Company Portfolio',
    image: main2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://main2-nu.vercel.app/',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion']
  },
  {
    id: 2,
    title: 'DevCollective',
    category: 'Company Portfolio',
    image: main3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://main3-ruby.vercel.app/',
    tags: ['React', 'Vite', 'GSAP']
  },
  {
    id: 3,
    title: 'Business Energy',
    category: 'Company Portfolio',
    image: main4,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://business-c-nergy-grow-movement-2026-lyart.vercel.app/',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL']
  },

  // Cafe Websites
  {
    id: 4,
    title: 'SABLE',
    category: 'Cafe Website',
    image: cafe1,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://ca3-five.vercel.app/',
    tags: ['Next.js', 'MongoDB', 'Vercel']
  },
  {
    id: 5,
    title: 'TERRA',
    category: 'Cafe Website',
    image: cafe2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://ca2-opal.vercel.app/',
    tags: ['React', 'Redux', 'AntD']
  },
  {
    id: 6,
    title: 'LUMINA',
    category: 'Cafe Website',
    image: cafe3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://ca1-pi.vercel.app/',
    tags: ['Vue.js', 'TailwindCSS', 'Firebase']
  },
   {
    id: 7,
    title: 'Ojas Theta',
    category: 'Cafe Website',
    image: cafe4,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://ojas-theta.vercel.app/',
    tags: ['Svelte', 'Node.js', 'MySQL']
  },
  {
    id: 8,
    title: 'Masala Modern',
    category: 'Cafe Website',
    image: cafe5,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://masala-modern.vercel.app/',
    tags: ['Next.js', 'Prisma', 'PostgreSQL']
  },
  {
    id: 9,
    title: 'Lumière',
    category: 'Cafe Website',
    image: cafe6,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://new-folder-two-steel.vercel.app/',
    tags: ['React', 'Framer Motion', 'Viter']
  },

  // Internal Softwares
  {
    id: 10,
    title: 'F-Mine ',
    category: 'Internal Software',
    image: soft1,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://f-mine-demo.vercel.app/',
    tags: ['React', 'TypeScript', 'Dashboard']
  },
  {
    id: 11,
    title: 'AI Test Propter',
    category: 'Internal Software',
    image: soft2,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://ai-test-propter.vercel.app',
    tags: ['Python', 'FastAPI', 'React']
  },
  {
    id: 12,
    title: 'Sparkonomy',
    category: 'Internal Software',
    image: soft3,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://sparkonomy-eta.vercel.app/',
    tags: ['Next.js', 'Redis', 'TailwindCSS']
  },
  {
    id: 13,
    title: 'Flam Five',
    category: 'Internal Software',
    image: soft4,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://flam-five.vercel.app/',
    tags: ['Angular', 'RxJS', 'Node.js']
  },
  {
    id: 14,
    title: 'Smart Home Dash',
    category: 'Internal Software',
    image: soft5,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://aksharkh.github.io/Smart-home-dashboard-/',
    tags: ['IoT', 'React', 'MQTT']
  },

  // Personal Portfolios
  {
    id: 15,
    title: 'Bhuvan ',
    category: 'Personal Portfolio',
    image: port1,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://bhuvanmh.pages.dev/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 16,
    title: 'Abhinav R',
    category: 'Personal Portfolio',
    image: port2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://my-portfoilo-ashy.vercel.app/',
    tags: ['React', 'Three.js', 'Vercel']
  },
  {
    id: 17,
    title: 'Akshar ',
    category: 'Personal Portfolio',
    image: port3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://aksharkh.vercel.app/',
    tags: ['Next.js', 'Sanity', 'TailwindCSS']
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
    content: "We push the boundaries of the browser. Using React, Vite, Next.js, and WebGL, we build buttery-smooth, award-winning interfaces that captivate users and drive engagement."
  },
  {
    title: "Backend Architecture",
    content: "Rock-solid, scalable systems. We design APIs and microservices using Java, Node.js, Go, and PostgreSQL that can handle millions of requests without breaking a sweat."
  },
  {
    title: "Cloud Infrastructure",
    content: "Zero-downtime deployments. We utilize AWS, Docker, and Kubernetes to ensure your application is secure, incredibly fast, and always online."
  }
];

export const team: TeamMember[] = [
  { id: 1, name: 'Akshar ', role: 'Lead Software Developer', github: 'https://github.com/aksharkh', linkedin: 'https://www.linkedin.com/in/akshar-k-h-1b404521b/', image: akshar },
  { id: 2, name: 'Abhinav ', role: 'Software Engineer', github: 'https://github.com/abhinavrbharadwaj7', linkedin: 'https://www.linkedin.com/in/abhinavrbharadwaj/', image: abhinav },
  { id: 3, name: 'Adnaan ', role: 'FullStack Developer', github: 'https://github.com/Khan012003', linkedin: 'https://www.linkedin.com/in/adnaan-khan-153042319/', image: adnaan },
  { id: 4, name: 'Chandan', role: 'Lead Cyber Security Engineer', github: 'https://github.com/chandantm2002', linkedin: 'https://www.linkedin.com/in/chandan-t-m-691851235/', image: chandan },
  { id: 5, name: 'Bhuvan', role: 'Java FullStack Developer', github: 'https://github.com/AKlRA', linkedin: 'https://www.linkedin.com/in/bhuvan-mh-0144492a8/', image: bhuvan },
];
