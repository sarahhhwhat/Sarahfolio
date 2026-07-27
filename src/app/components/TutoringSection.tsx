'use client';

import React, { useEffect, useRef } from 'react';

const packages = [
  {
    name: 'Drop-In Session',
    price: '₹300',
    period: 'per hour',
    description: 'One-time doubt clearing or homework help for any subject.',
    features: ['Any grade 1–10', 'Math, Science, English', 'Flexible scheduling', 'Online or in-person'],
    highlight: false,
  },
  {
    name: 'Regular Tutor',
    price: '₹2,500',
    period: 'per month',
    description: '3 sessions per week, structured learning with progress tracking.',
    features: ['Dedicated session plan', 'Custom worksheets', 'Monthly assessments', 'Parent updates'],
    highlight: true,
  },
  {
    name: 'Group Batch',
    price: '₹1,200',
    period: 'per student/mo',
    description: 'Small group sessions (2–4 students) for collaborative learning.',
    features: ['Peer learning environment', 'Group exercises', 'Shared notes', 'Subject-specific batches'],
    highlight: false,
  },
];

const subjects = [
  { name: 'Mathematics', grades: '1–10', icon: '📐' },
  { name: 'Physics', grades: '8–10', icon: '⚛️' },
  { name: 'Chemistry', grades: '8–10', icon: '🧪' },
  { name: 'Biology', grades: '8–10', icon: '🧬' },
  { name: 'English', grades: '1–8', icon: '📖' },
  { name: 'Science', grades: '5–7', icon: '🔬' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent, Grade 7 student',
    quote: 'Sarah explains concepts so clearly. My daughter went from failing math to scoring 85% in just two months.',
    avatar: 'PS',
  },
  {
    name: 'Rohan Mehta',
    role: 'Grade 10 student',
    quote: 'The way she breaks down physics problems is incredible. Made boards prep actually enjoyable.',
    avatar: 'RM',
  },
];

export default function TutoringSection() {
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
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tutoring" className="py-24 px-6 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">03 · Teaching</span>
          <h2 className="font-display font-900 text-section-title text-foreground mt-2">
            Tutoring <span className="italic text-primary">Services.</span>
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-xl">
            Freelance tutor since 2022 · Grades 1–10 · One-on-one & group · Concept-first teaching
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { num: '4+', label: 'Years Experience' },
            { num: '50+', label: 'Students Taught' },
            { num: '5', label: 'Subjects Covered' },
            { num: '1–10', label: 'Grade Range' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal-hidden text-center bg-secondary rounded-2xl py-6 px-4"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <div className="font-display font-900 text-3xl text-primary">{stat.num}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Subjects */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <h3 className="font-display font-700 text-xl text-foreground mb-6 flex items-center gap-3">
            <span className="text-primary">✦</span> Subjects I Teach
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="glass-cream border border-border rounded-2xl p-4 text-center card-hover"
              >
                <span className="text-2xl block mb-2">{subject.icon}</span>
                <p className="font-semibold text-sm text-foreground">{subject.name}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Gr {subject.grades}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal-hidden rounded-3xl p-7 card-hover flex flex-col ${
                pkg.highlight
                  ? 'bg-primary text-primary-foreground shadow-editorial-lg'
                  : 'glass-cream border border-border'
              }`}
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              {pkg.highlight && (
                <div className="mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full">
                    ✦ Most Popular
                  </span>
                </div>
              )}
              <h3 className={`font-display font-700 text-xl mb-1 ${pkg.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`font-display font-900 text-3xl ${pkg.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                  {pkg.price}
                </span>
                <span className={`text-xs ${pkg.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {pkg.period}
                </span>
              </div>
              <p className={`text-sm leading-relaxed mb-5 ${pkg.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                {pkg.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${pkg.highlight ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                    <span className={`text-xs ${pkg.highlight ? 'text-primary-foreground' : 'text-primary'}`}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 rounded-full font-semibold text-sm uppercase tracking-widest transition-all magnetic-btn ${
                  pkg.highlight
                    ? 'bg-primary-foreground text-primary hover:opacity-90'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}
              >
                Book Session
              </a>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal-hidden glass-cream border border-border rounded-3xl p-6 card-hover"
              style={{ opacity: 0, transform: 'translateY(40px)' }}
            >
              <p className="font-display italic text-lg text-foreground leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
