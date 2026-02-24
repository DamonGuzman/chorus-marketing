"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  /** How far the element shifts (px). Default 50 */
  offset?: number;
  /**
   * Stagger delay (0–1). Shifts when the card starts moving within the
   * scroll range. 0 = moves first, higher = moves later. Default 0.
   */
  delay?: number;
  /** Extra CSS classes */
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
  const rafRef = useRef(0);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const observer = new IntersectionObserver(
      ([entry]) => { inViewRef.current = entry.isIntersecting; },
      { threshold: 0, rootMargin: "100px" },
    );
    observer.observe(el);

    const inputStart = delay * 0.3;
    const inputEnd = 1 - (0.3 - delay * 0.3);

    const onScroll = () => {
      if (!inViewRef.current) return;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.min(1, Math.max(0, 1 - (rect.top + rect.height) / (vh + rect.height)));
        const mapped = (progress - inputStart) / (inputEnd - inputStart);
        const clamped = Math.min(1, Math.max(0, mapped));
        const y = offset - clamped * offset * 2;
        inner.style.transform = `translate3d(0,${y}px,0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [offset, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
