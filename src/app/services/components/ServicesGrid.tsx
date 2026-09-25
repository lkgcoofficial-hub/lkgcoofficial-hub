'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const serviceGroups = [
  {
    number: '01',
    title: 'Consulting & Strategy',
    tagline: 'Know what to do before you invest.',
    description:
      'Strategic guidance for businesses making important decisions around growth, technology, transformation and digital execution.',
    services: [
      'Business Strategy',
      'Growth Strategy',
      'IT & Technology Strategy',
      'Digital Transformation Consulting',
      'Technology Roadmaps',
      'Solution Architecture',
      'AI Consulting & AI Readiness',
      'Process Improvement',
      'Product & Digital Consulting',
    ],
  },
  {
    number: '02',
    title: 'Digital Growth & Marketing',
    tagline: 'Build visibility. Generate demand. Grow.',
    description:
      'Digital growth capabilities designed to help businesses become discoverable, build trust and convert attention into opportunities.',
    services: [
      'SEO & Technical SEO',
      'Local SEO',
      'Content SEO',
      'Google Ads',
      'Meta Ads',
      'Performance Marketing',
      'Social Media Management',
      'Content Marketing',
      'Video & Creative Content',
      'Brand & Digital Creative',
    ],
  },
  {
    number: '03',
    title: 'Web & Software Development',
    tagline: 'Turn ideas and workflows into products.',
    description:
      'Modern web and software solutions built around business requirements, customer experience and long-term maintainability.',
    services: [
      'Corporate Websites',
      'E-commerce Development',
      'Web Applications',
      'Custom Software',
      'SaaS Development',
      'Progressive Web Apps',
      'API Development',
      'Third-party Integrations',
      'CMS Development',
      'Legacy Modernization',
    ],
  },
  {
    number: '04',
    title: 'Mobile App Development',
    tagline: 'Products designed for people on the move.',
    description:
      'Mobile applications from product discovery and UX to development, integrations, deployment and ongoing improvements.',
    services: [
      'Android Development',
      'iOS Development',
      'React Native',
      'Flutter',
      'Cross-platform Applications',
      'Mobile UI/UX',
      'Backend & API Integration',
      'App Store Deployment',
      'Play Store Deployment',
      'App Maintenance',
    ],
  },
  {
    number: '05',
    title: 'AI, Data & Automation',
    tagline: 'Make technology work smarter.',
    description:
      'Practical AI and automation solutions focused on useful business applications rather than technology for its own sake.',
    services: [
      'Generative AI Solutions',
      'AI Applications',
      'AI Assistants',
      'AI Automation',
      'Machine Learning',
      'AI Strategy',
      'AI Use-case Discovery',
      'Workflow Automation',
      'Data Strategy',
      'Analytics & Dashboards',
    ],
  },
  {
    number: '06',
    title: 'Cloud, DevOps & Cybersecurity',
    tagline: 'Build infrastructure you can rely on.',
    description:
      'Cloud and infrastructure capabilities covering architecture, deployment, optimization, security and operational reliability.',
    services: [
      'Cloud Strategy',
      'AWS Solutions',
      'Microsoft Azure',
      'Google Cloud',
      'Cloud Migration',
      'DevOps & CI/CD',
      'Infrastructure Automation',
      'Cloud Optimization',
      'Application Security',
      'Cloud Security',
    ],
  },
  {
    number: '07',
    title: 'Enterprise Technology',
    tagline: 'Connect complex systems to business needs.',
    description:
      'Enterprise technology advisory, implementation support and integration capabilities for growing and established organizations.',
    services: [
      'SAP Consulting',
      'Salesforce Consulting',
      'CRM Solutions',
      'ERP Solutions',
      'Enterprise Integrations',
      'Systems Integration',
      'Enterprise Architecture',
      'Technology Modernization',
      'Business Process Digitization',
      'Enterprise Application Strategy',
    ],
  },
  {
    number: '08',
    title: 'IT Staffing & Delivery',
    tagline: 'Add the people you need to execute.',
    description:
      'Flexible technology talent and delivery models for businesses that need additional capability without building everything internally.',
    services: [
      'IT Staffing',
      'Contract Resources',
      'Dedicated Developers',
      'Dedicated Teams',
      'Project-based Teams',
      'Technical Recruitment',
      'Developers & Engineers',
      'Designers & UX Talent',
      'QA & Testing Resources',
      'Technology Advisory',
    ],
  },
];

export default function ServicesGrid() {
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
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    sectionRef.current
      ?.querySelectorAll('.reveal-hidden')
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 md:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="reveal-hidden mb-14 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
            One partner for{' '}
            <span className="text-gradient">
              technology, growth and change.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Choose the capability you need today, combine multiple
            capabilities for a larger initiative, or engage us from strategy
            through execution.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {serviceGroups.map((group, index) => (
            <article
              key={group.number}
              className={`reveal-hidden stagger-${Math.min(
                index + 1,
                6
              )} group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-hover md:p-8`}
            >
              {/* Animated top border */}
              <div className="absolute left-0 top-0 h-px w-full overflow-hidden bg-border">
                <div className="h-full w-1/3 bg-gradient-to-r from-primary to-accent transition-all duration-700 group-hover:w-full" />
              </div>

              {/* Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <span className="text-xs font-extrabold tracking-[0.2em] text-primary">
                    {group.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                    {group.title}
                  </h3>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-sm font-bold text-primary transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                  {group.number}
                </div>
              </div>

              {/* Tagline */}
              <p className="mt-4 text-sm font-semibold text-primary">
                {group.tagline}
              </p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>

              <div className="my-7 h-px bg-border" />

              {/* Services */}
              <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {group.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-2 text-sm text-foreground/80 transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/contact?service=${encodeURIComponent(group.title)}`}
                className="mt-8 inline-flex items-center text-sm font-bold text-primary transition-all duration-300 hover:gap-3"
              >
                Discuss this capability
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom conversion block */}
        <div className="reveal-hidden mt-10 rounded-3xl border border-primary/15 bg-gradient-to-r from-primary/5 via-card to-accent/5 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold text-foreground">
                Need something more specific?
              </p>

              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Tell us what you are trying to build, improve or solve. We can
                scope the right combination of capabilities for your business.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-outline inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
            >
              Talk to LKG & Company
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
