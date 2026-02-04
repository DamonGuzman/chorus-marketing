import { UserResearchIcon } from "@/components/icons";
import { Section } from "@/components/ui";

const oldWayItems = [
  {
    title: "Take months to fill a position",
    description: "Recruiting, onboarding, and ramp time delays execution and creates planning bottlenecks.",
  },
  {
    title: "Coordinate between siloed teams",
    description: "Hand-offs, meetings, and context switching add overhead that scales with headcount.",
  },
  {
    title: "Costs $4,000+ per hire",
    description: "Even small teams pay comp, benefits, and tooling before a single task ships.",
  },
  {
    title: "Training takes weeks",
    description: "Knowledge lives in people’s heads—so new work starts slow and repeats old mistakes.",
  },
];

export function OldWaySection() {
  return (
    <Section className="py-[75px]" id="old-way">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center mb-[51px]">
          <div className="flex items-center justify-center gap-[16px] mb-[15px]">
            {/* X Icon */}
            <div className="w-[44px] h-[44px] rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <svg className="w-[20px] h-[20px] text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-[35px] leading-[1.1] font-bold text-white">
              The Old Way: <span className="text-gray-400">Managing Individual Projects</span>
            </h2>
          </div>
          <p className="text-[18px] leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            Headcount projects move at human speed. Coordination overhead compounds as teams and tasks grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {oldWayItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[20px] border border-white/[0.34] bg-white/[0.02] backdrop-blur-[30px] pt-[30px] pb-[10px] px-[30px] flex flex-col gap-[26px] shadow-[inset_0px_0px_12px_0px_rgba(255,255,255,0.18)] transition-colors hover:border-white/50"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent" />
                <div className="absolute -top-[110px] -left-[110px] size-[260px] rounded-full bg-white/10 blur-[50px]" />
                <div className="absolute -bottom-[140px] -right-[140px] size-[320px] rounded-full bg-purple-500/10 blur-[70px]" />
              </div>

              <UserResearchIcon className="relative text-gray-200/50" />

              <div className="relative flex flex-col items-start gap-[30px]">
                <h3 className="text-[20px] leading-[28px] font-bold text-gray-100 max-w-[172px]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[24px] font-medium text-gray-300 max-w-[219px]">
                  &ldquo;{item.description}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
