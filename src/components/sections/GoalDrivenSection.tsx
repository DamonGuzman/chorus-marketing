/* ─────────────────────────────────────────────────────────
   Goal-Driven Section
   "From 'update this spreadsheet' to 'optimize our budget'"
   Step 02→03 with decorative illustration on the right
   ───────────────────────────────────────────────────────── */

/* ── Skeleton chat card with dollar amount ── */
function SkeletonCard({ amount }: { amount: string }) {
  return (
    <div
      className="relative p-[15px] rounded-[25px] flex flex-col gap-[11px] w-[141px]"
      style={{
        zIndex: 20,
        background: "linear-gradient(180deg, #080808 0%, #141414 100%)",
        outline: "1.14px solid rgba(255,255,255,0.08)",
        outlineOffset: "-1.14px",
      }}
    >
      <div className="w-[111px] p-[9px] bg-white/4 rounded-tl-[11px] rounded-tr-[11px] rounded-bl-[11px] flex flex-col gap-[5px]">
        <div className="w-[92px] h-[7px] bg-white/5 rounded-[7px]" />
        <div className="w-full h-[7px] bg-white/5 rounded-[7px]" />
      </div>
      <div className="w-[111px] p-[9px] bg-white/4 rounded-tl-[11px] rounded-tr-[11px] rounded-bl-[11px] flex flex-col gap-[9px]">
        <div className="w-[92px] h-[7px] bg-white/5 rounded-[7px]" />
        <div className="flex items-center gap-[9px]">
          <div className="w-[31px] h-[4px] bg-white/5 rounded-[7px]" />
          <span className="text-[10px] font-bold leading-[35px]" style={{ color: "rgba(255,255,255,0.36)", fontFamily: "Inter" }}>
            {amount}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Small satellite circle with icon inside ── */
function SatelliteNode({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-[58px] h-[58px] rounded-full flex items-center justify-center shrink-0"
      style={{
        zIndex: 20,
        background: "linear-gradient(180deg, #080808 0%, #141414 100%)",
        border: "1.14px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Decorative illustration – gear icon hub with radial nodes ── */
function Illustration() {
  /* Center of the 540×540 container */
  const cx = 270;
  const cy = 240;

  /* Target coordinates for each connector end-point */
  const targets = [
    { x: 270, y: 42 },   /* up — clipboard */
    { x: 62, y: 230 },   /* left — calculator */
    { x: 478, y: 230 },  /* right — dollar */
    { x: 100, y: 420 },  /* down-left — $2756 */
    { x: 440, y: 420 },  /* down-right — $1345 */
    { x: 270, y: 490 },  /* down — $9876 */
  ];

  return (
    <div className="relative w-[540px] h-[540px] shrink-0 hidden lg:block">

      {/* ── Glowing connector lines (single SVG, sits behind everything) ── */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} viewBox="0 0 540 540" fill="none">
        <defs>
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          {targets.map((t, i) => (
            <linearGradient key={i} id={`lg${i}`} x1={cx} y1={cy} x2={t.x} y2={t.y} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A0A0A0" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          ))}
        </defs>
        {/* Glow layer */}
        {targets.map((t, i) => (
          <line key={`g${i}`} x1={cx} y1={cy} x2={t.x} y2={t.y} stroke={`url(#lg${i})`} strokeWidth="5" filter="url(#lineGlow)" opacity="0.37" />
        ))}
        {/* Core line */}
        {targets.map((t, i) => (
          <line key={`c${i}`} x1={cx} y1={cy} x2={t.x} y2={t.y} stroke={`url(#lg${i})`} strokeWidth="2" />
        ))}
      </svg>

      {/* ── Central hub: layered rounded squares ── */}
      {/* Outer frosted layer */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[190px] h-[190px] rounded-[44px]"
        style={{ top: cy - 95, background: "rgba(255,255,255,0.015)", backdropFilter: "blur(80px)" }}
      />
      {/* White glow behind center */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[130px] h-[90px] rounded-[40px]"
        style={{
          top: cy - 45,
          background: "rgba(255,255,255,0.7)",
          filter: "blur(16px)",
          boxShadow: "0 0 40px 10px rgba(255,255,255,0.08)",
        }}
      />
      {/* Dark square */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[162px] h-[162px] rounded-[42px]"
        style={{ top: cy - 81, background: "#0e0e0e", backdropFilter: "blur(80px)" }}
      />
      {/* Glass inner square */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[124px] h-[124px] rounded-[36px]"
        style={{
          top: cy - 62,
          background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.28) 100%)",
          border: "3px solid rgba(255,255,255,0.04)",
          backdropFilter: "blur(80px)",
        }}
      />
      {/* Center icon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[74px] h-[74px]"
        style={{ top: cy - 37 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/setup-02.svg" alt="" className="w-full h-full" />
      </div>

      {/* ── Satellite nodes ── */}

      {/* Top — clipboard icon */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2" style={{ top: 14 }}>
        <SatelliteNode>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="3" width="14" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <path d="M9 1h6v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V1z" fill="rgba(255,255,255,0.6)" />
            <line x1="8" y1="10" x2="16" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
            <line x1="8" y1="13" x2="14" y2="13" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
            <line x1="8" y1="16" x2="12" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
          </svg>
        </SatelliteNode>
      </div>

      {/* Left — calculator icon */}
      <div className="absolute z-10" style={{ top: 200, left: 32 }}>
        <SatelliteNode>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="2" width="16" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <rect x="5" y="4" width="12" height="4" rx="1" fill="rgba(255,255,255,0.4)" />
            <circle cx="7" cy="12" r="1.2" fill="rgba(255,255,255,0.4)" />
            <circle cx="11" cy="12" r="1.2" fill="rgba(255,255,255,0.4)" />
            <circle cx="15" cy="12" r="1.2" fill="rgba(255,255,255,0.4)" />
            <circle cx="7" cy="16" r="1.2" fill="rgba(255,255,255,0.4)" />
            <circle cx="11" cy="16" r="1.2" fill="rgba(255,255,255,0.4)" />
            <rect x="13.5" y="14.5" width="3" height="3" rx="0.5" fill="rgba(255,255,255,0.4)" />
          </svg>
        </SatelliteNode>
      </div>

      {/* Right — dollar sign icon */}
      <div className="absolute z-10" style={{ top: 200, right: 32 }}>
        <SatelliteNode>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <text x="11" y="15" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" fontFamily="Inter">$</text>
          </svg>
        </SatelliteNode>
      </div>

      {/* ── Skeleton cards ── */}

      {/* Bottom-left — $2756 */}
      <div className="absolute z-10" style={{ bottom: 60, left: 20 }}>
        <SkeletonCard amount="$2756" />
      </div>

      {/* Bottom-right — $1345 */}
      <div className="absolute z-10" style={{ bottom: 60, right: 20 }}>
        <SkeletonCard amount="$1345" />
      </div>

      {/* Bottom-center — $9876 */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2" style={{ bottom: -10 }}>
        <SkeletonCard amount="$9876" />
      </div>
    </div>
  );
}

/* ── Main Section ── */

export function GoalDrivenSection() {
  return (
    <section className="w-full bg-black px-6 md:px-[100px] py-[75px]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-10">
        {/* Left – Step indicator */}
        <div className="flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            02
          </span>
          <div className="w-[2px] h-[341px] bg-white/16 rounded-full overflow-hidden">
            <div className="w-full h-[221px] bg-white rounded-full" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            03
          </span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[40px] max-w-[510px]">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold leading-[44px]">
            From &quot;update this spreadsheet&quot; to &quot;optimize our
            budget&quot;
          </h2>
          <p className="text-gray-300 text-[16px] md:text-[18px] font-medium leading-[32px]">
            VocAI CRM empowers a global network of over 250,000 businesses in
            180 countries to convert more leads, engage with customers, and grow
            their revenue. VocAI CRM empowers a global network of over 250,000
            businesses in 180 countries to convert more leads, engage with
            customers, and grow their revenue.
          </p>
        </div>

        {/* Right – Decorative illustration */}
        <Illustration />
      </div>
    </section>
  );
}
