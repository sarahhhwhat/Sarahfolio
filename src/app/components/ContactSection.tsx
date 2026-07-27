'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service here
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-6 bg-dark-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary-foreground/40 font-semibold">06 · Connect</span>
          <h2 className="font-display font-900 text-section-title text-primary-foreground mt-2">
            Let&apos;s Work <span className="italic text-primary">Together.</span>
          </h2>
          <p className="text-primary-foreground/60 text-base mt-3 max-w-xl">
            Whether it's research collaboration, tutoring, or just a conversation about astrophysics — I'm here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact cards */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Mira Road, Maharashtra, India',
                    sub: 'Available for remote & local tutoring',
                  },
                  {
                    icon: '🎓',
                    label: 'University',
                    value: 'Royal College of Arts, Science & Commerce',
                    sub: 'University of Mumbai · BSc Physics',
                  },
                  {
                    icon: '💻',
                    label: 'GitHub',
                    value: 'github.com/sarahhhwhat',
                    sub: 'Open source projects & research code',
                    link: 'https://github.com/sarahhhwhat',
                  },
                ].map((item) => (
                  <div key={item.label} className="glass-dark border border-dark-border rounded-2xl p-5 card-hover">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-primary-foreground/50 text-[10px] uppercase tracking-widest font-semibold mb-0.5">{item.label}</p>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-sm hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-primary-foreground font-semibold text-sm">{item.value}</p>
                        )}
                        <p className="text-primary-foreground/50 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
              <div className="glass-dark border border-dark-border rounded-3xl p-6">
                <h3 className="font-display font-700 text-base text-primary-foreground mb-4">Find Me Online</h3>
                <div className="space-y-3">
                  {[
                    { label: 'GitHub', handle: '@sarahhhwhat', link: 'https://github.com/sarahhhwhat', icon: 'GH' },
                    { label: 'Book Shop', handle: '@bookaholicccs', link: 'https://instagram.com/bookaholicccs', icon: '📚' },
                    { label: 'Toman FC', handle: '@tomanfc_11', link: 'https://instagram.com/tomanfc_11', icon: '⚽' },
                    { label: 'StudPhysics', handle: 'studphysics.space', link: 'https://studphysics.space', icon: '⚛️' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between glass-dark border border-dark-border rounded-xl px-4 py-3 hover:border-primary transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{social.icon}</span>
                        <div>
                          <p className="text-primary-foreground text-sm font-semibold">{social.label}</p>
                          <p className="text-primary-foreground/50 text-xs">{social.handle}</p>
                        </div>
                      </div>
                      <svg
                        width="14" height="14"
                        viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="text-primary-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all"
                      >
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
            <div className="glass-dark border border-dark-border rounded-3xl p-8 shadow-editorial">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="text-5xl mb-4">✦</span>
                  <h3 className="font-display font-700 text-2xl text-primary-foreground mb-2">Message Received!</h3>
                  <p className="text-primary-foreground/60 text-sm max-w-xs">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-700 text-xl text-primary-foreground mb-6">
                    Send a Message <span className="text-accent">✦</span>
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-primary-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option value="tutoring">Tutoring Inquiry</option>
                        <option value="research">Research Collaboration</option>
                        <option value="internship">Internship / Opportunity</option>
                        <option value="project">Project Discussion</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-primary-foreground/50 font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me what you have in mind..."
                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-primary-foreground text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-all magnetic-btn shadow-editorial"
                    >
                      Send Message ✦
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

