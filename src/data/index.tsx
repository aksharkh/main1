
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import type { Project, ProcessStep, ExpertiseItem, TeamMember, PricingPlan, Testimonial } from '../types';
import main2 from '../assets/main2.jpg';
import main3 from '../assets/main3.jpg';
import main4 from '../assets/main4.jpg';

import cafe1 from '../assets/cafe1.jpg';
import cafe2 from '../assets/cafe2.jpg';
import cafe3 from '../assets/cafe3.jpg';
import cafe4 from '../assets/cafe4.jpg';
import cafe5 from '../assets/cafe5.jpg';
import cafe6 from '../assets/cafe6.jpg';

import soft1 from '../assets/soft1.png';
import soft2 from '../assets/soft2.png';
import soft3 from '../assets/soft3.png';
import soft4 from '../assets/soft4.png';
import soft5 from '../assets/soft5.png';

import port1 from '../assets/port1.jpg';
import port2 from '../assets/port2.jpg';
import port3 from '../assets/port3.png';

import akshar from '../assets/akshar.jpeg';
import abhinav from '../assets/abhinav.jpeg';
import adnaan from '../assets/adnaan.jpeg';
// import chandan from '../assets/chandan.jpeg';
import bhuvan from '../assets/bhuvan.jpeg';

import zoviq from '../assets/zoviq.png';
import zoviqold from '../assets/zoviqold.png';
import doc from '../assets/doc.png';
import zoviqcopy from '../assets/zoviq copy.png';
import pet from '../assets/pet.png';
import polymind from '../assets/polymind.png';
import children from '../assets/children.png';
import aarogyam from '../assets/aarogyam.png';
import spa from '../assets/spa.png';
import zumba from '../assets/zumba.png';





export const preloadImages = [
  main2, main3, main4,
  cafe1, cafe2, cafe3, cafe4, cafe5, cafe6,
  soft1, soft2, soft3, soft4, soft5,
  port1, port2, port3,
  akshar, abhinav, adnaan, bhuvan,
  zoviq, zoviqold
];

