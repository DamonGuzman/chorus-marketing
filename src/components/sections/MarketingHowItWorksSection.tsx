/* eslint-disable @next/next/no-img-element */
"use client";

function ProgressBar({ step, total = 4 }: { step: number; total?: number }) {
  return (
    <div className="hidden lg:flex flex-col items-center gap-2">
      <span className="text-[#CBCACC] text-sm font-normal font-['Urbanist']">
        {String(step).padStart(2, "0")}
      </span>
      <div className="w-1 h-96 bg-neutral-800 rounded-full overflow-hidden relative">
        <div className="w-1 bg-violet-400 rounded-full absolute top-0 left-0" style={{ height: `${(step / total) * 100}%` }} />
      </div>
      <span className="text-zinc-400/40 text-sm font-normal font-['Urbanist']">
        {String(total).padStart(2, "0")}
      </span>
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

function AgentCardLarge({ name, pending = false }: { name: string; pending?: boolean }) {
  return (
    <div className={`w-full p-4 md:p-5 ${pending ? "rounded-2xl border border-orange-400" : "bg-white/[0.04] rounded-2xl"} backdrop-blur-xl flex flex-col gap-3`}>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-xl shrink-0" />
        <div className="w-2 h-2 bg-green-700 rounded-full border border-white shrink-0" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold font-['Urbanist']">{name}</span>
          <span className="text-[#7D7C83] text-xs font-normal font-['Urbanist']">3 tasks working in parallel</span>
        </div>
      </div>
      <div className="flex items-center justify-between pl-2">
        <div className="flex flex-col gap-1">
          <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist']">Currently working on</span>
          <div className="flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] bg-violet-500 rounded-full" />
            <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Building Linear Clone</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          {pending && (
            <div className="px-2 py-1 bg-red-600/5 rounded-full border border-orange-400/60 flex items-center gap-1.5">
              <div className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
              <span className="text-[#CBCACC] text-[10px] font-bold font-['Urbanist']">Pending</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PhaseCard({ title, completed = false }: { title: string; completed?: boolean }) {
  return (
    <div className="w-full p-3 bg-white/[0.04] rounded-2xl flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-[#CBCACC] text-base font-extrabold font-['Urbanist']">{title}</span>
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
      <div className="flex flex-wrap items-center gap-4 md:gap-7">
        <div className="flex items-center gap-1.5">
          <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Integration :</span>
          <div className="flex -space-x-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-zinc-300 border border-zinc-700" />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Agents :</span>
          <div className="flex -space-x-1">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-5 h-5 rounded-full bg-zinc-400 border border-zinc-700" />
            ))}
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
      <div className="pl-2 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist']">Currently working on</span>
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
    <div className="w-full max-w-[500px] bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-3xl shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] border border-slate-500/20 p-4 md:pl-4 md:pr-6 md:pt-8 md:pb-3 overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-9 max-h-[545px] overflow-hidden">
        {/* User message */}
        <div className="self-end max-w-[320px] px-5 py-5 bg-gradient-to-l from-violet-400 to-violet-500 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]">
          <p className="text-white text-base md:text-lg font-bold font-['Urbanist'] leading-7">
            I need to run a marketing campaign for my SaaS startup&apos;s product launch. Can you help me plan this?
          </p>
        </div>

        {/* AI Response */}
        <div className="flex flex-col gap-5">
          {/* Thought process */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#7D7C83" strokeWidth="1.5" />
              </svg>
              <span className="text-[#7D7C83] text-lg font-semibold font-['Urbanist']">Thought process</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#7D7C83" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-end gap-4 pl-2">
              <div className="w-0.5 h-20 bg-white rounded-full shrink-0" />
              <div className="flex flex-col gap-4">
                <span className="text-[#CBCACC] text-base md:text-lg font-semibold font-['Urbanist']">Responding and Planning Now</span>
                <p className="text-white/10 text-sm md:text-base font-medium font-['Urbanist'] leading-7">
                  I&apos;ve crafted a friendly greeting and introduced myself. I&apos;m now listing my capabilities to guide the user effectively.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[#CBCACC] text-base md:text-lg font-semibold font-['Urbanist'] leading-7">
            Hello! I&apos;m Chorus, an AI agent ready to assist you. What can I help you with today?
          </p>

          <div className="h-px bg-white/10" />

          <div className="flex flex-col gap-4">
            <p className="text-[#CBCACC] text-base md:text-lg font-medium font-['Urbanist']">Need some ideas? We could start by:</p>
            <p className="text-[#CBCACC] text-base md:text-lg font-bold font-['Urbanist']">Researching a topic you&apos;re curious about.</p>
            <div className="w-fit px-4 py-2 bg-orange-400/10 rounded-full flex items-center gap-2.5">
              <div className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
              <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Chorus will continue working after your reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step2Visual() {
  return (
    <div className="w-full max-w-[500px] bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-3xl shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] border border-slate-500/20 p-4 md:pl-4 md:pr-6 md:pt-8 md:pb-3 flex flex-col gap-4">
      <AgentCardLarge name="Social Media Agent" />
      <AgentCardLarge name="Email Marketing Agent" pending />
      <AgentCardLarge name="Ad Campaign Agent" />
      <AgentCardLarge name="Social Media Agent" />
    </div>
  );
}

function Step3Visual() {
  return (
    <div className="w-full max-w-[500px] bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 rounded-3xl shadow-[0px_7.4px_12.4px_0px_rgba(0,0,0,0.38)] border border-slate-500/20 p-3 md:p-5 flex flex-col gap-3">
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
      <div className="p-3 bg-white/[0.04] rounded-2xl flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[#CBCACC] text-base font-extrabold font-['Urbanist']">Phase 3: Post-Launch</span>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white text-xs font-bold font-['Urbanist']">Completed</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-7">
          <div className="flex items-center gap-1.5">
            <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Integration :</span>
            <div className="flex -space-x-1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full bg-zinc-300 border border-zinc-700" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">Agents :</span>
            <div className="flex -space-x-1">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-5 h-5 rounded-full bg-zinc-400 border border-zinc-700" />
              ))}
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
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[#7D7C83] text-[10px] font-normal font-['Urbanist']">Currently working on</span>
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
    { name: "Frank Lampard", role: "Product Manager", isAgent: true },
    { name: "David Fincher", role: "HR Manager", isAgent: false },
    { name: "Jake Williamson", role: "UX Manager", isAgent: true },
  ];

  return (
    <div className="w-full max-w-[500px] bg-stone-950 rounded-[20px] overflow-hidden flex flex-col">
      <div className="p-5 bg-zinc-900 rounded-3xl shadow-[0px_0px_73px_0px_rgba(0,0,0,0.50)] flex flex-col gap-5">
        {people.map((person) => (
          <div key={person.name} className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-full shrink-0" />
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
        <h3 className="text-center text-zinc-100 text-3xl md:text-4xl font-bold font-['Urbanist'] leading-9">
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

interface StepSectionProps {
  step: number;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function StepSection({ step, title, description, visual }: StepSectionProps) {
  return (
    <div className="w-full max-w-[1266px] mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6 lg:py-40 xl:py-64">
          <StepLabel step={step} />
          <h3 className="text-zinc-100 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-['Urbanist'] leading-tight md:leading-[70px] lg:leading-[88px]">
            {title}
          </h3>
          <p className="text-zinc-400 text-base font-normal font-['Urbanist'] leading-6 max-w-[400px]">
            {description}
          </p>
        </div>

        {/* Right: Visual + Progress */}
        <div className="flex-1 flex items-start gap-4">
          <div className="flex-1 flex justify-center py-8 lg:py-44">
            {visual}
          </div>
          <ProgressBar step={step} />
        </div>
      </div>
    </div>
  );
}

export function MarketingHowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Input Your\nCampaign Brief.",
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

  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-10 md:gap-14">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-full flex justify-center items-center">
            <span className="text-white text-base font-bold font-['Urbanist']">How it Works</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
              How Work Happens
            </h2>
            <p className="text-center text-[#7D7C83] text-lg md:text-3xl font-medium font-['Urbanist'] leading-7 md:leading-10 max-w-[900px]">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8 md:gap-0">
          {steps.map((s) => (
            <StepSection
              key={s.step}
              step={s.step}
              title={s.title}
              description={s.description}
              visual={s.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
