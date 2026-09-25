import React from 'react';
import AmbientGlow from '../components/AmbientGlow';
import Navbar from '../components/Navbar';
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
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-900 dark:text-slate-100 selection:bg-indigo-500/35 selection:text-white transition-colors duration-300">
      {/* Interactive Ambient Light & Cursor Glow */}
      <AmbientGlow />

      {/* Floating Modern Glass Navbar */}
      <Navbar />

      {/* Charismatic Hero Section */}
      <Hero />

      {/* About: Silicon Architect Dossier & Bento Story */}
      <About />

      {/* Technical Arsenal & RTL Pipeline */}
      <Skills />

      {/* Featured Hardware Projects with Embedded Silicon Lab */}
      <Projects />

      {/* Academic Trajectory & Scholastic Rigor */}
      <Education />

      {/* Competitive Merit & Recognitions */}
      <Achievements />

      {/* Contact & Collaboration Hub */}
      <Contact />

      {/* Modern Footer */}
      <Footer />
    </main>
  );
}
