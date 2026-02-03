import Link from "next/link";
import { Logo, MailIcon, FacebookIcon, XIcon, InstagramIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL, SUPPORT_EMAIL } from "@/content/site";

const footerLinks = {
  about: {
    title: "ABOUT",
    links: [
      { label: "Why Chorus?", href: "#about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  products: {
    title: "PRODUCTS",
    links: [
      { label: "Agent Builder", href: "#features" },
      { label: "Workflows", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  community: {
    title: "COMMUNITY",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Partners", href: "/partners" },
      { label: "Community", href: "/community" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Chorus API", href: "/api" },
      { label: "Status", href: "/status" },
      { label: "Security", href: "/security" },
    ],
  },
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-[100px] py-[75px]">
      <div className="max-w-[1240px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[212px]">
          {/* Brand Column */}
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[42px]">
              <Logo className="w-[49px] h-[47px] text-white" />
              {/* Label: 14px, medium, 22px line-height */}
              <p className="text-[14px] leading-[22px] font-medium text-gray-200 max-w-[354px]">
                Chorus helps teams deploy autonomous agents that coordinate across your tools to turn goals into completed work.
              </p>
            </div>
            <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" size="md">
              {PRIMARY_CTA_LABEL}
            </ButtonLink>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-[78px]">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-[20px]">
                {/* Section Label: 16px, semibold, 24px line-height, uppercase */}
                <h4 className="text-[16px] leading-[24px] font-semibold text-white uppercase font-feature-stylistic">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-[22px]">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] leading-[22px] font-medium text-gray-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-[41px]" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label: 14px, medium, 22px line-height */}
          <p className="text-[14px] leading-[22px] font-medium text-gray-300">
            © {year} chorus Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-[54px]">
            {/* Email */}
            <div className="flex items-center gap-[14px]">
              <MailIcon className="w-6 h-6 text-gray-300" />
              <Link
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-[14px] leading-[22px] font-medium text-gray-300 hover:text-white transition-colors"
              >
                {SUPPORT_EMAIL}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-[16px]">
              <Link href="/facebook" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-[18px] h-[18px]" />
              </Link>
              <Link href="/x" className="text-gray-300 hover:text-white transition-colors" aria-label="X">
                <XIcon className="w-[16px] h-[15px]" />
              </Link>
              <Link href="/instagram" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
