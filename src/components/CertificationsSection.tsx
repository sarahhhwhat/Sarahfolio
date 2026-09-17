'use client';

import React, { useEffect, useRef } from 'react';

const certifications = [
  {
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    date: '2026',
    icon: '✦',
    href: 'https://verify.skilljar.com/c/f46bwi65kk6i',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: '2026',
    icon: '✦',
    href: '/assets/images/claude101-certificate.jpg',
  },
  {
    title: 'What Is Generative AI?',
    issuer: 'LinkedIn Learning',
    date: 'Aug 2026',
    icon: '🎓',
    href: null,
  },
  {
    title: 'AI Tools',
    issuer: 'be10x',
    date: '2026',
    icon: '✦',
    href: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971763222',
  },
  {
    title: 'AI Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: '2026',
    icon: '✦',
    href: 'https://www.credly.com/badges/b496ff3e-f477-4eff-90ec-ee34cb01a905/linked_in_profile',
  },
  {
    title: 'Tech Explorer Job Simulation',
    issuer: 'Commonwealth Bank · Forage',
    date: 'Aug 2026',
    icon: '💼',
    href: 'https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/GYcpProEZQFCiSmT6_2sNmYuurxgpFYawco_6a89737b841fdedde7d40ea8_1787603936646_completion_certificate.pdf',
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
          {certifications.map((cert) => {
            const cardContent = (
              <>
                <div className="flex items-start justify-between">
                  <span className="text-2xl">{cert.icon}</span>
                  {cert.href && (
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View ↗
                    </span>
                  )}
                </div>
                <h3 className="font-display font-700 text-lg text-foreground mt-4 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-semibold mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
              </>
            );

            const cardClasses =
              'reveal-hidden group glass-cream border border-border rounded-3xl p-6 card-hover block';

            return cert.href ? (
              <a
                key={cert.title}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={cert.title}
                className={cardClasses}
                style={{ opacity: 0, transform: 'translateY(40px)' }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
