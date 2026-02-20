"use client";

import { AnimateOnScroll, Badge, ScrollTextReveal, Section } from "@/components/ui";
import type { LottieRefCurrentProps } from "lottie-react";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const ORBIT_START_FRAME = 241;
const ORBIT_END_FRAME = 1441;

export function ChorusWaySection() {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const mobileLottieRef = useRef<LottieRefCurrentProps>(null);
  const desktopLottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    fetch("/images/6 Points Animation/6 Points Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  const startOrbitLoop = useCallback((lottieRef: React.RefObject<LottieRefCurrentProps | null>) => {
    const anim = lottieRef.current;
    if (!anim?.animationItem) return;
    anim.animationItem.loop = true;
    anim.playSegments([ORBIT_START_FRAME, ORBIT_END_FRAME], true);
  }, []);

  return (
    <Section className="relative py-10 px-0 md:py-20 md:px-8 overflow-hidden" id="chorus-way">
      <div className="px-4 md:px-0">
        {/* Mobile layout: centered, single column */}
        <div className="flex flex-col md:hidden items-center text-center gap-1">
          <Badge>The Solution</Badge>

          <div className="flex flex-col justify-start items-center gap-4">
            <ScrollTextReveal
              text={["The Chorus Way", "Manifest Your Team Instantly"]}
              className="w-full max-w-[384px] text-center text-2xl leading-8 font-bold font-['Urbanist']"
            />

            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="w-full max-w-[320px] text-center text-sm leading-6 font-normal font-['Urbanist'] text-gray-300">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Mobile Lottie animation */}
          <div className="w-full h-[320px] pointer-events-none overflow-hidden mx-auto flex items-center justify-center">
            {animationData && (
              <Lottie
                lottieRef={mobileLottieRef}
                animationData={animationData}
                initialSegment={[0, ORBIT_START_FRAME]}
                loop={false}
                autoplay
                onComplete={() => startOrbitLoop(mobileLottieRef)}
                className="w-[140%] h-auto scale-110"
              />
            )}
          </div>

          <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
            <p className="w-full max-w-[320px] mx-auto text-left text-sm leading-6 font-medium font-['Urbanist'] text-gray-300">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15} threshold={0.3}>
            <p className="w-full max-w-[320px] mx-auto text-left text-sm leading-6 font-medium font-['Urbanist'] text-gray-300">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
            </p>
          </AnimateOnScroll>
        </div>

        {/* Desktop layout: side-by-side */}
        <div className="hidden md:flex w-full max-w-[1440px] mx-auto justify-start items-center gap-3 lg:gap-10 px-4">
          <AnimateOnScroll animation="slide-left" duration={0.9} className="md:w-[42%] md:shrink-0 lg:w-auto lg:shrink inline-flex flex-col justify-start items-start gap-1">
            <Badge className="w-38 h-11 px-3 py-1">The Solution</Badge>

            <ScrollTextReveal
              text={["The Chorus Way", "Manifest Your Team Instantly"]}
              className="w-96 justify-start text-white text-5xl font-bold font-['Urbanist'] leading-[64px]"
            />

            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <div className="w-full lg:max-w-[464px] md:text-sm md:leading-7 lg:text-lg text-gray-300 font-medium font-['Urbanist'] lg:leading-9">
                VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
                with customers, and grow their revenue.<br />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" duration={0.8} delay={0.15} threshold={0.3}>
              <div className="w-full lg:max-w-[464px] md:text-sm md:leading-7 lg:text-lg text-gray-300 font-medium font-['Urbanist'] lg:leading-9">
                VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
              </div>
            </AnimateOnScroll>
          </AnimateOnScroll>

          {/* Desktop Lottie animation */}
          <AnimateOnScroll animation="slide-right" duration={0.9} delay={0.2} className="flex-1 min-w-0 pointer-events-none overflow-visible lg:-mr-[60px] lg:-mt-[40px]">
            {animationData && (
              <Lottie
                lottieRef={desktopLottieRef}
                animationData={animationData}
                initialSegment={[0, ORBIT_START_FRAME]}
                loop={false}
                autoplay
                onComplete={() => startOrbitLoop(desktopLottieRef)}
                className="w-full h-auto md:scale-[0.85] md:origin-left lg:scale-110 lg:origin-center"
              />
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
}
