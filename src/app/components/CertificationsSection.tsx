'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  icon: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    skills: ['AI Fluency', 'LLMs', 'Applied AI'],
    icon: '✦',
    image: '/assets/certificates/ai-fluency-anthropic-2026.png',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    skills: ['Claude', 'AI Tools'],
    icon: '✦',
    image: '/assets/certificates/claude-101-anthropic-2026.png',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
    skills: ['Generative AI', 'AI Tools'],
    icon: '🎓',
    image: '/assets/certificates/generative-ai-linkedin-2026.png',
  },
  {
    title: 'AI Fundamentals: Foundations for Understanding AI',
    issuer: 'IBM SkillsBuild',
    date: 'Aug 2026',
    skills: ['AI Fundamentals', 'Machine Learning'],
    icon: '✦',
    image: '/assets/certificates/ai-fundamentals-ibm-2026.png',
  },
  {
    title: 'Tech Explorer Job Simulation',
    issuer: 'Forage',
    date: 'Aug 2026',
    skills: ['Analysis', 'Software'],
    icon: '💼',
    image: '/assets/certificates/tech-explorer-forage-2026.png',
  },
];

export default function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

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
              }, i * 100);
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
            Staying current with the tools shaping research and software today. Tap any certificate to view the proof.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setActiveCert(cert)}
              aria-haspopup="dialog"
              aria-label={`View certificate: ${cert.title} – ${cert.issuer}`}
              className="reveal-hidden group glass-cream border border-border rounded-3xl p-6 card-hover cursor-pointer text-left w-full"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <span className="text-2xl">{cert.icon}</span>
              <h3 className="font-display font-700 text-lg text-foreground mt-4 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-semibold mt-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag-pill text-[10px]">
                    {skill}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70 group-hover:text-primary mt-5 transition-colors duration-300">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                View Certificate <span aria-hidden="true">✦</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeCert && (
        <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
}

function CertificateModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  const requestClose = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(onClose, 220);
  }, [closing, onClose]);

  // Close on ESC + lock body scroll while the modal is open
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') requestClose();
    };
    window.addEventListener('keydown', handleKey);

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [requestClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 ${
        closing ? 'animate-overlay-out' : 'animate-overlay-in'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={`${cert.title} – ${cert.issuer} certificate`}
      onClick={requestClose}
    >
      <div className="absolute inset-0 bg-dark-bg/85 backdrop-blur-lg" aria-hidden="true" />

      <figure
        className={`relative z-10 w-full max-w-5xl bg-dark-surface border border-dark-border rounded-3xl p-3 sm:p-4 shadow-editorial-lg flex flex-col ${
          closing ? 'animate-panel-out' : 'animate-panel-in'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close certificate view"
          className="absolute -top-3 -right-3 sm:top-2 sm:right-2 z-20 w-10 h-10 rounded-full glass-dark border border-dark-border text-primary-foreground flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="overflow-hidden rounded-2xl bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cert.image}
            alt={`${cert.title} – ${cert.issuer}`}
            draggable={false}
            className="w-full max-h-[62vh] sm:max-h-[76vh] object-contain rounded-2xl select-none"
          />
        </div>

        <figcaption className="mt-3 px-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="font-display font-700 text-primary-foreground text-base leading-snug">
            {cert.title}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">
            {cert.issuer} · {cert.date}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
