'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const pillars = [
  { icon: '◆', label: 'Technology', desc: 'Full-stack engineering' },
  { icon: '◈', label: 'Marketing', desc: 'Data-driven growth' },
  { icon: '◉', label: 'Consulting', desc: 'Strategic advisory' },
];

export default function AboutPreview() {
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = sectionRef?.current?.querySelectorAll('.reveal-hidden');
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="reveal-hidden">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">About LKG &amp; Co.</span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                A modern firm built for{' '}
                <span className="text-gradient">digital-first</span> businesses.
              </h2>
            </div>

            <p className="reveal-hidden stagger-1 text-lg text-muted-foreground leading-relaxed">
              We are a modern IT and consulting firm with deep expertise across technology, marketing, and digital transformation. Our mission is to simplify complex business challenges through innovative and scalable solutions.
            </p>

            <div className="reveal-hidden stagger-2 grid grid-cols-3 gap-4">
              {pillars?.map((p) => (
                <div
                  key={p?.label}
                  className="p-4 rounded-2xl bg-muted border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-center"
                >
                  <div className="text-2xl text-primary mb-2">{p?.icon}</div>
                  <div className="text-sm font-bold text-foreground">{p?.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{p?.desc}</div>
                </div>
              ))}
            </div>

            <div className="reveal-hidden stagger-3">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
              >
                Explore Our Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div className="lg:col-span-6 reveal-hidden stagger-1">
            <div className="glass-card rounded-3xl p-10 shadow-card">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '200+', label: 'Projects Delivered', sub: 'Across 8+ industries' },
                  { value: '50+', label: 'Enterprise Clients', sub: 'Long-term partnerships' },
                  { value: '99%', label: 'Client Satisfaction', sub: 'Based on 2025 survey' },
                  { value: '5★', label: 'Average Rating', sub: 'Across all engagements' },
                ]?.map((stat) => (
                  <div
                    key={stat?.label}
                    className="p-5 rounded-2xl bg-background border border-border hover:border-primary/20 transition-colors"
                  >
                    <div className="text-3xl font-extrabold text-foreground mb-1">{stat?.value}</div>
                    <div className="text-sm font-semibold text-foreground">{stat?.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{stat?.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl gold-line bg-accent/8 border border-accent/20">
                <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                  <span className="font-bold text-accent">Since 2019</span>, we&apos;ve helped startups and enterprises navigate complex digital landscapes with clarity and precision.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder / CEO Section */}
        <div className="reveal-hidden mt-16 p-8 md:p-10 rounded-3xl glass-card shadow-card border border-border">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl text-primary">
              👤
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-1">Founder &amp; CEO</span>
                <h3 className="text-2xl font-extrabold text-foreground">Ayush Kumar Singh</h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                Founded on <span className="font-semibold text-foreground">29/04/2026</span>, the company is led by its Founder &amp; CEO,{' '}
                <span className="font-semibold text-foreground">Ayush Kumar Singh</span>, a Gen Z entrepreneur with a strong technical background and expertise in the consulting industry. With a vision to simplify and modernize access to IT and digital services, he drives LKG &amp; Co. with a focus on innovation, practical solutions, and delivering impactful results for businesses.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Gen Z Entrepreneur', 'IT & Digital Services', 'Consulting Expert', 'Innovation-Driven']?.map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}