export function FeaturesHeroSection() {
  return (
    <section className="relative w-full h-[550px] md:h-[790px] bg-black overflow-hidden">
      {/* ── Decorative Concentric Rings (desktop only) ── */}
      <div
        className="hidden md:block absolute left-1/2 top-[100px] -translate-x-1/2 w-[935px] h-[911px] -rotate-3 rounded-full border-[2.85px] border-white/5 pointer-events-none"
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

      {/* ── Tilted Card Backgrounds (desktop only) ── */}

      {/* ── Dashboard Image (main card) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/figma/features/features-ai-workforce.png"
        alt="Chorus AI Workforce Dashboard"
        className="absolute left-[55%] md:left-[50%] top-[340px] md:top-[13.5rem] w-[750px] sm:w-[800px] md:w-full md:max-w-[1028px] h-auto z-[3] -rotate-[4deg] md:rotate-[5deg]"
        style={{ translate: "-50% 0" }}
      />

      {/* ── Bottom Fade Gradient ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[220px] md:h-[6rem] pointer-events-none z-[5]"
        style={{
          background:
            "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* ── Hero Text ── */}
      <div className="relative z-10 flex flex-col items-center pt-[80px] md:pt-[100px] px-6">
        <div className="flex flex-col items-center gap-[20px] md:gap-[27px] max-w-[960px]">
          <h1 className="text-center text-white text-[38px] md:text-[64px] font-bold leading-[1.1] md:leading-[58px] md:not-italic tracking-tight">
            <span className="text-white">Your AI </span>
            <span className="bg-gradient-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
              Workforce
            </span>
            <span className="bg-gradient-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
              {" "}
              , Unpacked
            </span>
          </h1>
          <p className="text-center text-gray-300 text-[16px] md:text-[28px] font-medium leading-[26px] md:leading-[36px] max-w-[940px]">
            The capabilities that let you direct instead of micromanage
          </p>
        </div>
      </div>
    </section>
  );
}
