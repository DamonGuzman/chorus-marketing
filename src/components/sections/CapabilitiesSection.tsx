import { Section } from "@/components/ui";
import Image from "next/image";

const capabilityCards = [
  { name: "Sales", iconSrc: "/images/figma/Sales.svg" },
  { name: "Finance", iconSrc: "/images/figma/Finance.svg" },
  { name: "Marketing", iconSrc: "/images/figma/Marketing.svg" },
  { name: "Operations", iconSrc: "/images/figma/Operations.svg" },
] as const;

const capabilityDescription = "You don’t have to work in IT or even be tech savvy to use our products.";

export function CapabilitiesSection() {
  return (
    <Section className="py-[100px] relative overflow-hidden" id="use-cases">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[100px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[24px] mb-[60px]">
          <div className="inline-flex items-center justify-center rounded-full bg-white/[0.07] px-[12px] py-[4px]">
            <span className="text-center font-urbanist text-[16px] font-semibold leading-[24px] text-white">
              Capabilities
            </span>
          </div>
          <h2 className="text-center font-urbanist text-[40px] md:text-[50px] font-bold leading-[1.3] md:leading-[78px] text-white">
            What Your AI Workforce Can Do
          </h2>
          <p className="text-center font-urbanist text-[18px] md:text-[22px] font-normal leading-[30px] md:leading-[36px] text-[#7D7C83]">
            The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-[44px]">
          {/* Left: capability cards */}
          <div className="w-full lg:w-[500px]">
            <div className="flex flex-col gap-[20px]">
              {capabilityCards.map(({ name, iconSrc }, index) => (
                <div
                  key={name}
                  className={[
                    "relative overflow-hidden rounded-[24px] border border-white/35",
                    "bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.04)_45.19%,rgba(0,0,0,0)_100%)]",
                    "backdrop-blur-[25px]",
                    "flex items-center",
                    "px-[26px] py-[26px] lg:py-[25.5px] lg:px-[30.6px]",
                    "lg:h-[147px]",
                    "shadow-[inset_0px_0px_6.62px_0px_rgba(255,255,255,0.12)]",
                    index % 2 === 0 ? "lg:ml-[70px]" : "lg:ml-0",
                  ].join(" ")}
                  data-figma-node="4229:62744"
                >
                  <div className="flex items-start gap-[30px]">
                    <div className="relative grid place-items-center size-[64px] shrink-0">
                      <Image src={iconSrc} alt="" width={60} height={60} className="size-[120px]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[26px] font-bold leading-normal text-white">
                        {name}
                      </h3>
                      <p className="mt-[14px] text-[15px] leading-[23.826px] font-semibold text-[#757575]">
                        {capabilityDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: team preview */}
          <div className="w-full lg:w-[700px]">
            <div className="relative">
              {/* Floating emoji orbs */}
              <div aria-hidden className="pointer-events-none hidden lg:block">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 grid place-items-center size-[84px] rounded-full bg-[#202020] shadow-[inset_0px_0px_5px_rgba(255,255,255,0.55),0px_4px_25px_rgba(0,0,0,0.25)]">
                  <span className="text-[34px] leading-none">📈</span>
                </div>

                <div className="absolute left-0 top-[55%] -translate-x-1/2 -translate-y-1/2 z-10 grid place-items-center size-[84px] rounded-full bg-[#202020] shadow-[inset_0px_0px_5px_rgba(255,255,255,0.55),0px_4px_25px_rgba(0,0,0,0.25)]">
                  <span className="text-[34px] leading-none">🧠</span>
                </div>

                <div className="absolute right-0 top-[30%] translate-x-1/2 -translate-y-1/2 z-10 grid place-items-center size-[84px] rounded-full bg-[#202020] shadow-[inset_0px_0px_5px_rgba(255,255,255,0.55),0px_4px_25px_rgba(0,0,0,0.25)]">
                  <span className="text-[34px] leading-none">🥳</span>
                </div>

                <div className="absolute right-[60px] bottom-0 translate-y-1/2 z-10 grid place-items-center size-[84px] rounded-full bg-[#202020] shadow-[inset_0px_0px_5px_rgba(255,255,255,0.55),0px_4px_25px_rgba(0,0,0,0.25)]">
                  <span className="text-[30px] leading-none">🚀</span>
                </div>
              </div>

              <div
                className={[
                  "relative overflow-hidden rounded-[35px] border border-white/25",
                  "bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_45%,rgba(0,0,0,0)_100%)]",
                  "shadow-[inset_0px_0px_6.62px_0px_rgba(255,255,255,0.27)]",
                  "backdrop-blur-[25px]",
                  "p-[28px] sm:p-[34px]",
                  "min-h-[620px] lg:min-h-[650px]",
                ].join(" ")}
                data-figma-node="4229:62783"
              >
                {/* Top member cards */}
                <div className="space-y-[18px]">
                  {[
                    {
                      name: "David Fincher",
                      status: "Active",
                      role: "Project Manager",
                      avatarSrc: "/images/team/member-1.png",
                      ringClass: "ring-red-500/70",
                    },
                    {
                      name: "Steve Jan",
                      status: "Active",
                      role: "UX Designer",
                      avatarSrc: "/images/team/member-2.png",
                      ringClass: "ring-purple-500/70",
                    },
                  ].map((member) => (
                    <div
                      key={member.name}
                      className={[
                        "flex items-center justify-between gap-[14px]",
                        "rounded-[20px] border border-white/25 bg-white/5",
                        "px-[18px] py-[16px]",
                        "shadow-[inset_0px_0px_6px_rgba(255,255,255,0.10)]",
                      ].join(" ")}
                      data-figma-node="4229:62784"
                    >
                      <div className="flex items-center gap-[14px] min-w-0">
                        <Image
                          alt=""
                          src={member.avatarSrc}
                          width={44}
                          height={44}
                          className={[
                            "size-[44px] rounded-full object-cover",
                            "ring-2",
                            member.ringClass,
                          ].join(" ")}
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-[10px] min-w-0">
                            <span className="text-[16px] font-bold text-white truncate">
                              {member.name}
                            </span>
                            <span className="inline-flex items-center gap-[8px] text-[14px] text-white/80 shrink-0">
                              <span className="size-[7px] rounded-full bg-green-500" />
                              {member.status}
                            </span>
                          </div>
                          <div className="mt-[8px]">
                            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-[16px] py-[8px] text-[14px] leading-none text-white/90">
                              {member.role}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-label="More options"
                        className="shrink-0 grid place-items-center size-[36px] rounded-full border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/25 transition-colors"
                      >
                        <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="size-[16px]">
                          <path d="M12 6.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM12 19.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Copy */}
                <div className="mt-[64px]">
                  <h3 className="text-[24px] sm:text-[27px] font-bold leading-[31px] text-[#CBCACC]">
                    AI That Works for Every Role
                  </h3>
                  <p className="mt-[18px] text-[16px] sm:text-[19px] leading-[31px] font-normal text-[#7D7C83] max-w-[428px]">
                    Automate strategy, execution, and insights across teams—marketing, sales, finance, and beyond—so your people focus on goals, not busywork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
