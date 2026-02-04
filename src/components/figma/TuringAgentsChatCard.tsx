import Image from "next/image";
import { cn } from "@/lib/utils";
import { IntegrationLogo } from "@/components/ui";
import { AddIcon, ArrowRightRoundIcon, FlagIcon, MicIcon, SmileIcon } from "@/components/icons";

type AvatarVariant = "john" | "danny" | "frank";

const avatarSrc: Record<AvatarVariant, string> = {
  john: "/images/team/member-1.png",
  danny: "/images/team/member-2.png",
  frank: "/images/team/member-3.png",
};

function Avatar({
  alt,
  variant,
  className,
  showStatus,
}: {
  alt: string;
  variant: AvatarVariant;
  className?: string;
  showStatus?: boolean;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 size-full">
        <Image src={avatarSrc[variant]} alt={alt} fill className="object-cover" />
      </div>
      {showStatus ? (
        <span className="absolute bottom-[1px] right-[1px] size-[8.548px] rounded-full bg-[#2EB67D] ring-2 ring-[#0b0b0c]" />
      ) : null}
    </div>
  );
}

function MessageHeader({
  avatar,
  name,
  time,
  badge,
  nodeId,
}: {
  avatar: React.ReactNode;
  name: string;
  time: string;
  badge?: React.ReactNode;
  nodeId?: string;
}) {
  return (
    <div className="flex items-center gap-[9.921px]" data-node-id={nodeId}>
      {avatar}
      <div className="flex items-center gap-[3.969px]">
        <span className="text-[13.89px] font-bold leading-[23.812px] text-white">{name}</span>
        {badge}
      </div>
      <span className="text-[13.89px] font-medium leading-[21.827px] text-[#7D7C83]">{time}</span>
    </div>
  );
}

function IntegrationChip({ name }: { name: "Stripe" | "HubSpot" }) {
  return (
    <span className="inline-flex items-center gap-[5.953px] h-[21.827px] rounded-[19.843px] bg-white/[0.04] border border-white/10 pl-[4.961px] pr-[9.921px]">
      <IntegrationLogo name={name} size="sm" shape="circle" className="border-0 shadow-none" />
      <span className="text-[11.906px] font-semibold leading-[17.859px] text-[#CBCACC]">{name}</span>
    </span>
  );
}

