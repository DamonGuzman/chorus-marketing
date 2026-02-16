export function FeaturesHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* ── Decorative Concentric Rings (desktop only) ── */}
      <div
        className="hidden md:block absolute left-1/2 top-section-x -translate-x-1/2 w-[935px] h-[911px] -rotate-3 rounded-full border-[2.85px] border-white/5 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />
      <div
        className="hidden md:block absolute left-1/2 top-[192px] -translate-x-1/2 w-[736px] h-[717px] -rotate-3 rounded-full border-[2.85px] border-white/8 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />
      <div
        className="hidden md:block absolute left-1/2 top-[262px] -translate-x-1/2 w-[584px] h-[569px] -rotate-3 rounded-full border-[2.85px] border-white/10 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* ── Soft Glow (desktop only) ── */}
      <div
        className="hidden md:block absolute left-1/2 top-[464px] -translate-x-1/2 w-[407px] h-[407px] rounded-full pointer-events-none"
        style={{
          background: "rgba(217, 217, 217, 0.80)",
          filter: "blur(277.5px)",
        }}
      />

      {/* ── Hero Text ── */}
      <div className="relative z-10 flex flex-col items-center pt-[80px] md:pt-section-x px-6">
        <div className="flex flex-col items-center gap-[20px] md:gap-[27px] max-w-[960px]">
          <h1 className="text-center text-white text-[38px] md:text-[64px] font-bold leading-[1.1] md:leading-[58px] md:not-italic tracking-tight">
            <span className="text-white">Your AI </span>
            <span className="bg-linear-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
              Workforce
            </span>
            <span className="bg-linear-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
              {" "}
              , Unpacked
            </span>
          </h1>
          <p className="text-center text-gray-300 text-[16px] md:text-[28px] font-medium leading-[26px] md:leading-[36px] max-w-[940px]">
            The capabilities that let you direct instead of micromanage
          </p>
        </div>
      </div>

      {/* ── Mobile: Dashboard Image (full viewport width so image sticks to right edge) ── */}
      <div className="block md:hidden h-96 relative w-screen left-1/2 -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/features/first-card-mobile.png"
          alt="Chorus AI Workforce Dashboard"
          className="absolute right-0 z-3"
        />
      </div>

      {/* ── Desktop: Dashboard Image (absolute positioned) ── */}
      <div className="hidden md:block relative h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/features/features-ai-workforce.png"
          alt="Chorus AI Workforce Dashboard"
          className="absolute left-1/2 top-0 w-full max-w-[1028px] h-auto z-[3] rotate-[5deg]"
          style={{ translate: "-50% 0" }}
        />
        {/* Desktop Bottom Fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[6rem] pointer-events-none z-[5]"
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </div>
    </section>
  );
}
