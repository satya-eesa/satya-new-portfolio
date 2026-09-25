'use client';

import React from 'react';
import { Cpu, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040508] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          {/* Left Brand */}
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white tracking-wide">
                Satya <span className="text-cyan-400">Eesa</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-1">
              Electronics &amp; Communication Engineering Student at IIIT Sri City. Focused on digital RTL architecture, FPGA design, and semiconductor engineering.
            </p>
          </div>

          {/* Right Links & Socials */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition"
              aria-label="Email Satya"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-semibold transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Telemetry & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEM: NOMINAL • VERILOG-2001 • NEXT.JS 15</span>
          </div>

          <div className="text-center sm:text-right">
            © {new Date().getFullYear()} Satya Eesa. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
