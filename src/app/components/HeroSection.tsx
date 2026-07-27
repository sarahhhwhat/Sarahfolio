'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const mx = (e.clientX - cx) / cx;
      const my = (e.clientY - cy) / cy;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${mx * 40}px, ${my * 30}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${mx * -30}px, ${my * -20}px)`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `rotateY(${mx * 3}deg) rotateX(${-my * 2}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 px-6"
      style={{ perspective: '1000px' }}>
      
      {/* Atmospheric Blobs */}
      <div
        ref={blobRef1}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] blob-burgundy rounded-full pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true" />
      
      <div
        ref={blobRef2}
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] blob-gold rounded-full pointer-events-none transition-transform duration-700 ease-out"
        aria-hidden="true" />
      

      {/* Decorative corner lines */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l border-t border-border opacity-40 hidden md:block" aria-hidden="true" />
      <div className="absolute top-32 right-8 w-16 h-16 border-r border-t border-border opacity-40 hidden md:block" aria-hidden="true" />

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center max-w-6xl mx-auto transition-transform duration-300 ease-out">
        
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 glass-cream px-4 py-1.5 rounded-full mb-10 shadow-card">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            BSc Physics · University of Mumbai · 2026
          </span>
        </div>

        {/* Hero Headline */}
        <div className="overflow-hidden mb-4">
          <h1 className="animate-fade-up delay-100 font-display font-900 italic text-hero-xl text-foreground leading-none tracking-tight">
            Sarah
          </h1>
        </div>

        {/* Middle row with sparkle + name + sparkle */}
        <div className="flex items-center justify-center gap-4 md:gap-8 mb-4">
          <span
            className="animate-sparkle text-2xl md:text-4xl text-accent select-none"
            aria-hidden="true">
            
            ✦
          </span>
          <div className="overflow-hidden">
            <h1 className="animate-fade-up delay-200 font-display font-900 text-hero-xl text-primary leading-none tracking-tight">
              Fatima
            </h1>
          </div>
          <span
            className="animate-sparkle text-2xl md:text-4xl text-accent select-none"
            aria-hidden="true"
            style={{ animationDelay: '2s' }}>
            
            ✦
          </span>
        </div>

        <div className="overflow-hidden mb-10">
          <h1 className="animate-fade-up delay-300 font-display font-300 italic text-hero-xl text-foreground leading-none tracking-tight opacity-70">
            Shaikh
          </h1>
        </div>

        {/* Role tags */}
        <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center gap-2 mb-10">
          {['Computational Astrophysics', 'React Developer', 'Physics Tutor', 'Mira Road, MH'].map((tag) =>
          <span key={tag} className="tag-pill">{tag}</span>
          )}
        </div>

        {/* Description */}
        <p className="animate-fade-up delay-500 max-w-xl mx-auto text-base text-muted-foreground leading-relaxed mb-12">
          Third-year Physics major researching galaxy morphology with HST data,
          building React apps, and helping students fall in love with STEM.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-600 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#projects"
            className="magnetic-btn bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-all shadow-editorial-lg">
            
            View My Work ✦
          </a>
          <a
            href="#contact"
            className="magnetic-btn glass-cream text-foreground px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-editorial transition-all">
            
            Get In Touch
          </a>
        </div>

        {/* Social proof */}
        <div className="animate-fade-up delay-700 mt-12 flex items-center justify-center gap-8 text-xs text-muted-foreground">
          <div className="text-center">
            <div className="font-display font-700 text-2xl text-foreground">4+</div>
            <div className="tracking-widest uppercase text-[10px]">Years Tutoring</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-display font-700 text-2xl text-foreground">6+</div>
            <div className="tracking-widest uppercase text-[10px]">Live Projects</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="font-display font-700 text-2xl text-foreground">10+</div>
            <div className="tracking-widest uppercase text-[10px]">Applications</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-1000 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground font-semibold">Scroll</span>
        <div className="scroll-indicator-line" />
      </div>

      {/* Floating photo card */}
      <div className="animate-float-slow absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <div className="glass-cream rounded-3xl p-3 shadow-editorial-lg rotate-3 hover:rotate-0 transition-transform duration-500 w-44">
          <div className="arch-frame overflow-hidden w-full aspect-[3/4] bg-secondary">
            <AppImage
              src="/assets/images/IMG_7814-1785096710564.png"
              alt="Sarah Fatima Shaikh"
              fill
              className="object-cover" />
            
          </div>
          <div className="mt-2 text-center">
            <p className="font-display text-xs italic text-muted-foreground">Sarah F. Shaikh</p>
          </div>
        </div>
      </div>

      {/* Floating sparkle decoration */}
      <div className="absolute left-8 md:left-20 bottom-1/3 hidden lg:block animate-float">
        <div className="glass-cream rounded-2xl px-4 py-3 shadow-card border border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Currently</p>
          <p className="font-display text-sm font-700 text-primary mt-0.5">OJT @ Astrophysics</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">HST GOODS-South</p>
        </div>
      </div>
    </section>);

}

