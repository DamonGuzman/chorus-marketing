import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";

/* eslint-disable @next/next/no-img-element */

export function FinalCTASection() {
  return (
    <section className="relative bg-black overflow-hidden w-[100vw] left-1/2 -translate-x-1/2 px-4 py-10 md:px-8 md:py-20" id="cta">
      {/* Stars particle background (same as hero) */}
      <img
        src="/images/figma/stars.svg"
        alt=""
        className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] h-auto opacity-30"
      />
      {/* Top gradient glow */}
      <div className="absolute top-0 left-0 right-0 w-full h-[300px] md:h-[515px] bg-gradient-to-b from-white/20 via-white/0 to-black/0 pointer-events-none" />
      {/* Horizontal glowing line at top */}
      <div className="absolute top-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-white/0 via-neutral-400 to-white/0 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] mx-auto flex flex-col items-center gap-[30px] md:gap-12">
        {/* Title + subtitle + pills */}
        <div className="self-stretch flex flex-col items-center gap-[20px] md:gap-6">
          <div className="self-stretch flex flex-col items-center gap-[24px] md:gap-10">
            <h2 className="w-full md:max-w-none text-center text-white text-2xl leading-8 md:text-5xl md:leading-[68px] font-bold font-['Urbanist']">
              <span className="md:hidden">The Best Companies Don&apos;t<br />Have More People. They Have<br />Better Coordination.</span>
              <span className="hidden md:inline">The Best Companies Don&apos;t Have More People. They Have Better Coordination.</span>
            </h2>
            <p className="self-stretch text-center text-gray-100 text-sm leading-5 md:text-xl md:leading-9 font-normal font-['Urbanist']">
              While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
            </p>
          </div>
          {/* Feature pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6">
            {["Build without hiring", "Scale without friction", "Grow with Chorus"].map((point, i) => (
              <div
                key={point}
                className="relative h-10 md:h-12 rounded-[50px] overflow-hidden backdrop-blur-[30px] inline-flex justify-center items-center"
              >
                <span aria-hidden="true" className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                <span
                  aria-hidden="true"
                  className="cta-orbit-ring cta-orbit-ring--pill"
                  style={{ '--orbit-delay': `${-i * 1.3}s` } as React.CSSProperties}
                />
                <span aria-hidden="true" className="absolute inset-[1px] rounded-[50px] bg-[#131313]" />
                <div className="relative z-10 inline-flex justify-start items-center gap-3 md:gap-5 pl-5 pr-4 md:pl-9 md:pr-7 py-7">
                  <svg width="14" height="10" viewBox="0 0 18 12" fill="none" className="shrink-0">
                    <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs md:text-base font-medium text-stone-300 font-['Urbanist'] whitespace-nowrap">{point}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={PRIMARY_CTA_HREF}
          className="h-12 px-8 py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] inline-flex justify-start items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
        >
          <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
        </a>
      </div>
    </section>
  );
}
