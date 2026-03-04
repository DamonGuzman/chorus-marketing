/* ─────────────────────────────────────────────────────────
   Chorus Agents Section – "Autonomous Agents, Not Chatbots."
   Faithful to the Figma comp: 4 feature cards in 2 rows
   ───────────────────────────────────────────────────────── */

import Image from "next/image";
import {
  CheckIcon,
  SearchIcon,
  ClipboardIcon,
} from "@/components/icons/FeatureCardIcons";
import { AnimateOnScroll, Badge, IntegrationLogo, ScrollParallax, ScrollTextReveal } from "@/components/ui";

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
        <Image
          key={i}
          src={src}
          alt=""
          width={32}
          height={32}
          className="w-[22px] h-[22px] md:w-8 md:h-8 rounded-full border-[1.41px] border-gray-600 shrink-0 object-cover"
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
    <div className="relative w-80 md:w-auto h-96 md:h-[671px] rounded-3xl md:rounded-[40px] overflow-hidden">
      {/* Border */}
      <div className="absolute inset-0 rounded-3xl md:rounded-[40px] border border-white/35 pointer-events-none z-40" />

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
        className="absolute bottom-[180px] md:bottom-[180px] inset-x-0 h-[120px] opacity-20"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(80,60,30,0.3) 40%, rgba(60,40,20,0.2) 70%, transparent 100%)",
        }}
      />

      {/* ── UI Elements ── */}
      <div className="absolute inset-x-0 top-0 h-[230px] md:h-[460px] z-10 flex flex-col items-center px-3 md:px-6 pt-4 md:pt-8 overflow-hidden">
        {/* Search bar */}
        <div className="w-full max-w-[280px] md:max-w-[514px] h-[36px] md:h-16 pl-3 md:pl-6 pr-2 md:pr-2.5 py-1.5 md:py-2.5 bg-gradient-to-r from-zinc-800/50 to-black rounded-[14px] md:rounded-3xl inline-flex flex-col justify-center items-start gap-2.5 mb-2 md:mb-4">
          <div className="self-stretch inline-flex justify-start items-center gap-2 md:gap-4">
            <SearchIcon className="w-4 h-4 md:w-6 md:h-6 text-white/50 shrink-0" />
            <span className="text-gray-300 text-xs md:text-xl font-semibold font-['Urbanist'] leading-5 md:leading-8 line-clamp-1">
              Search goals
            </span>
          </div>
        </div>

        <div className="w-full max-w-[280px] md:max-w-[514px] flex flex-col items-start">
          {/* Track Monthly Revenue card */}
          <div
            className="w-full md:w-[514px] md:h-28 pl-2.5 md:pl-5 pr-2 md:pr-3 py-1.5 md:py-1 bg-white/5 rounded-[12px] md:rounded-3xl inline-flex flex-col justify-center items-center"
            style={{
              boxShadow: "inset 0px 0px 6.4px 0px rgba(255,255,255,0.27)",
            }}
          >
            <div className="self-stretch flex flex-col justify-center items-start gap-2 md:gap-1.5">
              <p className="text-gray-100 text-xs md:text-base font-bold font-['Urbanist'] leading-5 md:leading-8">
                Track Monthly Revenue
              </p>
              <div className="self-stretch flex flex-row justify-between items-center">
                <div className="flex items-center gap-1 md:gap-1.5">
                  <img src="/images/figma/task-done-01.svg" alt="" loading="lazy" className="w-3 h-3 md:w-5 md:h-5 shrink-0" />
                  <span className="text-gray-300 text-[9px] md:text-sm font-semibold font-['Urbanist'] leading-3 md:leading-7">
                    Tasks :
                  </span>
                  <span className="text-gray-300 text-[9px] md:text-sm font-medium font-['Urbanist'] leading-3 md:leading-7">
                    7
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2.5">
                  <AvatarStack />
                  <span className="text-gray-300 text-[9px] md:text-base font-medium font-['Urbanist'] leading-3 md:leading-6">
                    +3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Green checkmark connector */}
          <div className="flex flex-col items-start -my-0.5 md:-my-1 self-start">
            <div className="h-[12px] md:h-[36px] border-l border-dotted border-gray-200/50 ml-[7px] md:ml-[11px]" />
            <div className="flex items-center">
              <div className="w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full bg-green flex items-center justify-center">
                <CheckIcon className="w-[8px] h-[8px] md:w-[10px] md:h-[8px] text-white" />
              </div>
              <div className="h-0 w-3 md:w-[20px] border-t border-dotted border-gray-200/50" />
            </div>
          </div>

          {/* Franks Lampard subtask card */}
          <div
            className="ml-[22px] md:ml-[40px] -mt-3 md:-mt-[20px] h-24 md:h-40 pl-3 md:pl-5 pr-1.5 md:pr-3 py-0.5 md:py-1 w-[calc(100%-22px)] md:w-[calc(100%-40px)] bg-white/5 rounded-xl md:rounded-3xl inline-flex flex-col justify-center items-start gap-1"
            style={{
              boxShadow: "0px 2.53px 34.78px 0px rgba(0,0,0,1)",
            }}
          >
            {/* Top row: name badge + completed */}
            <div className="flex flex-col justify-start items-start gap-2.5 w-full">
              <div className="inline-flex justify-between items-center w-full">
                <div className="h-5 md:h-8 p-2 md:px-2.5 bg-white/5 rounded-md md:rounded-[10px] border border-white/10 inline-flex items-center gap-1 md:gap-2">
                  <img
                    src="/images/figma/Ellipse 53.svg"
                    alt=""
                    loading="lazy"
                    className="w-4 h-4 md:w-[22px] md:h-[22px] rounded-full shrink-0"
                  />
                  <span className="text-gray-400 md:text-gray-100 text-[9.13px] md:text-[14px] font-semibold font-['Urbanist'] leading-3 md:leading-[22px]">
                    Franks Lampard
                  </span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-[18px] md:h-[18px] rounded-full bg-success flex items-center justify-center">
                    <CheckIcon className="w-[5px] h-[4px] md:w-[8px] md:h-[7px] text-white" />
                  </div>
                  <span className="text-white text-[9.13px] md:text-[14px] font-bold font-['Urbanist']">
                    Completed
                  </span>
                </div>
              </div>
              {/* Task line */}
              <div className="flex items-center gap-1.5 md:gap-2">
                <img src="/images/figma/task-done-01.svg" alt="" loading="lazy" className="w-2.5 h-2.5 md:w-4 md:h-4 shrink-0" />
                <span className="text-gray-400 md:text-gray-100 text-xs md:text-[15px] font-bold font-['Urbanist'] leading-5 md:leading-7 line-clamp-1">
                  Collect revenue data from bank APIs
                </span>
              </div>
            </div>
            {/* Apps row */}
            <div className="w-60 md:w-full inline-flex justify-start items-start gap-5 md:gap-8">
              <div className="flex items-center gap-1 md:gap-1.5">
                <span className="text-gray-400 md:text-gray-100 text-[9.13px] md:text-[13px] font-semibold font-['Urbanist'] leading-3">
                  Apps :
                </span>
                <div className="flex items-center -space-x-[2px]">
                  <span className="inline-grid place-items-center w-4 h-4 md:w-[22px] md:h-[22px] rounded-full bg-[#4A154B] border-[0.81px] border-white/15">
                    <svg viewBox="0 0 24 24" className="size-full p-[3px] md:p-[4px]">
                      <circle cx="8" cy="8" r="2.6" fill="#36C5F0" />
                      <circle cx="16" cy="8" r="2.6" fill="#2EB67D" />
                      <circle cx="8" cy="16" r="2.6" fill="#E01E5A" />
                      <circle cx="16" cy="16" r="2.6" fill="#ECB22E" />
                    </svg>
                  </span>
                  <span className="inline-grid place-items-center w-3.5 h-3.5 md:w-[22px] md:h-[22px] rounded-full bg-[#FF7A59] border-[0.81px] border-white/15">
                    <span className="text-white text-[7px] md:text-[10px] font-extrabold leading-none">H</span>
                  </span>
                  <span className="inline-grid place-items-center w-4 h-4 md:w-[22px] md:h-[22px] rounded-full bg-[#635BFF] border-[0.81px] border-white/15">
                    <span className="text-white text-[7px] md:text-[10px] font-extrabold leading-none">S</span>
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Image
                  src="/images/figma/excel-icon.png"
                  alt="Excel file"
                  width={18}
                  height={18}
                  className="w-3.5 h-3 md:w-[18px] md:h-[18px] rounded-[3px] object-cover"
                />
                <span className="text-gray-400 md:text-gray-100 text-[9.13px] md:text-[13px] font-semibold font-['Urbanist'] leading-3 md:leading-[22px]">
                  Stripe_revenue_report.csv
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Title + desc ── */}
      <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-0.5 md:gap-1 pb-2 md:pb-6 px-3 md:px-6">
        <ScrollTextReveal
          text="You set goals, not tasks"
          className="text-white text-base md:text-2xl font-bold font-['Urbanist'] leading-9 md:leading-[65.07px] text-center"
        />
        <p className="w-72 md:hidden text-center text-gray-400 text-[9.06px] font-semibold font-['Urbanist'] leading-4 mb-1">
          The best way to reach humans instead of spam folders. Deliver
          transactional and marketing emails at scale.
        </p>
        <div className="hidden md:block">
          <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
            <p className="w-[526px] text-center text-gray-300 text-base font-semibold font-['Urbanist'] leading-8 mb-[15px]">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

