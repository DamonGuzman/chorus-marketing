"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Section } from "@/components/ui";

const faqs = [
  {
    q: "Is this actually real or is it just hype?",
    a: "100% real. Chorus agents are already handling real work — sending emails, updating CRMs, analyzing data, managing projects. This isn't a demo or a concept. It's production-ready AI that executes.",
  },
  {
    q: "Will AI really replace human employees?",
    a: "You've been reading too much sci-fi. Chorus doesn't replace humans - it helps amplify them and lets them focus on what they're best at: strategy and creativity. AI handles execution and the busy work.",
  },
  {
    q: "How is this different from ChatGPT or other AI assistants?",
    a: "ChatGPT answers questions. Chorus takes action. Our agents don't just suggest — they execute across your tools with full context, guardrails, and audit trails.",
  },
  {
    q: "What if the AI makes mistakes?",
    a: "Every agent operates within rules you define. They can require approval for sensitive actions, stay within budgets, and maintain complete audit trails. You're always in control.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are up and running within a day. Connect your tools, define your agents, set their rules, and they start working immediately.",
  },
  {
    q: "Can I try before I commit?",
    a: "Absolutely. Start with a free trial to see Chorus in action with your own data and workflows. No credit card required.",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  const iconSrc = open
    ? "/images/figma/x-icon.svg"
    : "/images/figma/plus-icon.svg";
  const iconAlt = open ? "Collapse" : "Expand";
  const iconSize = open ? 24 : 17;

  return (
    <div className="w-[32px] h-[32px] flex items-center justify-center shrink-0">
      <Image src={iconSrc} alt={iconAlt} width={iconSize} height={iconSize} />
    </div>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  visible,
  delay,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  visible: boolean;
  delay: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="rounded-[16px] border border-white/10 transition-all duration-500 ease-out"
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)"
          : "rgba(255,255,255,0.03)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-[16px] px-[24px] py-[20px] text-left cursor-pointer"
      >
        <span className="text-white text-[16px] font-semibold leading-[26px]">
          {question}
        </span>
        <PlusIcon open={isOpen} />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[height,opacity] duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{ height, opacity: isOpen ? 1 : 0 }}
      >
        <div className="px-[24px] pb-[20px]">
          <p className="text-gray-300 text-[14px] font-medium leading-[24px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;
    const listEl = listRef.current;
    if (!headerEl || !listEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerEl && entry.isIntersecting) {
            setHeaderVisible(true);
          }
          if (entry.target === listEl && entry.isIntersecting) {
            setItemsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(headerEl);
    observer.observe(listEl);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="pt-[15px] pb-[100px] md:py-[100px]" id="faq">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className="flex flex-col items-center gap-[16px] mb-[50px] text-center transition-all duration-700 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h2 className="text-[40px] md:text-[50px] font-bold leading-[1.1] text-white">
            <span className="bg-gradient-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
              Frequently
            </span>
            <span className="bg-gradient-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
              {" "}
              Asked Questions
            </span>
          </h2>
          <p className="text-[16px] font-semibold leading-[28px] text-gray-300">
            Our commitment to transparency
          </p>
        </div>

        <div ref={listRef} className="max-w-[700px] mx-auto flex flex-col gap-[12px]">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.q}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              visible={itemsVisible}
              delay={index * 80}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
