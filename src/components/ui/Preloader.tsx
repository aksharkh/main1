/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animate, svg, stagger } from 'animejs';
import { preloadImages } from '../../data';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [drawingCompleted, setDrawingCompleted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  // Keep latest onComplete callback in a ref to prevent inline recreation from re-triggering the useEffect
  const onCompleteRef = React.useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // 1. Preload static images and background video
  useEffect(() => {
    const totalResources = preloadImages.length + 1; // local images + hero video
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const percent = Math.min(100, Math.round((loadedCount / totalResources) * 100));
      setProgressPercent(percent);
      if (loadedCount >= totalResources) {
        setResourcesLoaded(true);
      }
    };

    // Preload Images
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // count as loaded even on error to prevent locks
    });

    // Preload Hero Video
    const video = document.createElement('video');
    video.src = '/hero-video.mp4';
    video.preload = 'auto';

    const handleVideoLoaded = () => {
      if (video.oncanplaythrough) {
        video.oncanplaythrough = null;
        updateProgress();
      }
    };

    video.oncanplaythrough = handleVideoLoaded;
    video.onerror = () => {
      if (video.oncanplaythrough) {
        video.oncanplaythrough = null;
        updateProgress();
      }
    };

    // Set a safety timeout for the video asset (8 seconds max wait)
    const videoTimeout = setTimeout(() => {
      if (video.oncanplaythrough) {
        video.oncanplaythrough = null;
        updateProgress();
      }
    }, 8000);

    return () => {
      clearTimeout(videoTimeout);
      video.oncanplaythrough = null;
      video.onerror = null;
    };
  }, []);

  // 2. Stroke Drawing Animation
  useEffect(() => {
    let anim: any = null;
    let timer: any = null;
    let active = true;

    const startAnim = () => {
      if (!active) return;
      const container = containerRef.current;
      if (!container) return;

      const paths = container.querySelectorAll('.wordmark-line');
      if (paths.length === 0) {
        // Retry shortly if the elements haven't painted to the DOM yet
        timer = setTimeout(startAnim, 30);
        return;
      }

      // Create drawable proxies for all target SVG paths
      const drawables = svg.createDrawable(Array.from(paths));
      
      // Initialize them all to hidden immediately to prevent flash
      drawables.forEach((d: any) => {
        d.draw = '0 0';
      });

      setIsReady(true);

      if (!active) return;

      // Animate the stroke drawing using AnimeJS v4
      anim = animate(drawables, {
        draw: ['0 0', '0 1'],
        ease: 'inOutQuad',
        duration: 1800,
        delay: stagger(100),
        onComplete: () => {
          if (!active) return;
          setDrawingCompleted(true);
        }
      });
    };

    startAnim();

    return () => {
      active = false;
      if (anim && typeof anim.pause === 'function') {
        anim.pause();
      }
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  // 3. Coordinate drawing completion and resource caching
  useEffect(() => {
    if (drawingCompleted && resourcesLoaded) {
      const dismissTimer = setTimeout(() => {
        onCompleteRef.current();
      }, 750);
      return () => clearTimeout(dismissTimer);
    }
  }, [drawingCompleted, resourcesLoaded]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ position: 'fixed' }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[480px] px-6 flex flex-col items-center justify-center gap-6">
        {/* Glowing Wordmark SVG */}
        <svg 
          viewBox="0 0 440 100" 
          className="w-full h-auto text-white"
          style={{ filter: "drop-shadow(0 0 15px rgba(204, 255, 0, 0.25))" }}
        >
          <defs>
            <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#CCFF00" />
              <stop offset="100%" stopColor="#CCFF00" />
            </linearGradient>
          </defs>
          <g 
            stroke="url(#loaderGradient)" 
            fill="none" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="opacity-95 transition-opacity duration-300"
            style={{ opacity: isReady ? 0.95 : 0 }}
          >
            {/* A (1) */}
            <path className="wordmark-line" d="M 15 85 L 36 15 L 44 15 L 65 85 L 53 85 L 47 65 L 33 65 L 27 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 36 54 L 44 54 L 40 40 Z" fill="#000000" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* X */}
            <path className="wordmark-line" d="M 80 15 L 92 15 L 125 85 L 113 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 125 15 L 113 15 L 80 85 L 92 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* O */}
            <path className="wordmark-line" d="M 165 15 A 25 35 0 1 0 165 85 A 25 35 0 1 0 165 15 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 165 25 A 15 25 0 1 0 165 75 A 15 25 0 1 0 165 25 Z" fill="#000000" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* R */}
            <path className="wordmark-line" d="M 205 15 L 217 15 L 217 85 L 205 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 217 15 L 232 15 C 242 15, 245 22, 245 32 C 245 42, 242 50, 232 50 L 217 50 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 217 25 L 227 25 C 232 25, 233 28, 233 32 C 233 36, 232 40, 227 40 L 217 40 Z" fill="#000000" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 222 50 L 234 50 L 245 85 L 233 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* A (2) */}
            <path className="wordmark-line" d="M 260 85 L 281 15 L 289 15 L 310 85 L 298 85 L 292 65 L 278 65 L 272 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 281 54 L 289 54 L 285 40 Z" fill="#000000" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* A (3) */}
            <path className="wordmark-line" d="M 325 85 L 346 15 L 354 15 L 375 85 L 363 85 L 357 65 L 343 65 L 337 85 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 346 54 L 354 54 L 350 40 Z" fill="#000000" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            
            {/* © Copyright Symbol */}
            <path className="wordmark-line" d="M 410 30 A 20 20 0 1 0 410 70 A 20 20 0 1 0 410 30 Z" fill="url(#loaderGradient)" style={{ fillOpacity: drawingCompleted ? 1 : 0, transition: 'fill-opacity 0.7s ease-out' }} />
            <path className="wordmark-line" d="M 418 42 A 10 10 0 1 0 418 58" style={{ stroke: drawingCompleted ? '#000000' : 'url(#loaderGradient)', strokeWidth: 3, transition: 'stroke 0.7s ease-out' }} />
          </g>
        </svg>
 
        {/* Real-time Progress Bar & Percent Indicator */}
        <div className="w-full max-w-[280px] mt-6 flex flex-col gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest select-none">
          <div className="flex justify-between items-center text-zinc-400">
            <span>Compiling_assets</span>
            <span className="text-[#CCFF00] font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-[3px] bg-white/5 border border-white/5 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-[#CCFF00]"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>

        {/* Monospace Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={drawingCompleted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.4em] select-none flex items-center gap-2 mt-4"
        >
          <span>ENGINEERING_STUDIO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
          <span>SYSTEMS_v1.0</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
 
export default Preloader;
