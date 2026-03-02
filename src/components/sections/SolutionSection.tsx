/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";

function AnimatedProgressBar() {
  return (
    <div className="self-stretch h-[5px] relative overflow-hidden rounded-md">
      <div className="w-full h-[5px] absolute left-0 top-0 bg-neutral-700 rounded-md" />
      <div className="h-[5px] absolute left-0 top-0 rounded-md animate-[progressFill_4s_ease-in-out_infinite] overflow-hidden">
        <img
          src="/images/figma/Progress Mask.svg"
          alt=""
          className="h-[5px] w-[200px] object-cover object-left"
        />
      </div>
      <style>{`
        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes cardReveal {
          0% { opacity: 0; transform: translateY(20px); }
          15% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(0); }
          85% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        @keyframes iconPop {
          0% { opacity: 0; transform: scale(0); }
          10% { transform: scale(1.3); }
          15% { opacity: 1; transform: scale(1); }
          70% { opacity: 1; transform: scale(1); }
          85% { opacity: 0; transform: scale(0); }
          100% { opacity: 0; transform: scale(0); }
        }
        @keyframes glowSpin {
          0% { transform: rotateY(0deg); filter: drop-shadow(0 0 4px rgba(239,68,68,0.5)); }
          25% { transform: rotateY(90deg); filter: drop-shadow(0 0 12px rgba(239,68,68,0.9)); }
          50% { transform: rotateY(180deg); filter: drop-shadow(0 0 4px rgba(239,68,68,0.5)); }
          75% { transform: rotateY(270deg); filter: drop-shadow(0 0 12px rgba(239,68,68,0.9)); }
          100% { transform: rotateY(360deg); filter: drop-shadow(0 0 4px rgba(239,68,68,0.5)); }
        }
        @keyframes progressFill {
          0% { width: 0%; }
          60% { width: 75%; }
          80% { width: 75%; }
          100% { width: 0%; }
        }
      `}</style>
    </div>
  );
}

