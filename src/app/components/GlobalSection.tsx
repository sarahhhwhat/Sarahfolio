'use client';

import React, { useEffect, useRef } from 'react';

const applications = [
  { org: 'Jio Institute', program: 'Research Internship', status: 'Applied', region: '🇮🇳 India' },
  { org: 'CERN', program: 'Short-Term Internship', status: 'Applied', region: '🇨🇭 Switzerland' },
  { org: 'Japan Youth Summit 2026', program: 'Osaka Delegation', status: 'Applied', region: '🇯🇵 Japan' },
  { org: 'One Future Conference', program: 'Barcelona Delegate', status: 'Applied', region: '🇪🇸 Spain' },
  { org: 'UTRIP', program: 'University of Tokyo Research', status: 'Applied', region: '🇯🇵 Japan' },
  { org: 'EU Blue Book Traineeship', program: 'European Commission', status: 'Applied', region: '🇪🇺 EU' },
  { org: 'Stanford', program: 'Venture Fellowship', status: 'Applied', region: '🇺🇸 USA' },
  { org: 'OECD / IFAD / WTO', program: 'Young Trade Leaders', status: 'Applied', region: '🌍 Global' },
  { org: 'IIT Indore', program: 'Summer Internship', status: 'Applied', region: '🇮🇳 India' },
];

export default function GlobalSection() {
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
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="global" className="py-24 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">05 · Ambition</span>
          <h2 className="font-display font-900 text-section-title text-foreground mt-2">
            Global <span className="italic text-primary">Reach.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-xl">
            Applying to programs across 8+ countries — from CERN to the University of Tokyo.
          </p>
        </div>

        {/* Big stat */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="reveal-hidden md:col-span-2 bg-dark-bg rounded-3xl p-8 shadow-editorial" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="flex items-start gap-6">
              <div>
                <div className="font-display font-900 text-7xl text-primary leading-none">10+</div>
                <p className="text-primary-foreground/60 text-sm mt-2 max-w-xs">
                  International programs, fellowships, and internship applications submitted across research, policy, and science diplomacy.
                </p>
              </div>
              <div className="ml-auto hidden sm:block">
                <div className="text-7xl animate-float-slow">🌏</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {['🇮🇳 India', '🇨🇭 CERN', '🇯🇵 Japan', '🇪🇸 Spain', '🇺🇸 Stanford', '🇪🇺 EU', '🌍 WTO/OECD'].map((region) => (
                <span key={region} className="text-xs font-semibold bg-dark-surface text-primary-foreground/80 px-3 py-1.5 rounded-full border border-dark-border">
                  {region}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-hidden space-y-4" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="bg-secondary rounded-3xl p-6 border border-border">
              <p className="font-display font-700 text-2xl text-foreground">TOEFL</p>
              <p className="text-muted-foreground text-sm mt-1">Target Score: ~100</p>
              <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '78%' }} />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">Prep in progress</p>
            </div>
            <div className="bg-primary rounded-3xl p-6">
              <p className="font-display font-700 text-xl text-primary-foreground">Research Focus</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Galaxy Morphology · Computational Physics · Astrophysics</p>
            </div>
          </div>
        </div>

        {/* Applications grid */}
        <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <h3 className="font-display font-700 text-xl text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary">✦</span> Applications & Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, i) => (
              <div
                key={app.org}
                className="reveal-hidden glass-cream border border-border rounded-2xl p-4 card-hover"
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">{app.org}</span>
                  <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">Applied</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{app.program}</p>
                <span className="text-[11px] font-medium text-muted-foreground">{app.region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

