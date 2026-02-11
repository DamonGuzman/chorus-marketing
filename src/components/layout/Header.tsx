"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo, ChevronIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

const navLinks = [
  { label: "About", href: "/about-us" },
  { label: "Use Cases", href: "/#use-cases", hasDropdown: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-6 md:top-[30px] left-6 right-6 md:left-[30px] md:right-[30px] z-50 h-[35px]">
      <nav className="flex items-center justify-between h-full max-w-[1380px] mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Chorus home" className="text-white hover:opacity-80 transition-opacity">
          <Logo className="w-[30px] h-[29px]" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-[42px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-[7px] text-[14px] leading-[22px] font-medium text-gray-100 hover:text-white transition-colors"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronIcon className="w-[6px] h-[3px] text-gray-100" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop only */}
        <div className="hidden md:block">
          <ButtonLink href={PRIMARY_CTA_HREF} variant="outline" size="md">
            {PRIMARY_CTA_LABEL}
          </ButtonLink>
        </div>

        {/* Hamburger Button - Mobile only */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 -mr-2 text-white hover:text-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <HamburgerIcon className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gray-950/98 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden
        />

        {/* Menu Panel */}
        <div
          className={`absolute inset-0 flex flex-col p-6 pt-8 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-y-0" : "translate-y-[-10px]"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button
              type="button"
              aria-label="Close menu"
              className="p-2 -mr-2 text-white hover:text-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-[7px] text-[18px] leading-[26px] font-medium text-gray-100 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronIcon className="w-[6px] h-[3px] text-gray-100" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-auto pt-8">
            <ButtonLink
              href={PRIMARY_CTA_HREF}
              variant="outline"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