export function SolutionSection() {
  return (
    <div className="self-stretch px-4 md:px-8 lg:px-24 py-10 md:py-20 bg-black flex flex-col justify-start items-center gap-10">
      {/* Header */}
      <div className="w-full max-w-[1240px] flex flex-col justify-start items-start gap-6">
        <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
          <div className="text-center text-white text-base font-semibold font-['Urbanist'] leading-6">The Solution</div>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <ScrollTextReveal
            text="The Chorus Way Manifest Your Team Instantly"
            className="max-w-[1034px] text-2xl md:text-4xl lg:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[50px] lg:leading-[78px]"
          />
          <p className="text-neutral-400 text-sm md:text-base lg:text-xl font-normal font-['Urbanist'] leading-6 md:leading-7 lg:leading-9">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>
      </div>

      {/* Bento cards grid */}
      <div className="w-full max-w-[1240px] hidden md:flex gap-3">
        {/* Column 1: Filter agents card */}
        <div className="w-[38%] shrink-0 px-4 py-6 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-2.5">
            <div className="pt-[3px] flex justify-start items-start gap-2.5">
              <img src="/images/figma/zap.svg" alt="" className="w-6 h-6 animate-[glowSpin_3s_ease-in-out_infinite] drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]" />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <div className="text-white text-lg font-bold font-['Urbanist'] leading-6">Filter the most engaging agents</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-center items-center gap-1">
            <div className="self-stretch inline-flex justify-start items-start gap-1">
              {[
                { name: "Dennis", img: "/images/figma/image.svg" },
                { name: "PR Agent", img: "/images/figma/Group 20963.svg" },
                { name: "Peter", img: "/images/figma/Avatar [1.0].svg" },
                { name: "HR Agent", img: "/images/figma/Group 20963 (1).svg" },
                { name: "David", img: "/images/figma/Avatar [1.0] (1).svg" },
              ].map((item) => (
                <div key={item.name} className="flex-1 h-16 inline-flex flex-col justify-center items-center gap-1">
                  <div className="w-10 h-10 rounded-full outline outline-[3px] outline-zinc-800 overflow-hidden">
                    <img className="w-full h-full object-cover" src={item.img || "https://placehold.co/40x40"} alt={item.name} />
                  </div>
                  <div className="text-neutral-500 text-sm font-medium font-['Urbanist'] leading-6">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch h-12 pl-4 pr-6 pt-2 pb-3 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-[19.77px] shadow-[0px_7px_12px_0px_rgba(0,0,0,0.38)] outline outline-[1.24px] outline-offset-[-1.24px] outline-slate-500/20 flex justify-center items-center overflow-hidden">
            <div className="text-center text-white text-lg font-normal font-['DM_Sans'] leading-5 [text-shadow:_0px_0px_1px_rgb(255_255_255_/_1.00)]">Invite</div>
          </div>
        </div>

        {/* Column 2: Spin up + Pricing stacked */}
        <div className="flex flex-col gap-3 flex-1 min-w-0">
          {/* Spin up card */}
          <div className="flex gap-3 flex-1">
            <div className="flex-1 p-4 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col justify-center items-center gap-3.5 overflow-hidden">
              <img src="/images/figma/Group 1707484005.svg" alt="" className="w-11 h-11" />
              <div className="w-full flex flex-col justify-start items-center gap-1.5">
                <AnimatedProgressBar />
                <div className="text-center text-neutral-400 text-sm font-medium font-['Urbanist'] leading-6">Spin up any role in 60 seconds....</div>
              </div>
            </div>
            {/* Dot grid card */}
            <div className="w-16 shrink-0 px-4 py-2 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col justify-center items-center gap-1 overflow-hidden">
              {[0, 1, 2].map((row) => (
                <div key={row} className="self-stretch flex-1 inline-flex justify-between items-center">
                  <div className={`w-3 h-3 rounded-full ${row === 2 ? "bg-orange-800 shadow-[inset_0px_1.5px_0px_0px_rgba(248,146,129,1.00)]" : "bg-neutral-700 shadow-[inset_0px_1.5px_0px_0px_rgba(241,241,241,0.27)]"}`} />
                  <div className="w-3 h-3 bg-neutral-700 rounded-full shadow-[inset_0px_1.5px_0px_0px_rgba(241,241,241,0.27)]" />
                </div>
              ))}
            </div>
          </div>
          {/* Pricing card */}
          <div className="px-4 py-6 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex justify-start items-center gap-4 overflow-hidden">
            <div className="text-neutral-200 text-3xl font-bold font-['Urbanist'] leading-9">$0.12</div>
            <div className="text-neutral-500 text-sm lg:text-base font-normal font-['Urbanist'] leading-6">
              $0.12/hour per AI agent.
              <br />
              Enterprise level AI performance
            </div>
          </div>
        </div>

        {/* Column 3: Harmony card */}
        <div className="w-[30%] shrink-0 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 overflow-hidden relative flex items-center justify-center">
          <img src="/images/figma/Image (1).svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="relative z-10 p-6 lg:p-8">
            <ScrollTextReveal
              text={["Every role", "in perfect", "Harmony."]}
              className="text-white text-3xl lg:text-5xl font-bold font-['Urbanist'] leading-[42px] lg:leading-[58px] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.09)]"
            />
          </div>
        </div>
      </div>

      {/* Mobile bento cards - stacked */}
      <div className="w-full flex flex-col gap-3 md:hidden">
        {/* Filter agents */}
        <div className="px-4 py-6 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col gap-6 overflow-hidden">
          <div className="inline-flex justify-start items-start gap-2.5">
            <div className="pt-[3px]">
              <img src="/images/figma/zap.svg" alt="" className="w-6 h-6 animate-[glowSpin_3s_ease-in-out_infinite] drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]" />
            </div>
            <div className="text-white text-lg font-bold font-['Urbanist'] leading-6">Filter the most engaging agents</div>
          </div>
          <div className="flex justify-start items-start gap-1">
            {["Dennis", "PR Agent", "Peter", "HR Agent", "David"].map((name) => (
              <div key={name} className="flex-1 flex flex-col justify-center items-center gap-1">
                <div className="w-10 h-10 relative rounded-full outline outline-[3px] outline-zinc-800 bg-neutral-700">
                  <img className="w-10 h-10 absolute rounded-full" src="https://placehold.co/40x40" alt={name} />
                </div>
                <div className="text-neutral-500 text-xs font-medium font-['Urbanist'] leading-5">{name}</div>
              </div>
            ))}
          </div>
          <div className="h-12 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-[19.77px] shadow-[0px_7px_12px_0px_rgba(0,0,0,0.38)] outline outline-[1.24px] outline-offset-[-1.24px] outline-slate-500/20 flex justify-center items-center overflow-hidden">
            <div className="text-white text-lg font-normal font-['DM_Sans'] leading-5">Invite</div>
          </div>
        </div>

        {/* Spin up + Dots row */}
        <div className="flex gap-3">
          <div className="flex-1 p-4 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col justify-center items-center gap-3 overflow-hidden">
            <div className="w-11 h-11 bg-white/5 rounded-2xl border border-white/20" />
            <AnimatedProgressBar />
            <div className="text-center text-neutral-400 text-xs font-medium font-['Urbanist'] leading-5">Spin up any role in 60 seconds....</div>
          </div>
          <div className="w-16 shrink-0 px-4 py-2 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex flex-col justify-center items-center gap-1 overflow-hidden">
            {[0, 1, 2].map((row) => (
              <div key={row} className="self-stretch flex-1 inline-flex justify-between items-center">
                <div className={`w-3 h-3 rounded-full ${row === 2 ? "bg-orange-800 shadow-[inset_0px_1.5px_0px_0px_rgba(248,146,129,1.00)]" : "bg-neutral-700 shadow-[inset_0px_1.5px_0px_0px_rgba(241,241,241,0.27)]"}`} />
                <div className="w-3 h-3 bg-neutral-700 rounded-full shadow-[inset_0px_1.5px_0px_0px_rgba(241,241,241,0.27)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="px-4 py-6 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 flex justify-start items-center gap-4 overflow-hidden">
          <div className="text-neutral-200 text-3xl font-bold font-['Urbanist'] leading-9">$0.12</div>
          <div className="text-neutral-500 text-sm font-normal font-['Urbanist'] leading-6">
            $0.12/hour per AI agent.
            <br />
            Enterprise level AI performance
          </div>
        </div>

        {/* Harmony */}
        <div className="h-48 bg-neutral-900 rounded-3xl shadow-[0px_0px_0px_6px_rgba(0,0,0,1.00)] outline outline-1 outline-neutral-700 overflow-hidden relative flex items-end">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-600/20" />
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-orange-500/15 via-rose-500/10 to-transparent" />
          <div className="relative z-10 p-6">
            <ScrollTextReveal
              text={["Every role", "in perfect", "Harmony."]}
              className="text-white text-3xl font-bold font-['Urbanist'] leading-[42px] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.09)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom two feature cards */}
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-4 md:gap-6">
        {/* Feature card 1: Timeline */}
        <div className="flex-1 bg-white/5 rounded-3xl p-5 md:p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl md:text-2xl font-bold font-['Urbanist'] leading-tight">One direction cascades automatically</h3>
            <p className="text-neutral-400 text-sm md:text-base font-medium font-['Urbanist'] leading-6">The best way to reach humans instead of spam folders</p>
          </div>
          <div className="w-full px-3 md:px-4 pt-6 md:pt-8 pb-3 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-[19.77px] shadow-[0px_7px_12px_0px_rgba(0,0,0,0.38)] outline outline-[1.24px] outline-offset-[-1.24px] outline-slate-500/20 flex flex-col items-start overflow-hidden">
            {[
              { time: "2 hours ago", title: "Phase 1: Pre-Launch Strategy Complete", desc: "All research, competitive analysis, and strategy documents finalized", dotColor: "bg-green-500", icon: "/images/figma/Group 1707483906.svg" },
              { time: "Feb 7, 2024 (In 8 days)", title: "🎯 Complete all Phase 2 content", desc: "All blog posts, social media content, and email campaigns must be finished", dotColor: "bg-amber-500", icon: "/images/figma/Group 1707483950.svg" },
              { time: "Feb 16, 2024 (In 17 days)", title: "🚀 Phase 3: Launch Execution Begins", desc: "Start launch campaigns, activate ads, begin outreach", dotColor: "bg-neutral-500", icon: "/images/figma/3.svg" },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="flex w-full animate-[cardReveal_7s_ease-in-out_infinite]"
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                {/* Timeline column */}
                <div className="w-[22px] shrink-0 relative flex justify-center">
                  {idx < 2 && <div className="absolute left-1/2 -translate-x-px border-l border-dashed border-white/25" style={{ top: "calc(50% + 11px)", bottom: 0 }} />}
                  {idx > 0 && <div className="absolute left-1/2 -translate-x-px border-l border-dashed border-white/25" style={{ top: 0, bottom: "calc(50% + 11px)" }} />}
                  <div
                    className="w-[22px] h-[22px] shrink-0 flex items-center justify-center relative z-10 self-center -mt-4 animate-[iconPop_7s_ease-in-out_infinite]"
                    style={{ animationDelay: `${idx * 0.8 + 0.3}s` }}
                  >
                    {idx === 2 ? (
                      <div className="w-[22px] h-[22px] rounded-full bg-neutral-600 shadow-[inset_0px_2px_4px_rgba(255,255,255,0.15)] border border-neutral-500 flex items-center justify-center">
                        <img src={item.icon} alt="" className="w-2 h-2.5" />
                      </div>
                    ) : (
                      <img src={item.icon} alt="" className="w-[22px] h-[22px] shrink-0 object-cover object-left" />
                    )}
                  </div>
                </div>
                {/* Connector + Content */}
                <div className="flex items-center flex-1 min-w-0 pb-3">
                  <div className="w-5 h-px shrink-0" style={{ backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 3px, transparent 3px, transparent 6px)" }} />
                  <div className="flex-1 min-w-0">
                    <div className="p-4 bg-white/5 rounded-2xl flex flex-col gap-3">
                      <div className="text-neutral-400 text-xs font-medium font-['Urbanist'] leading-4">{item.time}</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="text-white text-sm font-bold font-['Urbanist'] leading-6 line-clamp-1">{item.title}</div>
                        <div className="text-neutral-400 text-xs font-medium font-['Urbanist'] leading-4">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature card 2: Agents */}
        <div className="flex-1 bg-white/5 rounded-3xl p-5 md:p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl md:text-2xl font-bold font-['Urbanist'] leading-tight">Full productivity from minute one</h3>
            <p className="text-neutral-400 text-sm md:text-base font-normal font-['Urbanist'] leading-6">The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.</p>
          </div>

          {/* Phase header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-3xl outline outline-1 outline-white/10 flex justify-center items-center">
                <img src="/images/figma/diamond.svg" alt="" className="w-5 h-5" />
              </div>
              <div className="text-white text-sm font-semibold font-['Urbanist']">Phase 2: Launch (Steps 1-7)</div>
            </div>
          </div>

          {/* Agent: Content Creation */}
          <div className="relative rounded-[19.77px] p-[1.5px] overflow-hidden">
            <div className="absolute inset-[-50%] animate-[rotateBorder_3s_linear_infinite]" style={{ background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(139,92,246,0.7) 80%, rgba(139,92,246,1) 90%, transparent 100%)" }} />
          <div className="relative pl-3 md:pl-4 pr-4 md:pr-6 pt-4 md:pt-5 pb-3 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-[19.77px] shadow-[0px_7px_12px_0px_rgba(0,0,0,0.38)] flex items-center">
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <img className="w-9 h-9 rounded-[9.50px]" src="/images/figma/image 41.svg" alt="" />
                <div className="w-2 h-2 bg-green-700 rounded-full border-[0.86px] border-white" />
                <div className="flex flex-col">
                  <div className="text-white text-xs font-bold font-['Urbanist'] leading-5">Content Creation Agent</div>
                  <div className="text-neutral-400 text-[10px] font-normal font-['Urbanist'] leading-5">3 tasks working in parallel</div>
                </div>
                <div className="ml-auto text-neutral-500 text-lg">⋮</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center -space-x-1">
                  <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24.svg" alt="" />
                  <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24 (4).svg" alt="" />
                  <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24 (5).svg" alt="" />
                </div>
                <div className="text-neutral-400 text-[10px] font-normal font-['Urbanist'] leading-5">1 hr 30 mins</div>
              </div>
            </div>
          </div>
          </div>

          {/* Agent: Email Marketing */}
          <div className="relative rounded-xl p-[1.5px] overflow-hidden">
            <div className="absolute inset-[-50%] animate-[rotateBorder_3s_linear_infinite_1s]" style={{ background: "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(251,146,60,0.7) 80%, rgba(251,146,60,1) 90%, transparent 100%)" }} />
          <div className="relative p-3 md:p-4 bg-neutral-900 rounded-xl backdrop-blur-xl flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img className="w-9 h-9 rounded-[9.50px]" src="/images/figma/image 41 (3).svg" alt="" />
              <div className="w-2 h-2 bg-green-700 rounded-full border-[0.86px] border-white" />
              <div className="flex flex-col">
                <div className="text-white text-xs font-bold font-['Urbanist'] leading-5">Email Marketing Agent</div>
                <div className="text-neutral-400 text-[10px] font-normal font-['Urbanist'] leading-5">3 tasks working in parallel</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center -space-x-1">
                <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24.svg" alt="" />
                <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24 (4).svg" alt="" />
                <img className="w-5 h-5 rounded-full border border-neutral-600" src="/images/figma/image 24 (5).svg" alt="" />
              </div>
              <div className="text-neutral-400 text-[10px] font-normal font-['Urbanist'] leading-5">1 hr 30 mins</div>
            </div>
            <div className="pl-2 py-1 pr-2 rounded-lg border border-white/10 flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <div className="text-neutral-400 text-[9px] font-normal font-['Urbanist'] leading-5">Currently working on</div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-purple-500 rounded-full" />
                  <div className="text-neutral-300 text-[10px] font-semibold font-['Urbanist'] leading-5">Building Linear Clone</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-14 h-5 p-[5px] bg-red-600/5 rounded-full outline outline-[0.50px] outline-offset-[-0.50px] outline-orange-400 flex justify-center items-center gap-[5px]">
                  <div className="w-1 h-1 bg-orange-400 rounded-full" />
                  <div className="text-neutral-300 text-[9px] font-bold font-['Urbanist'] leading-4">Pending</div>
                </div>
                <img src="/images/figma/message-02 (1).svg" alt="" className="w-4 h-4 opacity-50" />
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="opacity-50"><path d="M1 1L5 5L1 9" stroke="#7D7C83" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
