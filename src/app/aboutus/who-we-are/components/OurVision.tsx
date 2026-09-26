'use client';

import React, { useEffect, useState } from 'react';

const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Business and technology direction that helps clarify priorities, opportunities, and the next practical move.',
    items: [
      'Business & Growth Strategy',
      'Technology Strategy',
      'Digital Transformation',
      'AI & Technology Advisory',
    ],
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'Digital products and technology solutions designed around real business requirements and users.',
    items: [
      'Web & Software Development',
      'Mobile Applications',
      'AI & Automation',
      'Cloud & Enterprise Technology',
    ],
  },
  {
    number: '03',
    title: 'Growth',
    description:
      'Digital channels and marketing capabilities that help businesses become discoverable, reach customers, and build demand.',
    items: [
      'SEO & Technical SEO',
      'Performance Marketing',
      'Social Media',
      'Content & Creative',
    ],
  },
  {
    number: '04',
    title: 'Transformation',
    description:
      'Practical technology-led change that improves processes, connects systems, and prepares businesses for what comes next.',
    items: [
      'Process Improvement',
      'Workflow Automation',
      'Systems Integration',
      'Technology Modernization',
    ],
  },
];

export default function OurVision() {
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
      id="what-we-do"
      className="relative overflow-hidden border-y border-border/60 bg-background py-14 md:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(124, 58, 237, 0.10), transparent 28%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What We Do
          </span>

          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Capabilities built around real business needs.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            LKG &amp; Company brings strategy, technology, digital growth, and
            transformation capabilities together so businesses can move from
            a challenge or opportunity to a practical path forward.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group bg-background p-6 transition-all duration-500 hover:bg-muted/30 md:p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-xs font-medium tracking-[0.18em] text-primary/80">
                  {capability.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-primary/70 transition-transform duration-500 group-hover:scale-150" />
              </div>

              <h3 className="mt-7 text-2xl font-semibold text-foreground">
                {capability.title}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                {capability.description}
              </p>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {capability.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
