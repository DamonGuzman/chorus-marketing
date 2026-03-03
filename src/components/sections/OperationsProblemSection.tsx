/* eslint-disable @next/next/no-img-element */
"use client";

import { ScrollTextReveal, Badge } from "@/components/ui";

export function OperationsProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black" style={{ overflowX: "clip" }}>
      {/* Section header */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6">
          <Badge>The Problem</Badge>
          <div className="flex flex-col items-center gap-8 text-center">
            <ScrollTextReveal
              text="The Problem - What's Broken Today"
              className="text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
            />
            <p className="text-[#7d7c83] text-3xl font-medium font-['Urbanist'] leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Two-column content: problem list + dashboard image */}
        <div className="flex flex-col lg:flex-row lg:h-[602px] gap-12 items-center">
          {/* Left: Problem accordion list */}
          <div className="shrink-0 w-full lg:w-[552px] flex flex-col gap-6">
            {/* Item 1: Too many alerts (collapsed) */}
            <div className="flex items-center gap-5 pl-10">
              <img src="/images/figma/alert-circle.svg" alt="" className="w-6 h-6 shrink-0" />
              <span className="text-[#7d7c83] text-2xl font-bold font-['Urbanist'] leading-[48px]">Too many alerts</span>
            </div>

            {/* Item 2: Downtime issues (expanded card) */}
            <div className="relative w-[640px] max-w-full">
              <div
                className="rounded-[24px] px-[40px] pt-[20px] pb-[40px] flex flex-col gap-[20px] items-start shadow-[0px_2.77px_3.49px_0px_rgba(0,0,0,0.04),0px_6.65px_8.38px_0px_rgba(0,0,0,0.06),0px_12.52px_15.78px_0px_rgba(0,0,0,0.08),0px_22.34px_28.14px_0px_rgba(0,0,0,0.09),0px_41.78px_52.64px_0px_rgba(0,0,0,0.11),0px_100px_126px_0px_rgba(0,0,0,0.15)]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 640 249\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(43.592 22.262 -88.881 26.098 139.59 26.382)\"><stop stop-color=\"rgba(255,255,255,0)\" offset=\"0\"/><stop stop-color=\"rgba(255,255,255,0.1)\" offset=\"1\"/></radialGradient></defs></svg>')" }}
              >
                <div className="flex items-center gap-[20px]">
                  <img src="/images/figma/Email.svg" alt="" className="w-[50px] h-[50px] shrink-0" />
                  <span className="text-white text-2xl font-bold font-['Urbanist'] leading-[48px]">Downtime issues</span>
                </div>
                <p className="text-[#7d7c83] text-base font-bold font-['Urbanist'] leading-6 w-[479px] max-w-full">
                  The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
                </p>
              </div>
              {/* Glow line on the bottom border */}
              <div className="absolute bottom-0 left-0 w-[287px] h-[10px] translate-y-1/2">
                <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-zinc-900 via-purple-500 to-violet-400" />
                <div className="absolute inset-x-0 top-1/2 h-[10px] -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-600/80 to-violet-400/80 blur-[4px]" />
                <div className="absolute right-0 top-1/2 w-[160px] h-[4px] -translate-y-1/2 bg-gradient-to-r from-transparent to-violet-400/50 blur-[2.5px]" />
                <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400/70 to-white/70 mix-blend-overlay" />
                <div className="absolute right-[1px] top-0 w-[120px] h-[120px] bg-gradient-to-r from-transparent to-violet-400/20 rounded-[99px] blur-[24px]" />
              </div>
            </div>

            {/* Item 3: Manual ticket routing (collapsed) */}
            <div className="flex items-center gap-5 pl-10">
              <img src="/images/figma/Playlist-Down.svg" alt="" className="w-[59px] h-[59px] shrink-0" />
              <span className="text-[#7d7c83] text-2xl font-bold font-['Urbanist'] leading-[48px]">Manual ticket routing</span>
            </div>

            {/* Item 4: Security gaps (collapsed) */}
            <div className="flex items-center gap-5 pl-10">
              <img src="/images/figma/Setting.svg" alt="" className="w-[59px] h-[59px] shrink-0" />
              <span className="text-[#7d7c83] text-2xl font-bold font-['Urbanist'] leading-[48px]">Security gaps</span>
            </div>
          </div>

          {/* Right: Dashboard illustration */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/images/figma/Group 1707484108.svg"
              alt="Operations dashboard showing team members, files and AI agents"
              className="w-[806px] max-w-none h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
