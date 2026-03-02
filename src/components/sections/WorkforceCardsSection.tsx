/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Section } from "@/components/ui";

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 4L10 8L6 12" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <div className="w-3.5 h-3.5 bg-green-500 rounded-full flex items-center justify-center shrink-0">
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.26" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-[3px]">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1 h-1 bg-neutral-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
}

function CardHeader({ emoji, title, titleSize = "text-xl", href }: { emoji: string; title: string; titleSize?: string; href?: string }) {
  const arrow = (
    <div className="w-9 h-9 p-2.5 bg-gradient-to-b from-white/5 to-white/10 rounded-lg shadow-[0px_0px_0px_1px_rgba(255,255,255,0.25),inset_0px_-1px_0px_0px_rgba(0,0,0,0.20),inset_0px_1px_0px_0px_rgba(255,255,255,0.05)] flex justify-center items-center shrink-0 hover:brightness-125 transition-all">
      <ChevronIcon />
    </div>
  );

  return (
    <div className="self-stretch flex items-center gap-3">
      <div className="w-11 h-11 bg-white/5 rounded-2xl border border-white/20 shrink-0 flex items-center justify-center">
        <span className="text-xl leading-none">{emoji}</span>
      </div>
      <div className="flex-1">
        <div className={`text-white ${titleSize} font-bold font-['Urbanist']`}>{title}</div>
      </div>
      {href ? <Link href={href}>{arrow}</Link> : arrow}
    </div>
  );
}

function SalesCard() {
  return (
    <div className="w-80 md:w-96 shrink-0 snap-start bg-gradient-to-br from-blue-950/70 to-slate-950/70 rounded-[20px] shadow-[0px_0px_40px_20px_rgba(7,13,79,0.05),inset_0px_0px_0px_1px_rgba(255,255,255,0.06),inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] flex flex-col overflow-hidden">
      <div className="px-6 pt-6 flex flex-col gap-6">
        <CardHeader emoji="📊" title="Sales" href="/sales" />
        <p className="text-white text-base font-medium font-['Inter'] leading-6">
          Create, search and modify your issues<br />without leaving your keyboard.
        </p>
        <div className="h-px bg-white/5" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8 pt-6">
        <img src="/images/figma/Frame 1707484839.svg" alt="Sales conversion chart" className="w-full" />
      </div>
    </div>
  );
}

