'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
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
    <>
      <section
        ref={sectionRef}
        className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-[#faf9ff] text-[#17162b]"
      >
        {/* Background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#7b57c7]/[0.07] blur-3xl" />

          <div className="absolute -right-40 top-[15%] h-[500px] w-[500px] rounded-full bg-[#c4a15c]/[0.08] blur-3xl" />

          <div className="absolute bottom-[-280px] left-[35%] h-[500px] w-[500px] rounded-full bg-[#8c6bd1]/[0.045] blur-3xl" />

          {/* Very subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(23,22,43,1) 1px, transparent 1px), linear-gradient(90deg, rgba(23,22,43,1) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[1500px] items-center px-5 py-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 xl:gap-20">
            {/* LEFT */}
            <div
              className={`max-w-[760px] transition-all duration-1000 ease-out ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0'
              }`}
            >
              {/* Eyebrow */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#7b57c7]/15 bg-white/60 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7b57c7]/30" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7b57c7]" />
                </span>

                <span className="text-sm font-medium tracking-wide text-[#6e57a8]">
                  Strategy · Technology · Transformation
                </span>
              </div>

              {/* Main heading */}
              <h1 className="max-w-[850px] text-[clamp(3.8rem,7.2vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                <span className="block">Turning Effort</span>

                <span className="mt-2 block">
                  into{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#7653c5] via-[#8c68cf] to-[#b99a61] bg-clip-text text-transparent">
                      Impact.
                    </span>

                    {/* Static accent line — no color animation */}
                    <span className="absolute -bottom-2 left-1 h-[3px] w-[72%] rounded-full bg-gradient-to-r from-[#7653c5] to-[#b99a61]" />
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-9 max-w-[650px] text-[18px] leading-8 text-[#625f75] sm:text-[20px] sm:leading-9">
                LKG &amp; Company helps businesses turn ambitious ideas and
                complex challenges into meaningful outcomes through strategy,
                technology, and transformation.
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#7857c7] px-7 text-[15px] font-semibold text-white shadow-[0_14px_35px_rgba(120,87,199,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6d4dbb] hover:shadow-[0_18px_40px_rgba(120,87,199,0.28)]"
                >
                  Start a Conversation

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-[#7857c7]/35 bg-white/55 px-7 text-[15px] font-semibold text-[#7050bb] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7857c7]/55 hover:bg-white"
                >
                  Explore Capabilities

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 8.5H13.5M13.5 8.5L9.5 4.5M13.5 8.5L9.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Brand principle */}
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-[#c4a15c]/60" />

                <p className="text-sm font-medium tracking-[0.08em] text-[#777388]">
                  Ideas into action. Action into impact.
                </p>
              </div>
            </div>

            {/* RIGHT — IMPACT ARCHITECTURE */}
            <div
              className={`relative mx-auto w-full max-w-[650px] transition-all delay-200 duration-1000 ease-out ${
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative aspect-square w-full">
                {/* Outer orbit */}
                <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7857c7]/10" />

                <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c4a15c]/25" />

                {/* Orbiting accent dots */}
                <div className="hero-float absolute left-[7%] top-[28%] h-3 w-3 rounded-full bg-[#7857c7] shadow-[0_0_0_8px_rgba(120,87,199,0.08)]" />

                <div className="hero-float-delayed absolute right-[13%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#c4a15c] shadow-[0_0_0_7px_rgba(196,161,92,0.1)]" />

                <div className="hero-float-slow absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-[#7857c7]/70" />

                {/* Main glass architecture */}
                <div className="absolute left-1/2 top-1/2 w-[82%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/75 p-5 shadow-[0_30px_90px_rgba(45,34,76,0.12)] backdrop-blur-xl sm:p-7">
                    {/* Card top */}
                    <div className="flex items-center justify-between border-b border-[#17162b]/[0.07] pb-5">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#89859a]">
                          LKG &amp; Company
                        </p>

                        <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[#201e35] sm:text-2xl">
                          Impact Architecture
                        </h2>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7857c7]/15 bg-[#7857c7]/[0.06]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#7857c7]" />
                      </div>
                    </div>

                    {/* Architecture */}
                    <div className="relative py-7">
                      {/* Connector */}
                      <div className="absolute left-[20%] right-[20%] top-1/2 h-px bg-gradient-to-r from-[#7857c7]/20 via-[#9b83ca]/50 to-[#c4a15c]/35" />

                      <div className="relative grid grid-cols-3 gap-2 sm:gap-4">
                        {/* Strategy */}
                        <div className="group relative">
                          <div className="relative z-10 rounded-2xl border border-[#7857c7]/15 bg-[#faf8ff] p-3 shadow-sm transition-transform duration-500 hover:-translate-y-1 sm:p-4">
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#7857c7]/10">
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
                            </div>

                            <p className="text-sm font-semibold text-[#242137]">
                              Strategy
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-[#858194]">
                              Direction
                            </p>
                          </div>
                        </div>

                        {/* Technology */}
                        <div className="group relative">
                          <div className="relative z-10 rounded-2xl border border-[#8c68cf]/15 bg-[#faf8ff] p-3 shadow-sm transition-transform duration-500 hover:-translate-y-1 sm:p-4">
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8c68cf]/10">
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
                            </div>

                            <p className="text-sm font-semibold text-[#242137]">
                              Technology
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-[#858194]">
                              Execution
                            </p>
                          </div>
                        </div>

                        {/* Transformation */}
                        <div className="group relative">
                          <div className="relative z-10 rounded-2xl border border-[#c4a15c]/20 bg-[#fffdf8] p-3 shadow-sm transition-transform duration-500 hover:-translate-y-1 sm:p-4">
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#c4a15c]/10">
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
                            </div>

                            <p className="text-sm font-semibold text-[#242137]">
                              Transformation
                            </p>

                            <p className="mt-1 text-[11px] leading-5 text-[#858194]">
                              Evolution
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Impact output */}
                    <div className="rounded-2xl border border-[#17162b]/[0.07] bg-[#17162b] p-5 text-white sm:p-6">
                      <div className="flex items-center justify-between gap-5">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
                            The outcome
                          </p>

                          <p className="mt-2 text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                            Meaningful Impact
                          </p>
                        </div>

                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c4a15c]/30">
                          <div className="h-3 w-3 rounded-full bg-[#c4a15c]" />
                        </div>
                      </div>

                      <div className="mt-5 h-px bg-white/10" />

                      <p className="mt-4 text-xs leading-5 text-white/50">
                        Connecting business intent with practical technology
                        and lasting transformation.
                      </p>
                    </div>
                  </div>

                  {/* Floating label */}
                  <div className="hero-float absolute -right-5 -top-5 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(45,34,76,0.1)] backdrop-blur-md sm:-right-8 sm:-top-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a15c]/10">
                        <span className="h-2 w-2 rounded-full bg-[#c4a15c]" />
                      </span>

                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9994a7]">
                          Focus
                        </p>

                        <p className="text-xs font-semibold text-[#2b283d]">
                          Outcomes over output
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating bottom label */}
                  <div className="hero-float-delayed absolute -bottom-4 -left-4 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(45,34,76,0.1)] backdrop-blur-md sm:-bottom-5 sm:-left-8">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-1">
                        <span className="h-6 w-6 rounded-full border-2 border-white bg-[#7857c7]" />
                        <span className="h-6 w-6 rounded-full border-2 border-white bg-[#9b83ca]" />
                        <span className="h-6 w-6 rounded-full border-2 border-white bg-[#c4a15c]" />
                      </div>

                      <p className="text-xs font-medium text-[#5e5a6c]">
                        Built around your ambition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom transition */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7857c7]/15 to-transparent"
        />
      </section>

      {/* Motion only — no color animation */}
      <style jsx>{`
        @keyframes heroFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -7px, 0);
          }
        }

        @keyframes heroFloatDelayed {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -5px, 0);
          }
        }

        @keyframes heroFloatSlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -4px, 0);
          }
        }

        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-float-delayed {
          animation: heroFloatDelayed 6s ease-in-out 0.8s infinite;
        }

        .hero-float-slow {
          animation: heroFloatSlow 7s ease-in-out 1.2s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-float,
          .hero-float-delayed,
          .hero-float-slow {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
