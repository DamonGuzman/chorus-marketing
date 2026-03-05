/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTextReveal, Badge, AnimateOnScroll } from "@/components/ui";

function CheckCircleGreen() {
  return (
    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CheckCircleGray() {
  return (
    <div className="w-4 h-4 rounded-md border border-gray-300 flex items-center justify-center shrink-0">
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M1 3L3 5L7 1" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function CheckCircleGreenSmall() {
  return (
    <div className="w-4 h-4 rounded-md border border-green-600 flex items-center justify-center shrink-0">
      <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
        <path d="M1 3L3 5L7 1" stroke="#16a34a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BulletPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-7 h-7 shrink-0 mt-0.5 bg-gray-800 rounded-3xl shadow-[0px_0px_8px_0px_rgba(255,255,255,0.16)] border border-white/20 flex items-center justify-center">
        <div className="w-2 h-3.5 opacity-80 bg-white/25 rounded-full" />
      </div>
      <p className="text-gray-300 text-sm font-medium font-['Urbanist'] leading-6">
        {children}
      </p>
    </div>
  );
}

function StepDescription({
  title,
  iconType,
}: {
  title: string;
  iconType: "strategy" | "list" | "outreach" | "crm";
}) {
  const iconPaths: Record<string, React.ReactNode> = {
    strategy: (
      <>
        <rect x="41" y="9" width="32" height="32" rx="4" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="7" y="14" width="64" height="64" rx="4" stroke="#7D7C83" strokeWidth="3" fill="none" />
      </>
    ),
    list: (
      <>
        <rect x="16" y="7" width="32" height="32" rx="4" stroke="#9155ED" strokeWidth="3" fill="none" />
        <rect x="58" y="14" width="12" height="24" rx="3" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="8" y="47" width="48" height="32" rx="4" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="65" y="50" width="12" height="20" rx="3" stroke="#7D7C83" strokeWidth="1.5" fill="none" />
      </>
    ),
    outreach: (
      <>
        <rect x="27" y="7" width="48" height="48" rx="6" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="7" y="27" width="48" height="48" rx="6" stroke="#9155ED" strokeWidth="3" fill="none" />
        <circle cx="68" cy="14" r="10" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="9" y="41" width="32" height="32" rx="4" stroke="#7D7C83" strokeWidth="3" fill="none" />
      </>
    ),
    crm: (
      <>
        <rect x="9" y="9" width="64" height="64" rx="6" stroke="#7D7C83" strokeWidth="3" fill="none" />
        <rect x="34" y="9" width="16" height="28" rx="3" stroke="#9155ED" strokeWidth="3" fill="none" />
        <rect x="9" y="48" width="64" height="10" rx="3" stroke="#7D7C83" strokeWidth="3" fill="none" />
      </>
    ),
  };

  return (
    <div className="flex flex-col gap-8 md:gap-12 max-w-[615px]">
      <div className="w-16 h-16 opacity-30 bg-violet-500 rounded-full blur-xl" />
      <div className="w-20 h-20 relative">
        <svg viewBox="0 0 85 85" className="w-full h-full" fill="none">
          {iconPaths[iconType]}
        </svg>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 max-w-[545px]">
        <h3 className="text-gray-100 text-2xl md:text-4xl font-bold font-['Urbanist'] leading-tight md:leading-[54px]">
          {title}
        </h3>
        <BulletPoint>
          Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
        </BulletPoint>
        <BulletPoint>
          Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
        </BulletPoint>
        <BulletPoint>
          Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
        </BulletPoint>
      </div>
    </div>
  );
}

function TaskListCard() {
  const tasks = [
    { title: "Track Monthly Revenue", hasAvatar: true, tasks: 7 },
  ];

  const taskItems = [
    {
      agent: "Franks Lampard",
      status: "Completed",
      statusColor: "bg-green-600",
      task: "Collect revenue data from bank APIs",
      apps: true,
      file: "Stripe_revenue_report.csv",
    },
    {
      agent: "David Fincher",
      status: "In Progress",
      statusColor: "bg-amber-500",
      task: "Collect revenue data from bank APIs",
      subtask: "Initialize slide project with professional design for st....",
    },
    {
      agent: "Doone Rosin",
      status: "Queued",
      statusColor: "bg-gray-500",
      task: "P&L Report Draft",
    },
    {
      agent: "Doone Rosin",
      status: "Queued",
      statusColor: "bg-gray-500",
      task: "Categorize expenses",
    },
  ];

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[510px]">
      {/* Header card */}
      <div className="px-2.5 pt-3 pb-2.5 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <span className="text-gray-100 text-xs font-bold font-['Urbanist']">{tasks[0].title}</span>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="#7D7C83" strokeWidth="0.8" />
                <path d="M4 1V3M8 1V3" stroke="#7D7C83" strokeWidth="0.8" strokeLinecap="round" />
              </svg>
              <span className="text-gray-300 text-[10px] font-semibold font-['Urbanist']">Tasks : </span>
              <span className="text-gray-300 text-[10px] font-medium font-['Urbanist']">{tasks[0].tasks}</span>
            </div>
            <div className="flex -space-x-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-zinc-400 rounded-full border border-gray-600" />
              ))}
              <span className="text-gray-300 text-[10px] font-medium font-['Urbanist'] ml-2 self-center">+3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical connector line */}
      <div className="flex flex-col items-center py-1">
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-px h-12 bg-gray-400/40" />
      </div>

      {/* Task items */}
      {taskItems.map((item, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="px-2.5 pt-3 pb-2.5 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-3.5">
            <div className="flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <div className="h-6 p-2 bg-white/5 rounded-md border border-white/10 flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-purple-500 rounded-full" />
                  <div className="w-4 h-4 bg-zinc-400 rounded-full" />
                  <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">{item.agent}</span>
                </div>
                <div className="flex items-center gap-1">
                  {item.status === "Completed" && (
                    <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
                      <svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                        <path d="M0.5 2.5L2 4L5.5 0.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                  <span className={`text-white text-[10px] font-${item.status === "Completed" ? "medium" : "semibold"} font-['Urbanist']`}>
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                    <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="#7D7C83" strokeWidth="0.8" />
                    <path d="M4 1V3M8 1V3" stroke="#7D7C83" strokeWidth="0.8" strokeLinecap="round" />
                  </svg>
                  <span className="text-gray-100 text-xs font-bold font-['Urbanist'] line-clamp-1">{item.task}</span>
                </div>
                {item.subtask && (
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                      <circle cx="6" cy="6" r="4.5" stroke="#7D7C83" strokeWidth="1" />
                      <path d="M4 6L6 6" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <span className="text-gray-100 text-[10px] font-normal font-['Urbanist'] line-clamp-1">{item.subtask}</span>
                  </div>
                )}
              </div>
            </div>
            {item.apps && (
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">Apps : </span>
                  <div className="flex -space-x-1">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="w-4 h-4 bg-zinc-400 rounded-full border border-gray-600" />
                    ))}
                  </div>
                </div>
                {item.file && (
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 bg-zinc-300" />
                    <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">{item.file}</span>
                  </div>
                )}
              </div>
            )}
          </div>
          {i < taskItems.length - 1 && (
            <div className="flex items-center gap-1 self-center">
              <div className="w-px h-6 bg-gray-400/40" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SetupChecklistCard() {
  const steps = [
    { done: true, text: "Creating 6 AI agents" },
    { done: true, text: "Configuring approval workflows" },
    { done: true, text: "Setting up integration connectors" },
    { done: true, text: "Initializing analytics dashboard" },
    { done: false, text: "Preparing campaign assets" },
    { done: false, text: "Designing promotional graphics" },
    { done: false, text: "Writing copy for social media posts" },
  ];

  return (
    <div className="w-full max-w-[573px] h-auto px-5 md:px-7 pt-10 md:pt-12 pb-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] border border-white/30 backdrop-blur-[30px] flex flex-col items-center gap-7 md:gap-9">
      <div className="w-full max-w-[499px] flex flex-col gap-6">
        <div className="flex items-center gap-4 md:gap-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
            <rect x="4" y="4" width="20" height="20" rx="4" fill="#9155ED" />
          </svg>
          <span className="text-white text-lg md:text-2xl font-bold font-['Urbanist'] leading-8 md:leading-10">
            Setting up campaign infrastructure...
          </span>
        </div>

        <div className="flex flex-col gap-3.5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-3 md:p-3.5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3"
            >
              {step.done ? (
                <CheckCircleGreen />
              ) : (
                <div className="w-5 h-5 flex items-center gap-[2px]">
                  {[0, 1, 2].map((d) => (
                    <div
                      key={d}
                      className="w-[3px] h-[3px] bg-white/20 rounded-full animate-pulse"
                      style={{ animationDelay: `${d * 200}ms` }}
                    />
                  ))}
                </div>
              )}
              <span className={`text-gray-100 text-sm md:text-base font-${step.done ? "semibold" : "bold"} font-['Urbanist'] leading-7 line-clamp-3`}>
                {step.text}
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
        alt="Sales outreach dashboard"
        className="w-full h-auto"
      />
    </div>
  );
}

function ApiConnectionCard() {
  const permissions = [
    "Read audience",
    "Send Lead list",
    "Send campaigns",
    "Track engagement",
    "Analyze results",
    "Send campaigns",
  ];

  const cardRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const hasTriggered = useRef(false);
  const [clickedBtn, setClickedBtn] = useState<string | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.unobserve(el);
          permissions.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 400);
          });
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = (btn: string) => {
    setClickedBtn(btn);
    setTimeout(() => setClickedBtn(null), 1500);
  };

  return (
    <div className="w-full max-w-[573px] px-5 md:px-7 pt-10 md:pt-12 pb-10 md:pb-12 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] border border-white/30 backdrop-blur-[30px] flex flex-col items-center gap-7 md:gap-9">
      <div className="w-full max-w-[503px] flex flex-col gap-5">
        <div className="flex items-start gap-5 justify-between flex-wrap">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[radial-gradient(ellipse_53%_86%_at_39%_48%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_100%)] rounded-xl border border-white/10 flex items-center justify-center">
              <img src="/images/figma/image 12 copy.svg" alt="Mailchimp" className="w-9 h-9" />
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="text-white text-lg font-bold font-['Urbanist'] leading-7">Connect to Mailchimp API</span>
              <span className="text-gray-100 text-sm font-light font-['Urbanist'] leading-5">Email Agent</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white text-sm font-medium font-['Urbanist'] leading-5">
            Send launch campaign to 3,847 subscribers
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
        <div ref={cardRef} className="p-5 bg-white/5 rounded-2xl flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">API Endpoint :</span>
            <div className="h-8 px-2.5 bg-white/5 rounded-[10px] inline-flex items-center w-fit">
              <span className="text-gray-100 text-xs font-semibold font-['Urbanist'] leading-6">
                https://api.mailchimp.com/3.0/campaigns
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-100 text-xs font-bold font-['Urbanist'] uppercase leading-7">Permissions Requested :</span>
            <div className="flex flex-col gap-3">
              {permissions.map((perm, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5"
                  style={{
                    opacity: i < visibleCount ? 1 : 0,
                    transform: i < visibleCount ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.4s cubic-bezier(0.16,1,0.3,1), transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
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
                Email addresses, First names, Signup dates
              </span>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
          <button
            onClick={() => handleButtonClick("request")}
            className="group relative h-9 md:h-10 px-3 md:px-5 rounded-[50px] border border-white/20 bg-white/5 transition-all duration-200 hover:border-white/40 hover:bg-white/10 active:scale-95 whitespace-nowrap"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
            <span className="relative text-white text-xs md:text-sm font-bold font-['Urbanist']">
              Request Changes
            </span>
          </button>
          <button
            onClick={() => handleButtonClick("reject")}
            className="group relative h-9 md:h-10 px-4 md:px-7 rounded-[50px] bg-red-500 transition-all duration-200 hover:bg-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] active:scale-95 active:bg-red-600 whitespace-nowrap"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <span className="relative text-white text-xs md:text-sm font-bold font-['Urbanist']">
              Reject
            </span>
          </button>
          <button
            onClick={() => handleButtonClick("approve")}
            className="group relative h-9 md:h-10 px-4 md:px-7 rounded-[50px] bg-green-500 transition-all duration-200 hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95 active:bg-green-600 whitespace-nowrap"
          >
            <span className="absolute inset-0 rounded-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            <span className="relative text-white text-xs md:text-sm font-bold font-['Urbanist']">
              Approve
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const timelineItems = [
  {
    icon: "green",
    agent: "Franks Lampard",
    avatar: "/images/figma/Ellipse 53.svg",
    status: "Completed",
    task: "Collect revenue data from bank APIs",
    apps: ["/images/figma/image 24.svg", "/images/figma/image 24 (4).svg", "/images/figma/image 24 (5).svg"],
    file: "Stripe_revenue_report.csv",
  },
  {
    icon: "amber",
    agent: "David Fincher",
    avatar: "/images/figma/Ellipse 54.svg",
    status: "In Progress",
    task: "Collect revenue data from bank APIs",
    subtask: "Initialize slide project with professional design for st...",
  },
  {
    icon: "gray",
    agent: "Doone Rosin",
    avatar: "/images/figma/Ellipse 53 (1).svg",
    status: "Queued",
    task: "P&L Report Draft",
  },
  {
    icon: "gray",
    agent: "Doone Rosin",
    avatar: "/images/figma/Ellipse 53 (1).svg",
    status: "Queued",
    task: "Categorize expenses",
  },
];

function AnimatedTaskTimeline() {
  return (
    <div className="w-full lg:w-[581px] lg:shrink-0">
      <div className="w-full p-6 bg-gradient-to-b from-[#161616] to-[#0d0d0d] rounded-[28px] border border-white/10 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-3 pt-3 pb-3 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-3 mb-4">
          <span className="text-gray-100 text-sm font-bold font-['Urbanist']">Track Monthly Revenue</span>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <img src="/images/figma/task-done-01.svg" alt="" className="w-3 h-3 shrink-0" />
              <span className="text-gray-300 text-[10px] font-semibold font-['Urbanist']">Tasks : 7</span>
            </div>
            <div className="flex -space-x-1.5">
              {["/images/figma/Ellipse 53.svg", "/images/figma/Ellipse 54.svg", "/images/figma/Ellipse 53 (1).svg"].map((src, i) => (
                <img key={i} src={src} alt="" className="w-5 h-5 rounded-full border-2 border-[#1a1a1a] object-cover" />
              ))}
              <span className="text-gray-400 text-[10px] font-medium font-['Urbanist'] ml-1.5 self-center">+3</span>
            </div>
          </div>
        </div>

        {/* Animated timeline items */}
        <div className="flex flex-col items-start">
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full animate-[cardReveal_7s_ease-in-out_infinite]"
              style={{ animationDelay: `${idx * 0.8}s` }}
            >
              {/* Timeline column */}
              <div className="w-[22px] shrink-0 relative flex items-center justify-center pb-3">
                {idx < timelineItems.length - 1 && (
                  <div className="absolute left-1/2 -translate-x-px border-l border-dashed border-white/20" style={{ top: "calc(50%)", bottom: 0 }} />
                )}
                {idx > 0 && (
                  <div className="absolute left-1/2 -translate-x-px border-l border-dashed border-white/20" style={{ top: 0, bottom: "calc(50%)" }} />
                )}
                <div
                  className="w-[22px] h-[22px] shrink-0 flex items-center justify-center relative z-10 animate-[iconPop_7s_ease-in-out_infinite]"
                  style={{ animationDelay: `${idx * 0.8 + 0.3}s` }}
                >
                  {item.icon === "green" ? (
                    <div className="w-[22px] h-[22px] rounded-full bg-green-600 flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  ) : item.icon === "amber" ? (
                    <img src="/images/figma/Group 1707483950.svg" alt="" className="w-[22px] h-[22px] shrink-0 object-contain" />
                  ) : (
                    <div className="w-[22px] h-[22px] rounded-full bg-neutral-600 border border-neutral-500 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">{idx === 2 ? "3" : "4"}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Connector + Card */}
              <div className="flex items-center flex-1 min-w-0 pb-3">
                <div className="w-4 h-px shrink-0" style={{ backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 3px, transparent 3px, transparent 6px)" }} />
                <div className="flex-1 min-w-0">
                  <div className="px-3 py-3 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="h-6 px-2 bg-white/5 rounded-md border border-white/10 flex items-center gap-1.5">
                        {item.avatar ? (
                          <img src={item.avatar} alt="" className="w-4 h-4 rounded-full object-cover" />
                        ) : (
                          <div className="w-3.5 h-3.5 bg-purple-500 rounded-full" />
                        )}
                        <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">{item.agent}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.status === "Completed" && (
                          <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                              <path d="M0.5 2.5L2 4L5.5 0.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}
                        {item.status === "In Progress" && (
                          <img src="/images/figma/Group.svg" alt="" className="w-3 h-3 shrink-0" />
                        )}
                        {item.status === "Queued" && (
                          <img src="/images/figma/elements.svg" alt="" className="w-3 h-3 shrink-0" />
                        )}
                        <span className="text-white text-[10px] font-medium font-['Urbanist']">{item.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <img src="/images/figma/task-done-01.svg" alt="" className="w-3 h-3 shrink-0" />
                      <span className="text-gray-100 text-xs font-bold font-['Urbanist'] line-clamp-1">{item.task}</span>
                    </div>
                    {item.subtask && (
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                          <circle cx="6" cy="6" r="4.5" stroke="#7D7C83" strokeWidth="1" />
                        </svg>
                        <span className="text-gray-100 text-[10px] font-normal font-['Urbanist'] line-clamp-1">{item.subtask}</span>
                      </div>
                    )}
                    {item.apps && (
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">Apps :</span>
                          <div className="flex -space-x-1">
                            {item.apps.map((src, j) => (
                              <img key={j} src={src} alt="" className="w-4 h-4 rounded-full border border-gray-600 object-cover" />
                            ))}
                          </div>
                        </div>
                        {item.file && (
                          <div className="flex items-center gap-1.5">
                            <div className="w-3.5 h-3.5 bg-green-600 rounded-sm" />
                            <span className="text-gray-100 text-[10px] font-semibold font-['Urbanist']">{item.file}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          12% { opacity: 1; transform: translateX(0); }
          65% { opacity: 1; transform: translateX(0); }
          80% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 0; transform: translateX(-60px); }
        }
      `}</style>
    </div>
  );
}

export function SalesHowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-10 md:gap-14">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 md:gap-3 text-center">
          <Badge>How it Works</Badge>
          <ScrollTextReveal
            text="How Work Happens"
            className="text-white text-2xl md:text-[50px] font-bold font-['Urbanist'] leading-tight md:leading-[78px] tracking-[-0.5px]"
          />
          <p className="text-gray-300 text-sm md:text-[28px] font-medium font-['Urbanist'] leading-5 md:leading-[44px]">
            <span className="md:hidden">The Difference That Changes Everything</span>
            <span className="hidden md:inline">Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting</span>
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-24">
          {/* Step 1: Sales Strategy Agent activates */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-20 h-20">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes graph-slice {
                      0%        { stroke-dashoffset: 120; }
                      30%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes graph-arc {
                      0%, 25%   { stroke-dashoffset: 180; }
                      70%, 100% { stroke-dashoffset: 0; }
                    }
                    .graph-slice { stroke-dasharray: 120; animation: graph-slice 2.2s ease-out infinite; }
                    .graph-arc   { stroke-dasharray: 180; animation: graph-arc 2.2s ease-out infinite; }
                  `}</style>
                  <path className="graph-slice" d="M62.5933 41C71.4767 41 75.1667 37.5833 71.8867 26.3766C69.6658 18.8258 63.1742 12.3341 55.6233 10.1133C44.4167 6.8333 41 10.5233 41 19.4066V29.2466C41 37.5833 44.4167 41 51.25 41H62.5933Z" stroke="#B48AFB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="graph-arc" d="M68.3329 50.2251C65.1554 66.0443 49.9854 77.5243 32.7312 74.7226C19.7821 72.6384 9.36122 62.2176 7.24289 49.2684C4.47539 32.0826 15.8871 16.9126 31.6379 13.7009" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-6 md:gap-[49px] max-w-[573px]">
                <ScrollTextReveal
                  text="1. Sales Strategy Agent activates"
                  className="text-[#cbcacc] text-2xl md:text-[40px] font-bold font-['Urbanist'] leading-tight md:leading-[54px] pl-3 md:pl-0"
                />
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-8.5 h-8.5 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-8.5 h-8.5 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[525px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.45}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-8.5 h-8.5 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[497px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            <AnimatedTaskTimeline />
          </div>

          {/* Step 2: Generate Lead List */}
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 md:gap-16">
            {/* Right: Description */}
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-20 h-20">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes profile-draw-head {
                      0%        { stroke-dashoffset: 110; }
                      30%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes profile-draw-head2 {
                      0%, 15%   { stroke-dashoffset: 80; }
                      45%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes profile-draw-body {
                      0%, 30%   { stroke-dashoffset: 140; }
                      65%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes profile-draw-body2 {
                      0%, 45%   { stroke-dashoffset: 80; }
                      80%, 100% { stroke-dashoffset: 0; }
                    }
                    .profile-head1 { stroke-dasharray: 110; animation: profile-draw-head 2.5s ease-out infinite; }
                    .profile-head2 { stroke-dasharray: 80;  animation: profile-draw-head2 2.5s ease-out infinite; }
                    .profile-body1 { stroke-dasharray: 140; animation: profile-draw-body 2.5s ease-out infinite; }
                    .profile-body2 { stroke-dasharray: 80;  animation: profile-draw-body2 2.5s ease-out infinite; }
                  `}</style>
                  <path className="profile-head1" d="M32.5021 38.5705C32.1472 38.535 31.7214 38.535 31.3311 38.5705C22.886 38.2866 16.1797 31.3673 16.1797 22.8513C16.1797 14.1579 23.2054 7.09668 31.9343 7.09668C40.6277 7.09668 47.6889 14.1579 47.6889 22.8513C47.6535 31.3673 40.9471 38.2866 32.5021 38.5705Z" stroke="#B48AFB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="profile-head2" d="M58.2289 14.1934C65.1126 14.1934 70.648 19.7643 70.648 26.6125C70.648 33.3189 65.3255 38.7834 58.6901 39.0317C58.4063 38.9963 58.0869 38.9963 57.7676 39.0317" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="profile-body1" d="M14.7605 51.6638C6.17357 57.4121 6.17357 66.7797 14.7605 72.4926C24.5185 79.0215 40.5215 79.0215 50.2794 72.4926C58.8664 66.7442 58.8664 57.3766 50.2794 51.6638C40.557 45.1703 24.554 45.1703 14.7605 51.6638Z" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path className="profile-body2" d="M65.0762 70.9668C67.631 70.4345 70.0438 69.4055 72.0309 67.8797C77.5663 63.7282 77.5663 56.8799 72.0309 52.7283C70.0793 51.238 67.7019 50.2445 65.1826 49.6768" stroke="#7D7C83" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-6 md:gap-[49px] max-w-[573px]">
                <ScrollTextReveal
                  text="2. Generate Lead List"
                  className="text-[#cbcacc] text-2xl md:text-[40px] font-bold font-['Urbanist'] leading-tight md:leading-[54px] pl-3 md:pl-0"
                />
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[525px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.45}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[497px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            {/* Left: Setup checklist card */}
            <div className="w-full max-w-[573px] min-h-[585px] px-5 pt-8 pb-4 md:px-7 md:pt-12 md:pb-2.5 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[28px] md:rounded-[40px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] inline-flex flex-col items-center gap-6 md:gap-9">
              <div className="w-full md:w-[499px] md:max-w-full flex flex-col gap-5 md:gap-6">
                <div className="inline-flex items-center gap-4 md:gap-6">
                  <img src="/images/figma/Group 20963 copy.svg" alt="" className="w-12 h-12 md:w-7 md:h-7 shrink-0" />
                  <span className="text-white text-xl md:text-2xl font-bold font-['Urbanist'] leading-7 md:leading-10">
                    Setting up campaign infrastructure...
                  </span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3.5 overflow-hidden">
                  {[
                    { done: true, text: "Creating 6 AI agents" },
                    { done: true, text: "Configuring approval workflows" },
                    { done: true, text: "Setting up integration connectors" },
                    { done: true, text: "Initializing analytics dashboard" },
                    { done: false, text: "Preparing campaign assets" },
                    { done: false, text: "Designing promotional graphics" },
                    { done: false, text: "Writing copy for social media posts" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="self-stretch px-4 py-4 md:px-3.5 md:py-2.5 bg-white/5 rounded-2xl outline-[1.20px] outline-offset-[-1.20px] outline-white/10 inline-flex items-center gap-3 animate-[slideInLeft_8s_ease-in-out_infinite]"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      {item.done ? (
                        <div className="w-6 h-6 md:w-5 md:h-5 bg-green rounded-[43px] flex items-center justify-center shrink-0 overflow-hidden">
                          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 md:w-5 md:h-5 rounded-full border border-dashed border-warning/60 flex items-center justify-center shrink-0">
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
          </div>

          {/* Step 3: Launch Outreach */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[50px] max-w-[615px]">
              <div className="relative w-20 h-20">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes rocket-body {
                      0%        { stroke-dashoffset: 200; }
                      40%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes rocket-trail {
                      0%, 10%   { stroke-dashoffset: 260; }
                      55%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes rocket-detail {
                      0%, 40%   { stroke-dashoffset: 80; }
                      70%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes rocket-sparks {
                      0%, 55%   { stroke-dashoffset: 40; }
                      80%, 100% { stroke-dashoffset: 0; }
                    }
                    .rocket-body   { stroke-dasharray: 200; animation: rocket-body 2.4s ease-out infinite; }
                    .rocket-trail  { stroke-dasharray: 260; animation: rocket-trail 2.4s ease-out infinite; }
                    .rocket-detail { stroke-dasharray: 80;  animation: rocket-detail 2.4s ease-out infinite; }
                    .rocket-sparks { stroke-dasharray: 40;  animation: rocket-sparks 2.4s ease-out infinite; }
                  `}</style>
                  <path className="rocket-body" d="M27.334 34.7362L41.4217 20.6485C45.265 16.8052 47.1866 14.8835 49.3073 13.3358C53.6585 10.1602 58.7052 8.06976 64.0274 7.23851C66.6214 6.83337 69.7321 6.83337 75.1673 6.83337C75.1673 12.2686 75.1673 15.3793 74.7622 17.9733C73.9309 23.2955 71.8405 28.3422 68.6649 32.6934C67.1172 34.8141 65.1955 36.7357 61.3522 40.579L47.2645 54.6667" stroke="#7D7C83" strokeWidth="3" strokeLinejoin="round"/>
                  <path className="rocket-trail" d="M35.8756 27.334L17.084 27.334L6.83398 37.584L18.7973 42.7084L18.7973 52.9584L29.0423 63.2084H39.2923L44.4173 75.1673L54.6673 64.9173V46.1257" stroke="#B48AFB" strokeWidth="3" strokeLinejoin="round"/>
                  <path className="rocket-detail" d="M47.834 13.6667L68.334 34.1667M58.084 23.9167L51.2507 30.7501" stroke="#7D7C83" strokeWidth="3" strokeLinejoin="round"/>
                  <path className="rocket-sparks" d="M40.9993 68.3333L35.8743 73.4583M13.666 41L8.54102 46.125" stroke="#7D7C83" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-5 md:gap-[49px] max-w-[573px]">
                <ScrollTextReveal
                  text="3. Launch Outreach"
                  className="text-[#cbcacc] text-2xl md:text-[40px] font-bold font-['Urbanist'] leading-tight md:leading-[54px] pl-3 md:pl-0"
                />
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[525px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.45}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[497px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            <OutreachCard />
          </div>

          {/* Step 4: Update CRM & Report */}
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-[30px] max-w-[615px]">
              <div className="relative w-20 h-20">
                <div className="absolute inset-[-40%] bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full">
                  <style>{`
                    @keyframes inbox-box {
                      0%        { stroke-dashoffset: 260; }
                      45%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes inbox-shelf {
                      0%, 35%   { stroke-dashoffset: 120; }
                      70%, 100% { stroke-dashoffset: 0; }
                    }
                    @keyframes inbox-arrow-up {
                      0%, 100% { transform: translateY(0); opacity: 1; }
                      40%      { transform: translateY(-5px); opacity: 1; }
                      60%      { transform: translateY(-5px); opacity: 0.6; }
                      80%      { transform: translateY(0); opacity: 1; }
                    }
                    .inbox-box   { stroke-dasharray: 260; animation: inbox-box 2.4s ease-out infinite; }
                    .inbox-shelf { stroke-dasharray: 120; animation: inbox-shelf 2.4s ease-out infinite; }
                    .inbox-arrow { animation: inbox-arrow-up 1.6s ease-in-out infinite; }
                  `}</style>
                  <path className="inbox-box" d="M23.0645 8.87085C19.0119 9.53855 16.0886 10.7797 13.8077 13.087C8.87109 18.0805 8.87109 26.1175 8.87109 42.1914C8.87109 58.2653 8.87109 66.3023 13.8077 71.2958C18.7443 76.2893 26.6896 76.2893 42.5803 76.2893C58.471 76.2893 66.4163 76.2893 71.3529 71.2958C76.2895 66.3023 76.2896 58.2653 76.2896 42.1914C76.2896 26.1175 76.2895 18.0805 71.3529 13.087C69.072 10.7797 66.1487 9.53855 62.0962 8.87085" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <g className="inbox-arrow">
                    <path d="M33.709 17.7417C35.4531 15.9473 40.0952 8.87085 42.5798 8.87085M51.4507 17.7417C49.7066 15.9473 45.0645 8.87085 42.5798 8.87085M42.5798 8.87085V37.2576" stroke="#B48AFB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <path className="inbox-shelf" d="M76.2896 47.9026H58.8116C55.8235 47.9026 53.4758 50.3992 52.1589 53.0378C50.7283 55.9045 47.8633 58.5476 42.5803 58.5476C37.2973 58.5476 34.4324 55.9045 33.0017 53.0378C31.6849 50.3992 29.3371 47.9026 26.349 47.9026H8.87109" stroke="#7D7C83" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col gap-5 md:gap-[49px] max-w-[573px]">
                <ScrollTextReveal
                  text="4. Update CRM & Report"
                  className="text-[#cbcacc] text-2xl md:text-[40px] font-bold font-['Urbanist'] leading-tight md:leading-[54px] pl-3 md:pl-0"
                />
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[529px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Our simple drag-and-drop editor lets you dynamically change your email&apos;s content, images, and CTAs.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.3}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[525px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Connect with your recipients through every email by using interactive elements like polls, surveys, attachments, GIFs, images, videos, and reply tracking.
                    </p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.45}>
                  <div className="inline-flex items-start gap-5">
                    <img src="/images/figma/Arrow.svg" alt="" className="w-9 h-9 md:w-7 md:h-7 shrink-0" />
                    <p className="max-w-[497px] text-[#7d7c83] text-sm font-medium font-['Urbanist'] leading-6">
                      Take the guess work out of your campaign&apos;s content by testing in real time which version of your campaign performs best with your audience. A or B?
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            <ApiConnectionCard />
          </div>
        </div>
      </div>
    </section>
  );
}
