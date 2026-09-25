'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const capabilityTags = [
  'Consulting',
  'Digital Growth',
  'Web & Software',
  'Mobile',
  'AI & Automation',
  'Cloud & Cybersecurity',
  'Enterprise Technology',
  'IT Staffing',
];

export default function ServicesHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current
      ?.querySelectorAll('.reveal-hidden')
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-28 hero-gradient"
    >
      {/* Ambient background movement */}
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float-reverse" />

      <div className="pointer-events-none absolute right-[18%] top-[28%] h-2 w-2 rounded-full bg-accent/70 animate-pulse-slow" />
      <div className="pointer-events-none absolute left-[12%] top-[42%] h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT */}
          <div className="max-w-4xl">
            <div className="reveal-hidden inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
              Strategy · Technology · Transformation
            </div>

            <h1 className="reveal-hidden stagger-1 mt-7 text-5xl font-extrabold leading-[1.03] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Technology built around{' '}
              <span className="text-gradient">business impact.</span>
            </h1>

            <p className="reveal-hidden stagger-2 mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              From strategic advisory and digital growth to software, AI,
              cloud, cybersecurity and enterprise technology — we bring the
              capabilities businesses need to move from idea to execution.
            </p>

            {/* Capability pills */}
            <div className="reveal-hidden stagger-3 mt-8 flex flex-wrap gap-3">
              {capabilityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card/80 px-3.5 py-2 text-xs font-semibold text-foreground/75 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal-hidden stagger-4 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                Start a Conversation
                <span className="ml-2">→</span>
              </Link>

              <a
                href="#capabilities"
                className="btn-outline inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* RIGHT — Capability Architecture */}
          <div className="reveal-hidden stagger-3 relative mx-auto h-[380px] w-full max-w-[440px]">
            {/* Outer orbit */}
            <div className="absolute inset-8 rounded-full border border-primary/10 animate-spin-slow" />

            {/* Inner orbit */}
            <div className="absolute inset-16 rounded-full border border-accent/15 animate-spin-reverse" />

            {/* Core ring */}
            <div className="absolute inset-[28%] rounded-full border border-primary/20" />

            {/* Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-primary/30 bg-card/90 shadow-2xl backdrop-blur-xl">
                <div className="absolute inset-3 rounded-full border border-accent/20 animate-pulse-slow" />

                <div className="relative text-center">
                  <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                    LKG
                  </div>

                  <div className="mt-1 text-sm font-bold text-foreground">
                    Impact
                  </div>
                </div>
              </div>
            </div>

            {/* Floating capability nodes */}
            <div className="absolute left-2 top-10 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md animate-orbit-1">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Strategy
            </div>

            <div className="absolute right-0 top-20 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md animate-orbit-2">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Technology
            </div>

            <div className="absolute bottom-16 left-4 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md animate-orbit-3">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Growth
            </div>

            <div className="absolute bottom-5 right-5 rounded-full border border-border bg-card/90 px-4 py-2 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md animate-orbit-4">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Transformation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
