import React from 'react';
import Navbar from '../components/Navbar';
import CircuitBackground from '../components/CircuitBackground';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06070a] text-slate-100 selection:bg-cyan-500/30 selection:text-white">
      {/* Background Circuit Ambient Grid */}
      <CircuitBackground />

      {/* Glassmorphic Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
