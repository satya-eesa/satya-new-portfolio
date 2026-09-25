'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  dirX: number;
  dirY: number;
  length: number;
  color: string;
  history: { x: number; y: number }[];
}

export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // PCB Trace Nodes (Vias)
    const gridSize = 60;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    // Electronics Signal Pulse Particles
    const colors = ['#00f0ff', '#8b5cf6', '#38bdf8', '#ff9f1c', '#10b981'];
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 35), 35);

    for (let i = 0; i < particleCount; i++) {
      const startCol = Math.floor(Math.random() * cols);
      const startRow = Math.floor(Math.random() * rows);
      particles.push({
        x: startCol * gridSize,
        y: startRow * gridSize,
        speed: 1.5 + Math.random() * 2,
        dirX: Math.random() > 0.5 ? 1 : 0,
        dirY: Math.random() > 0.5 ? 0 : 1,
        length: 12 + Math.random() * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        history: [],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle PCB vias (drilled connection pads)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      for (let x = gridSize; x < width; x += gridSize * 2) {
        for (let y = gridSize; y < height; y += gridSize * 2) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw Circuit Particles traversing orthogonal traces
      particles.forEach((p) => {
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > p.length) {
          p.history.shift();
        }

        // Draw trail
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let i = 1; i < p.history.length; i++) {
            ctx.lineTo(p.history[i].x, p.history[i].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw head
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move along trace
        p.x += p.dirX * p.speed;
        p.y += p.dirY * p.speed;

        // Check if reached a grid intersection to make 90 degree turns
        if (
          Math.floor(p.x) % gridSize < p.speed &&
          Math.floor(p.y) % gridSize < p.speed &&
          Math.random() < 0.25
        ) {
          if (p.dirX !== 0) {
            p.dirX = 0;
            p.dirY = Math.random() > 0.5 ? 1 : -1;
          } else {
            p.dirY = 0;
            p.dirX = Math.random() > 0.5 ? 1 : -1;
          }
        }

        // Boundary wrap
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Canvas Circuit Lines */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Atmospheric Neon Radials */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-500/12 blur-[160px] animate-pulse [animation-duration:8s]" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-violet-600/12 blur-[180px] animate-pulse [animation-duration:11s]" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-500/8 blur-[170px]" />

      {/* Micro-dot semiconductor die matrix overlay */}
      <div className="absolute inset-0 bg-circuit-dots opacity-30" />

      {/* Subtle Scanline Bar moving down */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.015] to-transparent pointer-events-none animate-scanline" />
    </div>
  );
}
