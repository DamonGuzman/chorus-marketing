"use client";

import { useState, useRef } from "react";

const testimonials = [
  {
    img: "/images/figma/about-us/person-1.jpg",
    quote: "Chorus didn\u2019t just launch a product\u2014they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That\u2019s not a demo. That\u2019s a debut.",
    source: "TechCrunch",
  },
  {
    img: "/images/figma/about-us/person-2.jpg",
    quote: "The most coordinated AI launch we\u2019ve seen.",
    source: "The Information",
  },
  {
    img: "/images/figma/about-us/person-3.jpg",
    quote: "If this is what agentic AI actually looks like when it works in harmony, every startup\u2019s playbook just got rewritten.",
    source: "VentureBeat",
  },
  {
    img: "/images/figma/about-us/person-4.jpg",
    quote: "Chorus didn\u2019t just launch a product\u2014they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That\u2019s not a demo. That\u2019s a debut.",
    source: "TechCrunch",
  },
];

export function PressCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / testimonials.length;
    const index = Math.round(el.scrollLeft / slideWidth);
    setActive(index);
  };

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / testimonials.length;
    el.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  };

  return (
    <div className="lg:hidden self-stretch bg-black pb-[50px] overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max">
          {testimonials.map((item, i) => (
            <div key={i} className="w-screen flex-shrink-0 snap-center px-6">
              <div className="flex flex-col items-center gap-[24px] max-w-[360px] mx-auto text-center">
                {/* Card container with fixed size */}
                <div className="w-[160px] h-[180px] rounded-[30px] border border-white/40 overflow-hidden flex items-center justify-center bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-[10rem] h-auto"
                    src={item.img}
                    alt={item.source}
                  />
                </div>
                <p className="text-gray-400 text-[15px] italic font-bold font-['Urbanist'] leading-[26px]">
                  {item.quote}
                </p>
                <p className="text-white text-[16px] font-semibold font-['Urbanist']">
                  — {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots — 4 dots, active one is white */}
      <div className="flex items-center justify-center gap-[8px] mt-[24px]">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-[6px] rounded-full transition-all duration-300 ${
              i === active ? "w-[40px] bg-white" : "w-[40px] bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
