import Link from "next/link";
import { Logo, MailIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui";

const footerLinks = {
  about: {
    title: "ABOUT",
    links: [
      { label: "Why Chorus?", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
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
      { label: "Blog", href: "#" },
      { label: "Events", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Community Forum", href: "#" },
    ],
  },
  support: {
    title: "SUPPORT",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Chorus API", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-black px-6 lg:px-[100px] py-[75px]">
      <div className="max-w-[1250px] mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[212px]">
          {/* Brand Column */}
          <div className="flex flex-col gap-[50px]">
            <div className="flex flex-col gap-[42px]">
              <Logo className="w-[49px] h-[47px] text-white" />
              <p className="text-sm font-medium text-gray-300 max-w-[354px] leading-[22px]">
                Giving modern marketing teams superpowers with short links that stand out.
              </p>
            </div>
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-[78px]">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="flex flex-col gap-5">
                <h4 className="text-base font-semibold text-white font-feature-stylistic">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-[22px]">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm font-medium text-gray-300 hover:text-white transition-colors leading-[22px]"
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
          <p className="text-sm font-medium text-gray-300">
            &copy; 2024 Chorus Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-[54px]">
            {/* Email */}
            <div className="flex items-center gap-[14px]">
              <MailIcon className="w-6 h-6 text-gray-300" />
              <span className="text-sm font-medium text-gray-300">
                support@chorus.ai
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <TwitterIcon className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <LinkedInIcon className="w-[18px] h-[18px]" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon className="w-[18px] h-[18px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
