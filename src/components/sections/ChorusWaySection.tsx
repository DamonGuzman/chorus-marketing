import { Badge, Container, Section } from "@/components/ui";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";

function ReloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[20px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 12a8 8 0 1 1-2.34-5.66"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20 4v6h-6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[20px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 7v6l3 2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UserSettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[18px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 11a3.25 3.25 0 1 0-3.25-3.25A3.25 3.25 0 0 0 12 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5.25 20a6.75 6.75 0 0 1 13.5 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19.5 13.75l.55.95-.6 1.04-1.1-.1-.7.85.4 1.03-.93.6-.95-.55-1.04.6.1 1.1-.85.7-1.03-.4-.6.93.55.95-.8.8-.95-.55-.95.55-.8-.8.55-.95-.6-.93-1.03.4-.85-.7.1-1.1-1.04-.6-.95.55-.6-.93.4-1.03-.7-.85-1.1.1-.6-1.04.55-.95.95-.55-.1-1.1.85-.7 1.03.4.6-.93-.55-.95.8-.8.95.55.95-.55.8.8-.55.95.6.93 1.03-.4.85.7-.1 1.1 1.04.6.95-.55.93.6-.4 1.03.7.85 1.1-.1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.65"
      />
    </svg>
  );
}

function WorkflowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[20px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6h4v4H6V6Zm8 0h4v4h-4V6ZM6 14h4v4H6v-4Zm8 0h4v4h-4v-4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M10 8h4M8 10v4M16 10v4M10 16h4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserSwitchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[20px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9.5 11a3.25 3.25 0 1 0-3.25-3.25A3.25 3.25 0 0 0 9.5 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 20a6.5 6.5 0 0 1 11-4.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M14 9.5h6M18.5 7l2.5 2.5-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 14.5h-6M16.5 17 14 14.5l2.5-2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
    </svg>
  );
}

function CoinsDollarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("size-[20px] text-white/90", className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 4.5c4.14 0 7.5 1.68 7.5 3.75S16.14 12 12 12 4.5 10.32 4.5 8.25 7.86 4.5 12 4.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 8.25v7.5C4.5 17.82 7.86 19.5 12 19.5s7.5-1.68 7.5-3.75v-7.5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M12 7v3.5m1.8-2.9c-.4-.35-1.05-.6-1.8-.6-1.1 0-2 .5-2 1.2s.6 1 2 1 2 .3 2 1.2S13.1 12 12 12c-.75 0-1.4-.24-1.8-.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ChorusWayCallout = {
  label: string;
  leftPercent: number;
  topPercent: number;
  icon: React.ReactNode;
  iconBoxClassName?: string;
  iconBoxStyle?: React.CSSProperties;
};

function ChorusWayCallout({
  label,
  className,
  style,
  icon,
  iconBoxClassName,
  iconBoxStyle,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
  icon: React.ReactNode;
  iconBoxClassName?: string;
  iconBoxStyle?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "bg-white/[0.09] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
        "rounded-[16px] h-[66px] w-[236px] pl-[10px] py-[4px]",
        "flex items-center",
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-[14px]">
        <div className="relative size-[42.828px] shrink-0 grid place-items-center">
          <div
            className={cn("absolute inset-0 rounded-[12px]", iconBoxClassName)}
            style={iconBoxStyle}
          />
          <div className="relative">{icon}</div>
        </div>
        <div className="flex items-center w-[149px]">
          <p className="w-[169px] text-[14px] leading-[22px] font-semibold text-gray-100 whitespace-pre-wrap">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ChorusWaySection() {
  const callouts: ChorusWayCallout[] = [
    {
      label: "Spin up any role in 60 seconds",
      leftPercent: (240 / 705) * 100,
      topPercent: (18.14 / 506.28) * 100,
      icon: <ReloadIcon />,
      iconBoxStyle: {
        backgroundImage:
          "linear-gradient(1.6716deg, rgb(255, 107, 107) 1.5116%, rgb(153, 64, 64) 98.759%)",
      },
    },
    {
      label: "Full productivity from\nminute one",
      leftPercent: (469 / 705) * 100,
      topPercent: (167.14 / 506.28) * 100,
      icon: <TimerIcon />,
      iconBoxClassName: "bg-[#3860cc]",
    },
    {
      label: "Every role works in\nharmony",
      leftPercent: (440 / 705) * 100,
      topPercent: (331.14 / 506.28) * 100,
      icon: <UserSettingsIcon />,
      iconBoxClassName: "bg-[#6a38cc]",
    },
    {
      label: "One direction cascades\nautomatically",
      leftPercent: (232 / 705) * 100,
      topPercent: (440.14 / 506.28) * 100,
      icon: <WorkflowIcon />,
      iconBoxClassName: "bg-[#a02a77]",
    },
    {
      label: "Scale without adding\ncoordination overhead",
      leftPercent: (0 / 705) * 100,
      topPercent: (134.14 / 506.28) * 100,
      icon: <UserSwitchIcon />,
      iconBoxClassName: "bg-[#13622e]",
    },
    {
      label: "$0.12/hour per AI agent",
      leftPercent: (30 / 705) * 100,
      topPercent: (314.14 / 506.28) * 100,
      icon: <CoinsDollarIcon />,
      iconBoxClassName: "bg-[#494551]",
    },
  ];

  return (
    <Section className="relative py-[75px]" id="chorus-way">
      <Container>
        <div className="flex flex-col lg:flex-row gap-[52px] items-start lg:items-center">
          <div className="flex flex-col gap-[43px] items-start max-w-[464px]">
            <Badge>The Solution</Badge>

            <h2 className="text-[40px] sm:text-[50px] leading-[52px] sm:leading-[64px] tracking-[-0.5px] font-bold text-white whitespace-pre-wrap">
              <span className="block">The Chorus Way</span>
              <span className="block">Manifest Your Team Instantly</span>
            </h2>

            <p className="text-[18px] leading-[36px] font-medium text-gray-300 whitespace-pre-wrap">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage
              with customers, and grow their revenue.
            </p>

            <p className="text-[18px] leading-[36px] font-medium text-gray-300 whitespace-pre-wrap">
              VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
            </p>
          </div>

          {/* Desktop: orbit diagram */}
          <div className="hidden lg:block relative w-[705px] h-[506px] shrink-0">
            {/* Concentric circles */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[57.2%] aspect-square rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44%] aspect-square rounded-full border border-white/10" />
            </div>

            {/* Center orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative size-[149px] rounded-full">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,_rgba(180,138,251,0.7),_rgba(145,85,237,0.7),_rgba(180,138,251,0.7))] blur-[0.25px] opacity-80" />
                <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),rgba(255,255,255,0.06)_45%,rgba(0,0,0,0)_75%)] bg-[#0b0b0f] border border-white/10 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.55)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <Logo className="w-[60px] h-[58px] text-white/80" />
                </div>
              </div>
            </div>

            {/* Callouts */}
            {callouts.map((callout) => (
              <ChorusWayCallout
                key={callout.label}
                label={callout.label}
                icon={callout.icon}
                iconBoxClassName={callout.iconBoxClassName}
                iconBoxStyle={callout.iconBoxStyle}
                className="absolute"
                style={{
                  left: `${callout.leftPercent}%`,
                  top: `${callout.topPercent}%`,
                }}
              />
            ))}
          </div>

          {/* Mobile: stacked benefit cards */}
          <div className="lg:hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              {callouts.map((callout) => (
                <ChorusWayCallout
                  key={callout.label}
                  label={callout.label.replaceAll("\n", " ")}
                  icon={callout.icon}
                  iconBoxClassName={callout.iconBoxClassName}
                  iconBoxStyle={callout.iconBoxStyle}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
