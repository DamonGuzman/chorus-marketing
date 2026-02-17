import Image from "next/image";
import { AnimateOnScroll, ButtonLink, ScrollTextReveal } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

const benefits = [
  "Build without hiring",
  "Scale without friction",
  "Grow with Chorus",
];

export function CTASection() {
  return (
    <section className="relative bg-black h-[632px] flex items-center justify-center overflow-hidden px-8">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top decorative line */}
        <div className="absolute top-0 left-[100px] right-[100px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent z-[2]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] flex flex-col gap-[50px] items-center text-center">
        <div className="flex flex-col gap-[26px] items-center">
          {/* Headlines */}
          <div className="flex flex-col gap-[40px] items-center">
            {/* Section Title: 50px, bold, 78px line-height, -0.5px letter-spacing */}
            <ScrollTextReveal
              text="The Best Companies Don't Have More People. They Have Better Coordination."
              className="text-[50px] leading-[78px] font-bold tracking-[-0.5px]"
            />
            {/* Body: 22px, regular, 36px line-height */}
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="text-[22px] leading-[36px] font-normal text-gray-100 max-w-[800px]">
                While competitors spend months hiring and aligning teams, you could
                have a complete, synchronized workforce executing tomorrow.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-[25px]">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-[20px] px-[30px] h-[50px] rounded-[50px] border border-white/[0.34] backdrop-blur-[30px]"
              >
                <CheckIcon className="w-[18px] h-[12px] text-white" />
                {/* Caption: 16px, medium, 24px line-height */}
                <span className="text-[16px] leading-[24px] font-medium text-gray-100">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" size="lg">
          {PRIMARY_CTA_LABEL}
        </ButtonLink>
      </div>
    </section>
  );
}
