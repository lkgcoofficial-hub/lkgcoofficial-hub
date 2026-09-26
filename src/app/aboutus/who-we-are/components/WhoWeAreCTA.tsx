'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function WhoWeAreCTA() {
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/60 bg-background py-14 md:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(124, 58, 237, 0.12), transparent 30%)`,
        }}
      />

      <div className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Let&apos;s Talk
        </span>

        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Have a business or technology challenge?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Tell us what you&apos;re trying to build, improve, launch, or
          transform. We&apos;ll start by understanding the context and
          identifying where we can help.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Discuss Your Challenge
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
          >
            Explore Capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
