import { Section } from "@/components/ui";

const chorusWayItems = [
  {
    title: "Spin up any role in 60 seconds",
  },
  {
    title: "Every role works in harmony",
  },
  {
    title: "Full productivity from minute one",
  },
  {
    title: "One direction cascades automatically",
  },
  {
    title: "Scale without adding coordination overhead",
  },
  {
    title: "$0.12/hour per AI agent",
  },
];

export function ChorusWaySection() {
  return (
    <Section className="py-[75px] relative" id="chorus-way">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 via-purple-600/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          {/* Left Content */}
          <div className="lg:w-[464px]">
            <div className="flex items-center gap-[12px] mb-[20px]">
              {/* Checkmark Icon */}
              <div className="w-[44px] h-[44px] rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <svg className="w-[20px] h-[20px] text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[12px] font-semibold text-purple-400 uppercase tracking-wider">
                THE CHORUS WAY
              </p>
            </div>
            <h2 className="text-[40px] leading-[1.2] font-bold text-white mb-[43px]">
              Manifest Your Team Instantly
            </h2>
            <p className="text-[18px] leading-[36px] font-medium text-gray-300 mb-[43px]">
              Spin up an AI workforce that matches your org chart—roles, tools, and responsibilities included.
            </p>
            <p className="text-[18px] leading-[36px] font-medium text-gray-300">
              Give one direction, and coordination cascades automatically across agents and humans—with guardrails and full visibility.
            </p>
          </div>

          {/* Right Content - Benefits List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {chorusWayItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[16px] p-[20px] bg-gray-950/50 rounded-[16px] border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  {/* Check Icon */}
                  <div className="w-[24px] h-[24px] rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                    <svg className="w-[14px] h-[14px] text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <span className="text-[14px] leading-[1.5] font-medium text-white">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
