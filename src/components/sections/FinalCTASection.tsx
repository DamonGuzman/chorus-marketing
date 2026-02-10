import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";

export function FinalCTASection() {
  return (
    <section className="relative w-full bg-black overflow-hidden" style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 75, paddingBottom: 75 }} id="cta">
      {/* Top gradient glow / border effect */}
      <div
        className="absolute top-0 left-0 right-0 h-[515px] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.02) 45%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Horizontal glowing line at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[4px] rounded-full"
        style={{
          width: 1284,
          background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, #A4A4A4 52%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] mx-auto flex flex-col items-center gap-[50px]">
        {/* Title + subtitle + pills */}
        <div className="self-stretch flex flex-col items-center gap-[26px]">
          <div className="self-stretch flex flex-col items-end gap-[40px]">
            <h2 className="self-stretch text-center text-white text-[50px] font-bold leading-[68px]">
              The Best Companies Don&apos;t Have More People. They Have Better Coordination.
            </h2>
            <p className="self-stretch text-center text-gray-100 text-[22px] font-normal leading-[36px]">
              While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
            </p>
          </div>
          {/* Feature pills */}
          <div className="inline-flex items-center gap-[25px]">
            {["Build without hiring", "Scale without friction", "Grow with Chorus"].map((point) => (
              <div
                key={point}
                className="h-[50px] py-[30px] pl-[36px] pr-[30px] rounded-full inline-flex items-center gap-[20px]"
                style={{
                  background: "rgba(255,255,255,0)",
                  outline: "1px solid white",
                  outlineOffset: "-1px",
                  backdropFilter: "blur(30px)",
                }}
              >
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" className="shrink-0">
                  <path d="M2 6L7 10L16 2" stroke="#7D7C83" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[16px] font-medium text-[#C1C1C1]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={PRIMARY_CTA_HREF}
          className="h-[50px] px-[32px] py-[12px] bg-white text-gray-800 text-[14px] font-bold leading-[24px] rounded-full inline-flex items-center gap-[8px] overflow-hidden hover:bg-gray-50 transition-colors"
          style={{ boxShadow: "0px 0px 8px rgba(175,130,249,0.63)" }}
        >
          Build Your Team Now
        </a>
      </div>
    </section>
  );
}
