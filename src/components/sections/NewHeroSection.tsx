"use client";

import { ButtonLink } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const heroWords = ["Stop", "Hiring.", "Start", "Building."];

const ease = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.05 + i * 0.15 },
  }),
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay },
  }),
};

let cachedData: object | null = null;
if (typeof window !== "undefined") {
  fetch("/images/banner/Hero Banner Animation.json")
    .then((r) => r.json())
    .then((d) => { cachedData = d; })
    .catch(() => {});
}

export function NewHeroSection() {
  const [animationData, setAnimationData] = useState<object | null>(cachedData);

  useEffect(() => {
    if (cachedData) {
      setAnimationData(cachedData);
    } else {
      fetch("/images/banner/Hero Banner Animation.json")
        .then((r) => r.json())
        .then((d) => { cachedData = d; setAnimationData(d); })
        .catch(() => {});
    }
  }, []);

  return (
    <section
      className="relative bg-black overflow-hidden"
      id="about"
    >
      {/* ── Stars ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/figma/stars.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute pointer-events-none md:right-[50px] lg:right-[250px]"
        style={{
          top: '100px',
          width: 'auto',
          height: '1000px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 pt-[60px] md:pt-[110px] px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto pb-12 md:pb-0">
        {/* Hero Header */}
        <div className="w-full max-w-[1183px] mx-auto flex flex-col justify-start items-center">
          <div className="self-stretch flex flex-col justify-start items-center gap-[20px] md:gap-7">
            <div className="self-stretch flex flex-col justify-start items-center gap-[14px] md:gap-5">
              <h1 className="self-stretch text-center text-[36px] leading-[40px] md:text-5xl md:leading-[56px] lg:text-7xl lg:leading-[78px] font-extrabold font-['Urbanist'] text-white">
                <span className="inline-flex flex-wrap justify-center gap-x-[0.3em]">
                  {heroWords.map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-[0.3em]">
                      <motion.span
                        className="inline-block"
                        variants={wordVariants}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              </h1>
              <motion.p
                className="w-72 md:w-auto text-center text-base leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-100"
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                custom={0.7}
              >
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.9}
            >
              <ButtonLink href={PRIMARY_CTA_HREF} variant="light" size="md">
                Build Your Team Now
              </ButtonLink>
            </motion.div>
          </div>
        </div>

        {/* ── Lottie fades in when loaded ── */}
        <AnimatePresence>
          {animationData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Mobile */}
              <div className="md:hidden mt-[20px] pointer-events-none overflow-hidden">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: 1577, height: 1157 }}
                  className="origin-top-center scale-[0.38] -translate-x-[37%] -mt-[350px] -mb-[380px]"
                />
              </div>

              {/* Tablet */}
              <div className="hidden md:block lg:hidden mt-[-50px] -mb-[450px] pointer-events-none overflow-hidden">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: 1500, height: 967 }}
                  className="origin-top-left scale-[0.65] -translate-x-[6%] -translate-y-[10px]"
                />
              </div>

              {/* Desktop */}
              <div className="hidden lg:block mt-[-110px] -mb-[150px] pointer-events-none">
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  style={{ width: 1500, height: 967 }}
                  className="origin-top-left scale-[0.95] -translate-y-[60px]"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
