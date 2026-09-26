'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRef.current
      ?.querySelectorAll('.reveal-hidden')
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-3xl" />

      <div className="pointer-events-none absolute left-[12%] top-20 h-2 w-2 rounded-full bg-accent/70 animate-pulse-slow" />
      <div className="pointer-events-none absolute right-[15%] bottom-24 h-1.5 w-1.5 rounded-full bg-primary/60 animate-pulse-slow" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="reveal-hidden relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card px-7 py-14 text-center shadow-soft md:px-12 md:py-20">
          {/* Top accent */}
          <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-accent" />

          {/* Decorative rings */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary/10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-accent/10" />
          <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full border border-primary/10" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Let&apos;s talk
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Have a challenge worth{' '}
              <span className="text-gradient">solving?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you need strategic direction, a technology solution,
              digital growth support, transformation expertise or additional
              technology talent, let&apos;s understand what you are trying to
              achieve.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                Start a Conversation
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/contact"
                className="btn-outline inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-1"
              >
                Book a Consultation
              </Link>
            </div>

            <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
              <span>Strategy</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Technology</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Digital Growth</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Transformation</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>Talent &amp; Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
