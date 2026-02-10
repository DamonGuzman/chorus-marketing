import Image from "next/image";

import { Avatar, Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px]",
        "border border-white/10",
        "bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent",
        "backdrop-blur-[30px]",
        "shadow-[0px_40px_120px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.27)]" />
    </div>
  );
}

function InlinePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full border border-white/15 bg-white/[0.03]",
        "px-[10px] py-[2px]",
        "font-feature-stylistic text-[14px] font-semibold leading-[22px] text-white",
        className
      )}
    >
      {children}
    </span>
  );
}

function CursorIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-white/80", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.4 2.8l12 6.1-6.4.6 4.1 6.5-2.3 1.5-4.1-6.5-3.2 5.5V2.8z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[40px] text-white/85", className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14.6 3.3c2.9.6 5 2.7 5.6 5.6.3 1.7.1 3.6-.6 5.5l-6.4-6.4c1.9-.7 3.8-.9 5.5-.6z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M12.4 4.1c2.5-1.1 5.4-.7 7.4 1.3 2 2 2.4 4.9 1.3 7.4-.8 1.8-2.1 3.6-3.9 5.4l-2.7 2.7c-.4.4-1 .1-1-.4l.2-3.7-3.7.2c-.5 0-.8-.6-.4-1l2.7-2.7c1.8-1.8 3.6-3.1 5.4-3.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M9.5 14.4l-1.8 1.8c-.6.6-1.4 1-2.3 1.1l-1.9.2.2-1.9c.1-.9.5-1.7 1.1-2.3l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M15.1 8.9a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function RadarCard() {
  return (
    <GlassCard className="h-[250px] w-full max-w-[290px] !overflow-visible">
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Orbital system container */}
        <div className="relative size-[200px]">
          {/* Outer orbit ring */}
          <div className="absolute inset-0 rounded-full border-[0.6px] border-white/[0.08]" />
          
          {/* Middle orbit ring */}
          <div className="absolute inset-[26px] rounded-full border-[0.6px] border-white/[0.10]" />
          
          {/* Inner orbit ring with glow */}
          <div 
            className="absolute inset-[50px] rounded-full"
            style={{
              border: '1.47px solid rgba(255, 255, 255, 0.06)',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.04) 100%)',
              backdropFilter: 'blur(88px)',
            }}
          />

          {/* Center rocket circle */}
          <div 
            className="absolute left-1/2 top-1/2 flex size-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
            style={{
              border: '1.47px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <img 
              src="/images/figma/rocket.svg" 
              alt="Rocket" 
              className="h-[28px] w-[28px]"
            />
          </div>

          {/* Sweep gradient overlay */}
          <div 
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(180deg, #FBFBFB 0%, #958595 12%, #252525 20%)',
              transform: 'rotate(86.79deg)',
              boxShadow: '0px 3.75px 3.75px 0px rgba(0, 0, 0, 0.25)',
              mixBlendMode: 'soft-light',
              opacity: 0.3,
            }}
          />

          {/* Avatar: top center on outer orbit (~12 o'clock) - blue border */}
          <div className="absolute left-1/2 top-[-6px] -translate-x-1/2">
            <div className="size-[38px] overflow-hidden rounded-full border-[2px] border-[#5B6ABF]">
              <img 
                src="/images/figma/4229-62012/imgEllipse54.png" 
                alt="Team member" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Avatar: bottom-left on outer orbit (~7-8 o'clock) - red border */}
          <div className="absolute bottom-[10px] left-[-2px]">
            <div className="size-[38px] overflow-hidden rounded-full border-[2px] border-[#E05A5A]">
              <img 
                src="/images/figma/4229-62012/imgEllipse55.png" 
                alt="AI Agent" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Avatar: right on outer orbit (~3 o'clock) - purple border */}
          <div className="absolute right-[-6px] top-[38%] -translate-y-1/2">
            <div className="size-[38px] overflow-hidden rounded-full border-[2px] border-[#9B6EC7]">
              <img 
                src="/images/figma/4229-62012/imgEllipse56.png" 
                alt="Team member" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* AI Agents label + cursor icon: upper-left (~10 o'clock) */}
          <div className="absolute left-[-16px] top-[30%] -translate-y-1/2">
            <div className="flex items-center gap-[4px]">
              <div className="inline-flex items-center rounded-[6px] bg-[#3A3A3C] px-[10px] py-[4px] text-[10px] font-bold text-white shadow-sm">
                AI Agents
              </div>
              <img 
                src="/images/figma/cursor-02.svg" 
                alt="" 
                className="h-[16px] w-[16px] rotate-[10deg] opacity-70"
              />
            </div>
          </div>

          {/* Team members label + cursor icon: lower-right (~5 o'clock) */}
          <div className="absolute bottom-[14px] right-[-12px]">
            <div className="flex items-center gap-[4px]">
              <img 
                src="/images/figma/cursor-02.svg" 
                alt="" 
                className="h-[16px] w-[16px] rotate-[190deg] opacity-70"
              />
              <div className="inline-flex items-center rounded-[6px] bg-[#3A3A3C] px-[10px] py-[4px] text-[10px] font-bold text-white shadow-sm">
                Team members
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function GoalCard() {
  return (
    <div className="rounded-[14px] border border-white/10 bg-white/[0.03] px-[14px] py-[12px]">
      <div className="flex items-start justify-between gap-[10px]">
        <div className="min-w-0">
          <p className="font-feature-stylistic text-[14px] font-semibold leading-[22px] text-[#CBCACC]">
            Track Monthly Revenue
          </p>
          <div className="mt-[8px] flex items-center gap-[8px] text-[#7D7C83]">
            <Image
              src="/images/figma/task-done-01.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="font-feature-stylistic text-[12px] font-semibold leading-[18px]">
              Tasks : <span className="text-[#CBCACC]">7</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[8px]">
          <div className="flex -space-x-[10px]">
            <Avatar
              src="/images/team/member-1.png"
              alt="Assignee"
              className="size-[30px] border-white/15"
            />
            <Avatar
              src="/images/team/member-2.png"
              alt="Assignee"
              className="size-[30px] border-white/15"
            />
            <Avatar
              src="/images/team/member-4.png"
              alt="Assignee"
              className="size-[30px] border-white/15"
            />
          </div>
          <span className="font-feature-stylistic text-[12px] font-semibold leading-[18px] text-[#CBCACC]">
            +3
          </span>
        </div>
      </div>
    </div>
  );
}

function TasksCard() {
  return (
    <GlassCard className="w-full max-w-[270px] px-[14px] py-[14px]">
      <div className="flex items-center gap-[10px] text-[#CBCACC]">
        <span className="inline-flex size-[18px] items-center justify-center rounded-full border border-white/15">
          <span className="size-[10px] rounded-full border-2 border-dashed border-[#CBCACC]/60" />
        </span>
        <span className="font-feature-stylistic text-[14px] font-semibold leading-[22px]">
          7 tasks
        </span>
      </div>

      <div className="mt-[14px] space-y-[12px]">
        <GoalCard />

        <div className="relative rounded-[14px] border border-white/10 bg-white/[0.03] px-[14px] py-[12px]">
          <div className="absolute left-[8px] top-[12px] size-[16px] rounded-full border border-white/10 bg-white/[0.03]" />

          <div className="flex items-center justify-between gap-[10px]">
            <div className="inline-flex items-center gap-[8px] rounded-full border border-white/10 bg-white/[0.03] px-[10px] py-[6px]">
              <Avatar
                src="/images/team/member-4.png"
                alt="Doone Rosin"
                className="size-[20px] border-white/10"
              />
              <span className="font-feature-stylistic text-[12px] font-semibold leading-[18px] text-[#CBCACC]">
                Doone Rosin
              </span>
            </div>

            <div className="flex items-center gap-[8px] text-[#7D7C83]">
              <Image
                src="/images/figma/hourglass.svg"
                alt=""
                width={10}
                height={12}
              />
              <span className="font-feature-stylistic text-[12px] font-semibold leading-[18px]">
                Queued
              </span>
            </div>
          </div>

          <div className="mt-[12px] flex items-center gap-[10px] text-[#CBCACC]">
            <Image
              src="/images/figma/task-done-01.svg"
              alt=""
              width={14}
              height={14}
            />
            <span className="font-feature-stylistic text-[14px] font-bold leading-[22px]">
              P&amp;L Report Draft
            </span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function AgentCard() {
  return (
    <GlassCard className="h-[240px] w-full max-w-[290px] px-[16px] py-[14px]">
      <div className="flex items-center gap-[10px]">
        <Avatar
          src="/images/team/member-1.png"
          alt="Frank"
          className="size-[36px] border-white/15"
        />
        <div className="flex items-center gap-[10px]">
          <span className="font-feature-stylistic text-[15px] font-bold leading-[22px] text-white">
            Frank
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-[10px] py-[3px] font-feature-stylistic text-[11px] font-semibold leading-[16px] text-[#CBCACC]">
            AI Agent
          </span>
          <span className="font-feature-stylistic text-[12px] font-medium leading-[18px] text-[#7D7C83]">
            1.50 AM
          </span>
        </div>
      </div>

      <div className="mt-[14px] space-y-[8px]">
        <div className="h-[12px] w-full rounded-full bg-white/[0.06]" />
        <div className="h-[12px] w-[92%] rounded-full bg-white/[0.05]" />
        <div className="h-[12px] w-[84%] rounded-full bg-white/[0.04]" />
      </div>

      <div className="mt-[14px] flex items-center gap-[10px] rounded-[12px] bg-white/[0.03] px-[12px] py-[10px]">
        <svg
          className="size-[16px] text-[#7D7C83]"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9 7.8v8.4L17 12 9 7.8z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <p className="font-feature-stylistic text-[14px] font-medium leading-[22px] text-[#CBCACC]">
          Goal Created : <span className="text-white">Track Monthly Revenue</span>
        </p>
      </div>

      <div className="mt-[12px] space-y-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="size-[20px] rounded-full border border-white/10 bg-white/[0.03]" />
          <div className="h-[14px] flex-1 rounded-[10px] bg-white/[0.04]" />
        </div>
        <div className="h-[12px] w-[88%] rounded-full bg-white/[0.03]" />
      </div>
    </GlassCard>
  );
}

export function AIWorkforceSection() {
  return (
    <Section
      className="relative overflow-hidden py-[100px]"
      id="ai-workforce"
      data-node-id="4229:62416"
    >
      <div className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,138,251,0.16)_0%,rgba(0,0,0,0)_55%)]" />

      <Container className="relative">
        <div className="mx-auto flex max-w-[1108px] flex-col items-center text-center">
          <div className="rounded-full border border-white/15 bg-white/[0.02] px-[18px] py-[8px] font-feature-stylistic text-[14px] font-semibold leading-[20px] text-white/90">
            What Chorus Actually Is
          </div>

          <h2 className="mt-[24px] text-[40px] leading-[48px] font-bold tracking-[-0.5px] text-white md:text-[50px] md:leading-[78px]">
            Your AI Workforce. Always in Sync.
          </h2>

          <p className="mt-[22px] text-[18px] leading-[30px] font-normal text-[#7D7C83] md:text-[22px] md:leading-[36px]">
            Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you
            autonomous agents that coordinate with each other and run your{" "}
            <span className="text-white">Sales</span>,{" "}
            <span className="text-white">Marketing</span>,{" "}
            <span className="text-white">Finance</span>,{" "}
            <span className="text-white">Operations</span>,{" "}
            <span className="text-white">Customer Success</span> - any department
            you need.
          </p>
        </div>

        <div className="relative mt-[62px] md:mt-[71px]">
          <div className="hidden md:flex md:items-center md:justify-between md:px-[30px]">
            <p className="text-[16px] leading-[24px] font-medium tracking-[-0.2px] text-white/50">
              You don&apos;t coordinate.You{" "}
              <InlinePill className="mx-[3px] text-[14px]">orchestrate</InlinePill>
            </p>
            <p className="text-[16px] leading-[24px] font-medium tracking-[-0.2px] text-white/50">
              They{" "}
              <InlinePill className="mx-[3px] text-[14px]">execute</InlinePill>.{" "}
              They{" "}
              <InlinePill className="mx-[3px] text-[14px]">deliver</InlinePill>.
            </p>
          </div>

          {/* Mobile: stacked layout */}
          <div className="flex flex-col items-center gap-[22px] md:hidden">
            <div className="text-center text-[18px] leading-[26px] font-medium text-white/55">
              You don&apos;t coordinate. You <InlinePill>orchestrate</InlinePill>
            </div>
            <RadarCard />

            <div className="text-center text-[18px] leading-[26px] font-medium text-white/55">
              They <InlinePill>execute</InlinePill>. They{" "}
              <InlinePill>deliver</InlinePill>.
            </div>
            <AgentCard />
            <TasksCard />
          </div>

          {/* Desktop: horizontal row with rotations matching Figma */}
          <div className="hidden md:flex md:h-[320px] md:items-center md:justify-center md:gap-[18px] md:px-[20px]">
            <div className="mt-[10px] rotate-[-3deg] [transform-style:preserve-3d]">
              <RadarCard />
            </div>
            <div className="mt-[-6px] rotate-[0deg] [transform-style:preserve-3d]">
              <AgentCard />
            </div>
            <div className="mt-[10px] rotate-[3deg] [transform-style:preserve-3d]">
              <TasksCard />
            </div>
          </div>

          <p className="mt-[28px] text-center text-[16px] leading-[24px] font-medium tracking-[-0.2px] text-white/50 md:text-[16px] md:leading-[24px]">
            Skip management.{" "}
            <InlinePill className="text-[14px]">Set goals.</InlinePill>
          </p>
        </div>
      </Container>
    </Section>
  );
}
