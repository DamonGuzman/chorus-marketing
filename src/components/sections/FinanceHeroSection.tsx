/* eslint-disable @next/next/no-img-element */
"use client";

import { PRIMARY_CTA_HREF } from "@/content/site";

export function FinanceHeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[940px] bg-black overflow-hidden">
      {/* Blurred glow center */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-300/80 rounded-full blur-[280px]" />

      {/* Concentric orbital circles */}
      <div className="absolute left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] md:w-[935px] md:h-[911px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/5 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[390px] md:w-[736px] md:h-[717px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/10 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[82%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[310px] h-[300px] md:w-[584px] md:h-[569px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/20 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Title */}
      <div className="relative z-10 pt-16 md:pt-[120px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-[1229px]">
          <h1 className="text-3xl md:text-6xl font-bold font-['Urbanist'] leading-tight md:leading-[74px] text-center">
            <span className="text-white">AI Finance </span>
            <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">Team </span>
            <span className="text-white/50">That Handles Reporting, Forecasting &amp; Compliance</span>
          </h1>
          <a
            href={PRIMARY_CTA_HREF}
            className="h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
          >
            <span className="text-center text-white text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
          </a>
        </div>
      </div>

      {/* Dashboard visual – centered on the orbits */}
      <div className="absolute left-[53%] top-[60%] -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[650px] lg:w-[850px]">
        <img
          src="/images/figma/Group 1707484149.svg"
          alt="AI Finance dashboard"
          className="w-full h-auto"
        />
      </div>

      {/* Left-side cards */}
      <div className="absolute left-[5%] lg:left-[8%] top-[55%] -translate-y-1/2 z-10 hidden md:flex flex-col items-start gap-4">
        <img
          src="/images/figma/test (2).svg"
          alt="Finance Agent card"
          className="w-[160px] md:w-[280px] lg:w-[320px] h-auto"
        />
        <div className="w-[120px] md:w-[180px] lg:w-[210px] rounded-2xl border border-white/15 p-2 bg-white/5 backdrop-blur-sm flex items-center justify-center ml-12 md:ml-20 lg:ml-24">
          <img
            src="/images/figma/Group 238031.svg"
            alt="Finance stats"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right-side card */}
      <div className="absolute right-15 top-[65%] -translate-y-1/2 z-10 w-[160px] md:w-[280px] lg:w-[320px] hidden md:block">
        <img
          src="/images/figma/test (1).svg"
          alt="Finance Agent card"
          className="w-full h-auto"
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-[5]" />
    </section>
  );
}
