'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const projects = [
{
  id: 'astro',
  type: 'Research',
  title: 'Computational Astrophysics OJT',
  subtitle: 'Sérsic Profile Fitting · HST GOODS-South',
  description:
  'On-the-job training project fitting Sérsic profiles on HST GOODS-South galaxies. Solved RAM exhaustion, catalog column mismatches, WCS coordinate issues, and implemented checkpoint/resume logic for large-scale batch processing.',
  tags: ['Python', 'Astropy', 'Photutils', 'Spyder', 'WCS', 'HST Data'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d50855dd-1775549674800.png",
  imageAlt: 'Deep space galaxy field from Hubble Space Telescope, dark starfield with colorful distant galaxies, dim atmospheric deep-space environment',
  colSpan: 'lg:col-span-2',
  dark: true,
  link: 'https://github.com/sarahhhwhat'
},
{
  id: 'aqi',
  type: 'Hardware',
  title: 'AQI Sensor (ESP32)',
  subtitle: 'Real-time Air Quality Monitor',
  description:
  'ESP32-based air quality monitoring system with browser-based live dashboard. Real-time sensor readings streamed over WiFi.',
  tags: ['ESP32', 'C++', 'WebSockets', 'HTML/CSS'],
  image: "https://images.unsplash.com/photo-1605995753652-d92e1167c867",
  imageAlt: 'Electronic circuit board with microcontroller, bright overhead lighting, clean white background, technical components clearly visible',
  colSpan: 'lg:col-span-1',
  dark: false,
  link: 'https://github.com/sarahhhwhat/AQI-sensor-using-ESP32'
},
{
  id: 'aurareset',
  type: 'Software',
  title: 'AuraReset',
  subtitle: 'Wellness Tracker PWA',
  description:
  'Progressive Web App for wellness tracking. Installed on iPhone. Built with React and deployed on Netlify.',
  tags: ['React', 'PWA', 'Netlify', 'JavaScript'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_116af182b-1766514926083.png",
  imageAlt: 'Smartphone displaying a wellness app interface, bright natural light, minimalist white desk setting, clean and airy',
  colSpan: 'lg:col-span-1',
  dark: false,
  link: 'https://github.com/sarahhhwhat'
},
{
  id: 'studphysics',
  type: 'Software',
  title: 'StudPhysics',
  subtitle: 'Physics Study App',
  description:
  'A dedicated physics study companion with custom domain studphysics.space. Deployed on Netlify.',
  tags: ['React', 'Netlify', 'Custom Domain'],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18a130216-1778864062049.png",
  imageAlt: 'Physics equations and formulas on dark chalkboard, dim atmospheric classroom, deep shadow environment, low-key academic lighting',
  colSpan: 'lg:col-span-1',
  dark: true,
  link: 'https://studphysics.space'
},
{
  id: 'gravity',
  type: 'Academic',
  title: 'C++ Gravity Simulation',
  subtitle: 'N-Body Simulation with SFML',
  description:
  'Numerical gravity simulation using C++ and SFML, demonstrating N-body orbital mechanics and gravitational interactions.',
  tags: ['C++', 'SFML', 'Physics Simulation', 'Numerical Methods'],
  image: "https://images.unsplash.com/photo-1691996072414-523ce9110a93",
  imageAlt: 'Abstract orbital paths and planetary bodies in deep space, dark atmospheric void, dim starfield background, deep shadows',
  colSpan: 'lg:col-span-1',
  dark: true,
  link: 'https://github.com/sarahhhwhat'
}];


export default function ProjectsSection() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-6 bg-dark-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary-foreground/40 font-semibold">02 · Work</span>
          <h2 className="font-display font-900 text-section-title text-primary-foreground mt-2">
            Research &amp; <span className="italic text-primary">Projects.</span>
          </h2>
          <p className="text-primary-foreground/60 text-base mt-3 max-w-xl">
            From Hubble Space Telescope data to ESP32 hardware — here's what I've built.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
           Array: [astro cs-2, aqi cs-1, aurareset cs-1, studphysics cs-1, gravity cs-1]
           Row 1: [col-1+2: astro cs-2] [col-3: aqi cs-1]
           Row 2: [col-1: aurareset cs-1] [col-2: studphysics cs-1] [col-3: gravity cs-1]
           Placed 5/5 cards ✓
          */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card: astro — col-span-2 */}
          <div
            className="lg:col-span-2 reveal-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)' }}>
            
            <ProjectCard project={projects[0]} />
          </div>

          {/* Card: aqi — col-span-1 */}
          <div
            className="lg:col-span-1 reveal-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)' }}>
            
            <ProjectCard project={projects[1]} />
          </div>

          {/* Card: aurareset */}
          <div
            className="lg:col-span-1 reveal-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)' }}>
            
            <ProjectCard project={projects[2]} />
          </div>

          {/* Card: studphysics */}
          <div
            className="lg:col-span-1 reveal-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)' }}>
            
            <ProjectCard project={projects[3]} />
          </div>

          {/* Card: gravity */}
          <div
            className="lg:col-span-1 reveal-hidden"
            style={{ opacity: 0, transform: 'translateY(40px)' }}>
            
            <ProjectCard project={projects[4]} />
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center reveal-hidden" style={{ opacity: 0, transform: 'translateY(40px)' }}>
          <a
            href="https://github.com/sarahhhwhat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 glass-dark border border-dark-border px-8 py-4 rounded-full text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:border-primary transition-all magnetic-btn">
            
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub · @sarahhhwhat
          </a>
        </div>
      </div>
    </section>);

}

function ProjectCard({ project }: {project: typeof projects[0];}) {
  const typeColors: Record<string, string> = {
    Research: 'bg-primary text-primary-foreground',
    Hardware: 'bg-accent text-accent-foreground',
    Software: 'bg-dark-surface text-primary-foreground border border-dark-border',
    Academic: 'bg-dark-surface text-primary-foreground border border-dark-border'
  };

  return (
    <div className={`group relative rounded-3xl overflow-hidden shadow-editorial card-hover h-full min-h-[280px] flex flex-col ${project.dark ? 'bg-dark-surface border border-dark-border' : 'bg-secondary border border-border'}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <AppImage
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700" />
        
        <div className={`absolute inset-0 ${project.dark ? 'bg-gradient-to-t from-dark-surface/90 via-dark-surface/30 to-transparent' : 'bg-gradient-to-t from-secondary/80 via-transparent to-transparent'}`} />

        {/* Type badge */}
        <div className="absolute top-4 left-4">
          <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${typeColors[project.type]}`}>
            {project.type}
          </span>
        </div>

        {/* Link icon */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-8 h-8 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={`View ${project.title} on GitHub`}>
          
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" x2="21" y1="14" y2="3" />
          </svg>
        </a>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className={`font-display font-700 text-lg leading-tight mb-1 ${project.dark ? 'text-primary-foreground' : 'text-foreground'}`}>
          {project.title}
        </h3>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${project.dark ? 'text-primary' : 'text-primary'}`}>
          {project.subtitle}
        </p>
        <p className={`text-sm leading-relaxed mb-4 flex-grow ${project.dark ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) =>
          <span
            key={tag}
            className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${project.dark ? 'bg-dark-bg text-primary-foreground/70' : 'bg-background text-muted-foreground'}`}>
            
              {tag}
            </span>
          )}
        </div>
      </div>
    </div>);

}

