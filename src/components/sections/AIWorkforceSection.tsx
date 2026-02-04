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
        "relative overflow-hidden rounded-[35px]",
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
        "px-[12px] py-[2px]",
        "font-feature-stylistic text-[16px] font-semibold leading-[24px] text-white",
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
    <GlassCard className="h-[312px] w-full max-w-[406px]">
      <div className="relative h-full w-full p-[20px]">
        <div className="relative mx-auto size-[260px]">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[22px] rounded-full border border-white/10" />
          <div className="absolute inset-[48px] rounded-full border border-white/10" />
          <div className="absolute inset-[96px] rounded-full border border-white/10" />
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_320deg,rgba(255,255,255,0.09)_0deg,rgba(255,255,255,0)_55deg,rgba(255,255,255,0)_360deg)] opacity-50" />

          <div className="absolute left-1/2 top-1/2 size-[84px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center">
            <RocketIcon />
          </div>

          <Avatar
            src="/images/team/member-1.png"
            alt="Team member"
            className="absolute left-1/2 top-[-6px] size-[42px] -translate-x-1/2 border-white/20"
          />
          <Avatar
            src="/images/team/member-2.png"
            alt="Team member"
            className="absolute left-[12px] top-1/2 size-[42px] -translate-y-1/2 border-white/20"
          />
          <Avatar
            src="/images/team/member-4.png"
            alt="Team member"
            className="absolute right-[12px] top-1/2 size-[42px] -translate-y-1/2 border-white/20"
          />

          <div className="absolute bottom-[44px] right-[64px]">
            <CursorIcon className="rotate-[18deg]" />
          </div>
        </div>

        <div className="absolute left-[10px] top-1/2 -translate-y-1/2">
          <div className="relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-[14px] py-[6px] text-[12px] font-semibold text-[#CBCACC]">
            AI Agents
            <span className="absolute right-[-6px] top-1/2 size-[12px] -translate-y-1/2 rotate-45 bg-white/[0.04] border-r border-t border-white/10" />
          </div>
        </div>

        <div className="absolute right-[10px] top-1/2 -translate-y-1/2">
          <div className="relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-[14px] py-[6px] text-[12px] font-semibold text-[#CBCACC]">
            <span className="absolute left-[-6px] top-1/2 size-[12px] -translate-y-1/2 rotate-45 bg-white/[0.04] border-b border-l border-white/10" />
            Team members
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function GoalCard() {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] px-[16px] py-[14px]">
      <div className="flex items-start justify-between gap-[14px]">
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
    <GlassCard className="w-full max-w-[360px] px-[18px] py-[18px]">
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

        <div className="relative rounded-[22px] border border-white/10 bg-white/[0.03] px-[16px] py-[14px]">
          <div className="absolute left-[8px] top-[14px] size-[18px] rounded-full border border-white/10 bg-white/[0.03]" />

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
    <GlassCard className="h-[324px] w-full max-w-[415px] px-[22px] py-[20px]">
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
          <span className="rounded-full bg-white/[0.04] px-[10px] py-[4px] font-feature-stylistic text-[11px] font-semibold leading-[16px] text-[#CBCACC]">
            AI Agent
          </span>
          <span className="font-feature-stylistic text-[12px] font-medium leading-[18px] text-[#7D7C83]">
            1.50 AM
          </span>
        </div>
      </div>

      <div className="mt-[18px] space-y-[10px]">
        <div className="h-[14px] w-full rounded-full bg-white/[0.06]" />
        <div className="h-[14px] w-[92%] rounded-full bg-white/[0.05]" />
        <div className="h-[14px] w-[84%] rounded-full bg-white/[0.04]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[10px] rounded-[16px] bg-white/[0.03] px-[14px] py-[12px]">
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

      <div className="mt-[16px] space-y-[12px]">
        <div className="flex items-center gap-[12px]">
          <div className="size-[22px] rounded-full border border-white/10 bg-white/[0.03]" />
          <div className="h-[18px] flex-1 rounded-[12px] bg-white/[0.04]" />
        </div>
        <div className="h-[14px] w-[88%] rounded-full bg-white/[0.03]" />
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

        <div className="relative mt-[62px] lg:mt-[71px]">
          <div className="hidden lg:block">
            <p className="absolute left-[100px] mt-[-12px] text-[20px] leading-[28px] font-medium text-white/55">
              You don&apos;t coordinate. You{" "}
              <InlinePill className="mx-[6px]">orchestrate</InlinePill>
            </p>
            <p className="absolute right-[100px] mt-[-12px] text-[20px] leading-[28px] font-medium text-white/55">
              They{" "}
              <InlinePill className="mx-[6px]">execute</InlinePill>. They{" "}
              <InlinePill className="mx-[6px]">deliver</InlinePill>.
            </p>
          </div>

          <div className="grid gap-[22px] lg:relative lg:h-[420px] lg:gap-0 lg:[perspective:1200px]">
            <div className="lg:hidden text-center text-[18px] leading-[26px] font-medium text-white/55">
              You don&apos;t coordinate. You <InlinePill>orchestrate</InlinePill>
            </div>
            <div className="lg:absolute lg:left-0 lg:top-[56px] lg:rotate-[-10deg] lg:[transform-style:preserve-3d]">
              <RadarCard />
            </div>

            <div className="lg:hidden text-center text-[18px] leading-[26px] font-medium text-white/55">
              They <InlinePill>execute</InlinePill>. They{" "}
              <InlinePill>deliver</InlinePill>.
            </div>
            <div className="lg:absolute lg:left-1/2 lg:top-[44px] lg:-translate-x-1/2 lg:rotate-[8deg] lg:[transform-style:preserve-3d]">
              <AgentCard />
            </div>

            <div className="lg:absolute lg:right-0 lg:top-[74px] lg:rotate-[10deg] lg:[transform-style:preserve-3d]">
              <TasksCard />
            </div>
          </div>

          <p className="mt-[32px] text-center text-[18px] leading-[26px] font-medium text-white/55 md:text-[20px] md:leading-[28px]">
            Skip management. <InlinePill>Set goals.</InlinePill>
          </p>
        </div>
      </Container>
    </Section>
  );
}
