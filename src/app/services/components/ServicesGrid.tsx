'use client';

import React, { useEffect, useRef } from 'react';

const services = [
  {
    id: 'web',
    number: '01',
    title: 'Web Development',
    tagline: 'High-performance websites that convert.',
    desc: 'We build scalable, fast-loading web platforms engineered for business impact. From corporate websites to complex e-commerce systems and conversion-optimised landing pages.',
    features: [
      'Business & corporate websites',
      'E-commerce platforms (Shopify, custom)',
      'Landing pages optimised for conversion',
      'Progressive Web Apps (PWA)',
      'CMS integration (WordPress, Contentful)',
    ],
    cta: 'Book Web Project',
    color: 'bg-primary/8',
    accent: 'text-primary',
    border: 'border-primary/20',
  },
  {
    id: 'android',
    number: '02',
    title: 'Android Development',
    tagline: 'Mobile apps users actually keep.',
    desc: 'Custom Android applications built for performance, intuitive UX, and long-term engagement. We handle the full product cycle from wireframe to Play Store launch.',
    features: [
      'Native Android development (Kotlin)',
      'Cross-platform apps (React Native, Flutter)',
      'Play Store submission & optimisation',
      'API integration & backend connectivity',
      'Ongoing maintenance & feature updates',
    ],
    cta: 'Start App Project',
    color: 'bg-accent/8',
    accent: 'text-accent',
    border: 'border-accent/20',
  },
  {
    id: 'marketing',
    number: '03',
    title: 'Digital Marketing & SEO',
    tagline: 'Traffic that converts, rankings that last.',
    desc: 'Data-driven marketing strategies across SEO, paid media, content, and social. We build sustainable growth engines, not short-term spikes.',
    features: [
      'Technical SEO & on-page optimisation',
      'Google Ads & Meta Ads management',
      'Content strategy & creation',
      'Social media management',
      'Monthly analytics reporting',
    ],
    cta: 'Start Marketing Plan',
    color: 'bg-green-500/8',
    accent: 'text-green-600',
    border: 'border-green-500/20',
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud Optimization',
    tagline: 'Cut costs. Improve reliability.',
    desc: 'We audit, architect, and optimise your cloud infrastructure on AWS, GCP, or Azure — reducing costs by up to 40% while improving uptime and security posture.',
    features: [
      'Cloud cost audit & savings analysis',
      'AWS / GCP / Azure architecture review',
      'Infrastructure-as-Code (Terraform)',
      'Auto-scaling & load balancing setup',
      'Security hardening & compliance',
    ],
    cta: 'Consult Now',
    color: 'bg-blue-500/8',
    accent: 'text-blue-600',
    border: 'border-blue-500/20',
  },
  {
    id: 'staffing',
    number: '05',
    title: 'IT Staffing & Consulting',
    tagline: 'The right talent, on demand.',
    desc: 'Skilled professionals placed within your team or projects — from individual developers to full delivery squads. Strategic IT advisory for CTO-level decisions.',
    features: [
      'Contract & permanent IT placement',
      'Dedicated development teams',
      'CTO-as-a-Service advisory',
      'Technology roadmap consulting',
      'Vendor selection & management',
    ],
    cta: 'Hire Talent / Book Consultation',
    color: 'bg-purple-500/8',
    accent: 'text-purple-600',
    border: 'border-purple-500/20',
  },
  {
    id: 'software',
    number: '06',
    title: 'Custom Software Development',
    tagline: 'Built for your exact workflow.',
    desc: 'End-to-end bespoke software development — from internal tools and SaaS platforms to complex enterprise systems. We own the full lifecycle.',
    features: [
      'Requirements analysis & system design',
      'Full-stack development (React, Node, Python)',
      'Database architecture & optimisation',
      'Third-party API & system integrations',
      'QA, testing, and deployment pipelines',
    ],
    cta: 'Start Development',
    color: 'bg-orange-500/8',
    accent: 'text-orange-600',
    border: 'border-orange-500/20',
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRef?.current?.querySelectorAll('.reveal-hidden')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: [col-1: Web Dev] [col-2: Android] [col-3: Digital Marketing] */}
        {/* Row 2: [col-1: Cloud] [col-2: IT Staffing] [col-3: Custom Software] */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, i) => (
            <div
              key={service?.id}
              className={`reveal-hidden stagger-${Math.min(i + 1, 6)} group bg-card rounded-3xl border border-border shadow-soft overflow-hidden hover:shadow-hover hover:-translate-y-2 transition-all duration-500`}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full ${service?.color?.replace('/8', '')} opacity-60`} style={{ background: `linear-gradient(90deg, var(--primary), var(--accent))` }} />

              <div className="p-8">
                {/* Number + Title */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${service?.accent} mb-2 block`}>
                      {service?.number}
                    </span>
                    <h2 className="text-2xl font-extrabold text-foreground leading-tight">{service?.title}</h2>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${service?.color} ${service?.accent} border ${service?.border}`}>
                    Service
                  </div>
                </div>

                {/* Tagline */}
                <p className={`text-base font-semibold ${service?.accent} mb-3`}>{service?.tagline}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{service?.desc}</p>

                {/* Feature list */}
                <ul className="space-y-2 mb-8">
                  {service?.features?.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${service?.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTAs — Big-4 style dual buttons */}
                <div className="flex flex-col gap-2 pt-6 border-t border-border">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full py-3 rounded-xl text-sm font-semibold text-center inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Consultation
                  </a>
                  <a
                    href="mailto:lkgco.business@gmail.com?subject=Proposal Request: ${service.title}"
                    className="btn-outline w-full py-3 rounded-xl text-sm font-semibold text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    Request Proposal
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}