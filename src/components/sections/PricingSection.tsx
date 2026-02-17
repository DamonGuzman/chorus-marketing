"use client";

import { useCallback } from "react";
import { AnimateOnScroll, Section, ScrollTextReveal, StaggerChildren, ScrollParallax } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui";

const cardThemes = {
  dark: {
    card:
      "bg-gradient-to-l from-stone-950 to-neutral-800 border border-white/30 backdrop-blur-[30px] shadow-[inset_0px_0px_40px_rgba(255,255,255,0.08)]",
    glow: "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_65%)]",
    gridLines:
      "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px] opacity-45",
    title: "text-white",
    subtitle: "text-gray-200",
    price: "text-white",
    period: "text-gray-200",
    description: "text-gray-200",
    feature: "text-gray-200",
    icon: "text-gray-200",
    button: "border border-white/40 text-white/80 opacity-40",
  },
  light: {
    card:
      "bg-[linear-gradient(180deg,#E8E8E8_0%,#F0F0F0_40%,#F7F7F7_100%)] border border-black/10 shadow-[0px_24px_70px_rgba(0,0,0,0.45)]",
    glow: "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)]",
    gridLines:
      "bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:56px_56px] opacity-30",
    title: "text-[#1C2033]",
    subtitle: "text-[#6B6F7A]",
    price: "text-[#1C2033]",
    period: "text-[#4B4F5C]",
    description: "text-[#4B4F5C]",
    feature: "text-[#20242F]",
    icon: "text-[#20242F]",
    button: "bg-[#242424] text-white border border-[#242424]",
  },
} as const;

type PlanTheme = keyof typeof cardThemes;

type PricingPlan = {
  name: string;
  subtitle: string;
  price: string;
  priceClass: string;
  period?: string;
  description: string;
  features: string[];
  theme: PlanTheme;
};

const plans: PricingPlan[] = [
  {
    name: "Personal",
    subtitle: "Perfect plan for starters",
    price: "Free",
    priceClass: "text-[36px] leading-[48px] md:text-[24px] md:leading-[32px] lg:text-[36px] lg:leading-[48px]",
    description: "Right for new businesses",
    features: [
      "300 emails/day",
      "Customizable email templates",
      "Drag & drop editor",
      "Transactional emails",
      "SMS & WhatsApp campaigns",
    ],
    theme: "dark",
  },
  {
    name: "Professional",
    subtitle: "Perfect plan for starters",
    price: "$89",
    priceClass: "text-[48px] leading-[48px] md:text-[28px] md:leading-[36px] lg:text-[48px] lg:leading-[48px]",
    period: "/ Month",
    description: "Right for new businesses",
    features: [
      "From 20k emails/month",
      "Marketing automation",
      "Drag & drop editor",
      "Website with Unlimited Pages",
      "Transactional emails",
      "SMS & WhatsApp campaigns",
    ],
    theme: "light",
  },
  {
    name: "Enterprise",
    subtitle: "Perfect plan for starters",
    price: "Customize Price",
    priceClass: "text-[36px] leading-[48px] md:text-[24px] md:leading-[32px] lg:text-[36px] lg:leading-[48px]",
    description: "Right for new businesses",
    features: [
      "300 emails/day",
      "Customizable email templates",
      "Drag & drop editor",
      "Transactional emails",
      "SMS & WhatsApp campaigns",
    ],
    theme: "dark",
  },
];

