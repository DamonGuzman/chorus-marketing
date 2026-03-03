/* eslint-disable @next/next/no-img-element */
"use client";

import { ScrollTextReveal, Badge, AnimateOnScroll } from "@/components/ui";

function CheckCircleGreen() {
  return (
    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shrink-0">
      <svg width="11" height="8" viewBox="0 0 14 10" fill="none">
        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
          className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
}

function FinanceDashboardVisual() {
  return (
    <div
      className="w-full max-w-[653px] h-full bg-stone-950 rounded-[20px] md:rounded-[38px] shadow-[0px_0px_77px_38px_rgba(46,212,105,0.05),0px_0px_38px_6px_rgba(46,212,105,0.05),inset_0px_0px_0px_2px_rgba(255,255,255,0.06),inset_0px_2px_0px_0px_rgba(255,255,255,0.10)] overflow-hidden"
      style={{ backgroundImage: "url('/images/figma/image 46 copy.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <style>{`
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
        @keyframes slideInOnce {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="relative p-5 md:py-14 md:pl-10 md:pr-20">
        {/* Main card */}
        <div
          className="bg-gradient-to-b from-stone-950 via-neutral-800 to-neutral-900 rounded-[16px] md:rounded-[24px] shadow-[0px_14px_24px_0px_rgba(0,0,0,0.38)] border-[2px] border-slate-500/20 p-3 md:p-5 flex flex-col gap-2.5 md:gap-3.5 animate-[cardReveal_7s_ease-in-out_infinite]"
        >
          {/* User badge */}
          <div className="w-fit px-3.5 py-2 bg-white/[0.04] rounded-xl border-2 border-white/10 flex items-center gap-2.5">
            <img src="/images/figma/Ellipse 53.svg" alt="" className="w-8 h-8 rounded-full shrink-0 object-cover" />
            <span className="text-[#CBCACC] text-sm md:text-lg font-semibold font-['Urbanist']">Franks Lampard</span>
          </div>

          {/* Task */}
          <div className="flex items-center gap-3.5">
            <img src="/images/figma/task-done-01.svg" alt="" className="w-6 h-6 shrink-0" />
            <span className="text-[#CBCACC] text-sm md:text-2xl font-bold font-['Urbanist'] leading-6 md:leading-10">Collect revenue data from bank APIs</span>
          </div>

          <span className="text-[#7D7C83] text-sm md:text-2xl font-semibold font-['Urbanist'] leading-5 md:leading-9">2 hours ago</span>

          {/* Integration icons */}
          <div className="flex -space-x-2">
            <img src="/images/figma/image 24.svg" alt="" className="w-7 h-7 md:w-11 md:h-11 rounded-full border-2 border-zinc-700" />
            <img src="/images/figma/image 24 (4).svg" alt="" className="w-7 h-7 md:w-11 md:h-11 rounded-full border-2 border-zinc-700" />
            <img src="/images/figma/image 24 (5).svg" alt="" className="w-7 h-7 md:w-11 md:h-11 rounded-full border-2 border-zinc-700" />
          </div>

          {/* File attachment */}
          <div className="flex items-center gap-3.5">
            <img src="/images/figma/image 25.svg" alt="Excel" className="w-10 h-6 md:w-14 md:h-8 rounded shrink-0 object-contain" />
            <span className="text-[#CBCACC] text-sm md:text-2xl font-semibold font-['Urbanist'] leading-5 md:leading-9 truncate">Stripe_revenue_report.csv</span>
          </div>
        </div>

        {/* Status items below */}
        <div className="mt-4 md:mt-10 flex flex-col gap-3 md:gap-4">
          <div
            className="p-3.5 md:p-4 bg-white/[0.04] rounded-xl md:rounded-2xl border-2 border-white/10 flex items-center gap-3.5 animate-[cardReveal_7s_ease-in-out_infinite]"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="animate-[iconPop_7s_ease-in-out_infinite]" style={{ animationDelay: "1.1s" }}>
              <CheckCircleGreen />
            </div>
            <span className="text-[#CBCACC] text-sm md:text-2xl font-semibold font-['Urbanist'] leading-5 md:leading-10">Initializing analytics dashboard</span>
          </div>
          <div
            className="p-3.5 md:p-4 bg-white/[0.04] rounded-xl md:rounded-2xl border-2 border-white/10 flex items-center gap-3.5 animate-[cardReveal_7s_ease-in-out_infinite]"
            style={{ animationDelay: "1.6s" }}
          >
            <div className="animate-[iconPop_7s_ease-in-out_infinite]" style={{ animationDelay: "1.9s" }}>
              <img src="/images/figma/Group.svg" alt="" className="w-6 h-6 shrink-0" />
            </div>
            <span className="text-[#CBCACC] text-sm md:text-2xl font-bold font-['Urbanist'] leading-5 md:leading-10">Preparing campaign assets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemItem({ icon, title, description, offset = false, index = 0 }: { icon: React.ReactNode; title: string; description: string; offset?: boolean; index?: number }) {
  return (
    <div
      className={`w-full max-w-[500px] min-h-[100px] pl-5 md:pl-8 pr-4 md:pr-6 py-5 md:py-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl outline-[0.85px] outline-offset-[-0.85px] outline-white/30 backdrop-blur-xl flex items-center gap-5 md:gap-10 opacity-0 animate-[slideInOnce_1s_ease-out_forwards] ${offset ? 'md:ml-[50px]' : ''}`}
      style={{ animationDelay: `${0.5 + index * 0.6}s` }}
    >
      <div className="w-10 h-10 md:w-14 md:h-14 relative shrink-0 flex items-center justify-center">
        <div className="absolute w-8 h-8 md:w-12 md:h-12 opacity-60 bg-violet-500 rounded-full blur-xl" />
        {icon}
      </div>
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        <ScrollTextReveal
          text={title}
          className="text-white text-base md:text-2xl font-bold font-['Urbanist']"
        />
        <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
          <p className="text-neutral-500 text-xs md:text-base font-semibold font-['Urbanist'] leading-5 md:leading-6">{description}</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export function FinanceProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 pt-10 md:pt-16 pb-12 md:pb-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <Badge>The Problem</Badge>
          <div className="flex flex-col items-center gap-8">
            <ScrollTextReveal
              text="The Problem - What's Broken Today"
              className="text-center text-white text-[28px] md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
            />
            <p className="text-center text-[#7D7C83] text-sm md:text-3xl font-medium font-['Urbanist'] leading-5 md:leading-10">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* Content: Dashboard + Problem items */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-stretch">
          {/* Left: Dashboard visual */}
          <div className="flex-1 flex">
            <FinanceDashboardVisual />
          </div>

          {/* Right: Problem items */}
          <div className="flex flex-1 flex-col gap-6 lg:gap-8 max-w-[550px]">
            <ProblemItem
              index={0}
              icon={
                <img src="/images/figma/blend-2.svg" alt="" className="w-8 h-8 md:w-14 md:h-14" />
              }
              title="Manual reconciliation"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={1}
              offset
              icon={
                <img src="/images/figma/document.svg" alt="" className="w-8 h-8 md:w-14 md:h-14" />
              }
              title="Spreadsheet chaos"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={2}
              icon={
                <img src="/images/figma/money-send.svg" alt="" className="w-8 h-8 md:w-14 md:h-14" />
              }
              title="Late financial reporting"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={3}
              offset
              icon={
                <img src="/images/figma/coin.svg" alt="" className="w-8 h-8 md:w-14 md:h-14" />
              }
              title="Revenue leakage"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
