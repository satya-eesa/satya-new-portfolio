'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'VLSI / RTL Internship Opportunity',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);

    // Confetti burst
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#00f0ff', '#8b5cf6', '#10b981', '#f59e0b'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject} - from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030508] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-cyan-600/10 blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Transmission</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-mono text-xs sm:text-sm">
            {'// OPEN TO VLSI / RTL INTERNSHIPS • RESEARCH COLLABORATIONS • HARDWARE PROJECTS'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card with Copy Trigger & Confetti */}
            <div className="p-6 sm:p-7 rounded-3xl cyber-card border border-cyan-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-300 transition shadow-sm"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-3xl cyber-card flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.25)]">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    Source Code &amp; Repositories
                  </span>
                  <div className="text-base font-bold text-white group-hover:text-violet-300 transition-colors font-mono">
                    github.com/satya-eesa
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                Visit &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-7 rounded-3xl cyber-card flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(14,165,233,0.25)]">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                    Professional Network
                  </span>
                  <div className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-mono">
                    linkedin.com/in/satya-eesa
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                Connect &rarr;
              </span>
            </a>

            {/* Location Card */}
            <div className="p-6 sm:p-7 rounded-3xl cyber-card flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">
                  Location &amp; Base
                </span>
                <div className="text-base font-bold text-white">Andhra Pradesh, India</div>
                <div className="text-xs font-mono text-slate-400">IIIT Sri City Campus (13.55°N, 80.02°E)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Transmission Console */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-9 cyber-card border-2 border-cyan-500/40 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>COMMUNICATION TERMINAL // INQUIRY_UPLINK</span>
                </div>
                <span className="text-emerald-400 text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                  PORT: 443_SSL
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 text-center animate-fadeIn">
                  <Sparkles className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-2xl font-black text-white">Transmission Ready!</h4>
                  <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Your mail client has been prepared with your inquiry. You can also write directly to{' '}
                    <strong className="text-cyan-300 font-mono">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', subject: 'VLSI / RTL Internship Opportunity', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition"
                  >
                    Transmit Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold">
                        {'// Your Name'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-black/90 transition font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold">
                        {'// Email Address'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane.doe@semiconductor.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-black/90 transition font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold">
                      {'// Subject / Inquiry Type'}
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/80 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 transition font-mono"
                    >
                      <option value="VLSI / RTL Internship Opportunity">VLSI / RTL Internship Opportunity</option>
                      <option value="Hardware / Embedded Project Collaboration">Hardware / Embedded Project Collaboration</option>
                      <option value="Verilog / Digital Architecture Discussion">Verilog / Digital Architecture Discussion</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 font-bold">
                      {'// Message Content'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Satya, I was impressed by your 8-bit RTL ALU and GTKWave testbenches..."
                      className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-black/90 transition resize-none font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-600 text-white font-mono font-bold text-sm shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message // Send</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
