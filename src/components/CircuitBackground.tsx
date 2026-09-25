'use client';

import React from 'react';

export default function CircuitBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background radial gradient halos */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[160px]" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[180px]" />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[170px]" />

      {/* Micro-dot semiconductor die matrix grid */}
      <div className="absolute inset-0 bg-circuit-dots opacity-40" />

      {/* Subtle Circuit Trace Line Elements (Left and Right Flanks) */}
      <svg
        className="absolute top-20 left-0 w-80 h-[700px] opacity-25 hidden md:block"
        viewBox="0 0 320 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="traceGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Bus traces */}
        <g stroke="url(#traceGradCyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 60 H140 L180 100 H280" />
          <path d="M0 140 H90 L130 180 V280 L170 320 H310" />
          <path d="M0 240 H60 L100 280 H180" />
          <path d="M40 380 H120 L160 420 V520 H260" />
          <path d="M0 580 H140 L200 640 H310" />
        </g>

        {/* Dynamic moving clock packets */}
        <circle r="3" fill="#22d3ee" filter="url(#glowFilter)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M0 60 H140 L180 100 H280" />
        </circle>
        <circle r="2.5" fill="#a855f7" filter="url(#glowFilter)">
          <animateMotion dur="11s" repeatCount="indefinite" path="M0 140 H90 L130 180 V280 L170 320 H310" />
        </circle>
        <circle r="2.5" fill="#38bdf8" filter="url(#glowFilter)">
          <animateMotion dur="9s" repeatCount="indefinite" path="M0 580 H140 L200 640 H310" />
        </circle>

        {/* Node pads */}
        <circle cx="280" cy="100" r="4" fill="#0891b2" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="310" cy="320" r="4" fill="#6d28d9" stroke="#a855f7" strokeWidth="1.5" />
        <circle cx="180" cy="280" r="3.5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
        <circle cx="260" cy="520" r="4" fill="#0891b2" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="310" cy="640" r="4" fill="#6d28d9" stroke="#a855f7" strokeWidth="1.5" />

        {/* Silicon IC Die pad outline */}
        <rect x="20" y="80" width="36" height="36" rx="4" stroke="#06b6d4" strokeOpacity="0.4" strokeWidth="1" />
        <line x1="12" y1="88" x2="20" y2="88" stroke="#06b6d4" strokeOpacity="0.5" />
        <line x1="12" y1="98" x2="20" y2="98" stroke="#06b6d4" strokeOpacity="0.5" />
        <line x1="12" y1="108" x2="20" y2="108" stroke="#06b6d4" strokeOpacity="0.5" />
        <line x1="56" y1="88" x2="64" y2="88" stroke="#06b6d4" strokeOpacity="0.5" />
        <line x1="56" y1="98" x2="64" y2="98" stroke="#06b6d4" strokeOpacity="0.5" />
        <line x1="56" y1="108" x2="64" y2="108" stroke="#06b6d4" strokeOpacity="0.5" />
      </svg>

      {/* Right Flank Circuit Trace */}
      <svg
        className="absolute top-40 right-0 w-80 h-[700px] opacity-25 hidden md:block"
        viewBox="0 0 320 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="url(#traceGradCyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M320 80 H200 L160 120 H40" />
          <path d="M320 200 H220 L180 240 V340 L140 380 H20" />
          <path d="M320 480 H210 L160 530 H60" />
          <path d="M280 620 H180 L130 670 H20" />
        </g>

        <circle r="3" fill="#a855f7" filter="url(#glowFilter)">
          <animateMotion dur="9s" repeatCount="indefinite" path="M320 80 H200 L160 120 H40" />
        </circle>
        <circle r="2.5" fill="#22d3ee" filter="url(#glowFilter)">
          <animateMotion dur="12s" repeatCount="indefinite" path="M320 200 H220 L180 240 V340 L140 380 H20" />
        </circle>

        <circle cx="40" cy="120" r="4" fill="#6d28d9" stroke="#a855f7" strokeWidth="1.5" />
        <circle cx="20" cy="380" r="4" fill="#0891b2" stroke="#22d3ee" strokeWidth="1.5" />
        <circle cx="60" cy="530" r="4" fill="#6d28d9" stroke="#a855f7" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
