'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function InsightsHero() {
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
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      {/* Cursor-following ambient light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(
            circle at ${cursor.x}% ${cursor.y}%,
            rgba(124, 58, 237, 0.10),
            transparent 30%
          )`,
        }}
      />

      {/* Purple ambient glow */}
      <div
        className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124, 58, 237, 0.28), transparent 70%)',
        }}
      />

      {/* Gold ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.20), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Content */}
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              LKG &amp; Company Insights
            </span>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              Ideas for building
              <span className="block bg-gradient-to-r from-[#7C3AED] via-[#8E7CC3] to-[#D4AF37] bg-clip-text text-transparent">
                what comes next.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              Explore practical perspectives on technology, AI, digital
              products, transformation, and business growth — shaped around
              the challenges businesses are solving today.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="#articles"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore Insights
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
              >
                Talk to LKG &amp; Company
              </Link>
            </div>
          </div>

          {/* Insight Categories Visual */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="relative rounded-3xl border border-border/70 bg-background/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-sm">

              {/* Top line */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Explore perspectives
                </span>

                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                  LKG
                </span>
              </div>

              <div className="space-y-3">
                {[
                  {
                    number: '01',
                    title: 'Artificial Intelligence',
                    description: 'AI, automation & emerging technology',
                  },
                  {
                    number: '02',
                    title: 'Digital Growth',
                    description: 'SEO, marketing & business growth',
                  },
                  {
                    number: '03',
                    title: 'Technology',
                    description: 'Web, software, cloud & digital products',
                  },
                  {
                    number: '04',
                    title: 'Transformation',
                    description: 'Strategy, systems & operational change',
                  },
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className="group rounded-2xl border border-border/60 bg-background p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 text-xs font-semibold tracking-[0.14em] ${
                          index % 2 === 0
                            ? 'text-primary'
                            : 'text-[#B28B24]'
                        }`}
                      >
                        {item.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-semibold text-foreground">
                          {item.title}
                        </h2>

                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                        →
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-5 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
              </div>
            </div>
          </div>
        </div>

        {/* Explore navigation */}
        <div className="mt-12 border-t border-border/60 pt-6">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <Link
              href="#articles"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Articles
            </Link>

            <Link
              href="#case-studies"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Case Studies
            </Link>

            <Link
              href="#guides"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Guides
            </Link>

            <Link
              href="#trends"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Trends
            </Link>

            <span className="hidden h-5 w-px bg-border sm:block" />

            <Link
              href="#artificial-intelligence"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Artificial Intelligence
            </Link>

            <Link
              href="#web-development"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Web Development
            </Link>

            <Link
              href="#digital-transformation"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Digital Transformation
            </Link>

            <Link
              href="#business-growth"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Business Growth
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
