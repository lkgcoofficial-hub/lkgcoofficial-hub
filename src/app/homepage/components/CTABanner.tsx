'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#19172b] py-24 sm:py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#7857c7]/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[-180px] h-[500px] w-[500px] rounded-full bg-[#c4a15c]/[0.06] blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div
          className={`relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 transition-all duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Decorative architecture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-45px] top-[-45px] h-44 w-44 rounded-full border border-[#c4a15c]/20"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-140px] left-[-80px] h-64 w-64 rounded-full border border-[#7857c7]/15"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#c4a15c]" />

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4a15c]">
                  Start a conversation
                </span>
              </div>

              <h2 className="mt-7 max-w-[900px] text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
                Ready to turn
                <span className="block text-[#b9a0df]">
                  effort into impact?
                </span>
              </h2>

              <p className="mt-7 max-w-[700px] text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
                Whether you are shaping a new direction, solving a technology
                challenge, or preparing for meaningful change, let&apos;s
                explore what comes next.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full bg-[#c4a15c] px-7 text-sm font-semibold text-[#19172b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d0b16f] focus:outline-none focus:ring-2 focus:ring-[#c4a15c] focus:ring-offset-2 focus:ring-offset-[#19172b]"
              >
                Start a Conversation

                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#19172b]/10 transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-white/15 px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Explore Capabilities

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom positioning line */}
          <div className="relative mt-14 border-t border-white/[0.08] pt-6 sm:mt-16">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/30">
                Strategy · Technology · Transformation
              </p>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c4a15c]" />
                <span className="h-px w-8 bg-white/15" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#7857c7]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
