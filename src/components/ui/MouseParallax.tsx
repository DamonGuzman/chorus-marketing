"use client";

import { useRef, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MouseParallaxProps {
  children: ReactNode;
  strength?: number;
  tilt?: number;
  className?: string;
}

export function MouseParallax({
  children,
  strength = 1,
  tilt = 1,
  className,
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spring = { damping: 20, stiffness: 300, mass: 0.3 };
  const smoothX = useSpring(mouseX, spring);
  const smoothY = useSpring(mouseY, spring);

  const moveX = useTransform(smoothX, [-1, 1], [-20 * strength, 20 * strength]);
  const moveY = useTransform(smoothY, [-1, 1], [-15 * strength, 15 * strength]);
  const rotateX = useTransform(smoothY, [-1, 1], [3 * tilt, -3 * tilt]);
  const rotateY = useTransform(smoothX, [-1, 1], [-3 * tilt, 3 * tilt]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <motion.div
        style={{ x: moveX, y: moveY, rotateX, rotateY, perspective: 1000 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
