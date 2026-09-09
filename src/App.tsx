import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#ede9df] text-[#17211b] font-sans-ui selection:bg-[#dce8df] selection:text-[#17211b]">
      {/* Subtle editorial paper grain overlay */}
      <div className="editorial-grain" aria-hidden="true" />

      {/* Sticky Minimal Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Modules */}
      <main>
        {/* 01 — INTRO / HERO */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 02 — ABOUT */}
        <About />

        {/* 03 — WORK (Hushh Open Source 38 PRs, Completed May 2026) */}
        <Work />

        {/* 04 — PROJECTS (Cognitive Reflection, Ambassify, Climate Agriculture, Rover, Navigation) */}
        <Projects />

        {/* 05 — SKILLS (Clean typography & tags, no fake percentages) */}
        <Skills />

        {/* 06 — JOURNEY (Timeline, Continuous Learning & Academic Records) */}
        <Journey />

        {/* 07 — CONTACT (Clean direct channels, no bloated forms) */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Dossier Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
