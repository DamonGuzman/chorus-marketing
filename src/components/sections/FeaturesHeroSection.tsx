export function FeaturesHeroSection() {
  return (
    <section className="relative w-full h-[790px] bg-black overflow-hidden">
      {/* ── Decorative Concentric Rings ── */}
      <div
        className="absolute left-1/2 top-[100px] -translate-x-1/2 w-[935px] h-[911px] -rotate-3 rounded-full border-[2.85px] border-white/5 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />
      <div
        className="absolute left-1/2 top-[192px] -translate-x-1/2 w-[736px] h-[717px] -rotate-3 rounded-full border-[2.85px] border-white/8 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />
      <div
        className="absolute left-1/2 top-[262px] -translate-x-1/2 w-[584px] h-[569px] -rotate-3 rounded-full border-[2.85px] border-white/10 pointer-events-none"
        style={{
          boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* ── Soft Glow ── */}
      <div
        className="absolute left-1/2 top-[464px] -translate-x-1/2 w-[407px] h-[407px] rounded-full pointer-events-none"
        style={{
          background: "rgba(217, 217, 217, 0.80)",
          filter: "blur(277.5px)",
        }}
      />

      {/* ── Tilted Card Backgrounds ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[544px] w-[793px] h-[589px] -rotate-[23deg] rounded-[26px] pointer-events-none"
        style={{ background: "rgba(255, 255, 255, 0.04)" }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[513px] w-[793px] h-[589px] -rotate-[23deg] rounded-[26px] pointer-events-none"
        style={{ background: "rgba(255, 255, 255, 0.06)" }}
      />

      {/* ── Dashboard Image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/figma/test.svg"
        alt="Chorus AI Workforce Dashboard"
        className="absolute left-1/2 -translate-x-1/2 top-[240px] w-full max-w-[1028px] h-auto"
      />

      {/* ── Bottom Fade Gradient ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[260px] pointer-events-none z-[5]"
        style={{
          background:
            "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* ── Hero Text ── */}
      <div className="relative z-10 flex flex-col items-center pt-[100px] px-6">
        <div className="flex flex-col items-center gap-[27px] max-w-[960px]">
          <h1 className="text-center text-white text-[40px] md:text-[64px] font-bold leading-[1] md:leading-[58px] tracking-tight">
            Your AI Workforce, Unpacked
          </h1>
          <p className="text-center text-gray-300 text-[20px] md:text-[28px] font-medium leading-[28px] md:leading-[36px] max-w-[940px]">
            The capabilities that let you direct instead of micromanage
          </p>
        </div>
      </div>
    </section>
  );
}
