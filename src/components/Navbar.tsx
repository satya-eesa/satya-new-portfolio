'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, FileText, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5">
        <nav
          className={`flex items-center justify-between h-16 px-5 sm:px-7 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-[#060813]/90 backdrop-blur-2xl border-2 border-cyan-500/40 shadow-[0_8px_32px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.15)]'
              : 'bg-[#060813]/60 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-transparent border border-cyan-500/40 group-hover:border-cyan-400 transition shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:rotate-45 transition-transform duration-300" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight flex items-center gap-1.5 font-black tracking-wide text-base sm:text-lg">
                <span>Satya</span>
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Eesa
                </span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-cyan-400/80 uppercase -mt-0.5">
                // VLSI • RTL ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.25)] font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition shadow-sm"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 hover:scale-[1.03]"
            >
              <FileText className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg bg-violet-600/20 border border-violet-500/40 text-violet-300"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-28 z-50 p-6 rounded-3xl bg-[#060914]/98 backdrop-blur-2xl border-2 border-cyan-500/40 shadow-2xl">
          <div className="flex flex-col gap-2 font-mono">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 transition"
              >
                <span>{link.name}</span>
                <span className="text-xs text-cyan-400/60">// VIEW</span>
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-mono font-bold uppercase rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/30"
              >
                <FileText className="w-4 h-4" />
                <span>Download Official CV</span>
              </a>
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
