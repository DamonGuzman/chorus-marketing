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
    <div className="w-full self-stretch px-24 py-20 bg-black inline-flex flex-col justify-start items-center gap-2.5">
      <div className="w-full flex flex-col justify-between gap-10">
        <div className="inline-flex justify-between gap-52">
          <div className="inline-flex flex-col justify-start items-start gap-12">
            <div className="flex flex-col justify-start items-start gap-10">
              <img src="/images/figma/footer/Vector.png" />
              <div className="w-96 justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5"> Giving modern marketing teams superpowers with short links that stand out.</div>
            </div>
            <div className="h-10 px-8 py-3 sm:bg-gradient-to-l sm:from-violet-400 sm:to-violet-500 md:bg-white rounded-[50px] sm:shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] md:shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] inline-flex justify-start items-center gap-2 overflow-hidden">
              <div className="text-center justify-center text-black text-sm font-bold font-['Urbanist'] leading-6">Get started</div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-20">
            <div className="inline-flex flex-col justify-start items-start gap-5">
              <div className="justify-start text-White text-base font-semibold font-['Urbanist'] leading-6">ABOUT</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Why VocAI?</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Careers</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Press</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Privacy Policy</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Terms &amp; Conditions</div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-5">
              <div className="justify-start text-White text-base font-semibold font-['Urbanist'] leading-6">PRODUCTS</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Marketing Platform</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Sales Platform</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Client Management </div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">CMS</div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-5">
              <div className="justify-start text-White text-base font-semibold font-['Urbanist'] leading-6">COMMUNITY</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Blog</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Events</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Partners</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Community Forum</div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-5">
              <div className="justify-start text-White text-base font-semibold font-['Urbanist'] leading-6">SUPPORT</div>
              <div className="flex flex-col justify-start items-start gap-5">
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Help Center</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Contact us</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">VocAI API</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Integrations</div>
                <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">Legal</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-white/25"></div>
        <div className="w-full inline-flex justify-between gap-[706px]">
          <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">© 2024 VocAI Ltd. All rights reserved.</div>
          <div className="flex justify-start items-start gap-14">
            <div className="flex justify-start items-center gap-3.5">
              <div className="w-5 h-5 relative">
                <img src={"/images/figma/footer/sms.svg"} />
              </div>
              <div className="justify-start text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-5">support@vocai.com</div>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="w-5 h-4 relative">
                <div data-color="Negative" data-platform="Facebook" className="w-5 h-4 left-0 top-0 absolute overflow-hidden">
                  <img src="/images/figma/footer/fb.svg" />
                </div>
              </div>
              <div className="w-4 h-4 relative">
                <div data-color="Negative" data-platform="X (Twitter)" className="w-4 h-4 left-0 top-0 absolute overflow-hidden">
                  <img src="/images/figma/footer/thread.svg" />
                </div>
              </div>
              <div className="w-5 h-4 relative">
                <div data-color="Negative" data-platform="Instagram" className="w-5 h-4 left-0 top-0 absolute overflow-hidden">
                  <img src="/images/figma/footer/instagram.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
