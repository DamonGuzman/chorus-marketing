import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";

/* eslint-disable @next/next/no-img-element */

export function FinalCTASection() {
  return (
    <section className="relative bg-black overflow-hidden w-[100vw] left-1/2 -translate-x-1/2 px-4 py-16 md:px-8 md:py-60" id="cta">
      {/* Background image */}
      <img
        src="/images/figma/image1234.svg"
        alt=""
        className="pointer-events-none absolute left-1 right-0 -top-12 md:-top-16 bottom-10 w-full object-cover"
      />
      {/* Top gradient glow */}
      <div className="absolute top-0 left-0 right-0 w-full h-[300px] md:h-[515px] bg-gradient-to-b from-white/20 via-white/0 to-black/0 pointer-events-none" />
      {/* Horizontal glowing line at top */}
      <div className="absolute top-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-white/0 via-neutral-400 to-white/0 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] mx-auto flex flex-col items-center gap-[30px] md:gap-12">
        {/* Title + subtitle + pills */}
        <div className="self-stretch flex flex-col items-center gap-[20px] md:gap-6">
          {/* Feature pills */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 -mt-2 md:-mt-12 mb-4 md:mb-6">
            {["Build without hiring", "Scale without friction", "Grow with Chorus"].map((point, i) => (
              <div
                key={point}
                className="relative h-10 md:h-12 rounded-[50px] overflow-hidden inline-flex justify-center items-center"
              >
                <span aria-hidden="true" className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                <span
                  aria-hidden="true"
                  className="cta-orbit-ring cta-orbit-ring--pill"
                  style={{ '--orbit-delay': `${-i * 1.3}s` } as React.CSSProperties}
                />
                <span aria-hidden="true" className="absolute inset-[1px] rounded-[50px] bg-black" />
                <div className="relative z-10 inline-flex justify-start items-center gap-3 md:gap-5 pl-5 pr-4 md:pl-9 md:pr-7 py-7">
                  <svg width="14" height="10" viewBox="0 0 18 12" fill="none" className="shrink-0">
                    <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-xs md:text-base font-medium text-stone-300 font-['Urbanist'] whitespace-nowrap">{point}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="self-stretch flex flex-col items-center gap-[24px] md:gap-10">
            <h2 className="w-full md:max-w-none text-center text-white text-2xl leading-8 md:text-5xl md:leading-[68px] font-bold font-['Urbanist']">
              <span className="md:hidden">
                <span className="block whitespace-nowrap">The Best Companies Don&apos;t Have More People. They</span>
                <span className="block">Have Better Coordination.</span>
              </span>
              <span className="hidden md:inline">
                <span className="block whitespace-nowrap">The Best Companies Don&apos;t Have More People. They</span>
                <span className="block">Have Better Coordination.</span>
              </span>
            </h2>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={PRIMARY_CTA_HREF}
          className="mt- md:mt-7 h-12 px-8 py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] inline-flex justify-start items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
        >
          <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
        </a>
      </div>
    </section>
  );
}
