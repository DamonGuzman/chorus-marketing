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
    <footer className="bg-black px-6 py-[50px] md:px-24 md:py-20 md:flex md:flex-col md:items-center">
      <div className="flex flex-col justify-start items-start gap-10">
        <div className="flex flex-col lg:inline-flex lg:flex-row lg:justify-start lg:items-start lg:gap-52 gap-[40px]">
          {/* Logo + description + CTA */}
          <div className="inline-flex flex-col justify-start items-start gap-[32px] md:gap-12">
            <div className="flex flex-col justify-start items-start gap-[24px] md:gap-10">
              <Logo className="w-12 h-12 text-white" />
              <p className="md:w-96 text-sm leading-5 font-medium font-['Urbanist'] text-gray-300">
                Giving modern marketing teams superpowers with short links that stand out.
              </p>
            </div>
            <Link
              href="#"
              className="h-10 px-8 py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] inline-flex justify-start items-center gap-2 overflow-hidden"
            >
              <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">Get started</span>
            </Link>
          </div>

          {/* Link columns — single column on mobile, row on md+ */}
          <div className="flex flex-col gap-[32px] md:flex md:flex-row md:justify-start md:items-start md:gap-20">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="inline-flex flex-col justify-start items-start gap-5">
                <h4 className="text-base leading-6 font-semibold font-['Urbanist'] text-white uppercase">
                  {section.title}
                </h4>
                <div className="flex flex-col justify-start items-start gap-5">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm leading-5 font-medium font-['Urbanist'] text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-[1250px] h-0 outline outline-1 outline-offset-[-0.50px] outline-white/25" />

        {/* Bottom bar */}
        <div className="w-full md:w-[1250px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[24px] md:gap-[32px]">
          <p className="text-sm leading-5 font-medium font-['Urbanist'] text-gray-300">
            © 2026 chorus Ltd. All rights reserved.
          </p>

          <div className="flex items-center justify-between w-full lg:w-auto gap-[30px] md:gap-14">
            <div className="flex items-center gap-3.5 text-gray-300">
              <MailIcon className="w-5 h-5" />
              <Link
                href="mailto:support@vocai.com"
                className="text-sm leading-5 font-medium font-['Urbanist'] text-gray-300 hover:text-white transition-colors"
              >
                support@vocai.com
              </Link>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <Link href="/facebook" className="hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-5 h-4 text-gray-300" />
              </Link>
              <Link href="/x" className="hover:text-white transition-colors" aria-label="X">
                <XIcon className="w-4 h-4 text-gray-300" />
              </Link>
              <Link href="/instagram" className="hover:text-white transition-colors" aria-label="Instagram">
                <img src="/images/icons/instagram.svg" alt="" className="w-5 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
