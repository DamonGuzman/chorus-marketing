"use client";

import {
  AnimateOnScroll,
  Badge,
  Section,
  ScrollTextReveal,
} from "@/components/ui";

export function OldWaySection() {
  return (
    <Section
      className="self-stretch px-4 py-3 md:px-8 md:py-20 flex flex-col justify-start items-center gap-4 md:gap-10"
      id="old-way"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="flex flex-col justify-start items-center gap-1">
          <Badge className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
            The Problem
          </Badge>
          <div className="text-center justify-center text-White text-base font-semibold font-['Urbanist'] leading-6">
            <ScrollTextReveal
              text="The Old Way : Managing Individual Players"
              className="text-center max-md:text-2xl max-md:leading-8 md:text-3xl md:leading-[42px] lg:text-5xl lg:leading-[78px] font-bold font-['Urbanist']"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="text-center w-full max-w-[320px] md:max-w-none text-sm leading-6 md:text-base md:leading-7 lg:text-xl lg:leading-9 font-normal font-['Urbanist'] text-gray-300 mx-auto">
                The best way to reach humans instead of spam folders. Deliver
                transactional and marketing emails at scale.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 lg:gap-2 justify-items-stretch items-stretch">
          <div className="flex flex-col items-start gap-2 md:gap-6">
            <img
              src="/images/figma/Group3.svg"
              alt="Hiring workflow card"
              className="w-full h-auto"
            />
            <div className="flex flex-col items-start gap-2 md:gap-4 pl-1 md:pl-5">
              <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                Take months to fill a position
              </h3>
              <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-1 md:mt-0 -ml-3 md:ml-0 mb-5 md:mb-0">
                <span className="md:hidden">
                  <span className="block whitespace-nowrap">"Stripe for payments. Vercel for deployments,</span>
                  <span className="block whitespace-nowrap">Dub.co for links.</span>
                </span>
                <span className="hidden md:inline">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-6">
            <img
              src="/images/figma/Group2.svg"
              alt="Process overview card"
              className="w-full h-auto"
            />
            <div className="flex flex-col items-start gap-2 md:gap-4 pl-1 md:pl-5">
              <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                Coordinate between siloed teams
              </h3>
              <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-1 md:mt-0 -ml-3 md:ml-0 mb-5 md:mb-0">
                <span className="md:hidden">
                  <span className="block whitespace-nowrap">"Stripe for payments. Vercel for deployments,</span>
                  <span className="block whitespace-nowrap">Dub.co for links.</span>
                </span>
                <span className="hidden md:inline">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 md:gap-6">
            <img
              src="/images/figma/Group%201.svg"
              alt="Cost breakdown card"
              className="w-full h-auto"
            />
            <div className="flex flex-col items-start gap-2 md:gap-4 pl-1 md:pl-5">
              <h3 className="text-white text-lg leading-7 md:text-xl md:leading-7 lg:text-2xl lg:leading-8 font-bold font-['Urbanist']">
                Costs $4,000+ per hire
              </h3>
              <p className="text-gray-300 text-sm leading-5 md:text-sm md:leading-5 lg:text-base lg:leading-6 font-medium font-['Urbanist'] -mt-1 md:mt-0 -ml-3 md:ml-0 mb-5 md:mb-0">
                <span className="md:hidden">
                  <span className="block whitespace-nowrap">"Stripe for payments. Vercel for deployments,</span>
                  <span className="block whitespace-nowrap">Dub.co for links.</span>
                </span>
                <span className="hidden md:inline">
                  "Stripe for payments. Vercel for deployments,
                  <span className="block">Dub.co for links.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
