'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Create mailto link to open email client seamlessly
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject} - from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#06070a] overflow-hidden">
      <div className="absolute inset-0 bg-semiconductor-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Transmission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl">
            Currently open to VLSI &amp; RTL design internships, research collaborations, hardware projects, and engineering discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl bg-[#0b0e1b]/80 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-cyan-300 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
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
              className="group p-6 rounded-2xl bg-[#0b0e1b]/80 border border-white/10 hover:border-violet-500/40 hover:bg-[#0e1224] transition-all duration-300 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Source Code &amp; Repositories
                  </span>
                  <div className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    github.com/satya-eesa
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-white">Visit →</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-[#0b0e1b]/80 border border-white/10 hover:border-blue-500/40 hover:bg-[#0e1224] transition-all duration-300 shadow-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Professional Network
                  </span>
                  <div className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/satya-eesa
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400 group-hover:text-white">Connect →</span>
            </a>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#0b0e1b]/80 border border-white/10 shadow-xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Location &amp; Base
                </span>
                <div className="text-base font-bold text-white">Andhra Pradesh, India</div>
                <div className="text-xs text-slate-400">IIIT Sri City Campus</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-[#0a0d18]/90 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Send a Message</h3>
                  <p className="text-xs text-slate-400">
                    Reach out directly for internships, hardware discussions, or inquiries
                  </p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h4 className="text-lg font-bold text-white">Message Ready to Send!</h4>
                  <p className="text-sm text-slate-300 mt-1 max-w-md mx-auto">
                    Your email client has been prepared with your inquiry. If it did not open automatically, feel free to email directly at{' '}
                    <strong className="text-cyan-300">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', subject: 'VLSI / RTL Internship Opportunity', message: '' });
                    }}
                    className="mt-5 px-5 py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Dr. / Eng. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="jane.doe@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject / Topic
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090c17] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition"
                    >
                      <option value="VLSI / RTL Internship Opportunity">VLSI / RTL Internship Opportunity</option>
                      <option value="Hardware / Embedded Project Collaboration">Hardware / Embedded Project Collaboration</option>
                      <option value="Verilog / Digital Architecture Discussion">Verilog / Digital Architecture Discussion</option>
                      <option value="General Technical Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Satya, I came across your RTL ALU project and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
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
