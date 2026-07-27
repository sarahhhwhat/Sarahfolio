'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const educationItems = [
{
  period: '2023 – Present',
  degree: 'BSc Physics (Major), Mathematics (Minor)',
  institution: 'Royal College of Arts, Science and Commerce',
  detail: 'University of Mumbai · Third Year',
  icon: '🔭'
},
{
  period: '2021 – 2023',
  degree: 'Higher Secondary Certificate (PCMB)',
  institution: 'Science Stream',
  detail: 'Physics · Chemistry · Mathematics · Biology',
  icon: '📐'
}];


const clubItems = [
{ role: 'Co-Head', club: 'Physics Club', icon: '⚛️' },
{ role: 'Volunteer', club: 'Mathematics Club', icon: '∑' },
{ role: 'Throwball', club: 'DSO Level Representative', icon: '🏐' }];


const languageItems = [
{ lang: 'English', level: 'Fluent' },
{ lang: 'Hindi', level: 'Fluent' },
{ lang: 'Urdu', level: 'Fluent' },
{ lang: 'German', level: 'Beginner' },
{ lang: 'Japanese', level: 'Beginner' },
{ lang: 'Spanish', level: 'Beginner' }];


export default function AboutEducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-hidden').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">01 · Identity</span>
          <h2 className="font-display font-900 text-section-title text-foreground mt-2">
            About <span className="italic text-primary">Me.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left col */}
          <div className="lg:col-span-7 space-y-10">
            {/* Bio */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <p className="text-lg text-foreground leading-relaxed border-l-2 border-primary pl-6">
                Hi, I'm <strong>Sarah</strong> — a third-year Physics major at the University of Mumbai,
                passionate about the universe at every scale. From fitting Sérsic profiles on Hubble Space
                Telescope data to building React PWAs and teaching calculus to 7th graders,
                I live at the intersection of science, code, and creativity.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mt-4 pl-6 border-l-2 border-border">
                Based in Mira Road, Maharashtra. Anime enthusiast, football lover, and occasional
                secondhand book dealer. Currently preparing for postgraduate programs at KAUST,
                Erasmus Mundus, and top UK universities.
              </p>
            </div>

            {/* Education */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <h3 className="font-display font-700 text-xl text-foreground mb-6 flex items-center gap-3">
                <span className="text-primary">✦</span> Education
              </h3>
              <div className="space-y-4">
                {educationItems.map((item) =>
                <div
                  key={item.degree}
                  className="glass-cream rounded-2xl p-5 card-hover border border-border">
                  
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">{item.period}</span>
                        <h4 className="font-display font-700 text-base text-foreground mt-0.5">{item.degree}</h4>
                        <p className="text-sm text-primary font-semibold mt-0.5">{item.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Academic Topics */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <h3 className="font-display font-700 text-xl text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">✦</span> Academic Focus
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                'Calculus', 'Differential Equations', 'Vector Calculus',
                'Quantum Mechanics', 'Mathematical Physics', 'Intro Astrophysics',
                'C++ Simulations', 'Computational Methods'].
                map((topic) =>
                <span key={topic} className="tag-pill">{topic}</span>
                )}
              </div>
            </div>

            {/* Languages */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <h3 className="font-display font-700 text-xl text-foreground mb-4 flex items-center gap-3">
                <span className="text-primary">✦</span> Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languageItems.map((l) =>
                <div key={l.lang} className="flex items-center justify-between bg-secondary rounded-xl px-4 py-2.5">
                    <span className="text-sm font-semibold text-foreground">{l.lang}</span>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${l.level === 'Fluent' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {l.level}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right col */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Photo card */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-editorial-lg border border-border group">
                <div className="aspect-[4/5] bg-secondary relative">
                  <AppImage
                    src="/assets/images/IMG_7814-1785096710564.png"
                    alt="Sarah Fatima Shaikh"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-dark rounded-2xl px-4 py-3">
                      <p className="text-primary-foreground font-display font-700 text-base">Sarah Fatima Shaikh</p>
                      <p className="text-primary-foreground/70 text-xs mt-0.5">Mira Road, Maharashtra ✦ Physics Major</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* College Activities */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="bg-dark-bg rounded-3xl p-6 shadow-editorial">
                <h3 className="font-display font-700 text-lg text-primary-foreground mb-4 flex items-center gap-2">
                  <span className="text-accent">✦</span> College Activities
                </h3>
                <div className="space-y-3">
                  {clubItems.map((item) =>
                  <div key={item.club} className="flex items-center gap-3 glass-dark rounded-xl px-4 py-3">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-primary-foreground text-sm font-semibold">{item.club}</p>
                        <p className="text-primary-foreground/60 text-xs">{item.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="glass-cream rounded-3xl p-5 border border-border">
                <h3 className="font-display font-700 text-base text-foreground mb-3 flex items-center gap-2">
                  <span className="text-primary">✦</span> Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Anime (Naruto)', 'Football', 'Beauty & Cosmetics', 'Fashion', 'Throwball', 'Astrophysics', 'Book Resale', 'Social Media'].map((interest) =>
                  <span key={interest} className="tag-pill-filled text-[10px]">{interest}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

