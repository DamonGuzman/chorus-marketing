"use client";

import Image from "next/image";
import { useRef, useCallback, type ReactNode } from "react";
import { useScrollCallback } from "@/components/ui/SmoothScroll";

const featureSteps = [
  {
    number: "02",
    title: 'From "update this spreadsheet" to "optimize our budget"',
    description:
      "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "goal" as const,
  },
  {
    number: "01",
    title: 'From "schedule this meeting" to "build this pipeline"',
    description:
      "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "pipeline" as const,
  },
];

function PipelineLineOverlay() {
  const arms = [
    {
      id: "arm0",
      d: "M 197 60 Q 207 52, 218 47 L 396 57 Q 410 55, 420 45 L 428 33",
      dur: "3.5s",
      begin: "0s",
    },
    {
      id: "arm1",
      d: "M 197 126 Q 210 110, 240 79 Q 250 72, 261 79 Q 280 90, 306 96 L 380 97 L 394 98",
      dur: "3s",
      begin: "0.5s",
    },
    {
      id: "arm2",
      d: "M 197 160 Q 210 145, 243 77 Q 253 72, 265 80 Q 285 92, 309 96 L 382 97 L 394 98",
      dur: "3.2s",
      begin: "1s",
    },
    {
      id: "arm3",
      d: "M 197 245 Q 205 267, 213 263 Q 222 245, 236 230 L 409 248 Q 418 240, 426 224",
      dur: "3.5s",
      begin: "0.3s",
    },
    {
      id: "arm4",
      d: "M 197 345 Q 225 335, 251 333 Q 270 332, 288 345 Q 300 350, 321 351 L 391 354 L 395 352",
      dur: "3s",
      begin: "0.7s",
    },
    {
      id: "arm5",
      d: "M 197 374 Q 207 385, 219 430 L 363 433 Q 375 433, 379 433 Q 400 445, 419 453 L 426 451",
      dur: "3.5s",
      begin: "1.2s",
    },
    {
      id: "arm6",
      d: "M 197 405 Q 205 416, 214 426 L 359 431 Q 370 434, 375 434 Q 400 446, 415 453 L 426 451",
      dur: "3.2s",
      begin: "0.2s",
    },
    {
      id: "arm7",
      d: "M 197 466 Q 207 473, 217 479 Q 227 488, 237 486 L 288 474 L 298 474 Q 370 460, 411 452 L 426 451",
      dur: "3.8s",
      begin: "0.8s",
    },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 650 510"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
    >
      <defs>
        <radialGradient id="dotGlow">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="40%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {arms.map((arm) => (
        <path key={arm.id} id={arm.id} d={arm.d} stroke="none" fill="none" />
      ))}

      {arms.map((arm) => (
        <circle key={`dot-${arm.id}`} r="6" fill="url(#dotGlow)" filter="url(#softGlow)" opacity="0.9">
          <animateMotion dur={arm.dur} repeatCount="indefinite" begin={arm.begin}>
            <mpath href={`#${arm.id}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  );
}

function PipelineIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center pt-24">
      <div className="relative inline-block max-w-[560px] w-full scale-[1.05] origin-center">
        <img
          src="/images/figma/Group 1707484086.svg"
          alt="Pipeline illustration"
          loading="lazy"
          className="block w-full h-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <PipelineLineOverlay />
        </div>
      </div>
    </div>
  );
}

function GoalIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center pt-20">
      <Image src="/images/figma/features/settings-image.png" width={480} height={480} className="w-full h-full object-contain scale-[0.9] origin-center" alt="" />
    </div>
  );
}

const ILLUSTRATIONS: Record<string, () => ReactNode> = {
  pipeline: () => <PipelineIllustration />,
  goal: () => <GoalIllustration />,
};

export function FeaturesStickySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const illustrationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevNormRef = useRef(-1);

  const total = featureSteps.length;

  const onScrollTick = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollableHeight = el.offsetHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;
    const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
    const normalised = rawProgress * (total - 1);

    if (Math.abs(normalised - prevNormRef.current) < 0.002) return;
    prevNormRef.current = normalised;

    const barProgress = normalised / (total - 1);
    const currentStep = featureSteps[Math.min(Math.round(normalised), total - 1)];

    if (numberRef.current) {
      numberRef.current.textContent = currentStep.number;
      numberRef.current.style.color = normalised < 0.5 ? "rgba(255,255,255,0.9)" : "rgba(209,213,219,1)";
    }

    if (barRef.current) {
      barRef.current.style.height = `${Math.max(0, Math.min(1, barProgress)) * 100}%`;
    }

    for (let i = 0; i < total; i++) {
      const contentEl = contentRefs.current[i];
      const illustEl = illustrationRefs.current[i];
      const isFirst = i === 0;
      const isLast = i === total - 1;
      const dist = normalised - i;

      let opacity: number;
      let yOffset: number;

      if (isFirst && dist <= 0) { opacity = 1; yOffset = 0; }
      else if (isLast && dist >= 0) { opacity = 1; yOffset = 0; }
      else {
        const absDist = Math.abs(dist);
        if (absDist <= 0.4) { opacity = 1; yOffset = 0; }
        else if (absDist < 0.6) { opacity = 1 - (absDist - 0.4) / 0.2; yOffset = (dist > 0 ? -1 : 1) * Math.min((absDist - 0.4) * 100, 30); }
        else { opacity = 0; yOffset = (dist > 0 ? -1 : 1) * 30; }
      }

      if (contentEl) {
        contentEl.style.opacity = String(opacity);
        contentEl.style.transform = `translateY(${yOffset}px)`;
      }

      let illOpacity: number;
      if (isFirst && dist <= 0) illOpacity = 1;
      else if (isLast && dist >= 0) illOpacity = 1;
      else {
        const absDist = Math.abs(dist);
        if (absDist <= 0.4) illOpacity = 1;
        else if (absDist < 0.6) illOpacity = 1 - (absDist - 0.4) / 0.2;
        else illOpacity = 0;
      }

      if (illustEl) {
        illustEl.style.opacity = String(illOpacity);
      }
    }
  }, [total]);

  useScrollCallback(onScrollTick);

  return (
    <div ref={containerRef} className="hidden lg:block relative w-full" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto flex items-center gap-8 xl:gap-12 px-4 md:px-8">
          {/* Step Number Indicator */}
          <div className="flex flex-col items-center gap-[20px] shrink-0 h-[340px]">
            <span
              ref={numberRef}
              className="text-[26px] font-medium leading-[36px] text-center font-['Urbanist'] w-[36px]"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {featureSteps[0].number}
            </span>

            <div className="relative w-[2px] flex-1 bg-white/16 rounded-full overflow-hidden">
              <div
                ref={barRef}
                className="absolute top-0 left-0 w-full bg-white rounded-full"
                style={{ height: "0%", transition: "height 0.3s ease-out" }}
              />
            </div>

            <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center font-['Urbanist']">
              03
            </span>
          </div>

          {/* Step Content */}
          <div className="relative flex-1 max-w-[470px]" style={{ minHeight: "240px" }}>
            {featureSteps.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => { contentRefs.current[idx] = el; }}
                className="absolute inset-0 flex flex-col gap-[30px]"
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  transform: "translateY(0px)",
                  willChange: "opacity, transform",
                }}
              >
                <h2 className="text-white text-[22px] md:text-[30px] font-bold leading-[32px] md:leading-[44px] font-['Urbanist']">
                  {step.title}
                </h2>
                <p className="text-gray-300 text-[14px] md:text-[18px] font-medium leading-[24px] md:leading-[32px] font-['Urbanist']">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Step Illustrations */}
          <div className="relative flex-1 min-w-0" style={{ minHeight: "600px" }}>
            {featureSteps.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => { illustrationRefs.current[idx] = el; }}
                className="absolute inset-0"
                style={{
                  opacity: idx === 0 ? 1 : 0,
                  willChange: "opacity",
                }}
              >
                {ILLUSTRATIONS[step.illustration]?.()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
