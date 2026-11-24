'use client';

import React, { useEffect, useRef } from 'react';

const certifications = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    image: '/assets/certificates/ai-fluency-anthropic-2026.png',
    href: '/assets/certificates/ai-fluency-anthropic-2026.png',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    image: '/assets/certificates/claude-101-anthropic-2026.png',
    href: '/assets/certificates/claude-101-anthropic-2026.png',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
    image: '/assets/certificates/generative-ai-linkedin-2026.png',
    href: '/assets/certificates/generative-ai-linkedin-2026.png',
  },
  {
    title: 'AI Tools',
    issuer: 'be10x',
    date: '2026',
    image: null,
    href: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971763222',
  },
  {
    title: 'AI Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '2026',
    image: '/assets/certificates/ai-fundamentals-ibm-2026.png',
    href: '/assets/certificates/ai-fundamentals-ibm-2026.png',
  },
  {
    title: 'Tech Explorer Job Simulation',
    issuer: 'Commonwealth Bank · Forage',
    date: 'Aug 2026',
    image: '/assets/certificates/tech-explorer-forage-2026.png',
    href: '/assets/certificates/tech-explorer-forage-2026.png',
  },
  {
    title: 'Galactic Problem Solver',
    issuer: 'NASA Space Apps Challenge',
    date: 'Nov 2026',
    image: '/assets/certificates/nasa-space-apps-challenge-2026.jpg',
    href: '/assets/certificates/nasa-space-apps-challenge-2026.jpg',
  },
  {
    title: 'Environmental Hacks — Bharat Builds Tour',
    issuer: 'WeMakeDevs × AWS',
    date: 'Oct 2026',
    image: '/assets/certificates/env-hacks-wemakedevs-aws-2026.jpg',
    href: '/assets/certificates/env-hacks-wemakedevs-aws-2026.jpg',
  },
  {
    title: 'Hack in Hills \u201926 — Builder Pass',
    issuer: 'TinyFish · Google Developers · Web3 India',
    date: 'Nov 2026',
    image: '/assets/certificates/hih26-builder-pass-2026.png',
    href: '/assets/certificates/hih26-builder-pass-2026.png',
  },
];

export default function CertificationsSection() {
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
              }, i * 90);
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
    <section ref={sectionRef} id="certifications" className="py-24 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
            Continuous Learning
          </span>
          <h2 className="font-display font-900 text-section-title text-foreground mt-2">
            Certifications <span className="italic text-primary">&amp; Courses.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-xl">
            Staying current with the tools shaping research and software today. Tap a card to view the certificate.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-hidden group glass-cream border border-border rounded-3xl overflow-hidden card-hover block"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              {cert.image ? (
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white border-b border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-end justify-end p-3">
                    <span className="text-[10px] uppercase tracking-wider bg-background/90 text-primary px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View ↗
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-dark-bg border-b border-border">
                  <span className="text-4xl">✦</span>
                </div>
              )}
              <div className="p-6">
                <h3 className="font-display font-700 text-lg text-foreground leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
