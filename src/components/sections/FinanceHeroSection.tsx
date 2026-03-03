/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { ScrollTextReveal } from "@/components/ui";

export function FinanceHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const softSpring = { damping: 20, stiffness: 300, mass: 0.3 };
  const ringsSpring = { damping: 25, stiffness: 150, mass: 0.5 };

  const smoothX = useSpring(mouseX, softSpring);
  const smoothY = useSpring(mouseY, softSpring);
  const ringsSmX = useSpring(mouseX, ringsSpring);
  const ringsSmY = useSpring(mouseY, ringsSpring);

  const moveX = useTransform(smoothX, [-1, 1], [-30, 30]);
  const moveY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const rotateY = useTransform(smoothX, [-1, 1], [-4, 4]);

  const ringsMoveX = useTransform(ringsSmX, [-1, 1], [10, -10]);
  const ringsMoveY = useTransform(ringsSmY, [-1, 1], [6, -6]);

  const leftCardX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const leftCardY = useTransform(smoothY, [-1, 1], [-15, 15]);
  const rightCardX = useTransform(smoothX, [-1, 1], [15, -15]);
  const rightCardY = useTransform(smoothY, [-1, 1], [10, -10]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-black overflow-hidden"
    >
      {/* Blurred glow center – desktop only */}
      <div className="hidden md:block absolute left-1/2 top-[68%] -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-300/80 rounded-full blur-[280px]" />

      {/* Concentric orbital circles – desktop only */}
      <motion.div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ x: ringsMoveX, y: ringsMoveY }}
      >
        <div className="absolute left-1/2 top-[78%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-[500px] h-[500px] md:w-[935px] md:h-[911px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/5 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute left-1/2 top-[77%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[390px] md:w-[736px] md:h-[717px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/10 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute left-1/2 top-[78%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-[310px] h-[300px] md:w-[584px] md:h-[569px] -rotate-[2.62deg] rounded-full border-[2.85px] border-white/20 shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </motion.div>

      {/* ── MOBILE HERO ── */}
      <div className="md:hidden w-full flex flex-col items-center">
        {/* Heading + subtitle */}
        <div className="w-full px-6 pt-14 pb-5 flex flex-col items-center gap-4 text-center">
          <h1 className="text-[30px] font-bold font-['Urbanist'] leading-[1.1] text-white mt-8">
            AI Finance Team That Handles Reporting, Forecasting &amp; Compliance
          </h1>
          <p className="text-[#7D7C83] text-[18px] font-medium font-['Urbanist'] leading-6">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>

        {/* Dashboard image – centered */}
        <div className="relative z-10 w-full flex justify-center overflow-hidden">
          <div
            style={{
              width: "140%",
              aspectRatio: "372 / 369",
              backgroundImage: "url('/images/figma/finance-mobile-hero.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              imageRendering: "crisp-edges",
            }}
          />
        </div>
      </div>

      {/* ── DESKTOP HERO ── */}
      <div className="hidden md:block">
        {/* Title */}
        <div className="relative z-20 pt-[140px] flex flex-col items-center px-6">
          <div className="flex flex-col items-center gap-12 max-w-[1229px]">
            <ScrollTextReveal
              text="AI Finance Team That Handles Reporting, Forecasting & Compliance"
              stagger={150}
              className="text-6xl font-bold font-['Urbanist'] leading-[74px] text-center"
            />
            <a
              href={PRIMARY_CTA_HREF}
              className="h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
            >
              <span className="text-center text-white text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
            </a>
          </div>
        </div>

        {/* Dashboard visual – cursor-tracking parallax */}
        <motion.div
          className="absolute left-[53%] top-[58%] lg:top-[60%] -translate-x-1/2 -translate-y-1/2 z-10 w-[520px] lg:w-[850px]"
          style={{ x: moveX, y: moveY, rotateX, rotateY, perspective: 1000 }}
        >
          <img
            src="/images/figma/Group 1707484149.svg"
            alt="AI Finance dashboard"
            className="w-full h-auto mt-[20px]"
          />
        </motion.div>
      </div>

      {/* Left-side cards – parallax */}
      <motion.div
        className="absolute left-[3%] lg:left-[8%] top-[79%] lg:top-[55%] -translate-y-1/2 z-10 hidden md:flex flex-col items-start gap-4"
        style={{ x: leftCardX, y: leftCardY }}
      >
        <img
          src="/images/figma/test (2).svg"
          alt="Finance Agent card"
          className="w-[160px] md:w-[280px] lg:w-[320px] h-auto"
        />
      </motion.div>

      {/* Right-side card + Growth stats – parallax (opposite direction) */}
      <motion.div
        className="absolute right-4 lg:right-15 top-[89%] lg:top-[65%] -translate-y-1/2 z-10 w-[160px] md:w-[200px] lg:w-[320px] hidden md:flex flex-col items-start gap-0"
        style={{ x: rightCardX, y: rightCardY }}
      >
        <img
          src="/images/figma/test (1).svg"
          alt="Finance Agent card"
          className="w-full h-auto"
        />
        <div className="w-[120px] md:w-[180px] lg:w-[210px] rounded-2xl border border-white/15 p-2 bg-white/5 backdrop-blur-sm flex items-center justify-center -mt-6 -ml-10 md:-ml-18">
          <img
            src="/images/figma/Group 238031.svg"
            alt="Finance stats"
            className="w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      {/* Desktop min-height spacer */}
      <div className="hidden md:block md:min-h-[480px]" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/90 to-transparent z-[5]" />
    </section>
  );
}
