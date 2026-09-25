'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const capabilities = [
  {
    number: '01',
    title: 'Strategy',
    label: 'Direction & clarity',
    description:
      'Turn business challenges and opportunities into focused priorities, practical roadmaps, and clear paths forward.',
    items: ['Business Strategy', 'Digital Strategy', 'Product & Growth'],
    accent: 'purple',
  },
  {
    number: '02',
    title: 'Technology',
    label: 'Ideas into reality',
    description:
      'Design and build digital experiences, products, and technology foundations that support real business needs.',
    items: [
      'Digital Products',
      'Web & Software',
      'Technology Solutions',
    ],
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Transformation',
    label: 'Change with purpose',
    description:
      'Connect people, processes, and technology to help organizations evolve and create lasting business value.',
    items: [
      'Digital Transformation',
      'Process Improvement',
      'Technology Modernization',
    ],
    accent: 'gold',
  },
];

export default function ServicesSnapshot() {
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
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf9ff] py-24 sm:py-28 lg:py-36"
    >
      {/* Background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 top-20 h-[500px] w-[500px] rounded-full bg-[#7857c7]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 bottom-0 h-[500px] w-[500px] rounded-full bg-[#c4a15c]/[0.04] blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Section heading */}
        <div
          className={`grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-24 transition-all duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a15c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7655bf]">
                What we do
              </span>
            </div>

            <h2 className="max-w-[600px] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#19172b]">
              Capabilities built
              <span className="block text-[#7857c7]">
                around outcomes.
              </span>
            </h2>
          </div>

          <div className="max-w-[700px] lg:pb-1">
            <p className="text-lg leading-8 text-[#625e70] sm:text-xl sm:leading-9">
              From defining what matters to building what&apos;s next, our
              capabilities connect business thinking with practical technology
              and meaningful transformation.
            </p>

            <Link
              href="/services"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#7050bb]"
            >
              Explore all capabilities

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#7857c7]/20 bg-white transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#7857c7]/40">
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

        {/* Capability architecture */}
        <div
          className={`mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3 transition-all delay-150 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {capabilities.map((capability) => {
            const isGold = capability.accent === 'gold';
            const isViolet = capability.accent === 'violet';

            return (
              <article
                key={capability.number}
                className="group relative overflow-hidden rounded-[28px] border border-[#19172b]/[0.07] bg-white p-7 shadow-[0_15px_50px_rgba(40,32,65,0.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(40,32,65,0.08)] sm:p-8 lg:p-9"
              >
                {/* Top accent */}
                <div
                  className={`absolute left-0 right-0 top-0 h-[2px] ${
                    isGold
                      ? 'bg-[#c4a15c]/70'
                      : isViolet
                        ? 'bg-[#8c68cf]/70'
                        : 'bg-[#7857c7]/70'
                  }`}
                />

                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] text-[#aaa5b4]">
                    {capability.number}
                  </span>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ${
                      isGold
                        ? 'bg-[#c4a15c]/10'
                        : isViolet
                          ? 'bg-[#8c68cf]/10'
                          : 'bg-[#7857c7]/10'
                    }`}
                  >
                    {capability.number === '01' && (
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 19V9M12 19V5M19 19V12"
                          stroke="#7857c7"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {capability.number === '02' && (
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M8.5 8.5L5 12L8.5 15.5M15.5 8.5L19 12L15.5 15.5M13.5 5L10.5 19"
                          stroke="#8c68cf"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}

                    {capability.number === '03' && (
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 12H19M19 12L13.5 6.5M19 12L13.5 17.5"
                          stroke="#b28d4f"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div className="mt-10">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      isGold
                        ? 'text-[#aa8548]'
                        : isViolet
                          ? 'text-[#795cb1]'
                          : 'text-[#7050bb]'
                    }`}
                  >
                    {capability.label}
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#211e34] sm:text-4xl">
                    {capability.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-5 min-h-[112px] text-sm leading-7 text-[#777285] sm:text-[15px]">
                  {capability.description}
                </p>

                {/* Capabilities list */}
                <div className="mt-7 border-t border-[#19172b]/[0.07] pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aaa5b4]">
                    Focus areas
                  </p>

                  <div className="mt-4 space-y-3">
                    {capability.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-[#504b5f]"
                      >
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            isGold
                              ? 'bg-[#c4a15c]'
                              : isViolet
                                ? 'bg-[#8c68cf]'
                                : 'bg-[#7857c7]'
                          }`}
                        />

                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom line */}
                <div className="mt-8 flex items-center gap-2">
                  <span
                    className={`h-px w-8 transition-all duration-500 group-hover:w-14 ${
                      isGold
                        ? 'bg-[#c4a15c]/60'
                        : isViolet
                          ? 'bg-[#8c68cf]/60'
                          : 'bg-[#7857c7]/60'
                    }`}
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#aaa5b4]">
                    LKG &amp; Company
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-14 flex flex-col gap-6 border-t border-[#19172b]/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between transition-all delay-300 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="max-w-[700px] text-sm leading-6 text-[#817c8d]">
            The right solution is rarely just one thing. We connect strategic
            thinking, technology, and transformation around the outcome that
            matters.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#7857c7]" />
            <span className="h-2 w-2 rounded-full bg-[#8c68cf]" />
            <span className="h-2 w-2 rounded-full bg-[#c4a15c]" />
          </div>
        </div>
      </div>
    </section>
  );
}
