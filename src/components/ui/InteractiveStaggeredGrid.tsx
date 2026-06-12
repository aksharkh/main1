import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';

const InteractiveStaggeredGrid: React.FC = () => {
  const gridWidth = 15;
  const gridHeight = 8;
  const totalItems = gridWidth * gridHeight;

  // Trigger stagger wave ripple originating from the hovered node index using Anime.js v4
  const triggerRipple = (index: number) => {
    animate('.stagger-grid-item', {
      scale: [
        { to: 1.8, ease: 'outQuad', duration: 150 },
        { to: 1, ease: 'outQuad', duration: 800 }
      ],
      translateY: [
        { to: -6, ease: 'outQuad', duration: 150 },
        { to: 0, ease: 'outQuad', duration: 800 }
      ],
      color: [
        { to: '#CCFF00', ease: 'outQuad', duration: 150 },
        { to: 'rgba(255, 255, 255, 0.1)', ease: 'outQuad', duration: 800 }
      ],
      delay: stagger(20, {
        grid: [gridWidth, gridHeight],
        from: index
      })
    });
  };

  // Run intro animation wave on mount
  useEffect(() => {
    animate('.stagger-grid-item', {
      scale: {
        from: 0,
        to: 1
      },
      opacity: {
        from: 0,
        to: 0.1
      },
      translateY: {
        from: 30,
        to: 0
      },
      delay: stagger(10, {
        grid: [gridWidth, gridHeight],
        from: 'center'
      }),
      ease: 'outElastic',
      duration: 1500
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto opacity-[0.25] overflow-hidden select-none">
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridWidth}, minmax(0, 1fr))`,
          gap: '12px',
        }}
        className="w-max p-4"
      >
        {Array.from({ length: totalItems }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => triggerRipple(i)}
            className="stagger-grid-item w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/10 font-mono font-light text-xs md:text-sm cursor-pointer transition-colors duration-200"
          >
            +
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveStaggeredGrid;
