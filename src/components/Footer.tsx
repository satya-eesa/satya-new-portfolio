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
    <footer className="relative bg-[#05070e] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.08] items-center justify-between">
          
          {/* Left Brand */}
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Satya <span className="text-indigo-400">Eesa</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mt-1 font-normal leading-relaxed">
              Electronics &amp; Communication Engineering Undergraduate at IIIT Sri City. Focused on digital RTL architecture, FPGA synthesis, and intelligent embedded systems.
            </p>
          </div>

          {/* Right Links & Socials */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-white/[0.08] transition"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-sky-400 hover:border-cyan-400/40 hover:bg-white/[0.08] transition"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-white hover:border-indigo-400/40 hover:bg-white/[0.08] transition"
              aria-label="Email Satya"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Built with Next.js 15, TypeScript &amp; Tailwind CSS</span>
          </div>

          <div className="text-center sm:text-right font-medium">
            &copy; {new Date().getFullYear()} Satya Eesa. All Rights Reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
