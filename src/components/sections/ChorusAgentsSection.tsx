/* ─────────────────────────────────────────────────────────
   Chorus Agents Section – "Autonomous Agents, Not Chatbots."
   Faithful to the Figma comp: 4 feature cards in 2 rows
   ───────────────────────────────────────────────────────── */

import {
  CheckIcon,
  SearchIcon,
  ClipboardIcon,
} from "@/components/icons/FeatureCardIcons";
import { IntegrationLogo } from "@/components/ui";

/* ── Shared helpers ── */

function AgentBadge() {
  return (
    <span className="inline-flex items-center shrink-0 px-[7px] py-[2px] bg-gray-600 rounded-[5px] border border-white/10 text-[11px] leading-[20px] font-semibold text-gray-100">
      AI Agent
    </span>
  );
}

function Dot({
  color = "#D9D9D9",
  size = 29,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <div
      className="rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: color,
        border: "1.4px solid #3D3C42",
      }}
    />
  );
}

function AvatarStack() {
  const avatars = [
    "/images/figma/4229-62012/imgEllipse54.png",
    "/images/figma/4229-62012/imgEllipse55.png",
    "/images/figma/4229-62012/imgEllipse56.png",
  ];
  return (
    <div className="flex items-center -space-x-[6px]">
      {avatars.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={src}
          alt=""
          className="w-[28px] h-[28px] rounded-full border-[1.4px] border-gray-600 shrink-0 object-cover"
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 1 — "You set goals, not tasks"
   ═══════════════════════════════════════════════════════════ */
function GoalsCard() {
  return (
    <div className="relative w-full md:flex-1 md:min-w-0 h-[550px] md:h-[671px] rounded-[30px] md:rounded-[40px] overflow-hidden">
      {/* Border */}
      <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] border border-white/35 pointer-events-none z-40" />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/figma/features/features-light-on-stone.svg')",
        }}
      />

      {/* Dark overlay to maintain readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />

      {/* Subtle landscape texture band */}
      <div
        className="absolute bottom-[180px] inset-x-0 h-[120px] opacity-20"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(80,60,30,0.3) 40%, rgba(60,40,20,0.2) 70%, transparent 100%)",
        }}
      />

      {/* Bottom fade to black for title readability */}
      {/* <div
      className="absolute inset-0 z-20 pointer-events-none"
      style={{
        background: "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(0,0,0,0.85) 70%, black 82%)",
      }}
    /> */}

      {/* ── UI Elements ── */}
      <div className="absolute inset-x-0 top-0 h-[460px] z-10 flex flex-col items-center px-6 pt-8 overflow-hidden">
        {/* Search bar */}
        <div
          className="w-full max-w-[370px] h-[52px] px-[20px] rounded-[24px] flex items-center gap-3 mb-4 backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(90deg, rgba(51,51,51,0.3) 0%, rgba(1,1,1,0.4) 100%)",
          }}
        >
          <SearchIcon className="w-[20px] h-[20px] text-white/50" />
          <span className="text-gray-300 text-[16px] font-semibold leading-[28px]">
            Search goals
          </span>
        </div>

        <div className="w-full max-w-[440px] flex flex-col items-start">
          {/* Track Monthly Revenue card - Now with backdrop blur and transparency */}
          <div
            className="w-full rounded-[20px] py-3 px-4 flex flex-col gap-3 backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              boxShadow: "0px 4px 61px rgba(0,0,0,0.5)",
            }}
          >
            <p className="text-gray-100 text-[16px] font-bold leading-[28px]">
              Track Monthly Revenue
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <ClipboardIcon className="w-[16px] h-[16px] text-gray-300" />
                <span className="text-gray-300 text-[14px] font-semibold leading-[22px]">
                  Tasks :
                </span>
                <span className="text-gray-300 text-[14px] font-bold leading-[22px]">
                  7
                </span>
              </div>
              <div className="flex items-center gap-2">
                <AvatarStack />
                <span className="text-gray-300 text-[14px] font-bold leading-[22px]">
                  +3
                </span>
              </div>
            </div>
          </div>

          {/* Green checkmark connector (left aligned to cards) */}
          <div className="flex flex-col items-start -my-1 self-start">
            <div className="h-[26px] border-l border-dotted border-gray-200/50 ml-[11px]" />
            <div className="flex items-center">
              <div className="w-[22px] h-[22px] rounded-full bg-success flex items-center justify-center">
                <CheckIcon className="w-[10px] h-[8px] text-white" />
              </div>
              <div className="h-0 w-[20px] border-t border-dotted border-gray-200/50" />
            </div>
          </div>

          {/* Franks Lampard subtask card - Now with backdrop blur and transparency */}
          <div
            className="w-full max-w-[89%] ml-[40px] -mt-[20px] rounded-[20px] py-3 px-4 flex flex-col gap-3 backdrop-blur-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              boxShadow: "0px 4px 61px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 px-[10px] py-[3px] rounded-[10px] bg-white/4 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/Ellipse 53.svg"
                  alt=""
                  className="w-[22px] h-[22px] rounded-full shrink-0"
                />
                <span className="text-gray-100 text-[14px] font-semibold leading-[22px]">
                  Franks Lampard
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[16px] h-[16px] rounded-full bg-success flex items-center justify-center">
                  <CheckIcon className="w-[7px] h-[6px] text-white" />
                </div>
                <span className="text-white text-[14px] font-bold">
                  Completed
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardIcon className="w-[16px] h-[16px] text-gray-300 shrink-0" />
              <span className="text-gray-100 text-[14px] font-bold leading-[28px]">
                Collect revenue data from bank APIs
              </span>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-gray-100 text-[12px] font-semibold leading-[22px]">
                  Apps :
                </span>
                <div className="flex items-center -space-x-[2px]">
                  {/* Slack */}
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-[#4A154B] border border-white/15">
                    <svg viewBox="0 0 24 24" className="size-full p-[4px]">
                      <circle cx="8" cy="8" r="2.6" fill="#36C5F0" />
                      <circle cx="16" cy="8" r="2.6" fill="#2EB67D" />
                      <circle cx="8" cy="16" r="2.6" fill="#E01E5A" />
                      <circle cx="16" cy="16" r="2.6" fill="#ECB22E" />
                    </svg>
                  </span>
                  {/* HubSpot */}
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-[#FF7A59] border border-white/15">
                    <span className="text-white text-[10px] font-extrabold leading-none">
                      H
                    </span>
                  </span>
                  {/* Stripe */}
                  <span className="inline-grid place-items-center w-[22px] h-[22px] rounded-full bg-[#635BFF] border border-white/15">
                    <span className="text-white text-[10px] font-extrabold leading-none">
                      S
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/excel-icon.png"
                  alt="Excel file"
                  className="w-[20px] h-[20px] rounded-[3px] object-cover"
                />
                <span className="text-gray-100 text-[12px] font-semibold leading-[22px]">
                  Stripe_revenue_report.csv
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Title + desc ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-1 pb-6 px-6">
        <h3 className="text-white text-[26px] font-bold leading-[40px] text-center">
          You set goals, not tasks
        </h3>
        <p className="text-gray-300 text-[16px] font-semibold leading-[26px] text-center max-w-[440px]">
          The best way to reach humans instead of spam folders. Deliver
          transactional and marketing emails at scale.
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 2 — "They collaborate with each other"
   Robot center, avatar orbit, cursor+label pills
   ═══════════════════════════════════════════════════════════ */
function CollaborateCard() {
  const avatarOrbit = [
    { src: "/images/figma/Ellipse 53.svg", angle: -90 },
    { src: "/images/figma/Ellipse 54.svg", angle: 30 },
    { src: "/images/figma/Ellipse 53 (1).svg", angle: 150 },
  ];

  const labelOrbit = [
    { label: "Task", angle: 210 },
    { label: "Chat", angle: -30 },
    { label: "Goals", angle: 90 },
  ];

  const avatarRadius = 160;
  const labelRadius = 210;
  const arrowRadius = 160;

  return (
    <div className="w-full md:w-[600px] h-[700px] md:h-[671px] relative">
      <div className="w-full md:w-[600px] h-[700px] md:h-[671px] left-0 top-0 absolute bg-gradient-to-b from-black/80 to-black rounded-[40px] border border-white/30" />
      <div className="w-[467.27px] h-[455.33px] left-[49.47px] top-[32.39px] absolute rounded-full shadow-[0px_6.177914619445801px_6.177914619445801px_0px_rgba(0,0,0,0.25)] border-[2.85px] border-white/5" />
      <img
        className="w-16 h-16 left-[102.39px] top-[310.89px] absolute rounded-full"
        src="images/figma/features/man-memoji.svg"
      />
      <img
        className="w-16 h-16 left-[456.03px] top-[235.97px] absolute rounded-full"
        src="images/figma/features/girl-memoji.svg"
      />
      <img
        className="w-16 h-16 left-[198.48px] top-[36.92px] absolute rounded-full"
        src="images/figma/features/boy-memoji.svg"
      />
      <div className="w-96 h-96 left-[102px] top-[78.41px] absolute rounded-full shadow-[0px_6.177914619445801px_6.177914619445801px_0px_rgba(0,0,0,0.25)] border-[2.85px] border-white/10" />
      <div className="w-96 h-96 left-[100.40px] top-[416.34px] absolute origin-top-left rotate-[-83.96deg] bg-neutral-800/20 rounded-full shadow-[0px_6.177914142608643px_6.177914142608643px_0px_rgba(0,0,0,0.25)]" />
      <div className="w-72 h-72 left-[144.53px] top-[113.50px] absolute rounded-full shadow-[0px_6.177914619445801px_6.177914619445801px_0px_rgba(0,0,0,0.25)] border-[2.85px] border-white/10" />
      <div className="w-40 h-36 left-[214.04px] top-[178.68px] absolute">
        <img src="images/figma/features/bot-with-bg.svg" />
      </div>
      {/* <div className="w-20 h-5 left-[255.97px] top-[241.49px] absolute bg-white rounded-[53.76px]" /> */}
      {/* <div className="w-[3.30px] h-2.5 left-[293.73px] top-[212.91px] absolute bg-zinc-300" /> */}
      {/* <div className="w-5 h-3 left-[286.21px] top-[222.83px] absolute bg-white rounded-[38.40px]" /> */}
      {/* <div className="w-16 h-12 left-[260.93px] top-[226.19px] absolute bg-white rounded-[189.44px]" /> */}
      {/* <div className="w-14 h-7 left-[267.65px] top-[237.73px] absolute bg-zinc-600 rounded-[99.84px]" /> */}
      <div className="w-2.5 h-2.5 left-[275.90px] top-[246.18px] absolute bg-White rounded-full" />
      <div className="w-2.5 h-2.5 left-[303.92px] top-[246.18px] absolute bg-White rounded-full" />
      {/* <div className="w-3 h-2.5 left-[289.75px] top-[202.71px] absolute bg-white rounded-full" /> */}
      <div className="w-10 h-10 left-[9rem] top-[11.5rem] absolute origin-top-left rotate-[154.79deg] overflow-hidden">
        <img src="images/figma/features/boy-cursor.svg" />
      </div>
      <div className="w-16 h-8 left-[44.03px] top-[140.73px] absolute inline-flex flex-col justify-start items-center gap-3">
        <div className="h-8 p-2.5 bg-gray-600 rounded-lg inline-flex justify-center items-center gap-2">
          <div className="justify-start text-White text-lg font-semibold font-['Urbanist'] leading-9">
            Task
          </div>
        </div>
      </div>
      <div className="w-11 h-11 left-[326.70px] top-[378.96px] absolute origin-top-left overflow-hidden">
        <img src="images/figma/features/man-cursor.svg" />
      </div>
      <div className="w-16 h-8 left-[351.20px] top-[415.93px] absolute inline-flex flex-col justify-start items-center gap-3">
        <div className="h-8 p-2.5 bg-gray-600 rounded-lg inline-flex justify-center items-center gap-2">
          <div className="justify-start text-White text-lg font-semibold font-['Urbanist'] leading-9">
            Goals
          </div>
        </div>
      </div>
      <div className="w-10 h-10 left-[26rem] top-[8rem] absolute origin-top-left overflow-hidden">
        <img src="images/figma/features/girl-cursor.svg" />
      </div>
      <div className="w-16 h-8 left-[442.39px] top-[107.61px] absolute inline-flex flex-col justify-start items-center gap-3">
        <div className="h-8 p-2.5 bg-gray-600 rounded-lg inline-flex justify-center items-center gap-2">
          <div className="justify-start text-White text-lg font-semibold font-['Urbanist'] leading-9">
            Chat
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-[506.63px] h-28 md:left-[30.87px] top-[513px] absolute inline-flex flex-col justify-start items-center gap-2">
        <div className="justify-center text-white text-2xl font-bold font-['Urbanist'] leading-[65.07px]">
          They collaborate with each other
        </div>
        <div className="w-full md:w-[526px] text-center justify-start text-white/40 text-base font-bold font-['Urbanist'] leading-8">
          The best way to reach humans instead of spam folders. Deliver
          transactional and marketing emails at scale.
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 3 — "They make decisions within your guidelines"
   393×535, narrow glass card
   ═══════════════════════════════════════════════════════════ */
function DecisionsCard() {
  return (
    <div
      className="relative w-full md:w-[393px] shrink-0 h-[480px] md:h-[535px] rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/20"
      style={{
        background:
          "linear-gradient(101deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.05) 100%)",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="flex flex-col gap-[15px] pt-[50px] px-[24px] pb-[10px] h-full overflow-hidden">
        {/* Frank message */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/figma/features/boy-memoji.svg"
              alt=""
              className="w-[30px] h-[30px] rounded-full shrink-0"
            />
            <span className="text-white text-[14px] font-bold leading-[24px]">
              Frank
            </span>
            <AgentBadge />
            <span className="text-gray-300 text-[14px] font-medium leading-[22px]">
              1.50 AM
            </span>
          </div>
          <div className="p-[10px] bg-white/4 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] flex flex-col gap-[6px]">
            <div className="h-[8px] w-[85%] bg-white/5 rounded-[8px]" />
            <div className="h-[8px] w-full bg-white/5 rounded-[8px]" />
          </div>
          <div
            className="flex items-center gap-[10px] px-[16px] py-[10px] rounded-[16px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(242,171,83,0) 0%, rgba(192,136,66,0.27) 31%, rgba(140,99,48,0) 100%)",
            }}
          >
            <ClipboardIcon className="w-[14px] h-[14px] text-gray-300 shrink-0" />
            <span className="text-gray-100 text-[13px] font-medium leading-[22px]">
              Goal Created :{" "}
              <span className="text-white font-semibold">
                Track Monthly Revenue
              </span>
            </span>
          </div>
        </div>

        {/* Skeleton (faded) */}
        <div className="flex flex-col gap-[8px] opacity-50">
          <div className="flex items-center gap-[10px]">
            <div className="w-[30px] h-[30px] bg-white/8 rounded-full border border-white/10 shrink-0" />
            <div className="h-[30px] flex-1 bg-white/8 rounded-[8px] border border-white/10" />
          </div>
          <div className="h-[8px] w-full bg-white/8 rounded-[8px] border border-white/10" />
        </div>

        {/* Danny message */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/figma/features/man-memoji.svg"
              alt=""
              className="w-[26px] h-[26px] rounded-full shrink-0"
            />
            <span className="text-white text-[14px] font-bold leading-[24px]">
              Danny
            </span>
            <AgentBadge />
            <span className="text-gray-300 text-[14px] font-medium leading-[22px]">
              1.50 AM
            </span>
          </div>
          <div className="p-[10px] bg-white/4 rounded-tl-[14px] rounded-tr-[14px] rounded-bl-[14px] flex flex-col gap-[6px]">
            <div className="h-[8px] w-[85%] bg-white/5 rounded-[8px]" />
            <div className="h-[8px] w-full bg-white/5 rounded-[8px]" />
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="h-[30px] px-3 py-1 bg-gray-800 rounded-full border border-green shadow-[0_0_8px_rgba(18,130,95,0.32)] flex items-center gap-2">
              <CheckIcon className="w-[10px] h-[8px] text-white" />
              <span className="text-white text-[13px] font-bold leading-[22px]">
                Connect
              </span>
            </div>
            <div className="h-[30px] px-3 py-1 bg-gray-800 rounded-full border border-[#C92929] flex items-center gap-2">
              <img src={"images/figma/features/minus-sign-circle.svg"} />
              <span className="text-gray-100 text-[13px] font-bold leading-[22px]">
                Reject
              </span>
            </div>
          </div>
        </div>

        <div className="mt-auto pb-2">
          <h3 className="text-white text-[26px] font-bold leading-[36px] text-center max-w-[291px] mx-auto">
            They make decisions within your guidelines
          </h3>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 4 — "They learn from your feedback"
   811×537, title top-left, macOS chat window
   ═══════════════════════════════════════════════════════════ */
function FeedbackCard() {
  return (
    <div className="relative w-full md:flex-1 md:min-w-0 h-[480px] md:h-[537px] rounded-[30px] md:rounded-[37px] overflow-hidden">
      {/* Subtle dark blue/purple bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('/images/figma/features/dessert-and-pearl.svg')",
        }}
      />

      {/* Title top-left */}
      <div className="absolute top-[24px] left-[20px] md:top-[35px] md:left-[30px] z-30 max-w-[280px] md:max-w-[394px]">
        <h3 className="text-white text-[20px] md:text-[26px] font-bold leading-[30px] md:leading-[40px]">
          They learn from your feedback
        </h3>
      </div>

      {/* ── macOS Chat Window ── */}
      <div className="absolute top-[90px] md:top-[90px] left-[16px] right-[16px] bottom-0 z-[15] md:left-[50px] md:right-[50px]">
        <div
          className="w-full h-full bg-[#131313] rounded-t-[14px] md:rounded-t-[18px] border-[1.5px] border-white/10 overflow-hidden"
          style={{ backdropFilter: "blur(31px)" }}
        >
          {/* Traffic light dots */}
          <div className="flex items-center gap-[8px] px-[16px] md:px-[22px] pt-[12px] md:pt-[14px] pb-[12px] md:pb-[16px]">
            <div className="w-[10px] h-[9px] rounded-sm bg-[#F24E1E]" />
            <div className="w-[10px] h-[9px] rounded-sm bg-[#FFD02F]" />
            <div className="w-[10px] h-[9px] rounded-sm bg-[#A6C03D]" />
          </div>

          <div className="flex flex-col gap-[10px] md:gap-[14px] px-[16px] md:px-[22px] overflow-hidden">
            {/* John Doe */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/image 19.svg"
                  alt=""
                  className="w-[26px] h-[26px] rounded-full shrink-0"
                />
                <div className="w-[8px] h-[8px] rounded-full bg-green border border-white" />
                <span className="text-white text-[13px] font-bold leading-[22px]">
                  John Doe
                </span>
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">
                  1.46 AM
                </span>
              </div>
              <div className="p-[10px] bg-white/6 rounded-[14px]">
                <p className="text-gray-100 text-[13px] font-medium leading-[20px]">
                  Hello Danny! I want to manage company&apos;s finances and team
                  performance every month.
                </p>
              </div>
            </div>

            {/* Danny */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/features/man-memoji.svg"
                  alt=""
                  className="w-[26px] h-[26px] rounded-full shrink-0"
                />
                <span className="text-white text-[13px] font-bold leading-[22px]">
                  Danny
                </span>
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">
                  1.50 AM
                </span>
              </div>
              <div className="px-[10px] py-[14px] rounded-[14px] border-2 border-white/10">
                <p className="text-white text-[13px] font-medium leading-[20px]">
                  Hey John. From your request, I can see that you&apos;re aiming
                  to accomplish two main goals
                </p>
              </div>
            </div>

            {/* Frank AI Agent */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center gap-[8px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/figma/features/boy-memoji.svg"
                  alt=""
                  className="w-[26px] h-[26px] rounded-full shrink-0"
                />
                <span className="text-white text-[13px] font-bold leading-[22px]">
                  Frank
                </span>
                <AgentBadge />
                <span className="text-gray-300 text-[13px] font-medium leading-[20px]">
                  1.50 AM
                </span>
              </div>
              <div className="p-[10px] bg-white/6 rounded-[14px]">
                <p className="text-gray-100 text-[13px] font-medium leading-[24px]">
                  From your request, you&apos;re aiming to accomplish two main
                  goals. I&apos;ll connect with your CRM and task management
                  tool to fetch automatically. Shall I connect?
                </p>
                <div className="flex items-center gap-[3px] mt-2">
                  <div className="h-[20px] pl-[4px] pr-[8px] bg-white/4 rounded-full border border-white/10 flex items-center gap-[5px]">
                    <img src={"images/figma/features/s.svg"} />
                    <span className="text-gray-100 text-[11px] font-semibold leading-[16px]">
                      Stripe
                    </span>
                  </div>
                  <span className="text-white text-[13px] font-medium mx-[2px]">
                    +
                  </span>
                  <div className="h-[20px] pl-[4px] pr-[8px] bg-white/4 rounded-full border border-white/10 flex items-center gap-[5px]">
                    <img src={"images/figma/features/nodes.svg"} />
                    <span className="text-gray-100 text-[11px] font-semibold leading-[16px]">
                      HubSpot
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partial trailing Frank */}
            <div className="flex items-center gap-[8px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/figma/features/boy-memoji.svg"
                alt=""
                className="w-[26px] h-[26px] rounded-full shrink-0"
              />
              <span className="text-white text-[13px] font-bold leading-[22px]">
                Frank
              </span>
              <AgentBadge />
              <span className="text-gray-300 text-[13px] font-medium leading-[20px]">
                1.50 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════ */
export function ChorusAgentsSection() {
  return (
    <section className="w-full bg-black px-4 md:px-[100px] py-[50px] md:py-[75px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-[20px] md:gap-[24px] w-full">
          <div className="h-[36px] px-3 py-1 bg-white/7 rounded-full overflow-hidden inline-flex items-center justify-center">
            <span className="text-white text-[16px] font-bold leading-[24px] text-center">
              Chorus Agents
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <h2 className="text-white text-[32px] md:text-[50px] font-bold leading-[1.2] md:leading-[78px] text-center">
              Autonomous Agents, Not Chatbots.
            </h2>
            <p className="text-gray-300 text-[16px] md:text-[26px] font-medium leading-[26px] md:leading-[36px] text-center">
              The Difference That Changes Everything
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[20px] md:gap-[40px] w-full">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-start gap-[20px] md:gap-[40px] w-full">
            <GoalsCard />
            <CollaborateCard />
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[44px] w-full">
            <DecisionsCard />
            <FeedbackCard />
          </div>
        </div>
      </div>
    </section>
  );
}
