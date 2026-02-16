/* ─────────────────────────────────────────────────────────
   Pipeline Section
   "From 'schedule this meeting' to 'build this pipeline'"
   Step 01→03 with task card + person icon illustration
   ───────────────────────────────────────────────────────── */

/* ── Skeleton bubble ── */
function SkeletonBubble() {
  return (
    <div
      className="p-[16px] rounded-[27px] flex flex-col gap-[15px]"
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.11) 100%)",
        outline: "1.54px solid rgba(255,255,255,0.08)",
        outlineOffset: "-1.54px",
      }}
    >
      <div className="w-[151px] p-[12px] bg-white/4 rounded-[16px] flex flex-col gap-[7px]">
        <div className="w-[126px] h-[10px] bg-white/10 rounded-[9px]" />
        <div className="w-full h-[9px] bg-white/10 rounded-[9px]" />
      </div>
    </div>
  );
}

/* ── Avatar stack using real images ── */
function SmallAvatarStack() {
  const avatars = [
    "/images/figma/4229-62012/imgEllipse54.png",
    "/images/figma/4229-62012/imgEllipse55.png",
    "/images/figma/4229-62012/imgEllipse56.png",
  ];
  return (
    <div className="flex items-center -space-x-[6px]">
      {avatars.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt=""
          className="w-[30px] h-[30px] rounded-full border-[1.5px] border-gray-600 shrink-0 object-cover"
        />
      ))}
    </div>
  );
}

/* ── Floating task card with Track Monthly Revenue ── */
function TaskCard() {
  return (
    <div
      className="w-[222px] p-[27px] rounded-[35px] flex flex-col gap-[17px] h-[24rem] bg-[#111111] shadow-[inset_0px_0px_6.4px_rgba(255,255,255,0.27)]"
    >
      {/* Header */}
      <div className="flex flex-col gap-[20px]">
        <p className="text-gray-100 text-sm font-bold">Track Monthly Revenue</p>
        <div className="flex flex-col gap-[13px]">
          <div className="flex items-center gap-[6px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <rect x="3" y="4" width="13" height="14" rx="2" stroke="#7D7C83" strokeWidth="1.2" />
              <path d="M7 2V5" stroke="#7D7C83" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M11 2V5" stroke="#7D7C83" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="6" y1="10" x2="12" y2="10" stroke="#7D7C83" strokeWidth="1.2" />
              <line x1="6" y1="13" x2="10" y2="13" stroke="#7D7C83" strokeWidth="1.2" />
            </svg>
            <span className="text-gray-300 text-[14px] font-semibold leading-[28px]">Tasks :</span>
            <span className="text-gray-300 text-[14px] font-medium leading-[28px]">7</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <SmallAvatarStack />
            <span className="text-gray-300 text-[17px] font-medium leading-[25px]">+3</span>
          </div>
        </div>
      </div>

      {/* Skeleton bubbles */}
      <SkeletonBubble />
      <SkeletonBubble />
    </div>
  );
}

/* ── Illustration: background SVG (rotated 180deg per Figma) with hub + task card ── */
function Illustration() {
  return (
    <div className="relative w-[530px] h-[510px] shrink-0 hidden lg:block">
      {/* Background flowing lines — lines fan from hub outward */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/figma/image 29.svg"
        alt=""
        className="absolute"
        style={{
          width: 629,
          height: 493,
          left: 60,
          top: 0,
        }}
      />

      {/* ── Central hub: layered rounded squares ── */}
      {/* White glow */}
      <div
        className="absolute rounded-[45px]"
        style={{ left: 10, top: 172, width: 175, height: 124, background: "white", filter: "blur(7.84px)", boxShadow: "16px 16px 16px rgba(0,0,0,0.15)" }}
      />
      {/* Dark square */}
      <div
        className="absolute rounded-[45px]"
        style={{ left: 10, top: 152, width: 172, height: 172, background: "#101010", backdropFilter: "blur(130px)" }}
      />
      {/* Glass inner */}
      <div
        className="absolute rounded-[45px]"
        style={{ left: 30, top: 172, width: 133, height: 133, background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.26) 100%)", border: "3.57px solid rgba(255,255,255,0.03)", backdropFilter: "blur(130px)" }}
      />
      {/* Center icon */}
      <div className="absolute" style={{ left: 60, top: 200 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/calendar-03.svg" alt="" className="w-[74px] h-[74px]" />
      </div>

      {/* ── Task card — positioned to the right, vertically centered-ish ── */}
      <div className="absolute -right-[7.3rem] top-[3.3rem]">
        <TaskCard />
      </div>
    </div>
  );
}

/* ── Main Section ── */

export function PipelineSection() {
  return (
    <section className="w-full bg-black px-6 md:px-[100px] py-[75px]">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-10">
        {/* Left – Step indicator */}
        <div className="flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            01
          </span>
          {/* Two vertical lines: faded 341px then solid 341px (from Figma) */}
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-[341px] bg-white/16" />
            <div className="w-[2px] h-[341px] bg-white" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            03
          </span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[40px] max-w-[470px]">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold leading-[44px]">
            From &quot;schedule this meeting&quot; to &quot;build this
            pipeline&quot;
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
