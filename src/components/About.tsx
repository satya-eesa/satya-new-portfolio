'use client';

import React from 'react';
import { Cpu, Bot, Sparkles, BookOpen, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#080a12] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Profile &amp; Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Satya Eesa</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Passionate hardware engineer shaping digital logic from registers to physical silicon systems.
          </p>
        </div>

        {/* Top Split: Narrative & Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 flex flex-col gap-4 text-base sm:text-lg leading-relaxed text-slate-300">
            <p>
              I am an <strong className="text-white font-semibold">Electronics &amp; Communication Engineering</strong> undergraduate at the{' '}
              <strong className="text-cyan-300 font-semibold">{personalInfo.institution}</strong>. My technical journey is anchored in the belief that the future of computing is built at the hardware level—through clean microarchitecture, rigorous timing analysis, and deterministic RTL design.
            </p>
            <p className="text-slate-400">
              My core interests encompass <span className="text-cyan-300 font-medium">VLSI Design</span>,{' '}
              <span className="text-violet-300 font-medium">RTL Implementation</span>,{' '}
              <span className="text-amber-300 font-medium">Embedded Firmware</span>,{' '}
              <span className="text-emerald-300 font-medium">Internet of Things (IoT)</span>, and{' '}
              <span className="text-pink-300 font-medium">Autonomous Robotics</span>.
            </p>
            <p className="text-slate-400">
              Whether building an 8-bit Arithmetic Logic Unit from scratch in Verilog HDL or designing autonomous field rovers with edge computer vision, I thrive on tackling real-world engineering constraints: latency, resource utilization, power efficiency, and hardware verification.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                Engineering Directive
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                From Register Transfer Level to Edge Intelligence
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                  <span>Designing modular, synthesizable digital hardware modules using Verilog HDL.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                  <span>Validating signal integrity &amp; functional correctness via GTKWave testbenches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                  <span>Bridging physical compute with autonomous robotics (ESP32 + Raspberry Pi).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                  <span>Preparing for cutting-edge ASIC/SoC semiconductor industry roles.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Bento Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: VLSI / RTL */}
          <div className="group rounded-2xl p-6 bg-[#0c0f1c]/80 border border-white/10 hover:border-cyan-500/50 hover:bg-[#0e1224] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400">Core Focus</span>
              <h3 className="text-xl font-black text-white mt-1">VLSI &amp; RTL Design</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Datapath design, combinational ALU blocks, finite state machines, and synthesizable Verilog for ASICs and FPGAs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-300">
              <span>Primary Specialization</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 2: IIIT Sri City */}
          <div className="group rounded-2xl p-6 bg-[#0c0f1c]/80 border border-white/10 hover:border-violet-500/50 hover:bg-[#0e1224] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-violet-400">Institute</span>
              <h3 className="text-xl font-black text-white mt-1">IIIT Sri City</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Electronics &amp; Communication Engineering curriculum blending semiconductor physics, logic synthesis, and hardware-software architectures.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-violet-300">
              <span>B.Tech Undergrad</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 3: Embedded & Robotics */}
          <div className="group rounded-2xl p-6 bg-[#0c0f1c]/80 border border-white/10 hover:border-amber-500/50 hover:bg-[#0e1224] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400">Edge Systems</span>
              <h3 className="text-xl font-black text-white mt-1">IoT &amp; Robotics</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Dual-tier computing with Raspberry Pi and ESP32, multi-sensor telemetry, motor drivers, and computer vision pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-300">
              <span>Autonomous Systems</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* Card 4: FPGA & Learning */}
          <div className="group rounded-2xl p-6 bg-[#0c0f1c]/80 border border-white/10 hover:border-emerald-500/50 hover:bg-[#0e1224] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400">Practicum</span>
              <h3 className="text-xl font-black text-white mt-1">FPGA &amp; Simulation</h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Active problem solving on HDLBits, logic synthesis with Xilinx Vivado, and behavioral verification in GTKWave and Icarus Verilog.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-300">
              <span>Continuous Growth</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
