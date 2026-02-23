"use client";

import Image from "next/image";
import { useRef, useState, useEffect, type ReactNode } from "react";

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

function PipelineIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center pt-24">
      <div className="relative w-[420px] h-[400px] shrink-0 scale-[1.2] origin-center">
        <img
          src="/images/figma/image 29.svg"
          alt=""
          loading="lazy"
          className="absolute"
          style={{ width: 520, height: 408, left: 5, top: -10 }}
        />
        <div
          className="absolute rounded-[35px]"
          style={{ left: 8, top: 148, width: 140, height: 100, background: "white", opacity: 0.5, boxShadow: "12px 12px 12px rgba(0,0,0,0.15)" }}
        />
        <div
          className="absolute rounded-[35px]"
          style={{ left: 8, top: 132, width: 138, height: 138, background: "#101010" }}
        />
        <div
          className="absolute rounded-[35px]"
          style={{ left: 24, top: 148, width: 108, height: 108, background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.26) 100%)", border: "2.5px solid rgba(255,255,255,0.03)" }}
        />
        <div className="absolute" style={{ left: 46, top: 168 }}>
          <img src="/images/figma/calendar-03.svg" alt="" loading="lazy" className="w-[60px] h-[60px]" />
        </div>
        <div className="absolute -right-18 top-[2rem]">
          <TaskCard />
        </div>
      </div>
    </div>
  );
}

function TaskCard() {
  const avatars = [
    "/images/figma/4229-62012/imgEllipse54.png",
    "/images/figma/4229-62012/imgEllipse55.png",
    "/images/figma/4229-62012/imgEllipse56.png",
  ];
  return (
    <div className="w-[200px] p-[24px] rounded-[30px] flex flex-col gap-[14px] h-[20rem] bg-[#111111] shadow-[inset_0px_0px_6.4px_rgba(255,255,255,0.27)]">
      <p className="text-gray-100 text-sm font-bold">Track Monthly Revenue</p>
      <div className="flex items-center gap-[6px]">
        <span className="text-gray-300 text-[13px] font-semibold">Tasks : 7</span>
      </div>
      <div className="flex items-center -space-x-[8px]">
        {avatars.map((src, i) => (
          <Image key={i} src={src} alt="" width={28} height={28} className="w-[28px] h-[28px] rounded-full border-[1.5px] border-gray-600 shrink-0 object-cover" />
        ))}
        <span className="text-gray-300 text-[15px] font-medium ml-2">+3</span>
      </div>
      <SkeletonBubble />
      <SkeletonBubble />
    </div>
  );
}

function SkeletonBubble() {
  return (
    <div
      className="p-[12px] rounded-[20px] flex flex-col gap-[10px]"
      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.11) 100%)", outline: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="w-[110px] p-[9px] bg-white/4 rounded-[12px] flex flex-col gap-[5px]">
        <div className="w-[90px] h-[8px] bg-white/10 rounded-[7px]" />
        <div className="w-full h-[7px] bg-white/10 rounded-[7px]" />
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

function StepNumberIndicator({ normalised }: { normalised: number }) {
  const total = featureSteps.length;
  const barProgress = normalised / (total - 1);
  const currentStep = featureSteps[Math.min(Math.round(normalised), total - 1)];

  return (
    <div className="flex flex-col items-center gap-[20px] shrink-0 h-[340px]">
      <span
        className="text-[26px] font-medium leading-[36px] text-center font-['Urbanist'] w-[36px] transition-colors duration-300"
        style={{ color: normalised < 0.5 ? "rgba(255,255,255,0.9)" : "rgba(209,213,219,1)" }}
      >
        {currentStep.number}
      </span>

      <div className="relative w-[2px] flex-1 bg-white/16 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-white rounded-full transition-[height] duration-300 ease-out"
          style={{ height: `${Math.max(0, Math.min(1, barProgress)) * 100}%` }}
        />
      </div>

      <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center font-['Urbanist']">
        03
      </span>
    </div>
  );
}

function StepContent({
  title,
  description,
  index,
  normalised,
}: {
  title: string;
  description: string;
  index: number;
  normalised: number;
}) {
  const total = featureSteps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const dist = normalised - index;
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

  return (
    <div
      className="absolute inset-0 flex flex-col gap-[30px] transition-[opacity,transform] duration-300 ease-out"
      style={{ opacity, transform: `translateY(${yOffset}px)` }}
    >
      <h2 className="text-white text-[22px] md:text-[30px] font-bold leading-[32px] md:leading-[44px] font-['Urbanist']">
        {title}
      </h2>
      <p className="text-gray-300 text-[14px] md:text-[18px] font-medium leading-[24px] md:leading-[32px] font-['Urbanist']">
        {description}
      </p>
    </div>
  );
}

function StepIllustration({
  illustrationKey,
  index,
  normalised,
}: {
  illustrationKey: string;
  index: number;
  normalised: number;
}) {
  const total = featureSteps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const dist = normalised - index;
  let opacity: number;

  if (isFirst && dist <= 0) opacity = 1;
  else if (isLast && dist >= 0) opacity = 1;
  else {
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) opacity = 1;
    else if (absDist < 0.6) opacity = 1 - (absDist - 0.4) / 0.2;
    else opacity = 0;
  }

  return (
    <div
      className="absolute inset-0 transition-opacity duration-300 ease-out"
      style={{ opacity }}
    >
      {ILLUSTRATIONS[illustrationKey]?.()}
    </div>
  );
}

export function FeaturesStickySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [normalised, setNormalised] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const scrollableHeight = el.offsetHeight - window.innerHeight;
        if (scrollableHeight <= 0) return;
        const rawProgress = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
        setNormalised(rawProgress * (featureSteps.length - 1));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={containerRef} className="hidden lg:block relative w-full" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto flex items-center gap-8 xl:gap-12 px-4 md:px-8">
          <StepNumberIndicator normalised={normalised} />

          <div className="relative flex-1 max-w-[470px]" style={{ minHeight: "240px" }}>
            {featureSteps.map((step, idx) => (
              <StepContent
                key={step.number}
                title={step.title}
                description={step.description}
                index={idx}
                normalised={normalised}
              />
            ))}
          </div>

          <div className="relative flex-1 min-w-0" style={{ minHeight: "600px" }}>
            {featureSteps.map((step, idx) => (
              <StepIllustration
                key={step.number}
                illustrationKey={step.illustration}
                index={idx}
                normalised={normalised}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
