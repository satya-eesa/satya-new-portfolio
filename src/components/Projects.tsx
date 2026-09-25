'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Cpu,
  Bot,
  ExternalLink,
  Maximize2,
  X,
  ChevronRight,
  Sliders,
  CheckCircle2,
  Activity,
  Battery,
  Navigation,
  Camera,
  Droplets,
  Radio,
  Gauge
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import AluSimulator from './AluSimulator';

export default function Projects() {
  const [showSimulator, setShowSimulator] = useState<boolean>(true);
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; caption: string } | null>(null);

  // Rover simulated telemetry toggle
  const [roverNavState, setRoverNavState] = useState<'AUTO_WAYPOINT' | 'OBSTACLE_AVOID' | 'SOIL_SAMPLING'>('AUTO_WAYPOINT');

  const aluProject = projectsData.find((p) => p.id === 'alu-8bit')!;
  const roverProject = projectsData.find((p) => p.id === 'agri-rover')!;

  return (
    <section id="projects" className="relative py-28 bg-[#030508] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 -right-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Silicon &amp; Systems Engineering</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">Hardware Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-mono text-xs sm:text-sm">
            // FULL-STACK HARDWARE: FROM REGISTER TRANSFER LEVEL (RTL) TO AUTONOMOUS FIELD ROBOTICS
          </p>
        </div>

        {/* ========================================================
            PROJECT 1: ADVANCED 8-BIT MODULAR RTL ALU
            ======================================================== */}
        <div className="rounded-3xl p-6 sm:p-10 mb-16 cyber-card border-2 border-cyan-500/30">
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2 font-mono">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]">
                  {aluProject.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs">
                  {aluProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">{aluProject.title}</h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">{aluProject.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={aluProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 text-sm font-mono font-bold text-cyan-300 transition shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Verilog Source Repository</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Description & Technical Highlights */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-base text-slate-300 leading-relaxed">
                {aluProject.description}
              </p>

              <div className="p-5 rounded-2xl bg-black/60 border border-cyan-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2 font-bold">
                  <Activity className="w-4 h-4" />
                  <span>RTL Architecture &amp; Verification Highlights</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {aluProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {aluProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hardware Spec Matrix & Waveforms */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-5 bg-[#060814] border border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-3 pb-2 border-b border-white/5 font-bold">
                  Synthesized Datapath Specifications
                </span>
                <div className="space-y-3">
                  {aluProject.specifications?.map((spec) => (
                    <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="text-slate-400 font-mono">{spec.label}</span>
                      <span className="font-mono font-semibold text-cyan-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulation Screenshots Gallery Preview */}
              {aluProject.images && aluProject.images.length > 0 && (
                <div className="mt-5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
                    GTKWave Signal Waveforms (Click to Expand)
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {aluProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(img)}
                        className="group relative h-20 rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-md"
                        title={img.caption}
                      >
                        <Image
                          src={img.src}
                          alt={img.caption}
                          fill
                          sizes="150px"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive ALU Simulator Bench */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Live Virtual Hardware Bench</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Interact with real synthesized 8-bit logic registers &amp; flags
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSimulator(!showSimulator)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition"
              >
                <span>{showSimulator ? 'Collapse Bench' : 'Expand Bench'}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showSimulator ? 'rotate-90' : ''
                  }`}
                />
              </button>
            </div>

            {showSimulator && (
              <div className="animate-fadeIn">
                <AluSimulator />
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            PROJECT 2: AUTONOMOUS AGRICULTURAL ROVER - MISSION CONTROL
            ======================================================== */}
        <div className="rounded-3xl p-6 sm:p-10 cyber-card border-2 border-amber-500/30">
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2 font-mono">
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                  {roverProject.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs">
                  {roverProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">{roverProject.title}</h3>
              <p className="text-sm font-mono text-amber-400 mt-1">{roverProject.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={roverProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-sm font-mono font-bold text-amber-300 transition shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repositories</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Description & Systems Architecture */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-base text-slate-300 leading-relaxed">
                {roverProject.description}
              </p>

              <div className="p-5 rounded-2xl bg-black/60 border border-amber-500/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2 font-bold">
                  <Bot className="w-4 h-4" />
                  <span>Dual-Core Computing Architecture</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  {roverProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {roverProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Live Rover Telemetry Dashboard */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-[#070a14] border-2 border-amber-500/40 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-xs">
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <Radio className="w-4 h-4 animate-pulse text-amber-400" />
                    <span>MISSION CONTROL TELEMETRY</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                    CONNECTED
                  </span>
                </div>

                {/* Telemetry Metric Cards */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  {/* Battery */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Battery className="w-3.5 h-3.5 text-emerald-400" />
                        <span>BATTERY</span>
                      </span>
                      <span className="text-emerald-400">94%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[94%]" />
                    </div>
                  </div>

                  {/* Camera */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Camera className="w-3.5 h-3.5 text-cyan-400" />
                        <span>EDGE CV</span>
                      </span>
                      <span className="text-cyan-300">30 FPS</span>
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">Row-Follow OK</div>
                  </div>

                  {/* Soil Moisture */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-sky-400" />
                        <span>SOIL MOIST</span>
                      </span>
                      <span className="text-sky-300">42%</span>
                    </div>
                    <div className="text-[10px] text-emerald-400">Optimal Field</div>
                  </div>

                  {/* GPS */}
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-1">
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5 text-amber-400" />
                        <span>WAYPOINT</span>
                      </span>
                      <span className="text-amber-300">WP #04</span>
                    </div>
                    <div className="text-[10px] text-slate-400">13.55°N 80.02°E</div>
                  </div>
                </div>

                {/* Architecture Bus Line */}
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                  <span className="text-amber-400 font-bold block mb-1">Inter-Processor Bus:</span>
                  <div className="p-2 rounded bg-black/80 text-[10px] text-slate-400 border border-white/5">
                    RPi 4 (Vision) &lt;--[UART 115200]--&gt; ESP32 (PWM / Sensors)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Waveform Lightbox */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[#070a14] border-2 border-cyan-400/50 p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h4 className="text-sm sm:text-base font-mono text-cyan-300 font-bold">
                {activeModalImage.caption}
              </h4>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[65vh] rounded-xl overflow-hidden bg-black">
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
