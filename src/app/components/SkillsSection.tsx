'use client';

import React, { useEffect, useRef } from 'react';

const tools = [
  { name: 'Python', category: 'Code', level: 85 },
  { name: 'Astropy', category: 'Research', level: 80 },
  { name: 'Photutils', category: 'Research', level: 75 },
  { name: 'React', category: 'Web', level: 80 },
  { name: 'C++', category: 'Code', level: 65 },
  { name: 'SFML', category: 'Code', level: 60 },
  { name: 'ESP32', category: 'Hardware', level: 70 },
  { name: 'JavaScript', category: 'Web', level: 75 },
  { name: 'HTML/CSS', category: 'Web', level: 85 },
  { name: 'GitHub', category: 'Dev', level: 80 },
  { name: 'Spyder IDE', category: 'Research', level: 80 },
  { name: 'Netlify', category: 'Dev', level: 75 },
];

const softSkills = [
  'Concept-Based Teaching',
  'Doubt Resolution',
  'Lesson Planning',
  'Student Assessment',
  'Academic Writing',
  'Time Management',
  'Adaptability',
  'Problem Decomposition',
  'Scientific Writing',
  'Research Methodology',
];

const categoryColors: Record<string, string> = {
  Code: 'bg-primary text-primary-foreground',
  Research: 'bg-dark-bg text-primary-foreground',
  Web: 'bg-accent text-accent-foreground',
  Hardware: 'bg-secondary text-foreground border border-border',
  Dev: 'bg-secondary text-foreground border border-border',
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              }, i * 80);
            });

            // Animate bars
            barRefs.current.forEach((bar, i) => {
              if (bar) {
                const level = bar.getAttribute('data-level') || '0';
                setTimeout(() => {
                  bar.style.width = `${level}%`;
                }, 300 + i * 60);
              }
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
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-dark-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary-foreground/40 font-semibold">04 · Toolkit</span>
          <h2 className="font-display font-900 text-section-title text-primary-foreground mt-2">
            Skills &amp; <span className="italic text-primary">Tools.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <h3 className="font-display font-700 text-xl text-primary-foreground mb-6 flex items-center gap-3">
              <span className="text-accent">✦</span> Technical Tools
            </h3>
            <div className="space-y-4">
              {tools.map((tool, i) => (
                <div key={tool.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${categoryColors[tool.category]}`}>
                        {tool.category}
                      </span>
                      <span className="text-primary-foreground text-sm font-semibold">{tool.name}</span>
                    </div>
                    <span className="text-primary-foreground/40 text-xs">{tool.level}%</span>
                  </div>
                  <div className="h-1.5 bg-dark-surface rounded-full overflow-hidden">
                    <div
                      ref={(el) => { barRefs.current[i] = el; }}
                      data-level={tool.level}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills + Achievements */}
          <div className="space-y-8">
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <h3 className="font-display font-700 text-xl text-primary-foreground mb-6 flex items-center gap-3">
                <span className="text-accent">✦</span> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-dark-surface text-primary-foreground/80 border border-dark-border hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Side Ventures */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <h3 className="font-display font-700 text-xl text-primary-foreground mb-4 flex items-center gap-3">
                <span className="text-accent">✦</span> Side Ventures
              </h3>
              <div className="space-y-3">
                <div className="glass-dark border border-dark-border rounded-2xl p-4 card-hover">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">Secondhand Book Resale</p>
                      <a href="https://instagram.com/bookaholicccs" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">@bookaholicccs</a>
                    </div>
                  </div>
                </div>
                <div className="glass-dark border border-dark-border rounded-2xl p-4 card-hover">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">⚽</span>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">Social Media Manager — Toman FC</p>
                      <a href="https://instagram.com/tomanfc_11" target="_blank" rel="noopener noreferrer" className="text-accent text-xs hover:underline">@tomanfc_11</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Postgrad Prep */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="bg-primary rounded-3xl p-6 shadow-editorial">
                <h3 className="font-display font-700 text-xl text-primary-foreground mb-3 flex items-center gap-2">
                  <span>🎓</span> Postgrad Prep
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['KAUST', 'Erasmus Mundus', 'Imperial College', 'UK Universities', 'Japanese Institutions'].map((uni) => (
                    <span key={uni} className="text-[10px] font-semibold uppercase tracking-wider bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full">
                      {uni}
                    </span>
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm">
                  TOEFL target ~100. Actively researching MSc/PhD programs in Astrophysics and Computational Physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

