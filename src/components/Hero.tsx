'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  FileText,
  ArrowRight,
  Cpu,
  Binary,
  GraduationCap,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeChipView, setActiveChipView] = useState<'portrait' | 'waveform' | 'specs'>('portrait');

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#030508]"
    >
      {/* Dynamic Cyber Glow background elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ========================================================
              LEFT COLUMN: COMMAND CONSOLE & HEADLINE
              ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Terminal prompt badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>IIIT SRI CITY // B.TECH ECE // VLSI CANDIDATE</span>
            </div>

            {/* Sub-tagline */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest uppercase text-violet-400 font-bold mb-2">
              <Binary className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Architecting Digital Silicon Systems</span>
            </div>

            {/* Giant Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
              <span>Satya </span>
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent text-glow-cyan">
                Eesa
              </span>
            </h1>

            {/* Subtitle & University */}
            <div className="mt-4 flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Electronics &amp; Communication Engineering</span>
                <span className="hidden sm:inline text-cyan-400">•</span>
                <span className="text-cyan-300 font-mono text-lg">Aspiring VLSI Engineer</span>
              </h2>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-sm font-medium text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>Indian Institute of Information Technology, Sri City</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-amber-300 font-mono text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>JEE Advanced Qualified</span>
                </span>
              </div>
            </div>

            {/* Narrative Bio */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Transforming complex algorithmic architectures into timing-closed, synthesizable <strong className="text-cyan-300 font-semibold">Verilog HDL</strong> modules. Experienced in <span className="text-violet-300 font-semibold">modular RTL datapaths</span>, <span className="text-amber-300 font-semibold">Vivado &amp; GTKWave simulation</span>, and <span className="text-emerald-300 font-semibold">autonomous dual-core robotics</span>.
            </p>

            {/* Interactive Focus Tags */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {[
                'Verilog HDL',
                'RTL Datapaths',
                'Xilinx Vivado',
                'GTKWave Sim',
                'FPGA Flow',
                'Raspberry Pi / ESP32',
                'Autonomous Robotics',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#0c1020] border border-white/10 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-default"
                >
                  #{skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group relative flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 text-white shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                <Cpu className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500" />
                <span>Launch Hardware Bench</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/15 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: 3D CERAMIC SILICON IC PACKAGE & CONSOLE
              ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            {/* The Ceramic IC Package Frame */}
            <div className="relative p-7 sm:p-9 rounded-3xl bg-[#090d18] border-2 border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.25)] cyber-card w-full max-w-md">
              {/* Outer Golden Pins around perimeter (Top & Bottom) */}
              <div className="absolute -top-3 left-8 right-8 flex justify-between pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-3 ic-gold-pin rounded-t-sm" />
                ))}
              </div>
              <div className="absolute -bottom-3 left-8 right-8 flex justify-between pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-3 ic-gold-pin rounded-b-sm" />
                ))}
              </div>

              {/* Pin 1 Alignment Notch */}
              <div className="absolute top-3 left-3 w-4 h-4 rounded-full border border-cyan-400/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Laser Engraved Package Label */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">SATYA-EESA</span>
                  <span className="text-slate-600">{'//'}</span>
                  <span className="text-slate-300">RTL-CORE-V2</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
                  QFP-64 DIE
                </span>
              </div>

              {/* Interactive View Selector Chips on top of the Die */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <button
                  onClick={() => setActiveChipView('portrait')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeChipView === 'portrait'
                      ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  Silicon Die
                </button>
                <button
                  onClick={() => setActiveChipView('waveform')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeChipView === 'waveform'
                      ? 'bg-violet-500/20 border border-violet-400 text-violet-200 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  Live Waveform
                </button>
                <button
                  onClick={() => setActiveChipView('specs')}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeChipView === 'specs'
                      ? 'bg-amber-500/20 border border-amber-400 text-amber-200 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                  }`}
                >
                  Synthesis Spec
                </button>
              </div>

              {/* Central Silicon Window */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#04060c] border border-cyan-500/30 flex items-center justify-center p-2 shadow-inner">
                {activeChipView === 'portrait' && (
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      fill
                      sizes="(max-width: 768px) 300px, 400px"
                      priority
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Laser Targeting HUD Reticle Overlay */}
                    <div className="absolute inset-0 pointer-events-none p-3 flex flex-col justify-between">
                      <div className="flex justify-between items-start text-[9px] font-mono text-cyan-300">
                        <span className="bg-black/60 px-1 rounded border border-cyan-500/40">
                          X: 13.55°N
                        </span>
                        <span className="bg-black/60 px-1 rounded border border-cyan-500/40">
                          Y: 80.02°E
                        </span>
                      </div>
                      <div className="flex justify-between items-end text-[9px] font-mono text-emerald-300">
                        <span className="bg-black/60 px-1 rounded border border-emerald-500/40">
                          FAB: IIITS
                        </span>
                        <span className="bg-black/60 px-1 rounded border border-emerald-500/40">
                          LOCK: TRUE
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeChipView === 'waveform' && (
                  <div className="w-full h-full flex flex-col justify-around p-4 font-mono text-xs text-cyan-300">
                    <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-white/10">
                      <span>GTKWAVE OSCILLOSCOPE TRACE</span>
                      <span className="text-emerald-400">CLK: 100MHz</span>
                    </div>
                    {/* Channel 1 */}
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>clk</span>
                        <span>PERIOD: 10ns</span>
                      </div>
                      <div className="h-6 flex items-center text-cyan-400">
                        <svg className="w-full h-full" viewBox="0 0 300 20" fill="none">
                          <path
                            d="M0 16 V4 H25 V16 H50 V4 H75 V16 H100 V4 H125 V16 H150 V4 H175 V16 H200 V4 H225 V16 H250 V4 H275 V16 H300"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="circuit-flow-fast"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Channel 2 */}
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>alu_out[7:0]</span>
                        <span className="text-violet-300">HEX: 8&apos;h48</span>
                      </div>
                      <div className="h-6 flex items-center text-violet-400">
                        <svg className="w-full h-full" viewBox="0 0 300 20" fill="none">
                          <path
                            d="M0 10 H60 L70 4 H140 L150 16 H220 L230 4 H300"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* Channel 3 */}
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>zero_flag</span>
                        <span className="text-emerald-300">PULSE: 0</span>
                      </div>
                      <div className="h-4 flex items-center text-emerald-400">
                        <svg className="w-full h-full" viewBox="0 0 300 16" fill="none">
                          <path d="M0 14 H160 V2 H200 V14 H300" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {activeChipView === 'specs' && (
                  <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-xs">
                    <div className="text-[10px] uppercase text-cyan-400 pb-2 border-b border-white/10 font-bold">
                      Xilinx Vivado Synthesis Summary
                    </div>
                    <div className="space-y-2 text-slate-300 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Target FPGA:</span>
                        <span className="text-white font-bold">Artix-7 XC7A35T</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Slice LUTs:</span>
                        <span className="text-cyan-300">48 / 20800 (&lt;1%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Worst Neg Slack:</span>
                        <span className="text-emerald-400 font-bold">+0.428 ns (MET)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Max Frequency:</span>
                        <span className="text-amber-300 font-bold">148.5 MHz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Dynamic Power:</span>
                        <span className="text-slate-200">12.4 mW</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>TIMING CLOSURE PASSED</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Package Pinout Legend Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>PIN_COUNT: 64-LEAD</span>
                <span className="text-cyan-400 font-semibold">DIE_TEMP: 34.2°C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
