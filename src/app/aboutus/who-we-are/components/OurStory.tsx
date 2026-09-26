'use client';

import React, { useRef, useState } from 'react';

export default function OurStory() {
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
      id="our-story"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-3xl transition-[left,top] duration-500 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '280px',
          height: '280px',
        }}
      />

      {/* Ambient brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[360px] w-[360px] rounded-full bg-accent/[0.035] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
          {/* Section introduction */}
          <div className="relative">
            <div className="sticky top-28">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-7 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Our Story
                </span>
              </div>

              <h2 className="max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.2rem]">
                Built around a simple idea:
                <span className="block text-primary">
                  effort should create impact.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Businesses invest time, people, ideas and resources every day.
                We believe that effort deserves a clearer path to meaningful
                outcomes.
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {['Strategy', 'Technology', 'Growth', 'Transformation'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Story content */}
          <div className="relative">
            <div className="space-y-7 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              <p>
                LKG &amp; Company is being built with a clear ambition: to help
                businesses make better decisions, use technology more
                effectively, grow with purpose and transform the way they
                operate.
              </p>

              <p>
                We see a recurring gap in the way businesses approach change.
                Strategy can exist separately from execution. Technology can
                become a project instead of a business capability. Marketing
                can focus on activity without enough connection to commercial
                outcomes. And transformation can become a long-term ambition
                without a practical path to get there.
              </p>

              <p>
                Our thinking starts from a different place. A business
                challenge rarely belongs to only one discipline. A new digital
                product may require strategy, product thinking, engineering,
                design and go-to-market planning. A growing company may need
                stronger technology foundations alongside better digital
                acquisition. An established organization may need
                modernization, automation and a clearer transformation
                roadmap.
              </p>

              <p>
                That is why LKG &amp; Company brings strategy, technology,
                digital growth and transformation together. The goal is not to
                add complexity. It is to create a more connected way of
                solving business problems.
              </p>

              <div className="my-9 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Direction
                  </span>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Understand the problem before deciding on the solution.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Execution
                  </span>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Turn clear priorities into practical technology and action.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Growth
                  </span>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Connect digital activity with how the business reaches its
                    market.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/[0.06]">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Evolution
                  </span>
                  <p className="mt-2 text-sm leading-6 text-foreground">
                    Build foundations that can adapt as the business changes.
                  </p>
                </div>
              </div>

              <p>
                We are intentionally building LKG &amp; Company for the long
                term. That means focusing on strong thinking, practical
                execution and relationships built around real business needs
                rather than chasing short-term activity for its own sake.
              </p>

              <p>
                We are also realistic about where we are today. LKG &amp;
                Company is a growing organization with a global ambition. Our
                approach is to earn trust through the quality of our thinking,
                the clarity of our communication and the work we deliver —
                not through exaggerated claims.
              </p>

              <p>
                As we grow, our direction remains straightforward: bring the
                right people, capabilities and technology together around the
                problems that matter most to our clients.
              </p>
            </div>

            {/* Closing principle */}
            <div className="mt-9 border-l-2 border-primary/50 pl-5 sm:pl-6">
              <p className="text-base font-medium leading-7 text-foreground sm:text-lg sm:leading-8">
                We are not building LKG &amp; Company simply to deliver more
                technology. We are building it to help businesses turn effort
                into something that matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
