import Image from "next/image";
import { ButtonLink, IntegrationLogo } from "@/components/ui";
import { PRIMARY_CTA_HREF } from "@/content/site";
import { Logo, ChatIcon, BellIcon, DotsIcon, SearchIcon, PencilIcon, LockIcon, CheckIcon, ChevronIcon } from "@/components/icons";

type AvatarVariant = "john" | "danny" | "frank" | "sarah";

const avatarSrc: Record<AvatarVariant, string> = {
  john: "/images/team/member-1.png",
  danny: "/images/team/member-2.png",
  frank: "/images/team/member-3.png",
  sarah: "/images/team/member-4.png",
};

function getAvatarVariantForName(name: string): AvatarVariant {
  if (name.startsWith("Frank")) return "frank";
  if (name.startsWith("David")) return "john";
  if (name.startsWith("Doone")) return "sarah";
  return "danny";
}

function Avatar({
  alt,
  variant,
  className,
}: {
  alt: string;
  variant: AvatarVariant;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border border-white/10 bg-white/5 ${className ?? ""}`}
      aria-label={alt}
      title={alt}
    >
      <Image src={avatarSrc[variant]} alt={alt} fill className="object-cover" />
    </div>
  );
}

const channelItems = [
  { name: "Marketing Campaign", color: "bg-[#36C5F0]/25" },
  { name: "Product Research", color: "bg-[#E01E5A]/25" },
  { name: "Financial Analysis", color: "bg-[#A259FF]/25", locked: true },
  { name: "General", color: "bg-[#2EB67D]/25" },
  { name: "Turingagents", color: "bg-[#3B82F6]/25" },
  { name: "Customer Discovery", color: "bg-[#22C55E]/25", active: true },
  { name: "Standup meeting", color: "bg-[#EF4444]/25", locked: true },
  { name: "Financial Analysis", color: "bg-[#A259FF]/25" },
];

function StepIndicator({
  variant,
  label,
}: {
  variant: "completed" | "in_progress" | "queued";
  label: string;
}) {
  if (variant === "completed") {
    return (
      <div className="size-[22px] rounded-full bg-[#3EA34B] flex items-center justify-center">
        <Image src="/images/figma/4229-62012/img.svg" alt="" width={12} height={10} />
      </div>
    );
  }

  if (variant === "in_progress") {
    return (
      <div className="size-[22px] rounded-full flex items-center justify-center" aria-label="In progress">
        <Image src="/images/figma/4229-62012/imgGroup2.svg" alt="" width={15} height={15} />
      </div>
    );
  }

  return (
    <div className="size-[22px] rounded-full bg-[#3D3C42] flex items-center justify-center">
      <span className="text-[12px] font-semibold leading-none text-[#CBCACC]">{label}</span>
    </div>
  );
}

export function NewHeroSection() {
  return (
    <section className="relative bg-black min-h-[1157px] overflow-hidden" id="about">
      {/* Background Glow Effect */}
      <div className="absolute top-[88px] right-0 w-[1353px] h-[1235px] opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-600/10 to-transparent blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-[120px] md:pt-[165px] px-6 md:px-[30px] max-w-[1380px] mx-auto">
        {/* Hero Header */}
        <div className="flex flex-col items-center text-center gap-[29px]">
          <div className="flex flex-col items-center text-center gap-[19px]">
            <h1 className="text-[50px] md:text-[70px] leading-[60px] md:leading-[78px] font-extrabold tracking-[-1.4px] text-white">
              Stop Hiring. Start Building.
            </h1>
            <p className="text-[18px] md:text-[22px] leading-[28px] md:leading-[36px] font-normal text-gray-100 max-w-[1034px]">
              The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
            </p>
          </div>

          <ButtonLink href={PRIMARY_CTA_HREF} variant="primary" size="md">
            Build Your Team Now
          </ButtonLink>
        </div>

        {/* App Mockup */}
        <div className="mt-[50px] flex gap-[35px] max-w-[1252px] mx-auto">
          {/* Sidebar */}
          <div className="w-[316px] shrink-0 p-[11px]">
            {/* Logo */}
            <div className="flex items-center justify-between mb-[11px]">
              <Logo className="w-[33.7px] h-[32.05px] text-white" />
              <div className="flex items-center gap-[18px] text-white/60">
                <button
                  type="button"
                  aria-label="Search"
                  className="w-[22px] h-[22px] rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <SearchIcon className="w-[14px] h-[14px]" />
                </button>
                <button
                  type="button"
                  aria-label="Edit"
                  className="w-[20px] h-[20px] rounded border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                >
                  <PencilIcon className="w-[14px] h-[14px]" />
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-0 mb-[11px]">
              {[
                { icon: ChatIcon, label: "DMs" },
                { icon: CheckIcon, label: "Work" },
                { icon: BellIcon, label: "Activity" },
                { icon: DotsIcon, label: "More" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-[22px] px-[11px] py-[10px] rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div aria-hidden className="absolute left-[104px] -top-[10px] w-[64px] h-[62px] bg-white/5 blur-[18px] opacity-40 rounded-full" />
                  <Icon className="text-white/60" />
                  <span className="text-[11px] font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 my-[11px]" />

            {/* Channels */}
            <div className="mb-[20px]">
              <div className="flex items-center justify-between px-[6px] py-[7px]">
                <div className="flex items-center gap-[7px]">
                  <ChevronIcon className="w-[10px] h-[6px] text-white/60" direction="down" />
                  <span className="text-[11px] font-semibold text-white">Channels</span>
                </div>
                <span className="text-white/40 text-lg">+</span>
              </div>

              <div className="relative space-y-0 pl-[12px]">
                <div aria-hidden className="absolute left-[10px] top-[4px] bottom-[4px] w-px bg-white/10" />
                {channelItems.map((channel) => (
                  <div
                    key={channel.name}
                    className={`relative flex items-center gap-[10px] pl-[14px] pr-[10px] py-[7px] rounded-[12px] ${
                      channel.active ? "bg-white/5" : ""
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`w-[18px] h-[18px] rounded-full grid place-items-center ${channel.color}`}
                    >
                      <span className="text-[10px] text-white/70">#</span>
                    </div>
                    <span className={`text-[11px] font-medium ${channel.active ? "text-white/80" : "text-white/60"}`}>
                      {channel.name}
                    </span>
                    {channel.locked && <LockIcon className="w-[14px] h-[14px] text-white/30 ml-auto" />}
                    {channel.active && (
                      <button
                        type="button"
                        aria-label="More"
                        className="ml-auto text-white/30 hover:text-white/60 transition-colors"
                      >
                        <DotsIcon className="w-[16px] h-[16px]" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* More */}
            <div className="flex items-center gap-[11px] px-[36px] py-[7px]">
              <DotsIcon className="text-white/40" />
              <span className="text-[11px] font-medium text-white/60">More</span>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent rounded-[40px] border border-white/10 shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.27)] backdrop-blur-[30px] p-[20px]">
            {/* Messages */}
            <div className="space-y-[16px]">
              {/* Message 1 - John Doe */}
              <div className="flex gap-[10px]">
                <Avatar variant="john" alt="John Doe" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">John Doe</span>
                    <span className="text-[10px] text-white/40">1:46 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[564px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Hello Danny! I want to manage company&apos;s finances and team performance every month.
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 2 - Danny */}
              <div className="flex gap-[10px]">
                <Avatar variant="danny" alt="Danny" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">Danny</span>
                    <span className="text-[10px] text-white/40">1:50 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[531px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Hey John. From your request, I can see that you&apos;re aiming to accomplish two main goals
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 3 - Frank AI Agent */}
              <div className="flex gap-[10px]">
                <div className="relative shrink-0">
                  <Avatar variant="frank" alt="Frank" className="w-[28px] h-[28px]" />
                  <div className="absolute -bottom-0.5 -right-0.5 px-[6px] py-[2px] bg-purple-600 rounded-full border border-white/10">
                    <span className="text-[7px] font-medium text-white">AI Agent</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">Frank</span>
                    <span className="text-[10px] text-white/40">1:50 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[575px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed mb-[12px]">
                      From your request, you&apos;re aiming to accomplish two main goals. I&apos;ll connect with your CRM and task management tool
                      <span className="inline-flex items-center gap-[6px] mx-[6px]">
                        <span className="text-white/40">(</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="Slack" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">Slack</span>
                        </span>
                        <span className="text-white/40">+</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="Stripe" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">Stripe</span>
                        </span>
                        <span className="text-white/40">+</span>
                        <span className="inline-flex items-center gap-[4px]">
                          <IntegrationLogo name="HubSpot" size="sm" shape="circle" />
                          <span className="text-[10px] text-white/70">HubSpot</span>
                        </span>
                        <span className="text-white/40">)</span>
                      </span>
                      to fetch automatically. Shall I connect?
                    </p>
                  </div>
                </div>
              </div>

              {/* Message 4 - John Doe follow up */}
              <div className="flex gap-[10px]">
                <Avatar variant="john" alt="John Doe" className="w-[28px] h-[28px] shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-[10px] mb-[10px]">
                    <span className="text-[10px] font-medium text-white">John Doe</span>
                    <span className="text-[10px] text-white/40">1:46 AM</span>
                  </div>
                  <div className="bg-white/5 rounded-[14px] px-[12px] py-[10px] max-w-[305px] border border-white/5">
                    <p className="text-[10px] text-white/70 leading-relaxed">
                      Yes, connect Stripe now. I&apos;ll connect HubSpot later
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal Created row */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#F2AB53]/15 via-white/5 to-white/[0.02] rounded-[14px] border border-white/5 px-[12px] py-[10px]">
                <div className="flex items-center gap-[10px]">
                  <span className="text-white/40 text-[10px]">⚑</span>
                  <span className="text-[10px] text-white/70">Goal Created: Track Monthly Revenue</span>
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#F2AB53]" />
                  <span className="text-[10px] text-white/50">In progress</span>
                  <ChevronIcon className="w-[10px] h-[6px] text-white/30" direction="right" />
                </div>
              </div>

              {/* Composer */}
              <div className="mt-[4px]">
                <div className="text-[10px] text-white/40 px-[12px] py-[10px]">Ask or make anything</div>
                <div className="flex items-center justify-between px-[12px] py-[10px] text-white/30">
                  <div className="flex items-center gap-[10px]">
                    <span className="text-[14px]">+</span>
                    <span className="text-[10px]">@</span>
                    <span className="text-[10px]">Aa</span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <span className="w-[16px] h-[16px] rounded-full border border-white/10" />
                    <span className="w-[16px] h-[16px] rounded-full border border-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Task Panel */}
          <div className="w-[365px] shrink-0 bg-[#121212] rounded-[30px] px-[20px] pt-[30px] pb-[30px] shadow-[inset_0px_0px_8px_0px_rgba(255,255,255,0.27)]">
            {/* Goal Card */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] px-[12px] pt-[16px] pb-[12px]">
              <p className="text-[14px] leading-[24px] font-bold text-[#CBCACC]">Track Monthly Revenue</p>
              <div className="mt-[15px] flex items-center justify-between">
                <div className="flex items-center gap-[4px]">
                  <Image src="/images/figma/4229-62012/img1.svg" alt="" width={14} height={14} />
                  <span className="text-[12px] font-semibold text-[#7D7C83]">Tasks :</span>
                  <span className="text-[12px] font-semibold text-[#CBCACC]">7</span>
                </div>

                <div className="flex items-center">
                  <div className="flex -space-x-[6px]">
                    <Avatar variant="frank" alt="Frank" className="w-[24px] h-[24px] border-2 border-[#121212]" />
                    <Avatar variant="sarah" alt="Sarah" className="w-[24px] h-[24px] border-2 border-[#121212]" />
                    <Avatar variant="danny" alt="Danny" className="w-[24px] h-[24px] border-2 border-[#121212]" />
                  </div>
                  <span className="ml-[10px] text-[12px] font-semibold text-[#CBCACC]">+3</span>
                </div>
              </div>
            </div>

            {/* Task List */}
            <div className="relative mt-[20px]">
              <div
                className="pointer-events-none absolute left-[17px] top-0 bottom-0 w-[2px]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(161,161,161,0.55) 1px, transparent 1.7px)",
                  backgroundSize: "2px 6px",
                  backgroundPosition: "center top",
                }}
              />

              <div className="space-y-[10px]">
                {[
                  {
                    name: "Franks Lampard",
                    status: "Completed",
                    task: "Collect revenue data from bank APIs",
                    apps: [
                      { label: "qb", bg: "#2EB67D" },
                      { label: "C", bg: "#F97316" },
                      { label: "S", bg: "#3B82F6" },
                    ],
                    file: "Stripe_revenue_report.csv",
                  },
                  {
                    name: "David Fincher",
                    status: "In Progress",
                    task: "Collect revenue data from bank APIs",
                    subtask: "Initialize slide project with professional design for st...",
                  },
                  { name: "Doone Rosin", status: "Queued", task: "P&L Report Draft" },
                  { name: "Doone Rosin", status: "Queued", task: "Categorize expenses" },
                ].map((item, index) => {
                  const variant =
                    item.status === "Completed"
                      ? ("completed" as const)
                      : item.status === "In Progress"
                        ? ("in_progress" as const)
                        : ("queued" as const);

                  return (
                    <div key={index} className="flex gap-[12px]">
                      <div className="w-[36px] shrink-0 flex justify-center pt-[18px] relative">
                        <div className="relative z-10">
                          <StepIndicator variant={variant} label={String(index + 1)} />
                        </div>
                        <div className="pointer-events-none absolute left-[28px] top-[28px]">
                          <Image src="/images/figma/4229-62012/imgGroup1707483949.svg" alt="" width={17} height={2} />
                        </div>
                      </div>

                      <div className="flex-1 bg-white/[0.04] border border-white/10 rounded-[16px] px-[12px] pt-[14px] pb-[12px]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-[8px] rounded-full bg-white/[0.04] border border-white/10 px-[10px] py-[5px]">
                            <Avatar
                              variant={getAvatarVariantForName(item.name)}
                              alt={item.name}
                              className="w-[18px] h-[18px] border border-white/5"
                            />
                            <span className="text-[12px] font-semibold text-[#CBCACC]">{item.name}</span>
                          </div>

                          {item.status === "Completed" && (
                            <div className="flex items-center gap-[8px]">
                              <span className="size-[14px] rounded-full bg-[#3EA34B] flex items-center justify-center">
                                <Image src="/images/figma/4229-62012/img.svg" alt="" width={8} height={6} />
                              </span>
                              <span className="text-[12px] font-semibold text-[#CBCACC]">Completed</span>
                            </div>
                          )}

                          {item.status === "In Progress" && (
                            <div className="flex items-center gap-[8px]">
                              <Image src="/images/figma/4229-62012/imgGroup2.svg" alt="" width={15} height={15} />
                              <span className="text-[12px] font-semibold text-[#CBCACC]">In Progress</span>
                            </div>
                          )}

                          {item.status === "Queued" && (
                            <div className="flex items-center gap-[8px]">
                              <Image src="/images/figma/4229-62012/imgElements4.svg" alt="" width={9} height={11} />
                              <span className="text-[12px] font-semibold text-[#7D7C83]">Queued</span>
                            </div>
                          )}
                        </div>

                        <div className="mt-[10px] flex items-center gap-[10px]">
                          <Image src="/images/figma/4229-62012/img1.svg" alt="" width={14} height={14} />
                          <p className="text-[14px] leading-[24px] font-bold text-[#CBCACC]">{item.task}</p>
                        </div>

                        {"subtask" in item && item.subtask && (
                          <div className="mt-[6px] flex items-center gap-[8px] pl-[24px]">
                            <Image src="/images/figma/4229-62012/img2.svg" alt="" width={14} height={14} />
                            <span className="text-[12px] text-[#7D7C83]">{item.subtask}</span>
                          </div>
                        )}

                        {item.apps && item.file && (
                          <div className="mt-[10px] flex items-center gap-[10px] pl-[24px]">
                            <div className="flex items-center gap-[8px]">
                              <span className="text-[12px] font-semibold text-[#7D7C83]">Apps :</span>
                              <div className="flex items-center gap-[6px]">
                                {item.apps.map((app) => (
                                  <span
                                    key={app.label}
                                    className="size-[18px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                                    style={{ backgroundColor: app.bg }}
                                  >
                                    {app.label}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center gap-[8px] px-[10px] py-[6px] bg-white/[0.04] border border-white/10 rounded-[10px]">
                              <span className="size-[18px] rounded-[4px] bg-[#0F8B4C] flex items-center justify-center text-[11px] font-extrabold text-white leading-none">
                                X
                              </span>
                              <span className="text-[12px] font-semibold text-[#CBCACC]">{item.file}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
