import Link from "next/link";
import { Logo, MailIcon, FacebookIcon, XIcon } from "@/components/icons";

const footerLinks = {
  about: {
    title: "ABOUT",
    links: [


      { label: "Why VocAI?", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
  products: {
    title: "PRODUCTS",
    links: [

      { label: "Marketing Platform", href: "#" },
      { label: "Sales Platform", href: "#" },
      { label: "Client Management", href: "#" },
      { label: "CMS", href: "#" },
    ],
  },
  community: {
    title: "COMMUNITY",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Partners", href: "/partners" },
      { label: "Community Forum", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact us", href: "/contact" },
      { label: "VocAI API", href: "/api" },
      { label: "Integrations", href: "#integrations" },
      { label: "Legal", href: "/terms" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-black px-6 py-[50px] md:px-[96px] md:py-[80px]">
      <div className="w-full flex flex-col gap-[40px]">
        <div className="flex flex-col lg:flex-row items-start gap-[40px] md:gap-[80px] lg:gap-[208px]">
          {/* Logo + description + CTA */}
          <div className="flex flex-col items-start gap-[32px] md:gap-[48px]">
            <div className="flex flex-col items-start gap-[24px] md:gap-[40px]">
              <Logo className="w-[48px] h-[48px] text-white" />
              <p className="max-w-[380px] text-[14px] leading-[20px] font-medium text-gray-200">
                Giving modern marketing teams superpowers with short links that stand out.
              </p>
            </div>
            <Link
              href="#"
              className="h-[40px] px-[32px] bg-gradient-primary rounded-[50px] shadow-glow inline-flex items-center justify-center text-white text-[14px] leading-[24px] font-bold"
            >
              Get started
            </Link>
          </div>

          {/* Link columns — single column on mobile, row on md+ */}
          <div className="flex flex-col gap-[32px] md:flex-row md:items-start md:gap-[80px]">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col items-start gap-[16px] md:gap-[20px]">
                <h4 className="text-[16px] leading-[24px] font-semibold text-white uppercase">
                  {section.title}
                </h4>
                <div className="flex flex-col items-start gap-[14px] md:gap-[20px]">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] leading-[20px] font-medium text-gray-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/25" />

        {/* Bottom bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[24px] md:gap-[32px]">
          <p className="text-[14px] leading-[20px] font-medium text-gray-200">
            © 2026 chorus Ltd. All rights reserved.
          </p>

          <div className="flex items-center justify-between w-full lg:w-auto gap-[30px] md:gap-[56px]">
            <div className="flex items-center gap-[14px] text-gray-200">
              <MailIcon className="w-[20px] h-[20px]" />
              <Link
                href="mailto:support@vocai.com"
                className="text-[14px] leading-[20px] font-medium hover:text-white transition-colors"
              >
                support@vocai.com
              </Link>
            </div>

            <div className="flex items-center gap-[16px] text-gray-200">
              <Link href="/facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-[20px] h-[16px] text-gray-200" />
              </Link>
              <Link href="/x" className="hover:text-white transition-colors" aria-label="X">
                <XIcon className="w-[16px] h-[16px] text-gray-200" />
              </Link>
              <Link href="/instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                <img src="/images/icons/instagram.svg" alt="" className="w-[20px] h-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