/* ── Rotating orbit light wedge — exact replica of the original SVG wedge ── */
function OrbitLightWedge() {
  const cx = 249.973;
  const cy = 238.089;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        transformOrigin: `${(cx / 494) * 100}% ${(cy / 479) * 100}%`,
        animation: "orbit-spin 20s linear infinite",
      }}
    >
      <svg viewBox="0 0 494 479" fill="none" className="w-full h-full">
        <defs>
          <filter id="wedgeShadow" x="243.795" y="59.0566" width="191.559" height="191.389" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="6.17791"/>
            <feGaussianBlur stdDeviation="3.08896"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <linearGradient id="wedgeGrad" x1="352.663" y1="101.887" x2="302.702" y2="191.289" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBFBFB"/>
            <stop offset="1" stopColor="#959595" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        <g filter="url(#wedgeShadow)">
          <path
            d="M260.262 59.0565C300.191 61.2453 338.295 76.1071 368.784 101.383C399.273 126.658 420.478 160.965 429.176 199.088L249.973 238.089L260.262 59.0565Z"
            fill="url(#wedgeGrad)"
            fillOpacity="0.45"
            shapeRendering="crispEdges"
          />
          <path
            d="M260.262 59.0565C300.191 61.2453 338.295 76.1071 368.784 101.383C399.273 126.658 420.478 160.965 429.176 199.088L249.973 238.089L260.262 59.0565Z"
            fill="#252525"
            fillOpacity="0.35"
            shapeRendering="crispEdges"
          />
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CARD 2 — "They collaborate with each other"
   Robot center, avatar orbit, cursor+label pills
   ═══════════════════════════════════════════════════════════ */
