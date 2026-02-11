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
      {/* Hub */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[190px] h-[190px] rounded-[44px]" style={{ top: cy - 95, zIndex: 15, background: "rgba(255,255,255,0.015)" }} />
      <div className="absolute left-1/2 -translate-x-1/2 w-[130px] h-[90px] rounded-[40px]" style={{ top: cy - 45, zIndex: 15, background: "rgba(255,255,255,0.7)", filter: "blur(16px)" }} />
      <div className="absolute left-1/2 -translate-x-1/2 w-[162px] h-[162px] rounded-[42px]" style={{ top: cy - 81, zIndex: 15, background: "#0e0e0e" }} />
      <div className="absolute left-1/2 -translate-x-1/2 w-[124px] h-[124px] rounded-[36px]" style={{ top: cy - 62, zIndex: 15, background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.28) 100%)", border: "3px solid rgba(255,255,255,0.04)" }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[74px] h-[74px]" style={{ top: cy - 37, zIndex: 25 }}>
        <img src="/images/figma/setup-02.svg" alt="" className="w-full h-full" />
      </div>

      {/* Satellites */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 14, zIndex: 25 }}>
        <SatelliteNode>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="3" width="14" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" /><path d="M9 1h6v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V1z" fill="rgba(255,255,255,0.6)" /></svg>
        </SatelliteNode>
      </div>
      <div className="absolute" style={{ top: 200, left: 32, zIndex: 25 }}>
        <SatelliteNode>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="2" width="16" height="18" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" /><rect x="5" y="4" width="12" height="4" rx="1" fill="rgba(255,255,255,0.4)" /></svg>
        </SatelliteNode>
      </div>
      <div className="absolute" style={{ top: 200, right: 32, zIndex: 25 }}>
        <SatelliteNode>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" /><text x="11" y="15" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" fontWeight="700" fontFamily="Inter">$</text></svg>
        </SatelliteNode>
      </div>
      <div className="absolute" style={{ bottom: 60, left: 20, zIndex: 25 }}><SkeletonCard amount="$2756" /></div>
      <div className="absolute" style={{ bottom: 60, right: 20, zIndex: 25 }}><SkeletonCard amount="$1345" /></div>
      <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: -10, zIndex: 25 }}><SkeletonCard amount="$9876" /></div>

      {/* Connector lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        {targets.map((t, i) => {
          const dx = t.x - cx, dy = t.y - cy;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          return (
            <div key={i} className="absolute" style={{ left: cx, top: cy, width: length, height: 0, transformOrigin: '0 0', transform: `rotate(${angle}deg)` }}>
              <div style={{ position: 'absolute', width: '100%', height: '8px', top: '-3px', background: 'linear-gradient(90deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)', filter: 'blur(4px)' }} />
              <div style={{ position: 'relative', width: '100%', height: '2px', background: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)', boxShadow: '0 0 8px rgba(255,255,255,0.4)' }} />
            </div>
          );
        })}
      </div>
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
