import Image from "next/image";

import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils";

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

function StepIndicator({
  variant,
  label,
}: {
  variant: "completed" | "in_progress" | "queued";
  label: string;
}) {
  if (variant === "completed") {
    return (
      <div className="size-[22.088px] rounded-full bg-[#3EA34B] flex items-center justify-center">
        <Image src="/images/figma/4229-62012/img.svg" alt="" width={12} height={10} />
      </div>
    );
  }

  if (variant === "in_progress") {
    return (
      <div className="size-[22.088px] rounded-full flex items-center justify-center" aria-label="In progress">
        <Image src="/images/figma/4229-62012/imgGroup2.svg" alt="" width={15} height={15} />
      </div>
    );
  }

  return (
    <div className="size-[22.088px] rounded-full bg-[#3D3C42] flex items-center justify-center">
      <span className="text-[12px] font-semibold leading-none text-[#CBCACC]">{label}</span>
    </div>
  );
}

type TaskItem =
  | {
      name: string;
      status: "Completed";
      task: string;
      apps: { label: string; bg: string }[];
      file: string;
    }
  | {
      name: string;
      status: "In Progress";
      task: string;
      subtask: string;
    }
  | {
      name: string;
      status: "Queued";
      task: string;
    };

const tasks: TaskItem[] = [
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
];