function MarketingCard() {
  const steps = [
    { done: true, text: "Creating 6 AI agents" },
    { done: true, text: "Configuring approval workflows" },
    { done: true, text: "Setting up integration connectors" },
    { done: false, text: "Preparing campaign assets" },
  ];

  return (
    <div className="w-80 md:w-96 shrink-0 snap-start bg-[radial-gradient(ellipse_94%_78%_at_50%_30%,rgba(43,94,180,0.70)_0%,rgba(13,16,35,0.42)_100%)] rounded-[20px] shadow-[0px_0px_40px_20px_rgba(85,0,98,0.10),inset_0px_0px_0px_1px_rgba(255,255,255,0.06),inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] flex flex-col overflow-hidden">
      <div className="px-6 pt-6 flex flex-col gap-6">
        <CardHeader emoji="🎯" title="Marketing" href="/marketing" />
        <p className="text-white text-base font-medium font-['Urbanist'] leading-6">
          Use Google Translate to effortlessly<br />translate into multiple languages
        </p>
        <div className="h-px bg-white/5" />
      </div>

      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        <img src="/images/figma/marketing-bg.svg" alt="" className="absolute inset-0 w-[85%] h-[85%] mx-auto mt-10 object-contain" />

        <div className="relative w-72 pl-5 pr-3 py-3 bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-[18.90px] shadow-[0px_7.09px_11.81px_0px_rgba(0,0,0,0.38)] outline outline-[1.18px] outline-offset-[-1.18px] outline-white/10 flex flex-col justify-center items-start">
          <div className="w-64 flex flex-col justify-start items-start gap-2.5">
            <div className="inline-flex justify-start items-center gap-2.5">
              <img src="/images/figma/Group 1707484005.svg" alt="" className="w-5 h-5" />
              <span className="text-white text-xs font-bold font-['Urbanist'] leading-5">Setting up campaign infrastructure...</span>
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              {steps.filter(s => s.done).map(({ text }, idx) => (
                <div
                  key={text}
                  className="w-64 p-2.5 bg-white/5 rounded-[10px] outline outline-[0.84px] outline-offset-[-0.84px] outline-white/10 inline-flex justify-start items-center gap-2 animate-[stepReveal_7s_ease-in-out_infinite]"
                  style={{ animationDelay: `${idx * 0.6}s` }}
                >
                  <div className="animate-[stepIconPop_7s_ease-in-out_infinite]" style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}>
                    <CheckCircle />
                  </div>
                  <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist'] leading-5 line-clamp-3">{text}</span>
                </div>
              ))}
              <img
                src="/images/figma/Frame 1707484474.svg"
                alt="Preparing campaign assets"
                className="w-64 animate-[stepReveal_7s_ease-in-out_infinite]"
                style={{ animationDelay: `${steps.filter(s => s.done).length * 0.6}s` }}
              />
            </div>
            <style>{`
              @keyframes stepReveal {
                0% { opacity: 0; transform: translateY(12px); }
                12% { opacity: 1; transform: translateY(0); }
                70% { opacity: 1; transform: translateY(0); }
                85% { opacity: 0; transform: translateY(-8px); }
                100% { opacity: 0; transform: translateY(12px); }
              }
              @keyframes stepIconPop {
                0% { opacity: 0; transform: scale(0); }
                8% { transform: scale(1.3); }
                14% { opacity: 1; transform: scale(1); }
                70% { opacity: 1; transform: scale(1); }
                85% { opacity: 0; transform: scale(0); }
                100% { opacity: 0; transform: scale(0); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceCard() {
  return (
    <div className="w-80 md:w-96 shrink-0 snap-start bg-[radial-gradient(ellipse_30%_40%_at_52%_37%,#0D6E30_0%,#083518_100%)] rounded-[20px] shadow-[0px_0px_40px_20px_rgba(46,212,105,0.05),inset_0px_0px_0px_1px_rgba(255,255,255,0.06),inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] flex flex-col overflow-hidden">
      <div className="px-6 pt-6 flex flex-col gap-6">
        <CardHeader emoji="🌟" title="Finance" titleSize="text-2xl" href="/finance" />
        <p className="text-white text-base font-medium font-['Urbanist'] leading-6">
          Search for music and podcasts, browse<br />your library, and control playback.
        </p>
        <div className="h-px bg-white/5" />
      </div>

      <div className="flex-1 relative flex flex-col px-5 pt-5 pb-4 gap-3">
        <img src="/images/figma/image 46.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img
          src="/images/figma/Task.svg"
          alt="Finance task overview"
          className="relative w-full animate-[stepReveal_7s_ease-in-out_infinite]"
          style={{ animationDelay: "0s" }}
        />

        <div
          className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2.5 animate-[stepReveal_7s_ease-in-out_infinite]"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="animate-[stepIconPop_7s_ease-in-out_infinite]" style={{ animationDelay: "0.8s" }}>
            <CheckCircle />
          </div>
          <span className="text-[#CBCACC] text-sm font-semibold font-['Urbanist'] leading-6">Initializing analytics dashboard</span>
        </div>

        <img
          src="/images/figma/Frame 1707484474.svg"
          alt="Preparing campaign assets"
          className="w-full animate-[stepReveal_7s_ease-in-out_infinite]"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </div>
  );
}

function OperationsCard() {
  const members = [
    { name: "Chris Hemsworth", role: "Technical Architech", indent: false, img: "/images/figma/Ellipse 808.svg" },
    { name: "Steve Jan", role: "UX Designer", indent: true, img: "/images/figma/Ellipse 810.svg" },
    { name: "David Fincher", role: "Project Manager", indent: false, img: "/images/figma/Ellipse 54.svg" },
  ];

  return (
    <div className="w-80 md:w-96 shrink-0 snap-start bg-[radial-gradient(ellipse_94%_78%_at_50%_30%,rgba(39,61,180,0.70)_0%,rgba(15,9,38,0.40)_100%)] rounded-[20px] shadow-[0px_0px_40px_20px_rgba(85,0,98,0.10),inset_0px_0px_0px_1px_rgba(255,255,255,0.06),inset_0px_1px_0px_0px_rgba(255,255,255,0.10)] flex flex-col overflow-hidden">
      <div className="px-6 pt-6 flex flex-col gap-6">
        <CardHeader emoji="🚀" title="Operations" titleSize="text-2xl" href="/operations" />
        <p className="text-white text-base font-medium font-['Urbanist'] leading-6">
          Navigate your open tabs or search<br />through your browser history.
        </p>
        <div className="h-px bg-white/5" />
      </div>

      <div className="flex-1 relative overflow-hidden px-5 pt-5 pb-4">
        <div className="flex flex-col gap-3">
          {members.map((member) => (
            <div key={member.name} className={member.indent ? "ml-7" : ""}>
              <div className="bg-gradient-to-b from-stone-950 via-zinc-700/30 to-stone-950 rounded-[20px] shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] border border-slate-500/20 px-3 py-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img className="w-11 h-11 rounded-full shrink-0" src={member.img} alt="" />
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-xs font-bold font-['Urbanist'] leading-6">{member.name}</span>
                        <div className="w-1 h-1 bg-green-500 rounded-full" />
                        <span className="text-[#CBCACC] text-xs font-bold font-['Urbanist'] leading-4">Active</span>
                      </div>
                      <div className="h-7 px-3 py-1.5 relative bg-white/5 rounded-2xl flex items-center overflow-hidden">
                        <div className="absolute w-12 h-12 left-1/2 -top-3 -translate-x-1/2 opacity-50 rounded-full bg-purple-600/0 blur-lg" />
                        <span className="relative text-white text-xs font-medium font-['Urbanist'] leading-4">{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function WorkforceCardsSection() {
  return (
    <Section
      className="self-stretch px-4 md:px-8 lg:px-24 py-10 md:py-20 bg-black flex flex-col justify-start items-center overflow-hidden"
      id="workforce-cards"
    >
      <div className="w-full max-w-[1240px] flex flex-col justify-start items-start gap-6">
        <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
          <span className="text-center text-white text-base font-semibold font-['Urbanist'] leading-6">Capabilities</span>
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <h2 className="max-w-[1034px] text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
            What Your AI Workforce Can Do
          </h2>
          <p className="text-[#CBCACC] text-base md:text-xl font-normal font-['Urbanist'] leading-7 md:leading-9">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mt-10 md:mt-14">
        <div
          className="flex gap-6 md:gap-11 overflow-x-auto py-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <SalesCard />
          <MarketingCard />
          <FinanceCard />
          <OperationsCard />
        </div>
      </div>
    </Section>
  );
}
