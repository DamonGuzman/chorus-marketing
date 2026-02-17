"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const inputStart = delay * 0.3;
  const inputEnd = 1 - (0.3 - delay * 0.3);

  const rawY = useTransform(
    scrollYProgress,
    [inputStart, inputEnd],
    [offset, -offset]
  );

  const y = useSpring(rawY, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  return (
    <div ref={ref} className={className} style={style}>
      <motion.div className="h-full [&>*]:h-full" style={{ y }}>{children}</motion.div>
    </div>
  );
}
