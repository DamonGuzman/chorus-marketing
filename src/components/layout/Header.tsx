"use client";

import Link from "next/link";
import { Logo, ChevronIcon } from "@/components/icons";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Use Cases", href: "#use-cases", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Press", href: "#press" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-[30px] py-[30px]">
      <nav className="flex items-center justify-between max-w-[1380px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-white hover:opacity-80 transition-opacity">
          <Logo className="w-[30px] h-[29px]" />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-[42px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex items-center gap-[7px] text-sm font-medium text-gray-100",
                "hover:text-white transition-colors"
              )}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronIcon className="w-[6px] h-[3px] text-gray-100" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Badge>Control</Badge>
      </nav>
    </header>
  );
}
