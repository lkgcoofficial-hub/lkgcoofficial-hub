import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Linkedin, Instagram, Pinterest, Mail } from 'lucide-react';

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
              LKG <span className="text-primary">&amp; Co.</span>
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

          {/* Social Preferences */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/lkg-company"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LKG & Co. on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/lkgandco?stkn=MXUza3BmdTkyMGprbQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LKG & Co. on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.pinterest.com/lkgcompany"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LKG & Co. on Pinterest"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#E60023] hover:border-[#E60023] transition-colors"
            >
              <Pinterest size={18} />
            </a>

            <a
              href="mailto:lkgco.official@gmail.com"
              aria-label="Email LKG & Co."
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright + Legal */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 LKG &amp; Co.</span>
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
