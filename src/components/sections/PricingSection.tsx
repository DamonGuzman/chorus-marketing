"use client";

import { useCallback } from "react";
import { Section, ScrollTextReveal, AnimateOnScroll } from "@/components/ui";
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
      "bg-[linear-gradient(180deg,#E8E8E8_0%,#F0F0F0_40%,#F7F7F7_100%)] border border-white/30 backdrop-blur-[30px] shadow-[0px_24px_70px_rgba(0,0,0,0.45)]",
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
    priceClass: "text-[36px] leading-[48px]",
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
    priceClass: "text-[48px] leading-[48px]",
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
    priceClass: "text-[36px] leading-[48px]",
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
    <Section className="px-4 pt-10 pb-10 md:px-8 md:pt-20 md:pb-36 flex flex-col items-center" id="pricing">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-14">
        <div className="self-stretch flex flex-col justify-start items-center gap-1">
          <Badge className="w-32">
            Pricing
          </Badge>

          <div className="flex flex-col justify-start items-center gap-2">
            <ScrollTextReveal
              text="Stop Paying Six Figures Per Employee"
              className="text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[78px] text-center"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="text-center text-gray-300 text-base md:text-xl lg:text-2xl font-medium font-['Urbanist'] leading-7 md:leading-9">
                The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
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

            {/* Desktop: flex layout */}
            <div className="hidden lg:inline-flex justify-start items-start gap-10">
              {plans.map((plan) => {
                const theme = cardThemes[plan.theme];

                return (
                  <div
                    key={plan.name}
                    className={cn(
                      "relative overflow-hidden rounded-[20px] px-[33px] pt-[57px] pb-[40px] w-96 h-[629px] flex flex-col",
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

                    <div className="relative z-10 inline-flex flex-col justify-start items-start gap-8">
                      <div className="flex flex-col justify-start items-start gap-9">
                        <div className="flex flex-col justify-start items-start gap-5">
                          <div className="flex flex-col justify-start items-start gap-3">
                            <h3 className={cn("text-xl font-semibold font-['Urbanist'] leading-8", theme.title)}>
                              {plan.name}
                            </h3>
                            <p className={cn("text-sm font-medium font-['Urbanist'] leading-7", theme.subtitle)}>
                              {plan.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-3">
                          <div className="inline-flex justify-start items-center gap-0.5">
                            <span className={cn("font-bold font-['Urbanist']", plan.priceClass, theme.price)}>{plan.price}</span>
                            {plan.period ? (
                              <span className={cn("text-base font-medium font-['Urbanist'] leading-7", theme.period)}>
                                {plan.period}
                              </span>
                            ) : null}
                          </div>
                          <p className={cn("text-base font-medium font-['Urbanist'] leading-7", theme.description)}>
                            {plan.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "w-80 h-12 px-8 py-3 rounded-[50px] inline-flex justify-center items-center gap-2 overflow-hidden text-sm font-bold font-['Urbanist'] leading-6",
                          theme.button
                        )}
                      >
                        Current Plan
                      </div>

                      <div className="flex flex-col justify-start items-start gap-5">
                        {plan.features.map((feature, index) => (
                          <div key={`${plan.name}-${index}`} className="inline-flex justify-start items-center gap-3">
                            <span className="flex size-6 items-center justify-center">
                              <CheckIcon className={cn("w-4 h-[11px]", theme.icon)} />
                            </span>
                            <span className={cn("text-base font-medium font-['Urbanist'] leading-6", theme.feature)}>
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

            {/* Mobile: horizontal scroll, Professional card centered initially */}
            <div ref={scrollRef} className="lg:hidden w-full -mx-4 px-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-[16px] w-max">
                {/* Original order — scroll auto-centers on Professional card */}
                {[plans[0], plans[1], plans[2]].map((plan) => {
                  const theme = cardThemes[plan.theme];

                  return (
                    <div
                      key={plan.name}
                      data-plan={plan.name}
                      className={cn(
                        "relative overflow-hidden rounded-xl border-[0.55px] border-white/30 backdrop-blur-lg flex flex-col snap-center",
                        "w-52 h-96 px-5 pt-8 pb-6",
                        plan.theme === "light" ? "" : "opacity-80",
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

                      <div className="relative z-10 flex flex-col gap-4 h-full">
                        <div className="flex flex-col gap-3">
                          <div className="flex flex-col gap-1.5">
                            <h3 className={cn("text-sm leading-5 font-semibold font-['Urbanist']", theme.title)}>
                              {plan.name}
                            </h3>
                            <p className={cn("text-[10px] leading-4 font-medium font-['Urbanist']", theme.subtitle)}>
                              {plan.subtitle}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-end gap-1">
                              <span className={cn("font-bold font-['Urbanist'] text-[28px] leading-[36px]", theme.price)}>{plan.price}</span>
                              {plan.period ? (
                                <span className={cn("text-[10px] leading-4 font-medium font-['Urbanist']", theme.period)}>
                                  {plan.period}
                                </span>
                              ) : null}
                            </div>
                            <p className={cn("text-[10px] leading-4 font-medium font-['Urbanist']", theme.description)}>
                              {plan.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "h-9 w-full rounded-[50px] flex items-center justify-center text-[10px] leading-4 font-bold font-['Urbanist']",
                            theme.button
                          )}
                        >
                          Current Plan
                        </div>

                        <div className="flex flex-col gap-3">
                          {plan.features.map((feature, index) => (
                            <div key={`${plan.name}-m-${index}`} className="flex items-center gap-2">
                              <span className="flex size-4 shrink-0 items-center justify-center">
                                <CheckIcon className={cn("w-3 h-[8px]", theme.icon)} />
                              </span>
                              <span className={cn("text-[10px] leading-[14px] font-medium font-['Urbanist']", theme.feature)}>
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
