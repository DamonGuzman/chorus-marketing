import Image from "next/image";

import { Badge, Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";

/* ============================================================
   Step data
   ============================================================ */

const steps = [
  {
    number: "1",
    title: "AI That Works for Every Role",
    description:
      "Create AI agents for any role: SDR, Content Writer, Financial Analyst, Project Manager. Name them. Give them your data. Set their rules.",
    active: true,
  },
  {
    number: "2",
    title: "Set the Direction",
    description:
      '"Launch our Q4 campaign." "Research 100 prospects and schedule 20 meetings." "Analyze spending and identify $50K in savings." Your AI workforce coordinates automatically—each agent knows its part and how it fits with the others. Just like humans, but faster and without the drama.',
    active: false,
  },
  {
    number: "3",
    title: "Watch The Performance",
    description:
      "Real-time visibility into what\u2019s happening: emails sent, content created, analysis completed, deals closed. Full transparency. Every agent in sync. Zero micromanagement.",
    active: false,
  },
];

/* ============================================================
   Small icon components for the agent card
   ============================================================ */

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[12px] text-[#7D7C83]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="3.5"
        width="12"
        height="9"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M4.5 3.5V2.5a1 1 0 011-1h3a1 1 0 011 1v1"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="7" cy="8" r="1" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

function IdCardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[12px] text-[#7D7C83]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1"
        y="2"
        width="12"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="5.5" cy="6" r="1.5" stroke="currentColor" strokeWidth="0.8" />
      <path
        d="M3 10c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[12px] text-[#7D7C83]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="2"
        width="11"
        height="10.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M1.5 5.5h11" stroke="currentColor" strokeWidth="1.1" />
      <path d="M4.5 1v2M9.5 1v2" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-white", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="2"
        width="17"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 9h6M7 12h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-white", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="16"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-[#7D7C83]", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="14"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M7 2h6v2a1 1 0 01-1 1H8a1 1 0 01-1-1V2z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M6 9h5M6 12h8"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlagIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[12px] text-[#7D7C83]", className)}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 2v10M3 2l7 3.5L3 9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-[#7D7C83]", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-[#7D7C83]", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 3a2 2 0 012-2h5l5 5v10a2 2 0 01-2 2H6a2 2 0 01-2-2V3z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M11 1v5h5" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function SlackIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[26px]", className)}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 16.5a2 2 0 11-2-2h2v2zm1 0a2 2 0 114 0v5a2 2 0 11-4 0v-5z"
        fill="#E01E5A"
      />
      <path
        d="M11.5 6.5a2 2 0 11-2 2v-2h2zm0 1a2 2 0 110 4h-5a2 2 0 110-4h5z"
        fill="#36C5F0"
      />
      <path
        d="M21.5 11.5a2 2 0 11-2 2v-2h2zm-1 0a2 2 0 11-4 0v-5a2 2 0 114 0v5z"
        fill="#2EB67D"
      />
      <path
        d="M16.5 21.5a2 2 0 11-2-2h2v2zm0-1a2 2 0 110-4h5a2 2 0 110 4h-5z"
        fill="#ECB22E"
      />
    </svg>
  );
}

/* ============================================================
   Progress dots (for "In Progress" indicator)
   ============================================================ */

function ProgressDots() {
  return (
    <span className="inline-flex items-center gap-[1px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="rounded-full bg-warning"
          style={{
            width: 1.5 + i * 0.2,
            height: 1.5 + i * 0.2,
            opacity: 0.6 + i * 0.05,
          }}
        />
      ))}
    </span>
  );
}

/* ============================================================
   Step item component (left side)
   ============================================================ */

