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
      id="leadership"
      className="relative overflow-hidden bg-background py-14 md:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(212, 175, 55, 0.09), transparent 27%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our People
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The people behind LKG &amp; Company.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              LKG &amp; Company is being built with perspectives spanning
              technology, business, marketing, finance, operations, and
              development.
            </p>
          </div>

          <div className="max-w-xs text-sm leading-6 text-muted-foreground">
            Leadership and advisory perspectives come together to support the
            company&apos;s direction and development.
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {people.map((person) => (
            <article
              key={person.name}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:p-7"
            >
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-150" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-sm font-semibold text-primary">
                  {person.initials}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {person.name}
                    </h3>

                    <span className="rounded-full border border-border/70 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {person.type}
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {person.role}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {person.education}
                  </p>
                </div>
              </div>

              <p className="relative mt-5 text-sm leading-6 text-muted-foreground">
                {person.bio}
              </p>

              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded border border-border text-xs font-bold">
                  in
                </span>
                LinkedIn
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          Advisory roles represent professional perspectives contributed to the
          company and should not be interpreted as full-time employment unless
          specifically stated.
        </p>
      </div>
    </section>
  );
}
