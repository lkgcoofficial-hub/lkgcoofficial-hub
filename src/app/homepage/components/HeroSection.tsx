'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '8+', label: 'Industries Served' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef?.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center hero-gradient overflow-hidden pt-20"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow */}
            <div className="reveal-hidden inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-slow" />
              IT &amp; Consulting Excellence
            </div>

            {/* Headline */}
            <h1 className="reveal-hidden stagger-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground">
              Transforming Ideas into{' '}
              <span className="text-gradient">Scalable Digital</span>{' '}
              Solutions
            </h1>

            {/* Subheading */}
            <p className="reveal-hidden stagger-2 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              LKG &amp; Co. delivers end-to-end IT, marketing, and consulting services designed to accelerate your business growth.
            </p>

            {/* CTAs */}
            <div className="reveal-hidden stagger-3 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center gap-2 group"
              >
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 py-4 rounded-full text-base font-semibold inline-flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Consultation
              </a>
            </div>

            {/* Stats row */}
            <div className="reveal-hidden stagger-4 flex flex-wrap gap-8 pt-4 border-t border-border">
              {stats?.map((stat) => (
                <div key={stat?.label}>
                  <div className="text-2xl font-extrabold text-foreground">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating visual card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="reveal-hidden stagger-2 relative w-full max-w-md">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 shadow-card animate-float">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Active Engagement</p>
                    <h3 className="text-xl font-bold text-foreground">Digital Transformation</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.798-1.442 2.798H4.24c-1.472 0-2.441-1.798-1.442-2.798L4.2 15.3" />
                    </svg>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Web Platform', pct: 92 },
                    { label: 'Cloud Migration', pct: 78 },
                    { label: 'SEO Strategy', pct: 85 },
                  ]?.map((item) => (
                    <div key={item?.label}>
                      <div className="flex justify-between text-xs font-medium mb-1">
                        <span className="text-foreground">{item?.label}</span>
                        <span className="text-primary">{item?.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${item?.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  3 projects on track · Updated today
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-gold border border-accent/20">
                <div className="text-xs font-bold text-accent uppercase tracking-widest">Big-4 Quality</div>
                <div className="text-sm font-bold text-foreground">Startup Speed</div>
              </div>

              {/* Bottom mini badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-soft">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['32', '44', '56']?.map((n) => (
                      <AppImage
                        key={n}
                        src={`https://i.pravatar.cc/40?img=${n}`}
                        alt={`Team member avatar`}
                        width={28}
                        height={28}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-foreground">50+ Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V24C1200 8 960 0 720 0S240 8 0 24v24z" fill="#FAFAF8" />
        </svg>
      </div>
    </section>
  );
}