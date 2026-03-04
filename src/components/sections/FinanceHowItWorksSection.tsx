/* eslint-disable @next/next/no-img-element */
"use client";

import { ScrollTextReveal, Badge } from "@/components/ui";

import { useEffect, useState } from "react";

type Segment =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "stripe" }
  | { type: "hubspot" };

const messageSegments: Segment[] = [
  { type: "text", value: "Got it. I'll connect with your CRM and task management tool " },
  { type: "stripe" },
  { type: "bold", value: " + " },
  { type: "hubspot" },
  { type: "text", value: " to fetch data automatically. Shall I proceed?" },
];

const totalChars = messageSegments.reduce(
  (sum, seg) => sum + ("value" in seg ? seg.value.length : 1),
  0
);

function StreamedMessage({ charIndex }: { charIndex: number }) {
  let remaining = charIndex;
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < messageSegments.length; i++) {
    if (remaining <= 0) break;
    const seg = messageSegments[i];

    if (seg.type === "text" || seg.type === "bold") {
      const chars = Math.min(remaining, seg.value.length);
      remaining -= chars;
      elements.push(
        <span key={i} className={seg.type === "bold" ? "font-bold" : ""}>
          {seg.value.slice(0, chars)}
        </span>
      );
    } else if (seg.type === "stripe") {
      remaining -= 1;
      elements.push(
        <span key={i} className="inline-flex items-center align-middle gap-[3px] md:gap-1.5 h-2.5 md:h-[22px] pl-[2.45px] md:pl-[5px] pr-[4.91px] md:pr-2.5 bg-white/[0.04] border border-white/10 rounded-full animate-[badgePop_0.25s_ease-out]">
          <img src="/images/figma/image 24 (5).svg" alt="Stripe" className="w-2.5 md:w-[19px] h-2.5 md:h-[19px] rounded-full object-cover" />
          <span className="text-white text-[5.89px] md:text-xs font-semibold font-['Urbanist'] leading-[8.84px] md:leading-normal">Stripe</span>
        </span>
      );
    } else if (seg.type === "hubspot") {
      remaining -= 1;
      elements.push(
        <span key={i} className="inline-flex items-center align-middle gap-[3px] md:gap-1.5 h-2.5 md:h-[22px] pl-[2.45px] md:pl-[5px] pr-[4.91px] md:pr-2.5 bg-white/[0.04] border border-white/10 rounded-full animate-[badgePop_0.25s_ease-out]">
          <img src="/images/figma/image 24 (4).svg" alt="HubSpot" className="w-2 md:w-4 h-2 md:h-4 rounded-full object-cover" />
          <span className="text-white text-[5.89px] md:text-xs font-semibold font-['Urbanist'] leading-[8.84px] md:leading-normal">HubSpot</span>
        </span>
      );
    }
  }

  return <>{elements}</>;
}

