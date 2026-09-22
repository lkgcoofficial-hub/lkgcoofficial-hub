'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We begin with a focused 30-minute consultation to understand your goals, constraints, and success criteria.',
  },
  {
    step: '02',
    title: 'Proposal & Scoping',
    desc: 'A detailed proposal is delivered within 48 hours — covering scope, timeline, team composition, and fixed pricing.',
  },
  {
    step: '03',
    title: 'Execution & Delivery',
    desc: 'Your dedicated team executes in structured sprints with weekly updates and a shared project dashboard.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc: 'Post-launch, we provide a 30-day support window and optional retainer for ongoing optimisation.',
  },
];

export default function ServicesProcess() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.1 }
    );
    ref?.current?.querySelectorAll('.reveal-hidden')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal-hidden">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              From brief to{' '}
              <span className="text-gradient">launch in 4 steps.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps?.map((step, i) => (
            <div
              key={step?.step}
              className={`reveal-hidden stagger-${i + 1} bg-card rounded-3xl p-8 border border-border shadow-soft relative overflow-hidden group hover:border-primary/30 transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 text-[80px] font-extrabold text-primary/4 leading-none select-none pointer-events-none translate-x-4 -translate-y-2">
                {step?.step}
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-sm font-extrabold">{step?.step}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{step?.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step?.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}