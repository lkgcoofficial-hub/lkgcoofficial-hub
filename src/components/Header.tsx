'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const megaMenus = {
  Industries: {
    columns: [
      {
        title: 'Business',
        items: [
          { label: 'Startups & SMEs', href: '/services' },
          { label: 'Professional Services', href: '/services' },
          { label: 'Real Estate', href: '/services' },
          { label: 'Retail & E-commerce', href: '/services' },
        ],
      },
      {
        title: 'Technology',
        items: [
          { label: 'Technology & SaaS', href: '/services' },
          { label: 'AI & Automation', href: '/services' },
          { label: 'Software Companies', href: '/services' },
          { label: 'Digital Products', href: '/services' },
        ],
      },
      {
        title: 'Growing Sectors',
        items: [
          { label: 'Healthcare', href: '/services' },
          { label: 'Education', href: '/services' },
          { label: 'Financial Services', href: '/services' },
          { label: 'Manufacturing', href: '/services' },
        ],
      },
    ],
    featured: {
      eyebrow: 'FEATURED',
      title: 'Digital solutions built around your industry.',
      description:
        'Practical technology and digital solutions designed around the way your business actually works.',
      href: '/services',
      link: 'Explore Industries',
    },
  },

  Capabilities: {
    columns: [
      {
        title: 'Build',
        items: [
          { label: 'Web Development', href: '/services' },
          { label: 'Mobile Apps', href: '/services' },
          { label: 'Custom Software', href: '/services' },
          { label: 'E-commerce', href: '/services' },
        ],
      },
      {
        title: 'Design',
        items: [
          { label: 'UI/UX Design', href: '/services' },
          { label: 'Product Design', href: '/services' },
          { label: 'Brand Experience', href: '/services' },
          { label: 'Design Systems', href: '/services' },
        ],
      },
      {
        title: 'Grow',
        items: [
          { label: 'Digital Marketing', href: '/services' },
          { label: 'SEO', href: '/services' },
          { label: 'Automation', href: '/services' },
          { label: 'Technology Consulting', href: '/services' },
        ],
      },
    ],
    featured: {
      eyebrow: 'OUR CAPABILITIES',
      title: 'From idea to impact.',
      description:
        'We combine technology, design and strategy to create digital experiences that move businesses forward.',
      href: '/services',
      link: 'Explore Capabilities',
    },
  },

  'Tech & AI': {
    columns: [
      {
        title: 'Artificial Intelligence',
        items: [
          { label: 'Generative AI', href: '/services' },
          { label: 'AI Automation', href: '/services' },
          { label: 'AI Assistants', href: '/services' },
          { label: 'Machine Learning', href: '/services' },
        ],
      },
      {
        title: 'Technology',
        items: [
          { label: 'Cloud Solutions', href: '/services' },
          { label: 'APIs & Integrations', href: '/services' },
          { label: 'Data & Analytics', href: '/services' },
          { label: 'Modern Web', href: '/services' },
        ],
      },
      {
        title: 'Business Impact',
        items: [
          { label: 'Process Automation', href: '/services' },
          { label: 'Digital Transformation', href: '/services' },
          { label: 'Workflow Optimization', href: '/services' },
          { label: 'AI Strategy', href: '/services' },
        ],
      },
    ],
    featured: {
      eyebrow: 'TECHNOLOGY + AI',
      title: 'Make technology work harder for your business.',
      description:
        'Use AI, automation and modern technology to eliminate repetitive work and create better digital experiences.',
      href: '/services',
      link: 'Explore Tech & AI',
    },
  },

  Insights: {
    columns: [
      {
        title: 'Explore',
        items: [
          { label: 'Articles', href: '/services' },
          { label: 'Case Studies', href: '/services' },
          { label: 'Guides', href: '/services' },
          { label: 'Trends', href: '/services' },
        ],
      },
      {
        title: 'Topics',
        items: [
          { label: 'Artificial Intelligence', href: '/services' },
          { label: 'Web Development', href: '/services' },
          { label: 'Digital Transformation', href: '/services' },
          { label: 'Business Growth', href: '/services' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Technology Insights', href: '/services' },
          { label: 'Business Guides', href: '/services' },
          { label: 'Our Approach', href: '/homepage#about' },
          { label: 'Frequently Asked Questions', href: '/contact' },
        ],
      },
    ],
    featured: {
      eyebrow: 'LKG & COMPANY INSIGHTS',
      title: 'Ideas for building what comes next.',
      description:
        'Explore practical perspectives on technology, AI, digital products and business growth.',
      href: '/services',
      link: 'Explore Insights',
    },
  },

  'About Us': {
    columns: [
      {
        title: 'LKG & Company',
        items: [
          { label: 'Who We Are', href: '/homepage#about' },
          { label: 'Our Approach', href: '/homepage#about' },
          { label: 'Why LKG & Company', href: '/homepage#about' },
          { label: 'Our Process', href: '/services' },
        ],
      },
      {
        title: 'Explore',
        items: [
          { label: 'Services', href: '/services' },
          { label: 'Industries', href: '/services' },
          { label: 'Technology & AI', href: '/services' },
          { label: 'Insights', href: '/services' },
        ],
      },
      {
        title: 'Connect',
        items: [
          { label: 'Contact Us', href: '/contact' },
          { label: 'Book a Consultation', href: '/contact' },
          { label: 'Get Started', href: '/services' },
          { label: 'Careers', href: '/contact' },
        ],
      },
    ],
    featured: {
      eyebrow: 'ABOUT LKG & COMPANY',
      title: 'Technology with a purpose.',
      description:
        'We help businesses build, launch and grow through practical digital solutions designed around their goals.',
      href: '/homepage#about',
      link: 'About LKG & Company',
    },
  },
};

