"use client";

import { useEffect, useState } from "react";
import {
  SearchPersonIcon,
  MountainIcon,
  CoinsIcon,
  CursorIcon,
} from "@/components/icons";
import {
  AnimateOnScroll,
  Badge,
  Section,
  ScrollTextReveal,
  StaggerChildren,
} from "@/components/ui";

type OldWayIconProps = { className?: string; animated?: boolean };
const oldWayItems: Array<{
  title: string;
  description: string;
  Icon: React.ComponentType<OldWayIconProps>;
}> = [
  {
    title: "Take months to fill a position",
    description:
      "Recruiting, onboarding, and ramp time delays execution and creates planning bottlenecks.",
    Icon: SearchPersonIcon,
  },
  {
    title: "Coordinate between siloed teams",
    description:
      "Hand-offs, meetings, and context switching add overhead that scales with headcount.",
    Icon: MountainIcon,
  },
  {
    title: "Costs $4,000+ per hire",
    description:
      "Even small teams pay comp, benefits, and tooling before a single task ships.",
    Icon: CoinsIcon,
  },
  {
    title: "Training takes weeks",
    description:
      "Knowledge lives in people\u2019s heads\u2014so new work starts slow and repeats old mistakes.",
    Icon: CursorIcon,
  },
];

export function OldWaySection() {
  const [animated, setAnimated] = useState(true);
  useEffect(() => {
    setAnimated(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

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
        <StaggerChildren
          staggerDelay={120}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 lg:gap-7 justify-items-center items-stretch w-full"
        >
          {oldWayItems.map((item, index) => (
            <div
              key={index}
              className="max-md:w-full max-md:p-4 max-md:inline-flex max-md:flex-row max-md:items-center max-md:gap-5 md:w-full md:h-full md:px-4 lg:px-7 md:pt-5 lg:pt-7 md:pb-2.5 md:inline-flex md:flex-col md:justify-start md:items-start md:gap-3 lg:gap-6 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 overflow-hidden"
            >
              <item.Icon
                className="text-gray-200/50 shrink-0 max-md:w-10 max-md:h-10"
                animated={animated}
              />

              <div className="max-md:flex-1 max-md:min-w-0 flex flex-col justify-start items-start gap-10">
                <div className="flex flex-col justify-start items-start max-md:gap-2 md:gap-7">
                  <h3 className="lg:w-56 max-md:text-sm max-md:leading-5 md:text-sm md:leading-5 lg:text-xl lg:leading-7 font-bold font-['Urbanist'] text-gray-100">
                    {item.title}
                  </h3>
                  <p className="lg:w-56 max-md:text-xs max-md:leading-4 md:text-xs md:leading-4 lg:text-sm lg:leading-6 font-medium font-['Urbanist'] text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Pagination Arrows */}
        <div className="hidden md:inline-flex justify-center items-center gap-5">
          <button
            type="button"
            aria-label="Previous"
            className="w-6 h-6 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute left-[5px] top-[7px] rotate-180"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                fill="#FCFCFD"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="w-6 h-6 relative overflow-hidden opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute left-[5px] top-[7px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z"
                fill="#FCFCFD"
              />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
