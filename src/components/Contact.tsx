'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#6366f1', '#06b6d4', '#8b5cf6', '#10b981'],
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-slate-50/50 dark:bg-[#060912] transition-colors duration-300 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build the Future of <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-600 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent">Hardware</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
            Currently open to VLSI &amp; RTL design internships, research collaborations, hardware projects, and engineering discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 shadow-xl glass-panel-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Direct Email</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Direct response within 24 hours</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06] mb-4">
                <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Email Address:</span>
                <span className="font-mono text-sm sm:text-base font-semibold text-slate-900 dark:text-white break-all">
                  {personalInfo.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full btn-radiant flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg shadow-indigo-500/25"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied to Clipboard! 🎉</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Location Card */}
            <div className="rounded-3xl glass-panel p-6 sm:p-8 shadow-xl glass-panel-hover space-y-4">
              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">
                Professional Networks
              </h4>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] hover:border-indigo-400/40 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-200/80 dark:bg-white/[0.05] text-slate-800 dark:text-white">
                    <GithubIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">GitHub Profile</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">github.com/satya-eesa</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] hover:border-cyan-400/40 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <LinkedinIcon className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white block">LinkedIn Network</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">linkedin.com/in/satya-eesa</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition" />
              </a>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>IIIT Sri City, Andhra Pradesh, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Send a Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-panel p-6 sm:p-10 shadow-xl glass-panel-hover">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">Send a Message</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Inquire about internships, hardware projects, or collaborations</p>
                </div>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-1">Message Transmitted!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. Satya will respond shortly to your provided email address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="VLSI Internship Opportunity / Hardware Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Satya, I came across your portfolio and your 8-bit ALU project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08] focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-radiant flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-sm text-white shadow-lg shadow-indigo-500/25 transition disabled:opacity-50"
                  >
                    {sending ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
