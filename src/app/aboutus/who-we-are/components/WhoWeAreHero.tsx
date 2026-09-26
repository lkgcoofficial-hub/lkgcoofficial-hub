'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function WhoWeAreHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setPointer({
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      });
    };

    const handlePointerLeave = () => {
      setPointer({ x: 50, y: 50 });
    };

    section.addEventListener('pointermove', handlePointerMove);
    section.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      section.removeEventListener('pointermove', handlePointerMove);
      section.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group relative overflow-hidden bg-background"
    >
      {/* Cursor-following brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '320px',
          height: '320px',
        }}
      />

      {/* Static atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-primary/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -right-40 h-[460px] w-[460px] rounded-full bg-accent/[0.045] blur-3xl"
      />

      <div className="container relative mx-auto px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 xl:gap-20">
          {/* LEFT */}
          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.05] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[4.2rem]">
              We&apos;re building LKG &amp; Company for{' '}
              <span className="relative whitespace-nowrap text-primary">
                what&apos;s next.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0"
                />
              </span>
            </h1>

            {/* Primary description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              LKG &amp; Company is being built around a simple idea:
              businesses should be able to turn their effort, ideas and
              opportunities into meaningful impact.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              We bring together strategy, technology, digital growth and
              transformation to help businesses understand what matters, build
              what matters and create a stronger path forward.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group/cta inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
              >
                Start a Conversation

                <span className="ml-2 inline-block transition-transform duration-300 group-hover/cta:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="#our-approach"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-primary/[0.04] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                How We Think
              </a>
            </div>

            {/* Positioning line */}
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted-foreground sm:text-sm">
              <span>Strategy</span>
              <span className="h-1 w-1 rounded-full bg-primary/50" />
              <span>Technology</span>
              <span className="h-1 w-1 rounded-full bg-primary/50" />
              <span>Transformation</span>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative z-10 mx-auto w-full max-w-[500px] lg:max-w-[520px]">
            <div className="relative aspect-square">
              {/* Outer architecture rings */}
              <div className="absolute inset-[4%] rounded-full border border-primary/[0.10]" />

              <div className="absolute inset-[13%] rounded-full border border-primary/[0.14]" />

              <div className="absolute inset-[24%] rounded-full border border-primary/[0.18]" />

              <div className="absolute inset-[35%] rounded-full border border-primary/[0.12]" />

              {/* Orbit lines */}
              <div className="absolute left-1/2 top-[4%] h-3 w-3 -translate-x-1/2 rounded-full border border-primary/30 bg-background shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-transform duration-500 group-hover:scale-125" />

              <div className="absolute bottom-[10%] right-[12%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(212,175,55,0.45)] transition-transform duration-500 group-hover:scale-125" />

              <div className="absolute left-[10%] top-[22%] h-2 w-2 rounded-full bg-primary/50 transition-transform duration-500 group-hover:scale-125" />

              {/* Center impact node */}
              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-48 sm:w-48">
                <div className="absolute inset-0 rounded-full bg-primary/[0.07] blur-xl transition-all duration-700 group-hover:bg-primary/[0.11]" />

                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full border border-primary/25 bg-card/90 p-6 text-center shadow-2xl backdrop-blur-md transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary sm:text-xs">
                    Our Belief
                  </span>

                  <span className="mt-3 text-lg font-semibold leading-tight tracking-tight text-foreground sm:text-xl">
                    Turning Effort
                    <br />
                    into Impact.
                  </span>
                </div>
              </div>

              {/* Strategy node */}
              <div className="absolute left-0 top-[27%] rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10 motion-reduce:transition-none">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <span className="text-xs font-semibold text-foreground">
                    Strategy
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  Decide what matters
                </p>
              </div>

              {/* Technology node */}
              <div className="absolute right-0 top-[47%] rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10 motion-reduce:transition-none">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <span className="text-xs font-semibold text-foreground">
                    Technology
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  Build what matters
                </p>
              </div>

              {/* Transformation node */}
              <div className="absolute bottom-[8%] left-[12%] rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10 motion-reduce:transition-none">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                  <span className="text-xs font-semibold text-foreground">
                    Transformation
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] text-muted-foreground">
                  Evolve what&apos;s next
                </p>
              </div>

              {/* Growth node */}
              <div className="absolute left-[43%] top-[1%] rounded-xl border border-accent/25 bg-accent/[0.05] px-4 py-2.5 transition-all duration-500 hover:-translate-y-1 hover:bg-accent/[0.08] motion-reduce:transition-none">
                <span className="text-xs font-semibold text-accent">
                  Growth
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom positioning strip */}
        <div className="mt-14 border-t border-border pt-7 lg:mt-16">
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="group/item">
              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover/item:text-primary">
                What should we do?
              </p>

              <p className="mt-1.5 max-w-xs text-sm leading-6 text-muted-foreground">
                Strategy, advisory and business thinking that create direction.
              </p>
            </div>

            <div className="group/item">
              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover/item:text-primary">
                How should we build it?
              </p>

              <p className="mt-1.5 max-w-xs text-sm leading-6 text-muted-foreground">
                Technology, execution and practical delivery built around the
                business.
              </p>
            </div>

            <div className="group/item">
              <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover/item:text-primary">
                How do we move forward?
              </p>

              <p className="mt-1.5 max-w-xs text-sm leading-6 text-muted-foreground">
                Growth, transformation and continuous improvement for what
                comes next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
