import React from 'react';
import HeroSection from './components/HeroSection';
import AboutEducationSection from './components/AboutEducationSection';
import ProjectsSection from './components/ProjectsSection';
import TutoringSection from './components/TutoringSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import GlobalSection from './components/GlobalSection';
import ContactSection from './components/ContactSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <HeroSection />
      <AboutEducationSection />
      <ProjectsSection />
      <TutoringSection />
      <SkillsSection />
      <CertificationsSection />
      <GlobalSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
