"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo, ChevronIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";


const navLinks = [
  { label: "About", href: "/about-us", hasDropdown: false },
  { label: "Pricing", href: "/#pricing", hasDropdown: false },
  { label: "Features", href: "/features", hasDropdown: false },
  { label: "FAQ", href: "/faq", hasDropdown: false },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 19L14 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 md:py-4 px-6 md:px-[30px] header-scrolled"
          : "py-6 md:py-[30px] px-6 md:px-[30px]"
      }`}
    >
      <nav className="flex justify-between items-center w-full max-w-[1380px] h-full mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Chorus home" className="text-white hover:opacity-80 transition-opacity">
          <Logo className="w-[30px] h-[29px]" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex justify-start items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium font-['Urbanist'] leading-5 text-gray-100 hover:text-white transition-colors"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronIcon className="w-1.5 h-[3px] text-white/50" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop only */}
        <div className="hidden md:block">
          <Link
            href={PRIMARY_CTA_HREF}
            className="relative w-28 h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center transition-all duration-200 hover:brightness-125"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]"
            />
            <span
              aria-hidden="true"
              className="cta-orbit-ring cta-orbit-ring--pill"
            />
            <span
              aria-hidden="true"
              className="absolute inset-[1px] rounded-[100px] bg-[#131313]"
            />
            <span className="relative z-10 text-center text-white text-sm font-bold font-['Urbanist'] leading-6">
              {PRIMARY_CTA_LABEL}
            </span>
          </Link>
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
