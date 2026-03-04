/* eslint-disable @next/next/no-img-element */
"use client";

import { ScrollTextReveal, Badge } from "@/components/ui";

function ReportingCard() {
  return (
    <div className="flex-1 bg-[#1A1A1A] rounded-[20px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[16rem] group/profiles">
        <img src="/images/figma/asset.svg" alt="" className="w-full h-full object-contain mix-blend-lighten transition-all duration-300 group-hover/profiles:scale-110 group-hover/profiles:brightness-125 cursor-pointer" />
      </div>
      <div className="px-10 pb-12 pt-4 flex flex-col items-center gap-2.5 mt-auto">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          Reporting is manual
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Create, craft and share stories together<br />with real time collaboration
        </p>
      </div>
    </div>
  );
}

function CampaignSetupCard() {
  return (
    <div className="flex-1 bg-[#1A1A1A] rounded-[20px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[16rem]">
        {/* Outer orange ring with pulse */}
        <div className="absolute w-[195px] h-[195px] rounded-full border-[1.2px] border-[#FF7706] animate-[pulse-glow_5.6s_ease-in-out_infinite]" />
        {/* Inner dark circle */}
        <div className="absolute w-[150px] h-[150px] rounded-full bg-[radial-gradient(ellipse_at_center,#2a2a2a_0%,#1a1a1a_50%,#0a0a0a_100%)] border border-white/25 shadow-[0px_18px_32px_-8px_rgba(0,0,0,0.40),0px_38px_80px_-12px_rgba(0,0,0,0.25),0px_76px_152px_-16px_rgba(0,0,0,0.15)]" />
        {/* Calendar icon */}
        <div className="relative w-28 h-28 z-10">
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.35; box-shadow: 0 0 12px 2px rgba(255,119,6,0.1); }
            50% { opacity: 1; box-shadow: 0 0 32px 8px rgba(255,119,6,0.5); }
          }
        `}</style>
          {/* Red/orange gradient back */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E5003D] shadow-[inset_0px_1.62px_1.62px_0px_rgba(255,255,255,0.25)]" />
          {/* White/glass front panel */}
          <div
            className="absolute left-0 right-0 bottom-0 h-[75%] rounded-xl bg-white/40 backdrop-blur-[6.08px]"
            style={{
              boxShadow:
                "0px 1.62px 16.23px 0px rgba(0,0,0,0.09), inset 0px 6.49px 4.99px 0px rgba(255,255,255,0.55)",
            }}
          />
          {/* Binding pins */}
          <div className="absolute -top-2 left-[28%] w-1.5 h-4 bg-white rounded-xl shadow-[0px_1.6225931644439697px_2.3527603149414062px_0px_rgba(0,0,0,0.25)]" />
          <div className="absolute -top-2 right-[28%] w-1.5 h-4 bg-white rounded-xl shadow-[0px_1.6225931644439697px_2.3527603149414062px_0px_rgba(0,0,0,0.25)]" />
          {/* Text content */}
          <div className="absolute left-0 right-0 bottom-0 h-[75%] flex flex-col items-center justify-center">
            <span className="text-[#E50000] text-sm font-bold font-['Urbanist']">Sun</span>
            <span className="text-black text-3xl font-bold font-['Urbanist'] leading-none">8</span>
          </div>
        </div>
      </div>
      <div className="px-10 pb-12 pt-4 flex flex-col items-center gap-2.5 mt-auto">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          Campaign setup takes days
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Engage your audience with fun reactions<br />and interactive effects
        </p>
      </div>
    </div>
  );
}

function CrossChannelCard() {
  const people = [
    { name: "Frank Lampard", role: "Product Manager", isAgent: true, avatar: "/images/figma/Ellipse 53.svg" },
    { name: "David Fincher", role: "HR Manager", isAgent: false, avatar: "/images/figma/Ellipse 54.svg" },
    { name: "Jake Williamson", role: "UX Manager", isAgent: true, avatar: "/images/figma/Ellipse 53 (2).svg" },
  ];

  return (
    <div className="flex-1 bg-[#1A1A1A] rounded-[20px] flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer">
      <style>{`
        @keyframes profileReveal {
          0% { opacity: 0; transform: translateY(20px); }
          15% { opacity: 1; transform: translateY(0); }
          70% { opacity: 1; transform: translateY(0); }
          85% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
      <div className="flex-1 flex flex-col gap-4 p-5 pb-0">
        {/* People card */}
        <div className="pl-4 pr-2.5 py-4 bg-zinc-900 rounded-2xl shadow-[0px_0px_55px_0px_rgba(0,0,0,0.50)] flex flex-col gap-4 overflow-hidden">
          {people.map((person, i) => (
            <div
              key={person.name}
              className="flex items-center gap-2.5"
              style={{ animation: `profileReveal 7s ease-in-out ${i * 0.8}s infinite` }}
            >
              <img className="w-7 h-7 rounded-full shrink-0 object-cover" src={person.avatar} alt="" />
              <div className="flex flex-col gap-2.5 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-white text-sm font-bold font-['Urbanist'] leading-6">{person.name}</span>
                  {person.isAgent && (
                    <div className="h-4 p-1.5 bg-[#2C2C2E] rounded outline outline-[0.58px] outline-offset-[-0.58px] outline-white/10 flex items-center gap-1">
                      <span className="text-[#CBCACC] text-[10px] font-semibold font-['Urbanist'] leading-5">AI Agent</span>
                    </div>
                  )}
                </div>
                <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist'] leading-4 truncate">{person.role}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Emoji reactions bar */}
        <style>{`
          @keyframes thumbsUp { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-15deg); } 50% { transform: rotate(10deg); } 75% { transform: rotate(-5deg); } }
          @keyframes rocketLaunch { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px) rotate(-10deg); } }
          @keyframes fireFlicker { 0%,100% { transform: scale(1); } 30% { transform: scale(1.2); } 60% { transform: scale(0.9); } }
          @keyframes boltZap { 0%,100% { opacity: 1; transform: scale(1); } 40% { opacity: 0.4; transform: scale(0.85); } 50% { opacity: 1; transform: scale(1.15); } }
          .emoji-btn:hover .emoji-thumbsUp { animation: thumbsUp 0.6s ease-in-out infinite; }
          .emoji-btn:hover .emoji-rocketLaunch { animation: rocketLaunch 0.6s ease-in-out infinite; }
          .emoji-btn:hover .emoji-fireFlicker { animation: fireFlicker 0.5s ease-in-out infinite; }
          .emoji-btn:hover .emoji-boltZap { animation: boltZap 0.5s ease-in-out infinite; }
        `}</style>
        <div className="flex justify-start">
          <div className="flex gap-2 px-4 py-3 bg-[#1E1E1E] rounded-full">
            {[
              { emoji: "👍", cls: "emoji-thumbsUp" },
              { emoji: "🚀", cls: "emoji-rocketLaunch" },
              { emoji: "🔥", cls: "emoji-fireFlicker" },
              { emoji: "⚡", cls: "emoji-boltZap" },
            ].map((item) => (
              <div
                key={item.emoji}
                className="emoji-btn w-[52px] h-[52px] rounded-full bg-[#232323] flex justify-center items-center shadow-[inset_0px_2px_6px_0px_rgba(0,0,0,0.35),inset_0px_-1px_2px_0px_rgba(255,255,255,0.04),0px_1px_2px_0px_rgba(255,255,255,0.03)] cursor-pointer"
              >
                <span className={`text-center text-xl inline-block ${item.cls}`}>{item.emoji}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 pb-12 pt-4 flex flex-col items-center gap-2.5 mt-auto">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          No cross-channel sync
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Make presentations human and fun again<br />with reactions and emotes
        </p>
      </div>
    </div>
  );
}

export function MarketingProblemSection() {
  return (
    <section className="relative z-0 w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6">
          <Badge>The Problem</Badge>
          <div className="flex flex-col items-center gap-8">
            <ScrollTextReveal
              text="The Problem - What's Broken Today"
              className="text-center text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
            />
            <p className="text-center text-[#7D7C83] text-lg md:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <ReportingCard />
          <CampaignSetupCard />
          <CrossChannelCard />
        </div>
      </div>
    </section>
  );
}
