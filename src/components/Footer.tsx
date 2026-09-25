import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link href="/homepage" className="flex items-center gap-2.5">
            <AppLogo
              src="/assets/images/LKG_Co_Logo-1777466274773.png"
              size={36}
            />
            <span className="font-bold text-lg tracking-tight text-foreground">
              LKG <span className="text-primary">&amp; Company</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link
              href="/homepage"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>

            <Link
              href="/homepage#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/lkg-company"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LKG & Company on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
            >
              <svg
                width="18"
                height="18"
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/lkgcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LKG & Company on Pinterest"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#E60023] hover:border-[#E60023] transition-colors"
            >
              <svg
                width="18"
                height="18"
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
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <svg
                width="18"
                height="18"
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

          {/* Copyright + Legal */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 LKG &amp; Company</span>

            <span className="text-border">·</span>

            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>

            <span className="text-border">·</span>

            <Link
              href="/contact"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