export function TuringAgentsChatCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-white/[0.04] rounded-[39.686px] shadow-[0px_4.42px_60.775px_0px_rgba(0,0,0,1)]",
        "px-[11.906px] py-[3.969px]",
        "flex items-center justify-center",
        "w-[642.912px] h-[650.849px]",
        className
      )}
      data-node-id="4229:61886"
    >
      <div className="flex flex-col gap-[15.874px] items-start w-[603.226px]" data-node-id="4229:61887">
        {/* John */}
        <div className="flex flex-col gap-[9.921px] items-start w-[581.399px]" data-node-id="4229:61888">
          <MessageHeader
            nodeId="4229:61889"
            avatar={<Avatar variant="john" alt="John Doe" className="size-[27.78px]" showStatus />}
            name="John Doe"
            time="1.46 AM"
          />
          <div
            className="bg-white/[0.06] rounded-[15.874px] p-[11.906px] h-[43.655px] w-[564.532px] flex items-center"
            data-node-id="4229:61900"
          >
            <p className="text-[13.89px] font-medium leading-[21.827px] text-[#CBCACC]">
              Hello Danny! I want to manage company&apos;s finances and team performance every month.
            </p>
          </div>
        </div>

        {/* Danny */}
        <div className="flex flex-col gap-[9.921px] items-start w-[562.548px]" data-node-id="4229:61903">
          <MessageHeader
            nodeId="4229:61904"
            avatar={<Avatar variant="danny" alt="Danny" className="size-[27.78px]" />}
            name="Danny"
            time="1.50 AM"
          />
          <div
            className="border-[1.984px] border-white/10 rounded-[15.874px] px-[11.906px] py-[15.874px] w-full"
            data-node-id="4229:61912"
          >
            <p className="text-[13.89px] font-medium leading-[21.827px] text-white">
              Hey John. From your request, I can see that you&apos;re aiming to accomplish two main goals
            </p>
          </div>
        </div>

        {/* Frank message */}
        <div className="flex flex-col gap-[9.921px] items-start w-[578px]" data-node-id="4229:61915">
          <MessageHeader
            nodeId="4229:61916"
            avatar={<Avatar variant="frank" alt="Frank" className="size-[27.78px]" />}
            name="Frank"
            time="1.50 AM"
            badge={
              <span className="bg-[#3D3C42] border border-white/10 rounded-[3.969px] h-[17.859px] px-[5.74px] grid place-items-center">
                <span className="text-[9.921px] font-semibold leading-[19.516px] text-[#CBCACC]">AI Agent</span>
              </span>
            }
          />
          <div
            className="bg-white/[0.06] rounded-[15.874px] p-[11.906px] h-[62px] w-[602px] flex items-center"
            data-node-id="4229:61926"
          >
            <p className="text-[13.89px] font-medium leading-[25.796px] text-[#CBCACC]">
              From your request, you&apos;re aiming to accomplish two main goals. I&apos;ll connect with your CRM and task management tool{" "}
              <span className="inline-flex items-center gap-[2.976px] mx-[6px]">
                <IntegrationChip name="Stripe" />
                <span className="text-[13.89px] font-medium leading-[21.827px] text-white">+</span>
                <IntegrationChip name="HubSpot" />
              </span>{" "}
              to fetch automatically. Shall I connect?
            </p>
          </div>
        </div>

        {/* John reply */}
        <div className="flex flex-col gap-[9.921px] items-start w-[328.401px]" data-node-id="4229:61945">
          <MessageHeader
            nodeId="4229:61946"
            avatar={<Avatar variant="john" alt="John Doe" className="size-[27.78px]" showStatus />}
            name="John Doe"
            time="1.46 AM"
          />
          <div
            className="bg-white/[0.06] rounded-[15.874px] p-[11.906px] h-[43.655px] flex items-center"
            data-node-id="4229:61957"
          >
            <p className="text-[13.89px] font-medium leading-[21.827px] text-[#CBCACC]">
              Yes, connect Stripe now. I&apos;ll connect HubSpot later
            </p>
          </div>
        </div>

        {/* Goal created */}
        <div className="flex flex-col items-start w-[602.234px]" data-node-id="4229:61960">
          <MessageHeader
            nodeId="4229:61962"
            avatar={<Avatar variant="frank" alt="Frank" className="size-[27.78px]" />}
            name="Frank"
            time="1.50 AM"
            badge={
              <span className="bg-[#3D3C42] border border-white/10 rounded-[3.969px] h-[17.859px] px-[5.74px] grid place-items-center">
                <span className="text-[9.921px] font-semibold leading-[19.516px] text-[#CBCACC]">AI Agent</span>
              </span>
            }
          />

          <div
            className={cn(
              "mt-[9.921px] w-full h-[39.686px] rounded-[15.874px]",
              "pl-[17.859px] pr-[9.921px] py-[9.921px]",
              "flex items-center justify-between",
              "bg-[linear-gradient(90deg,rgba(242,171,83,0.05)_0%,rgba(192,135,66,0.27)_31.361%,rgba(140,99,48,0.11)_100%)]"
            )}
            data-node-id="4229:61972"
          >
            <div className="flex items-center gap-[9.921px]" data-node-id="4229:61973">
              <span className="size-[17.859px] text-white/50" aria-hidden>
                <FlagIcon className="size-[17.859px]" />
              </span>
              <p className="text-[13.89px] font-medium leading-[21.827px] text-[#CBCACC]">
                Goal Created: <span className="font-normal text-white">Track Monthly Revenue</span>
              </p>
              <div className="flex items-center gap-[7.937px]" data-node-id="4229:61976">
                <span className="size-[10.914px] rounded-full bg-[#F2AB53]" aria-hidden />
                <span className="text-[13.89px] font-medium leading-[21.827px] text-[#CBCACC]">In progress</span>
              </div>
            </div>
            <span className="size-[23.812px] text-[#CBCACC]" aria-hidden>
              <ArrowRightRoundIcon className="size-[23.812px]" />
            </span>
          </div>
        </div>

        {/* Composer */}
        <div
          className="bg-[#232227] rounded-[16px] pl-[12px] pr-[16px] py-[12px] w-[603.226px] h-[105.168px] flex flex-col justify-between"
          data-node-id="4229:61981"
        >
          <p className="text-[14px] font-bold leading-[24px] text-[#7D7C83]" data-node-id="I4229:61981;705:83051">
            Ask or make anything
          </p>
          <div className="flex items-center justify-between" data-node-id="I4229:61981;705:83052">
            <div className="flex items-center gap-[10px] text-[#7D7C83]" data-node-id="I4229:61981;705:85230">
              <span className="size-[20px] grid place-items-center" aria-hidden>
                <AddIcon className="size-[20px]" />
              </span>
              <span className="text-[14px] font-semibold leading-[24px]">@</span>
              <span className="text-[16px] font-medium leading-none">Aa</span>
            </div>
            <div className="flex items-center gap-[10px] text-[#7D7C83]" data-node-id="I4229:61981;705:83054">
              <span className="size-[21.127px] grid place-items-center" aria-hidden>
                <SmileIcon className="size-[21.127px]" />
              </span>
              <span className="size-[21.127px] grid place-items-center" aria-hidden>
                <MicIcon className="size-[21.127px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

