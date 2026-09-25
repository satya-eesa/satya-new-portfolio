import React from 'react';
import WorkstationHeader from '../components/WorkstationHeader';
import Navbar from '../components/Navbar';
import CyberBackground from '../components/CyberBackground';
import Hero from '../components/Hero';
import LogicAnalyzerBar from '../components/LogicAnalyzerBar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030508] text-slate-100 selection:bg-cyan-500/35 selection:text-white">
      {/* Dynamic Canvas Circuit PCB Background */}
      <CyberBackground />

      {/* Top Workstation Telemetry HUD Bar */}
      <WorkstationHeader />

      {/* Floating Glassmorphic Cyber Command Navbar */}
      <Navbar />

      {/* Hero Section: Silicon Command Console */}
      <Hero />

      {/* Digital Logic Analyzer Bar */}
      <LogicAnalyzerBar />

      {/* Silicon Architect Dossier */}
      <About />

      {/* Technical Capabilities & Pipeline */}
      <Skills />

      {/* Hardware Projects: ALU Bench & Rover Mission Control */}
      <Projects />

      {/* Academic Trajectory: Electronic Timing Bus */}
      <Education />

      {/* Milestones & Honors */}
      <Achievements />

      {/* Cybernetic Uplink Transmission */}
      <Contact />

      {/* System Footer */}
      <Footer />
    </main>
  );
}
