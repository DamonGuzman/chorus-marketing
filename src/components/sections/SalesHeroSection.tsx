/* eslint-disable @next/next/no-img-element */
"use client";

import { PRIMARY_CTA_HREF } from "@/content/site";

export function SalesHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Luminous glow – hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[520px] bg-white/10 rounded-full blur-[200px] pointer-events-none" />

      {/* SVG illustration – desktop only: absolute overlay */}
      <div className="hidden md:block absolute top-[57px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-0 pointer-events-none">
        <div className="relative w-full" style={{ aspectRatio: "1440 / 883" }}>
          <object
            data="/images/figma/Group 1707484064.svg"
            type="image/svg+xml"
            className="absolute inset-0 w-full h-full"
            aria-label="Sales Performance Dashboard with AI agents"
          />
          <img
            src="/images/figma/person-laptop.png"
            alt="Person using laptop"
            className="absolute object-cover object-top"
            style={{
              left: "55.97%",
              top: "65%",
              width: "15.39%",
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 pt-20 md:pt-[150px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-4 md:gap-7 max-w-[960px]">
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,white_0%,#cbcbcb_25%,#979797_50%,#646464_75%,#303030_100%)] text-[28px] md:text-[64px] font-bold font-['Urbanist'] leading-tight md:leading-[58px] text-center">
            AI Sales Team That Works 24/7
          </h1>
          <p className="text-center text-[#7d7c83] text-sm md:text-[28px] font-medium font-['Urbanist'] leading-6 md:leading-[44px] max-w-[940px]">
            <span className="md:hidden">The capabilities that let you direct instead of micromanage</span>
            <span className="hidden md:inline">Automate prospecting, enrichment, outreach, follow-ups, CRM
            updates, and reporting — without hiring SDRs.</span>
          </p>

          {/* CTA button – mobile only */}
          <a
            href={PRIMARY_CTA_HREF}
            className="md:hidden mt-1 h-11 px-7 py-2.5 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
          >
            <span className="text-white text-sm font-bold font-['Urbanist']">
              Build Your Team Now
            </span>
          </a>
        </div>
      </div>

      {/* SVG illustration – mobile only: flows below text */}
      <div className="md:hidden relative w-full -mt-33 pb-10 pointer-events-none">
        <div className="relative w-[190%] left-1/2 -translate-x-1/2">
          <div className="relative w-full" style={{ aspectRatio: "1440 / 883" }}>
            <object
              data="/images/figma/Group 1707484064.svg"
              type="image/svg+xml"
              className="absolute inset-0 w-full h-full"
              aria-label="Sales Performance Dashboard with AI agents"
            />
            <img
              src="/images/figma/person-laptop.png"
              alt="Person using laptop"
              className="absolute object-cover object-top"
              style={{
                left: "55.97%",
                top: "65%",
                width: "15.39%",
              }}
            />
            <img
              src="/images/figma/salesstrategyagent.svg"
              alt="Sales Strategy Agent"
              className="absolute"
              style={{
                right: "26%",
                top: "38%",
                width: "22%",
              }}
            />
            <img
              src="/images/figma/leadresearchagent.svg"
              alt="Lead Research Agent"
              className="absolute"
              style={{
                left: "26%",
                bottom: "-8%",
                width: "22%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Spacer – desktop only (SVG is absolute so section needs explicit height) */}
      <div className="hidden md:block h-[620px]" />
    </section>
  );
}
