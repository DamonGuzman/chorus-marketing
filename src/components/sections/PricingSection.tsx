"use client";

import { Section, ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

const plans = [
  {
    name: "Starter",
    subtitle: "Pay as you go",
    price: "$0.12",
    period: "/ agent-hour",
    description: "For individuals and small teams",
    features: [
      "Up to 5 agents",
      "Core integrations",
      "Shared workspace",
      "Basic audit trail",
    ],
    cta: PRIMARY_CTA_LABEL,
    highlighted: false,
  },
  {
    name: "Team",
    subtitle: "Built for coordination",
    price: "$0.10",
    period: "/ agent-hour",
    description: "For growing teams and departments",
    features: [
      "Up to 25 agents",
      "Advanced integrations",
      "Approval workflows",
      "Priority support",
    ],
    cta: PRIMARY_CTA_LABEL,
    highlighted: true,
  },
  {
    name: "Enterprise",
    subtitle: "Custom security & scale",
    price: "Custom",
    period: "",
    description: "For large orgs with compliance needs",
    features: [
      "Unlimited agents",
      "SSO / SAML",
      "Dedicated environments",
      "Custom SLAs",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <Section className="py-[100px]" id="pricing">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <h2 className="text-[35px] leading-[1.1] font-bold text-white mb-[15px]">
            Stop Paying Six Figures Per Employee
          </h2>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            Usage-based pricing that scales with output—not headcount. Volume discounts available for committed usage.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-[24px] p-[32px] transition-all",
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-500/20 to-purple-600/5 border-2 border-purple-500/50 shadow-glow"
                  : "bg-gray-950 border border-white/10 hover:border-white/20"
              )}
            >
              {/* Plan Header */}
              <div className="mb-[24px]">
                <h3 className="text-[14px] font-bold text-white mb-[8px]">{plan.name}</h3>
                <p className="text-[10px] text-gray-400">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="mb-[16px]">
                <div className="flex items-baseline gap-[4px]">
                  <span className={cn(
                    "font-bold text-white",
                    "text-[28px]"
                  )}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[11px] text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-[11px] text-gray-400 mt-[8px]">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-[16px] mb-[32px]">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-[12px]">
                    <div className={cn(
                      "w-[24px] h-[24px] rounded-full flex items-center justify-center shrink-0",
                      plan.highlighted
                        ? "bg-purple-500/20"
                        : "bg-white/5"
                    )}>
                      <svg
                        className={cn(
                          "w-[14px] h-[14px]",
                          plan.highlighted ? "text-purple-400" : "text-gray-400"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[11px] text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <ButtonLink
                href={plan.cta === PRIMARY_CTA_LABEL ? PRIMARY_CTA_HREF : "/contact"}
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
