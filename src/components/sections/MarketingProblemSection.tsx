/* eslint-disable @next/next/no-img-element */

function ReportingCard() {
  return (
    <div className="flex-1 bg-stone-950 rounded-[20px] flex flex-col overflow-hidden">
      <div className="h-64 relative overflow-hidden bg-black">
        {/* Chart mockup */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4 px-8">
            {[80, 60, 80, 70].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="w-16 rounded-t-lg bg-gradient-to-t from-violet-600/40 to-violet-400/20" style={{ height: `${h}px` }} />
                <div className="w-8 h-1.5 bg-zinc-700 rounded" />
              </div>
            ))}
          </div>
        </div>
        {/* Overlay bars floating */}
        <div className="absolute top-10 left-[20%] w-20 h-10 bg-zinc-800/60 rounded-lg border border-white/10 flex items-center justify-center">
          <div className="flex gap-1">
            {[12, 8, 16, 6].map((h, i) => (
              <div key={i} className="w-2 rounded-sm bg-violet-400/60" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-[15%] w-16 h-10 bg-zinc-800/60 rounded-lg border border-white/10" />
        <div className="absolute top-7 right-[15%] w-16 h-10 bg-zinc-800/60 rounded-lg border border-white/10" />
      </div>
      <div className="px-10 pb-12 flex flex-col items-center gap-2.5">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          Reporting is manual
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Create, craft and share stories together<br />with real time collaboration
        </p>
      </div>
    </div>
  );
}

function CampaignSetupCard() {
  return (
    <div className="flex-1 bg-stone-950 rounded-[20px] flex flex-col overflow-hidden">
      <div className="h-64 relative overflow-hidden flex items-center justify-center px-10 py-8">
        <div className="relative flex items-center gap-1.5">
          <div className="w-48 h-48 bg-orange-500 rounded-full opacity-80" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full shadow-[0px_0px_12px_0px_rgba(242,171,83,1)]" />
          <div className="absolute left-[50%] top-[25%] -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-16 h-10 bg-gradient-to-br from-amber-500/80 to-rose-600/80 rounded-xl shadow-[inset_0px_1.6px_1.6px_0px_rgba(255,255,255,0.25)]" />
            <div className="w-16 h-14 bg-white/40 rounded-xl shadow-[0px_1.6px_16px_0px_rgba(0,0,0,0.09)] backdrop-blur-md flex flex-col items-center justify-center gap-0.5">
              <span className="text-red-600 text-xs font-bold font-['Inter']">Sun</span>
              <span className="text-black text-2xl font-bold font-['Inter']">8</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 pb-12 flex flex-col items-center gap-2.5">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          Campaign setup takes days
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Engage your audience with fun reactions<br />and interactive effects
        </p>
      </div>
    </div>
  );
}

function CrossChannelCard() {
  const people = [
    { name: "Frank Lampard", role: "Product Manager", isAgent: true },
    { name: "David Fincher", role: "HR Manager", isAgent: false },
    { name: "Jake Williamson", role: "UX Manager", isAgent: true },
  ];

  return (
    <div className="flex-1 bg-stone-950 rounded-[20px] flex flex-col overflow-hidden">
      <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-center pb-6 px-4">
          <div className="flex gap-2 overflow-hidden">
            {["👍", "🚀", "🔥", "⚡"].map((emoji) => (
              <div key={emoji} className="w-11 h-11 bg-zinc-800/80 rounded-full border border-white/10 flex items-center justify-center">
                <span className="text-sm">{emoji}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-6 left-6 right-6 bg-zinc-900 rounded-2xl shadow-[0px_0px_55px_0px_rgba(0,0,0,0.50)] p-4 flex flex-col gap-4">
          {people.map((person) => (
            <div key={person.name} className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-full shrink-0" />
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="text-white text-sm font-bold font-['Urbanist']">{person.name}</span>
                  {person.isAgent && (
                    <div className="h-4 px-1.5 bg-zinc-800 rounded border border-white/10 flex items-center">
                      <span className="text-[#CBCACC] text-[10px] font-semibold font-['Urbanist']">AI Agent</span>
                    </div>
                  )}
                </div>
                <span className="text-[#7D7C83] text-xs font-semibold font-['Urbanist'] truncate">{person.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 pb-12 flex flex-col items-center gap-2.5">
        <h3 className="text-center text-zinc-100 text-2xl md:text-3xl font-bold font-['Urbanist'] leading-7">
          No cross-channel sync
        </h3>
        <p className="text-center text-zinc-400 text-base font-normal font-['Urbanist'] leading-6">
          Make presentations human and fun again<br />with reactions and emotes
        </p>
      </div>
    </div>
  );
}

export function MarketingProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col items-center gap-6">
          <div className="w-36 h-9 px-3 py-1 bg-white/5 rounded-full flex justify-center items-center">
            <span className="text-white text-base font-bold font-['Urbanist']">The Problem</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
              The Problem - What&apos;s Broken Today
            </h2>
            <p className="text-center text-[#7D7C83] text-lg md:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <ReportingCard />
          <CampaignSetupCard />
          <CrossChannelCard />
        </div>
      </div>
    </section>
  );
}
