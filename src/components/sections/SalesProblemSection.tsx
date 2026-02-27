/* eslint-disable @next/next/no-img-element */

import { PRIMARY_CTA_HREF } from "@/content/site";

function CodeEditorMockup() {
  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_74%_at_26%_14%,#1A1A1A_0%,#151515_50%,#101010_100%)]" />

      {/* Tab bar */}
      <div className="relative flex items-center gap-1 px-3 pt-3">
        <div className="w-8 h-3.5 bg-violet-400 rounded-sm flex items-center justify-center gap-1">
          <div className="w-1.5 h-1.5 bg-stone-950 rounded-full" />
          <div className="w-1.5 h-1.5 bg-stone-950 rounded-full" />
          <div className="w-1.5 h-1.5 bg-stone-950 rounded-full" />
        </div>
        <div className="flex items-center gap-0.5 ml-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="w-1 h-1.5 bg-stone-300 rounded-[1px]" />
          ))}
        </div>
        <div className="ml-auto flex gap-1">
          <div className="w-32 h-7 bg-stone-900/50 rounded border border-white/10 flex items-center px-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => (
              <div key={i} className="w-[3px] h-1.5 bg-zinc-500 rounded-[0.5px] mr-[1px]" />
            ))}
          </div>
          <div className="w-32 h-7 bg-stone-900/50 rounded border border-white/10 flex items-center px-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="w-[3px] h-1.5 bg-zinc-500 rounded-[0.5px] mr-[1px]" />
            ))}
          </div>
        </div>
      </div>

      {/* Code lines */}
      <div className="relative flex mt-3">
        {/* Line numbers */}
        <div className="flex flex-col items-end gap-3 pl-3 pr-2 pt-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex gap-1">
              <div className="w-1 h-2 bg-neutral-600 rounded-[0.5px]" />
              <div className="w-1.5 h-1.5 bg-neutral-600 rounded-[0.5px]" />
            </div>
          ))}
        </div>

        {/* Code area with grid lines */}
        <div className="flex-1 relative">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full h-px bg-white/5 mb-16" />
          ))}

          {/* Highlighted selection */}
          <div className="absolute top-4 left-0 right-8 h-48 border-2 border-indigo-500 rounded" />

          {/* Code blocks */}
          <div className="absolute top-0 left-1 flex flex-col gap-14">
            {Array.from({ length: 6 }).map((_, row) => (
              <div key={row} className="flex gap-1 items-center">
                {Array.from({ length: 4 + (row % 3) }).map((_, col) => (
                  <div
                    key={col}
                    className="h-11 bg-stone-300 rounded-[1px]"
                    style={{ width: `${8 + (col % 3) * 4}px` }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Green indicator */}
          <div className="absolute top-12 left-32 flex flex-col gap-2">
            <div className="w-12 h-5 bg-stone-950 rounded border border-white/10 flex items-center justify-center">
              <div className="w-2.5 h-2 bg-green-400 rounded-[1px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-950 to-transparent" />
    </div>
  );
}

function ToolGridMockup() {
  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden relative flex items-center justify-center">
      {/* Grid of tool icons */}
      <div className="grid grid-cols-5 grid-rows-4 gap-3 p-6">
        {Array.from({ length: 20 }).map((_, i) => {
          const sizes = ["w-24 h-24", "w-28 h-24", "w-24 h-24"];
          const sizeClass = sizes[i % sizes.length];
          return (
            <div
              key={i}
              className={`${sizeClass} bg-gradient-to-br from-zinc-900/50 via-neutral-900/50 to-stone-950/50 rounded-xl border border-white/20 flex items-center justify-center`}
            >
              {i % 4 === 0 && (
                <div className="w-10 h-10 bg-gradient-to-br from-zinc-700/50 to-zinc-800/50 rounded-lg" />
              )}
              {i % 4 === 1 && (
                <div className="w-12 h-8 bg-gradient-to-br from-zinc-700/50 to-zinc-800/50 rounded-md" />
              )}
            </div>
          );
        })}
      </div>

      {/* Fade overlays */}
      <div className="absolute top-0 left-0 w-14 h-full bg-gradient-to-r from-stone-950 to-transparent" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-stone-950 to-transparent" />
    </div>
  );
}

export function SalesProblemSection() {
  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black">
      {/* Section header */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="w-36 h-9 px-3 py-1 bg-white/5 rounded-[100px] flex justify-center items-center">
            <span className="text-white text-base font-bold font-['Urbanist']">The Problem</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="flex flex-col gap-6 md:gap-8">
              <h2 className="text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
                The Problem - What&apos;s Broken Today
              </h2>
              <p className="text-gray-300 text-lg md:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9">
                Automate prospecting, enrichment, outreach, follow-ups, CRM updates
              </p>
            </div>
            <a
              href={PRIMARY_CTA_HREF}
              className="shrink-0 h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
            >
              <span className="text-white text-sm font-bold font-['Urbanist']">Build Your Team Now</span>
            </a>
          </div>
        </div>

        {/* Problem cards */}
        <div className="flex flex-col gap-6 mt-4">
          {/* Card 1: CRM always outdated - full width */}
          <div className="bg-stone-950 rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center py-10 md:py-14 px-8 md:pl-28 md:pr-14">
              <div className="flex flex-col items-center gap-5 md:gap-7">
                <div className="w-56 h-9 px-3 py-1 bg-white/5 rounded-[100px] flex justify-center items-center">
                  <span className="text-white text-base font-semibold font-['Urbanist']">CRM always outdated</span>
                </div>
                <h3 className="text-center text-zinc-100 text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[48px] max-w-[509px]">
                  Important customer insights never make it into the system.
                </h3>
                <p className="text-center text-zinc-400 text-base md:text-lg font-light font-['Urbanist'] leading-7 max-w-[493px]">
                  Blocks are carefully crafted to help you distill powerful
                  messages from your information and data - no matter how
                  complex.
                </p>
              </div>
            </div>
            <div className="flex-1 h-[300px] md:h-[536px] overflow-hidden relative">
              <CodeEditorMockup />
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 2: SDR Burnout */}
            <div className="bg-stone-950 rounded-[20px] overflow-hidden flex flex-col">
              <div className="pt-4 flex flex-col items-center gap-4">
                <div className="w-full h-64 md:h-80 relative overflow-hidden px-6">
                  <div className="absolute left-[10%] top-[20%] w-64 h-60">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-2xl border border-white/10 flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl" />
                    </div>
                  </div>
                  <div className="absolute left-[35%] top-[5%] w-72 md:w-80 h-72 md:h-80">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 rounded-2xl border border-white/10 flex items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-violet-900/30 to-blue-900/30 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="px-8 md:px-14 pt-8 pb-12 md:pb-16 flex flex-col gap-4">
                  <div className="w-36 h-9 px-3 py-1 bg-white/5 rounded-[100px] flex justify-center items-center">
                    <span className="text-white text-base font-semibold font-['Urbanist']">SDR Burnout</span>
                  </div>
                  <div className="flex flex-col gap-7">
                    <h3 className="text-zinc-100 text-2xl md:text-4xl font-bold font-['Urbanist'] leading-tight md:leading-10 max-w-[477px]">
                      Repetitive outreach<br />and endless follow-ups<br />drain motivation.
                    </h3>
                    <p className="text-zinc-400 text-base md:text-lg font-light font-['Urbanist'] leading-7 max-w-[380px]">
                      Blocks are responsive and designed to be
                      customised easily. No matter how you edit,
                      they will always look stunning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Manual lead research */}
            <div className="bg-stone-950 rounded-[20px] overflow-hidden flex flex-col">
              <div className="pt-4 flex flex-col items-center gap-4">
                <div className="w-full h-64 md:h-80 relative overflow-hidden">
                  <ToolGridMockup />
                </div>
                <div className="px-8 md:px-14 pt-8 pb-12 md:pb-16 flex flex-col gap-4">
                  <div className="w-52 h-9 px-3 py-1 bg-white/5 rounded-[100px] flex justify-center items-center">
                    <span className="text-white text-base font-semibold font-['Urbanist']">Manual lead research</span>
                  </div>
                  <div className="flex flex-col gap-8 md:gap-11">
                    <h3 className="text-zinc-100 text-2xl md:text-4xl font-bold font-['Urbanist'] leading-tight md:leading-10">
                      Prospecting requires jumping between LinkedIn, spreadsheets, and CRMs.
                    </h3>
                    <p className="text-zinc-400 text-base md:text-lg font-light font-['Urbanist'] leading-7 max-w-[440px]">
                      Simply paste a link to any of the hundreds
                      of tools you use and Chronicle will
                      seamlessly package your outputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
