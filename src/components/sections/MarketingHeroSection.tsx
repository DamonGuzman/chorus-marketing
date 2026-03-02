/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ScrollTextReveal } from "@/components/ui";

function AgentCard({ name, pending = false, icon = "/images/figma/image 41.svg" }: { name: string; pending?: boolean; icon?: string }) {
  return (
    <div className={`w-full p-2.5 ${pending ? "rounded-xl border border-orange-400" : "bg-white/[0.04] rounded-xl"} backdrop-blur-lg flex flex-col gap-2`}>
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="w-7 h-7 rounded-lg shrink-0" />
        <div className="w-1.5 h-1.5 bg-green-700 rounded-full border border-white shrink-0" />
        <div className="flex flex-col min-w-0">
          <span className="text-white text-[9px] font-bold font-['Urbanist'] leading-4">{name}</span>
          <span className="text-[#7D7C83] text-[8px] font-normal font-['Urbanist'] leading-4">3 tasks working in parallel</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-0.5">
          <img src="/images/figma/image 24.svg" alt="" className="w-4 h-4 rounded-full object-cover" />
          <img src="/images/figma/image 24 (4).svg" alt="" className="w-4 h-4 rounded-full object-cover" />
          <img src="/images/figma/image 24 (5).svg" alt="" className="w-4 h-4 rounded-full object-cover" />
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
            <circle cx="5" cy="5" r="4" stroke="#7D7C83" strokeWidth="0.67" />
            <path d="M5 3V5.5L6.5 6.5" stroke="#7D7C83" strokeWidth="0.67" strokeLinecap="round" />
          </svg>
          <span className="text-[#7D7C83] text-[8px] font-normal font-['Urbanist']">1 hr 30 mins</span>
        </div>
      </div>
      <div className="flex items-center justify-between pl-1.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#7D7C83] text-[6.67px] font-normal font-['Urbanist']">Currently working on</span>
          <div className="flex items-center gap-1">
            <div className="w-[3px] h-[3px] bg-violet-500 rounded-full" />
            <span className="text-[#CBCACC] text-[8px] font-semibold font-['Urbanist']">Building Linear Clone</span>
          </div>
        </div>
        {pending && (
          <div className="px-2 py-0.5 bg-red-600/5 rounded-full border border-orange-400/40 flex items-center gap-1">
            <div className="w-[3px] h-[3px] bg-orange-400 rounded-full" />
            <span className="text-[#CBCACC] text-[6.67px] font-bold font-['Urbanist']">Pending</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function MarketingHeroSection() {
  const [openPhase, setOpenPhase] = useState<number | null>(2);

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[940px] bg-black overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/figma/bg-website-min.png.svg')" }}
      />

      {/* Hero content */}
      <div className="relative z-10 pt-24 md:pt-[130px] flex flex-col items-center px-4 md:px-6">
        {/* Main container */}
        <div className="w-full max-w-[1261px] lg:h-[638px] bg-neutral-900 rounded-[20px] md:rounded-[30px] p-2">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0 px-4 md:px-8 lg:px-12 py-6 lg:py-0 h-full">
            {/* Left: Text content */}
            <div className="flex-1 flex flex-col justify-center gap-6 md:gap-9 max-w-[400px] lg:max-w-[380px] shrink-0 h-full">
              <div className="w-28 h-8 px-2.5 py-1 bg-white/5 rounded-full flex justify-center items-center">
                <span className="text-white text-sm font-semibold font-['Urbanist']">Marketing</span>
              </div>
              <ScrollTextReveal
                text="AI Marketing, Executed Seamlessly."
                stagger={150}
                className="text-4xl md:text-6xl font-bold font-['Urbanist'] leading-tight md:leading-[70px]"
              />
              <p className="text-zinc-400 text-base font-light font-['Urbanist'] leading-6">
                Blocks are carefully crafted to help you distill powerful
                messages from your information and data - no matter how
                complex.
              </p>
            </div>

            {/* Right: Sidebar + Agent Workspace */}
            <div className="relative w-full lg:flex-1 flex flex-col items-end lg:pt-8">
              {/* Sidebar behind the card */}
              <div className="hidden lg:block absolute left-0 xl:left-28 top-8 opacity-40 z-0">
                <img src="/images/Sidebar.svg" alt="" className="w-60 xl:w-72" />
              </div>
              {/* Top toolbar */}
              <div className="hidden lg:flex justify-end items-center gap-2.5 mb-4 relative z-10">
                <div className="h-9 px-3 rounded-md border border-white/25 flex justify-center items-center gap-2 overflow-hidden">
                  <img src="/images/figma/call.svg" alt="" className="w-4 h-4" />
                  <img src="/images/figma/arrow-down-01-round.svg" alt="" className="w-3 h-3" />
                </div>
                <div className="h-9 px-3 rounded-md border border-white/25 flex items-center gap-2 overflow-hidden">
                  <img src="/images/figma/user-add--01.svg" alt="" className="w-4 h-4" />
                  <span className="text-[#CBCACC] text-xs font-semibold font-['Inter'] leading-6">Invite</span>
                </div>
                <div className="flex items-center -space-x-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-800 p-[1.5px] relative z-[1]">
                    <img src="/images/figma/image 19.svg" alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-neutral-800 p-[1.5px] relative z-[2]">
                    <img src="/images/figma/Group 1707483916.svg" alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-neutral-800 p-[1.5px] relative z-[3]">
                    <img src="/images/figma/image 19 (2).svg" alt="" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-neutral-600 border-[1.5px] border-neutral-800 flex items-center justify-center relative z-[4]">
                    <span className="text-white text-sm font-normal font-['Inter'] leading-6">+5</span>
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <img src="/images/figma/search.svg" alt="" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="5" cy="10" r="1.2" fill="#7D7C83" />
                    <circle cx="10" cy="10" r="1.2" fill="#7D7C83" />
                    <circle cx="15" cy="10" r="1.2" fill="#7D7C83" />
                  </svg>
                </div>
              </div>

              <div className="relative z-10 w-full lg:w-[480px] xl:w-[511px] bg-neutral-800 rounded-[24px] md:rounded-[35px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.01)] p-3 md:p-4 flex flex-col gap-2">
              <div className="w-full flex items-center justify-between">
                <span className="text-white text-xs font-bold font-['Urbanist']">Agent Workspace</span>
                <div className="px-1.5 py-1 rounded border border-white/25 flex items-center gap-1">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1 2H7M1 4H5M1 6H6" stroke="#7D7C83" strokeWidth="0.75" strokeLinecap="round" />
                  </svg>
                  <span className="text-[#7D7C83] text-[8px] font-semibold font-['Urbanist']">Works</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                {/* Phase 1 - collapsible */}
                <div className="p-2.5 bg-white/[0.04] rounded-xl backdrop-blur-xl flex flex-col gap-2.5">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenPhase(openPhase === 1 ? null : 1)}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                        <img src="/images/figma/diamond.svg" alt="" className="w-3 h-3" />
                      </div>
                      <span className="text-white text-[9px] font-semibold font-['Urbanist']">Phase 1: Pre-Launch (Steps 1-4)</span>
                      <div className="px-1 py-0.5 bg-green-700/20 rounded-sm flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-300/20 flex items-center justify-center">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M1 3L2.5 4.5L5 1.5" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" /></svg>
                        </div>
                        <span className="text-green-300 text-[6.67px] font-semibold font-['Urbanist']">3 agents active</span>
                      </div>
                    </div>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${openPhase === 1 ? "rotate-180" : ""}`}><path d="M1 1L5 5L9 1" stroke="white" strokeWidth="0.67" /></svg>
                  </div>

                  {openPhase === 1 && (
                    <div className="grid grid-cols-2 gap-2.5">
                      <AgentCard name="Content Creation Agent" />
                      <AgentCard name="Social Media Agent" icon="/images/figma/image 41 (2).svg" />
                      <AgentCard name="Email Marketing Agent" pending icon="/images/figma/image 41 (3).svg" />
                      <AgentCard name="Ad Campaign Agent" icon="/images/figma/image 41 (4).svg" />
                    </div>
                  )}
                </div>

                {/* Phase 2 - collapsible with agent cards */}
                <div className="p-2.5 bg-neutral-800 rounded-2xl shadow-[6.67px_6.67px_10px_0px_rgba(0,0,0,0.10)] border border-sky-700/90 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenPhase(openPhase === 2 ? null : 2)}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                        <img src="/images/figma/diamond.svg" alt="" className="w-3 h-3" />
                      </div>
                      <span className="text-white text-[9px] font-semibold font-['Urbanist']">Phase 2: Launch (Steps 1-7)</span>
                    </div>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${openPhase === 2 ? "rotate-180" : ""}`}><path d="M1 1L5 5L9 1" stroke="white" strokeWidth="0.67" /></svg>
                  </div>

                  {openPhase === 2 && (
                    <div className="grid grid-cols-2 gap-2.5">
                      <AgentCard name="Content Creation Agent" />
                      <AgentCard name="Social Media Agent" icon="/images/figma/image 41 (2).svg" />
                      <AgentCard name="Email Marketing Agent" pending icon="/images/figma/image 41 (3).svg" />
                      <AgentCard name="Ad Campaign Agent" icon="/images/figma/image 41 (4).svg" />
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
