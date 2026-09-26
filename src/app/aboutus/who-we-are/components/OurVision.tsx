'use client';

import React, { useRef, useState } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Think with purpose',
    text: 'Start with the business problem, the opportunity and the outcome—not with a technology or service simply because it is available.',
  },
  {
    number: '02',
    title: 'Build for reality',
    text: 'Turn ideas and strategy into practical solutions that teams can actually use, operate, improve and scale.',
  },
  {
    number: '03',
    title: 'Create lasting value',
    text: 'Focus on capabilities, systems and decisions that continue to matter beyond a single project or campaign.',
  },
];

export default function OurVision() {
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
      id="vision"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-card/[0.35]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '300px',
          height: '300px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-primary/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[320px] w-[320px] rounded-full bg-accent/[0.035] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-7 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Vision &amp; Mission
            </span>
            <span className="h-px w-7 bg-primary" />
          </div>

          <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.2rem]">
            Building a company that helps businesses
            <span className="block text-primary">move forward with clarity.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Our vision is to build LKG &amp; Company into a trusted strategy,
            technology and transformation partner for businesses navigating
            growth, change and what comes next.
          </p>
        </div>

        {/* Vision / Mission */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
          <div className="group/card relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/[0.06] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/[0.05] blur-3xl transition-all duration-500 group-hover/card:bg-primary/[0.09]"
            />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                Our Vision
              </span>

              <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Make meaningful progress easier to build.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                We want to create an organization where business leaders can
                bring complex challenges, ambitious ideas and important
                transformation goals—and find a practical path from thinking
                to execution.
              </p>
            </div>
          </div>

          <div className="group/card relative overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/[0.05] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-32 w-32 rounded-full bg-accent/[0.04] blur-3xl transition-all duration-500 group-hover/card:bg-accent/[0.08]"
            />

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our Mission
              </span>

              <h3 className="mt-4 max-w-xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Connect strategy with execution.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Our mission is to help businesses understand what matters,
                make informed decisions, build practical solutions, strengthen
                their digital presence and continuously evolve their
                capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Three principles */}
        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">
                What guides us
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Principles that shape how we approach our work.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group/pillar rounded-2xl border border-border bg-background/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-primary">
                    {pillar.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-transform duration-300 group-hover/pillar:scale-150" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-7 text-center">
          <p className="text-base font-medium leading-7 text-foreground sm:text-lg sm:leading-8">
            We believe the strongest businesses are not simply the ones that
            adopt more technology. They are the ones that know{' '}
            <span className="text-primary">why</span> they are changing,
            <span className="text-primary"> what</span> they need to build and
            <span className="text-primary"> how</span> to turn that change
            into lasting progress.
          </p>
        </div>
      </div>
    </section>
  );
}
