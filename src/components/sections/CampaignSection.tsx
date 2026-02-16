/* ─────────────────────────────────────────────────────────
   Campaign Section
   "From 'send this email' to 'run this campaign'"
   Step 01→03 with circular hub + satellite icon nodes
   ───────────────────────────────────────────────────────── */

/* ── Dark filled satellite node ── */
function Node({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center shrink-0 bg-[#1a1a1a] border border-white/8">
      {children}
    </div>
  );
}

const INNER_RING_RADIUS = 88;
const INNER_RING_RY = 86;
const CANVAS_SIZE = 420;
const CENTER = CANVAS_SIZE / 2;
const GLOW_LENGTH = 62;
const GLOW_THICKNESS = 4;
const NODE_SIZE = 53.5;
const NODE_TOP = 27.5;
const NODE_BOTTOM = 57.5;

/* ── Horizontal glow line (tapered) ── */
function HGlow({ reverse = false, len = GLOW_LENGTH }: { reverse?: boolean; len?: number }) {
  return (
    <div
      className="h-[4px]"
      style={{
        width: len,
        background: reverse
          ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 100%)"
          : "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)",
        clipPath: reverse
          ? "polygon(0 45%, 100% 15%, 100% 85%, 0 55%)"
          : "polygon(0 15%, 100% 45%, 100% 55%, 0 85%)",
        boxShadow: "0px 0px 4.55px rgba(255,255,255,0.37)",
      }}
    />
  );
}

/* ── Vertical glow line (tapered) ── */
function VGlow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className="w-[4px]"
      style={{
        height: GLOW_LENGTH,
        background: reverse
          ? "linear-gradient(0deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)",
        clipPath: reverse
          ? "polygon(45% 0, 55% 0, 85% 100%, 15% 100%)"
          : "polygon(15% 0, 85% 0, 55% 100%, 45% 100%)",
        boxShadow: "0px 0px 4.55px rgba(255,255,255,0.37)",
      }}
    />
  );
}

/* ── Thin connector line ── */
function Line({ dir, len }: { dir: "h" | "v"; len: number }) {
  return dir === "h" ? (
    <div style={{ width: len, height: 1.14, background: "rgba(255,255,255,0.06)" }} />
  ) : (
    <div style={{ width: 1.14, height: len, background: "rgba(255,255,255,0.06)" }} />
  );
}

/* ── Icon helpers (simple SVG icons matching Figma) ── */
const ic = "rgba(255,255,255,0.45)";

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 21C12 21 3 15 3 8.5C3 5.46 5.46 3 8.5 3C10.28 3 11.87 3.87 12 5C12.13 3.87 13.72 3 15.5 3C18.54 3 21 5.46 21 8.5C21 15 12 21 12 21Z" fill={ic} />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="4" fill={ic} />
      <circle cx="8" cy="10" r="1.5" fill="#1a1a1a" />
      <circle cx="12" cy="10" r="1.5" fill="#1a1a1a" />
      <circle cx="16" cy="10" r="1.5" fill="#1a1a1a" />
      <path d="M6 17L4 21V17H6Z" fill={ic} />
    </svg>
  );
}
function DbIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill={ic} />
      <path d="M4 6V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V6" stroke={ic} strokeWidth="1.5" />
      <path d="M4 12V18C4 19.66 7.58 21 12 21C16.42 21 20 19.66 20 18V12" stroke={ic} strokeWidth="1.5" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.9 8.6L22 9.2L16.8 13.9L18.2 21L12 17.3L5.8 21L7.2 13.9L2 9.2L9.1 8.6L12 2Z" fill={ic} />
    </svg>
  );
}
function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 4L10 9H5C3.9 9 3 9.9 3 11V13C3 14.1 3.9 15 5 15H6L8 21H10L8 15L10 15L19 20V4Z" fill={ic} />
      <path d="M21 10V14" stroke={ic} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ThumbIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 22H4C3.45 22 3 21.55 3 21V11C3 10.45 3.45 10 4 10H7V22Z" fill={ic} />
      <path d="M7 10L11 2C11.55 2 13 2.5 13 4.5V8H19.5C20.33 8 21 8.67 20.9 9.5L19.5 20.5C19.43 21.12 18.9 21.5 18.3 21.5H7V10Z" fill={ic} />
    </svg>
  );
}

