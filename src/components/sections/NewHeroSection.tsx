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
      {/* Stars SVG behind the animation cards */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/figma/stars.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none"
        style={{ right: '250px', top: '100px', width: 'auto', height: '1000px' }}
      />

      {/* Content */}
      <div className="relative z-10 pt-[60px] md:pt-[110px] px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto pb-12 md:pb-0">
        {/* Hero Header - max-w-[1183px] centered like Figma */}
        <div className="w-full max-w-[1183px] mx-auto flex flex-col justify-start items-center">
          <div className="self-stretch flex flex-col justify-start items-center gap-[20px] md:gap-7">
            <div className="self-stretch flex flex-col justify-start items-center gap-[14px] md:gap-5">
              <h1 className="self-stretch text-center text-[36px] leading-[40px] md:text-7xl md:leading-[78px] font-extrabold font-['Urbanist'] text-white">
                Stop Hiring. Start Building.
              </h1>
              <p className="w-72 md:w-auto text-center text-base leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-100">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
              </p>
            </div>

            <ButtonLink href={PRIMARY_CTA_HREF} variant="light" size="md">
              Build Your Team Now
            </ButtonLink>
          </div>
        </div>

        {/* Mobile: Lottie animated hero banner */}
        <div className="md:hidden mt-[20px] pointer-events-none overflow-hidden">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 1577, height: 1157 }}
              className="origin-top-center scale-[0.38] -translate-x-[37%] -mt-[350px] -mb-[380px]"
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
