'use client';

import React, { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We begin with the business context, goals, users, constraints, and the opportunity behind the problem.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We turn complexity into clear priorities, practical requirements, and a focused direction for execution.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We bring strategy to life through technology, digital experiences, growth initiatives, systems, and agreed deliverables.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'We learn from performance, feedback, and changing needs to improve, optimize, and identify what comes next.',
  },
];

const principles = [
  {
    title: 'Business before technology',
    description:
      'Technology should solve a meaningful business problem, not become the objective itself.',
  },
  {
    title: 'Clarity before complexity',
    description:
      'We simplify decisions, priorities, and execution before adding more tools, systems, or processes.',
  },
  {
    title: 'Outcomes over activity',
    description:
      'The focus stays on useful progress and business impact rather than simply completing tasks.',
  },
];

const engagementModels = [
  'Advisory',
  'Project Delivery',
  'Dedicated Teams',
  'Retainers',
  'Technology Staffing',
];

export default function OurApproach() {
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
      id="how-we-work"
      className="relative overflow-hidden border-t border-border/60 bg-background py-14 md:py-18"
    >
      {/* Cursor-following purple light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(124, 58, 237, 0.10), transparent 30%)`,
        }}
      />

      {/* Soft gold ambient light */}
      <div
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.16), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            How We Work
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A practical path from problem to progress.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Every engagement can be different. Our approach stays consistent:
            understand the business first, create clarity, execute with
            purpose, and keep improving what comes next.
          </p>
        </div>

        {/* Process */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
            >
              {/* Animated top accent */}
              <div
                className="absolute left-0 top-0 h-px w-10 bg-primary/50 transition-all duration-500 group-hover:w-full"
                style={{
                  background:
                    index % 2 === 0
                      ? 'linear-gradient(90deg, rgba(124,58,237,0.8), rgba(212,175,55,0.5))'
                      : 'linear-gradient(90deg, rgba(212,175,55,0.7), rgba(124,58,237,0.5))',
                }}
              />

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-primary">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden h-px w-8 bg-border lg:block" />
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-14" />
            </article>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-10">
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Our Principles
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="group rounded-2xl border border-border/60 bg-primary/[0.02] p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-primary/[0.035]"
              >
                <div
                  className="mb-4 h-1 w-8 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{
                    background:
                      index === 1
                        ? 'rgba(212, 175, 55, 0.65)'
                        : 'rgba(124, 58, 237, 0.55)',
                  }}
                />

                <h3 className="text-base font-semibold text-foreground">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.03] px-5 py-5 md:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Engagement Models
              </span>

              <p className="mt-1 text-sm text-muted-foreground">
                Structured around the way your business needs to work with us.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {engagementModels.map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 hover:border-primary/30 hover:text-primary"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reduced motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
