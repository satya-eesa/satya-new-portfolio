'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Silicon Lab', href: '#silicon-lab' },
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

      const sections = ['home', 'about', 'skills', 'projects', 'silicon-lab', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
    <header className="sticky top-0 z-50 transition-all duration-300 pt-3 sm:pt-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/85 dark:bg-[#0a0e1a]/85 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.12] shadow-md dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
              : 'bg-white/60 dark:bg-[#0a0e1a]/60 backdrop-blur-lg border border-slate-200/60 dark:border-white/[0.06]'
          }`}
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition"
          >
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-transparent border border-indigo-500/30 group-hover:border-indigo-400 group-hover:shadow-[0_0_16px_rgba(99,102,241,0.4)] transition duration-300">
              <Cpu className="w-5 h-5 text-indigo-500 dark:text-indigo-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold tracking-tight text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                Satya Eesa
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                IIIT Sri City • ECE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-white/[0.02] p-1 rounded-xl border border-slate-200/80 dark:border-white/[0.04]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-slate-900 dark:text-white bg-white dark:bg-white/[0.08] shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition border border-transparent hover:border-slate-200 dark:hover:border-white/[0.08]"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition border border-transparent hover:border-slate-200 dark:hover:border-white/[0.08]"
            >
              <LinkedinIcon className="w-4 h-4 fill-current" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 ml-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-indigo-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.08] transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-white/95 dark:bg-[#0b0f1a]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/[0.12] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06] transition"
              >
                <span>{link.name}</span>
                <span className="text-xs text-indigo-500 dark:text-indigo-400 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <GithubIcon className="w-4 h-4 fill-current" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                </a>
              </div>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
