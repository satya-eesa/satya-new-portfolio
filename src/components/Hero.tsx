'use client';

import React from 'react';
import Image from 'next/image';
import {
  FileText,
  ArrowRight,
  Cpu,
  Binary,
  Layers,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#06070a]"
    >
      {/* Silicon Wafer Grid & Glow */}
      <div className="absolute inset-0 bg-semiconductor-grid opacity-30 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for VLSI &amp; RTL Internships</span>
            </div>

            {/* Sub-tagline */}
            <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-violet-400 font-semibold mb-2 flex items-center gap-2">
              <Binary className="w-4 h-4 text-cyan-400 inline" />
              <span>Architecting Digital Silicon Systems</span>
            </p>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none">
              <span className="block">Satya</span>
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-300 bg-clip-text text-transparent">
                Eesa
              </span>
            </h1>

            {/* Role & Affiliation */}
            <div className="mt-4 flex flex-col gap-1.5">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-200">
                Electronics &amp; Communication Engineering Student
              </h2>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>IIIT Sri City</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Andhra Pradesh, India</span>
                </span>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Passionate about <span className="text-cyan-400 font-semibold">RTL Design</span>,{' '}
              <span className="text-violet-400 font-semibold">Digital Logic Architecture</span>, and{' '}
              <span className="text-amber-400 font-semibold">Embedded Systems</span>. Dedicated to translating
              complex algorithms into synthesizable Verilog modules and building autonomous robotic solutions.
            </p>

            {/* Tech Focus Badges */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
              {['VLSI', 'Verilog HDL', 'RTL Design', 'Vivado', 'FPGA', 'Embedded Systems', 'IoT'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Cpu className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
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

          {/* Right Column: Profile Image with Semiconductor Package Die Frame */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              {/* Outer Glowing Halos */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-violet-600/30 to-amber-500/20 blur-2xl animate-pulse" />

              {/* Concentric Semiconductor Orbit Rings */}
              <div className="absolute -inset-6 rounded-full border border-cyan-500/20 border-dashed animate-spin [animation-duration:40s]" />
              <div className="absolute -inset-10 rounded-full border border-violet-500/15 [animation-duration:60s]" />

              {/* Pinout Markers on Perimeter */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-2 py-0.5 rounded bg-black/80 border border-cyan-500/40 text-[9px] font-mono text-cyan-300">
                CLK_SYS
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 px-2 py-0.5 rounded bg-black/80 border border-violet-500/40 text-[9px] font-mono text-violet-300">
                RST_N
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 px-1.5 py-0.5 rounded bg-black/80 border border-amber-500/40 text-[9px] font-mono text-amber-300 rotate-90">
                DATA_IN
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 px-1.5 py-0.5 rounded bg-black/80 border border-emerald-500/40 text-[9px] font-mono text-emerald-300 -rotate-90">
                DATA_OUT
              </div>

              {/* Central Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-gradient-to-b from-cyan-500/30 via-violet-500/20 to-black/80 border-2 border-cyan-400/50 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border border-white/20">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 256px, 350px"
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none opacity-40 animate-scanline" />
                </div>
              </div>

              {/* Floating Chip Status Card */}
              <div className="absolute -bottom-4 right-0 sm:-right-4 px-3.5 py-2 rounded-xl bg-[#0b0e1b]/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Focus Area</div>
                  <div className="text-xs font-bold text-white">VLSI / RTL Synthesis</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro-Telemetry Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Primary HDL</span>
            <span className="text-sm font-mono font-bold text-cyan-300">Verilog HDL / Vivado</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Academic Program</span>
            <span className="text-sm font-mono font-bold text-violet-300">B.Tech ECE (IIIT Sri City)</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Intermediate Score</span>
            <span className="text-sm font-mono font-bold text-amber-300">994 / 1000 Marks</span>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Career Direction</span>
            <span className="text-sm font-mono font-bold text-emerald-300">ASIC &amp; RTL Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}
