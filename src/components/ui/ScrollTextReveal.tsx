"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface ScrollTextRevealProps {
  /** Plain string or array of lines */
  text: string | string[];
  /** CSS class for the outer wrapper */
  className?: string;
  /** Inline styles for the outer wrapper */
  style?: CSSProperties;
  /** Dim colour for unread words. Default: rgba(255,255,255,0.25) */
  dimColor?: string;
  /** Bright colour for revealed words. Default: #ffffff */
  brightColor?: string;
}

function Word({
  word,
  scrollYProgress,
  start,
  end,
  dimColor,
  brightColor,
}: {
  word: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
  dimColor: string;
  brightColor: string;
}) {
  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const color = useTransform(progress, [0, 1], [dimColor, brightColor]);

  return (
    <motion.span
      style={{ color }}
      className="inline-block mr-[0.3em] will-change-[color] transition-none"
    >
      {word}
    </motion.span>
  );
}

export function ScrollTextReveal({
  text,
  className,
  style,
  dimColor = "rgba(255,255,255,0.25)",
  brightColor = "#ffffff",
}: ScrollTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const lines = Array.isArray(text) ? text : [text];

  const allWords: { word: string; lineIdx: number }[] = [];
  lines.forEach((line, lineIdx) => {
    line
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word) => {
        allWords.push({ word, lineIdx });
      });
  });

  const totalWords = allWords.length;

  let globalCounter = 0;

  return (
    <div ref={containerRef} className={className} style={style}>
      {lines.map((_, lineIdx) => {
        const lineWords = allWords.filter((w) => w.lineIdx === lineIdx);

        return (
          <div key={lineIdx} className="block">
            {lineWords.map((w, wordIdxInLine) => {
              const idx = globalCounter++;
              const wordStart = idx / totalWords;
              const wordEnd = (idx + 1) / totalWords;

              return (
                <Word
                  key={`${lineIdx}-${wordIdxInLine}`}
                  word={w.word}
                  scrollYProgress={scrollYProgress}
                  start={wordStart}
                  end={wordEnd}
                  dimColor={dimColor}
                  brightColor={brightColor}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
