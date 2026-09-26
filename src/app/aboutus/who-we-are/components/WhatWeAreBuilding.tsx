'use client';

import React, { useRef, useState } from 'react';

const capabilities = [
  {
    number: '01',
    title: 'Strategy & Advisory',
    description:
      'Helping businesses make clearer decisions across business strategy, technology, digital transformation, AI readiness and growth.',
    items: ['Business Strategy', 'Technology Strategy', 'Digital Transformation'],
  },
  {
    number: '02',
    title: 'Technology & Product',
    description:
      'Building practical digital products, platforms and software capabilities that support real business requirements.',
    items: ['Web & Software', 'Mobile Applications', 'AI & Automation'],
  },
  {
    number: '03',
    title: 'Digital Growth',
    description:
      'Connecting businesses with their markets through digital marketing, SEO, performance marketing, social media and creative capabilities.',
    items: ['SEO', 'Performance Marketing', 'Content & Creative'],
  },
  {
    number: '04',
    title: 'Enterprise & Transformation',
    description:
      'Supporting organizations as they modernize technology, improve processes, connect systems and evolve how they operate.',
    items: ['Cloud & Cybersecurity', 'Enterprise Technology', 'Transformation'],
  },
];

const ambitions = [
  'Build a trusted global technology and transformation brand.',
  'Bring strategy and execution closer together for businesses.',
  'Develop capabilities that can serve companies at different stages of growth.',
  'Create practical solutions around emerging technologies such as AI and automation.',
];

export default function WhatWeAreBuilding() {
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
      id="what-we-are-building"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-card/[0.3]"
    >
      {/* Cursor-following light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '320px',
          height: '320px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-primary/[0.025] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[320px] w-[320px] rounded-full bg-accent/[0.03] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                What We&apos;re Building
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.15rem]">
              A company designed for
              <span className="text-primary"> what comes next.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-8">
            <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              LKG &amp; Company is not being built around a single technology,
              service or industry. We are building a broader business platform
              where strategy, technology, growth and transformation can work
              together.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              The ambition is long term: develop the people, capabilities,
              partnerships and operating model needed to support businesses as
              their challenges become more complex.
            </p>
          </div>
        </div>

        {/* Capability ecosystem */}
        <div className="mt-10">
          <div className="mb-5">
            <p className="text-sm font-semibold text-foreground">
              The capability ecosystem
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Different capabilities, connected around the same business
              objective.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.number}
                className="group/card relative overflow-hidden rounded-2xl border border-border bg-background p-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.05] sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/[0.035] blur-2xl transition-all duration-500 group-hover/card:bg-primary/[0.07]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.16em] text-primary">
                      {capability.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-primary/30 transition-all duration-300 group-hover/card:scale-150 group-hover/card:bg-primary" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {capability.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                    {capability.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {capability.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors duration-300 group-hover/card:border-primary/20 group-hover/card:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Long-term ambition */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-36 w-36 rounded-full bg-primary/[0.05] blur-3xl"
              />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Long-term ambition
                </span>

                <h3 className="mt-3 max-w-md text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Think globally. Build practically. Grow responsibly.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                  Our ambition is to grow LKG &amp; Company into an
                  internationally minded organization while keeping the work
                  grounded in practical business needs.
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="space-y-4">
                {ambitions.map((ambition, index) => (
                  <div
                    key={ambition}
                    className="group/ambition flex gap-4 rounded-xl border border-transparent p-3 transition-all duration-300 hover:border-primary/15 hover:bg-primary/[0.025]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/20 text-[10px] font-semibold text-primary transition-all duration-300 group-hover/ambition:border-primary/40 group-hover/ambition:bg-primary/[0.05]">
                      0{index + 1}
                    </span>

                    <p className="pt-0.5 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover/ambition:text-foreground">
                      {ambition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Future-facing statement */}
        <div className="mt-10 grid gap-6 border-t border-border pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-foreground sm:text-base">
              The future we are working toward
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              A business should not have to coordinate disconnected partners
              for every stage of a transformation. Over time, we want LKG
              &amp; Company to provide a connected path—from understanding the
              challenge and shaping the strategy to building the technology,
              reaching the market and evolving the organization.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Turning Effort into Impact
          </div>
        </div>
      </div>
    </section>
  );
}
