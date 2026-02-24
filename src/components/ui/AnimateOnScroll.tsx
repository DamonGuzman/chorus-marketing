"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ============================================================
   Animation presets — CSS transform strings (GPU-composited)
   ============================================================ */

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in";

const hiddenStyles: Record<AnimationType, CSSProperties> = {
  "fade-up":      { opacity: 0, transform: "translateY(50px)" },
  "fade-in":      { opacity: 0 },
  "fade-down":    { opacity: 0, transform: "translateY(-30px)" },
  "slide-left":   { opacity: 0, transform: "translateX(-60px)" },
  "slide-right":  { opacity: 0, transform: "translateX(120px) scale(0.95)" },
  "scale-up":     { opacity: 0, transform: "scale(0.92)" },
  "blur-in":      { opacity: 0, transform: "scale(0.98)" },
};

const visibleStyles: Record<AnimationType, CSSProperties> = {
  "fade-up":      { opacity: 1, transform: "translateY(0)" },
  "fade-in":      { opacity: 1 },
  "fade-down":    { opacity: 1, transform: "translateY(0)" },
  "slide-left":   { opacity: 1, transform: "translateX(0)" },
  "slide-right":  { opacity: 1, transform: "translateX(0) scale(1)" },
  "scale-up":     { opacity: 1, transform: "scale(1)" },
  "blur-in":      { opacity: 1, transform: "scale(1)" },
};

/* ============================================================
   AnimateOnScroll  —  CSS transitions + IntersectionObserver
   ============================================================ */

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.7,
  threshold = 0.12,
  once = true,
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const baseStyles = isVisible ? visibleStyles[animation] : hiddenStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyles,
        transition: `opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   StaggerChildren  —  CSS transitions + Intersection Observer
   Works with grids, flex, and any layout without extra wrappers.
   ============================================================ */

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
}

export function StaggerChildren({
  children,
  staggerDelay = 100,
  threshold = 0.1,
  className,
  style,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "scroll-stagger",
        isVisible && "is-visible",
        className
      )}
      style={
        {
          "--stagger-delay": `${staggerDelay}ms`,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
