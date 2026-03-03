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

  useEffect(() => {
    fetch("/images/banner/Hero Banner Animation.json")
      .then((res) => res.text())
      .then((text) => parseJsonOffThread(text))
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <section className="relative w-full bg-black" style={{ overflowX: "clip" }}>
      {/* Dot pattern background – top-right */}
      <img
        src="/images/figma/bg_dots_pattern.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-50 w-[954px] h-[1014px] pointer-events-none select-none"
      />

      {/* Diffused glow behind the dashboard */}
      <div className="absolute left-1/2 top-[77px] -translate-x-1/2 w-[1032px] h-[516px] bg-white/10 rounded-full blur-[200px] opacity-50 pointer-events-none" />

      {/* Title – Figma: y=147, h=148, text w=969 centered */}
      <div className="relative z-10 pt-[117px] md:pt-[147px] flex flex-col items-center px-6">
        <div className="flex flex-col items-center w-full max-w-[969px]">
          <ScrollTextReveal
            text="AI IT Operations That Monitor, Fix & Optimize Automatically"
            stagger={150}
            className="text-3xl md:text-[55px] font-bold font-['Urbanist'] leading-tight md:leading-[74px] text-center"
          />
        </div>
      </div>

      <div className="relative z-[1] w-full max-w-[1252px] mx-auto mt-[-60px] md:mt-[-170px]">
        {animationData ? (
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="w-full h-auto origin-top scale-[1.15]"
          />
        ) : (
          <div className="w-full" style={{ aspectRatio: "1252 / 695" }} />
        )}
      </div>
    </section>
  );
}
