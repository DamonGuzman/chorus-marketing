/* eslint-disable @next/next/no-img-element */
"use client";

export function SalesHeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Luminous glow – large diffused light behind the dashboard (1032×516 @ 50% in Figma) */}
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[520px] bg-white/10 rounded-full blur-[200px] pointer-events-none" />

      {/* SVG illustration with person-laptop overlay */}
      <div className="absolute top-[50px] md:top-[57px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] z-0 pointer-events-none">
        <div className="relative w-full" style={{ aspectRatio: "1440 / 883" }}>
          <object
            data="/images/figma/Group 1707484064.svg"
            type="image/svg+xml"
            className="absolute inset-0 w-full h-full"
            aria-label="Sales Performance Dashboard with AI agents"
          />
          <img
            src="/images/figma/person-laptop.png"
            alt="Person using laptop"
            className="absolute object-cover object-top"
            style={{
              left: "55.97%",
              top: "65%",
              width: "15.39%",
            }}
          />
        </div>
      </div>

      {/* Title - sits on top of the circles */}
      <div className="relative z-10 pt-24 md:pt-[150px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center gap-5 md:gap-7 max-w-[960px]">
          <h1 className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,white_0%,#cbcbcb_25%,#979797_50%,#646464_75%,#303030_100%)] text-3xl md:text-[64px] font-bold font-['Urbanist'] leading-tight md:leading-[58px] text-center">
            AI Sales Team That Works 24/7
          </h1>
          <p className="text-center text-[#7d7c83] text-lg md:text-[28px] font-medium font-['Urbanist'] leading-7 md:leading-[44px] max-w-[940px]">
            Automate prospecting, enrichment, outreach, follow-ups, CRM
            updates, and reporting — without hiring SDRs.
          </p>
        </div>
      </div>

      {/* Spacer to match the SVG height so the section has proper dimensions */}
      <div className="h-[450px] md:h-[620px]" />
    </section>
  );
}