export function TuringAgentsTaskPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative shrink-0 bg-[#121212] rounded-[30.121px] px-[20.081px] pt-[30.121px] pb-[30px] font-feature-stylistic",
        "w-[395.591px] h-[582.341px]",
        className,
      )}
      data-node-id="4229:61984"
    >
      <div className="ml-[7.03px] w-[348.401px]" data-node-id="4229:61986">
        {/* Goal Card */}
        <div
          className="bg-white/[0.04] border-[1.004px] border-white/10 rounded-[16.065px] px-[12.048px] pt-[16.065px] pb-[12.048px]"
          data-node-id="4229:61987"
        >
          <p className="text-[14.057px] leading-[24.097px] font-bold text-[#CBCACC]" data-node-id="4229:61989">
            Track Monthly Revenue
          </p>
          <div className="mt-[15.061px] flex items-center justify-between" data-node-id="4229:61990">
            <div className="flex items-center gap-[4.016px]" data-node-id="4229:61991">
              <Image src="/images/figma/4229-62012/img1.svg" alt="" width={14} height={14} />
              <span className="text-[12.048px] font-semibold text-[#7D7C83]">Tasks :</span>
              <span className="text-[12.048px] font-semibold text-[#CBCACC]">7</span>
            </div>

            <div className="flex items-center" data-node-id="4229:61996">
              <div className="flex -space-x-[6.024px]">
                <Avatar src={avatarSrc.frank} alt="Frank" className="w-[24.097px] h-[24.097px] border-2 border-[#121212]" />
                <Avatar src={avatarSrc.sarah} alt="Sarah" className="w-[24.097px] h-[24.097px] border-2 border-[#121212]" />
                <Avatar src={avatarSrc.danny} alt="Danny" className="w-[24.097px] h-[24.097px] border-2 border-[#121212]" />
              </div>
              <span className="ml-[10.04px] text-[12.048px] font-semibold text-[#CBCACC]">+3</span>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="relative mt-[20.081px]" data-node-id="4229:62012">
          <div
            className="pointer-events-none absolute left-[17px] top-0 bottom-0 w-[2px]"
            aria-hidden
            style={{
              backgroundImage: "radial-gradient(circle, rgba(161,161,161,0.55) 1px, transparent 1.7px)",
              backgroundSize: "2px 6px",
              backgroundPosition: "center top",
            }}
          />

          <div className="space-y-[10.04px]">
            {tasks.map((item, index) => {
              const variant =
                item.status === "Completed"
                  ? ("completed" as const)
                  : item.status === "In Progress"
                    ? ("in_progress" as const)
                    : ("queued" as const);

              return (
                <div key={`${item.name}-${item.task}-${index}`} className="flex gap-[12.048px]" data-node-id="4229:62038">
                  <div className="w-[36.145px] shrink-0 flex justify-center pt-[18.073px] relative">
                    <div className="relative z-10">
                      <StepIndicator variant={variant} label={String(index + 1)} />
                    </div>
                    <div className="pointer-events-none absolute left-[28px] top-[28px]" aria-hidden>
                      <Image src="/images/figma/4229-62012/imgGroup1707483949.svg" alt="" width={17} height={2} />
                    </div>
                  </div>

                  <div className="flex-1 bg-white/[0.04] border-[1.004px] border-white/10 rounded-[16.065px] px-[12.048px] pt-[14.057px] pb-[12.048px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8.032px] rounded-full bg-white/[0.04] border-[1.004px] border-white/10 px-[10.04px] py-[5.02px]">
                        <Avatar
                          src={avatarSrc[getAvatarVariantForName(item.name)]}
                          alt={item.name}
                          className="w-[18.073px] h-[18.073px] border border-white/5"
                        />
                        <span className="text-[12.048px] font-semibold text-[#CBCACC]">{item.name}</span>
                      </div>

                      {item.status === "Completed" && (
                        <div className="flex items-center gap-[8.032px]">
                          <span className="size-[14.056px] rounded-full bg-[#3EA34B] flex items-center justify-center">
                            <Image src="/images/figma/4229-62012/img.svg" alt="" width={8} height={6} />
                          </span>
                          <span className="text-[12.048px] font-semibold text-[#CBCACC]">Completed</span>
                        </div>
                      )}

                      {item.status === "In Progress" && (
                        <div className="flex items-center gap-[8.032px]">
                          <Image src="/images/figma/4229-62012/imgGroup2.svg" alt="" width={15} height={15} />
                          <span className="text-[12.048px] font-semibold text-[#CBCACC]">In Progress</span>
                        </div>
                      )}

                      {item.status === "Queued" && (
                        <div className="flex items-center gap-[8.032px]">
                          <Image src="/images/figma/4229-62012/imgElements4.svg" alt="" width={9} height={11} />
                          <span className="text-[12.048px] font-semibold text-[#7D7C83]">Queued</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-[10.04px] flex items-center gap-[10.04px]">
                      <Image src="/images/figma/4229-62012/img1.svg" alt="" width={14} height={14} />
                      <p className="text-[14.057px] leading-[24.097px] font-bold text-[#CBCACC]">{item.task}</p>
                    </div>

                    {"subtask" in item && item.subtask && (
                      <div className="mt-[6.024px] flex items-center gap-[8.032px] pl-[24.097px]">
                        <Image src="/images/figma/4229-62012/img2.svg" alt="" width={14} height={14} />
                        <span className="text-[12.048px] text-[#7D7C83]">{item.subtask}</span>
                      </div>
                    )}

                    {"apps" in item && item.apps && "file" in item && item.file && (
                      <div className="mt-[10.04px] flex items-center gap-[10.04px] pl-[24.097px]">
                        <div className="flex items-center gap-[8.032px]">
                          <span className="text-[12.048px] font-semibold text-[#7D7C83]">Apps :</span>
                          <div className="flex items-center gap-[6.024px]">
                            {item.apps.map((app) => (
                              <span
                                key={app.label}
                                className="size-[18.073px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                                style={{ backgroundColor: app.bg }}
                              >
                                {app.label}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-[8.032px] px-[10.04px] py-[6.024px] bg-white/[0.04] border-[1.004px] border-white/10 rounded-[10.04px]">
                          <span className="size-[18.073px] rounded-[4.016px] bg-[#0F8B4C] flex items-center justify-center text-[11px] font-extrabold text-white leading-none">
                            X
                          </span>
                          <span className="text-[12.048px] font-semibold text-[#CBCACC]">{item.file}</span>
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

      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_8.032px_0px_rgba(255,255,255,0.27)]" aria-hidden />
    </div>
  );
}

