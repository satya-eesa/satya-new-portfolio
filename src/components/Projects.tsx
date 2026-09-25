'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Cpu,
  Bot,
  ExternalLink,
  Maximize2,
  X,
  Battery,
  Navigation,
  Camera,
  Droplets,
  Radio,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import AluSimulator from './AluSimulator';

export default function Projects() {
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; caption: string } | null>(null);
  const [roverNavState, setRoverNavState] = useState<'AUTO_WAYPOINT' | 'OBSTACLE_AVOID' | 'SOIL_SAMPLING'>('AUTO_WAYPOINT');

  const aluProject = projectsData.find((p) => p.id === 'alu-8bit')!;
  const roverProject = projectsData.find((p) => p.id === 'agri-rover')!;

  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-slate-50/50 dark:bg-[#060912] transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Flagship <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Hardware Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Real-world systems engineered from register transfer level RTL silicon up to autonomous edge field robotics.
          </p>
        </div>

        {/* ========================================================
            PROJECT 1: ADVANCED 8-BIT MODULAR RTL ALU
            ======================================================== */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 mb-16 shadow-2xl glass-panel-hover">
          
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold">
                  01 • DIGITAL SILICON DESIGN
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  Synthesized in Vivado
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white">
                {aluProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {aluProject.subtitle}
              </p>
            </div>

            {/* GitHub Repo Button */}
            <a
              href={aluProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-white transition shadow-sm"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
            
            {/* Left: Description & Key Highlights (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {aluProject.description}
              </p>

              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Key Architectural Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {aluProject.highlights.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {aluProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Authentic Verification Screenshots Gallery (5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Simulation Waveforms &amp; Logs</span>
              </div>

              {/* Clickable Image Lightbox Thumbnails */}
              <div className="space-y-3.5">
                {(aluProject.images || []).map((shot, sIdx) => {
                  const windowTitles = ['gtkwave_sim.vcd — Timing Waveform', 'testbench_sim.log — Icarus Verilog', 'alu_8bit.v — VS Code Hierarchy'];
                  return (
                    <div
                      key={sIdx}
                      onClick={() => setActiveModalImage({ src: shot.src, caption: shot.caption })}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] hover:border-indigo-400/50 bg-slate-100 dark:bg-[#080d1a] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                    >
                      {/* Window Titlebar */}
                      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-200/80 dark:bg-[#0a0e1c] border-b border-slate-300/80 dark:border-white/[0.06] text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 text-[10px] truncate max-w-[200px]">
                          {windowTitles[sIdx] || shot.caption}
                        </span>
                        <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                          Inspect &rarr;
                        </span>
                      </div>

                      <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-black/40">
                        <Image
                          src={shot.src}
                          alt={shot.caption}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200 font-mono">
                          <span className="truncate pr-2">{shot.caption}</span>
                          <Maximize2 className="w-3.5 h-3.5 text-white/80 flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Embedded Interactive Silicon Lab for ALU */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/[0.08]">
            <AluSimulator />
          </div>

        </div>

        {/* ========================================================
            PROJECT 2: AUTONOMOUS AGRICULTURAL MONITORING ROVER
            ======================================================== */}
        <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-2xl glass-panel-hover">
          
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold">
                  02 • ROBOTICS &amp; EDGE AI
                </span>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
                  Dual-Core Tiered Compute
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white">
                {roverProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {roverProject.subtitle}
              </p>
            </div>

            <a
              href={roverProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-white transition shadow-sm"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
            
            {/* Left: Description & Architecture (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {roverProject.description}
              </p>

              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Systems Architecture &amp; Capabilities</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {roverProject.highlights.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Data Bus Schematic Pill */}
              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#060912] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-slate-300">
                <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1">Inter-Processor Bus Flow:</span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                  Sensors &rarr; ADC / I2C Bus &rarr; ESP32 Motor Control &rarr; UART (115200) &rarr; Raspberry Pi Computer Vision &rarr; Cloud Dashboard
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {roverProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Live Rover Telemetry Dashboard (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-slate-50 dark:bg-[#0a0e1c] border border-cyan-500/30 shadow-xl relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-white/[0.08] text-xs">
                  <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-bold font-heading">
                    <Radio className="w-4 h-4 animate-pulse text-cyan-600 dark:text-cyan-400" />
                    <span>FIELD MISSION TELEMETRY</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-semibold">
                    ONLINE
                  </span>
                </div>

                {/* Mode Selector */}
                <div className="flex items-center gap-1.5 mb-4 p-1 rounded-xl bg-slate-200/70 dark:bg-black/50 border border-slate-300/80 dark:border-white/[0.06] text-[10px] font-mono">
                  {(['AUTO_WAYPOINT', 'OBSTACLE_AVOID', 'SOIL_SAMPLING'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setRoverNavState(mode)}
                      className={`flex-1 py-1.5 px-1 rounded-lg transition font-bold text-center ${
                        roverNavState === mode
                          ? 'bg-cyan-500 text-white dark:bg-cyan-500/20 dark:text-cyan-300 border border-cyan-600 dark:border-cyan-400/50 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {mode.replace('_', ' ')}
                    </button>
                  ))}
                </div>

                {/* Telemetry Metric Cards */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {/* Battery */}
                  <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Battery className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                        <span>BATTERY</span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">94%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 dark:bg-emerald-400 h-full w-[94%]" />
                    </div>
                  </div>

                  {/* Camera */}
                  <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>EDGE CV</span>
                      </span>
                      <span className="text-cyan-600 dark:text-cyan-300 font-mono font-bold">30 FPS</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Row-Follow OK</div>
                  </div>

                  {/* Soil Moisture */}
                  <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                        <span>SOIL MOIST</span>
                      </span>
                      <span className="text-sky-600 dark:text-sky-300 font-mono font-bold">42%</span>
                    </div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Optimal Field</div>
                  </div>

                  {/* GPS */}
                  <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] shadow-sm">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                        <span>WAYPOINT</span>
                      </span>
                      <span className="text-amber-600 dark:text-amber-300 font-mono font-bold">WP #04</span>
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">13.55°N 80.02°E</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Waveforms */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-white dark:bg-[#090d1a] border border-slate-200 dark:border-white/[0.15] p-5 sm:p-7 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08] mb-4">
              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                {activeModalImage.caption}
              </h4>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.16] text-slate-800 dark:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative w-full h-[55vh] rounded-xl overflow-hidden bg-black">
              <Image
                src={activeModalImage.src}
                alt={activeModalImage.caption}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
