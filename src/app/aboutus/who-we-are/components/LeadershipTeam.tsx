'use client';

import React, { useEffect, useState } from 'react';

const people = [
  {
    initials: 'AS',
    name: 'Ayush Kumar Singh',
    role: 'Founder & CEO',
    type: 'Leadership',
    education: 'B.Tech CSE Graduate',
    bio: 'Leads the direction of LKG & Company, with a focus on building a business that brings strategy, technology, growth, and transformation together.',
    linkedin: 'https://www.linkedin.com/in/ayush-singh-as7/',
  },
  {
    initials: 'SG',
    name: 'Shyam Kumar Gupta',
    role: 'Technology Advisor',
    type: 'Advisory',
    education: 'B.Tech CSE-AI',
    bio: 'Provides technology and AI-focused perspective across technical direction, emerging technologies, and practical digital solutions.',
    linkedin: 'https://www.linkedin.com/in/shyam-kumar-gupta-59267a249/',
  },
  {
    initials: 'RJ',
    name: 'Raj Jaiswal',
    role: 'Marketing & Finance Advisor',
    type: 'Advisory',
    education: 'MBA, IIT Roorkee',
    bio: 'Contributes perspectives across marketing, business thinking, and financial considerations that support sustainable decision-making.',
    linkedin: 'https://www.linkedin.com/in/rajjaiswal19/',
  },
  {
    initials: 'AP',
    name: 'Ayush Pandey',
    role: 'Operations & Development Advisor',
    type: 'Advisory',
    education: 'B.Tech CSE',
    bio: 'Contributes perspectives across operations and development, helping connect execution considerations with technology delivery.',
    linkedin: 'https://www.linkedin.com/in/ayush-pandey-b33a78241/',
  },
];

export default function LeadershipTeam() {
  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  });

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
      id="leadership"
      className="group relative overflow-hidden border-t border-border bg-background"
    >
      {/* Cursor-following gold + purple light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[left,top] duration-300 ease-out motion-reduce:transition-none"
        style={{
          left: `${cursor.x}%`,
          top: `${cursor.y}%`,
          width: '340px',
          height: '340px',
          background:
            'radial-gradient(circle, rgba(212,175,55,0.105) 0%, rgba(109,40,217,0.045) 42%, transparent 72%)',
        }}
      />

      {/* Ambient brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[380px] w-[380px] rounded-full bg-primary/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Section heading */}
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-8 bg-gradient-to-r from-[#D4AF37] to-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                Our People
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
              The people behind LKG &amp; Company.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              LKG &amp; Company is being built with perspectives spanning
              technology, business, marketing, finance, operations, and
              development.
            </p>
          </div>

          <div className="max-w-sm border-l border-primary/20 pl-4 text-sm leading-6 text-muted-foreground">
            Leadership and advisory perspectives come together to support the
            company&apos;s direction and development.
          </div>
        </div>

        {/* People */}
        <div className="grid gap-4 md:grid-cols-2">
          {people.map((person, index) => (
            <article
              key={person.name}
              className="group/card relative overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#D4AF37]/35 hover:bg-card/70 hover:shadow-[0_20px_55px_rgba(109,40,217,0.09)] motion-reduce:transition-none sm:p-6"
            >
              {/* Animated top accent */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-20 bg-gradient-to-r from-primary via-[#9B8ACB] to-[#D4AF37] transition-all duration-500 group-hover/card:w-full"
              />

              {/* Card ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/[0.045] blur-3xl opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
              />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
                {/* Photo / portrait */}
                <div className="group/photo relative mx-auto shrink-0 sm:mx-0">
                  {/* Outer moving gradient ring */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-[5px] rounded-full bg-[conic-gradient(from_0deg,#6D28D9,#9B8ACB,#D4AF37,#B8B8C2,#6D28D9)] opacity-80 blur-[0.2px] motion-safe:animate-[leadershipRing_9s_linear_infinite] motion-reduce:animate-none group-hover/photo:opacity-100 group-hover/photo:motion-safe:animate-[leadershipRing_3.5s_linear_infinite]"
                  />

                  {/* Soft outer glow */}
                  <div
                    aria-hidden="true"
                    className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),rgba(109,40,217,0.06),transparent_70%)] opacity-50 blur-md transition-all duration-500 group-hover/photo:scale-110 group-hover/photo:opacity-100"
                  />

                  {/* Photo frame */}
                  <div className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border border-white/70 bg-background p-[3px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover/photo:scale-[1.055] motion-reduce:transition-none sm:h-[112px] sm:w-[112px] lg:h-[120px] lg:w-[120px]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary/[0.10] via-background to-[#D4AF37]/[0.12]">
                      <span className="text-xl font-semibold tracking-tight text-primary transition-colors duration-500 group-hover/photo:text-[#D4AF37] sm:text-2xl">
                        {person.initials}
                      </span>
                    </div>
                  </div>

                  {/* Gold orbit point */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-1 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#D4AF37] shadow-[0_0_16px_rgba(212,175,55,0.65)] opacity-80 transition-all duration-500 group-hover/photo:scale-125 group-hover/photo:opacity-100"
                  />
                </div>

                {/* Person information */}
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                      {person.name}
                    </h3>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 ${
                        person.type === 'Leadership'
                          ? 'border-primary/20 bg-primary/[0.05] text-primary group-hover/card:border-[#D4AF37]/30 group-hover/card:text-[#D4AF37]'
                          : 'border-border/70 bg-background text-muted-foreground group-hover/card:border-[#D4AF37]/30 group-hover/card:text-[#D4AF37]'
                      }`}
                    >
                      {person.type}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm font-medium text-primary transition-colors duration-300 group-hover/card:text-[#D4AF37]">
                    {person.role}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {person.education}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {person.bio}
                  </p>

                  {/* LinkedIn CTA */}
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${person.name} on LinkedIn`}
                    className="group/link relative mt-4 inline-flex h-10 items-center gap-2 overflow-hidden rounded-xl border border-border/80 bg-background px-4 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/55 hover:text-[#D4AF37] hover:shadow-[0_10px_28px_rgba(212,175,55,0.10)] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30"
                  >
                    {/* Gold sweep */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 -left-16 w-10 -skew-x-12 bg-[#D4AF37]/15 transition-transform duration-500 group-hover/link:translate-x-[180px]"
                    />

                    <span className="relative flex h-6 w-6 items-center justify-center rounded-md border border-border bg-card text-[11px] font-bold text-primary transition-all duration-300 group-hover/link:border-[#D4AF37]/40 group-hover/link:text-[#D4AF37]">
                      in
                    </span>

                    <span className="relative">LinkedIn</span>

                    <span className="relative text-xs transition-transform duration-300 group-hover/link:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              {/* Bottom index */}
              <div className="relative mt-5 flex items-center justify-between border-t border-border/60 pt-3">
                <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground/60">
                  LKG &amp; Company
                </span>

                <span className="text-[10px] font-medium text-muted-foreground/50">
                  0{index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Advisory note */}
        <p className="mt-5 max-w-4xl text-[11px] leading-5 text-muted-foreground">
          Advisory roles represent professional perspectives contributed to the
          company and should not be interpreted as full-time employment unless
          specifically stated.
        </p>
      </div>

      <style jsx>{`
        @keyframes leadershipRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
