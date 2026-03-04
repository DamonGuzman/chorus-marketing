"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll, Badge, ScrollTextReveal } from "@/components/ui";

function CheckMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M3 13L7 17L13 9" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13L13 17L21 7" stroke="#7D7C83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OrbitIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center shrink-0"
      style={{
        boxShadow: "0px 3.98px 24.85px 0px rgba(0,0,0,0.25), inset 0px 0px 5.16px 0px rgba(255,255,255,0.55)",
      }}
    >
      {children}
    </div>
  );
}

/* ── Animated SVG timeline for card 1 ── */

const TIMELINE_ROWS = [
  { clipTop: 0, clipBottom: 29.5 },
  { clipTop: 28.5, clipBottom: 53 },
  { clipTop: 52, clipBottom: 77 },
  { clipTop: 76, clipBottom: 100 },
];
const TL_STAGGER = 0.55;
const TL_LOOP_S = 4;

function AnimatedTimelineSVG() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCycle((c) => c + 1), TL_LOOP_S * 1000);
    return () => clearTimeout(timer);
  }, [cycle]);

  return (
    <div className="relative w-full max-w-[473px]">
      {/* invisible layout image to set the container size */}
      <img
        src="/images/figma/difference1.svg"
        alt="Adaptive Intelligence preview"
        loading="lazy"
        className="w-full h-auto invisible"
      />

      {TIMELINE_ROWS.map((row, idx) => {
        const fromRight = idx % 2 === 0;
        return (
          <motion.div
            key={`${cycle}-${idx}`}
            className="absolute inset-0"
            style={{
              clipPath: `inset(${row.clipTop}% 0 ${100 - row.clipBottom}% 0)`,
            }}
            initial={{ opacity: 0, x: fromRight ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * TL_STAGGER,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <img
              src="/images/figma/difference1.svg"
              alt=""
              className="w-full h-auto"
              aria-hidden
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function OrbitalAnimation() {
  return (
    <div className="relative w-[636px] h-[480px]">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 636 480"
        fill="none"
        style={{ zIndex: 2, overflow: "visible" }}
      >
        <defs>
          <filter id="dotGlow1" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="dotGlow2" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="318" cy="240" rx="290" ry="100" stroke="white" strokeOpacity="0.50" strokeWidth="1.4" fill="none" transform="rotate(20.6, 318, 240)" />
        <ellipse cx="318" cy="240" rx="270" ry="115" stroke="white" strokeOpacity="0.40" strokeWidth="1.2" fill="none" transform="rotate(-26, 318, 240)" />
        <ellipse cx="318" cy="240" rx="250" ry="130" stroke="white" strokeOpacity="0.45" strokeWidth="1.0" fill="none" transform="rotate(5, 318, 240)" />

        <path id="fcOrbit1" d="M 28,240 A 290 100 0 1 1 608,240 A 290 100 0 1 1 28,240 Z" fill="none" stroke="none" transform="rotate(20.6, 318, 240)" />
        <path id="fcOrbit2" d="M 48,240 A 270 115 0 1 1 588,240 A 270 115 0 1 1 48,240 Z" fill="none" stroke="none" transform="rotate(-26, 318, 240)" />

        <circle r="5" fill="white" filter="url(#dotGlow1)">
          <animateMotion dur="18s" repeatCount="indefinite"><mpath href="#fcOrbit1" /></animateMotion>
        </circle>
        <circle r="4" fill="white" filter="url(#dotGlow2)">
          <animateMotion dur="24s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear"><mpath href="#fcOrbit2" /></animateMotion>
        </circle>
      </svg>

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-[99px] flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: "0px 0px 10px 0px rgba(255,107,107,0.43), inset 0px 0px 4px 0px rgba(0,0,0,0.96)",
          zIndex: 15,
        }}
      >
        <img src="/images/figma/Rectangle 36.svg" alt="" loading="lazy" className="absolute inset-0 w-full h-full scale-[1.22]" />
        <img src="/images/figma/bubble.svg" alt="Chorus" loading="lazy" className="relative w-14 h-14 brightness-0 invert" />
      </div>

      <div className="absolute" style={{ top: "14%", left: "24%", zIndex: 10 }}>
        <OrbitIcon><img src="/images/figma/image 34.svg" alt="Google Sheets" loading="lazy" className="w-10 h-10" /></OrbitIcon>
      </div>
      <div className="absolute" style={{ top: "12%", right: "10%", zIndex: 10 }}>
        <OrbitIcon><img src="/images/figma/image 33.svg" alt="HubSpot" loading="lazy" className="w-14 h-14 rounded-full" /></OrbitIcon>
      </div>
      <div className="absolute" style={{ top: "45%", left: "6%", zIndex: 10 }}>
        <OrbitIcon><img src="/images/figma/image 32.svg" alt="Google Calendar" loading="lazy" className="w-10 h-10" /></OrbitIcon>
      </div>
      <div className="absolute" style={{ top: "45%", right: "6%", zIndex: 10 }}>
        <OrbitIcon><img src="/images/figma/image 35.svg" alt="Gmail" loading="lazy" className="w-10 h-10" /></OrbitIcon>
      </div>
      <div className="absolute" style={{ bottom: "12%", left: "35%", zIndex: 10 }}>
        <OrbitIcon><img src="/images/figma/image 12.svg" alt="Slack" loading="lazy" className="w-10 h-10" /></OrbitIcon>
      </div>
    </div>
  );
}

/* ── Step-by-step scrolling image for card 2 ── */

const STEP_COUNT = 5;
const STEP_HEIGHT_PX = 72;
const STEP_PAUSE_MS = 2000;

function ScrollingImage({ src, alt, paused }: { src: string; alt: string; paused?: boolean }) {
  const [step, setStep] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      return;
    }
    timerRef.current = setInterval(() => {
      setStep((prev) => (prev + 1) % STEP_COUNT);
    }, STEP_PAUSE_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  const offset = step * STEP_HEIGHT_PX;

  return (
    <div className="relative w-full max-w-[530px] overflow-hidden md:translate-x-16" style={{ height: 340 }}>
      <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
      <div
        className="transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto" />
        <img src={src} alt="" loading="lazy" className="w-full h-auto" aria-hidden />
      </div>
    </div>
  );
}

/* ── Card data ── */

interface CardData {
  number: number;
  title: string;
  descriptions: string[];
  checkItems: string[];
  visualType: "image" | "orbital" | "scrollingImage" | "animatedTimeline";
  imageSrc?: string;
  imageAlt?: string;
}

const CARDS: CardData[] = [
  {
    number: 1,
    title: "Adaptive Intelligence",
    descriptions: [
      "They Learn Your Style And Improve Over Time",
      "The more you work with Chorus, the better it understands your preferences:",
    ],
    checkItems: [
      "Your communication voice",
      "Your decision patterns",
      "Your quality standards",
      "Your strategic priorities",
    ],
    visualType: "animatedTimeline",
    imageSrc: "/images/figma/difference1.svg",
    imageAlt: "Adaptive Intelligence preview",
  },
  {
    number: 2,
    title: "Transparent Operation",
    descriptions: [
      "See Everything Your AI Workforce Does",
      "Real-time activity dashboard shows:",
    ],
    checkItems: [
      "What each agent is working on",
      "Decisions they're making",
      "Output they're creating",
      "Output they're creating",
    ],
    visualType: "scrollingImage",
    imageSrc: "/images/figma/difference2.svg",
    imageAlt: "Transparent Operation preview",
  },
  {
    number: 3,
    title: "Full Business Context",
    descriptions: [
      "Because Chorus integrates with your entire stack (CRM, email, docs, calendar, Slack), your AI agents have complete context about:",
    ],
    checkItems: [
      "Your customers and pipeline",
      "Your processes and SOPs",
      "Your messaging and brand voice",
    ],
    visualType: "orbital",
  },
];

/* ── Shared card content renderer ── */

function CardContent({ card, paused }: { card: CardData; paused?: boolean }) {
  return (
    <div className="py-5 px-4 md:py-[60px] md:px-[56px] min-h-[480px] md:min-h-0">
      <div className="flex flex-col md:flex-row items-center gap-[30px] md:gap-[22px]">
        {/* ── Left side content ── */}
        <div className="flex flex-col gap-4 md:gap-[32px] shrink-0 md:max-w-[460px] w-full">
          <div
            className="w-[45px] h-[45px] md:w-[85px] md:h-[85px] rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(138deg, rgba(61,61,61,0.29) 0%, rgba(255,229,229,0) 100%)",
              boxShadow: "0px 3.98px 24.85px rgba(0,0,0,0.25)",
              border: "1.3px solid rgba(255,255,255,0.10)",
            }}
          >
            <span className="text-white text-[18px] md:text-[30px] font-normal">{card.number}</span>
          </div>

          {card.visualType === "orbital" && (
            <div className="md:hidden relative w-full overflow-visible" style={{ height: "calc(420px * 0.38)" }}>
              <div
                className="absolute top-0 left-1/2"
                style={{ width: 500, height: 420, transformOrigin: "top center", transform: "translateX(-50%) scale(0.38)" }}
              >
                <OrbitalAnimation />
              </div>
            </div>
          )}

          {card.visualType === "animatedTimeline" && (
            <div className="md:hidden w-full flex justify-center">
              <AnimatedTimelineSVG />
            </div>
          )}

          {card.visualType === "scrollingImage" && (
            <div className="md:hidden w-full">
              <ScrollingImage src={card.imageSrc!} alt={card.imageAlt || ""} paused={paused} />
            </div>
          )}

          <div className="flex flex-col gap-3 md:gap-[20px]">
            <ScrollTextReveal
              text={card.title}
              className="text-white text-lg md:text-2xl font-bold font-['Urbanist']"
            />
            <div className="flex flex-col gap-4 md:gap-[28px]">
              <div className="flex flex-col gap-3 md:gap-[27px]">
                <div className="flex flex-col gap-0">
                  {card.descriptions.map((desc, j) => (
                    <p key={j} className="w-72 md:w-auto text-white text-sm font-medium font-['Urbanist'] leading-5 max-w-[384px]">
                      {desc}
                    </p>
                  ))}
                </div>
                <div className="w-full max-w-[433px] h-0 border-t border-white/19" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-y-[17px] gap-x-[32px]">
                  {card.checkItems.map((item, j) => (
                    <div key={`${item}-${j}`}>
                      <div className="md:hidden flex items-center gap-2">
                        <CheckMark />
                        <span className={`text-gray-300 ${item === "What each agent is working on" ? "text-[12px]" : "text-[13px]"} font-medium`}>
                          {item}
                        </span>
                      </div>
                      <div className="hidden md:block">
                        <AnimateOnScroll animation="fade-up" duration={0.6} delay={j * 0.15} threshold={0.2}>
                          <div className="flex items-center gap-[16px]">
                            <CheckMark />
                            <span className={`text-gray-300 ${item === "What each agent is working on" ? "text-[14px]" : "text-[16px]"} font-medium whitespace-nowrap`}>
                              {item}
                            </span>
                          </div>
                        </AnimateOnScroll>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right side visual ── */}
        {card.visualType === "orbital" ? (
          <div className="relative flex-1 min-h-[420px] hidden md:flex items-center justify-center">
            <OrbitalAnimation />
          </div>
        ) : card.visualType === "animatedTimeline" ? (
          <div className="relative flex-1 w-full hidden md:flex items-center justify-center md:justify-end md:min-h-[440px] max-w-[520px] md:translate-x-16">
            <AnimatedTimelineSVG />
          </div>
        ) : card.visualType === "scrollingImage" ? (
          <div className="relative flex-1 w-full hidden md:flex items-center justify-center md:justify-end md:min-h-[440px] max-w-[570px]">
            <ScrollingImage src={card.imageSrc!} alt={card.imageAlt || ""} paused={paused} />
          </div>
        ) : (
          <div className={`relative flex-1 w-full flex items-center justify-center md:justify-end md:min-h-[440px] max-w-[520px]`}>
            <img src={card.imageSrc} alt={card.imageAlt || ""} loading="lazy" className="w-full h-auto md:translate-x-16 max-w-[473px]" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Transition config ── */

const DECK_EASE = [0.4, 0, 0.2, 1] as const;
const DECK_TRANSITION = {
  layout: { duration: 0.6, ease: DECK_EASE },
  height: { duration: 0.55, ease: DECK_EASE },
  width: { duration: 0.55, ease: DECK_EASE },
  marginTop: { duration: 0.45, ease: DECK_EASE },
};

/* ── Main export ── */

function useIsMd() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMd;
}

export function FeaturesCardSection() {
  const [order, setOrder] = useState([2, 1, 0]);
  const [hovered, setHovered] = useState(false);
  const isMd = useIsMd();

  const handleNext = useCallback(() => {
    setOrder((prev) => [prev[1], prev[2], prev[0]]);
  }, []);

  return (
    <section className="w-full bg-black px-6 md:px-10 lg:px-20 py-12 md:py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[20px]">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center gap-1 w-full self-stretch">
          <Badge className="w-28">Features</Badge>
          <div className="flex flex-col items-center gap-[4px] md:gap-[8px] w-full self-stretch">
            <ScrollTextReveal
              text="The Difference That Changes Everything"
              className="text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[78px] text-center"
            />
            <p className="text-center text-gray-300 text-base md:text-xl lg:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* ── Card Deck — each card is an independent element that swaps position ── */}
        <div className="w-full max-w-[1220px]">
          <div
            className="group/deck flex flex-col items-center w-full gap-0 min-h-[500px] md:min-h-[650px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {CARDS.map((card, i) => {
              const pos = order.indexOf(i);
              const isFront = pos === 0;
              const isMiddle = pos === 1;
              const visualOrder = pos === 0 ? 2 : pos === 1 ? 1 : 0;

              return (
                <motion.div
                  key={i}
                  layout="position"
                  initial={false}
                  className={`overflow-hidden cursor-pointer transition-[filter,opacity] duration-500 ${
                    isFront
                      ? "rounded-3xl md:rounded-[60px] hover:!blur-none hover:!opacity-100"
                      : "rounded-t-xl md:rounded-t-[37px] group-hover/deck:blur-[3px] group-hover/deck:opacity-40"
                  }`}
                  animate={{
                      height: isFront ? "auto" : isMd ? 35 : 18,
                      width: isFront ? "100%" : isMiddle ? "91%" : "82%",
                      marginTop: visualOrder === 1 ? (isMd ? 3 : 2) : 0,
                    }}
                  transition={DECK_TRANSITION}
                  style={{
                    order: visualOrder,
                    background: "#000000",
                    borderTop: isFront ? undefined : "0.79px solid rgba(255,255,255,0.3)",
                    borderLeft: isFront ? undefined : "0.79px solid rgba(255,255,255,0.3)",
                    borderRight: isFront ? undefined : "0.79px solid rgba(255,255,255,0.3)",
                    borderBottom: "none",
                    outline: isFront ? "1px solid #434343" : "none",
                    outlineOffset: isFront ? "-1px" : undefined,
                    boxShadow: isFront
                      ? "0px 30px 100px rgba(0,0,0,0.7), 0px 0px 1px rgba(255,255,255,0.1)"
                      : "none",
                    backdropFilter: isFront ? "blur(25.53px)" : undefined,
                    zIndex: 30 - pos * 10,
                  }}
                  onClick={handleNext}
                  role={isFront ? "button" : undefined}
                  tabIndex={isFront ? 0 : -1}
                  onKeyDown={
                    isFront
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleNext();
                          }
                        }
                      : undefined
                  }
                >
                  <CardContent card={card} paused={hovered} />
                </motion.div>
              );
            })}
          </div>

          {/* ── Card position dots ── */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setOrder([i, (i + 1) % 3, (i + 2) % 3])}
                className={`h-2 rounded-full transition-all duration-300 ${
                  order[0] === i ? "bg-white w-6" : "bg-white/30 hover:bg-white/50 w-2"
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
