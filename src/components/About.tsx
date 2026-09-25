'use client';

import React from 'react';
import {
  Cpu,
  Layers,
  Terminal,
  Zap,
  Bot,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#070a12]/80 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineer Profile</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Architecting Silicon from <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Registers to Robotics</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            Passionate hardware engineer shaping digital logic from registers to physical silicon systems at IIIT Sri City.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Card 1: Main Story (8 Columns) */}
          <div className="md:col-span-8 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">The Engineering Journey</h3>
                  <p className="text-xs text-slate-400">From register transfer level to edge intelligence</p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I am an Electronics &amp; Communication Engineering undergraduate at the{' '}
                  <strong className="text-white">Indian Institute of Information Technology, Sri City (IIIT Sri City)</strong>.
                  My engineering journey is founded on the conviction that the most transformative technological breakthroughs happen at the physical compute layer—through clean microarchitectures, deterministic timing closure, and synthesizable RTL design.
                </p>
                <p>
                  Whether designing an 8-bit Arithmetic Logic Unit from scratch in Verilog HDL or architecting an autonomous agricultural field rover with real-time edge computer vision, I thrive on tackling real-world engineering trade-offs: latency, resource utilization, power efficiency, and self-checking testbench verification.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Focus: VLSI Front-End • RTL Microarchitecture</span>
              </div>
              <a
                href="#silicon-lab"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
              >
                <span>Test Interactive ALU</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Academic Roots (4 Columns) */}
          <div className="md:col-span-4 rounded-3xl glass-panel p-6 sm:p-8 flex flex-col justify-between glass-panel-hover">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Academic Rigor</h3>
                  <p className="text-xs text-slate-400">Scholastic distinction</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[11px] text-slate-400 uppercase font-mono block">IIIT Sri City</span>
                  <span className="text-sm font-semibold text-white block mt-0.5">B.Tech in ECE</span>
                  <span className="text-[11px] text-slate-400">Digital Architecture, VLSI Design, Embedded Systems</span>
                </div>

                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[11px] text-slate-400 uppercase font-mono block">Intermediate (MPC)</span>
                  <span className="text-sm font-semibold text-cyan-300 block mt-0.5">994 / 1000 Marks</span>
                  <span className="text-[11px] text-slate-400">Ranked in top 0.6% statewide in Mathematics, Physics &amp; Chemistry</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.08] text-xs text-slate-400">
              JEE Advanced Qualified
            </div>
          </div>

          {/* Card 3: Four Pillars of Specialization (12 Columns) */}
          <div className="md:col-span-12 rounded-3xl glass-panel p-6 sm:p-8 glass-panel-hover">
            <h4 className="font-heading font-bold text-base text-white mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>Core Engineering Pillars</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/30 transition">
                <div className="p-2 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-white">Digital RTL Design</h5>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Synthesizable Verilog HDL, datapath architecture, control unit FSMs, and register-level logic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition">
                <div className="p-2 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
                  <Terminal className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-white">EDA &amp; Verification</h5>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Waveform debugging in GTKWave, logic synthesis in Xilinx Vivado, and self-checking testbenches.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-violet-500/30 transition">
                <div className="p-2 w-fit rounded-xl bg-violet-500/10 text-violet-400 mb-3">
                  <Bot className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-white">Edge Robotics &amp; IoT</h5>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  Dual-tier computing hierarchy: Raspberry Pi for Edge CV combined with ESP32 for deterministic motor control.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/30 transition">
                <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-400 mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h5 className="font-heading font-bold text-sm text-white">Hardware-Software Links</h5>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  C/C++ firmware, UART/I2C/SPI protocols, Linux driver interfaces, and Python telemetry pipelines.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
