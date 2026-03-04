"use client";

import { useEffect, useRef, useCallback, type ReactNode, type CSSProperties } from "react";
import { useScrollCallback } from "./SmoothScroll";

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function ScrollParallax({
  children,
  offset = 50,
  delay = 0,
  className,
  style,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0, rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const inputStart = delay * 0.3;
  const inputEnd = 1 - (0.3 - delay * 0.3);

  const onScrollTick = useCallback(() => {
    if (!inViewRef.current) return;
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(1, Math.max(0, 1 - (rect.top + rect.height) / (vh + rect.height)));
    const mapped = (progress - inputStart) / (inputEnd - inputStart);
    const clamped = Math.min(1, Math.max(0, mapped));
    const y = offset - clamped * offset * 2;
    inner.style.transform = `translate3d(0,${y}px,0)`;
  }, [offset, inputStart, inputEnd]);

  useScrollCallback(onScrollTick);

  return (
    <div ref={ref} className={className} style={style}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
