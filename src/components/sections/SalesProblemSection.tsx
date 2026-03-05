/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { ScrollTextReveal, Badge, AnimateOnScroll } from "@/components/ui";

function useCountUp(end: number, duration = 1000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(2)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return { ref, value };
}

const PURPLE_LINE_PATH =
  "M132.842 449.963L184.539 435.944C189.621 434.565 195.67 429.868 198.037 425.461L209.12 404.828C211.488 400.42 217.687 397.231 222.956 397.709L262.851 401.332C268.12 401.81 274.877 398.932 277.932 394.907L298.035 368.422C301.089 364.398 307.826 361.682 313.069 362.361L349.22 367.043C354.463 367.722 359.26 364.304 359.926 359.416L365.903 315.497C366.569 310.609 371.065 305.076 375.937 303.149L395.452 295.431C400.324 293.505 406.787 295.189 409.875 299.191L447.6 348.077C450.688 352.079 454.575 351.539 456.273 346.872L470.261 308.431C471.959 303.764 477.415 301.24 482.437 302.799L521.787 315.008C526.809 316.566 532.84 314.267 535.246 309.878L550.506 282.037C552.912 277.648 559 272.993 564.092 271.648L622.485 256.229";

export function SalesProblemSection() {
  const counter = useCountUp(5.24, 2000);

  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-black">
      {/* Section header */}
      <div className="max-w-[1266px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="hidden md:block">
            <Badge>The Problem</Badge>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <div className="flex flex-col gap-6 md:gap-8">
              <ScrollTextReveal
                text="The Problem - What's Broken Today"
                className="text-white text-2xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px] text-center md:text-left"
              />
              <p className="text-gray-300 text-sm md:text-2xl font-medium font-['Urbanist'] leading-5 md:leading-9 text-center md:text-left">
                <span className="md:hidden">The Difference That Changes Everything</span>
                <span className="hidden md:inline">Automate prospecting, enrichment, outreach, follow-ups, CRM updates</span>
              </p>
            </div>
            <a
              href={PRIMARY_CTA_HREF}
              className="shrink-0 h-12 px-8 py-3 bg-gradient-to-br from-violet-500 via-fuchsia-300 to-indigo-700 rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] hidden md:flex items-center gap-2 overflow-hidden hover:brightness-110 transition-all"
            >
              <span className="text-white text-sm font-bold font-['Urbanist']">Build Your Team Now</span>
            </a>
          </div>
        </div>

        {/* Problem cards */}
        <div className="flex flex-col gap-6 mt-4">
          {/* Card 1: CRM always outdated - full width */}
          <div className="bg-stone-950 rounded-[20px] overflow-hidden flex flex-col lg:flex-row transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1">
            <div className="flex-1 flex flex-col justify-center items-center py-6 lg:py-0 px-6 lg:pl-[108px] lg:pr-0">
              <div className="flex flex-col items-center gap-4 md:gap-7">
                <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                  <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                  <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                  <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                  <span className="relative z-10 text-center text-white text-base font-semibold font-['Urbanist'] leading-6">
                    CRM always outdated
                  </span>
                </div>
                <div className="px-3.5 flex flex-col items-center">
                  <ScrollTextReveal
                    text="Important customer insights never make it into the system."
                    className="w-full max-w-[509px] text-center text-zinc-100 text-lg md:text-5xl font-bold font-['Urbanist'] leading-snug md:leading-[48px]"
                  />
                </div>
                <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
                  <div className="w-full max-w-[493px] px-5 flex flex-col items-center">
                    <p className="text-center text-zinc-400 text-xs md:text-lg font-light font-['Urbanist'] leading-5 md:leading-7">
                      Blocks are carefully crafted to help you distill powerful messages from your information and data - no matter how complex.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden -mt-8 md:mt-0 min-h-[300px] md:min-h-0">
              <img
                src="/images/figma/Container_prob.svg"
                alt=""
                className="absolute h-auto"
                style={{ top: "14px", left: "3.88%", width: "92%" }}
                aria-hidden="true"
              />
              <img
                src="/images/figma/Container_prob.svg"
                alt="Analytics dashboard showing growth metrics"
                className="relative h-auto"
                style={{
                  marginTop: "14px",
                  marginLeft: "4.09%",
                  width: "97%",
                }}
              />
              <div
                ref={counter.ref}
                className="absolute pointer-events-none flex items-end bg-[#151515] z-[1]"
                style={{
                  top: "calc(14px + 25.4% * 0.97)",
                  left: "calc(4.09% + 16.3% * 0.97)",
                  width: "calc(25.3% * 0.97)",
                  height: "calc(11.6% * 0.97)",
                }}
              >
                <span
                  className="font-bold text-[#C4C4C4] leading-none"
                  style={{ fontSize: "clamp(24px, 4.5vw, 52px)" }}
                >
                  {counter.value.toFixed(2)}k
                </span>
              </div>
              <svg
                viewBox="0 0 608 536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute h-auto pointer-events-none"
                style={{ top: "14px", left: "4.09%", width: "97%" }}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="glow-grad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#A594FD" stopOpacity="0" />
                    <stop offset="40%" stopColor="#A594FD" stopOpacity="1" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="60%" stopColor="#A594FD" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A594FD" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow-blur">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={PURPLE_LINE_PATH}
                  stroke="url(#glow-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#glow-blur)"
                  strokeDasharray="120 1480"
                  style={{
                    animation: "line-glow-travel 4s ease-in-out infinite",
                  }}
                />
              </svg>
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Card 2: SDR Burnout - fills remaining width */}
            <div className="flex-1 min-w-0 bg-[#101010] rounded-[20px] overflow-hidden flex flex-col transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1">
              <div className="pt-4 flex flex-col items-center gap-2 md:gap-4">
                <div className="w-full h-[280px] md:h-[349px] relative overflow-hidden order-2 md:order-1">
                  <img
                    src="/images/figma/sale.svg"
                    alt="Dashboard showing app users analytics and metrics"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <div className="w-full px-6 pt-6 pb-10 md:px-14 md:pt-10 md:pb-16 flex flex-col gap-4 md:gap-4 items-center md:items-start order-1 md:order-2">
                  <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                    <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                    <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                    <span className="relative z-10 text-white text-base font-semibold font-['Urbanist'] leading-6">
                      SDR Burnout
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-[29px]">
                    <ScrollTextReveal
                      text="Repetitive outreach and endless follow-ups drain motivation."
                      className="max-w-[403px] text-zinc-100 text-xl md:text-4xl font-bold font-['Urbanist'] leading-snug md:leading-10 text-center md:text-left"
                    />
                    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
                      <p className="max-w-[372px] text-zinc-400 text-sm md:text-lg font-light font-['Satoshi'] leading-5 md:leading-7 text-center md:text-left">
                        Blocks are responsive and designed to be customised easily. No matter how you edit, they will always look stunning.
                      </p>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Manual lead research - fixed 589px */}
            <div className="lg:w-[589px] lg:shrink-0 bg-[#101010] rounded-[20px] overflow-hidden flex flex-col transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1">
              <div className="pt-4 flex flex-col items-center gap-2 md:gap-4">
                {/*
                  No clipPath — uses height + overflow:hidden for each strip.
                  clipPath breaks overflow-hidden for composited children on mobile Safari.
                  Row heights: R1=40%, R2=33%, R3=27% (must sum to 100%)
                  Image is scaled up inside each strip so only the correct band is visible.
                */}
                <div
                  className="w-full h-[280px] md:h-[349px] relative order-2 md:order-1"
                  style={{ overflow: "hidden", transform: "translateZ(0)" }}
                >
                  {/* Row 1 — top 40% of image, slides left */}
                  <div
                    className="absolute left-0 right-0 overflow-hidden"
                    style={{ top: "0%", height: "40%" }}
                  >
                    <div
                      className="absolute w-full"
                      style={{ top: 0, height: "250%", animation: "icon-row-left 5s linear infinite" }}
                    >
                      <img
                        src="/images/figma/sales_lead_search.svg"
                        alt="Tool icons grid showing Salesforce, HubSpot, Mailchimp, and more"
                        className="w-full h-full object-contain object-top"
                      />
                    </div>
                  </div>

                  {/* Row 2 — middle 33% of image (40%→73%), slides right */}
                  <div
                    className="absolute left-0 right-0 overflow-hidden"
                    style={{ top: "40%", height: "33%" }}
                  >
                    <div
                      className="absolute w-full"
                      style={{ top: "-121.2%", height: "303.1%", animation: "icon-row-right 5s linear infinite" }}
                    >
                      <img
                        src="/images/figma/sales_lead_search.svg"
                        alt=""
                        className="w-full h-full object-contain object-top"
                      />
                    </div>
                  </div>

                  {/* Row 3 — bottom 27% of image (73%→100%), slides left */}
                  <div
                    className="absolute left-0 right-0 overflow-hidden"
                    style={{ top: "73%", height: "27%" }}
                  >
                    <div
                      className="absolute w-full"
                      style={{ top: "-270.4%", height: "370.4%", animation: "icon-row-left 5s linear infinite" }}
                    >
                      <img
                        src="/images/figma/sales_lead_search.svg"
                        alt=""
                        className="w-full h-full object-contain object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 pt-6 pb-6 md:px-14 md:pt-10 md:pb-16 flex flex-col gap-4 items-center md:items-start order-1 md:order-2">
                  <div className="relative h-9 rounded-[100px] overflow-hidden inline-flex justify-center items-center px-5">
                    <span aria-hidden="true" className="absolute inset-0 rounded-[100px] bg-gradient-to-b from-white/30 to-white/[0.04]" />
                    <span aria-hidden="true" className="cta-orbit-ring cta-orbit-ring--pill" />
                    <span aria-hidden="true" className="absolute inset-[1px] rounded-[100px] bg-[#131313]" />
                    <span className="relative z-10 text-white text-base font-semibold font-['Urbanist'] leading-6">
                      Manual lead research
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 md:gap-[46px]">
                    <ScrollTextReveal
                      text="Prospecting requires jumping between LinkedIn, spreadsheets, and CRMs."
                      className="text-zinc-100 text-xl md:text-4xl font-bold font-['Urbanist'] leading-snug md:leading-10 text-center md:text-left"
                    />
                    <AnimateOnScroll animation="fade-up" duration={0.6} delay={0.2}>
                      <p className="max-w-[400px] text-zinc-400 text-sm md:text-lg font-light font-['Satoshi'] leading-5 md:leading-7 tracking-[-0.18px] text-center md:text-left">
                        Simply paste a link to any of the hundreds of tools you use and Chronicle will seamlessly package your outputs.
                      </p>
                    </AnimateOnScroll>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
