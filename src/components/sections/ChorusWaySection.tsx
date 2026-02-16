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
    <Section className="relative py-10 md:py-20 md:px-8 overflow-hidden" id="chorus-way">
      <div className="px-4 md:px-0">
        {/* Mobile layout: centered, single column */}
        <div className="flex flex-col md:hidden items-center text-center gap-5">
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
        <div className="hidden md:flex w-full max-w-[1240px] mx-auto justify-start items-center gap-6 lg:gap-12">
          <div className="md:w-[42%] md:shrink-0 lg:w-auto lg:shrink inline-flex flex-col justify-start items-start gap-6 lg:gap-11">
            <Badge>The Solution</Badge>

            <div className="w-full lg:w-96 text-white md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[64px]">
              The Chorus Way{" "}<br />Manifest Your Team Instantly
            </div>

            <div className="w-full lg:max-w-[464px] md:text-sm md:leading-7 lg:text-lg text-gray-300 font-medium font-['Urbanist'] lg:leading-9">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
              with customers, and grow their revenue.<br />
            </div>

            <div className="w-full lg:max-w-[464px] md:text-sm md:leading-7 lg:text-lg text-gray-300 font-medium font-['Urbanist'] lg:leading-9">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
            </div>
          </div>

          {/* Desktop Lottie animation */}
          <div className="flex-1 min-w-0 pointer-events-none overflow-visible lg:-mr-[60px] lg:-mt-[40px]">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-auto md:scale-[0.85] md:origin-left lg:scale-100 lg:origin-center"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
