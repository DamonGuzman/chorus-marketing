/* eslint-disable @next/next/no-img-element */
"use client";

function SidebarChannel({ color, name, active = false }: { color: string; name: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 px-1.5 py-1 rounded-lg ${active ? "bg-[radial-gradient(ellipse_97%_777%_at_39%_6%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.12)_100%)]" : ""}`}>
      <div className={`w-6 h-6 ${color} rounded-full flex items-center justify-center shrink-0`}>
        <span className="text-white text-sm font-medium font-['Urbanist']">#</span>
      </div>
      <span className={`text-sm font-['Urbanist'] ${active ? "text-white font-bold" : "text-[#CBCACC] font-medium"}`}>{name}</span>
    </div>
  );
}

function AgentCard({ name, pending = false }: { name: string; pending?: boolean }) {
  return (
    <div className={`w-full p-2.5 ${pending ? "rounded-xl border border-orange-400" : "bg-white/[0.04] rounded-xl"} backdrop-blur-lg flex flex-col gap-2`}>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-lg shrink-0" />
        <div className="w-1.5 h-1.5 bg-green-700 rounded-full border border-white shrink-0" />
        <div className="flex flex-col min-w-0">
          <span className="text-white text-[9px] font-bold font-['Urbanist'] leading-4">{name}</span>
          <span className="text-[#7D7C83] text-[8px] font-normal font-['Urbanist'] leading-4">3 tasks working in parallel</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -space-x-0.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-zinc-300 border border-zinc-700" />
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
            <circle cx="5" cy="5" r="4" stroke="#7D7C83" strokeWidth="0.67" />
            <path d="M5 3V5.5L6.5 6.5" stroke="#7D7C83" strokeWidth="0.67" strokeLinecap="round" />
          </svg>
          <span className="text-[#7D7C83] text-[8px] font-normal font-['Urbanist']">1 hr 30 mins</span>
        </div>
      </div>
      <div className="flex items-center justify-between pl-1.5">
        <div className="flex flex-col gap-0.5">
          <span className="text-[#7D7C83] text-[6.67px] font-normal font-['Urbanist']">Currently working on</span>
          <div className="flex items-center gap-1">
            <div className="w-[3px] h-[3px] bg-violet-500 rounded-full" />
            <span className="text-[#CBCACC] text-[8px] font-semibold font-['Urbanist']">Building Linear Clone</span>
          </div>
        </div>
        {pending && (
          <div className="px-2 py-0.5 bg-red-600/5 rounded-full border border-orange-400/40 flex items-center gap-1">
            <div className="w-[3px] h-[3px] bg-orange-400 rounded-full" />
            <span className="text-[#CBCACC] text-[6.67px] font-bold font-['Urbanist']">Pending</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function MarketingHeroSection() {
  return (
    <section className="relative w-full min-h-[700px] md:min-h-[940px] bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[280px]" />

      {/* Concentric orbital circles */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] md:w-[935px] md:h-[911px] rounded-full border-[2.85px] border-white/5 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[390px] md:w-[736px] md:h-[717px] rounded-full border-[2.85px] border-white/10 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 pt-24 md:pt-[130px] flex flex-col items-center px-4 md:px-6">
        {/* Main container */}
        <div className="w-full max-w-[1261px] bg-neutral-900 rounded-[20px] md:rounded-[30px] p-2 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-0 px-4 md:px-8 lg:px-12 py-6 md:py-8">
            {/* Left: Text content */}
            <div className="flex-1 flex flex-col gap-6 md:gap-9 max-w-[400px] lg:max-w-[380px]">
              <div className="w-28 h-8 px-2.5 py-1 bg-white/5 rounded-full flex justify-center items-center">
                <span className="text-white text-sm font-semibold font-['Urbanist']">Marketing</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-bold font-['Urbanist'] leading-tight md:leading-[70px]">
                AI Marketing, Executed Seamlessly.
              </h1>
              <p className="text-zinc-400 text-base font-light font-['Urbanist'] leading-6">
                Blocks are carefully crafted to help you distill powerful
                messages from your information and data - no matter how
                complex.
              </p>
            </div>

            {/* Center: Sidebar (hidden on mobile) */}
            <div className="hidden lg:flex w-72 opacity-40 px-2.5 py-2.5 rounded-2xl shadow-[0px_61px_61px_-30px_rgba(255,255,255,0.06)] backdrop-blur-[76px] flex-col gap-4 mx-8">
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5">
                  {["DM's", "Work", "Activity", "More"].map((item) => (
                    <div key={item} className="h-9 pl-2.5 rounded-xl flex items-center gap-3">
                      <div className="w-4 h-4 rounded border border-white/20" />
                      <span className="text-[#CBCACC] text-sm font-medium font-['Urbanist']">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex flex-col gap-2.5">
                  <SidebarChannel color="bg-sky-600" name="Marketing Campaign" />
                  <SidebarChannel color="bg-red-500" name="Product Research" />
                  <SidebarChannel color="bg-purple-500" name="Financial Analysis" />
                  <SidebarChannel color="bg-emerald-400" name="General" />
                  <SidebarChannel color="bg-blue-600" name="Turingagents" />
                  <SidebarChannel color="bg-green-600" name="Customer Discovery" active />
                  <SidebarChannel color="bg-red-500" name="Standup meeting" />
                  <SidebarChannel color="bg-indigo-600" name="Financial Analysis" />
                </div>
              </div>
            </div>

            {/* Right: Agent Workspace */}
            <div className="w-full lg:w-[480px] xl:w-[511px] bg-neutral-800 rounded-[24px] md:rounded-[35px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.01)] p-3 md:p-4 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col gap-1.5">
                {/* Phase 1 header */}
                <div className="h-9 px-2 py-1 bg-white/[0.04] rounded-xl backdrop-blur-xl flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 px-2 py-1.5 rounded-2xl border border-white/10 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="#CBCACC" strokeWidth="1" /></svg>
                    </div>
                    <span className="text-white text-[9px] font-semibold font-['Urbanist']">Phase 1: Pre-Launch (Steps 1-4)</span>
                    <div className="px-1 py-0.5 bg-green-700/20 rounded-sm flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-300/20 flex items-center justify-center">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none"><path d="M1 3L2.5 4.5L5 1.5" stroke="#86efac" strokeWidth="0.8" strokeLinecap="round" /></svg>
                      </div>
                      <span className="text-green-300 text-[6.67px] font-semibold font-['Urbanist']">3 agents active</span>
                    </div>
                  </div>
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="0.67" /></svg>
                </div>

                {/* Phase 2 - expanded with agent cards */}
                <div className="p-2.5 bg-neutral-800 rounded-2xl shadow-[6.67px_6.67px_10px_0px_rgba(0,0,0,0.10)] border border-sky-700/90 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 px-2 py-1.5 rounded-2xl border border-white/10 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="10" height="10" rx="2" stroke="#CBCACC" strokeWidth="1" /></svg>
                      </div>
                      <span className="text-white text-[9px] font-semibold font-['Urbanist']">Phase 2: Launch (Steps 1-7)</span>
                    </div>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M5 1L1 5L5 9" stroke="white" strokeWidth="0.67" /></svg>
                  </div>

                  {/* Agent cards grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <AgentCard name="Content Creation Agent" />
                    <AgentCard name="Social Media Agent" />
                    <AgentCard name="Email Marketing Agent" pending />
                    <AgentCard name="Ad Campaign Agent" />
                  </div>
                </div>
              </div>
              <span className="text-white text-xs font-bold font-['Urbanist']">Agent Workspace</span>
              <div className="px-1.5 py-1 rounded border border-white/25 flex items-center gap-1">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 2H7M1 4H5M1 6H6" stroke="#7D7C83" strokeWidth="0.75" strokeLinecap="round" />
                </svg>
                <span className="text-[#7D7C83] text-[8px] font-semibold font-['Urbanist']">Works</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
