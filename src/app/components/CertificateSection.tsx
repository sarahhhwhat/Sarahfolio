'use client';

import React, { useEffect, useRef } from 'react';

const certifications = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    skills: ['AI Fluency', 'LLMs', 'Applied AI'],
    icon: '✦',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    skills: ['Claude', 'AI Tools'],
    icon: '✦',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
    skills: ['Generative AI', 'AI Tools'],
    icon: '🎓',
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
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">
            Continuous Learning
          </span>
          <h2 className="font-display font-900 text-section-title text-foreground mt-2">
            Certifications <span className="italic text-primary">&amp; Courses.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-xl">
            Staying current with the tools shaping research and software today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="reveal-hidden glass-cream border border-border rounded-3xl p-6 card-hover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