function ConnectBankAPIsCard() {
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 0) {
      timer = setTimeout(() => setPhase(1), 600);
    } else if (phase === 1) {
      if (charIndex < totalChars) {
        timer = setTimeout(() => setCharIndex((c) => c + 1), 30);
      } else {
        timer = setTimeout(() => setPhase(2), 500);
      }
    } else if (phase === 2) {
      timer = setTimeout(() => setPhase(3), 400);
    } else if (phase === 3) {
      timer = setTimeout(() => setPhase(4), 400);
    } else if (phase === 4) {
      timer = setTimeout(() => {
        setCharIndex(0);
        setPhase(0);
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [phase, charIndex]);

  const isTyping = phase === 1 && charIndex < totalChars;

  return (
    <div className="w-full rounded-[12px] md:rounded-[20px] overflow-hidden relative aspect-[711/500] md:aspect-[711/533]">
      <img
        src="/images/figma/Rectangle 5932.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute z-10 left-0 right-0 px-3 md:px-[45px] pt-4 md:pt-[50px] flex flex-col gap-2 md:gap-[16px]" style={{ top: 0 }}>
        <h3 className="text-white text-xl md:text-[30px] font-bold font-['Urbanist'] leading-[53.47px] md:leading-[40px]">
          1. Connect Bank APIs
        </h3>
        <p className="text-white text-[6.87px] md:text-[16px] font-medium font-['Urbanist'] leading-3 md:leading-[26px] max-w-[579px] ml-2 md:ml-4">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
      </div>

      <div className="absolute bottom-0 left-2 md:left-[42px] right-2 md:right-[42px] bg-[#101010] rounded-t-[10px] md:rounded-t-[20px] px-4 md:px-6 pt-3 md:pt-6 pb-[5px] md:pb-6 z-10 overflow-hidden top-[27%] md:top-[35%]">
        <div className="flex flex-col gap-2.5 md:gap-5 w-full max-w-[590px]">
          {/* Message 1 */}
          <div className={`flex flex-col gap-[5px] md:gap-2.5 transition-all duration-500 ${phase >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <div className="flex items-center gap-[5px] md:gap-2.5">
              <img src="/images/figma/avatar-frank-agent.png" alt="Frank" className="w-3.5 md:w-7 h-3.5 md:h-7 rounded-full object-cover shrink-0" />
              <div className="flex items-center gap-0.5 md:gap-1">
                <span className="text-white text-[6.87px] md:text-sm font-bold font-['Urbanist'] leading-3 md:leading-normal">Frank</span>
                <span className="h-2 md:h-[18px] px-[2.84px] md:px-1.5 bg-[#3d3c42] border border-white/10 rounded-sm md:rounded text-[#cbcacc] text-[4.91px] md:text-[10px] font-semibold font-['Urbanist'] flex items-center leading-[9.66px] md:leading-normal">AI Agent</span>
              </div>
              <span className="text-[#7d7c83] text-[6.87px] md:text-sm font-medium font-['Urbanist'] leading-3 md:leading-normal">1.50 AM</span>
            </div>

            {phase >= 1 && (
              <div className="bg-white/[0.04] rounded-lg md:rounded-2xl p-1.5 md:p-3 relative animate-[fadeSlideUp_0.3s_ease-out]">
                <p className="text-white text-[6.87px] md:text-sm font-medium font-['Urbanist'] leading-3 md:leading-5 line-clamp-2 md:line-clamp-none w-[557px] max-w-full min-h-4 md:min-h-[40px]">
                  <StreamedMessage charIndex={charIndex} />
                  {isTyping && (
                    <span className="inline-block w-[2px] h-3.5 bg-white/80 ml-0.5 align-middle animate-[blink_0.8s_step-end_infinite]" />
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Message 2 */}
          <div className={`flex flex-col gap-[5px] md:gap-2.5 transition-all duration-500 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <div className="flex items-center gap-[5px] md:gap-2.5">
              <img src="/images/figma/avatar-frank-agent.png" alt="Frank" className="w-3.5 md:w-7 h-3.5 md:h-7 rounded-full object-cover shrink-0" />
              <div className="flex items-center gap-0.5 md:gap-1">
                <span className="text-white text-[6.87px] md:text-sm font-bold font-['Urbanist'] leading-3 md:leading-normal">Frank</span>
                <span className="h-2 md:h-[18px] px-[2.84px] md:px-1.5 bg-[#3d3c42] border border-white/10 rounded-sm md:rounded text-[#cbcacc] text-[4.91px] md:text-[10px] font-semibold font-['Urbanist'] flex items-center leading-[9.66px] md:leading-normal">AI Agent</span>
              </div>
              <span className="text-[#7d7c83] text-[6.87px] md:text-sm font-medium font-['Urbanist'] leading-3 md:leading-normal">1.50 AM</span>
            </div>
          </div>

          {/* Document card */}
          <div className={`transition-all duration-500 ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
            <div className="bg-[#232227] rounded-[5px] md:rounded-[10px] p-[5px] md:p-2.5 flex flex-col gap-[5px] md:gap-2.5">
              <div className="bg-[#232227] border border-[#3d3c42] rounded-md md:rounded-xl p-1 md:p-2 w-32 md:w-[247px] max-w-full">
                <div className="flex items-center gap-[5px] md:gap-2.5">
                  <div className="w-5 md:w-[39px] h-5 md:h-[39px] bg-[#c92929] rounded-md md:rounded-xl flex items-center justify-center shrink-0">
                    <img src="/images/figma/file-02.svg" alt="" className="w-2.5 md:w-5 h-2.5 md:h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5 md:gap-1">
                    <span className="text-[#cbcacc] text-[5.89px] md:text-xs font-semibold font-['Urbanist'] leading-[8.84px] md:leading-normal">Revenue details_2026</span>
                    <span className="text-[#7d7c83] text-[5.89px] md:text-xs font-normal leading-3 md:leading-normal">PDF</span>
                  </div>
                </div>
              </div>

              <div className={`flex items-center py-[3px] md:py-1.5 gap-[3px] md:gap-1.5 transition-all duration-500 ${phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                <div className="flex items-center -space-x-1">
                  <img src="/images/figma/Ellipse 52.svg" alt="" className="w-2.5 md:w-[22px] h-2.5 md:h-[22px] rounded-full object-cover" />
                  <div className="w-2.5 md:w-[22px] h-2.5 md:h-[22px] bg-[#0083cf] rounded-full flex items-center justify-center">
                    <span className="text-white text-[6.87px] md:text-xs font-bold font-['Urbanist'] leading-3 md:leading-normal">N</span>
                  </div>
                  <img src="/images/figma/reddit.svg" alt="" className="w-2.5 md:w-[22px] h-2.5 md:h-[22px] rounded-full object-cover" />
                </div>
                <span className="text-[#7d7c83] text-[5.89px] md:text-xs font-semibold font-['Urbanist'] underline leading-[8.84px] md:leading-normal">2 replies</span>
                <svg viewBox="0 0 14 14" fill="none" className="shrink-0 w-1.5 md:w-3.5 h-1.5 md:h-3.5">
                  <path d="M5 3L9 7L5 11" stroke="#7d7c83" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

const financeTimelineItems = [
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
    status: "Approval pending",
    task: "Collect revenue data from bank APIs",
    subtask: "Initialize slide project with professional design for st...",
    redBorder: true,
  },
  {
    icon: "gray",
    agent: "Doone Rosin",
    avatar: "/images/figma/Ellipse 53 (1).svg",
    status: "Queued",
    task: "P&L Report Draft",
  },
];

function PullTransactionsCard() {
  return (
    <div
      className="w-full h-full rounded-[20px] border border-white/25 overflow-hidden flex flex-col shadow-[0px_100px_126px_0px_rgba(0,0,0,0.15),0px_41.78px_52.64px_0px_rgba(0,0,0,0.11),0px_22.34px_28.14px_0px_rgba(0,0,0,0.09),0px_12.52px_15.78px_0px_rgba(0,0,0,0.08),0px_6.65px_8.38px_0px_rgba(0,0,0,0.06),0px_2.77px_3.49px_0px_rgba(0,0,0,0.04)]"
      style={{
        background: "radial-gradient(ellipse at 22% 11%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%), #0a0a0a",
      }}
    >
      <div className="flex flex-col gap-5 md:gap-[37px] px-5 md:pl-[47px] md:pr-[30px] pt-6 md:pt-[46px] pb-6 md:pb-[73px]">
        {/* Title + description */}
        <div className="flex flex-col gap-3 md:gap-[26px]">
          <h3 className="text-white text-xl md:text-[30px] font-bold font-['Urbanist'] leading-[53.47px] md:leading-[40px]">
            2. Pull Transactions
          </h3>
          <p className="text-[#cbcacc] text-sm md:text-[16px] font-medium font-['Urbanist'] leading-5 md:leading-[26px] max-w-[408px]">
            The best way to reach humans instead of spam
          </p>
        </div>

        {/* Animated task timeline – adapted from Sales page */}
        <div className="flex flex-col items-start">
          {financeTimelineItems.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full animate-[cardReveal_7s_ease-in-out_infinite]"
              style={{ animationDelay: `${idx * 0.8}s` }}
            >
              {/* Timeline column */}
              <div className="w-[22px] shrink-0 relative flex items-center justify-center pb-3">
                {idx < financeTimelineItems.length - 1 && (
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
                      <span className="text-white text-[8.11px] md:text-[9px] font-semibold md:font-bold font-['Inter'] md:font-sans leading-4 md:leading-normal">3</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Connector + Card */}
              <div className="flex items-center flex-1 min-w-0 pb-3">
                <div className="w-4 h-px shrink-0" style={{ backgroundImage: "repeating-linear-gradient(to right, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 3px, transparent 3px, transparent 6px)" }} />
                <div className="flex-1 min-w-0">
                  <div className={`px-3 py-3 bg-white/5 rounded-xl ${item.redBorder ? "border border-[#c92929]" : "border border-white/10"} flex flex-col gap-2`}>
                    <div className="flex justify-between items-center">
                      <div className="h-6 px-2 bg-white/5 rounded-md border border-white/10 flex items-center gap-1.5">
                        <img src={item.avatar} alt="" className="w-4 h-4 rounded-full object-cover" />
                        <span className="text-gray-100 text-[8.11px] md:text-[10px] font-semibold font-['Urbanist'] leading-3 md:leading-normal">{item.agent}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {item.status === "Completed" && (
                          <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none">
                              <path d="M0.5 2.5L2 4L5.5 0.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                            </svg>
                          </div>
                        )}
                        {item.status === "Approval pending" && (
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
                            <circle cx="7.5" cy="7.5" r="6" stroke="#c92929" strokeWidth="1.2" />
                            <path d="M7.5 4.5V8" stroke="#c92929" strokeWidth="1.2" strokeLinecap="round" />
                            <circle cx="7.5" cy="10.5" r="0.6" fill="#c92929" />
                          </svg>
                        )}
                        {item.status === "Queued" && (
                          <img src="/images/figma/elements.svg" alt="" className="w-3 h-3 shrink-0" />
                        )}
                        <span className="text-white text-[8.11px] md:text-[10px] font-medium font-['Urbanist'] leading-3 md:leading-normal">{item.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <img src="/images/figma/task-done-01.svg" alt="" className="w-3 h-3 shrink-0" />
                      <span className="text-gray-100 text-[9.46px] md:text-xs font-bold font-['Urbanist'] leading-4 md:leading-normal line-clamp-1">{item.task}</span>
                    </div>
                    {item.subtask && (
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                          <circle cx="6" cy="6" r="4.5" stroke="#7D7C83" strokeWidth="1" />
                          <path d="M4 6H8" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                        <span className="text-gray-100 text-[8.11px] md:text-[10px] font-normal font-['Urbanist'] leading-3 md:leading-normal line-clamp-1">{item.subtask}</span>
                      </div>
                    )}
                    {item.apps && (
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span className="text-gray-100 text-[8.11px] md:text-[10px] font-semibold font-['Urbanist'] leading-3 md:leading-normal">Apps :</span>
                          <div className="flex -space-x-1">
                            {item.apps.map((src, j) => (
                              <img key={j} src={src} alt="" className="w-4 h-4 rounded-full border border-gray-600 object-cover" />
                            ))}
                          </div>
                        </div>
                        {item.file && (
                          <div className="flex items-center gap-1.5">
                            <img src="/images/figma/image 25.svg" alt="" className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-gray-100 text-[8.11px] md:text-[10px] font-semibold font-['Urbanist'] leading-3 md:leading-normal">{item.file}</span>
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
      `}</style>
    </div>
  );
}

const agentRows = [
  {
    name: "Revenue agent",
    avatar: "/images/figma/image 41 (2).svg",
    status: "Preparing...",
  },
  {
    name: "Research Agent",
    initials: "RA",
    color: "bg-[#388d46]",
    status: "Preparing...",
  },
  {
    name: "Reconciliation Agent",
    avatar: "/images/figma/image 41.svg",
    status: "Preparing...",
  },
  {
    name: "Email Reminder Agent",
    initials: "EM",
    color: "bg-[#f26653]",
    status: "Queued",
  },
];

function PredictingQ3RevenueCard() {
  return (
    <div className="w-full aspect-[711/533] md:aspect-auto md:h-[517px] overflow-hidden">
      <img
        src="/images/figma/Frame 1707482397.svg"
        alt="Predicting Q3 revenue"
        className="w-[135%] max-w-none -ml-[17.5%] -mt-[3.5%]"
      />
    </div>
  );
}

function ReconciliationAgentCard() {
  return (
    <div className="max-w-[483px] h-auto md:h-[517px] bg-[radial-gradient(ellipse_112.39%_173.99%_at_21.81%_10.60%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.10)_100%)] rounded-[12px] md:rounded-[20px] shadow-[0px_2.77px_3.49px_0px_rgba(0,0,0,0.04),0px_6.65px_8.38px_0px_rgba(0,0,0,0.06),0px_12.52px_15.78px_0px_rgba(0,0,0,0.08),0px_22.34px_28.14px_0px_rgba(0,0,0,0.09),0px_41.78px_52.64px_0px_rgba(0,0,0,0.11),0px_100px_126px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-offset-[-1px] outline-white/25 overflow-hidden flex justify-center pt-2 pb-4 md:pb-0">
      <div className="flex flex-col justify-start items-start gap-3 md:gap-6 max-w-[384px] w-full px-5 md:px-0">
        {/* Title + description */}
        <div className="w-full flex flex-col justify-start items-start">
          <h3 className="text-white text-xl md:text-3xl font-bold font-['Urbanist'] leading-[53px] md:leading-[74px]">
            3. Reconciliation Agent
          </h3>
          <p className="w-full text-[#cbcacc] text-sm md:text-lg font-medium font-['Urbanist'] leading-6 md:leading-8">
            The best way to reach humans instead of spam
          </p>
        </div>

        {/* Agent rows */}
        <div className="w-full flex flex-col justify-start items-start gap-2 md:gap-3">
          {agentRows.map((agent, idx) => (
            <div
              key={idx}
              className="w-full h-14 md:h-18 p-2 md:p-3 bg-white/[0.04] rounded-xl md:rounded-2xl inline-flex justify-between items-center animate-[slideInLeft_8s_ease-in-out_infinite]"
              style={{ animationDelay: `${idx * 0.4}s` }}
            >
              <div className="flex justify-start items-center gap-3 md:gap-4">
                {agent.avatar ? (
                  <img src={agent.avatar} alt="" className="w-9 md:w-12 h-9 md:h-12 rounded-lg md:rounded-xl object-cover shrink-0" />
                ) : (
                  <div className={`w-9 md:w-12 h-9 md:h-12 ${agent.color} rounded-lg md:rounded-xl flex items-center justify-center shrink-0`}>
                    <span className="text-white text-base md:text-2xl font-bold font-['Urbanist'] leading-7 md:leading-10">{agent.initials}</span>
                  </div>
                )}
                <div className="w-24 md:w-32 inline-flex flex-col justify-start items-start">
                  <span className="w-56 md:w-80 text-[#cbcacc] text-[10.12px] md:text-sm font-bold font-['Urbanist'] leading-4 md:leading-6">{agent.name}</span>
                  <span className="text-center text-[#7d7c83] text-[8.67px] md:text-xs font-normal font-['Urbanist'] leading-4 md:leading-6">Tell us what you want</span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-1.5 md:gap-2">
                {agent.status === "Preparing..." ? (
                  <>
                    <img src="/images/figma/Group.svg" alt="" className="w-3.5 md:w-5 h-3.5 md:h-5 shrink-0 animate-spin" />
                    <span className="text-[#cbcacc] text-[8.67px] md:text-xs font-semibold font-['Urbanist'] leading-8 md:leading-10">{agent.status}</span>
                  </>
                ) : (
                  <>
                    <img src="/images/figma/elements.svg" alt="" className="w-2 md:w-2.5 h-2.5 md:h-3 shrink-0 animate-spin" />
                    <span className="text-[#7d7c83] text-xs md:text-sm font-semibold font-['Urbanist'] leading-4 md:leading-5">{agent.status}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
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

export function FinanceHowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-8 md:gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <Badge>How it Works</Badge>
          <div className="flex flex-col items-center gap-8">
            <ScrollTextReveal
              text="How Work Happens"
              className="text-center text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]"
            />
            <p className="text-center text-[#7D7C83] text-lg md:text-3xl font-medium font-['Urbanist'] leading-7 md:leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Row 1 – left 60%, right 40% matching Figma proportions (711:483) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 items-start">
          <div className="w-full lg:flex-[711]">
            <ConnectBankAPIsCard />
          </div>
          <div className="w-full lg:flex-[483]">
            <PullTransactionsCard />
          </div>
        </div>

        {/* Row 2 – same proportions */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 items-stretch">
          <div className="w-full lg:flex-[483]">
            <ReconciliationAgentCard />
          </div>
          <div className="w-full lg:flex-[711]">
            <PredictingQ3RevenueCard />
          </div>
        </div>
      </div>
    </section>
  );
}
