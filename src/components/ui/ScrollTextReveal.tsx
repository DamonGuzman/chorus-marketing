"use client";

import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";
import { useScrollCallback } from "./SmoothScroll";

interface ScrollTextRevealProps {
  text: string | string[];
  className?: string;
  style?: CSSProperties;
  dimColor?: string;
  brightColor?: string;
  stagger?: number;
}

export function ScrollTextReveal({
  text,
  className,
  style,
  dimColor = "rgba(255,255,255,0.08)",
  brightColor = "#ffffff",
  stagger,
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [, forceRender] = useState(0);
  const inViewRef = useRef(false);
  const [staggerActive, setStaggerActive] = useState(false);

  const lines = Array.isArray(text) ? text : [text];
  const totalWords = lines.reduce((sum, line) => sum + line.split(/\s+/).filter(Boolean).length, 0);

  const onScrollTick = useCallback(() => {
    if (stagger !== undefined) return;
    if (!inViewRef.current) return;
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowH = window.innerHeight;
    const start = windowH * 0.85;
    const end = windowH * 0.35;
    const raw = (start - rect.top) / (start - end);
    const clamped = Math.max(0, Math.min(1, raw));

    if (Math.abs(clamped - progressRef.current) > 0.003) {
      progressRef.current = clamped;
      forceRender(n => n + 1);
    }
  }, [stagger]);

  useScrollCallback(onScrollTick);

  useEffect(() => {
    if (stagger !== undefined) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0, rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  useEffect(() => {
    if (stagger === undefined) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setStaggerActive(true));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  const progress = progressRef.current;
  let globalIdx = 0;

  return (
    <div ref={containerRef} className={className} style={style}>
      {lines.map((line, lineIdx) => {
        const words = line.split(/\s+/).filter(Boolean);
        return (
          <div key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const idx = globalIdx;
              const wordProgress = totalWords > 1 ? idx / (totalWords - 1) : 0;
              const isRevealed = stagger !== undefined ? staggerActive : progress >= wordProgress;
              globalIdx++;
              return (
                <span
                  key={`${lineIdx}-${wordIdx}`}
                  className="inline-block mr-[0.3em]"
                  style={{
                    color: isRevealed ? brightColor : dimColor,
                    ...(stagger !== undefined && {
                      opacity: isRevealed ? 1 : 0,
                      transform: isRevealed ? "translateY(0px)" : "translateY(12px)",
                    }),
                    transition: stagger !== undefined
                      ? "color 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.7s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.1, 0.25, 1)"
                      : "color 0.15s ease",
                    transitionDelay: stagger !== undefined ? `${idx * stagger}ms` : undefined,
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
