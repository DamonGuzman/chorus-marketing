/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ScrollTextReveal, Badge } from "@/components/ui";

function OpsDashboardCard() {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
    setTilt({
      ry: ((x - 50) / 50) * 5,
      rx: -((y - 50) / 50) * 5,
    });
  };

  return (
    <div
      className="w-[140%] ml-[-51px] lg:ml-[45px] lg:w-[806px] lg:max-w-none cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setHovered(false); setTilt({ rx: 0, ry: 0 }); }}
      style={{
        perspective: "900px",
      }}
    >
      <div
        className="relative"
        style={{
          transform: hovered
            ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.02,1.02,1.02)`
            : "none",
          transition: hovered ? "transform 0.15s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src="/images/figma/Group 1707484108.svg"
          alt="Operations dashboard showing team members, files and AI agents"
          className="w-full h-auto pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle 180px at ${pos.x}% ${pos.y}%, rgba(145,85,237,0.12) 0%, transparent 100%)`,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle 120px at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.06) 0%, transparent 100%)`,
            transform: "translateZ(20px)",
          }}
        />
      </div>
    </div>
  );
}

export function OperationsProblemSection() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-20 py-12 md:py-20 bg-black" style={{ overflowX: "clip" }}>
      <div className="max-w-[1266px] mx-auto flex flex-col gap-2 md:gap-6">

        {/* Section header */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Badge>The Problem</Badge>
          <div className="flex flex-col items-center gap-4 md:gap-8 text-center">
            <h2 className="md:hidden text-white text-[28px] font-bold font-['Urbanist'] leading-tight">
              The Problem - What&apos;s Broken Today
            </h2>
            <ScrollTextReveal
              text="The Problem - What's Broken Today"
              className="hidden md:block text-white text-5xl font-bold font-['Urbanist'] leading-[78px]"
            />
            <p className="text-[#7d7c83] text-sm md:text-3xl font-medium font-['Urbanist'] leading-6 md:leading-10">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* Mobile: full-width dashboard image, left-anchored */}
        <div className="lg:hidden w-full overflow-hidden flex justify-start">
          <OpsDashboardCard />
        </div>

        {/* Two-column content: problem list + dashboard image */}
        <div className="flex flex-col lg:flex-row lg:h-[602px] gap-4 md:gap-12 items-center">
          {/* Problem list */}
          <div className="shrink-0 w-full lg:w-[552px] flex flex-col gap-4 md:gap-6">
            <div className="flex items-center gap-4 pl-4 md:pl-10">
              <img src="/images/figma/alert-circle.svg" alt="" className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span className="text-[#7d7c83] text-base md:text-2xl font-bold font-['Urbanist'] leading-tight md:leading-[48px]">Too many alerts</span>
            </div>

            <div className="relative w-full md:w-[640px] rounded-[24px]">
              <span aria-hidden="true" className="absolute inset-[-2px] rounded-[24px] overflow-hidden pointer-events-none">
                <span
                  className="absolute top-1/2 left-1/2 w-[300%] aspect-square -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: "conic-gradient(from 0deg, transparent 0%, transparent 50%, rgba(145,85,237,0.35) 63%, rgba(180,138,251,0.85) 73%, rgba(255,255,255,0.95) 80%, rgba(180,138,251,0.85) 87%, rgba(145,85,237,0.35) 97%, transparent 100%)",
                    animation: "cta-orbit-rotate 4s linear infinite",
                  }}
                />
              </span>
              <div
                className="relative rounded-[24px] px-5 md:px-[40px] pt-4 md:pt-[20px] pb-5 md:pb-[40px] flex flex-col gap-3 md:gap-[20px] items-start shadow-[0px_2.77px_3.49px_0px_rgba(0,0,0,0.04),0px_6.65px_8.38px_0px_rgba(0,0,0,0.06),0px_12.52px_15.78px_0px_rgba(0,0,0,0.08),0px_22.34px_28.14px_0px_rgba(0,0,0,0.09),0px_41.78px_52.64px_0px_rgba(0,0,0,0.11),0px_100px_126px_0px_rgba(0,0,0,0.15)]"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 640 249\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(43.592 22.262 -88.881 26.098 139.59 26.382)\"><stop stop-color=\"rgba(255,255,255,0)\" offset=\"0\"/><stop stop-color=\"rgba(255,255,255,0.1)\" offset=\"1\"/></radialGradient></defs></svg>')", backgroundColor: "#0a0a0a" }}
              >
                <div className="flex items-center gap-3 md:gap-[20px]">
                  <img src="/images/figma/Email.svg" alt="" className="w-8 h-8 md:w-[50px] md:h-[50px] shrink-0" />
                  <span className="text-white text-base md:text-2xl font-bold font-['Urbanist'] leading-tight md:leading-[48px]">Downtime issues</span>
                </div>
                <p className="text-[#7d7c83] text-sm md:text-base font-bold font-['Urbanist'] leading-5 md:leading-6 max-w-full">
                  The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-4 md:pl-10">
              <img src="/images/figma/Playlist-Down.svg" alt="" className="w-8 h-8 md:w-[59px] md:h-[59px] shrink-0" />
              <span className="text-[#7d7c83] text-base md:text-2xl font-bold font-['Urbanist'] leading-tight md:leading-[48px]">Manual ticket routing</span>
            </div>

            <div className="flex items-center gap-4 pl-4 md:pl-10">
              <img src="/images/figma/Setting.svg" alt="" className="w-8 h-8 md:w-[59px] md:h-[59px] shrink-0" />
              <span className="text-[#7d7c83] text-base md:text-2xl font-bold font-['Urbanist'] leading-tight md:leading-[48px]">Security gaps</span>
            </div>
          </div>

          {/* Desktop only: dashboard image on the right */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <OpsDashboardCard />
          </div>
        </div>
      </div>
    </section>
  );
}
