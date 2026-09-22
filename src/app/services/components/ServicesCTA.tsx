'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );
    ref?.current?.querySelectorAll('.reveal-hidden')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="reveal-hidden">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6">
            Not sure which service{' '}
            <span className="text-gradient">you need?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Book a free 30-minute advisory call. We&apos;ll map your needs to the right solution — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Free Advisory Call
            </a>
            <Link
              href="/contact"
              className="btn-outline px-8 py-4 rounded-full text-base font-semibold"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}