const menuItems = Object.keys(megaMenus);

const mobileLinks = [
  { label: 'Home', href: '/homepage' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/homepage#about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (window.scrollY > 80) {
        setActiveMenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setActiveMenu(null);
    setMobileExpanded(null);
  }, [pathname]);

  const activeData =
    activeMenu && megaMenus[activeMenu as keyof typeof megaMenus];

  return (
    <>
      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
            : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <AppLogo
              src="/assets/images/LKG_Co_Logo-1777466274773.png"
              size={44}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span className="font-bold text-xl tracking-tight text-foreground hidden sm:block">
              LKG <span className="text-primary">&amp; Co.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 ml-8">
            {menuItems.map((item) => {
              const isActive = activeMenu === item;

              return (
                <button
                  key={item}
                  type="button"
                  onMouseEnter={() => setActiveMenu(item)}
                  onClick={() =>
                    setActiveMenu(isActive ? null : item)
                  }
                  className={`nav-link flex items-center gap-1.5 ${
                    isActive ? 'active' : ''
                  }`}
                  aria-expanded={isActive}
                >
                  {item}

                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-200 ${
                      isActive ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link
              href="/contact"
              className="btn-outline px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Desktop Mega Menu */}
        <div
          className={`hidden lg:block absolute left-0 top-full w-full transition-all duration-200 ${
            activeMenu
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={() => {
            if (activeMenu) setActiveMenu(activeMenu);
          }}
        >
          {activeData && (
            <div className="bg-white border-t border-gray-100 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Main Columns */}
                  <div className="col-span-8 grid grid-cols-3 gap-8">
                    {activeData.columns.map((column) => (
                      <div key={column.title}>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400 mb-4">
                          {column.title}
                        </p>

                        <div className="space-y-1">
                          {column.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary transition-all"
                            >
                              <span>{item.label}</span>

                              <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                →
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured */}
                  <div className="col-span-4">
                    <div className="h-full rounded-2xl bg-gray-950 text-white p-7 flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-4">
                          {activeData.featured.eyebrow}
                        </p>

                        <h3 className="text-2xl font-semibold tracking-tight leading-tight mb-4">
                          {activeData.featured.title}
                        </h3>

                        <p className="text-sm leading-6 text-white/65">
                          {activeData.featured.description}
                        </p>
                      </div>

                      <Link
                        href={activeData.featured.href}
                        onClick={() => setActiveMenu(null)}
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all"
                      >
                        {activeData.featured.link}
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[340px] max-w-[90vw] bg-white shadow-2xl flex flex-col pt-24 px-6 pb-8 transition-transform duration-300 overflow-y-auto ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1 flex-1">
            {menuItems.map((item) => {
              const data =
                megaMenus[item as keyof typeof megaMenus];

              const expanded = mobileExpanded === item;

              return (
                <div key={item} className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpanded(expanded ? null : item)
                    }
                    className="w-full flex items-center justify-between py-4 text-left text-base font-semibold text-foreground"
                  >
                    {item}

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        expanded ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded
                        ? 'max-h-[800px] opacity-100 pb-4'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {data.columns.map((column) => (
                      <div key={column.title} className="mb-4">
                        <p className="text-[10px] uppercase tracking-[0.16em] font-bold text-gray-400 mb-2">
                          {column.title}
                        </p>

                        <div className="space-y-1">
                          {column.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="block py-2 text-sm text-gray-600 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Standard Mobile Links */}
            {mobileLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-base font-semibold border-b border-gray-100 ${
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-outline px-5 py-3 rounded-full text-sm font-semibold text-center"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="btn-primary px-5 py-3 rounded-full text-sm font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
