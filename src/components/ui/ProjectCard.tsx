import React, { useRef, useState, useEffect } from 'react';
import type { Project } from '../../types';
import TiltCard from './TiltCard';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  
  const [translateY, setTranslateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Keep track of internal animation variables using refs to avoid re-renders
  const scrollOffset = useRef(0);
  const direction = useRef(1); // 1 = scroll down, -1 = scroll up
  const isLoaded = useRef(false);

  // Parse neat display URL from project link
  const displayUrl = project.link
    .replace('https://', '')
    .replace('http://', '')
    .replace('aksharkh.github.io/', '')
    .split('/')[0];

  useEffect(() => {
    // If hovered, start the scroll animation loop
    if (isHovered) {
      const animate = () => {
        if (!containerRef.current || !imageRef.current) return;
        
        const containerHeight = containerRef.current.clientHeight;
        const imageHeight = imageRef.current.clientHeight;
        
        // Only scroll if the image is actually taller than the browser window container
        if (imageHeight > containerHeight) {
          const maxScroll = imageHeight - containerHeight;
          const speed = 1.0; // Steady smooth speed in pixels per frame

          // Update offset based on scroll direction
          scrollOffset.current += speed * direction.current;

          // Smoothly bounce scroll direction at endpoints
          if (scrollOffset.current >= maxScroll) {
            scrollOffset.current = maxScroll;
            direction.current = -1; // Reverse to scroll back up
          } else if (scrollOffset.current <= 0) {
            scrollOffset.current = 0;
            direction.current = 1; // Scroll down again
          }

          setTranslateY(-scrollOffset.current);
        }
        
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Pause animation instantly when mouse leaves, keeping the scrollOffset exactly where it was
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TiltCard>
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full relative rounded-2xl shadow-2xl overflow-hidden border border-white/10 bg-zinc-950 flex flex-col group transition-all duration-500 hover:border-[#CCFF00]/40 hover:shadow-[0_0_50px_rgba(204,255,0,0.05)] aspect-[16/10]"
      >
        {/* Safari Top Bar Mockup */}
        <div className="h-9 w-full bg-zinc-900/90 border-b border-white/5 px-4 flex items-center justify-between shrink-0 relative z-30 pointer-events-none">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
          </div>

          {/* Address Bar */}
          <div className="bg-zinc-950 border border-white/5 rounded-md px-6 py-0.5 text-[10px] text-gray-500 font-mono max-w-[150px] md:max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap text-center">
            {displayUrl}
          </div>

          {/* Spacer */}
          <div className="w-12"></div>
        </div>

        {/* Browser Content (Scrollable Webpage Frame) */}
        <div 
          ref={containerRef}
          className="relative w-full flex-1 overflow-hidden bg-black"
        >
          {/* Webpage Screen Image */}
          <img
            ref={imageRef}
            src={project.image}
            alt={project.title}
            onLoad={() => { isLoaded.current = true; }}
            style={{ transform: `translateY(${translateY}px)` }}
            className="w-full h-auto object-cover absolute top-0 left-0 transition-transform duration-75 ease-out origin-top"
          />

          {/* Black Glow Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500 z-10 pointer-events-none"></div>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;
