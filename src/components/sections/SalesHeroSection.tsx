/* eslint-disable @next/next/no-img-element */
"use client";

export function SalesHeroSection() {
  const barData = [
    { green: 28, purple: 20 },
    { green: 16, purple: 12 },
    { green: 28, purple: 16 },
    { green: 16, purple: 6 },
    { green: 20, purple: 20 },
    { green: 16, purple: 12 },
    { green: 28, purple: 20 },
    { green: 16, purple: 12 },
    { green: 10, purple: 6 },
  ];

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[940px] bg-black overflow-hidden">
      {/* Blurred glow center */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-96 h-96 bg-zinc-300/80 rounded-full blur-[280px]" />

      {/* Concentric orbital circles */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[500px] h-[500px] md:w-[935px] md:h-[911px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/5 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[390px] md:w-[736px] md:h-[717px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/10 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2">
        <div className="w-[310px] h-[300px] md:w-[584px] md:h-[569px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/20 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Title */}
      <div className="relative z-10 pt-24 md:pt-[150px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-5 md:gap-7 max-w-[960px]">
          <h1 className="text-white text-3xl md:text-6xl font-bold font-['Urbanist'] leading-tight md:leading-[58px] text-center">
            AI Sales Team That Works 24/7
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-3xl font-medium font-['Urbanist'] leading-7 md:leading-10 max-w-[940px]">
            Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting — without hiring SDRs.
          </p>
        </div>
      </div>

      {/* Sales Performance Dashboard Card */}
      <div className="relative z-10 mt-8 md:mt-14 flex justify-center px-4">
        <div className="w-full max-w-[420px] md:max-w-[480px] bg-zinc-900/90 rounded-[20px] border border-white/30 backdrop-blur-[30px] overflow-hidden shadow-2xl">
          {/* Window controls */}
          <div className="px-5 pt-5 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-orange-600 rounded-full" />
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full" />
              <div className="w-2.5 h-2.5 bg-lime-400 rounded-full" />
            </div>
          </div>

          {/* Dashboard content */}
          <div className="px-5 py-5">
            <h3 className="text-gray-100 text-xl font-semibold font-['Urbanist'] leading-6 mb-5">
              Sales Performance
            </h3>

            {/* Deal cards */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { amount: "$14,000", color: "green-700", avatar: "bg-amber-400" },
                { amount: "$700", color: "red-600", avatar: "bg-red-400" },
                { amount: "$1,000", color: "green-700", avatar: "bg-amber-400" },
              ].map((deal, i) => (
                <div
                  key={i}
                  className="bg-[radial-gradient(ellipse_111%_388%_at_21%_33%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.12)_100%)] rounded-2xl border border-white/10 backdrop-blur-2xl p-3 flex flex-col gap-2"
                >
                  <div className={`w-11 h-1.5 rounded-xl border-2 border-${deal.color}`} />
                  <span className="text-white/50 text-xs font-medium font-['Urbanist']">New Deal</span>
                  <div className="flex items-center justify-between">
                    <span className="text-white text-base md:text-lg font-bold font-['Urbanist']">{deal.amount}</span>
                    <div className={`w-7 h-7 ${deal.avatar} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="flex items-end gap-2 h-40 px-2">
              {barData.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0">
                  <div className="w-full flex flex-col items-stretch">
                    <div className="w-full rounded-t-sm bg-lime-400" style={{ height: `${bar.green}px` }} />
                    <div className="w-full rounded-b-sm bg-purple-500" style={{ height: `${bar.purple}px` }} />
                  </div>
                  <div className="w-3 h-1.5 bg-gray-300 mt-2 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Agent Labels */}
      <div className="hidden md:flex absolute left-[8%] lg:left-[10%] bottom-[15%] items-center gap-2 z-10">
        <div className="h-8 px-3 bg-gray-600 rounded-lg border border-white/10 flex items-center">
          <span className="text-white text-sm md:text-lg font-semibold font-['Urbanist']">Lead Research Agent</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border-2 border-white/20" />
      </div>

      <div className="hidden md:flex absolute right-[5%] lg:right-[8%] top-[46%] items-center gap-2 z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 border-2 border-white/20 -rotate-[2.62deg]" />
        <div className="h-8 px-3 bg-gray-600 rounded-lg border border-white/10 flex items-center">
          <span className="text-white text-sm md:text-lg font-semibold font-['Urbanist']">Sales Strategy Agent</span>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
