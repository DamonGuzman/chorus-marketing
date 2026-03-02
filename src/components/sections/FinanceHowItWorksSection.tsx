/* eslint-disable @next/next/no-img-element */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle cx="10" cy="10" r="8" stroke="#22c55e" strokeWidth="1" />
      <path d="M7 10L9.5 12.5L14 7.5" stroke="#22c55e" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function PhaseHeader({ title, agents, collapsed = true }: { title: string; agents: number; collapsed?: boolean }) {
  return (
    <div className="h-12 pl-2.5 pr-5 py-3 bg-white/[0.04] rounded-2xl backdrop-blur-xl flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 px-2.5 py-2.5 rounded-3xl border border-white/10 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1.5" y="1.5" width="13" height="13" rx="3" stroke="#CBCACC" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="text-white text-sm font-semibold font-['Urbanist']">{title}</span>
        <div className="px-1.5 py-0.5 bg-green-700/20 rounded flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="text-green-300 text-[10px] font-semibold font-['Urbanist']">{agents} agents active</span>
        </div>
      </div>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        {collapsed ? (
          <path d="M3 1L7 5L3 9" stroke="white" strokeWidth="1" />
        ) : (
          <path d="M7 1L3 5L7 9" stroke="white" strokeWidth="1" />
        )}
      </svg>
    </div>
  );
}

