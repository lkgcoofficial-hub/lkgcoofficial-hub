'use client';

import React, { useEffect, useRef } from 'react';

export default function ServicesHero() {
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
    <section ref={ref} className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="reveal-hidden inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
            Our Service Portfolio
          </div>

          <h1 className="reveal-hidden stagger-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground mb-6">
            Services that{' '}
            <span className="text-gradient">drive real</span>{' '}
            outcomes.
          </h1>

          <p className="reveal-hidden stagger-2 text-xl text-muted-foreground leading-relaxed max-w-2xl">
            From web development to cloud infrastructure — every service we offer is engineered for measurable business impact, not just delivery.
          </p>

          <div className="reveal-hidden stagger-3 flex flex-wrap gap-3 mt-8">
            {['Web Development', 'Mobile Apps', 'Digital Marketing', 'Cloud', 'IT Staffing', 'Custom Software']?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}