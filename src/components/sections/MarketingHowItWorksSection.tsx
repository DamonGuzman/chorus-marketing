/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ScrollTextReveal, Badge } from "@/components/ui";
import { useScrollCallback } from "@/components/ui/SmoothScroll";

const WORD_STAGGER_MS = 110;
const WORD_DURATION_MS = 750;

function titleAnimationDuration(title: string) {
  const wordCount = title.split(/[\s\n]+/).filter(Boolean).length;
  return (wordCount - 1) * WORD_STAGGER_MS + WORD_DURATION_MS;
}

/** Word-by-word stagger animation for step headings. */
function AnimatedTitle({
  title,
  active,
  observeIntersection = false,
  onRevealed,
  className,
}: {
  title: string;
  active?: boolean;
  observeIntersection?: boolean;
  /** Called once all words have finished animating in */
  onRevealed?: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function triggerReveal() {
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setRevealed(true);
        if (onRevealed) {
          timerRef.current = setTimeout(onRevealed, titleAnimationDuration(title));
        }
      }),
    );
  }

  // Desktop sticky mode: re-trigger every time the step becomes active
  useEffect(() => {
    if (observeIntersection) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (active) {
      triggerReveal();
    } else {
      setRevealed(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, observeIntersection]);

  // Mobile mode: trigger once when the element scrolls into view
  useEffect(() => {
    if (!observeIntersection) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerReveal();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [observeIntersection]);

  const lines = title.split("\n");
  let wordIdx = 0;

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <div key={lineIdx} className="block">
            {words.map((word) => {
              const idx = wordIdx++;
              return (
                <span
                  key={idx}
                  className="inline-block mr-[0.3em]"
                  style={{
                    color: revealed ? "#ffffff" : "rgba(255,255,255,0.08)",
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0px)" : "translateY(14px)",
                    transition: `color ${WORD_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${WORD_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), transform ${WORD_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
                    transitionDelay: `${idx * WORD_STAGGER_MS}ms`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function StepLabel({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-4 h-4 bg-violet-400" />
      <span className="text-violet-400 text-xl md:text-2xl font-bold font-['Urbanist']">Step {step}</span>
    </div>
  );
}

function AgentCardLarge({ name, pending = false, avatar }: { name: string; pending?: boolean; avatar: string }) {
  return (
    <div className={`w-full pl-4 pr-5 pt-4 pb-5 ${pending ? "rounded-2xl outline outline-[0.81px] outline-offset-[-0.81px] outline-orange-400" : "bg-white/[0.04] rounded-2xl"} backdrop-blur-xl flex flex-col justify-between`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img className="w-10 h-10 rounded-full object-cover" src={avatar} alt="" />
            <div className="w-2 h-2 bg-green-600 rounded-full border border-[#1a1a1a] absolute bottom-0 right-0" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-white text-sm font-bold font-['Urbanist'] leading-6">{name}</span>
            <span className="text-[#7D7C83] text-xs font-normal font-['Urbanist'] leading-6">3 tasks working in parallel</span>
          </div>
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 opacity-50">
          <circle cx="8" cy="3" r="1.2" fill="#7D7C83" />
          <circle cx="8" cy="8" r="1.2" fill="#7D7C83" />
          <circle cx="8" cy="13" r="1.2" fill="#7D7C83" />
        </svg>
      </div>
      <div className="py-1 px-3 rounded-[10px] border border-white/10 flex items-center justify-between mt-1">
        <div className="w-56 flex flex-col gap-0.5 pl-2">
          <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist'] leading-4">Currently working on</span>
          <div className="flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] bg-violet-500 rounded-full" />
            <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist'] leading-6">Building Linear Clone</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          {pending && (
            <div className="px-1.5 py-1 bg-red-600/5 rounded-full outline outline-[0.58px] outline-offset-[-0.58px] outline-orange-400 flex items-center gap-1.5">
              <div className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
              <span className="text-[#CBCACC] text-[10px] font-bold font-['Urbanist'] leading-5">Pending</span>
            </div>
          )}
          <svg className="w-3 h-3 -rotate-90 text-[#7D7C83] shrink-0" viewBox="0 0 6 3" fill="none"><path d="M0 0L3 3L6 0" stroke="currentColor" strokeWidth="1.5" /></svg>
        </div>
      </div>
    </div>
  );
}

function PhaseCard({ title, completed = false }: { title: string; completed?: boolean }) {
  return (
    <div className="w-full p-3 bg-white/[0.04] rounded-2xl flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[#CBCACC] text-sm font-extrabold font-['Urbanist'] shrink-0">{title}</span>
        {completed && (
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white text-xs font-bold font-['Urbanist']">Completed</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Integration :</span>
          <div className="flex -space-x-1">
            <img src="/images/figma/image 24.svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
            <img src="/images/figma/image 24 (4).svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
            <img src="/images/figma/image 24 (5).svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Agents :</span>
          <div className="flex -space-x-1">
            <img src="/images/figma/image 41.svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
            <img src="/images/figma/image 41 (4).svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
            <img src="/images/figma/image 41 (3).svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
          </div>
          <span className="text-[#7D7C83] text-xs font-bold font-['Urbanist']">+3</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#7D7C83" strokeWidth="1" />
          <path d="M8 5V8.5L10.5 10" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <span className="text-[#7D7C83] text-xs font-normal font-['Urbanist']">1 hr 30 mins</span>
      </div>
      <div className="py-3 px-3 rounded-xl bg-white/[0.03] flex items-center justify-between">
        <div className="flex flex-col gap-0.5 pl-2">
          <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist'] leading-4">Currently working on</span>
          <div className="flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] bg-violet-500 rounded-full" />
            <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Building Linear Clone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step1Visual() {
  return (
    <div className="w-full max-w-[500px]">
      <img src="/images/figma/Container_mark.svg" alt="" className="w-full h-auto lg:h-[649px] object-contain" />
    </div>
  );
}

function Step2Visual() {
  return (
    <div className="w-full lg:w-[498px] pl-4 pr-6 pt-8 pb-3 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-3xl shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] outline outline-[1.24px] outline-offset-[-1.24px] outline-slate-500/20 flex flex-col gap-4 overflow-hidden">
      <AgentCardLarge name="Social Media Agent" avatar="/images/figma/image 41.svg" />
      <AgentCardLarge name="Email Marketing Agent" pending avatar="/images/figma/image 41 (3).svg" />
      <AgentCardLarge name="Ad Campaign Agent" avatar="/images/figma/image 41 (4).svg" />
      <AgentCardLarge name="Social Media Agent" avatar="/images/figma/image 41 (2).svg" />
    </div>
  );
}

function Step3Visual() {
  return (
    <div className="w-full lg:w-[498px] lg:h-[649px] pl-4 pr-6 pt-5 pb-3 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-3xl shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] outline outline-[1.24px] outline-offset-[-1.24px] outline-slate-500/20 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-white text-sm font-bold font-['Urbanist']">Milestones</span>
        <div className="flex gap-2.5">
          <div className="w-9 h-9 p-2.5 bg-white/10 rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="3" stroke="white" strokeWidth="1.2" />
              <path d="M6 8L8 10L12 5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="w-9 h-9 p-2.5 bg-white/10 rounded-full flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="4" cy="8" r="1.5" stroke="#CBCACC" strokeWidth="1.2" />
              <circle cx="8" cy="4" r="1.5" stroke="#CBCACC" strokeWidth="1.2" />
              <circle cx="12" cy="12" r="1.5" stroke="#CBCACC" strokeWidth="1.2" />
              <path d="M5.5 7L7 5M9 5L11 11" stroke="#CBCACC" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </div>
      <PhaseCard title="Phase 1: Pre-Launch Strategy" completed />
      <PhaseCard title="Phase 2: Launch Execution" completed />
      <div className="p-3 bg-white/[0.04] rounded-2xl flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[#CBCACC] text-sm font-extrabold font-['Urbanist'] shrink-0">Phase 3: Post-Launch</span>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white text-xs font-bold font-['Urbanist']">Completed</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Integration :</span>
            <div className="flex -space-x-1">
              <img src="/images/figma/image 24.svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
              <img src="/images/figma/image 24 (4).svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
              <img src="/images/figma/image 24 (5).svg" alt="" className="w-6 h-6 rounded-full border border-zinc-700" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Agents :</span>
            <div className="flex -space-x-1">
              <img src="/images/figma/image 41.svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
              <img src="/images/figma/image 41 (4).svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
              <img src="/images/figma/image 41 (3).svg" alt="" className="w-5 h-5 rounded-full border border-zinc-700" />
            </div>
            <span className="text-[#7D7C83] text-xs font-bold font-['Urbanist']">+3</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="6" stroke="#7D7C83" strokeWidth="1" />
            <path d="M8 5V8.5L10.5 10" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="text-[#7D7C83] text-xs font-normal font-['Urbanist']">1 hr 30 mins</span>
        </div>
        <div className="py-3 px-3 rounded-xl bg-white/[0.03] flex items-center justify-between">
          <div className="flex flex-col gap-0.5 pl-2">
            <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist'] leading-4">Currently working on</span>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="5" r="3.5" stroke="#dc2626" strokeWidth="1" />
                <path d="M7 7V9" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
                <circle cx="7" cy="10.5" r="0.5" fill="#dc2626" />
              </svg>
              <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Review LinkedIn post schedule</span>
            </div>
          </div>
          <div className="h-8 px-2.5 py-1 bg-red-600 rounded-xl flex items-center gap-2">
            <span className="text-white text-sm font-bold font-['Urbanist']">3 Actions</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step4Visual() {
  const people = [
    { name: "Frank Lampard", role: "Product Manager", isAgent: true, avatar: "/images/figma/Ellipse 53.svg" },
    { name: "David Fincher", role: "HR Manager", isAgent: false, avatar: "/images/figma/Ellipse 54.svg" },
    { name: "Jake Williamson", role: "UX Manager", isAgent: true, avatar: "/images/figma/Ellipse 53 (2).svg" },
  ];

  return (
    <div className="w-full max-w-[500px] bg-stone-950 rounded-[20px] overflow-hidden flex flex-col">
      <div className="p-5 bg-zinc-900 rounded-3xl shadow-[0px_0px_73px_0px_rgba(0,0,0,0.50)] flex flex-col gap-5">
        {people.map((person) => (
          <div key={person.name} className="flex items-center gap-3.5">
            <img className="w-10 h-10 rounded-full shrink-0 object-cover" src={person.avatar} alt="" />
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-3.5">
                <span className="text-white text-lg font-bold font-['Urbanist']">{person.name}</span>
                {person.isAgent && (
                  <div className="h-6 px-2 bg-zinc-800 rounded-md border border-white/10 flex items-center">
                    <span className="text-[#CBCACC] text-sm font-semibold font-['Urbanist']">AI Agent</span>
                  </div>
                )}
              </div>
              <span className="text-[#7D7C83] text-base font-semibold font-['Urbanist'] truncate">{person.role}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-10 py-10 md:pb-16 flex flex-col items-center gap-4">
        <h3 className="text-center text-zinc-100 text-4xl font-bold font-['Satoshi'] leading-9">
          A powerful assistant<br />just a click away
        </h3>
        <p className="text-center text-zinc-400 text-lg md:text-xl font-normal font-['Urbanist'] leading-8">
          Insert blocks, perform powerful actions and
          leverage the limitless power of AI - all without
          leaving your keyboard
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticky Scroll Components (Desktop lg+)                           */
/* ------------------------------------------------------------------ */

interface StepData {
  step: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function StickyProgressBar({ normalised, total }: { normalised: number; total: number }) {
  const barProgress = normalised / (total - 1);
  const currentStep = Math.min(Math.round(normalised), total - 1) + 1;

  return (
    <div className="flex flex-col items-center gap-2 shrink-0">
      <span className="text-[#CBCACC] text-sm font-normal font-['Urbanist'] transition-all duration-300">
        {String(currentStep).padStart(2, "0")}
      </span>
      <div className="w-1 h-96 bg-neutral-800 rounded-full overflow-hidden relative">
        <div
          className="w-1 bg-violet-400 rounded-full absolute top-0 left-0 transition-[height] duration-300 ease-out"
          style={{ height: `${Math.max(0, Math.min(1, barProgress)) * 100}%` }}
        />
      </div>
      <span className="text-zinc-400/40 text-sm font-normal font-['Urbanist']">
        {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function StickyTextContent({
  step,
  index,
  normalised,
  total,
}: {
  step: StepData;
  index: number;
  normalised: number;
  total: number;
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const dist = normalised - index;
  const isActive = Math.round(normalised) === index;

  const [descVisible, setDescVisible] = useState(false);

  // Reset description when step becomes inactive
  useEffect(() => {
    if (!isActive) setDescVisible(false);
  }, [isActive]);

  let opacity: number;
  let yOffset: number;

  if (isFirst && dist <= 0) { opacity = 1; yOffset = 0; }
  else if (isLast && dist >= 0) { opacity = 1; yOffset = 0; }
  else {
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) { opacity = 1; yOffset = 0; }
    else if (absDist < 0.6) {
      opacity = 1 - (absDist - 0.4) / 0.2;
      yOffset = (dist > 0 ? -1 : 1) * Math.min((absDist - 0.4) * 100, 30);
    }
    else { opacity = 0; yOffset = (dist > 0 ? -1 : 1) * 30; }
  }

  return (
    <div
      className="absolute inset-0 flex flex-col gap-10 transition-[opacity,transform] duration-500 ease-out"
      style={{ opacity, transform: `translateY(${yOffset}px)`, pointerEvents: opacity > 0.5 ? "auto" : "none" }}
    >
      <StepLabel step={step.step} />
      <AnimatedTitle
        title={step.title}
        active={isActive}
        onRevealed={() => setDescVisible(true)}
        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-['Urbanist'] leading-tight lg:leading-[88px]"
      />
      <p
        className="text-zinc-400 text-base font-normal font-['Urbanist'] leading-6 pr-0 lg:pr-32"
        style={{
          opacity: descVisible ? 1 : 0,
          transform: descVisible ? "translateY(0px)" : "translateY(10px)",
          transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {step.description}
      </p>
    </div>
  );
}

function StickyVisualContent({
  visual,
  index,
  normalised,
  total,
}: {
  visual: React.ReactNode;
  index: number;
  normalised: number;
  total: number;
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const dist = normalised - index;

  let opacity: number;

  if (isFirst && dist <= 0) opacity = 1;
  else if (isLast && dist >= 0) opacity = 1;
  else {
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) opacity = 1;
    else if (absDist < 0.6) opacity = 1 - (absDist - 0.4) / 0.2;
    else opacity = 0;
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out"
      style={{ opacity, pointerEvents: opacity > 0.5 ? "auto" : "none" }}
    >
      {visual}
    </div>
  );
}

function DesktopStickySteps({ steps, header }: { steps: StepData[]; header: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [normalised, setNormalised] = useState(0);
  const prevRef = useRef(-1);

  const onScrollTick = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const scrollableHeight = el.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;
    const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
    const val = rawProgress * (steps.length - 1);
    if (Math.abs(val - prevRef.current) > 0.003) {
      prevRef.current = val;
      setNormalised(val);
    }
  }, [steps.length]);

  useScrollCallback(onScrollTick);

  return (
    <div ref={containerRef} className="hidden lg:block relative w-full" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-6 xl:py-10">
        {/* Section header sits at the top of the sticky panel */}
        <div className="w-full max-w-[1266px] mx-auto px-6 lg:px-10 xl:px-8 pb-4 xl:pb-8">
          {header}
        </div>

        <div className="w-full max-w-[1266px] mx-auto px-6 lg:px-10 xl:px-8 flex items-center">
          {/* Left: Text content */}
          <div className="flex-1 flex items-center">
            <div className="relative w-full max-w-[569px]" style={{ minHeight: "360px" }}>
              {steps.map((s, idx) => (
                <StickyTextContent key={s.step} step={s} index={idx} normalised={normalised} total={steps.length} />
              ))}
            </div>
          </div>

          {/* Right: Visual + Progress bar */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="relative lg:w-[400px] lg:h-[450px] xl:w-[500px] xl:h-[560px]">
              {steps.map((s, idx) => (
                <StickyVisualContent key={s.step} visual={s.visual} index={idx} normalised={normalised} total={steps.length} />
              ))}
            </div>
            <StickyProgressBar normalised={normalised} total={steps.length} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Step Section (vertical stack, < lg)                        */
/* ------------------------------------------------------------------ */

function MobileStepSection({ step, title, description, visual }: StepData) {
  const [descVisible, setDescVisible] = useState(false);

  return (
    <div className="w-full py-2">
      <div className="flex flex-col items-center gap-3">
        <div className="w-full flex flex-col gap-4">
          <StepLabel step={step} />
          <AnimatedTitle
            title={title}
            observeIntersection
            onRevealed={() => setDescVisible(true)}
            className="text-4xl md:text-6xl font-bold font-['Urbanist'] leading-tight"
          />
          <p
            className="text-zinc-400 text-base font-normal font-['Urbanist'] leading-6"
            style={{
              opacity: descVisible ? 1 : 0,
              transform: descVisible ? "translateY(0px)" : "translateY(10px)",
              transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {description}
          </p>
        </div>
        <div className="flex justify-center">
          {visual}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Export                                                        */
/* ------------------------------------------------------------------ */

export function MarketingHowItWorksSection() {
  const steps: StepData[] = [
    {
      step: 1,
      title: "Input Your\nCampaign\nBrief.",
      description: "Focus on getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you",
      visual: <Step1Visual />,
    },
    {
      step: 2,
      title: "Generate\nCreative\nAds Agent.",
      description: "Focus on getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you",
      visual: <Step2Visual />,
    },
    {
      step: 3,
      title: "It Launches\nYour Ads in\nWorkspace",
      description: "Focus on getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you",
      visual: <Step3Visual />,
    },
    {
      step: 4,
      title: "Monitor\nCampaign\nPerformance.",
      description: "Focus on getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you",
      visual: <Step4Visual />,
    },
  ];

  const sectionHeader = (
    <div className="flex flex-col items-center gap-4 pb-6 lg:pb-4">
      <Badge>How it Works</Badge>
      <ScrollTextReveal
        text="How Work Happens"
        className="text-center text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
      />
      <p className="text-center text-[#7D7C83] text-lg md:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9 max-w-[760px]">
        Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
      </p>
    </div>
  );

  return (
    <section className="relative z-10 w-full bg-black py-12 lg:pt-0 md:pb-20">
      {/* Mobile-only section header */}
      <div className="lg:hidden px-6 md:px-10 pb-4 md:pb-6">
        {sectionHeader}
      </div>

      {/* Desktop: Sticky scroll animation (header is inside the sticky panel, no gap) */}
      <DesktopStickySteps steps={steps} header={sectionHeader} />

      {/* Mobile: Vertical stack */}
      <div className="lg:hidden px-6 md:px-10">
        <div className="flex flex-col gap-2">
          {steps.map((s) => (
            <MobileStepSection key={s.step} step={s.step} title={s.title} description={s.description} visual={s.visual} />
          ))}
        </div>
      </div>
    </section>
  );
}