export const projects: Project[] = [
  // Company Portfolios

    {
    id: 1,
    title: 'Zoviq',
    category: 'Company Portfolio',
    image: zoviqcopy,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://www.zoviq.page/',
    tags: ['React', 'Vite', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'ShineGoGlobal',
    category: 'Company Portfolio',
    image: main4,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://shinegoglobal.com/',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL']
  },

  {
    id: 3,
    title: 'Polymind',
    category: 'Company Portfolio',
    image: polymind,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://polymind.zoviq.page/',
    tags: ['React', 'Vite', 'TailwindCSS']
  },
  {
    id: 4,
    title: 'DevStudio',
    category: 'Company Portfolio',
    image: main2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://devstudio.axoraa.tech/',
    tags: ['Next.js', 'TailwindCSS', 'Framer Motion']
  },
  {
    id: 5,
    title: 'DevCollective',
    category: 'Company Portfolio',
    image: main3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://devcollective.axoraa.tech/',
    tags: ['React', 'Vite', 'GSAP']
  },
  

  // Medical Systems
  {
    id: 6,
    title: 'Aarogyam ',
    category: 'Medical System',
    image: aarogyam,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://aarogyam.axoraa.tech/',
    tags: ['Next.js', 'React', 'TailwindCSS']
  },
  {
    id: 7,
    title: 'Doc CRM',
    category: 'Medical System',
    image: doc,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://doc.axoraa.tech/',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },

  // Cafe Websites
  {
    id: 8,
    title: 'SABLE',
    category: 'Cafe Website',
    image: cafe1,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://sable.axoraa.tech/',
    tags: ['Next.js', 'MongoDB', 'Vercel']
  },
  {
    id: 9,
    title: 'TERRA',
    category: 'Cafe Website',
    image: cafe2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://terra.axoraa.tech/',
    tags: ['React', 'Redux', 'AntD']
  },
  {
    id: 10,
    title: 'LUMINA',
    category: 'Cafe Website',
    image: cafe3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://lumina.axoraa.tech/',
    tags: ['Vue.js', 'TailwindCSS', 'Firebase']
  },
  {
    id: 11,
    title: 'Ojas Theta',
    category: 'Cafe Website',
    image: cafe4,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://ojas-theta.vercel.app/',
    tags: ['Svelte', 'Node.js', 'MySQL']
  },
  {
    id: 12,
    title: 'Masala Modern',
    category: 'Cafe Website',
    image: cafe5,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://masala-modern.vercel.app/',
    tags: ['Next.js', 'Prisma', 'PostgreSQL']
  },
  {
    id: 13,
    title: 'Lumière',
    category: 'Cafe Website',
    image: cafe6,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://new-folder-two-steel.vercel.app/',
    tags: ['React', 'Framer Motion', 'Vite']
  },

  // Internal Softwares
  {
    id: 14,
    title: 'F-Mine',
    category: 'Internal Software',
    image: soft1,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://restaurant-crm.axoraa.tech/',
    tags: ['React', 'TypeScript', 'Dashboard']
  },
  {
    id: 15,
    title: 'AI Test Propter',
    category: 'Internal Software',
    image: soft2,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://ai-test-propter.vercel.app',
    tags: ['Python', 'FastAPI', 'React']
  },
  {
    id: 16,
    title: 'Sparkonomy',
    category: 'Internal Software',
    image: soft3,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://sparkonomy.axoraa.tech/',
    tags: ['Next.js', 'Redis', 'TailwindCSS']
  },
  {
    id: 17,
    title: 'Flam Five',
    category: 'Internal Software',
    image: soft4,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://flam.axoraa.tech/',
    tags: ['Angular', 'RxJS', 'Node.js']
  },
  {
    id: 18,
    title: 'Smart Home Dash',
    category: 'Internal Software',
    image: soft5,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://aksharkh.github.io/Smart-home-dashboard-/',
    tags: ['IoT', 'React', 'MQTT']
  },

  // Creative Portals
  {
    id: 19,
    title: 'PetCare Portal',
    category: 'Creative Portals',
    image: pet,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://pet.axoraa.tech/',
    tags: ['React', 'Vite', 'TailwindCSS']
  },
  {
    id: 20,
    title: 'Zumba Studio',
    category: 'Creative Portals',
    image: zumba,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://zumba.axoraa.tech/',
    tags: ['React', 'GSAP', 'TailwindCSS']
  },
  {
    id: 21,
    title: 'KinderCare Portal',
    category: 'Creative Portals',
    image: children,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://kinder.axoraa.tech/',
    tags: ['Next.js', 'Framer Motion', 'TailwindCSS']
  },
  {
    id: 22,
    title: 'Aura Spa Portal',
    category: 'Creative Portals',
    image: spa,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://spa.axoraa.tech/',
    tags: ['React', 'TailwindCSS', 'Vercel']
  },
  

  // Personal Portfolios
  {
    id: 23,
    title: 'Bhuvan',
    category: 'Personal Portfolio',
    image: port1,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://bhuvanmh.pages.dev/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 24,
    title: 'Abhinav R',
    category: 'Personal Portfolio',
    image: port2,
    aspect: 'aspect-[16/10]',
    col: 'md:col-span-7',
    link: 'https://my-portfoilo-ashy.vercel.app/',
    tags: ['React', 'Three.js', 'Vercel']
  },
  {
    id: 25,
    title: 'Akshar',
    category: 'Personal Portfolio',
    image: port3,
    aspect: 'aspect-[4/5]',
    col: 'md:col-span-5',
    link: 'https://akshar.axoraa.tech/',
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
  { id: 4, name: 'Bhuvan', role: 'Java FullStack Developer', github: 'https://github.com/AKlRA', linkedin: 'https://www.linkedin.com/in/bhuvan-mh-0144492a8/', image: bhuvan },
  // { id: 4, name: 'Chandan', role: 'Lead Cyber Security Engineer', github: 'https://github.com/chandantm2002', linkedin: 'https://www.linkedin.com/in/chandan-t-m-691851235/', image: chandan },

];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'landing',
    name: 'Basic Landing Pages',
    price: '₹20,000 - ₹25,000',
    originalPrice: '₹30,000',
    description: "Equivalent to 1 month's salary of entry-level staff. A one-time investment for a 24/7 lead-generation engine with lifetime returns.",
    features: ['Custom UI/UX Design', 'Mobile Responsive', 'SEO Optimization', 'Contact Form Integration', 'Fast Load Times', '3 Years Free Maintenance']
  },
  {
    id: 'custom',
    name: 'Full Custom Websites',
    price: '₹45,000 - ₹50,000',
    originalPrice: '₹60,000',
    description: "Equivalent to 1 month's salary of mid-level staff. An Awwwards-grade visual machine built for lifetime brand dominance.",
    features: ['Custom Awwwards-Level Design', 'CMS Integration', 'Advanced Animations (GSAP)', 'Premium Aesthetics', 'E-commerce Ready', '3 Years Free Maintenance'],
    recommended: true
  },
  {
    id: 'software',
    name: 'Internal Software & CRMs',
    price: 'Custom',
    description: "Equivalent to 1 month's salary of senior/management staff. Custom operations engines to automate your entire team's workflow forever.",
    features: ['Custom Workflow Automation', 'Secure Data Architecture', 'Role-based Access Control', 'Third-party API Integration', 'Scalable Cloud Infrastructure', '3 Years Free Maintenance']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Abhinav',
    clientRole: 'Founder',
    companyName: 'Zoviq',
    content: "Our previous website was a basic, old, boxy interface that didn't reflect our innovative AI products. The team transformed our digital presence into a highly modern, attractive platform. The new aesthetic perfectly positions our AI agents and extensions to top-tier users, yielding a massive boost in engagement.",
    growthStats: [
      { label: 'User Engagement', value: '+300%' },
      { label: 'Bounce Rate', value: '-65%' },
      { label: 'Brand Perception', value: '10x' }
    ],
    beforeImage: zoviqold,
    afterImage: zoviq
  }
];
