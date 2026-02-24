"use client";

/* ─────────────────────────────────────────────────────────
   Goal-Driven Section
   "From 'update this spreadsheet' to 'optimize our budget'"
   Step 02→03 with animated illustration on the right
   ───────────────────────────────────────────────────────── */

import Image from "next/image";
import { AnimateOnScroll, ScrollTextReveal } from "@/components/ui";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function GoalDrivenSection() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/6 Points Animation/6 Points Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <section className="w-full bg-black px-4 md:px-8 py-[50px] md:py-section-y overflow-hidden">
        <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center justify-between gap-6">
        {/* Left – Step indicator */}
        <div className="hidden md:flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            02
          </span>
          <div className="w-[2px] h-[341px] bg-white/16 rounded-full overflow-hidden">
            <div className="w-full h-[221px] bg-white rounded-full" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            03
          </span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] max-w-[510px]">
          <ScrollTextReveal
            text={`From "update this spreadsheet" to "optimize our budget"`}
            className="text-[22px] md:text-[30px] font-bold leading-[32px] md:leading-[44px]"
          />
          <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
            <p className="text-gray-300 text-[14px] md:text-[18px] font-medium leading-[24px] md:leading-[32px]">
              VocAI CRM empowers a global network of over 250,000 businesses in
              180 countries to convert more leads, engage with customers, and grow
              their revenue. VocAI CRM empowers a global network of over 250,000
              businesses in 180 countries to convert more leads, engage with
              customers, and grow their revenue.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Right – Animated illustration */}
        <AnimateOnScroll animation="slide-right" duration={0.9} threshold={0.2}>
          <div className="hidden md:flex w-full h-full justify-end">
            <Image src="/images/figma/features/settings-image.png" width={480} height={400} className="w-auto h-auto max-w-full" alt="" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
