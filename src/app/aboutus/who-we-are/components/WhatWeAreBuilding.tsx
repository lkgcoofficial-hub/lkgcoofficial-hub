'use client';

import React, { useEffect, useState } from 'react';

const focusAreas = [
  'Strategy & Advisory',
  'Technology & Product',
  'Digital Growth',
  'Enterprise & Transformation',
];

export default function WhatWeAreBuilding() {
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
      id="what-we-are-building"
      className="relative overflow-hidden border-t border-border/60 bg-background py-14 md:py-18"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(212, 175, 55, 0.09), transparent 28%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              What We&apos;re Building
            </span>

            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Building for the opportunities ahead.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              LKG &amp; Company is being built as a connected strategy and
              technology firm that can support businesses across important
              stages of growth, change, and digital development.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              Our focus is to keep expanding practical capabilities while
              building relationships, expertise, and delivery experience that
              create lasting value for the businesses we work with.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <div
                key={area}
                className="group rounded-2xl border border-border/70 bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_35px_rgba(0,0,0,0.07)]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-primary">
                    0{index + 1}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-transform duration-500 group-hover:scale-150" />
                </div>

                <h3 className="mt-7 text-lg font-semibold text-foreground">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
