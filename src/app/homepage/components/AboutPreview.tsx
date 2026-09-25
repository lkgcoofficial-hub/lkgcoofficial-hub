'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'Clarity before execution. We turn business challenges, opportunities, and ambitions into focused direction and practical priorities.',
  },
  {
    number: '02',
    title: 'Technology',
    description:
      'We use practical technology to turn ideas into digital products, platforms, and systems built around real business needs.',
  },
  {
    number: '03',
    title: 'Transformation',
    description:
      'We help businesses evolve by connecting people, processes, and technology around meaningful and sustainable change.',
  },
];

export default function AboutPreview() {
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
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-[#7857c7]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 h-[520px] w-[520px] rounded-full bg-[#c4a15c]/[0.035] blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* INTRO */}
        <div
          className={`grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-24 transition-all duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a15c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7655bf]">
                About LKG &amp; Company
              </span>
            </div>

            <h2 className="max-w-[560px] text-[clamp(2.8rem,5vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#19172b]">
              Built around
              <span className="block text-[#7857c7]">what matters.</span>
            </h2>
          </div>

          <div className="max-w-[720px] lg:pb-1">
            <p className="text-xl leading-8 tracking-[-0.015em] text-[#4f4b60] sm:text-2xl sm:leading-9">
              LKG &amp; Company brings{' '}
              <span className="font-medium text-[#252138]">
                strategy, technology, and transformation
              </span>{' '}
              together to help businesses turn ambitious ideas and complex
              challenges into meaningful outcomes.
            </p>

            <p className="mt-6 max-w-[650px] text-base leading-7 text-[#777285]">
              We believe technology creates the most value when it is connected
              to a clear purpose. Our approach starts with understanding what
              matters, then turning that understanding into practical action.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#7050bb]"
            >
              Explore what we do

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#7857c7]/20 bg-[#7857c7]/[0.04] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#7857c7]/40 group-hover:bg-[#7857c7]/[0.08]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* PILLARS */}
        <div
          className={`mt-20 border-y border-[#19172b]/[0.08] lg:mt-28 transition-all delay-150 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.number}
                className={`group relative px-1 py-10 sm:px-5 lg:px-8 lg:py-12 ${
                  index !== pillars.length - 1
                    ? 'border-b border-[#19172b]/[0.08] md:border-b-0 md:border-r'
                    : ''
                }`}
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#aaa5b4]">
                    {pillar.number}
                  </span>

                  <span className="h-px w-8 bg-[#c4a15c]/50 transition-all duration-500 group-hover:w-12" />
                </div>

                {/* Title */}
                <h3 className="mt-9 text-2xl font-semibold tracking-[-0.035em] text-[#211e34] sm:text-3xl">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[360px] text-sm leading-7 text-[#777285] sm:text-[15px]">
                  {pillar.description}
                </p>

                {/* Decorative mark */}
                <div className="mt-9 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 1
                        ? 'bg-[#8c68cf]'
                        : index === 2
                          ? 'bg-[#c4a15c]'
                          : 'bg-[#7857c7]'
                    }`}
                  />

                  <span className="h-px w-10 bg-[#19172b]/10 transition-all duration-500 group-hover:w-16" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PHILOSOPHY */}
        <div
          className={`mt-20 grid gap-10 lg:mt-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 transition-all delay-300 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div className="relative aspect-square overflow-hidden rounded-[32px] bg-[#19172b] p-7 sm:p-9">
              {/* Fixed decorative rings */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#c4a15c]/20" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#7857c7]/20" />

              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

              {/* Center */}
              <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.045] text-center backdrop-blur-sm sm:h-44 sm:w-44">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  Our focus
                </span>

                <span className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                  Impact
                </span>
              </div>

              {/* Orbit labels */}
              <div className="absolute left-[9%] top-[28%] rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                <span className="text-[11px] font-medium text-white/65">
                  Purpose
                </span>
              </div>

              <div className="absolute right-[8%] top-[22%] rounded-full border border-[#c4a15c]/20 bg-[#c4a15c]/[0.06] px-4 py-2 backdrop-blur-sm">
                <span className="text-[11px] font-medium text-[#d7bd8c]">
                  Direction
                </span>
              </div>

              <div className="absolute bottom-[20%] left-[13%] rounded-full border border-[#7857c7]/20 bg-[#7857c7]/[0.08] px-4 py-2 backdrop-blur-sm">
                <span className="text-[11px] font-medium text-[#c5b4e8]">
                  Action
                </span>
              </div>

              <div className="absolute bottom-[14%] right-[10%] rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                <span className="text-[11px] font-medium text-white/65">
                  Outcome
                </span>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a15c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7655bf]">
                How we think
              </span>
            </div>

            <h3 className="max-w-[700px] text-[clamp(2.3rem,4vw,4.2rem)] font-semibold leading-[1] tracking-[-0.05em] text-[#19172b]">
              Technology is the means.
              <span className="block text-[#7857c7]">
                Impact is the point.
              </span>
            </h3>

            <p className="mt-7 max-w-[680px] text-base leading-8 text-[#6d687a] sm:text-lg">
              We do not believe in technology for technology&apos;s sake.
              Every initiative should connect back to a business objective,
              solve a meaningful problem, or create an opportunity worth
              pursuing.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#19172b]/[0.07] bg-[#faf9fc] p-5">
                <p className="text-sm font-semibold text-[#242137]">
                  Purpose first
                </p>

                <p className="mt-2 text-sm leading-6 text-[#817c8d]">
                  Start with the problem and the outcome, not the technology.
                </p>
              </div>

              <div className="rounded-2xl border border-[#19172b]/[0.07] bg-[#faf9fc] p-5">
                <p className="text-sm font-semibold text-[#242137]">
                  Practical by design
                </p>

                <p className="mt-2 text-sm leading-6 text-[#817c8d]">
                  Build solutions that can create value in the real world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