function StepItem({
  number,
  title,
  description,
  active,
  isLast,
}: {
  number: string;
  title: string;
  description: string;
  active: boolean;
  isLast: boolean;
}) {
  return (
    <div className="self-stretch inline-flex justify-start items-center gap-4 md:gap-20">
      {/* Vertical line */}
      <div
        className={cn(
          "w-[3px] h-44 shrink-0",
          active ? "bg-zinc-300" : "bg-transparent"
        )}
      />

      {/* Content card */}
      <div
        className={cn(
          "w-full md:w-96 px-5 pt-7 pb-5 rounded-3xl inline-flex flex-col justify-start items-start gap-2.5",
          active ? "bg-white/5" : ""
        )}
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-5">
          {/* Number badge + Title */}
          <div className="inline-flex justify-start items-center gap-5">
            <div
              className={cn(
                "w-8 h-8 px-3 py-1 bg-white/5 rounded-[100px] flex justify-center items-center gap-2 overflow-hidden",
                "text-center font-['Urbanist'] text-base font-semibold leading-6",
                active ? "text-white" : "text-gray-300"
              )}
            >
              {number}
            </div>
            <h3
              className={cn(
                "font-['Urbanist'] text-[18px] font-bold leading-[28px] md:text-xl md:leading-8",
                active ? "text-white" : "text-gray-300"
              )}
            >
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="self-stretch font-['Urbanist'] text-[14px] font-normal leading-[24px] text-gray-300 md:text-base md:leading-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Agent Card (right side visual)
   ============================================================ */

function AgentProfileCard() {
  return (
    <div
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-[35px]",
        "bg-black/0",
        "shadow-[0px_4px_53px_rgba(0,0,0,1)]",
        "p-4 pt-6 md:pt-[31px] md:pr-[10px] md:pb-[3px] md:pl-[27px]"
      )}
    >
      {/* Agent header */}
      <div className="flex items-start gap-3 md:gap-[17px]">
        {/* Profile avatar */}
        <Image
          src="/images/figma/Ellipse 53.svg"
          alt="Frank"
          width={91}
          height={91}
          className="size-[70px] shrink-0 rounded-full object-cover md:size-[91px]"
        />

        {/* Info */}
        <div className="flex flex-col gap-[10px]">
          {/* Name row */}
          <div className="flex flex-wrap items-center gap-[10px]">
            <span className="font-urbanist text-[16px] font-bold leading-[24px] text-white md:text-[19px] md:leading-[30px]">
              Frank
            </span>
            <span className="inline-flex items-center rounded-[4px] border border-white/10 bg-gray-600 px-[5px] py-[5px] font-urbanist text-[8px] font-semibold leading-[15px] text-gray-100 md:text-[9px] md:leading-[17px]">
              AI Agent
            </span>
            <span className="inline-flex items-center rounded-[9px] border border-green px-[5px] py-[5px] font-urbanist text-[10px] font-normal leading-[18px] text-green md:px-[6px] md:py-[6px] md:text-[11px] md:leading-[21px]">
              Active
            </span>
          </div>

          {/* Meta info */}
          <div className="flex items-center gap-[9px]">
            <BriefcaseIcon />
            <span className="font-urbanist text-[11px] font-medium leading-[17px] text-[#7D7C83] md:text-[12px] md:leading-[19px]">
              Finance Manager
            </span>
          </div>
          <div className="flex items-center gap-[9px]">
            <IdCardIcon />
            <span className="font-urbanist text-[11px] font-medium leading-[17px] text-[#7D7C83] md:text-[12px] md:leading-[19px]">
              ID : AGT-RES-2847
            </span>
          </div>
          <div className="flex items-center gap-[9px]">
            <CalendarIcon />
            <span className="font-urbanist text-[11px] font-medium leading-[17px] text-[#7D7C83] md:text-[12px] md:leading-[19px]">
              Deployed at March 15, 2024
            </span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-[26px] flex items-center gap-[14px]">
        <button className="inline-flex items-center gap-[7px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 px-[13px] py-[10px] pr-[22px] shadow-glow">
          <Image src="/images/figma/message-01.svg" alt="" width={16} height={16} />
          <span className="font-urbanist text-[12px] font-bold leading-[21px] text-white">
            Chat
          </span>
        </button>
        <button className="inline-flex items-center gap-[7px] rounded-full border-[2px] border-white/25 px-[28px] py-[10px]">
          <Image src="/images/figma/call.svg" alt="" width={16} height={16} />
          <span className="font-urbanist text-[12px] font-bold leading-[21px] text-white">
            Call
          </span>
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Task Panel Card (overlapping, rotated)
   ============================================================ */

function TaskPanelCard() {
  return (
    <div
      className="w-full min-w-0 rounded-[27px] bg-[#121212] px-4 py-5 md:px-[18px] md:py-[26px]"
      style={{
        boxShadow: "inset 0px 0px 7px rgba(255, 255, 255, 0.27)",
        transform: "rotate(2deg)",
      }}
    >
      {/* Header */}
      <div className="flex items-baseline justify-between">
        <span className="font-urbanist text-[13px] font-bold uppercase leading-[25px] text-gray-100">
          Current Task (7)
        </span>
        <span className="font-urbanist text-[12px] font-semibold leading-[25px] text-[#7D7C83]">
          View all
        </span>
      </div>

      {/* Task item */}
      <div className="mt-[17px] rounded-[13px] bg-[#1B1B1B] p-[18px]">
        <div className="flex items-start gap-[10px]">
          {/* File icon */}
          <ClipboardIcon className="mt-[1px] shrink-0" />

          {/* Task content */}
          <div className="flex-1">
            <p className="font-urbanist text-[12px] font-bold leading-[21px] text-gray-100">
              Collect revenue data from bank APIs
            </p>
            <div className="mt-[10px] flex flex-wrap items-center gap-[10px]">
              <span className="font-urbanist text-[11px] font-semibold leading-[16px] text-[#7D7C83]">
                2 hours before
              </span>
              <span className="size-[4px] rounded-full bg-[#7D7C83]" />
              <div className="flex items-center gap-[5px]">
                <Image src="/images/figma/excel-icon.png" alt="CSV file" width={16} height={14} className="h-[14px] w-[16px] rounded-[2px] object-cover" />
                <span className="font-urbanist text-[11px] font-semibold leading-[16px] text-[#7D7C83]">
                  Stripe_revenue_report.csv
                </span>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="flex shrink-0 items-center gap-[9px]">
            <Image src="/images/figma/Frame 1707484350.svg" alt="" width={74} height={16} className="h-[16px] w-auto" />
            
          </div>
        </div>

        {/* Goal badge */}
        <div className="mt-[14px] inline-flex items-center gap-[9px] rounded-[11px] border border-white/10 px-[16px] py-[9px]">
          <FlagIcon />
          <span className="font-urbanist text-[12px] font-bold leading-[19px] text-[#7D7C83]">
            Goal :{" "}
            <span className="leading-[21px]">Track Monthly Revenue</span>
          </span>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Connected Apps Card
   ============================================================ */

function ConnectedAppsCard() {
  return (
    <div
      className="w-full rounded-[27px] bg-[#121212] px-[18px] py-[26px]"
      style={{
        boxShadow: "inset 0px 0px 7px rgba(255, 255, 255, 0.27)",
      }}
    >
      {/* Header */}
      <div className="flex items-baseline justify-between">
        <span className="font-urbanist text-[13px] font-bold uppercase leading-[25px] text-gray-100">
          Connected Apps (4)
        </span>
        <span className="font-urbanist text-[12px] font-semibold leading-[25px] text-[#7D7C83]">
          View all
        </span>
      </div>

      {/* Slack app item */}
      <div className="mt-[17px] overflow-hidden rounded-[13px] bg-white/[0.04] p-[10px]">
        <div className="flex items-center gap-[10px]">
          {/* App icon */}
          <div className="flex size-[42px] shrink-0 items-center justify-center rounded-[11px] border border-white/10">
            <Image src="/images/figma/image 12.svg" alt="Slack" width={26} height={26} />
          </div>

          {/* App info */}
          <div className="flex flex-col gap-[9px]">
            <span className="font-urbanist text-[14px] font-bold leading-[25px] text-white">
              Slack
            </span>
            <div className="flex items-center gap-[5px]">
              <FileIcon className="size-[14px]" />
              <span className="font-urbanist text-[11px] font-medium text-[#7D7C83]">
                3 tasks in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Main Section Export
   ============================================================ */

export function HowItWorksSection() {
  return (
    <Section
      className="relative overflow-hidden py-[50px] md:py-20 md:px-24 md:flex md:flex-col md:items-center"
      id="how-it-works"
    >
      <div className="px-4 md:px-0">
        <div className="flex flex-col justify-start items-center gap-[40px] md:gap-14">
          {/* ---- Header ---- */}
          <div className="flex flex-col justify-start items-center gap-6">
            <Badge>Our Process</Badge>

            <div className="flex flex-col justify-start items-center gap-4">
              <h2 className="text-center text-white text-[32px] leading-[1.3] md:text-5xl md:leading-[78px] font-bold font-['Urbanist']">
                How It Works
              </h2>
              <p className="text-center text-gray-300 text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist']">
                The best way to reach humans instead of spam folders. Deliver
                transactional and marketing emails at scale.
              </p>
            </div>
          </div>

          {/* ---- Content ---- */}
          {/* Desktop: side-by-side steps + cards */}
          <div className="hidden lg:flex pr-7 pt-12 pb-7 bg-white/5 rounded-[30px] flex-col justify-center items-start gap-2.5">
            <div className="self-stretch inline-flex justify-start items-center gap-16">
              {/* Left: Steps */}
              <div className="w-[510px] inline-flex flex-col justify-start items-start gap-5">
                {steps.map((step, idx) => (
                  <StepItem
                    key={step.number}
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    active={step.active}
                    isLast={idx === steps.length - 1}
                  />
                ))}
              </div>

              {/* Right: Agent card visual stack */}
              <div className="relative flex min-w-0 flex-1 flex-col gap-[22px]">
                <AgentProfileCard />
                <TaskPanelCard />
                <ConnectedAppsCard />
              </div>
            </div>
          </div>

          {/* Mobile: interleaved — step 1, then cards, then steps 2 & 3 */}
          <div className="lg:hidden w-full overflow-hidden rounded-[30px] bg-white/5 px-3 py-[30px]">
            <div className="flex flex-col gap-[20px]">
              {/* Step 1 (active) */}
              <StepItem
                number={steps[0].number}
                title={steps[0].title}
                description={steps[0].description}
                active={steps[0].active}
                isLast={false}
              />

              {/* Visual cards right after step 1 */}
              <div className="flex w-full min-w-0 flex-col gap-[16px] px-1">
                <AgentProfileCard />
                <TaskPanelCard />
                <ConnectedAppsCard />
              </div>

              {/* Steps 2 and 3 */}
              {steps.slice(1).map((step, idx) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  active={step.active}
                  isLast={idx === steps.length - 2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
