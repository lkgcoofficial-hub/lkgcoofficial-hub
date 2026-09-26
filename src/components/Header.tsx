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
          {
            label: 'Who We Are',
            href: '/aboutus/who-we-are',
          },
          {
            label: 'Our Approach',
            href: '/homepage#about',
          },
          {
            label: 'Why LKG & Company',
            href: '/homepage#about',
          },
          {
            label: 'Our Process',
            href: '/services',
          },
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
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 py-3 shadow-soft backdrop-blur-md'
            : 'bg-white/90 py-4 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Brand */}
          <Link
            href="/homepage"
            aria-label="LKG & Company"
            className="group flex shrink-0 items-center"
          >
            <AppLogo
              src="/assets/images/LKG_Co_Logo-1777466274773.png"
              size={80}
              className="transition-transform duration-300 group-hover:scale-[1.015]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-8 hidden items-center gap-7 lg:flex">
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
          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="btn-outline rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1.5 rounded-lg p-2 transition-colors hover:bg-muted lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Desktop Mega Menu */}
        <div
          className={`absolute left-0 top-full hidden w-full transition-all duration-200 lg:block ${
            activeMenu
              ? 'visible translate-y-0 opacity-100'
              : 'invisible -translate-y-2 pointer-events-none opacity-0'
          }`}
          onMouseEnter={() => {
            if (activeMenu) setActiveMenu(activeMenu);
          }}
        >
          {activeData && (
            <div className="border-t border-gray-100 bg-white shadow-2xl">
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Main Columns */}
                  <div className="col-span-8 grid grid-cols-3 gap-8">
                    {activeData.columns.map((column) => (
                      <div key={column.title}>
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-gray-400">
                          {column.title}
                        </p>

                        <div className="space-y-1">
                          {column.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setActiveMenu(null)}
                              className="group -mx-2 flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-primary"
                            >
                              <span>{item.label}</span>

                              <span className="translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
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
                    <div className="flex h-full flex-col justify-between rounded-2xl bg-gray-950 p-7 text-white">
                      <div>
                        <p className="mb-4 text-[10px] font-bold tracking-[0.2em] text-white/50">
                          {activeData.featured.eyebrow}
                        </p>

                        <h3 className="mb-4 text-2xl font-semibold leading-tight tracking-tight">
                          {activeData.featured.title}
                        </h3>

                        <p className="text-sm leading-6 text-white/65">
                          {activeData.featured.description}
                        </p>
                      </div>

                      <Link
                        href={activeData.featured.href}
                        onClick={() => setActiveMenu(null)}
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-all hover:gap-3"
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
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          menuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 flex h-full w-[340px] max-w-[90vw] flex-col overflow-y-auto bg-white px-6 pb-8 pt-24 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-1 flex-col gap-1">
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
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-foreground"
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
                        ? 'max-h-[800px] pb-4 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    {data.columns.map((column) => (
                      <div key={column.title} className="mb-4">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
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
                className={`border-b border-gray-100 py-4 text-base font-semibold ${
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
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-outline rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Book Consultation
            </Link>

            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="btn-primary rounded-full px-5 py-3 text-center text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
