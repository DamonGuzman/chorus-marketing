"use client";

import { useEffect, useRef, useState } from "react";
import { ButtonLink, ScrollTextReveal } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";

export function NewHeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); } },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black" id="about">
      <div aria-hidden="true" className="hero-dot-grid" />
      <div className="relative z-10 pt-[60px] md:pt-[110px] px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto pb-12 md:pb-16">
        <div className="w-full max-w-[1183px] mx-auto flex flex-col justify-start items-center">
          <div className="self-stretch flex flex-col justify-start items-center gap-[20px] md:gap-7">
            <div className="self-stretch flex flex-col justify-start items-center gap-[14px] md:gap-5">
              <ScrollTextReveal
                text="Stop Hiring. Start Building."
                stagger={150}
                className="self-stretch text-center text-[36px] leading-[40px] md:text-5xl md:leading-[56px] lg:text-7xl lg:leading-[78px] font-extrabold font-['Urbanist']"
              />
              <p className="w-72 md:w-auto text-center text-base leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-100">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
              </p>
            </div>

            <div className="relative rounded-[50px] overflow-hidden inline-flex">
              <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--cta" />
              <ButtonLink href={PRIMARY_CTA_HREF} variant="light" size="md" className="relative z-10">
                Build Your Team Now
              </ButtonLink>
            </div>
          </div>
        </div>

        <div ref={cardRef} className="mt-10 md:mt-14 flex justify-center px-2 md:px-8" style={{ perspective: "1200px" }}>
          <div
            className="relative w-full max-w-[1100px]"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed
                ? "translateY(0) rotateX(0deg) scale(1)"
                : "translateY(80px) rotateX(8deg) scale(0.92)",
              transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.4s cubic-bezier(0.16,1,0.3,1)",
              willChange: revealed ? "auto" : "opacity, transform",
            }}
          >
            <div aria-hidden="true" className="hero-white-backlight" />

            <div className="glow-border-card rounded-[16px] md:rounded-[24px]">
              <div className="relative w-full overflow-hidden rounded-[14px] md:rounded-[22px] bg-[#08080c] shadow-[1px_-4px_14px_1px_white]">
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: revealed ? "hero-shimmer 3s ease-in-out 1s 1 forwards" : "none",
                  }}
                />

                {/* Scan line */}
                <div
                  className="absolute left-0 right-0 h-[1px] z-10 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(180,138,251,0.4), rgba(255,255,255,0.6), rgba(180,138,251,0.4), transparent)",
                    top: revealed ? "100%" : "0%",
                    opacity: revealed ? 0 : 1,
                    transition: "top 2s cubic-bezier(0.16,1,0.3,1) 0.4s, opacity 0.5s ease 2.2s",
                  }}
                />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/CleanShot 2024-10-20 at 22.27.03.svg"
                  alt="Chorus platform interface"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}
