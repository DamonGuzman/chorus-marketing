"use client";

/* ─────────────────────────────────────────────────────────
   Goal-Driven Section
   "From 'update this spreadsheet' to 'optimize our budget'"
   Step 02→03 with animated illustration on the right
   ───────────────────────────────────────────────────────── */

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
    <section className="w-full bg-black px-4 md:px-[100px] py-[50px] md:py-[75px] overflow-hidden">
      <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto items-center justify-between gap-10">
        {/* Left – Step indicator */}
        <div className="hidden md:flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">02</span>
          <div className="w-[2px] h-[341px] bg-white/16 rounded-full overflow-hidden">
            <div className="w-full h-[221px] bg-white rounded-full" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">03</span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] max-w-[510px]">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold leading-[34px] md:leading-[44px]">
            From &quot;update this spreadsheet&quot; to &quot;optimize our budget&quot;
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[18px] font-medium leading-[26px] md:leading-[32px]">
            VocAI CRM empowers a global network of over 250,000 businesses in
            180 countries to convert more leads, engage with customers, and grow
            their revenue. VocAI CRM empowers a global network of over 250,000
            businesses in 180 countries to convert more leads, engage with
            customers, and grow their revenue.
          </p>
        </div>

        {/* Right – Animated illustration */}
        <div className="w-full max-w-[700px] h-[478px] shrink-0 pointer-events-none">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 1500, height: 967 }}
              className="origin-top-left scale-[0.65]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
