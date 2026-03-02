/* eslint-disable @next/next/no-img-element */

import { PRIMARY_CTA_HREF } from "@/content/site";

export function SalesProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black">
      {/* Section header */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="relative w-36 h-9 rounded-[100px] overflow-hidden hidden md:inline-flex justify-center items-center">
            <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
            <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
            <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
            <span className="relative z-10 text-white text-base font-bold font-['Urbanist'] leading-6">The Problem</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-white text-2xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px] text-center md:text-left">
                The Problem - What&apos;s Broken<br className="md:hidden" /> Today
              </h2>
              <p className="text-gray-300 text-sm md:text-2xl font-medium font-['Urbanist'] leading-5 md:leading-9 text-center md:text-left">
                <span className="md:hidden">The Difference That Changes Everything</span>
                <span className="hidden md:inline">Automate prospecting, enrichment, outreach, follow-ups, CRM updates</span>
              </p>
            </div>
            <a
              href={PRIMARY_CTA_HREF}
              className="shrink-0 h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] hidden md:flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
            >
              <span className="text-white text-sm font-bold font-['Urbanist']">Build Your Team Now</span>
            </a>
          </div>
        </div>

        {/* Problem cards */}
        <div className="flex flex-col gap-6 mt-4">
          {/* Card 1: CRM always outdated - full width */}
          <div className="bg-stone-950 rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center py-6 lg:py-0 px-6 lg:pl-[108px] lg:pr-0">
              <div className="flex flex-col items-center gap-4 md:gap-7">
                <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                  <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                  <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                  <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                  <span className="relative z-10 text-center text-white text-base font-semibold font-['Urbanist'] leading-6">
                    CRM always outdated
                  </span>
                </div>
                <div className="px-3.5 flex flex-col items-center">
                  <h3 className="w-full max-w-[509px] text-center text-zinc-100 text-lg md:text-5xl font-bold font-['Urbanist'] leading-snug md:leading-[48px]">
                    <span className="md:hidden">Important customer insights<br />never make it into the system.</span>
                    <span className="hidden md:inline">Important customer insights never make it into the system.</span>
                  </h3>
                </div>
                <div className="w-full max-w-[493px] px-5 flex flex-col items-center">
                  <p className="text-center text-zinc-400 text-xs md:text-lg font-light font-['Urbanist'] leading-5 md:leading-7">
                    Blocks are carefully crafted to help you distill powerful messages from your information and data - no matter how complex.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden -mt-8 md:mt-0 min-h-[300px] md:min-h-0">
              <img
                src="/images/figma/Container_prob.svg"
                alt=""
                className="absolute h-auto"
                style={{ top: "14px", left: "3.88%", width: "92%" }}
                aria-hidden="true"
              />
              <img
                src="/images/figma/Container_prob.svg"
                alt="Analytics dashboard showing growth metrics"
                className="relative h-auto"
                style={{
                  marginTop: "14px",
                  marginLeft: "4.09%",
                  width: "97%",
                }}
              />
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 2: SDR Burnout - fills remaining width */}
            <div className="flex-1 min-w-0 bg-[#101010] rounded-[20px] overflow-hidden flex flex-col">
              <div className="pt-4 flex flex-col items-center gap-2 md:gap-4">
                <div className="w-full h-[280px] md:h-[349px] relative overflow-hidden order-2 md:order-1">
                  <img
                    src="/images/figma/sale.svg"
                    alt="Dashboard showing app users analytics and metrics"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <div className="w-full px-6 pt-6 pb-10 md:px-14 md:pt-10 md:pb-16 flex flex-col gap-4 md:gap-4 items-center md:items-start order-1 md:order-2">
                  <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                    <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                    <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                    <span className="relative z-10 text-white text-base font-semibold font-['Urbanist'] leading-6">
                      SDR Burnout
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-[29px]">
                    <h3 className="max-w-[403px] text-zinc-100 text-xl md:text-4xl font-bold font-['Satoshi'] leading-snug md:leading-10 text-center md:text-left">
                      Repetitive outreach and endless follow-ups drain motivation.
                    </h3>
                    <p className="max-w-[372px] text-zinc-400 text-sm md:text-lg font-light font-['Satoshi'] leading-5 md:leading-7 text-center md:text-left">
                      Blocks are responsive and designed to be customised easily. No matter how you edit, they will always look stunning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Manual lead research - fixed 589px */}
            <div className="lg:w-[589px] lg:shrink-0 bg-[#101010] rounded-[20px] overflow-hidden flex flex-col">
              <div className="pt-4 flex flex-col items-center gap-2 md:gap-4">
                <div className="w-full h-[280px] md:h-[349px] relative overflow-hidden order-2 md:order-1">
                  <img
                    src="/images/figma/sales_lead_search.svg"
                    alt="Tool icons grid showing Salesforce, HubSpot, Mailchimp, and more"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <div className="w-full px-6 pt-6 pb-6 md:px-14 md:pt-10 md:pb-16 flex flex-col gap-4 items-center md:items-start order-1 md:order-2">
                  <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                    <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                    <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                    <span className="relative z-10 text-white text-base font-semibold font-['Urbanist'] leading-6">
                      Manual lead research
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-[46px]">
                    <h3 className="text-zinc-100 text-xl md:text-4xl font-bold font-['Urbanist'] leading-snug md:leading-10 text-center md:text-left">
                      Prospecting requires jumping between LinkedIn, spreadsheets, and CRMs.
                    </h3>
                    <p className="max-w-[400px] text-zinc-400 text-sm md:text-lg font-light font-['Satoshi'] leading-5 md:leading-7 tracking-[-0.18px] text-center md:text-left">
                      Simply paste a link to any of the hundreds of tools you use and Chronicle will seamlessly package your outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
