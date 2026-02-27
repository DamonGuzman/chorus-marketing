/* eslint-disable @next/next/no-img-element */
"use client";

import { PRIMARY_CTA_HREF } from "@/content/site";

export function FinanceHeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[940px] bg-black overflow-hidden">
      {/* Blurred glow center */}
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-300/80 rounded-full blur-[280px]" />

      {/* Concentric orbital circles */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] md:w-[935px] md:h-[911px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/5 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[390px] md:w-[736px] md:h-[717px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/10 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[310px] h-[300px] md:w-[584px] md:h-[569px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/20 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Title */}
      <div className="relative z-10 pt-24 md:pt-[150px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-8 md:gap-12 max-w-[1229px]">
          <h1 className="text-white text-3xl md:text-6xl font-bold font-['Urbanist'] leading-tight md:leading-[74px] text-center">
            AI Finance Team That Handles Reporting, Forecasting &amp; Compliance
          </h1>
          <a
            href={PRIMARY_CTA_HREF}
            className="h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
          >
            <span className="text-center text-white text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
          </a>
        </div>
      </div>

      {/* Dashboard visual */}
      <div className="relative z-10 mt-8 md:mt-14 flex justify-center px-4">
        <div className="relative w-full max-w-[690px]">
          {/* Tilted background panels */}
          <div className="absolute -left-2 top-4 w-full h-full bg-zinc-300/5 rounded-[54px]" />
          <div className="absolute left-2 -top-2 w-full h-full bg-zinc-300/10 rounded-[54px]" />

          {/* Main dashboard card */}
          <div className="relative w-full bg-zinc-900/90 rounded-[30px] border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl p-6 md:p-8">
            {/* Window controls */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-amber-300 rounded-full" />
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
            </div>

            {/* Chart area */}
            <div className="w-full h-48 md:h-64 bg-gradient-to-br from-emerald-950/40 to-zinc-950/60 rounded-xl flex items-end justify-center gap-3 px-6 pb-6">
              {[60, 45, 70, 35, 55, 40, 65, 50, 75, 30, 60, 45].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-stretch gap-0">
                  <div className="w-full rounded-t-sm bg-emerald-500/70" style={{ height: `${h}%` }} />
                  <div className="w-full rounded-b-sm bg-emerald-800/40" style={{ height: `${100 - h}%` }} />
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { label: "Revenue", value: "$2.4M", color: "emerald" },
                { label: "Expenses", value: "$1.1M", color: "red" },
                { label: "Profit", value: "$1.3M", color: "emerald" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-xl border border-white/10 p-3 flex flex-col gap-1">
                  <span className="text-white/50 text-xs font-medium font-['Urbanist']">{stat.label}</span>
                  <span className="text-white text-lg font-bold font-['Urbanist']">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
