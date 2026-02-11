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
        "rounded-[18px] border border-white/15 bg-transparent",
        "px-[11px] py-[4px]",
        "shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "font-urbanist text-[18px] font-normal text-[#CBCACC] md:text-[22px]",
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
    <GlassCard className="h-[294px] w-full max-w-full md:max-w-[393px] !overflow-visible !rounded-[35px] !border-0 !bg-[#111111] !shadow-[inset_0px_0px_4.7px_rgba(255,255,255,0.27)]">
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
              <div className="inline-flex items-center rounded-[5px] border border-white/10 bg-[#3D3C42] px-[7px] py-[4px] font-urbanist text-[13px] font-semibold leading-[25px] text-white">
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
              <div className="inline-flex items-center rounded-[5px] border border-white/10 bg-[#3D3C42] px-[7px] py-[4px] font-urbanist text-[13px] font-semibold leading-[25px] text-white">
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
    <div className="rounded-[15px] border border-white/10 bg-white/[0.08] px-[12px] py-[15px]">
      <div className="flex flex-col gap-[14px]">
        <p className="font-urbanist text-[13px] font-bold leading-[23px] text-[#CBCACC]">
          Track Monthly Revenue
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px] text-[#7D7C83]">
            <Image
              src="/images/figma/task-done-01.svg"
              alt=""
              width={17}
              height={17}
            />
            <span className="font-urbanist text-[14px] font-semibold leading-[21px]">
              Tasks : 
            </span>
            <span className="font-urbanist text-[14px] font-medium leading-[21px] text-[#7D7C83]">
              7
            </span>
          </div>

          <div className="flex items-center gap-[4px]">
            <div className="flex -space-x-[8px]">
              <Avatar
                src="/images/team/member-1.png"
                alt="Assignee"
                className="size-[30px] border-[1.3px] border-[#3D3C42]"
              />
              <Avatar
                src="/images/team/member-2.png"
                alt="Assignee"
                className="size-[30px] border-[1.3px] border-[#3D3C42]"
              />
              <Avatar
                src="/images/team/member-4.png"
                alt="Assignee"
                className="size-[30px] border-[1.3px] border-[#3D3C42]"
              />
            </div>
            <span className="font-urbanist text-[14px] font-medium leading-[21px] text-[#7D7C83]">
              +3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TasksCard() {
  return (
    <GlassCard className="h-[294px] w-full max-w-full md:max-w-[393px] !rounded-[35px] !border-0 !bg-[#111111] !shadow-[inset_0px_0px_4.7px_rgba(255,255,255,0.27)] px-[24px] py-[35px]">
      {/* 7 tasks header */}
      <div className="flex items-center gap-[10px] text-[#CBCACC]">
        <span className="inline-flex size-[18px] items-center justify-center rounded-full border border-white/15">
          <span className="size-[10px] rounded-full border-2 border-dashed border-[#CBCACC]/60" />
        </span>
        <span className="font-urbanist text-[18px] font-bold leading-[30px]">
          7 tasks
        </span>
      </div>

      <div className="mt-[15px] space-y-[15px]">
        <GoalCard />

        {/* Second task card */}
        <div className="rounded-[17px] border border-white/10 bg-white/[0.08] px-[13px] py-[17px]">
          <div className="flex items-center justify-between gap-[10px]">
            <div className="inline-flex items-center gap-[6px] rounded-[8px] border border-white/10 bg-white/[0.04] px-[10px] py-[6px]">
              <Avatar
                src="/images/team/member-4.png"
                alt="Doone Rosin"
                className="size-[23px] border-white/10"
              />
              <span className="font-urbanist text-[13px] font-semibold leading-[19px] text-[#CBCACC]">
                Doone Rosin
              </span>
            </div>

            <div className="flex items-center gap-[6px] text-[#7D7C83]">
              <Image
                src="/images/figma/hourglass.svg"
                alt=""
                width={9}
                height={12}
              />
              <span className="font-urbanist text-[13px] font-semibold leading-[19px]">
                Queued
              </span>
            </div>
          </div>

          <div className="mt-[13px] flex items-center gap-[8px] text-[#CBCACC]">
            <Image
              src="/images/figma/task-done-01.svg"
              alt=""
              width={16}
              height={16}
            />
            <span className="font-urbanist text-[15px] font-bold leading-[25px]">
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
    <GlassCard className="h-[294px] w-full max-w-full md:max-w-[393px] !rounded-[35px] !border-0 !bg-[#111111] !shadow-[inset_0px_0px_4.7px_rgba(255,255,255,0.27)] px-[24px] py-[35px]">
      <div className="flex flex-col gap-[12px]">
        {/* Header row */}
        <div className="flex items-center gap-[12px]">
          <Avatar
            src="/images/team/member-1.png"
            alt="Frank"
            className="size-[35px] border-white/15"
          />
          <div className="flex items-center gap-[5px]">
            <span className="font-urbanist text-[16px] font-bold leading-[28px] text-white">
              Frank
            </span>
            <span className="rounded-[5px] border border-white/10 bg-[#3D3C42] px-[7px] py-[3px] font-urbanist text-[12px] font-semibold leading-[23px] text-[#CBCACC]">
              AI Agent
            </span>
          </div>
          <span className="font-urbanist text-[16px] font-medium leading-[26px] text-[#7D7C83]">
            1.50 AM
          </span>
        </div>

        {/* Chat bubble placeholder */}
        <div className="rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px] bg-white/[0.04] p-[12px]">
          <div className="flex flex-col gap-[7px]">
            <div className="h-[31px] w-[284px] rounded-[9px] bg-white/[0.05]" />
            <div className="h-[34px] w-full rounded-[9px] bg-white/[0.05]" />
          </div>
        </div>

        {/* Goal Created row */}
        <div
          className="flex items-center gap-[12px] rounded-[19px] px-[21px] py-[12px]"
          style={{
            background: 'linear-gradient(90deg, rgba(242, 171, 83, 0) 0%, rgba(192, 136, 66, 0.27) 31%, rgba(140, 99, 48, 0) 100%)',
          }}
        >
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
          <p className="font-urbanist text-[15px] font-medium leading-[26px] text-[#CBCACC]">
            Goal Created : <span className="font-semibold text-white">Track Monthly Revenue</span>
          </p>
        </div>

        {/* Skeleton rows (faded) */}
        <div className="space-y-[9px] opacity-50">
          <div className="flex items-start gap-[12px]">
            <div className="size-[38px] shrink-0 rounded-full border border-white/10 bg-white/[0.08]" />
            <div className="h-[57px] flex-1 rounded-[9px] border border-white/10 bg-white/[0.08]" />
          </div>
          <div className="h-[35px] w-full rounded-[9px] border border-white/10 bg-white/[0.08]" />
        </div>
      </div>
    </GlassCard>
  );
}

export function AIWorkforceSection() {
  return (
    <Section
      className="relative overflow-hidden bg-black px-4 py-[50px] md:py-[75px] lg:px-[100px]"
      id="ai-workforce"
      data-node-id="4229:62416"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[50px] md:gap-[71px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[24px]">
            {/* Badge */}
            <div className="inline-flex items-center justify-center overflow-hidden rounded-full bg-white/[0.07] px-[12px] py-[4px]">
              <span className="text-center font-urbanist text-[16px] font-semibold leading-[24px] text-white">
                What Chorus Actually Is
              </span>
            </div>

            {/* Title */}
            <h2 className="text-center font-urbanist text-[32px] font-bold leading-[1.3] text-white md:text-[50px] md:leading-[78px]">
              Your AI Workforce. Always in Sync.
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-[1108px] text-center font-urbanist text-[16px] font-normal leading-[28px] text-[#7D7C83] md:text-[22px] md:leading-[36px]">
            Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you
            autonomous agents that coordinate with each other and run your{" "}
            <span className="font-medium text-white">Sales, Marketing, Finance, Operations, Customer Success</span>{" "}
            - any department you need.
          </p>
        </div>

        {/* Cards area */}
        <div className="flex w-full flex-col items-center">
          {/* Mobile: stacked layout — matching Figma order */}
          <div className="flex flex-col items-center gap-[22px] md:hidden">
            <p className="text-center font-urbanist text-[18px] font-normal leading-[28px] text-[#7D7C83]">
              You don&apos;t coordinate.You{" "}
              <InlinePill>orchestrate</InlinePill>
            </p>
            <AgentCard />

            <p className="text-center font-urbanist text-[18px] font-normal leading-[28px] text-[#7D7C83]">
              They <InlinePill>execute.</InlinePill>{" "}
              They <InlinePill>deliver.</InlinePill>
            </p>
            <TasksCard />

            <p className="text-center font-urbanist text-[18px] font-normal leading-[33px] text-[#7D7C83]">
              Skip management.{" "}
              <InlinePill>Set goals.</InlinePill>
            </p>
            <RadarCard />
          </div>

          {/* Desktop: 3-column layout with labels above each card group */}
          <div className="hidden md:flex md:items-start md:justify-center md:gap-[18px]">
            {/* Left column: label + RadarCard */}
            <div className="flex flex-col items-center gap-[12px] rotate-[-3deg] [transform-style:preserve-3d]">
              <p className="text-center font-urbanist text-[22px] font-normal leading-[33px] text-[#7D7C83]">
                You don&apos;t coordinate.You{" "}
                <InlinePill className="text-[22px]">orchestrate</InlinePill>
              </p>
              <RadarCard />
            </div>

            {/* Center column: AgentCard (no top label, positioned higher) */}
            <div className="mt-[40px] rotate-[4deg] [transform-style:preserve-3d]">
              <AgentCard />
            </div>

            {/* Right column: label + TasksCard */}
            <div className="flex flex-col items-center gap-[12px] rotate-[-3deg] [transform-style:preserve-3d]">
              <p className="text-center font-urbanist text-[22px] font-normal leading-[40px] text-[#7D7C83]">
                They{" "}
                <InlinePill className="text-[22px]">execute.</InlinePill>{" "}
                They{" "}
                <InlinePill className="text-[22px]">deliver.</InlinePill>
              </p>
              <TasksCard />
            </div>
          </div>

          {/* Bottom label - desktop */}
          <p className="mt-[28px] hidden text-center font-urbanist text-[22px] font-normal leading-[33px] text-[#7D7C83] md:block">
            Skip management.{" "}
            <InlinePill className="text-[22px]">Set goals.</InlinePill>
          </p>
        </div>
      </div>
    </Section>
  );
}
