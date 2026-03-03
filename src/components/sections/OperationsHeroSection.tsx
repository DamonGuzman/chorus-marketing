/* eslint-disable @next/next/no-img-element */
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ScrollTextReveal } from "@/components/ui";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function parseJsonOffThread(text: string): Promise<object> {
  return new Promise((resolve) => {
    if (typeof Worker === "undefined") {
      resolve(JSON.parse(text));
      return;
    }
    const blob = new Blob(
      [`self.onmessage=function(e){postMessage(JSON.parse(e.data))}`],
      { type: "application/javascript" },
    );
    const w = new Worker(URL.createObjectURL(blob));
    w.onmessage = (e) => { resolve(e.data); w.terminate(); };
    w.onerror = () => { resolve(JSON.parse(text)); w.terminate(); };
    w.postMessage(text);
  });
}

export function OperationsHeroSection() {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [mobileAnimationData, setMobileAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/banner/Hero Banner Animation.json")
      .then((res) => res.text())
      .then((text) => parseJsonOffThread(text))
      .then((data) => setAnimationData(data))
      .catch(() => {});
    fetch("/images/banner/Hero Banner Animation Mobile.json")
      .then((res) => res.text())
      .then((text) => parseJsonOffThread(text))
      .then((data) => setMobileAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <section className="relative w-full bg-black" style={{ overflowX: "clip" }}>
      {/* Dot pattern background – top-right (desktop only) */}
      <img
        src="/images/figma/bg_dots_pattern.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-0 right-50 w-[954px] h-[1014px] pointer-events-none select-none"
      />

      {/* Diffused glow behind the dashboard */}
      <div className="absolute left-1/2 top-[77px] -translate-x-1/2 w-[1032px] h-[516px] bg-white/10 rounded-full blur-[200px] opacity-50 pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 pt-[117px] md:pt-[147px] flex flex-col items-center px-6 gap-4">
        <div className="flex flex-col items-center w-full max-w-[969px]">
          {/* Mobile: plain text, fully visible on load */}
          <h1 className="md:hidden text-[30px] font-bold font-['Urbanist'] leading-tight text-white text-center">
            AI IT Operations That Monitor, Fix &amp; Optimize Automatically
          </h1>
          {/* Desktop: stagger scroll reveal */}
          <ScrollTextReveal
            text="AI IT Operations That Monitor, Fix & Optimize Automatically"
            stagger={150}
            className="hidden md:block text-[55px] font-bold font-['Urbanist'] leading-[74px] text-center"
          />
        </div>
        {/* Mobile subtitle only */}
        <p className="md:hidden text-[#7D7C83] text-[18px] font-medium font-['Urbanist'] leading-6 text-center max-w-[320px]">
          The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
        </p>
      </div>

      {/* Mobile: sidebar-free animation */}
      <div className="md:hidden relative z-[1] w-full mx-auto mt-[-60px] flex ml-[-40px]">
        {mobileAnimationData ? (
          <Lottie animationData={mobileAnimationData} loop autoplay className="w-full h-auto origin-top scale-x-[1.3] scale-y-[1.5]" />
        ) : (
          <div className="w-full" style={{ aspectRatio: "1252 / 695" }} />
        )}
      </div>

      {/* Desktop: unchanged */}
      <div className="hidden md:block relative z-[1] w-full max-w-[1252px] mx-auto mt-[-170px]">
        {animationData ? (
          <Lottie animationData={animationData} loop autoplay className="w-full h-auto origin-top scale-[1.15]" />
        ) : (
          <div className="w-full" style={{ aspectRatio: "1252 / 695" }} />
        )}
      </div>
    </section>
  );
}
