/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { ScrollTextReveal, Badge, AnimateOnScroll } from "@/components/ui";

function AnimatedChatCard() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          obs.disconnect();
          let s = 0;
          const delays = [0, 800, 1600, 3200];
          delays.forEach((d) => {
            setTimeout(() => setStep(++s), d);
          });
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full max-w-[573px] px-5 md:px-7 pt-8 md:pt-12 pb-4 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[28px] md:rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] flex flex-col gap-5 md:gap-9 overflow-hidden"
    >
      {/* User message */}
      <div
        className="flex items-center gap-2.5 self-end transition-all duration-500"
        style={{
          opacity: step >= 1 ? 1 : 0,
          transform: step >= 1 ? "translateX(0)" : "translateX(40px)",
        }}
      >
        <div className="h-9 px-3 py-2 bg-gradient-to-l from-violet-400 to-violet-500 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex items-center">
          <span className="text-white text-sm font-bold font-['Urbanist'] leading-6">Build expense tracking app</span>
        </div>
        <img src="/images/figma/Ellipse 810.svg" alt="" className="w-10 h-10 rounded-full shrink-0" />
      </div>

      {/* Bot message */}
      <div
        className="flex items-start gap-2.5 transition-all duration-700"
        style={{
          opacity: step >= 2 ? 1 : 0,
          transform: step >= 2 ? "translateX(0)" : "translateX(-40px)",
        }}
      >
        <img src="/images/figma/Group 20963 (2).svg" alt="" className="w-8 h-8 shrink-0" />
        <div className="flex-1 p-4 bg-white/5 rounded-2xl flex flex-col gap-3">
          <p className="text-gray-300 text-sm font-medium font-['Urbanist'] leading-6">
            Got it 👍 If the field is meant to explain why the agent exists (its purpose/value) rather than just a plain description, you can rename the label and adjust the placeholder accordingly.
            <br />This comprehensive design outlines a revolutionary
          </p>

          {/* Agent card */}
          <div
            className="p-4 md:p-5 bg-black/60 rounded-2xl border border-orange-400/40 flex flex-col gap-3.5 transition-all duration-700"
            style={{
              opacity: step >= 3 ? 1 : 0,
              transform: step >= 3 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/5 rounded-xl border border-orange-400/25 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="12" height="8" rx="2" stroke="#fb923c" strokeWidth="1.2"/><path d="M6 14h6" stroke="#fb923c" strokeWidth="1.2" strokeLinecap="round"/></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-sm font-bold font-['Urbanist'] leading-6">Agent Alpha</span>
                  <span className="text-gray-400 text-xs font-normal font-['Urbanist']">3 agents working in parallel</span>
                </div>
              </div>
              <div className="w-6 h-6 flex flex-col items-center justify-center gap-[3px]">
                <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
                <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
                <div className="w-[3px] h-[3px] bg-gray-500 rounded-full" />
              </div>
            </div>

            <div className="px-2 py-2.5 bg-white/5 rounded-[10px] flex justify-between items-center">
              <div className="flex flex-col gap-0.5">
                <span className="text-gray-400 text-[10px] font-normal font-['Urbanist']">Currently working on</span>
                <div className="flex items-center gap-1.5">
                  <img src="/images/figma/info-circle.svg" alt="" className="w-4 h-4 shrink-0" />
                  <span className="text-gray-300 text-xs font-semibold font-['Urbanist']">Marketing Campaign Planner</span>
                </div>
              </div>
              <div className="px-2 py-1 bg-orange-400/10 rounded-full">
                <span className="text-orange-400 text-[10px] font-semibold font-['Urbanist']">Needs approval</span>
              </div>
            </div>

            {/* Progress bar */}
            <div
              className="flex flex-col gap-1 transition-all duration-1000"
              style={{
                opacity: step >= 4 ? 1 : 0,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex-1 h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full transition-all duration-[2000ms] ease-out" style={{ width: step >= 4 ? "75%" : "0%" }} />
                </div>
                <span className="text-gray-300 text-sm font-bold font-['Urbanist'] ml-3">75%</span>
              </div>
              <span className="text-gray-500 text-[10px] font-normal font-['Urbanist']">Over all</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#6b7280" strokeWidth="1"/><path d="M7 4v3l2 1.5" stroke="#6b7280" strokeWidth="1" strokeLinecap="round"/></svg>
                <span className="text-gray-500 text-xs font-normal font-['Urbanist']">2 hrs 15 mins</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#6b7280" strokeWidth="1"/><path d="M5 7l1.5 1.5L9.5 5" stroke="#6b7280" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-gray-500 text-xs font-normal font-['Urbanist']">12 tasks completed</span>
              </div>
            </div>

            <div className="w-fit px-3 py-1.5 bg-white/5 rounded-full flex items-center gap-2">
              <img src="/images/figma/eye.svg" alt="" className="w-4 h-4 shrink-0" />
              <span className="text-gray-300 text-sm font-semibold font-['Urbanist']">Live Preview</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircleGreen() {
  return (
    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BulletPoint({ children, animDelay = 0 }: { children: React.ReactNode; animDelay?: number }) {
  return (
    <AnimateOnScroll animation="fade-up" duration={0.6} delay={animDelay}>
      <div className="inline-flex items-start gap-5">
        <img src="/images/figma/Arrow.svg" alt="" className="w-7 h-7 shrink-0" />
        <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
          {children}
        </p>
      </div>
    </AnimateOnScroll>
  );
}

function SetupChecklistCard() {
  const steps = [
    { done: true, text: "Connecting monitoring agents" },
    { done: true, text: "Configuring alert thresholds" },
    { done: true, text: "Setting up auto-remediation playbooks" },
    { done: true, text: "Initializing infrastructure dashboard" },
    { done: false, text: "Scanning cloud resources" },
    { done: false, text: "Mapping service dependencies" },
    { done: false, text: "Enabling anomaly detection models" },
  ];

  return (
    <div className="w-full max-w-[573px] h-[585px] px-7 pt-12 pb-2.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] inline-flex flex-col items-center gap-9">
      <div className="w-[499px] max-w-full flex flex-col gap-6">
        <div className="inline-flex items-center gap-6">
          <img src="/images/figma/Group 20963 copy.svg" alt="" className="w-7 h-7 shrink-0" />
          <span className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
            Setting up monitoring infrastructure...
          </span>
        </div>
        <div className="flex flex-col gap-3.5">
          {steps.map((item, i) => (
            <div
              key={i}
              className="self-stretch px-3.5 py-2.5 bg-white/5 rounded-2xl outline-[1.20px] outline-offset-[-1.20px] outline-white/10 inline-flex items-center gap-3"
            >
              {item.done ? (
                <div className="w-5 h-5 bg-green rounded-[43px] flex items-center justify-center shrink-0 overflow-hidden">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border border-dashed border-warning/60 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-warning/40" />
                </div>
              )}
              <span className={`text-[#cbcacc] text-base ${item.done ? "font-semibold" : "font-bold"} font-['Urbanist'] leading-7 line-clamp-3`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OutreachCard() {
  return (
    <div className="w-full lg:w-[581px] lg:shrink-0">
      <img
        src="/images/figma/Group 1707484054.svg"
        alt="Operations outreach dashboard"
        className="w-full h-auto"
      />
    </div>
  );
}

function ApiConnectionCard() {
  const permissions = [
    "Read system metrics",
    "Execute runbooks",
    "Send alert notifications",
    "Access log streams",
    "Manage incidents",
    "Deploy patches",
  ];

  const [clickedBtn, setClickedBtn] = useState<string | null>(null);

  const handleButtonClick = (btn: string) => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 1500);
  };

  return (
    <div className="w-full max-w-[573px] px-5 md:px-7 pt-10 md:pt-12 pb-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] border border-white/30 backdrop-blur-[30px] flex flex-col items-center gap-7 md:gap-9">
      <div className="w-full max-w-[503px] flex flex-col gap-5">
        <div className="flex items-start gap-5 justify-between flex-wrap">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[radial-gradient(ellipse_53%_86%_at_39%_48%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_100%)] rounded-xl border border-white/10 flex items-center justify-center">
              <img src="/images/figma/image 12 copy.svg" alt="PagerDuty" className="w-9 h-9" />
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-white text-lg font-bold font-['Urbanist'] leading-7">Connect to PagerDuty API</span>
              <span className="text-gray-100 text-sm font-light font-['Urbanist'] leading-5">Incident Agent</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-medium font-['Urbanist'] leading-5">
            Route critical alerts to on-call responders
          </span>
          <div
            className="px-3 py-1 rounded-[50px] border flex items-center gap-1.5 transition-all duration-500"
            style={{
              borderColor: clickedBtn === "approve" ? "#22c55e" : clickedBtn === "reject" ? "#ef4444" : "#f97316",
              backgroundColor: clickedBtn === "approve" ? "rgba(34,197,94,0.08)" : clickedBtn === "reject" ? "rgba(239,68,68,0.08)" : "rgba(220,38,38,0.02)",
            }}
          >
            <div
              className="w-[5px] h-[5px] rounded-full transition-colors duration-500"
              style={{
                backgroundColor: clickedBtn === "approve" ? "#22c55e" : clickedBtn === "reject" ? "#ef4444" : "#f97316",
              }}
            />
            <span className="text-gray-100 text-[10px] font-bold font-['Urbanist'] transition-opacity duration-300">
              {clickedBtn === "approve" ? "Approved" : clickedBtn === "reject" ? "Rejected" : clickedBtn === "request" ? "Changes Requested" : "Pending"}
            </span>
          </div>
        </div>
        <div className="p-5 bg-white/5 rounded-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">API Endpoint :</span>
            <div className="h-8 px-2.5 bg-white/5 rounded-[10px] inline-flex items-center w-fit">
              <span className="text-gray-100 text-xs font-semibold font-['Urbanist'] leading-6">
                https://api.pagerduty.com/incidents
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">Permissions Requested :</span>
            <div className="flex flex-col gap-3">
              {permissions.map((perm, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <img src="/images/figma/tick-circle.svg" alt="" className="w-4 h-4 shrink-0" />
                  <span className="text-white/75 text-sm font-medium font-['Urbanist'] leading-5">{perm}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">Data Access :</span>
            <div className="h-8 pl-2 bg-white/5 rounded-[10px] flex items-center">
              <span className="text-gray-100 text-xs font-semibold font-['Urbanist'] leading-6">
                Service health, Incident logs, Escalation policies
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            onClick={() => handleButtonClick("request")}
            className="group relative h-10 px-5 rounded-[50px] border border-white/20 bg-white/5 overflow-hidden transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
            <span className="relative text-white text-sm font-bold font-['Urbanist']">
              Request Changes
            </span>
          </button>
          <button
            onClick={() => handleButtonClick("reject")}
            className="group relative h-10 px-7 rounded-[50px] bg-red-500 overflow-hidden transition-all duration-200 hover:bg-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] active:scale-95 active:bg-red-600"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <span className="relative text-white text-sm font-bold font-['Urbanist']">
              Reject
            </span>
          </button>
          <button
            onClick={() => handleButtonClick("approve")}
            className="group relative h-10 px-7 rounded-[50px] bg-green-500 overflow-hidden transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95 active:bg-green-600"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <span className="relative text-white text-sm font-bold font-['Urbanist']">
              Approve
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export function OperationsHowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-[100px] py-12 md:py-[75px] bg-black">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[59px] items-start">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <Badge>How it Works</Badge>
          {/* Title + subtitle */}
          <div className="flex flex-col items-center gap-6 text-center">
            <ScrollTextReveal
              text="How Work Happens"
              className="text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
            />
            <p className="text-[#7d7c83] text-3xl font-medium font-['Urbanist'] leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Step 1: Detect Anomaly */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <img
                  src="/images/figma/scan.svg"
                  alt=""
                  className="relative w-full h-full"
                />
                <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
                  <div
                    className="absolute left-0 w-full h-[2px]"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, rgba(145,85,237,0.6) 20%, rgba(180,138,251,0.9) 50%, rgba(145,85,237,0.6) 80%, transparent 100%)",
                      boxShadow: "0 0 12px 3px rgba(145,85,237,0.4), 0 0 30px 6px rgba(145,85,237,0.15)",
                      animation: "ops-scan-sweep 2.5s ease-in-out infinite",
                    }}
                  />
                </div>
                <style>{`
                  @keyframes ops-scan-sweep {
                    0%, 100% { top: 8%; opacity: 0; }
                    5%  { opacity: 1; }
                    50% { top: 88%; opacity: 1; }
                    55% { opacity: 0.6; }
                    95% { opacity: 1; }
                  }
                `}</style>
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <ScrollTextReveal
                  text="1. Detect Anomaly"
                  className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]"
                />
                <BulletPoint animDelay={0.15}>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint animDelay={0.3}>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint animDelay={0.45}>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
            <div className="w-full lg:w-[581px] lg:shrink-0 relative rounded-[40px]">
              <img
                src="/images/figma/Group 1707484053.svg"
                alt="Operations dashboard with agent tasks and phases"
                className="w-full h-auto"
              />
              {[0, 1, 2, 3].map((i) => (
                <div key={i}>
                  {/* Dark mask — hides card, fades away after orbit, re-covers before next loop */}
                  <div
                    className="absolute pointer-events-none rounded-[12px] bg-[#0c0c0c]"
                    style={{
                      left: "3%",
                      right: "1%",
                      top: `${3.7 + i * 24}%`,
                      height: "21.6%",
                      animation: `ops-mask-${i} 9s ease-in-out infinite`,
                    }}
                  />
                  {/* Orbit ring */}
                  <div
                    className="absolute pointer-events-none overflow-hidden rounded-[12px]"
                    style={{
                      left: "3%",
                      right: "1%",
                      top: `${3.7 + i * 24}%`,
                      height: "21.6%",
                      opacity: 0,
                      animation: `ops-orbit-${i} 9s ease-in-out infinite`,
                    }}
                  >
                    <span
                      className="absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2"
                      style={{
                        background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(145,85,237,0.15) 68%, rgba(180,138,251,0.45) 75%, rgba(255,255,255,0.6) 80%, rgba(180,138,251,0.45) 85%, rgba(145,85,237,0.15) 92%, transparent 100%)",
                        animation: "cta-orbit-rotate 2.5s linear infinite",
                        filter: "blur(0.5px)",
                      }}
                    />
                    <span className="absolute inset-[1.5px] rounded-[10.5px] bg-[#0c0c0c]" />
                  </div>
                </div>
              ))}
              <style>{`
                ${[0, 1, 2, 3].map((i) => {
                  const start = (i * 20);
                  const orbitIn = start + 3;
                  const orbitOut = start + 16;
                  const maskOff = start + 14;
                  const allVisible = 85;
                  const reset = 93;
                  return `
                    @keyframes ops-orbit-${i} {
                      0%, ${start}% { opacity: 0; }
                      ${orbitIn}% { opacity: 0.8; }
                      ${orbitOut}% { opacity: 0.8; }
                      ${orbitOut + 3}% { opacity: 0; }
                      100% { opacity: 0; }
                    }
                    @keyframes ops-mask-${i} {
                      0%, ${start}% { opacity: 1; }
                      ${maskOff}% { opacity: 0; }
                      ${allVisible}% { opacity: 0; }
                      ${reset}% { opacity: 1; }
                      100% { opacity: 1; }
                    }
                  `;
                }).join("")}
              `}</style>
            </div>
          </div>

          {/* Step 2: Root Cause Analysis */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[86px]">
            {/* Left: Dashboard image */}
            <div className="w-full lg:w-[573px] lg:shrink-0">
              <img
                src="/images/figma/Group root cause.svg"
                alt="Output gallery showing root cause analysis dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Right: Text content */}
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes diagram-draw-axis {
                      0%        { stroke-dashoffset: 140; }
                      40%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes diagram-draw-wave {
                      0%, 35%   { stroke-dashoffset: 100; }
                      75%, 100% { stroke-dashoffset: 0; }
                    }
                    .diagram-axis { stroke-dasharray: 140; animation: diagram-draw-axis 2.5s ease-in-out infinite; }
                    .diagram-wave { stroke-dasharray: 100; animation: diagram-draw-wave 2.5s ease-in-out infinite; }
                  `}</style>
                  <path className="diagram-axis" d="M7.09766 7.09668V67.4185C7.09766 73.3087 11.8524 78.0635 17.7427 78.0635H78.0645" stroke="#B48AFB" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="diagram-wave" d="M17.7422 60.3218L34.0291 41.3027C36.7258 38.1802 41.5161 37.9672 44.4257 40.9124L47.7966 44.2833C50.7063 47.193 55.4965 47.0155 58.1933 43.8929L74.5156 24.8384" stroke="#7D7C83" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <ScrollTextReveal
                  text="2. Root Cause Analysis"
                  className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]"
                />
                <BulletPoint animDelay={0.15}>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint animDelay={0.3}>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint animDelay={0.45}>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
          </div>

          {/* Step 3: Execute Fix */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes wifi-connect {
                      0%, 15%  { opacity: 0; }
                      20%, 80% { opacity: 1; }
                      85%, 100% { opacity: 0; }
                    }
                    .wifi-dot  { animation: wifi-connect 1.2s ease-in-out infinite; animation-delay: 0s; }
                    .wifi-arc1 { animation: wifi-connect 1.2s ease-in-out infinite; animation-delay: 0.2s; }
                    .wifi-arc2 { animation: wifi-connect 1.2s ease-in-out infinite; animation-delay: 0.4s; }
                  `}</style>
                  {/* Router body (static) */}
                  <path d="M75.1673 71.7501H6.83398V44.4167H75.1673V71.7501Z" stroke="#7D7C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Router LEDs (static) */}
                  <path d="M61.4993 58.0833H61.53" stroke="#7D7C83" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round"/>
                  <path d="M47.8333 58.0833H47.864" stroke="#7D7C83" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                  <path d="M20.5 58.0833H34.1667" stroke="#7D7C83" strokeWidth="1.5" strokeLinejoin="round"/>
                  {/* WiFi dot (animates first) */}
                  <path className="wifi-dot" d="M41 30.75H41.0217" stroke="#C6A5FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Inner arc (animates second) */}
                  <path className="wifi-arc1" d="M48.4294 20.4999C46.1877 19.1021 43.6585 18.3156 40.9821 18.3156C38.3191 18.3156 35.8019 19.0942 33.5686 20.4789" stroke="#B48AFB" strokeWidth="3" strokeLinejoin="round"/>
                  {/* Outer arc (animates third) */}
                  <path className="wifi-arc2" d="M27.334 11.8823C31.2592 8.68898 35.947 6.83325 40.9821 6.83325C46.0331 6.83325 50.7346 8.70071 54.6673 11.9125" stroke="#B48AFB" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <ScrollTextReveal
                  text="3. Execute Fix"
                  className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]"
                />
                <BulletPoint animDelay={0.15}>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint animDelay={0.3}>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint animDelay={0.45}>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
            <div className="w-full lg:w-[581px] lg:shrink-0">
              <img
                src="/images/figma/Group execute_fix.svg"
                alt="Execute fix dashboard with API connections and task management"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Step 4: Escalate */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[86px]">
            {/* Left: Animated chat card */}
            <div className="w-full lg:w-[573px] lg:shrink-0">
              <AnimatedChatCard />
            </div>
            {/* Right: Text content */}
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-[82px] h-[82px]">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <defs>
                    <filter id="hierGlow">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <radialGradient id="hierDotGrad">
                      <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                      <stop offset="40%" stopColor="#B48AFB" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#B48AFB" stopOpacity="0" />
                    </radialGradient>
                    {/* Paths for the traveling dots */}
                    <path id="hierPathDown" d="M17.74 28.39 V56.77" />
                    <path id="hierPathRight" d="M17.74 28.39 V42.58 C17.74 39.03 24.13 42.58 31.94 42.58 H56.77" />
                  </defs>
                  {/* Static base structure */}
                  <path d="M17.7427 28.3867C23.6218 28.3867 28.3877 23.6208 28.3877 17.7417C28.3877 11.8626 23.6218 7.09668 17.7427 7.09668C11.8636 7.09668 7.09766 11.8626 7.09766 17.7417C7.09766 23.6208 11.8636 28.3867 17.7427 28.3867Z" stroke="#B48AFB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M67.4185 53.2251C73.2975 53.2251 78.0635 48.4592 78.0635 42.5801C78.0635 36.701 73.2975 31.9351 67.4185 31.9351C61.5394 31.9351 56.7734 36.701 56.7734 42.5801C56.7734 48.4592 61.5394 53.2251 67.4185 53.2251Z" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.7427 78.0635C23.6218 78.0635 28.3877 73.2975 28.3877 67.4185C28.3877 61.5394 23.6218 56.7734 17.7427 56.7734C11.8636 56.7734 7.09766 61.5394 7.09766 67.4185C7.09766 73.2975 11.8636 78.0635 17.7427 78.0635Z" stroke="#7D7C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M56.7739 42.5801H31.9355C24.1292 42.5801 17.7422 39.0317 17.7422 28.3867V56.7734" stroke="#7D7C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Traveling glow dot — goes down to bottom node */}
                  <circle r="4" fill="url(#hierDotGrad)" filter="url(#hierGlow)">
                    <animateMotion dur="2s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1">
                      <mpath href="#hierPathDown" />
                    </animateMotion>
                  </circle>
                  {/* Traveling glow dot — goes right to right node */}
                  <circle r="4" fill="url(#hierDotGrad)" filter="url(#hierGlow)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.6;1" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1">
                      <mpath href="#hierPathRight" />
                    </animateMotion>
                  </circle>
                </svg>
              </div>
              <div className="flex flex-col gap-[49px] w-[545px] max-w-full">
                <ScrollTextReveal
                  text="4. Escalate"
                  className="text-[#cbcacc] text-[40px] font-bold font-['Urbanist'] leading-[54px]"
                />
                <BulletPoint animDelay={0.15}>
                  Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                </BulletPoint>
                <BulletPoint animDelay={0.3}>
                  Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                </BulletPoint>
                <BulletPoint animDelay={0.45}>
                  Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                </BulletPoint>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
