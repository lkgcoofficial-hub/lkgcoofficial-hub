'use client';

import React, { useEffect, useRef } from 'react';

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    ref?.current?.querySelectorAll('.reveal-hidden')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative pt-32 pb-16 hero-gradient overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="reveal-hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
            Get In Touch
          </div>
          <h1 className="reveal-hidden stagger-1 text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-5">
            Let&apos;s start a{' '}
            <span className="text-gradient">conversation.</span>
          </h1>
          <p className="reveal-hidden stagger-2 text-xl text-muted-foreground leading-relaxed">
            Whether you have a project in mind, a question about our services, or just want to explore how we can help — we&apos;re ready to listen.
          </p>
        </div>
      </div>
    </section>
  );
}