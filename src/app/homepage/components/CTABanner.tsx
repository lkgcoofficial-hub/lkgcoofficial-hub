'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CTABanner() {
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
      { threshold: 0.15 }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal-hidden relative overflow-hidden rounded-[2.5rem] bg-foreground px-10 py-16 md:py-20 text-center">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[80px] pointer-events-none translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white/70 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
              Ready to Transform?
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Let&apos;s build something{' '}
              <span className="text-accent">extraordinary</span>{' '}
              together.
            </h2>

            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Whether you need a new platform, a growth strategy, or a dedicated tech team — LKG &amp; Co. is ready to deliver.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-accent text-foreground font-bold text-base hover:bg-accent/90 hover:shadow-gold transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Free Consultation
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}