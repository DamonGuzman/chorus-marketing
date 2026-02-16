"use client";

import { useState, useRef, type ReactNode } from "react";

/* ── Reusable small components for illustrations ── */

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

function SatelliteNode({ children }: { children: ReactNode }) {
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

/* ── Gear Hub Illustration (from GoalDrivenSection) ── */
function GearIllustration() {
  const cx = 270, cy = 240;
  const targets = [
    { x: 270, y: 42 }, { x: 62, y: 230 }, { x: 478, y: 230 },
    { x: 100, y: 420 }, { x: 440, y: 420 }, { x: 270, y: 490 },
  ];

  return (
    <div className="relative w-[540px] h-[540px] shrink-0">
      <img src={"images/figma/features/settings-image.png"}/>
    </div>
  );
}

/* ── Scaled illustration wrapper ── */
function ScaledIllustration({ children, w = 540, h = 540 }: { children: ReactNode; w?: number; h?: number }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: `calc(${h}px * 0.62)` }}>
      <div
        className="absolute top-0 left-1/2"
        style={{ width: w, height: h, transformOrigin: 'top center', transform: `translateX(-50%) scale(0.62)` }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Slide data ── */
const slides = [
  {
    title: 'From "update this spreadsheet" to "optimize our budget"',
    description: "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "gear" as const,
  },
  {
    title: 'From "schedule this meeting" to "build this pipeline"',
    description: "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "gear" as const,
  },
  {
    title: 'From "send this email" to "run this campaign"',
    description: "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "gear" as const,
  },
];

export function StepCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / slides.length;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActive(index);
  };

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / slides.length;
    el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <section className="lg:hidden w-full bg-black py-[50px]">
      {/* Fixed illustration — stays in place */}
      <ScaledIllustration>
        <GearIllustration />
      </ScaledIllustration>

      {/* Scrollable text carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden mt-[24px]"
      >
        <div className="flex w-max">
          {slides.map((slide, i) => (
            <div key={i} className="w-screen flex-shrink-0 snap-center px-6">
              <div className="flex flex-col gap-[20px] max-w-[500px] mx-auto">
                <h2 className="text-white text-[24px] font-bold leading-[36px]">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-[16px] font-medium leading-[28px]">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-[8px] mt-[30px]">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === active ? "w-[40px] bg-white" : "w-[40px] bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
