"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

interface ScrollTextRevealProps {
  text: string | string[];
  className?: string;
  style?: CSSProperties;
  dimColor?: string;
  brightColor?: string;
}

export function ScrollTextReveal({
  text,
  className,
  style,
  dimColor = "rgba(255,255,255,0.25)",
  brightColor = "#ffffff",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = Array.isArray(text) ? text : [text];

  let globalIdx = 0;

  return (
    <div ref={containerRef} className={className} style={style}>
      {lines.map((line, lineIdx) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <div key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const delay = globalIdx * 40;
              globalIdx++;
              return (
                <span
                  key={`${lineIdx}-${wordIdx}`}
                  className="inline-block mr-[0.3em]"
                  style={{
                    color: revealed ? brightColor : dimColor,
                    transition: `color 0.3s ease ${delay}ms`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