export function PricingSection() {
  // Ref callback — fires synchronously when the DOM node mounts, before paint
  const scrollRef = useCallback((el: HTMLDivElement | null) => {
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-plan='Professional']");
    if (!card) return;
    el.scrollLeft = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2;
  }, []);

  return (
    <Section className="px-4 pt-10 pb-10 md:px-8 md:pt-20 md:pb-36 md:flex md:flex-col md:items-center" id="pricing">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col justify-start items-center gap-6 md:gap-14">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <Badge className="w-32">
            Pricing
          </Badge>

          <div className="flex flex-col justify-start items-center gap-5 md:gap-4">
            <ScrollTextReveal
              text="Stop Paying Six Figures Per Employee"
              className="w-80 md:w-auto text-center text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl lg:leading-[78px] font-bold font-['Urbanist']"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="w-80 md:w-auto text-center text-sm leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-300">
                More than just integrations, 10,000+ tools that can adapt — turning automation into intuition.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

          <div className="flex flex-col items-center gap-[40px] w-full">
            <div className="flex flex-wrap items-center justify-center gap-[18px]">
              <span className="text-white text-sm md:text-lg leading-5 md:leading-6 font-medium font-['Urbanist']">Billed Monthly</span>
              <div className="relative w-10 h-5 md:w-14 md:h-6 bg-gray-600 rounded-3xl">
                <div className="w-3.5 h-3.5 md:w-4 md:h-4 p-0.5 absolute right-[2px] top-[2.17px] md:top-[2.85px] bg-white rounded-lg md:rounded-[10.32px] shadow-[0px_0px_67px_0px_rgba(0,0,0,1)] md:shadow-[0px_0px_88.33px_0px_rgba(0,0,0,1)]" />
              </div>
              <div className="inline-flex justify-center items-start">
                <span className="text-white text-sm md:text-lg leading-5 md:leading-6 font-medium font-['Urbanist']">Billed Annually</span>
                <span className="text-gray-300 text-xs md:text-sm leading-5 md:leading-6 font-medium font-['Urbanist']">(Save 35%)</span>
              </div>
            </div>

            {/* Desktop: grid layout */}
            <StaggerChildren staggerDelay={150} className="hidden md:grid md:grid-cols-3 md:gap-5 lg:gap-10 w-full">
              {plans.map((plan) => {
                const theme = cardThemes[plan.theme];
                return (
                  <ScrollParallax key={plan.name} offset={30} delay={plans.indexOf(plan) / 2}>
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-[20px] px-[16px] pt-[24px] pb-[20px] lg:px-[33px] lg:pt-[56px] lg:pb-[40px] min-h-[380px] lg:min-h-[629px] flex flex-col",
                      theme.card
                    )}
                  >
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                      <div className={cn("absolute inset-0", theme.glow)} />
                      <img
                        src="/images/figma/design.svg"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{
                          opacity: plan.theme === "light" ? 0.8 : 0.7,
                          filter: plan.theme === "light" ? "invert(1)" : "none",
                        }}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-[14px] lg:gap-[32px] h-full">
                      <div className="flex flex-col gap-[14px] lg:gap-[24px]">
                        <div className="flex flex-col gap-[6px] lg:gap-[12px]">
                          <h3 className={cn("text-[16px] lg:text-[20px] leading-[24px] lg:leading-[32px] font-semibold", theme.title)}>
                            {plan.name}
                          </h3>
                          <p className={cn("text-[12px] lg:text-[14px] leading-[20px] lg:leading-[28px] font-medium", theme.subtitle)}>
                            {plan.subtitle}
                          </p>
                        </div>

                        <div className="flex flex-col gap-[8px] lg:gap-[12px]">
                          <div className="flex items-end gap-[6px]">
                            <span className={cn("font-bold", plan.priceClass, theme.price)}>{plan.price}</span>
                            {plan.period ? (
                              <span className={cn("text-[13px] lg:text-[16px] leading-[22px] lg:leading-[28px] font-medium", theme.period)}>
                                {plan.period}
                              </span>
                            ) : null}
                          </div>
                          <p className={cn("text-[13px] lg:text-[16px] leading-[22px] lg:leading-[28px] font-medium", theme.description)}>
                            {plan.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "h-[38px] lg:h-[48px] w-full rounded-[50px] flex items-center justify-center text-[12px] lg:text-[14px] leading-[24px] font-bold",
                          theme.button
                        )}
                      >
                        Current Plan
                      </div>

                      <div className="flex flex-col gap-[12px] lg:gap-[20px]">
                        {plan.features.map((feature, index) => (
                          <div key={`${plan.name}-${index}`} className="flex items-center gap-[8px] lg:gap-[12px]">
                            <span className="flex size-[20px] lg:size-[24px] items-center justify-center">
                              <CheckIcon className={cn("w-[13px] lg:w-[16px] h-[9px] lg:h-[11px]", theme.icon)} />
                            </span>
                            <span className={cn("text-[13px] lg:text-[16px] leading-[20px] lg:leading-[24px] font-medium", theme.feature)}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  </ScrollParallax>
                );
              })}
            </StaggerChildren>

            {/* Mobile: horizontal scroll, Professional card centered initially */}
            <div ref={scrollRef} className="md:hidden w-full -mx-4 px-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-[16px] w-max">
                {/* Original order — scroll auto-centers on Professional card */}
                {[plans[0], plans[1], plans[2]].map((plan) => {
                  const theme = cardThemes[plan.theme];

                  return (
                    <div
                      key={plan.name}
                      data-plan={plan.name}
                      className={cn(
                        "relative overflow-hidden rounded-xl px-[20px] pt-[32px] pb-[24px] flex flex-col snap-center border-[0.55px] border-white/30 backdrop-blur-lg",
                        plan.theme === "light"
                          ? "w-52 h-[357px]"
                          : "w-52 h-[357px] opacity-80",
                        theme.card
                      )}
                    >
                      <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className={cn("absolute inset-0", theme.glow)} />
                        <img
                          src="/images/figma/design.svg"
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{
                            opacity: plan.theme === "light" ? 0.8 : 0.7,
                            filter: plan.theme === "light" ? "invert(1)" : "none",
                          }}
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
                      </div>

                      <div className="relative z-10 flex flex-col gap-[14px] h-full">
                        <div className="flex flex-col gap-[12px]">
                          <div className="flex flex-col gap-[4px]">
                            <h3 className={cn("text-[14px] leading-[20px] font-semibold", theme.title)}>
                              {plan.name}
                            </h3>
                            <p className={cn("text-[10px] leading-[16px] font-medium", theme.subtitle)}>
                              {plan.subtitle}
                            </p>
                          </div>

                          <div className="flex flex-col gap-[4px]">
                            <div className="flex items-end gap-[4px]">
                              <span className={cn("font-bold text-[24px] leading-[32px]", theme.price)}>{plan.price}</span>
                              {plan.period ? (
                                <span className={cn("text-[10px] leading-[16px] font-medium", theme.period)}>
                                  {plan.period}
                                </span>
                              ) : null}
                            </div>
                            <p className={cn("text-[10px] leading-[16px] font-medium", theme.description)}>
                              {plan.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "h-[32px] w-full rounded-[50px] flex items-center justify-center text-[10px] leading-[16px] font-bold",
                            theme.button
                          )}
                        >
                          Current Plan
                        </div>

                        <div className="flex flex-col gap-[10px]">
                          {plan.features.map((feature, index) => (
                            <div key={`${plan.name}-m-${index}`} className="flex items-center gap-[6px]">
                              <span className="flex size-[14px] items-center justify-center shrink-0">
                                <CheckIcon className={cn("w-[10px] h-[7px]", theme.icon)} />
                              </span>
                              <span className={cn("text-[10px] leading-[14px] font-medium", theme.feature)}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
}
