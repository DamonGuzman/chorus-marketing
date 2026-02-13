import { Badge, Section } from "@/components/ui";
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
        "font-['Urbanist'] text-[18px] font-normal text-gray-100 md:text-2xl",
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
      className="relative bg-black px-4 py-[50px] md:px-[100px] md:py-20 md:flex md:flex-col md:items-center overflow-hidden"
      id="ai-workforce"
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-[50px] md:gap-16">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-center gap-[30px] md:gap-10">
          <div className="self-stretch flex flex-col justify-start items-center gap-[20px] md:gap-6">
            <Badge>What Chorus Actually Is</Badge>

            {/* Title */}
            <div className="flex flex-col justify-start items-center gap-10">
              <h2 className="text-center text-white text-[32px] font-bold font-['Urbanist'] leading-[1.3] md:text-5xl md:leading-[78px]">
                Your AI Workforce. Always in Sync.
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:max-w-[1108px] text-center font-['Urbanist'] text-[16px] font-normal leading-[28px] text-gray-300 md:text-xl md:leading-9">
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9">Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you
            autonomous agents that coordinate with each other and run your </span>
            <span className="text-white md:text-xl font-medium font-['Urbanist'] md:leading-9">Sales, Marketing, Finance, Operations, Customer Success</span>
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9"> - any department you need.</span>
          </div>
        </div>

        {/* Cards area */}
        <div className="flex w-full flex-col items-center">
          {/* Mobile: stacked layout */}
          <div className="flex w-full flex-col items-center gap-[22px] md:hidden">
            <p className="text-center font-['Urbanist'] text-[18px] font-normal leading-[28px] text-gray-300 rotate-[-3deg] translate-x-[40px] translate-y-[10px] -mt-[20px]">
              You don&apos;t coordinate.You{" "}
              <InlinePill>orchestrate</InlinePill>
            </p>
            <img
              src="/images/figma/Frame 1707484612-1.svg"
              alt="AI Agent chat card"
              className="w-full max-w-[393px]"
            />

            <p className="text-center font-urbanist text-[18px] font-normal leading-[28px] rotate-[-3deg] text-[#7D7C83]">
              They <InlinePill>execute.</InlinePill>{" "}
              They <InlinePill>deliver.</InlinePill>
            </p>
            <img
              src="/images/figma/Frame 1707484613.svg"
              alt="Tasks card"
              className="w-full max-w-[393px]"
            />

            <p className="text-center font-urbanist text-[18px] font-normal leading-[33px] text-[#7D7C83]">
              Skip management.{" "}
              <InlinePill>Set goals.</InlinePill>
            </p>
            <img
              src="/images/figma/Frame 1707484612.svg"
              alt="Radar card"
              className="w-full max-w-[393px]"
            />
          </div>

          {/* Desktop: overlapping 3-card layout */}
          <div className="hidden md:block">
            {/* Labels row */}
            <div className="flex items-start justify-between mb-2">
            <p className="font-['Urbanist'] text-[22px] font-normal leading-10 text-gray-300 text-right translate-x-[40px] rotate-[-3deg] translate-y-[10px] -mt-[20px]">
                You don&apos;t coordinate.You{" "}
                <InlinePill>orchestrate</InlinePill>
              </p>
              <p className="font-['Urbanist'] text-[22px] font-normal leading-10 text-gray-300 text-right translate-x-[40px] rotate-[-3deg] translate-y-[10px] -mt-[20px]">
                They{" "}
                <InlinePill>execute.</InlinePill>{" "}
                They{" "}
                <InlinePill>deliver.</InlinePill>
              </p>
            </div>

            {/* Cards row — overlapping */}
            <div className="flex items-start justify-center">
              <img
                src="/images/figma/Frame 1707484612.svg"
                alt="Radar card"
                className="w-[36%] -mr-[3.5%] relative z-0"
              />
              <img
                src="/images/figma/Frame 1707484612-1.svg"
                alt="AI Agent chat card"
                className="w-[37%] relative z-10 mt-[10px]"
              />
              <img
                src="/images/figma/Frame 1707484613.svg"
                alt="Tasks card"
                className="w-[36%] -ml-[3.5%] relative z-11 translate-y-[20px]"
              />
            </div>

            {/* Bottom label */}
            <p className="mt-2 text-center font-['Urbanist'] text-[22px] font-normal text-gray-300 translate-x-[40px] rotate-[3deg]">
              Skip management.{" "}
              <InlinePill>Set goals.</InlinePill>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
