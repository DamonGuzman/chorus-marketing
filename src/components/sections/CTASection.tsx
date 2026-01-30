import { Button } from "@/components/ui";
import { CheckIcon } from "@/components/icons";

const benefits = [
  "Build without hiring",
  "Scale without friction",
  "Grow with Chorus",
];

export function CTASection() {
  return (
    <section className="relative bg-black h-[632px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[50px] right-[50px] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1039px] flex flex-col gap-[50px] items-center text-center px-6">
        <div className="flex flex-col gap-[26px] items-center">
          {/* Headlines */}
          <div className="flex flex-col gap-[40px] items-center">
            <h2 className="text-[50px] leading-[68px] font-bold text-white tracking-[-0.5px]">
              The Best Companies Don&apos;t Have More People.
              <br />
              They Have Better Coordination.
            </h2>
            <p className="text-[22px] leading-[36px] font-normal text-gray-100">
              While competitors spend months hiring and aligning teams, you could
              have a complete, synchronized workforce executing tomorrow.
            </p>
          </div>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-[25px]">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-5 px-[30px] py-[30px] h-[50px] rounded-pill border border-white/34 backdrop-blur-[30px]"
              >
                <CheckIcon className="w-[18px] h-[12px] text-white" />
                <span className="text-base font-medium text-gray-100">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
