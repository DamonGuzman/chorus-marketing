/* ─────────────────────────────────────────────────────────
   Goal-Driven Section
   "From 'update this spreadsheet' to 'optimize our budget'"
   Step 02→03 with decorative illustration on the right
   ───────────────────────────────────────────────────────── */

/* ── Skeleton chat card with dollar amount ── */
function SkeletonCard({ amount }: { amount: string }) {
  return (
    <div
      className="p-[15px] rounded-[25px] flex flex-col gap-[11px] w-[141px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.11) 100%)",
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
      className="w-[58px] h-[58px] rounded-full flex items-center justify-center shrink-0"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.11) 100%)",
        border: "1.14px solid rgba(255,255,255,0.08)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Connector line (thin dark line from center to node) ── */
function ConnectorLine({ angle, length }: { angle: number; length: number }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 origin-left"
      style={{
        width: length,
        height: 1.14,
        background: "rgba(255,255,255,0.06)",
        transform: `translate(0, -50%) rotate(${angle}deg)`,
        marginLeft: -0.5,
      }}
    />
  );
}

/* ── Decorative illustration – gear icon hub with radial nodes ── */
function Illustration() {
  return (
    <div className="relative w-[480px] h-[480px] shrink-0 hidden lg:block">

      {/* ── Connector lines radiating from center ── */}
      <div className="absolute left-1/2 top-1/2 w-0 h-0">
        <ConnectorLine angle={-90} length={140} />   {/* up — to clipboard */}
        <ConnectorLine angle={-145} length={120} />   {/* up-left — to calculator */}
        <ConnectorLine angle={-35} length={120} />    {/* up-right — to dollar */}
        <ConnectorLine angle={-160} length={190} />   {/* down-left — to $2756 card */}
        <ConnectorLine angle={-20} length={190} />    {/* down-right — to $1345 card */}
        <ConnectorLine angle={90} length={160} />     {/* down — to $9876 card */}
      </div>

      {/* ── Central hub: layered rounded squares ── */}
      {/* Frosted outer */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-[40px]"
        style={{ background: "rgba(255,255,255,0.02)", backdropFilter: "blur(127px)" }}
      />
      {/* White glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[110px] rounded-[40px]"
        style={{ background: "white", filter: "blur(8px)", boxShadow: "15px 15px 15px rgba(0,0,0,0.15)" }}
      />
      {/* Dark square */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[152px] h-[152px] rounded-[40px]"
        style={{ background: "#101010", backdropFilter: "blur(127px)" }}
      />
      {/* Glass inner */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[118px] h-[118px] rounded-[40px]"
        style={{
          background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.26) 100%)",
          border: "3.49px solid rgba(255,255,255,0.03)",
          backdropFilter: "blur(127px)",
        }}
      />
      {/* Center gear/refresh icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[74px] h-[74px]">
        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37 17C26 17 17 26 17 37C17 48 26 57 37 57C48 57 57 48 57 37" stroke="url(#gearGrad)" strokeWidth="4" strokeLinecap="round" />
          <path d="M57 37L50 30M57 37L50 44" stroke="url(#gearGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="37" cy="37" r="10" stroke="url(#gearGrad)" strokeWidth="3.5" />
          <circle cx="37" cy="37" r="4" fill="url(#gearGrad)" />
          <defs>
            <linearGradient id="gearGrad" x1="37" y1="12" x2="37" y2="62" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255,255,255,0.91)" />
              <stop offset="1" stopColor="rgba(153,153,153,0.49)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Satellite nodes ── */}

      {/* Top — clipboard icon */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "4%" }}>
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
      <div className="absolute" style={{ top: "28%", left: "4%" }}>
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
      <div className="absolute" style={{ top: "28%", right: "4%" }}>
        <SatelliteNode>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <text x="11" y="15" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" fontFamily="Inter">$</text>
          </svg>
        </SatelliteNode>
      </div>

      {/* ── Skeleton cards ── */}

      {/* Bottom-left — $2756 */}
      <div className="absolute" style={{ bottom: "8%", left: "0%" }}>
        <SkeletonCard amount="$2756" />
      </div>

      {/* Bottom-right — $1345 */}
      <div className="absolute" style={{ bottom: "8%", right: "0%" }}>
        <SkeletonCard amount="$1345" />
      </div>

      {/* Bottom-center — $9876 */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: "-4%" }}>
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
