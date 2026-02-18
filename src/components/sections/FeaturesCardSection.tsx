/* ─────────────────────────────────────────────────────────
   Features Card Section
   "The Difference That Changes Everything"
   Card #3 — Full Business Context with orbital integration visual
   ───────────────────────────────────────────────────────── */

import { AnimateOnScroll, ScrollTextReveal } from "@/components/ui";

/* ── Checkmark icon ── */
function CheckMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M3 13L7 17L13 9" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13L13 17L21 7" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* (Integration icons loaded from Figma SVG/PNG assets) */

function OrbitIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center shrink-0"
      style={{
        boxShadow: "0px 3.98px 24.85px 0px rgba(0,0,0,0.25), inset 0px 0px 5.16px 0px rgba(255,255,255,0.55)",
      }}
    >
      {children}
    </div>
  );
}

function OrbitalAnimation() {
  return (
    <div className="relative w-[636px] h-[480px]">
      {/* SVG orbit rings + animated dots */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 636 480"
        fill="none"
        style={{ zIndex: 2, overflow: "visible" }}
      >
        <defs>
          <filter id="dotGlow1" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="dotGlow2" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ring 1 — wide, tilted ~20deg */}
        <ellipse cx="318" cy="240" rx="290" ry="100" stroke="white" strokeOpacity="0.50" strokeWidth="1.4" fill="none" transform="rotate(20.6, 318, 240)" />
        {/* Ring 2 — counter-tilted */}
        <ellipse cx="318" cy="240" rx="270" ry="115" stroke="white" strokeOpacity="0.40" strokeWidth="1.2" fill="none" transform="rotate(-26, 318, 240)" />
        {/* Ring 3 — near-flat */}
        <ellipse cx="318" cy="240" rx="250" ry="130" stroke="white" strokeOpacity="0.45" strokeWidth="1.0" fill="none" transform="rotate(5, 318, 240)" />

        {/* Motion paths */}
        <path id="fcOrbit1" d="M 28,240 A 290 100 0 1 1 608,240 A 290 100 0 1 1 28,240 Z" fill="none" stroke="none" transform="rotate(20.6, 318, 240)" />
        <path id="fcOrbit2" d="M 48,240 A 270 115 0 1 1 588,240 A 270 115 0 1 1 48,240 Z" fill="none" stroke="none" transform="rotate(-26, 318, 240)" />

        {/* Animated glowing dots */}
        <circle r="5" fill="white" filter="url(#dotGlow1)">
          <animateMotion dur="18s" repeatCount="indefinite"><mpath href="#fcOrbit1" /></animateMotion>
        </circle>
        <circle r="4" fill="white" filter="url(#dotGlow2)">
          <animateMotion dur="24s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#fcOrbit2" /></animateMotion>
        </circle>
      </svg>

      {/* Central Chorus logo */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-[99px] flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: "0px 0px 10px 0px rgba(255,107,107,0.43), inset 0px 0px 4px 0px rgba(0,0,0,0.96)",
          zIndex: 15,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/Rectangle 36.svg" alt="" className="absolute inset-0 w-full h-full scale-[1.22]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/bubble.svg" alt="Chorus" className="relative w-14 h-14 brightness-0 invert" />
      </div>

      {/* Google Sheets — upper left */}
      <div className="absolute" style={{ top: "14%", left: "24%", zIndex: 10 }}>
        <OrbitIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 34.svg" alt="Google Sheets" className="w-10 h-10" />
        </OrbitIcon>
      </div>

      {/* HubSpot — upper right */}
      <div className="absolute" style={{ top: "12%", right: "10%", zIndex: 10 }}>
        <OrbitIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 33.svg" alt="HubSpot" className="w-14 h-14 rounded-full" />
        </OrbitIcon>
      </div>

      {/* Google Calendar — mid left */}
      <div className="absolute" style={{ top: "45%", left: "6%", zIndex: 10 }}>
        <OrbitIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 32.svg" alt="Google Calendar" className="w-10 h-10" />
        </OrbitIcon>
      </div>

      {/* Gmail — mid right */}
      <div className="absolute" style={{ top: "45%", right: "6%", zIndex: 10 }}>
        <OrbitIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 35.svg" alt="Gmail" className="w-10 h-10" />
        </OrbitIcon>
      </div>

      {/* Slack — bottom center-left */}
      <div className="absolute" style={{ bottom: "12%", left: "35%", zIndex: 10 }}>
        <OrbitIcon>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 12.svg" alt="Slack" className="w-10 h-10" />
        </OrbitIcon>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION EXPORT
   ═══════════════════════════════════════════════════════════ */
export function FeaturesCardSection() {
  return (
    <section className="w-full bg-black px-4 md:px-section-x py-[50px] md:py-section-y">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[20px]">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-[20px] md:gap-[30px] w-full self-stretch">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center gap-2">
            <span className="text-white text-[16px] font-bold leading-[24px] text-center">Features</span>
          </div>
          <div className="flex flex-col items-center gap-[4px] md:gap-[8px] w-full self-stretch">
            <ScrollTextReveal
              text="The Difference That Changes Everything"
              className="text-[32px] md:text-[50px] font-bold leading-[1.2] md:leading-[78px] text-center"
            />
            <p className="text-gray-300 text-[16px] md:text-[26px] font-medium leading-[26px] md:leading-[36px] text-center">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* ── Stacked Cards (same width as main, offset below) ── */}
        {/* Back card */}
        <div
          className="w-64 md:w-[1013px] h-18 rounded-[37px] bg-black border-[0.79px] border-white/30 backdrop-blur-xl"
        />

        {/* Middle card */}
        <div
          className="w-72 md:w-[1115px] h-20 -mt-[18%] md:-mt-10 rounded-[37px] bg-black border-[0.79px] border-white/30 backdrop-blur-xl"
        />

        {/* ── Front card — Main Content ── */}
        <div
          className="w-full max-w-[1220px] -mt-[18%] md:-mt-10 rounded-[60px] py-[36px] px-[24px] md:py-[60px] md:px-[56px] overflow-hidden"
          style={{
            background: "#000000",
            outline: "1px solid #434343",
            outlineOffset: "-1px",
            backdropFilter: "blur(25.53px)",
            boxShadow: "0px 30px 100px rgba(0,0,0,0.7), 0px 0px 1px rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[22px]">
            {/* ── Left side content ── */}
            <div className="flex flex-col gap-[24px] md:gap-[32px] shrink-0 md:max-w-[460px] w-full">
              {/* Gradient circle with number inside */}
              <div
                className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(138deg, rgba(61,61,61,0.29) 0%, rgba(255,229,229,0) 100%)",
                  boxShadow: "0px 3.98px 24.85px rgba(0,0,0,0.25)",
                  border: "1.3px solid rgba(255,255,255,0.10)",
                }}
              >
                <span className="text-white text-[24px] md:text-[30px] font-normal">3</span>
              </div>

              {/* Orbital animation — mobile only, between number and text */}
              <div className="md:hidden relative w-full overflow-visible" style={{ height: 'calc(420px * 0.6)' }}>
                <div
                  className="absolute top-0 left-1/2"
                  style={{
                    width: 500,
                    height: 420,
                    transformOrigin: 'top center',
                    transform: 'translateX(-50%) scale(0.6)',
                  }}
                >
                  <OrbitalAnimation />
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-[20px]">
                <ScrollTextReveal
                  text="Full Business Context"
                  className="text-white text-[22px] md:text-[26px] font-bold leading-[32px] md:leading-[36px]"
                />

                <div className="flex flex-col gap-[24px] md:gap-[28px]">
                  <div className="flex flex-col gap-[20px] md:gap-[27px]">
                    <p className="text-gray-100 text-[14px] font-medium leading-[22px] max-w-[433px]">
                      Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:
                    </p>

                    {/* Divider */}
                    <div className="w-full max-w-[433px] h-0 border-t border-white/19" />

                    {/* Checklist items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[14px] md:gap-y-[17px] gap-x-[32px]">
                      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0} threshold={0.2}>
                        <div className="flex items-center gap-[12px] md:gap-[16px]">
                          <CheckMark />
                          <span className="text-gray-300 text-[15px] md:text-[16px] font-medium md:whitespace-nowrap">
                            Your customers and pipeline
                          </span>
                        </div>
                      </AnimateOnScroll>
                      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.15} threshold={0.2}>
                        <div className="flex items-center gap-[12px] md:gap-[16px]">
                          <CheckMark />
                          <span className="text-gray-300 text-[15px] md:text-[16px] font-medium md:whitespace-nowrap">
                            Your processes and SOPs
                          </span>
                        </div>
                      </AnimateOnScroll>
                      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.3} threshold={0.2}>
                        <div className="flex items-center gap-[12px] md:gap-[16px]">
                          <CheckMark />
                          <span className="text-gray-300 text-[15px] md:text-[16px] font-medium md:whitespace-nowrap">
                            Your messaging and brand voice
                          </span>
                        </div>
                      </AnimateOnScroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right side — Orbital integration visual (desktop only) ── */}
            <div className="relative flex-1 min-h-[420px] hidden md:flex items-center justify-center">
              <OrbitalAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
