"use client";

import Link from "next/link";
import { Logo, ChevronIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Use Cases", href: "#use-cases", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="absolute top-6 md:top-[30px] left-6 right-6 md:left-[30px] md:right-[30px] z-50 h-[35px]">
      <nav className="flex items-center justify-between h-full max-w-[1380px] mx-auto">
        {/* Logo */}
        <Link href="/" aria-label="Chorus home" className="text-white hover:opacity-80 transition-opacity">
          <Logo className="w-[30px] h-[29px]" />
        </Link>

        {/* Navigation Links */}
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

        {/* CTA Button */}
        <ButtonLink href={PRIMARY_CTA_HREF} variant="outline" size="md">
          {PRIMARY_CTA_LABEL}
        </ButtonLink>
      </nav>
    </header>
  );
}
