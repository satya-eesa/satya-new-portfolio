'use client';

import React, { useEffect, useState } from 'react';

export default function AmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Interactive Cursor Spotlight */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-transform duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 70%)',
          left: `${mousePos.x - 300}px`,
          top: `${mousePos.y - 300}px`,
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Ambient Atmospheric Gradients */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gradient-to-br from-indigo-600/15 via-cyan-500/10 to-transparent blur-[160px]" />
      <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[180px]" />
      <div className="absolute top-[65%] -right-48 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[180px]" />
      <div className="absolute bottom-10 left-1/3 w-[700px] h-[450px] rounded-full bg-indigo-500/10 blur-[160px]" />
    </div>
  );
}
