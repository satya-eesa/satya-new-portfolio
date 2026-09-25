'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Download,
  Sparkles,
  MapPin,
  CheckCircle2,
  Zap,
  Award,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'bio' | 'specs' | 'merit'>('bio');
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0 });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -10;
    const ry = ((x / rect.width) - 0.5) * 10;
    setCardTilt({ rx, ry });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rx: 0, ry: 0 });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Charismatic Story & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <span>Hardware Engineer • DSA &amp; Exploring Web</span>
              <span className="text-slate-400 dark:text-slate-500">•</span>
              <span className="text-slate-600 dark:text-slate-400 font-mono text-[11px]">IIIT Sri City</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Satya Eesa</span>
              <span className="block mt-2 text-3xl sm:text-5xl lg:text-5xl font-bold text-slate-800 dark:text-slate-200">
                Digital Silicon Logic, C++ Algorithms &amp; Exploring Web
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed font-normal max-w-2xl mb-8">
              Electronics &amp; Communication Engineering undergraduate at the{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Indian Institute of Information Technology, Sri City</strong>.
              Specializing in digital VLSI &amp; synthesizable Verilog design, strengthening core problem-solving fundamentals in C++, and enthusiastically stepping into modern web development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-radiant inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white shadow-lg shadow-indigo-500/25 w-full sm:w-auto"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#silicon-lab"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-white dark:bg-white/[0.05] hover:bg-slate-100 dark:hover:bg-white/[0.09] border border-slate-200 dark:border-white/10 hover:border-indigo-400/40 transition shadow-sm w-full sm:w-auto"
              >
                <Zap className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>Try Silicon Lab</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-white/[0.04] border border-slate-200/80 dark:border-white/[0.08] hover:border-slate-300 dark:hover:border-white/20 transition w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-slate-200 dark:border-white/[0.06]">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-slate-900 dark:text-white">994 / 1000</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Top 0.6% State Merit</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-indigo-600 dark:text-indigo-400">VLSI &amp; RTL</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">8-Bit ALU in Verilog</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-emerald-600 dark:text-emerald-400">C++ &amp; DSA</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Arrays, Sorting &amp; STL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg text-cyan-600 dark:text-cyan-400">Web &amp; IoT</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">Foundations &amp; Embedded</span>
              </div>
            </div>

          </div>

          {/* Right Column: Charismatic Interactive Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Radiant Ambient Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-500/15 to-violet-500/20 blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000" />

              {/* Main Glass Card */}
              <div
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
                className="relative rounded-3xl glass-panel p-6 sm:p-7 shadow-2xl"
              >
                
                {/* Header: Photo + Identity */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-200 dark:border-white/[0.08]">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-indigo-400/40 shadow-lg flex-shrink-0">
                    <Image
                      src="/images/Satya_sq_pic.png"
                      alt="Satya Eesa"
                      width={120}
                      height={120}
                      priority
                      className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute bottom-1 right-1 p-0.5 rounded-full bg-white dark:bg-[#0a0e1a] border border-emerald-400/60">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Silicon • C++ DSA • Exploring Web</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Satya Eesa</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      IIIT Sri City, Andhra Pradesh
                    </p>
                    
                    {/* Social links & Quick Copy */}
                    <div className="flex items-center gap-2 mt-2.5">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition"
                        aria-label="GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5 fill-current" />
                      </a>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] hover:bg-slate-200 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] text-[10px] text-slate-700 dark:text-slate-300 font-mono transition"
                        title="Click to copy email"
                      >
                        <span>{personalInfo.email}</span>
                        {copiedEmail ? <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive Card Tabs */}
                <div className="flex items-center gap-1 my-5 p-1 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/[0.06] text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('bio')}
                    className={`flex-1 py-1.5 rounded-lg transition ${
                      activeTab === 'bio'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Core Focus
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`flex-1 py-1.5 rounded-lg transition ${
                      activeTab === 'specs'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Known Skills
                  </button>
                  <button
                    onClick={() => setActiveTab('merit')}
                    className={`flex-1 py-1.5 rounded-lg transition ${
                      activeTab === 'merit'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Honors
                  </button>
                </div>

                {/* Tab 1: Focus */}
                {activeTab === 'bio' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Passionate about digital VLSI &amp; synthesizable Verilog design, practicing core Data Structures &amp; Algorithms in C++, and enthusiastically stepping into modern web development.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-sans">Hardware Core</span>
                        <span className="text-cyan-600 dark:text-cyan-300 font-bold">Verilog &amp; Vivado</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                        <span className="text-slate-500 dark:text-slate-400 block text-[10px] uppercase font-sans">DSA &amp; Web</span>
                        <span className="text-indigo-600 dark:text-indigo-300 font-bold">C++ &amp; Web Basics</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Tech Stack Matrix */}
                {activeTab === 'specs' && (
                  <div className="space-y-2 animate-in fade-in duration-200 font-mono text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-slate-500 dark:text-slate-400">Silicon / RTL</span>
                      <span className="text-slate-900 dark:text-white font-semibold">8-Bit ALU • Vivado</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-slate-500 dark:text-slate-400">C++ &amp; DSA</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">Arrays, Sorting &amp; STL</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-slate-500 dark:text-slate-400">Embedded / IoT</span>
                      <span className="text-cyan-600 dark:text-cyan-300 font-semibold">RPi &amp; ESP32 Dual-Core</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <span className="text-slate-500 dark:text-slate-400">Web Journey</span>
                      <span className="text-indigo-600 dark:text-indigo-300 font-semibold">HTML, CSS &amp; JS Basics</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Honors */}
                {activeTab === 'merit' && (
                  <div className="space-y-2.5 animate-in fade-in duration-200 text-xs">
                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">994 / 1000 in Intermediate</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Ranked in the top 0.6% state cohort in MPC</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                      <Award className="w-4 h-4 text-indigo-500 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-white block">JEE Advanced Qualified</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Secured competitive admission to IIIT Sri City</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Footer Pill */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    Verified Portfolio
                  </span>
                  <a
                    href="#contact"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition"
                  >
                    Get in touch &rarr;
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
