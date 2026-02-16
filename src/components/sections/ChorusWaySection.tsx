"use client";

import { Badge, Container, Section } from "@/components/ui";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function ChorusWaySection() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/6 Points Animation/6 Points Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <Section className="relative py-10 md:py-20 md:px-8" id="chorus-way">
      <div className="px-4 md:px-0">
        {/* Mobile layout: centered, single column */}
        <div className="flex flex-col lg:hidden items-center text-center gap-5">
          <Badge>The Solution</Badge>

          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full text-center text-2xl leading-8 sm:text-[50px] sm:leading-[64px] font-bold text-white">
              The Chorus Way<br />Manifest Your Team Instantly
            </h2>

            <p className="w-80 text-center text-sm leading-6 font-normal text-gray-300">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>

          {/* Mobile Lottie animation */}
          <div className="w-full h-[260px] pointer-events-none overflow-hidden mx-auto flex items-center justify-center">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-auto"
              />
            )}
          </div>

          <p className="w-80 text-center text-sm leading-6 font-medium text-gray-300">
            VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
          </p>
        </div>

        {/* Desktop layout: side-by-side */}
        <div className="hidden lg:flex w-[1240px] mx-auto justify-start items-center gap-12">
          <div className="inline-flex flex-col justify-start items-start gap-11">
            <Badge>The Solution</Badge>

            <div className="w-96 text-white text-5xl font-bold font-['Urbanist'] leading-[64px]">
              The Chorus Way{" "}<br />Manifest Your Team Instantly
            </div>

            <div className="w-[464px] h-28 text-gray-300 text-lg font-medium font-['Urbanist'] leading-9">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
              with customers, and grow their revenue.<br />
            </div>

            <div className="w-[464px] text-gray-300 text-lg font-medium font-['Urbanist'] leading-9">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
            </div>
          </div>

          {/* Desktop Lottie animation */}
          <div className="w-[700px] h-[478px] shrink-0 pointer-events-none overflow-visible -mr-[100px] -mt-[40px]">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                style={{ width: 1500, height: 967 }}
                className="origin-top-left scale-[0.65] -translate-y-[30px]"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
