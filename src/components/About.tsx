'use client';

import React from 'react';
import {
  Cpu,
  CheckCircle2,
  Activity,
  Award,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#04060c] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineer Profile &amp; Dossier</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">Satya Eesa</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-mono text-xs sm:text-sm">
            {'// SPECIALIZATION: FRONT-END RTL DESIGN • DIGITAL MICROARCHITECTURE • EMBEDDED SYSTEMS'}
          </p>
        </div>

        {/* Narrative & Dossier Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Dossier Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 cyber-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DOSSIER // HARDWARE_ENGINEER</span>
                </span>
                <span className="text-slate-500">ID: SE-IIITS-2025</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-snug">
                Bridging Algorithmic Theory with <span className="text-cyan-400">Physical Silicon Reality</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  I am an <strong className="text-white">Electronics &amp; Communication Engineering</strong> undergraduate at the{' '}
                  <strong className="text-cyan-300 font-semibold">{personalInfo.institution}</strong>. My technical ethos is anchored in digital determinism: crafting hardware modules with predictable latency, minimal silicon area, and zero setup/hold timing violations.
                </p>
                <p className="text-slate-400">
                  Whether architecting an 8-bit modular Arithmetic Logic Unit with 9 functional operations and flag controllers in Verilog, or developing an autonomous agricultural rover with distributed dual-core processing, I design with production constraints in mind.
                </p>
              </div>
            </div>

            {/* Hardware Directives List */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Synthesizable Verilog-2001</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Self-Checking Testbenches</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Timing Closure in Vivado</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Edge IoT &amp; Embedded C++</span>
              </div>
            </div>
          </div>

          {/* Right Bento Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Bento 1: Academic Excellence Highlight */}
            <div className="p-6 rounded-2xl cyber-card flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  TOP 0.6% PERCENTILE
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Academic Rigor
                </span>
                <h4 className="text-xl font-bold text-white mt-1">994 / 1000 in Intermediate</h4>
                <p className="mt-2 text-xs text-slate-400">
                  Exceptional mastery across Advanced Mathematics, Electromagnetism, Physics, and Inorganic Chemistry.
                </p>
              </div>
            </div>

            {/* Bento 2: Core Focus */}
            <div className="p-6 rounded-2xl cyber-card flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  PRIMARY DOMAIN
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Silicon Architecture
                </span>
                <h4 className="text-xl font-bold text-white mt-1">VLSI &amp; RTL Design</h4>
                <p className="mt-2 text-xs text-slate-400">
                  Combinational/sequential datapaths, FSM state encoding (One-hot, Gray), static timing analysis, and ASIC design flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
