'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function AmbientBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#030304] overflow-hidden">
      
      {/* 1. Premium Top-Center Ambient Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full opacity-60" />
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[40vw] max-w-[500px] h-[400px] bg-indigo-500/15 blur-[100px] rounded-full opacity-60 mix-blend-screen" />

      {/* 2. Elegant Diagonal Stripe Texture */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255, 0.02), rgba(255,255,255, 0.02) 1px, transparent 1px, transparent 8px)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, transparent 80%)'
        }}
      />

      {/* Additional Ambient Bottom Glow for depth */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[60vw] max-w-[800px] h-[600px] bg-blue-500/10 blur-[130px] rounded-full opacity-50 mix-blend-screen" />

      {/* 3. Interactive Mouse Spotlight (Linear.app Style) */}
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.04),
              transparent 80%
            )
          `,
        }}
      />

      {/* 4. Elegant Film Grain Noise (Whisper subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
