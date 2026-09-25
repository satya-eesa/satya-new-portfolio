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
  Activity
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import AluSimulator from './AluSimulator';

export default function Projects() {
  const [showSimulator, setShowSimulator] = useState<boolean>(true);
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; caption: string } | null>(null);

  const aluProject = projectsData.find((p) => p.id === 'alu-8bit')!;
  const roverProject = projectsData.find((p) => p.id === 'agri-rover')!;

  return (
    <section id="projects" className="relative py-28 bg-[#080a14] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 -right-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Hardware &amp; <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-300 bg-clip-text text-transparent">Robotics Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Real-world implementations spanning digital RTL synthesis, simulation waveforms, and autonomous embedded edge robotics.
          </p>
        </div>

        {/* ========================================================
            FEATURED PROJECT 1: ADVANCED 8-BIT MODULAR RTL ALU
            ======================================================== */}
        <div className="rounded-3xl border border-cyan-500/30 bg-[#0a0d1c]/90 backdrop-blur-xl p-6 sm:p-10 mb-16 shadow-[0_0_50px_rgba(6,182,212,0.12)]">
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  {aluProject.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                  {aluProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{aluProject.title}</h3>
              <p className="text-sm font-medium text-cyan-300/90 mt-1">{aluProject.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={aluProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
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

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Key Architectural Features</span>
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
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Hardware Spec Matrix */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-5 bg-black/50 border border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 pb-2 border-b border-white/5">
                  RTL Microarchitecture Specs
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
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                    Simulation &amp; GTKWave Waveforms
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {aluProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveModalImage(img)}
                        className="group relative h-20 rounded-xl overflow-hidden border border-white/15 hover:border-cyan-400 transition-all"
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
                          <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-mono">
                    Click any screenshot to view full waveform and testbench log
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Interactive ALU Simulator Toggle Banner */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Live RTL Hardware Testbench</h4>
                  <p className="text-xs text-slate-400">
                    Interact directly with the synthesized 8-bit arithmetic logic unit logic
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSimulator(!showSimulator)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition"
              >
                <span>{showSimulator ? 'Collapse Simulator' : 'Expand Simulator'}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showSimulator ? 'rotate-90' : ''
                  }`}
                />
              </button>
            </div>

            {/* Embedded Live ALU Simulator Component */}
            {showSimulator && (
              <div className="animate-fadeIn">
                <AluSimulator />
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            FEATURED PROJECT 2: AUTONOMOUS AGRICULTURAL ROVER
            ======================================================== */}
        <div className="rounded-3xl border border-amber-500/30 bg-[#0a0d1c]/90 backdrop-blur-xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.1)]">
          {/* Card Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold">
                  {roverProject.category}
                </span>
                <span className="px-3 py-1 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                  {roverProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{roverProject.title}</h3>
              <p className="text-sm font-medium text-amber-300/90 mt-1">{roverProject.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={roverProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Description & Technical Highlights */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <p className="text-base text-slate-300 leading-relaxed">
                {roverProject.description}
              </p>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span>Systems Architecture &amp; Capabilities</span>
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
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Dual-Processor Architecture Matrix */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-5 bg-black/50 border border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 pb-2 border-b border-white/5">
                  Dual-Processor Hardware Allocation
                </span>
                <div className="space-y-3">
                  {roverProject.specifications?.map((spec) => (
                    <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                      <span className="text-slate-400 font-mono">{spec.label}</span>
                      <span className="font-mono font-semibold text-amber-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edge Telemetry Pipeline Diagram Box */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-violet-500/10 to-transparent border border-amber-500/20">
                <span className="text-[11px] font-mono text-amber-300 uppercase block font-semibold mb-1">
                  Embedded Telemetry Pipeline
                </span>
                <p className="text-xs text-slate-300">
                  Sensors → ADC / I2C Bus → ESP32 Real-Time Control → UART Inter-IC Link → Raspberry Pi Computer Vision → WiFi / Cloud Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal Lightbox for Waveforms & Screenshots */}
      {activeModalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl bg-[#090b14] border border-cyan-500/40 p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h4 className="text-sm sm:text-base font-mono text-cyan-300">
                {activeModalImage.caption}
              </h4>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden bg-black/50">
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
