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
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-14 md:h-14">
                  <style>{`
                    @keyframes blend-circle1 {
                      0%        { stroke-dashoffset: 140; }
                      40%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes blend-circle2 {
                      0%, 25%   { stroke-dashoffset: 140; }
                      65%, 100% { stroke-dashoffset: 0; }
                    }
                    .blend-c1 { stroke-dasharray: 140; animation: blend-circle1 2.4s ease-out infinite; }
                    .blend-c2 { stroke-dasharray: 140; animation: blend-circle2 2.4s ease-out infinite; }
                  `}</style>
                  <path className="blend-c1" d="M42.9726 22.124C42.9726 33.6498 33.6507 42.9716 22.125 42.9716C21.1719 42.9716 20.2487 42.9121 19.3552 42.7631C9.13988 41.4229 1.27734 32.6967 1.27734 22.124C1.27734 10.5982 10.5992 1.27637 22.125 1.27637C32.6977 1.27637 41.4239 9.1389 42.7641 19.3542C42.913 20.2477 42.9726 21.171 42.9726 22.124Z" stroke="#B48AFB" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="blend-c2" d="M60.8422 39.9932C60.8422 51.5189 51.5204 60.8408 39.9946 60.8408C29.4219 60.8408 20.6957 52.9782 19.3555 42.7629C20.2489 42.9118 21.1722 42.9714 22.1252 42.9714C33.651 42.9714 42.9729 33.6495 42.9729 22.1238C42.9729 21.1707 42.9133 20.2475 42.7644 19.354C52.9797 20.6942 60.8422 29.4204 60.8422 39.9932Z" stroke="#7D7C83" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Manual reconciliation"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={1}
              offset
              icon={
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-14 md:h-14">
                  <style>{`
                    @keyframes doc-body {
                      0%        { stroke-dashoffset: 200; }
                      40%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes doc-fold {
                      0%, 30%   { stroke-dashoffset: 50; }
                      65%, 100% { stroke-dashoffset: 0; }
                    }
                    .doc-body { stroke-dasharray: 200; animation: doc-body 2.4s ease-out infinite; }
                    .doc-fold { stroke-dasharray: 50;  animation: doc-fold 2.4s ease-out infinite; }
                  `}</style>
                  <path className="doc-body" d="M54.6001 24.8187V37.228C54.6001 49.6374 49.6364 54.6011 37.2271 54.6011H22.3359C9.92661 54.6011 4.96289 49.6374 4.96289 37.228V22.3369C4.96289 9.92759 9.92661 4.96387 22.3359 4.96387H34.7452" stroke="#B48AFB" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="doc-fold" d="M54.601 24.8187H44.6735C37.228 24.8187 34.7461 22.3369 34.7461 14.8913V4.96387L54.601 24.8187Z" stroke="#7D7C83" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Spreadsheet chaos"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={2}
              icon={
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-14 md:h-14">
                  <style>{`
                    @keyframes money-dollar {
                      0%        { stroke-dashoffset: 60; }
                      30%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes money-line {
                      0%, 15%   { stroke-dashoffset: 25; }
                      40%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes money-circle {
                      0%, 25%   { stroke-dashoffset: 170; }
                      65%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes money-arrow {
                      0%, 50%   { stroke-dashoffset: 40; }
                      80%, 100% { stroke-dashoffset: 0; }
                    }
                    .money-dollar { stroke-dasharray: 60;  animation: money-dollar 2.4s ease-out infinite; }
                    .money-line   { stroke-dasharray: 25;  animation: money-line 2.4s ease-out infinite; }
                    .money-circle { stroke-dasharray: 170; animation: money-circle 2.4s ease-out infinite; }
                    .money-arrow  { stroke-dasharray: 40;  animation: money-arrow 2.4s ease-out infinite; }
                  `}</style>
                  <path className="money-dollar" d="M23.5781 34.1254C23.5781 36.5328 25.4396 38.4686 27.7229 38.4686H32.3887C34.3742 38.4686 35.9874 36.781 35.9874 34.6714C35.9874 32.4129 34.9947 31.5939 33.5304 31.0727L26.06 28.4667C24.5957 27.9455 23.603 27.1514 23.603 24.868C23.603 22.7833 25.2161 21.0708 27.2016 21.0708H31.8675C34.1508 21.0708 36.0123 23.0067 36.0123 25.4141" stroke="#B48AFB" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="money-line" d="M29.7832 18.6138V40.9505" stroke="#C6A5FF" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="money-circle" d="M54.6001 29.7825C54.6001 43.4823 43.4814 54.6011 29.7815 54.6011C16.0816 54.6011 4.96289 43.4823 4.96289 29.7825C4.96289 16.0826 16.0816 4.96387 29.7815 4.96387" stroke="#7D7C83" strokeWidth="1.27639" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="money-arrow" d="M54.6013 14.8913V4.96387H44.6738" stroke="#7D7C83" strokeWidth="1.27639" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="money-arrow" d="M42.1914 17.3732L54.6007 4.96387" stroke="#7D7C83" strokeWidth="1.27639" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              title="Late financial reporting"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              index={3}
              offset
              icon={
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-14 md:h-14">
                  <style>{`
                    @keyframes coin-bottom {
                      0%        { stroke-dashoffset: 120; }
                      35%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes coin-top {
                      0%, 20%   { stroke-dashoffset: 140; }
                      55%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes coin-mid {
                      0%, 35%   { stroke-dashoffset: 140; }
                      70%, 100% { stroke-dashoffset: 0; }
                    }
                    .coin-bottom { stroke-dasharray: 120; animation: coin-bottom 2.4s ease-out infinite; }
                    .coin-top    { stroke-dasharray: 140; animation: coin-top 2.4s ease-out infinite; }
                    .coin-mid    { stroke-dasharray: 140; animation: coin-mid 2.4s ease-out infinite; }
                  `}</style>
                  <path className="coin-bottom" d="M45.9146 31.3955V40.5784C45.9146 48.3218 38.6924 54.6009 29.7825 54.6009C20.8726 54.6009 13.6504 48.3218 13.6504 40.5784V31.3955C13.6504 39.1389 20.8726 44.6735 29.7825 44.6735C38.6924 44.6735 45.9146 39.1389 45.9146 31.3955Z" stroke="#B48AFB" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="coin-top" d="M45.9146 18.9864C45.9146 21.2449 45.2941 23.3296 44.2021 25.1166C41.5465 29.4846 36.0864 32.2643 29.7825 32.2643C23.4786 32.2643 18.0185 29.4846 15.3629 25.1166C14.2709 23.3296 13.6504 21.2449 13.6504 18.9864C13.6504 15.1147 15.4621 11.6153 18.3659 9.08375C21.2945 6.52744 25.3151 4.96387 29.7825 4.96387C34.2498 4.96387 38.2705 6.52744 41.1991 9.05894C44.1028 11.6153 45.9146 15.1147 45.9146 18.9864Z" stroke="#7D7C83" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="coin-mid" d="M45.9146 18.9864V31.3957C45.9146 39.1391 38.6924 44.6736 29.7825 44.6736C20.8726 44.6736 13.6504 39.1391 13.6504 31.3957V18.9864C13.6504 11.243 20.8726 4.96387 29.7825 4.96387C34.2498 4.96387 38.2705 6.52744 41.1991 9.05894C44.1028 11.6153 45.9146 15.1147 45.9146 18.9864Z" stroke="#7D7C83" strokeWidth="2.55277" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
