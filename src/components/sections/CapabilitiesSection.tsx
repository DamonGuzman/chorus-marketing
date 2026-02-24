import { AnimateOnScroll, Badge, Section, ScrollTextReveal, StaggerChildren } from "@/components/ui";
import Image from "next/image";

function AnimatedBorder({
  radiusMobile,
  radiusDesktop,
  radiusLg,
  strokeMobile = 0.52,
  strokeDesktop = 0.85,
  strokeLg,
  delay = 0,
}: {
  radiusMobile: number;
  radiusDesktop: number;
  radiusLg?: number;
  strokeMobile?: number;
  strokeDesktop?: number;
  strokeLg?: number;
  delay?: number;
}) {
  const rLg = radiusLg ?? radiusDesktop;
  const sLg = strokeLg ?? strokeDesktop;
  return (
    <>
      {/* Mobile */}
      <svg className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-[1]" preserveAspectRatio="none">
        <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)"
          rx={radiusMobile} ry={radiusMobile} fill="none"
          stroke="rgba(255,255,255,0.3)" strokeWidth={strokeMobile}
          className="animated-border" style={{ animationDelay: `${delay}s` }}
        />
      </svg>
      {/* Tablet */}
      <svg className="hidden md:block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-[1]" preserveAspectRatio="none">
        <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)"
          rx={radiusDesktop} ry={radiusDesktop} fill="none"
          stroke="rgba(255,255,255,0.3)" strokeWidth={strokeDesktop}
          className="animated-border" style={{ animationDelay: `${delay}s` }}
        />
      </svg>
      {/* Desktop */}
      <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-[1]" preserveAspectRatio="none">
        <rect x="0.5" y="0.5" width="calc(100% - 1px)" height="calc(100% - 1px)"
          rx={rLg} ry={rLg} fill="none"
          stroke="rgba(255,255,255,0.3)" strokeWidth={sLg}
          className="animated-border" style={{ animationDelay: `${delay}s` }}
        />
      </svg>
    </>
  );
}

const capabilityCards = [
  { name: "Sales", iconSrc: "/images/figma/Sales.svg" },
  { name: "Finance", iconSrc: "/images/figma/Finance.svg" },
  { name: "Marketing", iconSrc: "/images/figma/Marketing.svg" },
  { name: "Operations", iconSrc: "/images/figma/Operations.svg" },
] as const;

const capabilityDescription = "You don’t have to work in IT or even be tech savvy to use our products.";

const teamMembers = [
  {
    name: "David Fincher",
    status: "Active",
    role: "Project Manager",
    avatarSrc: "/images/team/member-1.png",
  },
  {
    name: "Steve Jan",
    status: "Active",
    role: "UX Designer",
    avatarSrc: "/images/team/member-2.png",
  },
];

