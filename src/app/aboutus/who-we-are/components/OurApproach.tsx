'use client';

import React, { useRef, useState } from 'react';

const approachSteps = [
  {
    number: '01',
    title: 'Understand',
    question: 'What is really happening?',
    text: 'We begin by understanding the business, its objectives, constraints, customers, existing systems and the problem that needs to be solved.',
    tags: ['Business Context', 'Discovery', 'Research'],
  },
  {
    number: '02',
    title: 'Define',
    question: 'What should happen next?',
    text: 'We translate what we learn into clear priorities, opportunities, requirements and a practical direction that teams can act on.',
    tags: ['Strategy', 'Roadmaps', 'Priorities'],
  },
  {
    number: '03',
    title: 'Build',
    question: 'How do we make it real?',
    text: 'We bring together the right technology, design, engineering and delivery capabilities to turn the defined direction into something usable.',
    tags: ['Technology', 'Design', 'Execution'],
  },
  {
    number: '04',
    title: 'Evolve',
    question: 'How can it become better?',
    text: 'After delivery, the focus shifts to learning, optimization, growth and continuous improvement so the solution can keep creating value.',
    tags: ['Growth', 'Optimization', 'Transformation'],
  },
];

export default function OurApproach() {
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
      id="our-approach"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following interaction */}
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
        className="pointer-events-none absolute -left-40 top-1/3 h-[360px] w-[360px] rounded-full bg-accent/[0.025] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Our Approach
              </span>
            </div>

            <h2 className="max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.15rem]">
              From
              <span className="text-primary"> clarity </span>
              to
              <span className="text-primary"> action.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-8">
            <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              Good work starts before the work itself. Our approach is designed
              to create clarity first, then connect that clarity to practical
              execution.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Whether the challenge involves business strategy, digital
              growth, software development, AI, cloud, cybersecurity or
              transformation, we aim to understand the context before
              recommending a path forward.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="relative mt-11">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 lg:block"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <article
                key={step.number}
                className="group/card relative rounded-2xl border border-border bg-card/80 p-5 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06] sm:p-6"
              >
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background text-sm font-semibold text-primary shadow-sm transition-all duration-300 group-hover/card:border-primary/40 group-hover/card:shadow-md group-hover/card:shadow-primary/10">
                    {step.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-primary/30 transition-all duration-300 group-hover/card:scale-150 group-hover/card:bg-primary" />
                </div>

                <h3 className="mt-7 text-xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-1.5 text-sm font-medium text-primary">
                  {step.question}
                </p>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {step.text}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors duration-300 group-hover/card:border-primary/20 group-hover/card:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Four-question framework */}
        <div className="mt-10 rounded-3xl border border-border bg-card/50 p-6 sm:p-7 lg:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Our working principle
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Four questions keep the work connected.
              </h3>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  What should we do?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  Strategy and business thinking create direction.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  How should we build it?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  Technology and execution turn direction into reality.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  How do we reach the market?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  Digital growth connects solutions with the people they are
                  meant to serve.
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  How do we transform?
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                  Continuous improvement helps organizations adapt and scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-9 max-w-3xl border-l-2 border-primary/40 pl-5 sm:pl-6">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            This approach is intentionally flexible. Not every business needs
            every capability, and not every challenge needs a large engagement.
            We adapt the depth, team and delivery model to the problem in
            front of us.
          </p>
        </div>
      </div>
    </section>
  );
}
