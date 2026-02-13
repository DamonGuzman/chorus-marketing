import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";

export function FinalCTASection() {
  return (
    <section className="relative w-full bg-black overflow-hidden px-4 py-[50px] md:px-24 md:py-20" id="cta">
      {/* Top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-[300px] md:h-[515px] bg-gradient-to-b from-white/20 via-white/0 to-black/0 pointer-events-none" />
      {/* Horizontal glowing line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1284px] h-1 bg-gradient-to-r from-white/0 via-neutral-400 to-white/0 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] mx-auto flex flex-col items-center gap-[30px] md:gap-12">
        {/* Title + subtitle + pills */}
        <div className="self-stretch flex flex-col items-center gap-[20px] md:gap-6">
          <div className="self-stretch flex flex-col items-end gap-[24px] md:gap-10">
            <h2 className="self-stretch text-center text-white text-[18px] leading-[36px] md:text-5xl md:leading-[68px] font-bold font-['Urbanist']">
              The Best Companies Don&apos;t Have More People. They Have<br className="md:hidden" /> Better Coordination.
            </h2>
            <p className="self-stretch text-center text-gray-100 text-[14px] leading-[22px] md:text-xl md:leading-9 font-normal font-['Urbanist']">
              While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
            </p>
          </div>
          {/* Feature pills — desktop: inline row, mobile: 2 top + 1 centered below */}
          <div className="hidden md:flex items-center gap-6">
            {["Build without hiring", "Scale without friction", "Grow with Chorus"].map((point) => (
              <div
                key={point}
                className="relative h-12 rounded-[50px] overflow-hidden backdrop-blur-[30px] inline-flex justify-center items-center"
              >
                {/* Gradient border */}
                <span aria-hidden="true" className="absolute inset-0 rounded-[50px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                <span aria-hidden="true" className="absolute inset-[1px] rounded-[50px] bg-[#131313]" />
                <div className="relative z-10 inline-flex justify-start items-center gap-5 pl-9 pr-7 py-7">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="shrink-0">
                    <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base font-medium text-stone-300 font-['Urbanist']">{point}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile pills */}
          <div className="flex flex-col items-center gap-[8px] md:hidden">
            <div className="flex items-center gap-[8px]">
              {["Build without hiring", "Scale without friction"].map((point) => (
                <div
                  key={point}
                  className="relative h-[36px] rounded-full overflow-hidden inline-flex items-center"
                >
                  <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-white/[0.04]" />
                  <span aria-hidden="true" className="absolute inset-[1px] rounded-full bg-[#131313]" />
                  <div className="relative z-10 inline-flex items-center gap-[8px] px-[12px]">
                    <svg width="14" height="10" viewBox="0 0 18 12" fill="none" className="shrink-0">
                      <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[11px] font-medium text-[#C1C1C1] whitespace-nowrap">{point}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[36px] rounded-full overflow-hidden inline-flex items-center">
              <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-white/[0.04]" />
              <span aria-hidden="true" className="absolute inset-[1px] rounded-full bg-[#131313]" />
              <div className="relative z-10 inline-flex items-center gap-[8px] px-[12px]">
                <svg width="14" height="10" viewBox="0 0 18 12" fill="none" className="shrink-0">
                  <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] font-medium text-[#C1C1C1] whitespace-nowrap">Grow with Chorus</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={PRIMARY_CTA_HREF}
          className="h-[42px] md:h-12 px-[24px] md:px-8 py-[10px] md:py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] inline-flex justify-start items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
        >
          <span className="text-center text-black text-[13px] md:text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
        </a>
      </div>
    </section>
  );
}