export function CapabilitiesSection() {
  return (
    <Section className="self-stretch px-4 py-10 md:py-20 md:px-8 flex flex-col justify-start items-center gap-2 md:gap-3 relative overflow-hidden" id="use-cases">
      {/* Section Header */}
      <div className="flex flex-col justify-start items-center gap-1">
        <Badge className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">Capabilities</Badge>
        <div className="flex flex-col justify-start items-center gap-4">
        <ScrollTextReveal
          text="What Your AI Workforce Can Do"
          className="text-center text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[78px]"
        />
        <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
          <p className="w-full text-center text-gray-300 text-sm leading-6 md:text-base md:leading-7 lg:text-xl lg:leading-9 font-normal font-['Urbanist']">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </AnimateOnScroll>
        </div>
      </div>

      <div className="w-[1150px] max-w-full flex flex-col md:inline-flex md:flex-row items-center justify-between mx-auto mt-10 md:mt-14 gap-12 md:gap-16">
        {/* Left: capability cards */}
        <div className="w-full md:flex-1 md:min-w-0">
          <StaggerChildren staggerDelay={120} className="flex flex-col items-center md:items-start gap-3 md:gap-3 lg:gap-[20px]">
            {capabilityCards.map(({ name, iconSrc }, index) => (
              <div
                key={name}
                className={[
                  "relative overflow-hidden",
                  /* — mobile: Figma exact spec — */
                  "max-md:w-[280px] max-md:h-[72px]",
                  "max-md:pl-4 max-md:pr-3 max-md:py-3",
                  "max-md:rounded-xl",
                  "",
                  "max-md:inline-flex max-md:flex-col max-md:justify-center max-md:items-start",
                  /* alternating left/right offset on mobile */
                  index % 2 === 0 ? "max-md:self-end" : "max-md:self-start",
                  /* — desktop — */
                  "md:w-full md:max-w-[500px] md:h-24 lg:h-36",
                  "md:pl-0 md:pr-0 md:py-3 lg:py-6",
                  "md:rounded-3xl",
                  "",
                  "md:inline-flex md:items-center md:gap-1",
                  index % 2 === 0 ? "md:ml-[25px] lg:ml-[50px]" : "",
                  /* shared gradient */
                  "bg-gradient-to-r from-white/5 via-white/10 to-white/5",
                ].join(" ")}
              >
                <AnimatedBorder radiusMobile={12} radiusDesktop={24} delay={index * 0.4} />
                {/* Mobile inner row: glow · icon · text */}
                <div className="md:hidden w-full inline-flex justify-start items-center gap-3">
                  <div className="relative shrink-0 w-10 h-10 flex items-center justify-center">
                    <div
                      className="absolute w-6 h-6 bg-white/30 rounded-full blur-md inset-0 m-auto"
                      style={{ animation: 'icon-glow 3s ease-in-out infinite' }}
                    />
                    <Image src={iconSrc} alt="" width={40} height={40} className="w-10 h-10 object-contain relative" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <h3 className="text-white text-sm font-bold font-['Urbanist'] leading-5">{name}</h3>
                    <p className="text-neutral-500 text-[10px] font-semibold font-['Urbanist'] leading-[14px]">
                      {capabilityDescription}
                    </p>
                  </div>
                </div>

                {/* Desktop: large icon with glow overflow + text */}
                <div className="hidden md:block relative shrink-0 -translate-y-2 md:w-24 md:h-24 lg:w-36 lg:h-36">
                  <div
                    className="md:w-10 md:h-10 lg:w-14 lg:h-14 bg-white/30 rounded-full blur-md absolute inset-0 m-auto"
                    style={{ animation: 'icon-glow 3s ease-in-out infinite' }}
                  />
                  <Image src={iconSrc} alt="" width={100} height={100} className="md:w-24 md:h-24 lg:w-36 lg:h-36 object-contain relative" />
                </div>
                <div className="hidden md:flex flex-col md:gap-4">
                  <h3 className="text-white md:text-lg lg:text-2xl font-bold font-['Urbanist']">{name}</h3>
                  <p className="text-neutral-500 md:text-xs lg:text-base font-semibold font-['Urbanist'] md:leading-6">
                    {capabilityDescription}
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>

        {/* Right: team preview */}
        <div className="w-full md:flex-1 md:min-w-0">
          <div className="flex justify-center">
            <div className="relative w-64 h-80 md:w-[280px] md:h-[360px] lg:w-[497px] lg:h-[595px] bg-black rounded-[35px] md:rounded-[50px] lg:rounded-[65px] px-4 pt-5 pb-6 md:px-4 md:pt-4 md:pb-5 lg:px-[28px] lg:pt-[32px] lg:pb-[36px] flex flex-col">
              <AnimatedBorder
                radiusMobile={35} radiusDesktop={50} radiusLg={65}
                strokeMobile={0.8} strokeDesktop={1} strokeLg={1.2}
                delay={0}
              />
              {/* Floating emoji orbs — positioned relative to phone frame */}
              <div aria-hidden className="pointer-events-none">
                {/* 📈 Top center */}
                <div className="absolute left-[35%] -top-5 md:-top-6 lg:-top-10 -translate-x-1/2 z-10 grid place-items-center max-md:size-9 md:size-10 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-md:text-sm md:text-base lg:text-[28px] leading-none">📈</span>
                </div>
                {/* 🧠 Left */}
                <div className="absolute -left-7 md:-left-7 lg:-left-10 top-[65%] md:top-[60%] -translate-y-1/2 z-10 grid place-items-center max-md:size-9 md:size-10 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-md:text-sm md:text-base lg:text-[28px] leading-none">🧠</span>
                </div>
                {/* 🥳 Right */}
                <div className="absolute -right-7 md:-right-7 lg:-right-10 top-[70%] md:top-[65%] -translate-y-1/2 z-10 grid place-items-center max-md:size-9 md:size-10 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-md:text-sm md:text-base lg:text-[28px] leading-none">🥳</span>
                </div>
                {/* 🚀 Bottom */}
                <div className="absolute left-[65%] md:left-[70%] bottom-0 -translate-x-1/2 translate-y-1/2 z-10 grid place-items-center max-md:size-9 md:size-10 lg:size-[64px] rounded-full bg-[#1a1a1a] border border-white/10 shadow-[0px_4px_25px_rgba(0,0,0,0.4)]">
                  <span className="max-md:text-sm md:text-base lg:text-[26px] leading-none">🚀</span>
                </div>
              </div>
              {/* Top member cards */}
              <div className="space-y-2.5 md:space-y-2 lg:space-y-[16px]">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="px-4 py-4 md:px-4 md:py-3 lg:px-8 lg:py-6 bg-neutral-900 rounded-2xl md:rounded-2xl lg:rounded-3xl shadow-[0px_2.75px_17.2px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_3.57px_0px_rgba(255,255,255,0.27)] md:shadow-[0px_2.75px_17.2px_0px_rgba(0,0,0,0.25)] md:shadow-[inset_0px_0px_3.57px_0px_rgba(255,255,255,0.27)] lg:shadow-[0px_5px_32px_0px_rgba(0,0,0,0.25)] lg:shadow-[inset_0px_0px_6.6px_0px_rgba(255,255,255,0.27)] inline-flex justify-between items-center w-full"
                  >
                    <div className="flex items-center gap-2.5 md:gap-4">
                      <Image
                        alt=""
                        src={member.avatarSrc}
                        width={64}
                        height={64}
                        className="w-10 h-10 md:size-10 lg:size-16 rounded-full object-cover"
                      />
                      <div className="inline-flex flex-col gap-2.5 md:gap-2 lg:gap-4">
                        <div className="inline-flex items-center gap-2 md:gap-2 lg:gap-3.5">
                          <span className="text-white text-xs md:text-xs lg:text-xl font-bold font-['Urbanist'] leading-5 md:leading-5 lg:leading-10">
                            {member.name}
                          </span>
                          <span className="w-1 h-1 md:size-1.5 lg:size-2 bg-green-500 rounded-full" />
                          <span className="text-[#CBCACC] text-[9.1px] md:text-[9px] lg:text-base font-bold font-['Urbanist'] leading-4 md:leading-4 lg:leading-7">
                            {member.status}
                          </span>
                        </div>
                        <div className="relative h-6 md:h-6 lg:h-11 px-2.5 md:px-2.5 lg:px-5 py-1.5 md:py-1.5 lg:py-3 bg-white/5 rounded-2xl md:rounded-2xl lg:rounded-3xl flex items-center gap-2 md:gap-2 lg:gap-3.5 overflow-hidden">
                          <div className="w-20 h-20 absolute left-[46px] -top-[18px] opacity-50 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(151,71,255,0),rgba(185,156,252,0))] blur-xl" />
                          <span className="text-white text-[9.1px] md:text-[9px] lg:text-base font-medium font-['Urbanist'] leading-3 md:leading-3 lg:leading-6 relative">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Copy */}
              <div className="mt-auto">
                <h3 className="text-sm md:text-sm lg:text-[24px] font-bold font-['Urbanist'] leading-4 md:leading-4 lg:leading-[30px] text-[#CBCACC]">
                  AI That Works for Every Role
                </h3>
                <p className="mt-2 md:mt-2 lg:mt-[14px] text-[10px] md:text-[10px] lg:text-[16px] font-normal font-['Urbanist'] leading-4 md:leading-4 lg:leading-[28px] text-[#7D7C83]">
                  Automate strategy, execution, and insights across teams—marketing, sales, finance, and beyond—so your people focus on goals, not busywork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