function ConnectBankAPIsCard() {
  return (
    <div className="w-full bg-zinc-900/80 rounded-[20px] border border-white/10 overflow-hidden">
      <div className="h-48 md:h-64 bg-gradient-to-br from-emerald-950/30 to-zinc-950 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-3 px-8">
          {[60, 45, 70, 50, 55, 40, 65, 35].map((h, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-10 rounded-t bg-emerald-500/50" style={{ height: `${h}px` }} />
              <div className="w-10 rounded-b bg-emerald-800/30" style={{ height: `${80 - h}px` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgentTaskCard({ name, avatar, task, status, statusColor = "green" }: {
  name: string; avatar?: string; task: string; status: string; statusColor?: string;
}) {
  return (
    <div className={`px-3 pt-3.5 pb-3 bg-white/[0.04] rounded-2xl ${statusColor === "red" ? "border border-red-600" : "border border-white/10"} flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <div className="h-7 px-2.5 bg-white/[0.04] rounded-lg border border-white/10 flex items-center gap-1.5">
          <div className="w-4 h-4 bg-purple-500 rounded-full" />
          <div className="w-5 h-5 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-full" />
          <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">{name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          {statusColor === "green" && (
            <>
              <div className="w-3.5 h-3.5 bg-green-600 rounded-full flex items-center justify-center">
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-white text-xs font-medium font-['Urbanist']">{status}</span>
            </>
          )}
          {statusColor === "red" && (
            <>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="5.5" r="3" stroke="#dc2626" strokeWidth="1" />
                <path d="M7 7V9.5" stroke="#dc2626" strokeWidth="1" strokeLinecap="round" />
                <circle cx="7" cy="11" r="0.5" fill="#dc2626" />
              </svg>
              <span className="text-white text-xs font-semibold font-['Urbanist']">{status}</span>
            </>
          )}
          {statusColor === "gray" && (
            <>
              <div className="flex items-center gap-0.5">
                {[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 bg-[#7D7C83] rounded-full" />)}
              </div>
              <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist']">{status}</span>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d="M3 7V4M3 4L1 6M3 4L5 6" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
          <rect x="1" y="2" width="12" height="10" rx="2" stroke="#7D7C83" strokeWidth="1" />
        </svg>
        <span className="text-[#CBCACC] text-sm font-bold font-['Urbanist'] leading-6 truncate">{task}</span>
      </div>
      {statusColor === "green" && (
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Apps :</span>
            <div className="flex -space-x-1">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-5 h-5 rounded-full bg-zinc-300 border border-zinc-700" />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 bg-zinc-300 rounded shrink-0" />
            <div className="w-7 h-4 bg-gradient-to-r from-indigo-600 to-violet-500 rounded shrink-0" />
            <span className="text-[#CBCACC] text-xs font-semibold font-['Urbanist']">Stripe_revenue_report.csv</span>
          </div>
        </div>
      )}
      {statusColor === "red" && (
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
            <circle cx="7" cy="7" r="5" stroke="#7D7C83" strokeWidth="1" />
            <path d="M7 4.5V7.5L9 9" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="text-[#CBCACC] text-xs font-normal font-['Urbanist'] truncate">Initialize slide project with professional design for st....</span>
        </div>
      )}
    </div>
  );
}

function AgentRow({ name, initials, color, status }: { name: string; initials: string; color: string; status: string }) {
  return (
    <div className="h-20 p-3 bg-white/[0.04] rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center shrink-0`}>
          <span className="text-white text-lg font-bold font-['Urbanist']">{initials}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#CBCACC] text-sm font-bold font-['Urbanist']">{name}</span>
          <span className="text-[#7D7C83] text-xs font-normal font-['Urbanist']">Tell us what you want</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {status === "Preparing..." ? (
          <>
            <div className="flex items-center gap-[2px]">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1 h-1 bg-neutral-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
            <span className="text-[#CBCACC] text-sm font-semibold font-['Urbanist']">{status}</span>
          </>
        ) : (
          <>
            <div className="flex items-center gap-0.5">
              {[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 bg-[#7D7C83] rounded-full" />)}
            </div>
            <span className="text-[#7D7C83] text-sm font-semibold font-['Urbanist']">{status}</span>
          </>
        )}
      </div>
    </div>
  );
}

function PredictingRevenueCard() {
  return (
    <div className="w-full bg-zinc-950 rounded-[20px] border border-white/25 shadow-2xl overflow-hidden">
      {/* Window bar */}
      <div className="px-4 pt-4 pb-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <div className="w-3 h-3 bg-amber-300 rounded-full" />
          <div className="w-3 h-3 bg-green-400 rounded-full" />
        </div>
        <span className="text-[#7D7C83] text-sm font-semibold font-['Urbanist']">Finance Campaign Q3</span>
        <div className="w-16" />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <PhaseHeader title="Phase 1: Pre-Launch (Steps 1-4)" agents={3} collapsed={false} />

        {/* Chart placeholder */}
        <div className="w-full h-48 bg-black rounded-xl flex items-end justify-center gap-2 px-4 pb-4">
          {[40, 60, 45, 70, 35, 55, 50, 65, 45, 60].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-emerald-600/50" style={{ height: `${h}%` }} />
          ))}
        </div>

        {/* Checklist items */}
        <div className="flex flex-col gap-3">
          {[
            "LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content",
            "Email nurture sequence to 5K list - build anticipation",
            "LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-[#CBCACC] text-sm font-medium font-['Urbanist'] leading-6">{text}</span>
            </div>
          ))}
        </div>

        {/* In progress item */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0px_1px_4px_0px_rgba(242,171,83,1)]" />
            <span className="text-[#CBCACC] text-sm font-medium font-['Urbanist']">Initialize the work with appropriate scaffolding</span>
          </div>
          <div className="pl-7">
            <span className="text-[#7D7C83] text-sm font-medium font-['Urbanist']">2:50 Initializing the work....</span>
          </div>
        </div>

        {/* Pending item */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
            <circle cx="10" cy="10" r="8" stroke="#7D7C83" strokeWidth="1" />
            <path d="M10 6V10.5L13 12" stroke="#7D7C83" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <span className="text-[#7D7C83] text-sm font-medium font-['Urbanist'] leading-6">LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content</span>
        </div>

        {/* Collapsed phases */}
        <div className="flex flex-col gap-3 mt-2">
          <PhaseHeader title="Phase 2: Launch (Steps 1-7)" agents={5} />
          <PhaseHeader title="Phase 3: Post-Launch (Steps 9-12)" agents={4} />
          <PhaseHeader title="Phase 4: Review (Steps 13-16)" agents={2} />
        </div>
      </div>
    </div>
  );
}

export function FinanceHowItWorksSection() {
  return (
    <section className="w-full px-6 md:px-24 py-4 md:pt-6 md:pb-0 bg-black">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-6">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-full flex justify-center items-center">
            <span className="text-white text-base font-bold font-['Urbanist']">How it Works</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
              How Work Happens
            </h2>
            <p className="text-center text-[#7D7C83] text-lg md:text-3xl font-medium font-['Urbanist'] leading-7 md:leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* How it works visual */}
        <div className="w-full flex justify-center">
          <img
            src="/images/figma/Frame 1707482390.svg"
            alt="How it works - Finance workflow"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
