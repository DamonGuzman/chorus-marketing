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
    <Section className="relative py-[50px] md:py-[75px]" id="chorus-way">
      <Container>
        {/* Mobile layout: centered, single column */}
        <div className="flex flex-col lg:hidden items-center text-center gap-[30px]">
          <Badge>The Solution</Badge>

          <h2 className="text-[32px] leading-[42px] sm:text-[50px] sm:leading-[64px] tracking-[-0.5px] font-bold text-white">
            <span className="block">The Chorus Way</span>
            <span className="block">Manifest Your Team Instantly</span>
          </h2>

          <p className="text-[16px] leading-[28px] font-medium text-gray-300">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>

          {/* Mobile Lottie animation */}
          <div className="w-full max-w-[380px] h-[260px] pointer-events-none overflow-hidden mx-auto flex items-center justify-center">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-auto"
              />
            )}
          </div>

          <p className="text-[16px] leading-[28px] font-medium text-gray-300">
            VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
            with customers, and grow their revenue.
          </p>

          <p className="text-[16px] leading-[28px] font-medium text-gray-300">
            VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
          </p>
        </div>

        {/* Desktop layout: side-by-side */}
        <div className="hidden lg:flex lg:flex-row gap-[52px] items-center">
          <div className="flex flex-col gap-[43px] items-start max-w-[464px]">
            <Badge>The Solution</Badge>

            <h2 className="text-[50px] leading-[64px] tracking-[-0.5px] font-bold text-white whitespace-pre-wrap">
              <span className="block">The Chorus Way</span>
              <span className="block">Manifest Your Team Instantly</span>
            </h2>

            <p className="text-[18px] leading-[36px] font-medium text-gray-300 whitespace-pre-wrap">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
              with customers, and grow their revenue.
            </p>

            <p className="text-[18px] leading-[36px] font-medium text-gray-300 whitespace-pre-wrap">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
            </p>
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
      </Container>
    </Section>
  );
}
