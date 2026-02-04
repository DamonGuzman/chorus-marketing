import { Section, ButtonLink, PrismaticOrb } from "@/components/ui";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/content/site";

export function FinalCTASection() {
  return (
    <Section className="py-[120px] relative overflow-hidden" id="cta">
      {/* Background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-purple-600/5 to-transparent blur-3xl" />
      </div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-[200px] h-[200px]">
        <div className="w-full h-full rounded-full bg-gradient-to-b from-purple-400/30 to-purple-600/10 blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PrismaticOrb size={149} className="shadow-[0_0_18px_rgba(255,255,255,0.06)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[78px] h-[78px] rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-glow-sm flex items-center justify-center">
              <svg className="w-[30px] h-[30px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1039px] mx-auto px-6 lg:px-[100px] relative z-10 text-center">
        {/* Main Headline */}
        <h2 className="text-[40px] lg:text-[52px] leading-[1.2] font-bold text-white mb-[40px] mt-[100px]">
          The Best Companies Don&apos;t Have More People.{" "}
          <span className="text-gradient">They Have Better Coordination.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[18px] lg:text-[20px] leading-[1.8] font-medium text-gray-300 mb-[50px] max-w-[1039px] mx-auto">
          While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
        </p>

        {/* Feature Points */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-[30px] sm:gap-[50px] mb-[50px]">
          {[
            "Build without hiring",
            "Scale without friction",
            "Grow with Chorus",
          ].map((point, index) => (
            <div key={index} className="flex items-center gap-[12px]">
              <div className="w-[24px] h-[24px] rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
                <svg className="w-[14px] h-[14px] text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[16px] font-medium text-white">{point}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" size="lg" className="px-[40px] py-[16px] text-[16px]">
            {PRIMARY_CTA_LABEL}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
