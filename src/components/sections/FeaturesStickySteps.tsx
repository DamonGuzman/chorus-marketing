"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/* ─── Step data ─── */

const featureSteps = [
  {
    number: "01",
    title: 'From "schedule this meeting" to "build this pipeline"',
    description:
      "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "pipeline" as const,
  },
  {
    number: "02",
    title: 'From "update this spreadsheet" to "optimize our budget"',
    description:
      "VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue. VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.",
    illustration: "goal" as const,
  },
];

/* ─── Illustrations (inline from original sections) ─── */

function PipelineIllustration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-[480px] h-[460px] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/figma/image 29.svg"
          alt=""
          className="absolute"
          style={{ width: 629, height: 493, left: 30, top: 0 }}
        />
        <div
          className="absolute rounded-[45px]"
          style={{ left: 10, top: 172, width: 175, height: 124, background: "white", filter: "blur(7.84px)", boxShadow: "16px 16px 16px rgba(0,0,0,0.15)" }}
        />
        <div
          className="absolute rounded-[45px]"
          style={{ left: 10, top: 152, width: 172, height: 172, background: "#101010", backdropFilter: "blur(130px)" }}
        />
        <div
          className="absolute rounded-[45px]"
          style={{ left: 30, top: 172, width: 133, height: 133, background: "linear-gradient(166deg, rgba(207,207,207,0.03) 0%, rgba(92,92,92,0.26) 100%)", border: "3.57px solid rgba(255,255,255,0.03)", backdropFilter: "blur(130px)" }}
        />
        <div className="absolute" style={{ left: 60, top: 200 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/figma/calendar-03.svg" alt="" className="w-[74px] h-[74px]" />
        </div>
        <div className="absolute right-0 top-[3rem]">
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
      <div className="flex items-center -space-x-[6px]">
        {avatars.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" className="w-[28px] h-[28px] rounded-full border-[1.5px] border-gray-600 shrink-0 object-cover" />
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
    <div className="w-full h-full flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="images/figma/features/settings-image.png" className="w-auto h-auto max-w-full max-h-[420px] object-contain" alt="" />
    </div>
  );
}

const ILLUSTRATIONS: Record<string, () => ReactNode> = {
  pipeline: () => <PipelineIllustration />,
  goal: () => <GoalIllustration />,
};

/* ─── Step number indicator with animated white bar ─── */

function StepNumberIndicator({ normalised }: { normalised: MotionValue<number> }) {
  const total = featureSteps.length;
  const barProgress = useTransform(normalised, [0, total - 1], [0, 1]);

  return (
    <div className="flex flex-col items-center gap-[20px] shrink-0 h-[340px]">
      <motion.span
        className="text-[26px] font-medium leading-[36px] text-center font-['Urbanist'] w-[36px]"
        style={{
          color: useTransform(normalised, (v) => v < 0.5 ? "rgba(255,255,255,0.9)" : "rgba(209,213,219,1)"),
        }}
      >
        {useTransform(normalised, (v) => featureSteps[Math.min(Math.round(v), total - 1)].number)}
      </motion.span>

      <div className="relative w-[2px] flex-1 bg-white/16 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-white rounded-full"
          style={{ height: useTransform(barProgress, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`) }}
        />
      </div>

      <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center font-['Urbanist']">
        03
      </span>
    </div>
  );
}

/* ─── Animated content layer (text) ─── */

function StepContent({
  title,
  description,
  index,
  normalised,
}: {
  title: string;
  description: string;
  index: number;
  normalised: MotionValue<number>;
}) {
  const total = featureSteps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(normalised, (v) => {
    const dist = v - index;
    if (isFirst && dist <= 0) return 1;
    if (isLast && dist >= 0) return 1;
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) return 1;
    if (absDist < 0.6) return 1 - (absDist - 0.4) / 0.2;
    return 0;
  });

  const y = useTransform(normalised, (v) => {
    const dist = v - index;
    if (isFirst && dist <= 0) return 0;
    if (isLast && dist >= 0) return 0;
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) return 0;
    const sign = dist > 0 ? -1 : 1;
    return sign * Math.min((absDist - 0.4) * 100, 30);
  });

  return (
    <motion.div className="absolute inset-0 flex flex-col gap-[30px]" style={{ opacity, y }}>
      <h2 className="text-white text-[22px] md:text-[30px] font-bold leading-[32px] md:leading-[44px] font-['Urbanist']">
        {title}
      </h2>
      <p className="text-gray-300 text-[14px] md:text-[18px] font-medium leading-[24px] md:leading-[32px] font-['Urbanist']">
        {description}
      </p>
    </motion.div>
  );
}

/* ─── Animated illustration layer ─── */

function StepIllustration({
  illustrationKey,
  index,
  normalised,
}: {
  illustrationKey: string;
  index: number;
  normalised: MotionValue<number>;
}) {
  const total = featureSteps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(normalised, (v) => {
    const dist = v - index;
    if (isFirst && dist <= 0) return 1;
    if (isLast && dist >= 0) return 1;
    const absDist = Math.abs(dist);
    if (absDist <= 0.4) return 1;
    if (absDist < 0.6) return 1 - (absDist - 0.4) / 0.2;
    return 0;
  });

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      {ILLUSTRATIONS[illustrationKey]?.()}
    </motion.div>
  );
}

/* ─── Main exported component ─── */

export function FeaturesStickySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const normalised = useTransform(scrollYProgress, (v) => {
    const clamped = Math.max(0, Math.min(1, v));
    return clamped * (featureSteps.length - 1);
  });

  return (
    <div ref={containerRef} className="hidden lg:block relative w-full" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto flex items-center gap-8 xl:gap-12 px-4 md:px-8">
          {/* Left: Step number indicator */}
          <StepNumberIndicator normalised={normalised} />

          {/* Center: Text content — stacked, animated */}
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

          {/* Right: Illustration — stacked, animated */}
          <div className="relative flex-1 min-w-0" style={{ minHeight: "420px" }}>
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
