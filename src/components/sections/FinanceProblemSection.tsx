/* eslint-disable @next/next/no-img-element */

function CheckCircleGreen() {
  return (
    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0">
      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function LoadingDots() {
  return (
    <div className="flex items-center gap-[3px]">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 200}ms` }}
        />
      ))}
    </div>
  );
}

function FinanceDashboardVisual() {
  return (
    <div className="w-full max-w-[653px] bg-stone-950 rounded-[20px] md:rounded-[38px] shadow-[0px_0px_77px_38px_rgba(46,212,105,0.05),0px_0px_38px_6px_rgba(46,212,105,0.05),inset_0px_0px_0px_2px_rgba(255,255,255,0.06),inset_0px_2px_0px_0px_rgba(255,255,255,0.10)] overflow-hidden">
      <div className="relative p-4 md:p-8">
        {/* Main card */}
        <div className="bg-gradient-to-b from-stone-950 via-neutral-800 to-neutral-900 rounded-[20px] md:rounded-[38px] shadow-[0px_14px_24px_0px_rgba(0,0,0,0.38)] border-[2px] border-slate-500/20 p-5 md:p-7 flex flex-col gap-5">
          {/* User badge */}
          <div className="w-fit px-5 py-3 bg-white/[0.04] rounded-2xl border-2 border-white/10 flex items-center gap-3">
            <img src="/images/figma/Ellipse 53.svg" alt="" className="w-10 h-10 rounded-full shrink-0 object-cover" />
            <span className="text-[#CBCACC] text-lg md:text-2xl font-semibold font-['Urbanist']">Franks Lampard</span>
          </div>

          {/* Task */}
          <div className="flex items-center gap-5">
            <img src="/images/figma/task-done-01.svg" alt="" className="w-8 h-8 shrink-0" />
            <span className="text-[#CBCACC] text-lg md:text-2xl font-bold font-['Urbanist'] leading-tight">Collect revenue data from bank APIs</span>
          </div>

          <span className="text-[#7D7C83] text-lg md:text-2xl font-semibold font-['Urbanist']">2 hours ago</span>

          {/* Integration icons */}
          <div className="flex -space-x-2">
            <img src="/images/figma/image 24.svg" alt="" className="w-12 h-12 rounded-full border-2 border-zinc-700" />
            <img src="/images/figma/image 24 (4).svg" alt="" className="w-12 h-12 rounded-full border-2 border-zinc-700" />
            <img src="/images/figma/image 24 (5).svg" alt="" className="w-12 h-12 rounded-full border-2 border-zinc-700" />
          </div>

          {/* File attachment */}
          <div className="flex items-center gap-5">
            <img src="/images/figma/image 25.svg" alt="Excel" className="w-9 h-9 rounded shrink-0 object-contain" />
            <span className="text-[#CBCACC] text-lg md:text-2xl font-semibold font-['Urbanist']">Stripe_revenue_report.csv</span>
          </div>
        </div>

        {/* Status items below */}
        <div className="mt-4 flex flex-col gap-4">
          <div className="p-5 md:p-6 bg-white/[0.04] rounded-2xl md:rounded-3xl border-2 border-white/10 flex items-center gap-5">
            <CheckCircleGreen />
            <span className="text-[#CBCACC] text-lg md:text-2xl font-semibold font-['Urbanist']">Initializing analytics dashboard</span>
          </div>
          <div className="p-5 md:p-6 bg-white/[0.04 rounded-2xl md:rounded-3xl border-2 border-white/10 flex items-center gap-5">
            <img src="/images/figma/Group.svg" alt="" className="w-8 h-8 shrink-0" />
            <span className="text-[#CBCACC] text-lg md:text-2xl font-bold font-['Urbanist']">Preparing campaign assets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProblemItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="w-full h-36 pl-8 pr-6 py-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl border border-white/30 backdrop-blur-xl flex items-center gap-10">
      <div className="w-14 h-14 relative shrink-0 flex items-center justify-center">
        <div className="absolute w-14 h-14 opacity-60 bg-violet-500 rounded-full blur-xl" />
        {icon}
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <h3 className="text-white text-xl md:text-2xl font-bold font-['Urbanist']">{title}</h3>
        <p className="text-neutral-500 text-base font-semibold font-['Urbanist'] leading-6">{description}</p>
      </div>
    </div>
  );
}

export function FinanceProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 pt-10 md:pt-16 pb-12 md:pb-20 bg-black">
      <div className="max-w-[1266px] mx-auto flex flex-col gap-12">
        {/* Section header */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-32 h-9 px-3 py-1 bg-white/5 rounded-full flex justify-center items-center">
            <span className="text-white text-base font-bold font-['Urbanist']">The Problem</span>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
              The Problem - What&apos;s Broken Today
            </h2>
            <p className="text-center text-[#7D7C83] text-lg md:text-3xl font-medium font-['Urbanist'] leading-7 md:leading-10">
              Automate prospecting, enrichment, outreach, follow-ups, CRM updates, and reporting
            </p>
          </div>
        </div>

        {/* Content: Dashboard + Problem items */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left: Dashboard visual */}
          <div className="flex-1">
            <FinanceDashboardVisual />
          </div>

          {/* Right: Problem items */}
          <div className="flex-1 flex flex-col gap-4 max-w-[500px]">
            <ProblemItem
              icon={
                <img src="/images/figma/blend-2.svg" alt="" className="w-14 h-14" />
              }
              title="Manual reconciliation"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              icon={
                <img src="/images/figma/document.svg" alt="" className="w-14 h-14" />
              }
              title="Spreadsheet chaos"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              icon={
                <img src="/images/figma/money-send.svg" alt="" className="w-14 h-14" />
              }
              title="Late financial reporting"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
            <ProblemItem
              icon={
                <img src="/images/figma/coin.svg" alt="" className="w-14 h-14" />
              }
              title="Revenue leakage"
              description="You don't have to work in IT or even be tech savvy to use our products."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
