"use client";

import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function NewHeroSection() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/banner/Hero Banner Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <section className="relative bg-black overflow-hidden" id="about">
      {/* Content */}
      <div className="relative z-10 pt-[70px] md:pt-[90px] px-4 sm:px-6 md:px-[30px] max-w-[1440px] mx-auto pb-12 md:pb-0">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-[20px] md:gap-[25px]">
          <div className="flex flex-col items-center text-center gap-[14px] md:gap-[18px]">
            <h1 className="text-[40px] leading-[44px] md:text-[70px] md:leading-[78px] font-extrabold tracking-[-1.4px] text-white md:whitespace-nowrap">
              Stop Hiring. Start Building.
            </h1>
            <p className="text-[15px] leading-[24px] md:text-[17px] md:leading-[26px] font-normal text-gray-100 max-w-[920px]">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>

          <ButtonLink href={PRIMARY_CTA_HREF} variant="light" size="md">
            Build Your Team Now
          </ButtonLink>
        </div>

        {/* Mobile: Lottie animated hero banner */}
        <div className="md:hidden mt-[20px] pointer-events-none overflow-hidden">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 1577, height: 1157 }}
              className="origin-top-center scale-[0.28] -translate-x-[37%] -mt-[410px] -mb-[410px]"
            />
          )}
        </div>

        {/* Desktop: Lottie animated hero banner */}
        <div className="hidden md:block mt-[-110px] -mb-[150px] pointer-events-none">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 1500, height: 967 }}
              className="origin-top-left scale-[0.95] -translate-y-[60px]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
