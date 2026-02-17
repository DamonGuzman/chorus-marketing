import { AnimateOnScroll, Badge, Section, ScrollTextReveal, StaggerChildren, ScrollParallax } from "@/components/ui";
import { cn } from "@/lib/utils";

function InlinePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-[18px] border border-white/15 bg-transparent",
        "px-[11px] py-[4px]",
        "shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "font-['Urbanist'] text-[18px] font-normal text-gray-100 md:text-base lg:text-2xl",
        className
      )}
    >
      {children}
    </span>
  );
}

export function AIWorkforceSection() {
  return (
    <Section
      className="self-stretch bg-black px-4 py-10 md:px-8 md:py-20 inline-flex md:flex flex-col justify-start items-center gap-6 md:gap-16 overflow-hidden"
      id="ai-workforce"
    >
      {/* Header */}
      <Badge>What Chorus Actually Is</Badge>

      <div className="flex flex-col justify-start items-center gap-4">
        <ScrollTextReveal
          text="Your AI Workforce. Always in Sync."
          className="w-full md:w-auto text-center text-2xl leading-8 font-bold font-['Urbanist'] md:text-3xl md:leading-[42px] lg:text-5xl lg:leading-[78px]"
        />

        {/* Description */}
        <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
          <div className="w-full md:max-w-[1108px] text-center font-['Urbanist'] text-sm leading-6 font-normal text-gray-300 md:text-base md:leading-7 lg:text-xl lg:leading-9">
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9">Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you
            autonomous agents that coordinate with each other and run your </span>
            <span className="text-white text-sm md:text-base lg:text-xl font-medium font-['Urbanist'] leading-6 md:leading-9">Sales, Marketing, Finance, Operations, Customer Success</span>
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9"> - any department you need.</span>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Cards area */}
      <div className="flex w-full flex-col items-center">
        {/* Mobile: stacked layout */}
        <div className="flex w-full flex-col items-center gap-0 md:hidden">
          <p className="text-center font-['Urbanist'] text-sm font-normal leading-5 text-gray-300">
            You don&apos;t coordinate.You{" "}
            <span className="text-gray-100">orchestrate</span>
          </p>
          <img
            src="/images/figma/Frame 1707484612-1.svg"
            alt="AI Agent chat card"
            className="w-80 h-[260px] rotate-[-4deg]"
          />

          <p className="text-center font-['Urbanist'] text-sm font-normal leading-6 text-gray-400">
            They <span className="text-gray-100">execute.</span>{" "}
            They <span className="text-gray-100">deliver.</span>
          </p>
          <img
            src="/images/figma/Frame 1707484613.svg"
            alt="Tasks card"
            className="w-80 h-[260px] rotate-[3.5deg]"
          />

          <p className="text-center font-['Urbanist'] text-sm font-normal leading-6 text-gray-400">
            Skip management.{" "}
            <span className="text-gray-100">Set goals.</span>
          </p>
          <img
            src="/images/figma/Frame 1707484612.svg"
            alt="Radar card"
            className="w-80 h-[260px] rotate-[3deg]"
          />
        </div>

          {/* Desktop: overlapping 3-card layout */}
          <StaggerChildren staggerDelay={150} className="hidden md:block md:max-w-[600px] lg:max-w-none mx-auto">
            {/* Labels row */}
            <div className="flex items-start justify-between mb-2">
            <p className="font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal leading-10 text-gray-300 text-right md:translate-x-[20px] lg:translate-x-[40px] rotate-[-3deg] translate-y-[10px] -mt-[20px]">
                You don&apos;t coordinate.You{" "}
                <InlinePill>orchestrate</InlinePill>
              </p>
              <p className="font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal leading-10 text-gray-300 text-right md:translate-x-[20px] lg:translate-x-[40px] rotate-[-3deg] translate-y-[10px] -mt-[20px]">
                They{" "}
                <InlinePill>execute.</InlinePill>{" "}
                They{" "}
                <InlinePill>deliver.</InlinePill>
              </p>
            </div>

            {/* Cards row — overlapping */}
            <div className="flex items-start justify-center">
              <ScrollParallax offset={30} delay={0} className="w-[36%] -mr-[3.5%] relative z-0">
                <img
                  src="/images/figma/Frame 1707484612.svg"
                  alt="Radar card"
                  className="w-full"
                />
              </ScrollParallax>
              <ScrollParallax offset={30} delay={0.5} className="w-[37%] relative z-10 mt-[10px]">
                <img
                  src="/images/figma/Frame 1707484612-1.svg"
                  alt="AI Agent chat card"
                  className="w-full"
                />
              </ScrollParallax>
              <ScrollParallax offset={30} delay={1} className="w-[36%] -ml-[3.5%] relative z-11 translate-y-[20px]">
                <img
                  src="/images/figma/Frame 1707484613.svg"
                  alt="Tasks card"
                  className="w-full"
                />
              </ScrollParallax>
            </div>

            {/* Bottom label */}
            <p className="mt-2 text-center font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal text-gray-300 md:translate-x-[20px] lg:translate-x-[40px] rotate-[3deg]">
              Skip management.{" "}
              <InlinePill>Set goals.</InlinePill>
            </p>
          </StaggerChildren>
        </div>
    </Section>
  );
}
