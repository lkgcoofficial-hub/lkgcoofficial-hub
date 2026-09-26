'use client';

import React, { useRef, useState } from 'react';

const principles = [
  {
    number: '01',
    title: 'Business before technology',
    text: 'Technology should serve a clear business purpose. We start by understanding the objective, the problem and the outcome before deciding what should be built or changed.',
  },
  {
    number: '02',
    title: 'Clarity before complexity',
    text: 'Complex challenges do not always need complex solutions. We look for the simplest practical path that can address the real requirement and create room for future growth.',
  },
  {
    number: '03',
    title: 'Execution matters',
    text: 'A strong strategy only becomes valuable when it can be translated into action. We connect strategic thinking with practical implementation and delivery.',
  },
  {
    number: '04',
    title: 'Outcomes over activity',
    text: 'Projects, campaigns and technology are means to an end. We keep the intended business outcome visible throughout the engagement.',
  },
  {
    number: '05',
    title: 'Built for change',
    text: 'Businesses evolve. We think about flexibility, maintainability and scalability so solutions can adapt as priorities, markets and technologies change.',
  },
  {
    number: '06',
    title: 'Learn and improve',
    text: 'Good work does not stop at launch. Feedback, data and real-world experience should continuously inform better decisions and improvements.',
  },
];

export default function HowWeThink() {
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
      id="how-we-think"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following brand light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '300px',
          height: '300px',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[380px] w-[380px] rounded-full bg-accent/[0.025] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                How We Think
              </span>
            </div>

            <h2 className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.15rem]">
              Practical thinking for
              <span className="text-primary"> real business problems.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-8">
            <p className="text-base leading-7 text-foreground sm:text-lg sm:leading-8">
              We believe good technology work starts with good business
              thinking. The tools may change, but the fundamentals remain:
              understand the problem, define the outcome, make informed
              decisions and execute with discipline.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              These principles shape how we approach consulting, digital
              growth, software development, AI, cloud, cybersecurity,
              enterprise technology and transformation work.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group/card relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.05] sm:p-6"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/[0.035] blur-2xl transition-all duration-500 group-hover/card:bg-primary/[0.07]"
              />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-primary">
                    {principle.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-primary/30 transition-all duration-300 group-hover/card:scale-150 group-hover/card:bg-primary" />
                </div>

                <h3 className="mt-6 text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {principle.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {principle.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Thinking framework */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card/50">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/[0.05] blur-3xl"
              />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  The LKG lens
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Ask the right question before choosing the answer.
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Different businesses require different solutions. Our role is
                  not to force every challenge into the same delivery model,
                  technology stack or service.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              <div className="border-b border-border p-6 sm:border-r sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Context
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  What does the business need to achieve?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Objectives, customers, constraints, market conditions and
                  existing capabilities all matter.
                </p>
              </div>

              <div className="border-b border-border p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Choices
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  What are the realistic paths forward?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We consider priorities, trade-offs, resources, technology
                  and timing before moving into execution.
                </p>
              </div>

              <div className="border-b border-border p-6 sm:border-b-0 sm:border-r sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Action
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  What needs to happen next?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A useful strategy should lead to clear decisions, owners,
                  priorities and practical execution.
                </p>
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Learning
                </p>

                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  What can we improve from what we learn?
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Real-world results and feedback should influence the next
                  decision rather than being treated as an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-9 flex flex-col gap-4 border-t border-border pt-7 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Our thinking is deliberately outcome-oriented: strategy should
            create direction, technology should create capability, growth
            should create reach, and transformation should create the ability
            to keep moving forward.
          </p>

          <div className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Think clearly · Build practically
          </div>
        </div>
      </div>
    </section>
  );
}
