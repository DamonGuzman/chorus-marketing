/* ─────────────────────────────────────────────────────────
   Features Card Section
   "The Difference That Changes Everything"
   Card #3 — Full Business Context with orbital integration visual
   ───────────────────────────────────────────────────────── */

/* ── Checkmark icon ── */
function CheckMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M5 13L9 17L19 7" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* (Integration icons loaded from Figma SVG/PNG assets) */

/* ═══════════════════════════════════════════════════════════
   Orbit icon container (dark circle with subtle glass edge)
   ═══════════════════════════════════════════════════════════ */
function OrbitIcon({
  children,
  size = 62,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <div
      className="rounded-full flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 35%, #2a2a2a 0%, #151515 60%, #0d0d0d 100%)",
        boxShadow:
          "0 0 5px rgba(255,255,255,0.45) inset, 0 4px 20px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Orbital Integration Animation
   – 3 tilted elliptical rings
   – 5 branded icons distributed on orbits
   – Central glowing Chorus logo
   – Animated glowing dots travelling the paths
   ═══════════════════════════════════════════════════════════ */
function OrbitalAnimation() {
  return (
    <div className="relative w-[500px] h-[420px]">
      {/* ── SVG orbit paths + travelling dots ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 420"
        fill="none"
        style={{ zIndex: 2 }}
      >
        <defs>
          <linearGradient id="ring1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="ring2Grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.80" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.80" />
          </linearGradient>
          <linearGradient id="ring3Grad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.80" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.80" />
          </linearGradient>

          {/* Glow filter for travelling dots */}
          <filter id="dotGlow1" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="dotGlow2" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Orbit ring 1 — wide, tilted up-right ── */}
        <ellipse
          cx="250" cy="210" rx="225" ry="75"
          stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="1.6" fill="none"
          transform="rotate(-15, 250, 210)"
        />

        {/* ── Orbit ring 2 — medium, tilted opposite ── */}
        <ellipse
          cx="250" cy="210" rx="210" ry="90"
          stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="1.4" fill="none"
          transform="rotate(18, 250, 210)"
        />

        {/* ── Orbit ring 3 — narrower, steeper tilt ── */}
        <ellipse
          cx="250" cy="210" rx="190" ry="105"
          stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="1.2" fill="none"
          transform="rotate(-5, 250, 210)"
        />

        {/*
          Motion paths — invisible <path> equivalents of each ellipse.
          An ellipse (cx,cy,rx,ry) becomes:
            M cx-rx, cy
            A rx ry 0 1 1 cx+rx, cy
            A rx ry 0 1 1 cx-rx, cy  Z
          Then the whole path is wrapped in the same rotate() transform.
        */}
        {/* Path for orbit 1: cx=250 cy=210 rx=225 ry=75, rotate(-15) */}
        <path
          id="orbitPath1"
          d="M 25,210 A 225 75 0 1 1 475,210 A 225 75 0 1 1 25,210 Z"
          fill="none" stroke="none"
          transform="rotate(-15, 250, 210)"
        />
        {/* Path for orbit 2: cx=250 cy=210 rx=210 ry=90, rotate(18) */}
        <path
          id="orbitPath2"
          d="M 40,210 A 210 90 0 1 1 460,210 A 210 90 0 1 1 40,210 Z"
          fill="none" stroke="none"
          transform="rotate(18, 250, 210)"
        />

        {/* ── Dot 1 — glides along orbit ring 1 ── */}
        <circle r="5" fill="white" filter="url(#dotGlow1)">
          <animateMotion dur="18s" repeatCount="indefinite">
            <mpath href="#orbitPath1" />
          </animateMotion>
        </circle>

        {/* ── Dot 2 — glides along orbit ring 2, opposite direction ── */}
        <circle r="4" fill="white" filter="url(#dotGlow2)">
          <animateMotion
            dur="24s"
            repeatCount="indefinite"
            keyPoints="1;0"
            keyTimes="0;1"
            calcMode="linear"
          >
            <mpath href="#orbitPath2" />
          </animateMotion>
        </circle>
      </svg>

      {/* ── Central glowing Chorus logo ── */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          width: 90,
          height: 90,
          boxShadow: "0 0 40px 8px rgba(255,107,107,0.30), 0 0 80px 20px rgba(255,107,107,0.12)",
          animation: "center-pulse 4s ease-in-out infinite",
          zIndex: 15,
        }}
      >
        {/* Coral orb background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/Rectangle 36.svg" alt="" className="absolute inset-0 w-full h-full scale-[1.22]" />
        {/* Chorus bird logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/bubble.svg" alt="Chorus" className="relative w-[40px] h-[40px]" />
      </div>

      {/* ── Orbiting integration icons ── */}

      {/* Google Sheets — upper-left, sitting on ring 1 */}
      <div
        className="absolute"
        style={{ top: "15%", left: "22%", zIndex: 10 }}
      >
        <OrbitIcon size={64}>
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <img src="/images/figma/image 34.svg" alt="Google Calendar" className="w-[24px] h-[32px]" />
        </OrbitIcon>
      </div>

      {/* HubSpot — upper-right */}
      <div
        className="absolute"
        style={{ top: "22%", right: "8%", zIndex: 10 }}
      >
        <OrbitIcon size={64}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 33.svg" alt="HubSpot" className="w-[30px] h-[30px]" />
        </OrbitIcon>
      </div>

      {/* Google Calendar — mid-left */}
      <div
        className="absolute"
        style={{ top: "55%", left: "4%", zIndex: 10 }}
      >
        <OrbitIcon size={68}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 35.svg" alt="Gmail" className="w-[30px] h-[30px]" />
          
        </OrbitIcon>
      </div>

      {/* Gmail — mid-right */}
      <div
        className="absolute"
        style={{ top: "50%", right: "8%", zIndex: 10 }}
      >
        <OrbitIcon size={64}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 32.svg" alt="Google Calendar" className="w-[24px] h-[32px]" />
        </OrbitIcon>
      </div>

      {/* Slack — bottom-center */}
      <div
        className="absolute"
        style={{ bottom: "20%", left: "42%", zIndex: 10 }}
      >
        <OrbitIcon size={64}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/image 12.svg" alt="Slack" className="w-[26px] h-[26px]" />
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
    <section className="w-full bg-black px-4 md:px-[100px] py-[50px] md:py-[75px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[10px]">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-[20px] md:gap-[30px] w-full self-stretch">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center gap-2">
            <span className="text-white text-[16px] font-bold leading-[24px] text-center">Features</span>
          </div>
          <div className="flex flex-col items-center gap-[20px] md:gap-[32px] w-full self-stretch">
            <h2 className="text-white text-[32px] md:text-[50px] font-bold leading-[1.2] md:leading-[78px] text-center">
              The Difference That Changes Everything
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[26px] font-medium leading-[26px] md:leading-[36px] text-center">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* ── Stacked Cards (same width as main, offset below) ── */}
        {/* Back card */}
        <div
          className="w-full max-w-[1188px] rounded-[30px] md:rounded-[40px] border border-white/15"
          style={{
            background: "#0a0a0a",
            height: 30,
          }}
        />

        {/* Middle card */}
        <div
          className="w-full max-w-[1188px] -mt-[14px] md:-mt-[16px] rounded-[30px] md:rounded-[40px] border border-white/20"
          style={{
            background: "#0d0d0d",
            height: 30,
          }}
        />

        {/* ── Front card — Main Content ── */}
        <div
          className="w-full max-w-[1188px] -mt-[18px] md:-mt-[30px] rounded-[30px] md:rounded-[40px] py-[36px] px-[24px] md:py-[60px] md:px-[56px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(10,10,10,1) 0%, rgba(15,15,15,1) 50%, rgba(8,8,8,1) 100%)",
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
                <h3 className="text-white text-[22px] md:text-[26px] font-bold leading-[32px] md:leading-[36px]">Full Business Context</h3>

                <div className="flex flex-col gap-[24px] md:gap-[28px]">
                  <div className="flex flex-col gap-[20px] md:gap-[27px]">
                    <p className="text-gray-100 text-[14px] font-medium leading-[22px] max-w-[433px]">
                      Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:
                    </p>

                    {/* Divider */}
                    <div className="w-full max-w-[433px] h-0 border-t border-white/19" />

                    {/* Checklist items */}
                    <div className="flex flex-col gap-[14px] md:gap-[17px]">
                      <div className="flex items-center gap-[12px] md:gap-[16px]">
                        <CheckMark />
                        <span className="text-gray-300 text-[15px] md:text-[16px] font-medium">Your customers and pipeline</span>
                      </div>
                      <div className="flex items-center gap-[12px] md:gap-[16px]">
                        <CheckMark />
                        <span className="text-gray-300 text-[15px] md:text-[16px] font-medium">Your processes and SOPs</span>
                      </div>
                      <div className="flex items-center gap-[12px] md:gap-[16px]">
                        <CheckMark />
                        <span className="text-gray-300 text-[15px] md:text-[16px] font-medium">Your messaging and brand voice</span>
                      </div>
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
