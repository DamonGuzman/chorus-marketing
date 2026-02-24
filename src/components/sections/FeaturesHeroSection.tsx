"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function FeaturesHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const softSpring = { damping: 20, stiffness: 300, mass: 0.3 };
  const ringsSpring = { damping: 25, stiffness: 150, mass: 0.5 };

  const smoothX = useSpring(mouseX, softSpring);
  const smoothY = useSpring(mouseY, softSpring);
  const ringsSmX = useSpring(mouseX, ringsSpring);
  const ringsSmY = useSpring(mouseY, ringsSpring);

  /* ── Image layer ── */
  const moveX = useTransform(smoothX, [-1, 1], [-40, 40]);
  const moveY = useTransform(smoothY, [-1, 1], [-30, 30]);
  const rotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);

  /* ── Rings layer: opposite direction for depth ── */
  const ringsMoveX = useTransform(ringsSmX, [-1, 1], [12, -12]);
  const ringsMoveY = useTransform(ringsSmY, [-1, 1], [8, -8]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      mouseX.set(normX);
      mouseY.set(normY);
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
      {/* ── Decorative Concentric Rings (desktop only) – parallax layer ── */}
      <motion.div
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ x: ringsMoveX, y: ringsMoveY }}
      >
        <div
          className="absolute left-1/2 top-section-x -translate-x-1/2 w-[935px] h-[911px] -rotate-3 rounded-full border-[2.85px] border-white/5"
          style={{ boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)" }}
        />
        <div
          className="absolute left-1/2 top-[192px] -translate-x-1/2 w-[736px] h-[717px] -rotate-3 rounded-full border-[2.85px] border-white/8"
          style={{ boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)" }}
        />
        <div
          className="absolute left-1/2 top-[262px] -translate-x-1/2 w-[584px] h-[569px] -rotate-3 rounded-full border-[2.85px] border-white/10"
          style={{ boxShadow: "0px 6.18px 6.18px rgba(0, 0, 0, 0.25)" }}
        />
      </motion.div>

      {/* ── Soft Glow (desktop only) ── */}
      <div
        className="hidden md:block absolute left-1/2 top-[264px] -translate-x-1/2 w-[960px] h-[960px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,217,217,0.25) 0%, transparent 60%)",
        }}
      />

      {/* ── Hero Text ── */}
      <div className="relative z-10 flex flex-col items-center pt-[80px] md:pt-section-x px-4 md:px-8">
        <div className="hero-entrance flex flex-col items-center gap-[20px] md:gap-[27px] max-w-[960px]">
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
          <p className="self-stretch text-center text-gray-400 md:text-gray-300 text-base md:text-[28px] font-normal md:font-medium font-['Urbanist'] leading-6 md:leading-[36px] max-w-[940px]">
            The capabilities that let you direct instead of micromanage
          </p>
        </div>
      </div>

      {/* ── Mobile: Dashboard Image ── */}
      <motion.div
        className="block md:hidden h-96 relative w-screen left-1/2 -translate-x-1/2"
        style={{ x: moveX, y: moveY, rotateX, rotateY, perspective: 1000 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/features/first-card-mobile.png"
          alt="Chorus AI Workforce Dashboard"
          loading="lazy"
          className="absolute right-0 z-3"
        />
      </motion.div>

      {/* ── Desktop: Dashboard Image ── */}
      <div className="hidden md:block relative h-[500px]">
        <motion.div
          style={{ x: moveX, y: moveY, rotateX, rotateY, perspective: 1000 }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/figma/features/features-ai-workforce.png"
            alt="Chorus AI Workforce Dashboard"
            loading="lazy"
            className="absolute left-1/2 top-[-50px] w-full max-w-[1028px] h-auto z-[4] rotate-[-3deg]"
            style={{ translate: "-45% 0" }}
          />
        </motion.div>
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
