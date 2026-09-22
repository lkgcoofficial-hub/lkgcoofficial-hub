'use client';

import React, { useEffect, useRef } from 'react';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'End-to-End Solutions',
    desc: 'From strategy to deployment and beyond — we handle every layer of your digital transformation without handoff gaps.',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Cost-Effective Execution',
    desc: 'Enterprise-grade quality at a fraction of Big-4 rates. We optimise every sprint to deliver maximum ROI.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: 'Scalable Architecture',
    desc: 'Systems designed to grow with you — from 100 users to 10 million, built on proven cloud-native patterns.',
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Dedicated Expert Support',
    desc: 'A named team of specialists assigned to your account — not a ticket queue. Direct access, always.',
    highlight: true,
  },
];

export default function WhyChooseUs() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal-hidden">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Why LKG &amp; Co.</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              The{' '}
              <span className="text-gradient">competitive edge</span>{' '}
              you&apos;ve been looking for.
            </h2>
          </div>
          <p className="reveal-hidden stagger-1 text-lg text-muted-foreground mt-4 leading-relaxed">
            We combine enterprise-grade methodology with the agility of a boutique firm.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        {/* Row 1: [col-1+2: End-to-End cs-2] [col-3: Cost-Effective cs-1] */}
        {/* Row 2: [col-1: Scalable cs-1] [col-2+3: Dedicated Support cs-2] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 — spans 2 cols */}
          <div className="reveal-hidden md:col-span-2 bg-primary rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-white mb-6">
                {reasons?.[0]?.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{reasons?.[0]?.title}</h3>
              <p className="text-white/75 leading-relaxed text-base">{reasons?.[0]?.desc}</p>
              <div className="mt-8 flex items-center gap-2">
                <div className="h-0.5 w-12 bg-accent" />
                <span className="text-accent text-xs font-bold uppercase tracking-widest">Our Commitment</span>
              </div>
            </div>
          </div>

          {/* Card 2 — 1 col */}
          <div className="reveal-hidden stagger-1 bg-card rounded-3xl p-8 border border-border shadow-soft group hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              {reasons?.[1]?.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{reasons?.[1]?.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{reasons?.[1]?.desc}</p>
          </div>

          {/* Card 3 — 1 col */}
          <div className="reveal-hidden stagger-2 bg-card rounded-3xl p-8 border border-border shadow-soft group hover:border-primary/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              {reasons?.[2]?.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{reasons?.[2]?.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{reasons?.[2]?.desc}</p>
          </div>

          {/* Card 4 — spans 2 cols */}
          <div className="reveal-hidden stagger-3 md:col-span-2 bg-muted rounded-3xl p-10 border border-border relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {reasons?.[3]?.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{reasons?.[3]?.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-base max-w-lg">{reasons?.[3]?.desc}</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {['< 4hr Response', 'Named POC', '24/7 Monitoring']?.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}