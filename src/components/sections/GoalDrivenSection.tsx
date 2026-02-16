"use client";

/* ─────────────────────────────────────────────────────────
   Goal-Driven Section
   "From 'update this spreadsheet' to 'optimize our budget'"
   Step 02→03 with animated illustration on the right
   ───────────────────────────────────────────────────────── */

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function GoalDrivenSection() {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/images/6 Points Animation/6 Points Animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch(() => {});
  }, []);

  return (
    <section className="w-full bg-black px-4 md:px-8 py-[50px] md:py-section-y overflow-hidden">
      <div className="flex flex-col md:flex-row max-w-[1240px] mx-auto items-center justify-between gap-10">
        {/* Left – Step indicator */}
        <div className="hidden md:flex flex-col items-center gap-[26px] shrink-0">
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            02
          </span>
          <div className="w-[2px] h-[341px] bg-white/16 rounded-full overflow-hidden">
            <div className="w-full h-[221px] bg-white rounded-full" />
          </div>
          <span className="text-gray-300 text-[26px] font-medium leading-[36px] text-center">
            03
          </span>
        </div>

        {/* Center – Text content */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] max-w-[510px]">
          <h2 className="text-white text-[24px] md:text-[30px] font-bold leading-[34px] md:leading-[44px]">
            From &quot;update this spreadsheet&quot; to &quot;optimize our
            budget&quot;
          </h2>
          <p className="text-gray-300 text-[15px] md:text-[18px] font-medium leading-[26px] md:leading-[32px]">
            VocAI CRM empowers a global network of over 250,000 businesses in
            180 countries to convert more leads, engage with customers, and grow
            their revenue. VocAI CRM empowers a global network of over 250,000
            businesses in 180 countries to convert more leads, engage with
            customers, and grow their revenue.
          </p>
        </div>

        {/* Right – Animated illustration */}
        <div className="w-full h-full flex justify-end">
          <img src={"images/figma/features/settings-image.png"} className="w-auto h-auto"/>
          {/* <div className="w-[556.86px] h-[529.58px] relative">
            <div className="w-28 h-28 left-[213.37px] top-0 absolute bg-gradient-to-b from-white/0 to-white/10 rounded-full border-1 border-white/10" />
            <div className="w-20 h-20 left-[226px] top-[12px] absolute bg-neutral-800 rounded-full border-[1.50px] border-white/10" />
            <div className="w-10 h-10 left-[246.80px] top-[33px] absolute overflow-hidden">
              <img src={"images/figma/features/file-icon.svg"} />
            </div>
            <div className="w-14 h-[3.41px] left-[185.76px] top-[325.79px] absolute origin-top-left rotate-[144.92deg] bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-14 h-[3.41px] left-[344.82px] top-[313px] absolute origin-top-left rotate-[32.23deg] bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-12 h-[3.41px] left-[270.78px] top-[358px] absolute origin-top-left rotate-90 bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-12 h-[3.41px] left-[270.80px] top-[113px] absolute origin-top-left rotate-90 bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-48 h-48 left-[162px] top-[161px] absolute bg-white/0 rounded-[44.45px] backdrop-blur-[126.61px]" />
            <div className="w-40 h-32 left-[180.86px] top-[201px] absolute bg-white rounded-[44.45px] blur" />
            <div className="w-44 h-44 left-[180.58px] top-[172.50px] absolute bg-stone-950 rounded-[44.45px] backdrop-blur-[126.61px]" />
            <div className="w-32 h-32 left-[199.74px] top-[191.65px] absolute bg-gradient-to-b from-stone-300/5 to-zinc-600/25 rounded-[44.45px] border-4 border-white/5 backdrop-blur-[126.61px]" />
            <div className="w-20 h-20 left-[223.49px] top-[214.65px] absolute overflow-hidden">
              <img src={"images/figma/features/settings-arrows.svg"} />
            </div>
            <div className="w-14 h-[3.41px] left-[179.77px] top-[218.06px] absolute origin-top-left rotate-180 bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-16 h-0 left-[82.86px] top-[217px] absolute outline outline-1 outline-offset-[-0.57px] outline-white/5"></div>
            <div className="w-14 h-14 left-[26.81px] top-[183.95px] absolute bg-gradient-to-b from-white/0 to-white/10 rounded-full border-1 border-white/10" />
            <div className="w-6 h-6 left-[43.86px] top-[201px] absolute overflow-hidden">
              <img src={"images/figma/features/calculator.svg"} />
            </div>
            <div className="w-14 h-[3.41px] left-[348.80px] top-[213.29px] absolute bg-gradient-to-r from-neutral-400 to-white/0 shadow-[0px_0px_4.547677040100098px_0px_rgba(255,255,255,0.37)]" />
            <div className="w-28 h-0 left-[388.60px] top-[215.56px] absolute outline outline-1 outline-offset-[-0.57px] outline-white/5"></div>
            <div className="w-14 h-14 left-[498.88px] top-[186px] absolute bg-gradient-to-b from-white/0 to-white/10 rounded-full border-1 border-white/10">
              <div className="w-6 h-6 left-[1rem] top-[1rem] absolute overflow-hidden">
                <img src={"images/figma/features/dollar-circle.svg"} />
              </div>
            </div>
            <div className="p-3.5 left-0 top-[268px] absolute bg-gradient-to-b from-white/0 to-white/10 rounded-3xl outline outline-1 outline-offset-[-1.14px] outline-white/10 inline-flex flex-col justify-start items-start gap-3">
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-1.5">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="self-stretch h-1.5 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                </div>
              </div>
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-2">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-8 h-1 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md inline-flex flex-col justify-start items-start gap-3.5" />
                    <div className="justify-start text-white/40 text-[10.35px] font-bold font-['Inter'] leading-9">
                      $2756
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3.5 left-[198.80px] top-[410px] absolute bg-gradient-to-b from-white/0 to-white/10 rounded-3xl outline outline-1 outline-offset-[-1.14px] outline-white/10 inline-flex flex-col justify-start items-start gap-3">
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-1.5">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="self-stretch h-1.5 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                </div>
              </div>
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-2">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-8 h-1 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md inline-flex flex-col justify-start items-start gap-3.5" />
                    <div className="justify-start text-white/40 text-[10.35px] font-bold font-['Inter'] leading-9">
                      $9876
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3.5 left-[389px] top-[268px] absolute bg-gradient-to-b from-white/0 to-white/10 rounded-3xl outline outline-1 outline-offset-[-1.14px] outline-white/10 inline-flex flex-col justify-start items-start gap-3">
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-1.5">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="self-stretch h-1.5 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                </div>
              </div>
              <div className="w-28 p-2 bg-white/5 rounded-tl-xl rounded-tr-xl rounded-bl-xl inline-flex justify-start items-center gap-2">
                <div className="w-24 inline-flex flex-col justify-center items-start gap-2">
                  <div className="w-24 h-2 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md flex flex-col justify-start items-start gap-3.5" />
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className="w-8 h-1 px-2.5 pt-3 pb-2.5 bg-white/5 rounded-md inline-flex flex-col justify-start items-start gap-3.5" />
                    <div className="justify-start text-white/40 text-[10.35px] font-bold font-['Inter'] leading-9">
                      $1345
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