/* ── Full Illustration ── */
function Illustration() {
  const topY = (NODE_TOP / 100) * CANVAS_SIZE + NODE_SIZE / 2;
  const bottomY = (NODE_BOTTOM / 100) * CANVAS_SIZE + NODE_SIZE / 2;

  const glowXAt = (y: number) => {
    const dy = Math.min(Math.abs(y - CENTER), INNER_RING_RY);
    const ratio = dy / INNER_RING_RY;
    return INNER_RING_RADIUS * Math.sqrt(1 - ratio * ratio);
  };

  const leftXTop = CENTER - glowXAt(topY) - GLOW_LENGTH;
  const leftXBottom = CENTER - glowXAt(bottomY) - GLOW_LENGTH;
  const rightXTop = CENTER + glowXAt(topY);
  const rightXBottom = CENTER + glowXAt(bottomY);

  return (
    <div className="relative w-[420px] h-[420px] shrink-0 hidden lg:block">
      {/* ── Central hub ── */}
      {/* Outer dark ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] rounded-full bg-[#0F0F0F]" />
      {/* White glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[133px] h-[100px] rounded-full"
        style={{ background: "white", filter: "blur(8.5px)", boxShadow: "17px 17px 17px rgba(0,0,0,0.15)" }}
      />
      {/* Dark inner ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[176px] h-[172px] rounded-full bg-[#0C0C0C]" />
      {/* Glass circle */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] rounded-full -rotate-3"
        style={{
          background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.26) 100%)",
          border: "2.27px solid rgba(255,255,255,0.03)",
          backdropFilter: "blur(83px)",
        }}
      />
      {/* Mail icon — dark rounded square with subtle glass edge */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] rounded-[16px] flex items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/mail-02.svg" alt="" className="w-[88px] h-[88px]" />
      </div>

      {/* ── Horizontal glow lines (left & right) ── */}
      <div
        className="absolute"
        style={{ left: leftXTop, top: topY }}
      >
        <HGlow reverse />
      </div>
      <div
        className="absolute"
        style={{ left: leftXBottom, top: bottomY }}
      >
        <HGlow reverse />
      </div>
      <div
        className="absolute"
        style={{ left: rightXTop, top: topY }}
      >
        <HGlow />
      </div>
      <div
        className="absolute"
        style={{ left: rightXBottom, top: bottomY }}
      >
        <HGlow />
      </div>

      {/* ── Vertical glow lines (top & bottom) ── */}
      <div
        className="absolute"
        style={{ left: `calc(50% - ${GLOW_THICKNESS / 2}px)`, top: `calc(50% - ${INNER_RING_RADIUS}px - ${GLOW_LENGTH}px)` }}
      >
        <VGlow reverse />
      </div>
      <div
        className="absolute"
        style={{ left: `calc(50% - ${GLOW_THICKNESS / 2}px)`, top: `calc(50% + ${INNER_RING_RADIUS}px)` }}
      >
        <VGlow />
      </div>

      {/* ── Top node (Heart) ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col items-center">
        <Node><HeartIcon /></Node>
        <Line dir="v" len={40} />
      </div>

      {/* ── Bottom node (Star) ── */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center">
        <Line dir="v" len={40} />
        <Node><StarIcon /></Node>
      </div>

      {/* ── Left-top node (Chat bubble) ── */}
      <div className="absolute flex items-center" style={{ left: 0, top: "28%" }}>
        <div className="-translate-x-[36px]">
          <Node><ChatIcon /></Node>
        </div>
        <Line dir="h" len={50} />
      </div>

      {/* ── Left-bottom node (Database) ── */}
      <div className="absolute flex items-center" style={{ left: "5%", top: "58%" }}>
        <div className="relative -translate-x-[1px]">
          <Node><DbIcon /></Node>
          <div
            className="absolute"
            style={{ right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }}
          >
            <HGlow len={42} />
          </div>
        </div>
      </div>

      {/* ── Right-top node (Megaphone) ── */}
      <div className="absolute flex items-center" style={{ right: 0, top: "28%" }}>
        <Line dir="h" len={50} />
        <div className="translate-x-[36px]">
          <Node><MegaphoneIcon /></Node>
        </div>
      </div>

      {/* ── Right-bottom node (Thumbs up) ── */}
      <div className="absolute flex items-center" style={{ right: "5%", top: "58%" }}>
        <div className="relative translate-x-[1px]">
          <Node><ThumbIcon /></Node>
          <div
            className="absolute"
            style={{ left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }}
          >
            <HGlow reverse len={42} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Section ── */

export function CampaignSection() {
  return (
    <section className="w-full bg-black px-6 md:px-8 py-[75px]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-10">
        {/* Left – Step indicator */}
        <div className="flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            01
          </span>
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[341px] bg-white/16" />
            <div className="w-[2px] h-[108px] bg-white" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            03
          </span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[40px] max-w-[510px]">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold leading-[44px]">
            From &quot;send this email&quot; to &quot;run this campaign&quot;
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
