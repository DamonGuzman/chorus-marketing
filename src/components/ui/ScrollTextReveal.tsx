"use client";

import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";

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
  dimColor = "rgba(255,255,255,0.08)",
  brightColor = "#ffffff",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const lines = Array.isArray(text) ? text : [text];
  const totalWords = lines.reduce((sum, line) => sum + line.split(/\s+/).filter(Boolean).length, 0);

  const updateProgress = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;
    const start = windowH * 0.85;
    const end = windowH * 0.35;
    const raw = (start - rect.top) / (start - end);
    setProgress(Math.max(0, Math.min(1, raw)));
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, [updateProgress]);

  let globalIdx = 0;

  return (
    <div ref={containerRef} className={className} style={style}>
      {lines.map((line, lineIdx) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <div key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const wordProgress = totalWords > 1 ? globalIdx / (totalWords - 1) : 0;
              const isRevealed = progress >= wordProgress;
              globalIdx++;
              return (
                <span
                  key={`${lineIdx}-${wordIdx}`}
                  className="inline-block mr-[0.3em]"
                  style={{
                    color: isRevealed ? brightColor : dimColor,
                    transition: "color 0.15s ease",
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
