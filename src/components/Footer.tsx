import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Brand */}
            <div className="lg:col-span-4">
              <Link
                href="/homepage"
                aria-label="LKG & Company"
                className="group inline-flex items-center gap-2.5"
              >
                <AppLogo
                  src="/assets/images/LKG_Co_Logo-1777466274773.png"
                  size={40}
                  showCompanyName={false}
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <span className="text-xl font-bold tracking-tight text-foreground">
                  LKG <span className="text-primary">&amp; Company</span>
                </span>
              </Link>

              <div className="mt-6 max-w-sm">
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  Turning Effort into Impact
                </p>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Strategy, Technology &amp; Transformation for businesses
                  ready to create meaningful impact.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-7 flex items-center gap-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/lkg-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LKG & Company on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-[#0A66C2] hover:text-[#0A66C2]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.25 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.42c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.41V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38l.01-6.58Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/lkgandco?stkn=MXUza3BmdTkyMGprbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LKG & Company on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-[#E4405F] hover:text-[#E4405F]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://www.pinterest.com/lkgcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LKG & Company on Pinterest"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-[#E60023] hover:text-[#E60023]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 3 5.58 3 10.02c0 3.35 1.87 5.96 4.67 6.99-.06-.59-.01-1.3.15-1.96l1.1-4.67s-.28-.56-.28-1.39c0-1.3.76-2.27 1.71-2.27.81 0 1.2.61 1.2 1.34 0 .82-.52 2.05-.79 3.19-.23.95.48 1.73 1.42 1.73 1.7 0 3-1.79 3-4.38 0-2.29-1.65-3.9-4.01-3.9-2.73 0-4.33 2.05-4.33 4.17 0 .83.32 1.72.72 2.2.08.1.09.19.07.29l-.27 1.1c-.04.18-.14.22-.33.13-1.23-.57-2-2.35-2-3.78 0-3.08 2.24-5.91 6.47-5.91 3.4 0 6.04 2.42 6.04 5.66 0 3.38-2.13 6.1-5.09 6.1-.99 0-1.92-.52-2.24-1.13l-.61 2.32c-.22.8-.81 1.81-1.21 2.42.91.28 1.87.43 2.86.43 5.52 0 9-3.58 9-8.02C21 5.58 17.52 2 12 2Z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:lkgco.official@gmail.com"
                  aria-label="Email LKG & Company"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* What We Do */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-foreground">
                What We Do
              </h3>

              <nav className="mt-5 flex flex-col gap-3.5">
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Strategy
                </Link>

                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Technology
                </Link>

                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Transformation
                </Link>

                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Digital &amp; AI
                </Link>

                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Solutions
                </Link>
              </nav>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-foreground">
                Company
              </h3>

              <nav className="mt-5 flex flex-col gap-3.5">
                <Link
                  href="/aboutus/who-we-are"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About LKG &amp; Company
                </Link>

                <Link
                  href="/aboutus/our-approach"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Our Approach
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Careers
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Insights */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-foreground">
                Insights
              </h3>

              <nav className="mt-5 flex flex-col gap-3.5">
                <Link
                  href="/insights"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Insights
                </Link>

                <Link
                  href="/insights"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Case Studies
                </Link>

                <Link
                  href="/insights"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Perspectives
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Start a Conversation
                </Link>
              </nav>
            </div>

            {/* Connect */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-foreground">
                Connect
              </h3>

              <nav className="mt-5 flex flex-col gap-3.5">
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>

                <a
                  href="mailto:lkgco.official@gmail.com"
                  className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email Us
                </a>

                <a
                  href="https://www.linkedin.com/company/lkg-company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/lkgandco?stkn=MXUza3BmdTkyMGprbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Instagram
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Have an idea, challenge, or opportunity?
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                Let&apos;s build what&apos;s next.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap"
            >
              Start a Conversation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-muted-foreground md:text-left">
              © 2026 LKG &amp; Company. All rights reserved.
            </p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>

              <span className="text-border">·</span>

              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>

              <span className="text-border">·</span>

              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
