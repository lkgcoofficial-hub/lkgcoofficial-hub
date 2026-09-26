'use client';

import React, { useEffect, useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We start with the business context, goals, users, constraints, and the problem that needs to be solved.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We turn the problem into clear priorities, requirements, opportunities, and a practical direction for execution.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We translate the defined direction into technology, digital experiences, campaigns, systems, or other agreed deliverables.',
  },
  {
    number: '04',
    title: 'Evolve',
    description:
      'We use feedback, performance, and changing business needs to improve what has been built and identify the next opportunity.',
  },
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
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(124, 58, 237, 0.09), transparent 28%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            How We Work
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            A practical path from problem to progress.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Every engagement can be different, but our working process stays
            grounded in understanding the problem before deciding on the
            solution.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-border/70 bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]"
            >
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

        <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.03] px-6 py-5 md:px-7">
          <p className="text-sm leading-6 text-muted-foreground">
            Engagements can be structured around{' '}
            <span className="font-medium text-foreground">
              advisory, project delivery, dedicated teams, retainers, or
              technology staffing
            </span>
            , depending on the business requirement.
          </p>
        </div>
      </div>
    </section>
  );
}
