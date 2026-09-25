'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description:
      'Start with a complimentary 30-minute consultation to understand your business context, goals, challenges and what you are trying to achieve.',
    points: [
      'Business & project requirements',
      'Current challenges and opportunities',
      'Goals, priorities and expectations',
    ],
  },
  {
    number: '02',
    title: 'Proposal & Scoping',
    description:
      'Once requirements are understood, we aim to share a structured proposal within 48 hours, covering the recommended approach and commercial model.',
    points: [
      'Scope & deliverables',
      'Approach & timeline',
      'Team or engagement model',
    ],
  },
  {
    number: '03',
    title: 'Execution & Delivery',
    description:
      'Our team moves from planning into execution with clear ownership, regular communication and delivery aligned to the agreed scope.',
    points: [
      'Dedicated execution team',
      'Milestone-based delivery',
      'Regular progress communication',
    ],
  },
  {
    number: '04',
    title: 'Launch & Ongoing Support',
    description:
      'After delivery, we help ensure a smooth transition. Eligible projects include a 30-day post-launch support window, with ongoing support available based on the engagement.',
    points: [
      'Launch & handover support',
      'Post-launch issue resolution',
      'Ongoing support & optimization',
    ],
  },
];

export default function ServicesProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sectionRef.current
      ?.querySelectorAll('.reveal-hidden')
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-card/30 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="reveal-hidden mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            How We Work
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            From first conversation to{' '}
            <span className="text-gradient">meaningful delivery.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A straightforward engagement process designed to create clarity
            early, keep execution focused and make the path from idea to
            outcome easier to navigate.
          </p>
        </div>

        {/* Process */}
        <div className="relative">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-gradient-to-r from-primary/10 via-primary/30 to-accent/20 lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`reveal-hidden stagger-${Math.min(
                  index + 1,
                  6
                )} group relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-hover`}
              >
                {/* Step number */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-sm font-extrabold text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                <div className="my-6 h-px bg-border" />

                <ul className="space-y-3">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute left-7 right-7 top-0 h-px overflow-hidden bg-border">
                  <div className="h-full w-1/4 bg-gradient-to-r from-primary to-accent transition-all duration-700 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Engagement models */}
        <div className="reveal-hidden mt-10 rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/5 via-card to-accent/5 p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Engagement Models
              </span>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground">
                Work with us in the way your business needs.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Whether you need strategic guidance, a defined project, ongoing
                digital support or additional technology talent, we can shape
                the engagement around the requirement.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
              {[
                'Advisory',
                'Project-based',
                'Dedicated Teams',
                'Retainer',
                'Technology Staffing',
              ].map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs font-semibold text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal-hidden mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Have a requirement in mind?
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-4 inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold"
          >
            Start a Conversation
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
