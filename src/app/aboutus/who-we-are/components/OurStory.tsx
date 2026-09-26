'use client';

import React, { useRef, useState } from 'react';

const storyCards = [
  {
    label: 'Direction',
    text: 'Understand the problem before deciding on the solution.',
  },
  {
    label: 'Execution',
    text: 'Turn clear priorities into practical technology and action.',
  },
  {
    label: 'Growth',
    text: 'Connect digital activity with how the business reaches its market.',
  },
  {
    label: 'Evolution',
    text: 'Build foundations that can adapt as the business changes.',
  },
];

const focusAreas = ['Strategy', 'Technology', 'Growth', 'Transformation'];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [pointer, setPointer] = useState({
    x: 50,
    y: 50,
  });

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
    setPointer({
      x: 50,
      y: 50,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="our-story"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following gold light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top,opacity] duration-300 ease-out motion-reduce:transition-none"
        style={{
          left: `${pointer.x}%`,
          top: `${pointer.y}%`,
          width: '320px',
          height: '320px',
          background:
            'radial-gradient(circle, rgba(212,175,55,0.13) 0%, rgba(124,58,237,0.055) 42%, transparent 72%)',
        }}
      />

      {/* Soft purple ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/[0.035] blur-3xl"
      />

      {/* Moving brand ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-16 hidden h-72 w-72 rounded-full border border-primary/[0.08] sm:block motion-safe:animate-[spin_28s_linear_infinite] motion-reduce:animate-none"
      >
        <div className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.55)]" />

        <div className="absolute right-8 top-8 h-3 w-3 rounded-full bg-[#9B8ACB] shadow-[0_0_20px_rgba(155,138,203,0.45)]" />
      </div>

      <div className="container relative mx-auto px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-18">
          {/* LEFT — Story identity */}
          <div className="relative lg:sticky lg:top-28">
            <div className="max-w-xl">
              {/* Eyebrow */}
              <div className="mb-5 flex items-center gap-2.5">
                <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-primary" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Our Story
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-[3.15rem] lg:text-[3.55rem]">
                Built around a
                <br />
                simple idea:
                <span className="mt-1 block bg-gradient-to-r from-primary via-[#8E7CC3] to-[#D4AF37] bg-clip-text text-transparent">
                  effort should
                  <br />
                  create impact.
                </span>
              </h2>

              {/* Short intro */}
              <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                Businesses invest time, people, ideas and resources every day.
                We believe that effort deserves a clearer path to meaningful
                outcomes.
              </p>

              {/* Focus areas */}
              <div className="mt-7 flex max-w-lg flex-wrap gap-2">
                {focusAreas.map((item, index) => (
                  <span
                    key={item}
                    className="group/tag relative overflow-hidden rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/50 hover:text-foreground hover:shadow-[0_8px_25px_rgba(212,175,55,0.08)]"
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent transition-all duration-500 group-hover/tag:w-full group-hover/tag:opacity-10 ${
                        index % 2 === 0 ? 'from-[#D4AF37]' : 'from-primary'
                      }`}
                    />

                    <span className="relative z-10">{item}</span>
                  </span>
                ))}
              </div>

              {/* Small brand visual */}
              <div className="mt-9 hidden max-w-sm md:block">
                <div className="relative h-px overflow-hidden bg-border">
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-primary motion-safe:animate-[storyLine_4s_ease-in-out_infinite] motion-reduce:animate-none" />
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>Strategy</span>
                  <span>Technology</span>
                  <span>Growth</span>
                  <span>Transformation</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Story content */}
          <div className="relative">
            <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-7">
              <p>
                LKG &amp; Company is being built with a clear ambition: to help
                businesses make better decisions, use technology more
                effectively, grow with purpose and transform the way they
                operate.
              </p>

              <p>
                We see a recurring gap in how businesses approach change.
                Strategy can exist separately from execution. Technology can
                become a project instead of a business capability. Marketing
                can focus on activity without enough connection to commercial
                outcomes. Transformation can become a long-term ambition
                without a practical path to get there.
              </p>

              <p>
                Our thinking starts from a different place. A business
                challenge rarely belongs to only one discipline. A digital
                product may require strategy, product thinking, engineering,
                design and go-to-market planning. A growing company may need
                stronger technology foundations alongside better digital
                acquisition.
              </p>

              <p>
                That is why LKG &amp; Company brings strategy, technology,
                digital growth and transformation together — creating a more
                connected way of solving business problems without adding
                unnecessary complexity.
              </p>
            </div>

            {/* Direction / execution / growth / evolution */}
            <div className="relative my-7 grid gap-3 sm:grid-cols-2">
              {storyCards.map((card, index) => (
                <div
                  key={card.label}
                  className="group/card relative overflow-hidden rounded-2xl border border-border bg-card/70 p-4.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/45 hover:bg-card hover:shadow-[0_18px_45px_rgba(109,40,217,0.08)] motion-reduce:transition-none"
                >
                  {/* Moving card accent */}
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-primary via-[#9B8ACB] to-[#D4AF37] transition-all duration-500 group-hover/card:w-full"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#D4AF37]/[0.045] blur-2xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary transition-colors duration-300 group-hover/card:text-[#D4AF37]">
                        {card.label}
                      </span>

                      <span className="text-[10px] text-muted-foreground/50">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-foreground">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Final story paragraphs */}
            <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-7">
              <p>
                We are intentionally building LKG &amp; Company for the long
                term. That means focusing on strong thinking, practical
                execution and relationships built around real business needs
                rather than short-term activity for its own sake.
              </p>

              <p>
                We are also realistic about where we are today. LKG &amp;
                Company is a growing organization with a global ambition. Our
                approach is to earn trust through the quality of our thinking,
                the clarity of our communication and the work we deliver —
                not through exaggerated claims.
              </p>
            </div>

            {/* Closing principle */}
            <div className="relative mt-7 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.035] via-background to-[#D4AF37]/[0.045] p-5 sm:p-6">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-[#9B8ACB] to-[#D4AF37]"
              />

              <div className="relative pl-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    The LKG Principle
                  </span>
                </div>

                <p className="text-base font-medium leading-7 text-foreground sm:text-lg sm:leading-8">
                  We are not building LKG &amp; Company simply to deliver more
                  technology. We are building it to help businesses turn
                  effort into something that matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Local animation definitions */}
      <style jsx>{`
        @keyframes storyLine {
          0% {
            transform: translateX(-120px);
          }
          50% {
            transform: translateX(320px);
          }
          100% {
            transform: translateX(-120px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
