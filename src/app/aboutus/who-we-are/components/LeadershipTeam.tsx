'use client';

import React, { useRef, useState } from 'react';

const leadership = [
  {
    name: 'Ayush Kumar Singh',
    role: 'Founder & CEO',
    education: 'B.Tech CSE Graduate',
    initials: 'AS',
    type: 'Leadership',
    bio: 'Leads the direction of LKG & Company with a focus on connecting business thinking, technology and long-term transformation.',
    linkedin: 'https://www.linkedin.com/in/ayush-singh-as7/',
  },
  {
    name: 'Shyam Kumar Gupta',
    role: 'Technology Advisor',
    education: 'B.Tech CSE-AI',
    initials: 'SG',
    type: 'Advisory',
    bio: 'Provides technology-focused perspective across AI, software and emerging technology opportunities as LKG & Company continues to grow.',
    linkedin: 'https://www.linkedin.com/in/shyam-kumar-gupta-59267a249/',
  },
  {
    name: 'Raj Jaiswal',
    role: 'Marketing & Finance Advisor',
    education: 'MBA, IIT Roorkee',
    initials: 'RJ',
    type: 'Advisory',
    bio: 'Brings an advisory perspective across marketing, business thinking and financial considerations that support sustainable growth.',
    linkedin: 'https://www.linkedin.com/in/rajjaiswal19/',
  },
  {
    name: 'Ayush Pandey',
    role: 'Operations & Development Advisor',
    education: 'B.Tech CSE',
    initials: 'AP',
    type: 'Advisory',
    bio: 'Contributes an advisory perspective across operations, development and the practical execution of technology initiatives.',
    linkedin: 'https://www.linkedin.com/in/ayush-pandey-b33a78241/',
  },
];

export default function LeadershipTeam() {
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
      id="leadership"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="group relative overflow-hidden border-t border-border bg-card/[0.3]"
    >
      {/* Cursor-following light */}
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
        className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/[0.03] blur-3xl"
      />

      <div className="container relative mx-auto px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Header */}
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-px w-7 bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Leadership &amp; Advisory
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[3.15rem]">
              People shaping
              <span className="text-primary"> what comes next.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-1">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              LKG &amp; Company is being built around a combination of
              leadership, technology thinking, business perspective and
              operational insight.
            </p>

            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              Our leadership and advisory network brings different perspectives
              to the problems we are solving and the organization we are
              building.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((person) => (
            <article
              key={person.name}
              className="group/card relative overflow-hidden rounded-3xl border border-border bg-background transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06]"
            >
              {/* Photo / placeholder */}
              <div className="relative aspect-[4/4.2] overflow-hidden border-b border-border bg-gradient-to-br from-primary/[0.08] via-background to-accent/[0.06]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.12),transparent_42%)]" />

                <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-card shadow-xl transition-transform duration-500 group-hover/card:scale-105 sm:h-36 sm:w-36">
                  <span className="text-4xl font-semibold tracking-[-0.04em] text-primary">
                    {person.initials}
                  </span>
                </div>

                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-sm">
                  {person.type}
                </span>

                <div className="absolute bottom-4 right-4">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${person.name} on LinkedIn`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/90 text-xs font-bold text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                  >
                    in
                  </a>
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {person.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  {person.role}
                </p>

                <p className="mt-3 text-xs font-medium text-muted-foreground">
                  {person.education}
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Important positioning note */}
        <div className="mt-8 rounded-2xl border border-border bg-background/70 px-5 py-4 sm:px-6">
          <div className="flex gap-3">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />

            <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
              LKG &amp; Company&apos;s advisory roles represent perspectives
              that contribute to the company&apos;s direction and development.
              They are presented separately from the company&apos;s core
              leadership and should not be interpreted as full-time employment
              unless otherwise stated.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-9 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            As LKG &amp; Company grows, we intend to build a broader network of
            people who bring strong thinking, practical expertise and a shared
            commitment to meaningful business outcomes.
          </p>

          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Strategy · Technology · Impact
          </span>
        </div>
      </div>
    </section>
  );
}
