"use client";

import { useCallback } from "react";
import { Section } from "@/components/ui";
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
    <Section className="px-4 pt-[50px] pb-[80px] md:px-24 md:pt-20 md:pb-36 md:flex md:flex-col md:items-center" id="pricing">
      <div className="flex flex-col justify-start items-center gap-14">
        <div className="flex flex-col justify-start items-center gap-6">
          <Badge className="w-32">
            Pricing
          </Badge>

          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-[28px] leading-[36px] md:text-5xl md:leading-[78px] font-bold font-['Urbanist'] text-white">
              Stop Paying Six Figures Per Employee
            </h2>
            <p className="text-center text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-300">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>
        </div>

          <div className="flex flex-col items-center gap-[40px] w-full">
            <div className="flex flex-wrap items-center justify-center gap-[18px]">
              <span className="text-white text-[16px] md:text-lg leading-6 font-medium font-['Urbanist']">Billed Monthly</span>
              <div className="relative w-14 h-6 bg-gray-600 rounded-[34.42px]">
                <div className="w-4 h-4 p-[2.75px] absolute right-[2px] top-[2.85px] bg-white rounded-[10.32px] shadow-[0px_0px_88.33px_0px_rgba(0,0,0,1)]" />
              </div>
              <div className="inline-flex justify-center items-start">
                <span className="text-white text-[16px] md:text-lg leading-6 font-medium font-['Urbanist']">Billed Annually</span>
                <span className="text-gray-300 text-sm leading-6 font-medium font-['Urbanist']">(Save 35%)</span>
              </div>
            </div>

            {/* Desktop: grid layout */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-10 w-full">
              {plans.map((plan) => {
                const theme = cardThemes[plan.theme];

                return (
                  <div
                    key={plan.name}
                    className={cn(
                      "relative overflow-hidden rounded-[20px] px-[33px] pt-[56px] pb-[40px] min-h-[629px] flex flex-col",
                      theme.card
                    )}
                  >
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                      <div className={cn("absolute inset-0", theme.glow)} />
                      <div className={cn("absolute inset-0", theme.gridLines)} />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
                    </div>

                    <div className="relative z-10 flex flex-col gap-[32px] h-full">
                      <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[12px]">
                          <h3 className={cn("text-[20px] leading-[32px] font-semibold", theme.title)}>
                            {plan.name}
                          </h3>
                          <p className={cn("text-[14px] leading-[28px] font-medium", theme.subtitle)}>
                            {plan.subtitle}
                          </p>
                        </div>

                        <div className="flex flex-col gap-[12px]">
                          <div className="flex items-end gap-[6px]">
                            <span className={cn("font-bold", plan.priceClass, theme.price)}>{plan.price}</span>
                            {plan.period ? (
                              <span className={cn("text-[16px] leading-[28px] font-medium", theme.period)}>
                                {plan.period}
                              </span>
                            ) : null}
                          </div>
                          <p className={cn("text-[16px] leading-[28px] font-medium", theme.description)}>
                            {plan.description}
                          </p>
                        </div>
                      </div>

                      <div
                        className={cn(
                          "h-[48px] w-full rounded-[50px] flex items-center justify-center text-[14px] leading-[24px] font-bold",
                          theme.button
                        )}
                      >
                        Current Plan
                      </div>

                      <div className="flex flex-col gap-[20px]">
                        {plan.features.map((feature, index) => (
                          <div key={`${plan.name}-${index}`} className="flex items-center gap-[12px]">
                            <span className="flex size-[24px] items-center justify-center">
                              <CheckIcon className={cn("w-[16px] h-[11px]", theme.icon)} />
                            </span>
                            <span className={cn("text-[16px] leading-[24px] font-medium", theme.feature)}>
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
                        "relative overflow-hidden rounded-[20px] px-[28px] pt-[44px] pb-[32px] flex flex-col snap-center",
                        plan.theme === "light"
                          ? "w-[min(300px,78vw)] min-h-[580px]"
                          : "w-[min(260px,68vw)] min-h-[520px] opacity-80",
                        theme.card
                      )}
                    >
                      <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className={cn("absolute inset-0", theme.glow)} />
                        <div className={cn("absolute inset-0", theme.gridLines)} />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%)]" />
                      </div>

                      <div className="relative z-10 flex flex-col gap-[24px] h-full">
                        <div className="flex flex-col gap-[20px]">
                          <div className="flex flex-col gap-[10px]">
                            <h3 className={cn("text-[18px] leading-[28px] font-semibold", theme.title)}>
                              {plan.name}
                            </h3>
                            <p className={cn("text-[13px] leading-[24px] font-medium", theme.subtitle)}>
                              {plan.subtitle}
                            </p>
                          </div>

                          <div className="flex flex-col gap-[10px]">
                            <div className="flex items-end gap-[6px]">
                              <span className={cn("font-bold", plan.priceClass, theme.price)}>{plan.price}</span>
                              {plan.period ? (
                                <span className={cn("text-[14px] leading-[24px] font-medium", theme.period)}>
                                  {plan.period}
                                </span>
                              ) : null}
                            </div>
                            <p className={cn("text-[14px] leading-[24px] font-medium", theme.description)}>
                              {plan.description}
                            </p>
                          </div>
                        </div>

                        <div
                          className={cn(
                            "h-[44px] w-full rounded-[50px] flex items-center justify-center text-[13px] leading-[24px] font-bold",
                            theme.button
                          )}
                        >
                          Current Plan
                        </div>

                        <div className="flex flex-col gap-[16px]">
                          {plan.features.map((feature, index) => (
                            <div key={`${plan.name}-m-${index}`} className="flex items-center gap-[10px]">
                              <span className="flex size-[20px] items-center justify-center">
                                <CheckIcon className={cn("w-[14px] h-[10px]", theme.icon)} />
                              </span>
                              <span className={cn("text-[14px] leading-[22px] font-medium", theme.feature)}>
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
