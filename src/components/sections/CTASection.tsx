import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { CheckIcon } from "@/components/icons";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

const benefits = [
  "Build without hiring",
  "Scale without friction",
  "Grow with Chorus",
];

export function CTASection() {
  return (
    <section className="relative bg-black h-[632px] flex items-center justify-center overflow-hidden px-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/decorative/cta-bg.png"
          alt=""
          fill
          className="object-cover opacity-50"
        />
        {/* Top decorative line */}
        <div className="absolute top-0 left-[100px] right-[100px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] flex flex-col gap-[50px] items-center text-center">
        <div className="flex flex-col gap-[26px] items-center">
          {/* Headlines */}
          <div className="flex flex-col gap-[40px] items-center">
            {/* Section Title: 50px, bold, 78px line-height, -0.5px letter-spacing */}
            <h2 className="text-[50px] leading-[78px] font-bold text-white tracking-[-0.5px]">
              The Best Companies Don&apos;t Have More People.
              <br />
              They Have Better Coordination.
            </h2>
            {/* Body: 22px, regular, 36px line-height */}
            <p className="text-[22px] leading-[36px] font-normal text-gray-100 max-w-[800px]">
              While competitors spend months hiring and aligning teams, you could
              have a complete, synchronized workforce executing tomorrow.
            </p>
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
