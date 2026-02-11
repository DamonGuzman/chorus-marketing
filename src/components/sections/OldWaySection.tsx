import { SearchPersonIcon, MountainIcon, CoinsIcon, CursorIcon } from "@/components/icons";
import { Badge, Section } from "@/components/ui";

const oldWayItems = [
  {
    title: "Take months to fill a position",
    description:
      "Recruiting, onboarding, and ramp time delays execution and creates planning bottlenecks.",
    Icon: SearchPersonIcon,
  },
  {
    title: "Coordinate between siloed teams",
    description:
      "Hand-offs, meetings, and context switching add overhead that scales with headcount.",
    Icon: MountainIcon,
  },
  {
    title: "Costs $4,000+ per hire",
    description:
      "Even small teams pay comp, benefits, and tooling before a single task ships.",
    Icon: CoinsIcon,
  },
  {
    title: "Training takes weeks",
    description:
      "Knowledge lives in people\u2019s heads\u2014so new work starts slow and repeats old mistakes.",
    Icon: CursorIcon,
  },
];

export function OldWaySection() {
  return (
    <Section className="py-[50px] md:py-[75px]" id="old-way">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-[100px]">
        {/* Header */}
        <div className="text-center mb-[51px]">
          {/* Badge */}
          <div className="flex justify-center mb-[20px]">
            <Badge>The Problem</Badge>
          </div>

          <h2 className="text-[28px] leading-[36px] md:text-[35px] md:leading-[1.1] font-bold text-white mb-[15px]">
            The Old Way : Managing Individual Players
          </h2>
          <p className="text-[16px] leading-[28px] md:text-[18px] md:leading-[36px] font-medium text-gray-300 max-w-[1034px] mx-auto">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px]">
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

              <item.Icon className="relative text-gray-200/50" />

              <div className="relative flex flex-col items-start gap-[30px]">
                <h3 className="text-[20px] leading-[28px] font-bold text-gray-100 max-w-none md:max-w-[172px]">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-[24px] font-medium text-gray-300 max-w-none md:max-w-[219px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Arrows - hidden on mobile since cards stack vertically */}
        <div className="hidden md:flex items-center justify-center gap-[24px] mt-[40px]">
          <button
            type="button"
            aria-label="Previous"
            className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="rotate-180">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z" fill="#FCFCFD"/>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
          >
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.09094 0.265207C9.49676 -0.109399 10.1294 -0.0840962 10.504 0.321722L13.7348 3.82168C14.0884 4.20474 14.0884 4.79518 13.7348 5.17824L10.504 8.67828C10.1294 9.08411 9.49677 9.10941 9.09095 8.73481C8.68513 8.36021 8.65982 7.72755 9.03442 7.32173L10.716 5.49997L0.999999 5.49997C0.447714 5.49997 -7.64154e-07 5.05225 -7.86799e-07 4.49997C-8.09444e-07 3.94768 0.447714 3.49997 0.999999 3.49997L10.716 3.49997L9.03443 1.67829C8.65982 1.27247 8.68513 0.639813 9.09094 0.265207Z" fill="#FCFCFD"/>
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
