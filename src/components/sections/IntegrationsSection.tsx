"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll, Badge, ScrollTextReveal } from "@/components/ui";

const integrationIcons = [
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
];

// Deterministic shuffle using a seeded PRNG to avoid hydration mismatches
function seededShuffle(array: string[], seed: number) {
  const shuffled = [...array];
  let s = seed;
  for (let i = shuffled.length - 1; i > 0; i--) {
    s = (s * 16807 + 0) % 2147483647;
    const j = s % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const randomIcons = seededShuffle(integrationIcons, 42);

const IntegrationIcon = ({ src, delay, revealed }: { src: string; delay: number; revealed: boolean }) => (
  <div
    className="w-9 h-9 md:w-12 md:h-12 lg:w-20 lg:h-20 bg-neutral-800 rounded-full shadow-[0px_1.73px_10.79px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_2.24px_0px_rgba(255,255,255,0.55)] lg:shadow-[0px_3.98px_24.85px_0px_rgba(0,0,0,0.25)] lg:shadow-[inset_0px_0px_5.16px_0px_rgba(255,255,255,0.55)] flex justify-center items-center transition-all duration-700 ease-out"
    style={{
      transitionDelay: `${delay}ms`,
      opacity: revealed ? 1 : 0,
      transform: revealed ? "scale(1) translateY(0)" : "scale(0.5) translateY(12px)",
    }}
  >
    <img src={`/images/figma/landing-page/${src}`} alt="Integration" loading="lazy" className="w-5 h-5 md:w-7 md:h-7 lg:w-12 lg:h-12 object-contain" />
  </div>
);

export function IntegrationsSection() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [videoInView, setVideoInView] = useState(false);
  const [iconsRevealed, setIconsRevealed] = useState(false);

  useEffect(() => {
    const el = videoContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVideoInView(entry.isIntersecting),
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIconsRevealed(true); observer.disconnect(); } },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (videoInView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [videoInView]);

  return (
    <section id="integrations" className="w-[100vw] left-1/2 -translate-x-1/2 relative px-4 py-10 md:px-8 md:py-20 bg-black flex flex-col items-center gap-2.5 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-14">
        <div className="self-stretch flex flex-col justify-start items-center gap-1">
          <Badge className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
            Integration
          </Badge>
          <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-7">
            <ScrollTextReveal
              text="Works In Harmony With Your Current Stack"
              className="justify-start text-white text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[78px] text-center"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <div className="w-full max-w-[320px] md:max-w-[668px] mx-auto text-center text-gray-300 text-sm leading-6 md:text-base md:leading-7 lg:text-xl lg:leading-9 font-normal font-['Urbanist']">More than just integrations, 10,000+ tools that can adapt — turning automation into intuition.</div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>


        <div className="w-full md:w-full h-64 md:h-[480px] lg:h-[602px] max-w-[1209px] relative overflow-hidden flex flex-col justify-center items-center gap-1.5 md:gap-2.5 lg:gap-5">
          {/* Layer 2: Gradient Overlay (fades icons) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_0%,_black_100%)] z-20 pointer-events-none" />

          {/* Layer 3: Blue glowing circle video + blur mask */}
          <div
            ref={videoContainerRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[25] w-[240px] h-[240px] md:w-[380px] md:h-[380px] lg:w-[520px] lg:h-[520px] pointer-events-none"
            style={{
              mask: "radial-gradient(circle, white 30%, transparent 60%)",
              WebkitMask: "radial-gradient(circle, white 30%, transparent 60%)",
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
              preload="none"
              src={videoInView ? "/images/integration/round loop.mp4" : undefined}
            />
          </div>

          {/* Layer 4: Central Logo (topmost, on top of video) */}
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30 w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]"
            src="/images/figma/landing-page/landing-page-animated-logo-icon.svg"
            alt="Chorus logo"
            loading="lazy"
          />


          {(() => {
            const rows = [
              randomIcons.slice(0, 9),
              randomIcons.slice(9, 19),
              randomIcons.slice(19, 28),
              randomIcons.slice(28, 38),
              randomIcons.slice(38, 47),
              randomIcons.slice(47, 57),
            ];
            const centerRow = (rows.length - 1) / 2;
            return (
              <div ref={gridRef}>
                {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="flex flex-nowrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
                    {row.map((icon, colIdx) => {
                      const centerCol = (row.length - 1) / 2;
                      const dist = Math.sqrt((rowIdx - centerRow) ** 2 + (colIdx - centerCol) ** 2);
                      return (
                        <IntegrationIcon key={colIdx} src={icon} revealed={iconsRevealed} delay={dist * 80} />
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
    </section>
  );
}
