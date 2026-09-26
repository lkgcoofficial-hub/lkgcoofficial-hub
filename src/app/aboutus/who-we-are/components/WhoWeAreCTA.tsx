'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

export default function WhoWeAreCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const section = sectionRef.current;

    if (!section) return;

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

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '340px',
          height: '340px',
        }}
      />

      {/* Ambient brand elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-32 h-[380px] w-[380px] rounded-full bg-accent/[0.04] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-card px-6 py-10 shadow-xl shadow-primary/[0.04] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary/[0.08]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/[0.08]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Let&apos;s Build What&apos;s Next
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.4rem]">
                Have a challenge worth
                <span className="text-primary"> solving?</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Whether you are exploring a new idea, improving an existing
                business, planning a digital transformation or looking for the
                right technology partner, we would be happy to understand what
                you are working toward.
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                Start with a conversation. We can understand the context,
                discuss the challenge and explore whether there is a useful
                path forward together.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group/primary inline-flex min-w-[190px] items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2"
              >
                Start a Conversation
                <span className="ml-2 inline-block transition-transform duration-300 group-hover/primary:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.04] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
              >
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* Bottom principle */}
          <div className="relative z-10 mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-xs font-medium text-muted-foreground sm:text-sm">
            <span>Strategy</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>Technology</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>Digital Growth</span>
            <span className="h-1 w-1 rounded-full bg-primary/50" />
            <span>Transformation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