function CollaborateCard() {
  return (
    <div className="w-80 md:w-[600px] h-96 md:h-[671px] relative overflow-hidden rounded-3xl md:rounded-[40px] border-[0.58px] md:border border-white/30 bg-gradient-to-b from-black/80 to-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-60 md:opacity-100"
        style={{ backgroundImage: "url('/images/figma/features/features-light-on-stone.svg')", backgroundPosition: "center 500%" }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 md:from-black/30 md:via-black/90 md:to-black/90" />

      {/* Orbit illustration (static) */}
      <img
        src="/images/figma/Group 1707484055.svg"
        alt=""
        loading="lazy"
        className="absolute top-1 md:top-5 left-1/2 -translate-x-1/2 w-[72%] max-w-[230px] md:max-w-[460px] h-auto z-10 pointer-events-none"
      />

      {/* Animated rotating light wedge — exact overlay matching the orbit image position */}
      <div className="absolute top-1 md:top-5 left-1/2 -translate-x-1/2 w-[72%] max-w-[230px] md:max-w-[460px] z-[12] pointer-events-none" style={{ aspectRatio: "494 / 479" }}>
        <OrbitLightWedge />
      </div>

      <div className="absolute bottom-0 inset-x-0 z-30 flex flex-col items-center gap-0.5 md:gap-4 pb-5 md:pb-14 px-3 md:px-6">
        <ScrollTextReveal
          text="They collaborate with each other"
          className="text-white text-base md:text-2xl font-bold font-['Urbanist'] leading-9 md:leading-tight text-center"
        />
        <p className="w-80 md:hidden text-center text-gray-400 text-[9.22px] font-bold font-['Urbanist'] leading-4">
          The best way to reach humans instead of spam folders. Deliver
          transactional and marketing emails at scale.
        </p>
        <div className="hidden md:block">
          <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
            <p className="w-[526px] text-center text-gray-300 text-sm font-normal font-['Urbanist'] leading-6">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
          </AnimateOnScroll>
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
      className="relative w-80 md:w-[393px] h-[477px] md:h-[535px] rounded-[36px] md:rounded-[40px] overflow-hidden border border-white/30"
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
            <img
              src="/images/figma/features/boy-memoji.svg"
              alt=""
              loading="lazy"
              className="w-[30px] h-[30px] rounded-full shrink-0"
            />
            <span className="text-white text-xs md:text-[14px] font-bold leading-[20px] md:leading-[24px]">
              Frank
            </span>
            <AgentBadge />
            <span className="text-gray-300 text-[10px] md:text-[14px] font-medium leading-[18px] md:leading-[22px]">
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
            <img src="/images/figma/flag.svg" alt="" loading="lazy" className="w-[14px] h-[14px] shrink-0" />
            <span className="text-gray-100 text-[11px] md:text-[13px] font-medium leading-[18px] md:leading-[22px]">
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
            <img
              src="/images/figma/features/man-memoji.svg"
              alt=""
              loading="lazy"
              className="w-[26px] h-[26px] rounded-full shrink-0"
            />
            <span className="text-white text-xs md:text-[14px] font-bold leading-[20px] md:leading-[24px]">
              Danny
            </span>
            <AgentBadge />
            <span className="text-gray-300 text-[10px] md:text-[14px] font-medium leading-[18px] md:leading-[22px]">
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
              <span className="text-white text-[11px] md:text-[13px] font-bold leading-[18px] md:leading-[22px]">
                Connect
              </span>
            </div>
            <div className="h-[30px] px-3 py-1 bg-gray-800 rounded-full border border-[#C92929] flex items-center gap-2">
              <img src="/images/figma/features/minus-sign-circle.svg" alt="" loading="lazy" />
              <span className="text-gray-100 text-[11px] md:text-[13px] font-bold leading-[18px] md:leading-[22px]">
                Reject
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="w-64 md:w-auto text-center text-white text-2xl md:text-[26px] font-bold font-['Urbanist'] leading-8 md:leading-[36px] max-w-[291px] mx-auto">
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
    <div className="relative w-80 md:w-auto h-56 md:h-[537px] rounded-2xl md:rounded-[37px] overflow-hidden border border-white/30">
      {/* Subtle dark blue/purple bg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/figma/features/dessert-and-pearl.svg')",
        }}
      />

      {/* Overlay for mobile readability */}
      <div className="md:hidden absolute inset-0 bg-linear-to-b from-black/0 to-black/30 z-1" />

      {/* Top border line to match card border */}
      <div className="absolute top-0 left-0 right-0 h-[0.005px] bg-white/10 z-20 pointer-events-none" />

      {/* Title top-left */}
      <div className="absolute top-[21px] left-[18px] md:top-[35px] md:left-[30px] z-30 max-w-[176px] md:max-w-[394px]">
        <ScrollTextReveal
          text="They learn from your feedback"
          className="text-white text-xs md:text-[26px] font-bold leading-7 md:leading-[40px]"
        />
      </div>

      {/* ── macOS Chat Window ── */}
      <div className="absolute top-[43px] md:top-[90px] left-[24px] right-[24px] bottom-0 z-15 md:left-[50px] md:right-[50px]">
        <div
          className="w-full h-full bg-[#131313] rounded-t-lg md:rounded-t-[18px] border-[0.45px] md:border-[1.5px] border-white/20 md:border-white/10 overflow-hidden"
          style={{ backdropFilter: "blur(31px)" }}
        >
          {/* Traffic light dots */}
          <div className="flex items-center gap-[8px] px-[10px] md:px-[22px] pt-[8px] md:pt-[14px] pb-[8px] md:pb-[16px]">
            <div className="w-1 md:w-[10px] h-1 md:h-[9px] rounded-sm bg-[#F24E1E]" />
            <div className="w-1 md:w-[10px] h-1 md:h-[9px] rounded-sm bg-[#FFD02F]" />
            <div className="w-1 md:w-[10px] h-1 md:h-[9px] rounded-sm bg-[#A6C03D]" />
          </div>

          <div className="flex flex-col gap-1 md:gap-[14px] px-[10px] md:px-[22px] overflow-hidden">
            {/* John Doe */}
            <div className="flex flex-col gap-1 md:gap-[8px]">
              <div className="flex items-center gap-1 md:gap-[8px]">
                  <img
                  src="/images/figma/image 19.svg"
                  alt=""
                  loading="lazy"
                  className="w-3 md:w-[26px] h-3 md:h-[26px] rounded-full shrink-0"
                />
                <div className="w-1 md:w-[8px] h-1 md:h-[8px] rounded-full bg-green border border-white" />
                <span className="text-white text-[6px] md:text-[13px] font-bold leading-3 md:leading-[22px]">
                  John Doe
                </span>
                <span className="text-gray-300 text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px] line-clamp-1">
                  1.46 AM
                </span>
              </div>
              <div className="p-1.5 md:p-[10px] bg-white/6 rounded-lg md:rounded-[14px]">
                <ScrollTextReveal
                  text="Hello Danny! I want to manage company's finances and team performance every month."
                  className="text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px]"
                />
              </div>
            </div>

            {/* Danny */}
            <div className="flex flex-col gap-1 md:gap-[8px]">
              <div className="flex items-center gap-1 md:gap-[8px]">
                <img
                  src="/images/figma/features/man-memoji.svg"
                  alt=""
                  loading="lazy"
                  className="w-3 md:w-[26px] h-3 md:h-[26px] rounded-full shrink-0"
                />
                <span className="text-white text-[6px] md:text-[13px] font-bold leading-3 md:leading-[22px]">
                  Danny
                </span>
                <span className="text-gray-300 text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px] line-clamp-1">
                  1.50 AM
                </span>
              </div>
              <div className="px-1.5 md:px-[10px] py-2 md:py-[14px] rounded-lg md:rounded-[14px] border md:border-2 border-white/10">
                <ScrollTextReveal
                  text="Hey John. From your request, I can see that you're aiming to accomplish two main goals"
                  className="text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px]"
                />
              </div>
            </div>

            {/* Frank AI Agent */}
            <div className="flex flex-col gap-1 md:gap-[8px]">
              <div className="flex items-center gap-1 md:gap-[8px]">
                <img
                  src="/images/figma/features/boy-memoji.svg"
                  alt=""
                  loading="lazy"
                  className="w-3 md:w-[26px] h-3 md:h-[26px] rounded-full shrink-0"
                />
                <span className="text-white text-[6px] md:text-[13px] font-bold leading-3 md:leading-[22px]">
                  Frank
                </span>
                <span className="hidden md:inline">
                  <AgentBadge />
                </span>
                <span className="md:hidden inline-flex items-center px-[4px] py-[1px] bg-gray-600 rounded-[3px] border border-white/10 text-[4px] leading-[8px] font-semibold text-gray-100">
                  AI Agent
                </span>
                <span className="text-gray-300 text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px] line-clamp-1">
                  1.50 AM
                </span>
              </div>
              <div className="p-1.5 md:p-[10px] bg-white/6 rounded-lg md:rounded-[14px]">
                <AnimateOnScroll animation="fade-in" duration={0.8} threshold={0.3}>
                  <p className="text-[6px] md:text-[13px] font-medium leading-3 md:leading-[28px] text-gray-100">
                    From your request, you&apos;re aiming to accomplish two main goals. I&apos;ll connect with your CRM and task management tool{" "}
                    <span className="inline-flex items-center gap-[3px] md:gap-[4px] align-middle">
                      <span className="inline-flex h-2.5 md:h-[20px] pl-[2px] md:pl-[4px] pr-1 md:pr-[8px] bg-white/4 rounded-full border border-white/10 items-center gap-[3px] md:gap-[5px]">
                        <img src="/images/figma/features/s.svg" loading="lazy" className="w-2 h-2 md:w-auto md:h-auto" alt="" />
                        <span className="text-gray-100 text-[5px] md:text-[11px] font-semibold leading-none">Stripe</span>
                      </span>
                      <span className="text-white text-[6px] md:text-[13px] font-medium">+</span>
                      <span className="inline-flex h-2.5 md:h-[20px] pl-[2px] md:pl-[4px] pr-1 md:pr-[8px] bg-white/4 rounded-full border border-white/10 items-center gap-[3px] md:gap-[5px]">
                        <img src="/images/figma/features/nodes.svg" loading="lazy" className="w-2 h-2 md:w-auto md:h-auto" alt="" />
                        <span className="text-gray-100 text-[5px] md:text-[11px] font-semibold leading-none">HubSpot</span>
                      </span>
                    </span>{" "}
                    to fetch automatically. Shall I connect?
                  </p>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Partial trailing Frank */}
            <div className="flex items-center gap-1 md:gap-[8px]">
              <img
                src="/images/figma/features/boy-memoji.svg"
                alt=""
                loading="lazy"
                className="w-3 md:w-[26px] h-3 md:h-[26px] rounded-full shrink-0"
              />
              <span className="text-white text-[6px] md:text-[13px] font-bold leading-3 md:leading-[22px]">
                Frank
              </span>
              <span className="hidden md:inline">
                <AgentBadge />
              </span>
              <span className="md:hidden inline-flex items-center px-[4px] py-[1px] bg-gray-600 rounded-[3px] border border-white/10 text-[4px] leading-[8px] font-semibold text-gray-100">
                AI Agent
              </span>
              <span className="text-gray-300 text-[6px] md:text-[13px] font-medium leading-[10px] md:leading-[20px] line-clamp-1">
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
    <section className="w-full bg-black px-6 md:px-10 lg:px-20 py-12 md:py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-[10px]">
        {/* Section Header */}
        <div className="inline-flex flex-col justify-start items-center gap-1">
          <Badge className="h-8 px-3 py-1 text-sm font-semibold font-['Urbanist']">Chorus Agents</Badge>
          <div className="self-stretch flex flex-col justify-start items-center gap-8">
            <ScrollTextReveal
              text="Autonomous Agents, Not Chatbots."
              className="text-2xl md:text-5xl font-bold font-['Urbanist'] leading-8 md:leading-[78px] text-center max-w-[384px] md:max-w-none"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="w-80 md:w-auto text-center text-gray-400 md:text-gray-300 text-sm md:text-2xl font-normal md:font-medium font-['Urbanist'] leading-6 md:leading-9">
                The Difference That Changes Everything
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-[40px] w-full items-center md:items-stretch mt-4 md:mt-8">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-[40px] w-full">
            <ScrollParallax offset={30} delay={0} className="md:flex-1 md:min-w-[300px]">
              <GoalsCard />
            </ScrollParallax>
            <ScrollParallax offset={30} delay={0}>
              <CollaborateCard />
            </ScrollParallax>
          </div>
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[44px] w-full">
            <ScrollParallax offset={30} delay={0} className="shrink-0">
              <DecisionsCard />
            </ScrollParallax>
            <ScrollParallax offset={30} delay={0} className="md:flex-1 md:min-w-[300px]">
              <FeedbackCard />
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
}
