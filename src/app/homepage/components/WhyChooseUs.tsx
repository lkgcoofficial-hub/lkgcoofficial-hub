'use client';

import { useEffect, useRef, useState } from 'react';

const principles = [
  {
    number: '01',
    title: 'Business-first thinking',
    description:
      'We begin with the business problem, opportunity, and desired outcome — then determine where technology can create meaningful value.',
  },
  {
    number: '02',
    title: 'Practical execution',
    description:
      'Good ideas only matter when they can be put into action. We focus on solutions that are purposeful, usable, and built for the real world.',
  },
  {
    number: '03',
    title: 'Connected capabilities',
    description:
      'Strategy, technology, and transformation work better when they move together. We connect the pieces instead of treating them as isolated projects.',
  },
  {
    number: '04',
    title: 'Built for what’s next',
    description:
      'We think beyond the immediate requirement, creating foundations that can adapt as priorities, customers, and technology evolve.',
  },
];

export default function WhyChooseUs() {
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
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#7857c7]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-220px] left-[-200px] h-[500px] w-[500px] rounded-full bg-[#c4a15c]/[0.035] blur-3xl"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <div
          className={`grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24 transition-all duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#c4a15c]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7655bf]">
                Why LKG &amp; Company
              </span>
            </div>

            <h2 className="max-w-[620px] text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[#19172b]">
              How we think
              <span className="block text-[#7857c7]">
                shapes what we build.
              </span>
            </h2>
          </div>

          <p className="max-w-[700px] text-lg leading-8 text-[#625e70] sm:text-xl sm:leading-9 lg:pb-1">
            The difference is not simply in what gets delivered. It is in how
            the problem is understood, how decisions are made, and how every
            part connects back to the outcome.
          </p>
        </div>

        {/* Principles */}
        <div
          className={`mt-16 grid border-t border-[#19172b]/[0.08] lg:mt-24 lg:grid-cols-2 transition-all delay-150 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`group relative py-9 sm:py-10 lg:px-8 lg:py-12 ${
                index % 2 === 0
                  ? 'lg:border-r lg:border-[#19172b]/[0.08] lg:pr-12'
                  : 'lg:pl-12'
              } ${
                index < 2
                  ? 'border-b border-[#19172b]/[0.08]'
                  : ''
              }`}
            >
              <div className="flex items-start justify-between gap-8">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#aaa5b4]">
                  {principle.number}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7857c7]/15 bg-[#7857c7]/[0.045] transition-all duration-500 group-hover:border-[#7857c7]/30 group-hover:bg-[#7857c7]/[0.08]">
                  <span className="h-2 w-2 rounded-full bg-[#7857c7]" />
                </span>
              </div>

              <h3 className="mt-9 max-w-[500px] text-2xl font-semibold tracking-[-0.035em] text-[#211e34] sm:text-3xl">
                {principle.title}
              </h3>

              <p className="mt-4 max-w-[570px] text-sm leading-7 text-[#777285] sm:text-[15px]">
                {principle.description}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c4a15c]/60 transition-all duration-500 group-hover:w-14" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#aaa5b4]">
                  LKG approach
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className={`relative mt-20 overflow-hidden rounded-[30px] bg-[#19172b] px-7 py-12 sm:px-10 sm:py-14 lg:mt-28 lg:px-16 lg:py-16 transition-all delay-300 duration-1000 ease-out ${
            visible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Decorative rings */}
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 h-72 w-72 rounded-full border border-[#c4a15c]/15"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#7857c7]/15"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c4a15c]">
                The LKG perspective
              </p>

              <h3 className="mt-5 max-w-[850px] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1] tracking-[-0.05em] text-white">
                Less about doing more.
                <span className="block text-[#b9a0df]">
                  More about making it matter.
                </span>
              </h3>

              <p className="mt-6 max-w-[700px] text-sm leading-7 text-white/50 sm:text-base">
                We aim to connect effort with purpose — helping businesses
                make clearer decisions, build practical solutions, and create
                progress that can be carried forward.
              </p>
            </div>

            {/* Visual mark */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center self-start rounded-full border border-white/10 bg-white/[0.03] lg:self-center">
              <div className="absolute h-20 w-20 rounded-full border border-[#7857c7]/30" />

              <div className="absolute h-10 w-10 rounded-full border border-[#c4a15c]/35" />

              <div className="h-2.5 w-2.5 rounded-full bg-[#c4a15c]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
