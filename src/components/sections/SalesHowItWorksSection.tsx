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

  return (
    <div className="w-full max-w-[573px] px-5 md:px-7 pt-10 md:pt-12 pb-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[40px] border border-white/30 backdrop-blur-[30px] flex flex-col items-center gap-7 md:gap-9">
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
          <div className="px-3 py-1 bg-red-600/5 rounded-[50px] border border-orange-400 flex items-center gap-1.5">
            <div className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
            <span className="text-gray-100 text-[10px] font-bold font-['Urbanist']">Pending</span>
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
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-10 md:gap-14">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3 md:gap-8 text-center">
          <Badge className="md:hidden">How it Works</Badge>
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
                <img
                  src="/images/figma/graph.svg"
                  alt=""
                  className="relative w-full h-full"
                />
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
                <img
                  src="/images/figma/profile-2user.svg"
                  alt=""
                  className="relative w-full h-full"
                />
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
                <img
                  src="/images/figma/rocket copy.svg"
                  alt=""
                  className="relative w-full h-full"
                />
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
                <img
                  src="/images/figma/inbox-upload.svg"
                  alt=""
                  className="relative w-full h-full"
                />
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
