"use client";

import { useCallback, useRef, type ReactNode } from "react";

import {
  AnimateOnScroll,
  Badge,
  Section,
  ScrollTextReveal,
} from "@/components/ui";

function GlowCard({ children, className }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;
    cancelAnimationFrame(rafRef.current);
    const clientX = e.clientX;
    const clientY = e.clientY;
    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(600px circle at ${clientX - rect.left}px ${clientY - rect.top}px, rgba(255,255,255,0.06), transparent 40%)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const glow = glowRef.current;
    if (glow) glow.style.opacity = "0";
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ contain: "layout style paint", willChange: "transform" }}
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}

export function OldWaySection() {
  return (
    <Section
      className="self-stretch px-6 py-12 md:px-10 lg:px-20 md:py-20 flex flex-col justify-start items-center gap-4 md:gap-10"
      id="old-way"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="flex flex-col justify-start items-center gap-1">
          <Badge className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
            The Problem
          </Badge>
          <div className="text-center justify-center text-White text-base font-semibold font-['Urbanist'] leading-6">
            <ScrollTextReveal
              text="The Old Way : Managing Individual Players"
              className="text-center max-md:text-2xl max-md:leading-8 md:text-3xl md:leading-[42px] lg:text-5xl lg:leading-[78px] font-bold font-['Urbanist']"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="text-center w-full max-w-[320px] md:max-w-none text-sm leading-6 md:text-base md:leading-7 lg:text-xl lg:leading-9 font-normal font-['Urbanist'] text-gray-300 mx-auto">
                The best way to reach humans instead of spam folders. Deliver
                transactional and marketing emails at scale.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 lg:gap-2 justify-items-stretch items-stretch transform-gpu">
          <AnimateOnScroll animation="fade-up" delay={0.1} duration={1} threshold={0.1}>
            <GlowCard className="flex flex-col items-start gap-6 rounded-2xl p-2 pb-6 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">
              <div className="relative w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/Group3.svg?v=3"
                  alt="Hiring workflow card"
                  className="w-full h-auto"
                />
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 411 306"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="snk-glow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
                      <feGaussianBlur stdDeviation="1.25" />
                    </filter>
                    <filter id="snk-shadow" x="-100%" y="-100%" width="300%" height="300%" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
                      <feGaussianBlur stdDeviation="3" />
                    </filter>
                    <path id="snk-path" d="M 118 86.75 V 102.303 C 118 107.826 122.477 112.303 128 112.303 H 156 C 161.523 112.303 166 116.781 166 122.303 V 133.75 L 166 135.75 L 171 188.75 L 171 192.75 V 204.498 C 171 210.02 175.477 214.498 181 214.498 H 209 C 214.523 214.498 219 218.975 219 224.498 V 232.75" />
                  </defs>
                  <rect x="43" y="34.75" width="158" height="44" rx="10"
                    fill="none" stroke="white" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.08;0.35;0.08" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="83" y="140.75" width="223" height="44" rx="10"
                    fill="none" stroke="white" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.08;0.35;0.08" dur="3s" begin="1s" repeatCount="indefinite" />
                  </rect>
                  <rect x="146" y="239.75" width="190" height="44" rx="10"
                    fill="none" stroke="white" strokeWidth="1">
                    <animate attributeName="stroke-opacity" values="0.08;0.35;0.08" dur="3s" begin="2s" repeatCount="indefinite" />
                  </rect>

                  <circle r="10" fill="white" opacity="0.25" filter="url(#snk-shadow)">
                    <animateMotion dur="4s" repeatCount="indefinite"
                      keyPoints="0;0.35;0.65;1" keyTimes="0;0.45;0.55;1" calcMode="linear">
                      <mpath href="#snk-path" />
                    </animateMotion>
                  </circle>
                  <circle r="2.5" fill="white" filter="url(#snk-glow)">
                    <animateMotion dur="4s" repeatCount="indefinite"
                      keyPoints="0;0.35;0.65;1" keyTimes="0;0.45;0.55;1" calcMode="linear">
                      <mpath href="#snk-path" />
                    </animateMotion>
                  </circle>
                </svg>
              </div>
              <div className="flex flex-col items-start gap-4 pl-5">
                <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                  Take months to fill a position
                </h3>
                <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-3 md:mt-0">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </p>
              </div>
            </GlowCard>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.25} duration={1} threshold={0.1}>
            <GlowCard className="flex flex-col items-start gap-6 rounded-2xl p-2 pb-6 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">
              <img
                src="/images/figma/Group2.svg"
                alt="Process overview card"
                className="w-full h-auto"
              />
              <div className="flex flex-col items-start gap-4 pl-5">
                <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                  Coordinate between siloed teams
                </h3>
                <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-3 md:mt-0">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </p>
              </div>
            </GlowCard>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-up" delay={0.4} duration={1} threshold={0.1}>
            <GlowCard className="flex flex-col items-start gap-6 rounded-2xl p-2 pb-6 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)]">
              <img
                src="/images/figma/Group%201.svg?v=4"
                alt="Cost breakdown card"
                className="w-full h-auto"
              />
              <div className="flex flex-col items-start gap-4 pl-5">
                <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                  Costs $4,000+ per hire
                </h3>
                <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-3 md:mt-0">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </p>
              </div>
            </GlowCard>
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
}
