import { useId } from "react";
import { AnimateOnScroll, Badge, Section, ScrollTextReveal, StaggerChildren, ScrollParallax } from "@/components/ui";
import { cn } from "@/lib/utils";

function RadarCardOrbitLight() {
  const id = useId();
  const gradId = `radarWedgeGrad-${id}`;
  const cx = 214.807;
  const cy = 155.702;
  return (
    <div
      className="absolute inset-0 pointer-events-none z-10 overflow-visible"
      style={{
        transformOrigin: `${(cx / 407) * 100}% ${(cy / 313) * 100}%`,
        animation: "orbit-spin 20s linear infinite",
      }}
    >
      <svg viewBox="0 0 407 313" fill="none" className="w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id={gradId} x1="275.667" y1="73.0523" x2="244.978" y2="126.686" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FBFBFB"/>
            <stop offset="1" stopColor="#959595" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        <path d="M220.905 47.0622C244.569 48.3905 267.152 57.4089 285.221 72.7465C303.291 88.0841 315.858 108.902 321.013 132.036L214.807 155.702L220.905 47.0622Z" fill={`url(#${gradId})`} fillOpacity="0.45"/>
        <path d="M220.905 47.0622C244.569 48.3905 267.152 57.4089 285.221 72.7465C303.291 88.0841 315.858 108.902 321.013 132.036L214.807 155.702L220.905 47.0622Z" fill="#252525" fillOpacity="0.35"/>
      </svg>
    </div>
  );
}

function RadarCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-visible", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/figma/Frame 1707484612.svg" alt="Radar card" className="w-full" />
      <RadarCardOrbitLight />
    </div>
  );
}

function ChatCard({ className }: { className?: string }) {
  const id = useId();
  const gradId = `goldBar-${id}`;
  const maskId = `goldBarMask-${id}`;

  return (
    <div className={cn("relative", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/figma/Frame 1707484612-1.svg?v=4" alt="AI Agent chat card" className="w-full" />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 415 324"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={gradId} x1="33.8908" y1="162.18" x2="365.98" y2="187.963" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F2AB53" stopOpacity="0" />
            <stop offset="0.313613" stopColor="#C08742" stopOpacity="0.27" />
            <stop offset="1" stopColor="#8C6330" stopOpacity="0" />
          </linearGradient>
          <clipPath id={maskId}>
            <path d="M33.9364 161.593C34.7414 151.224 43.8001 143.471 54.1694 144.276L348.708 167.143C359.077 167.948 366.831 177.006 366.026 187.376L365.935 188.549C365.13 198.919 356.071 206.672 345.702 205.867L51.163 183C40.7937 182.195 33.0403 173.136 33.8453 162.767L33.9364 161.593Z" />
          </clipPath>
          <linearGradient id={`${gradId}-shimmer`} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F2AB53" stopOpacity="0" />
            <stop offset="30%" stopColor="#F2AB53" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#FFD282" stopOpacity="0.5" />
            <stop offset="70%" stopColor="#F2AB53" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#F2AB53" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`${maskId}-skel1`}>
            <rect x="50.9854" y="94.3857" width="284.175" height="9.48606" rx="4.74303" transform="rotate(4.43935 50.9854 94.3857)" />
          </clipPath>
          <clipPath id={`${maskId}-skel2`}>
            <rect x="49.7046" y="110.884" width="312.037" height="9.43444" rx="4.71722" transform="rotate(4.43935 49.7046 110.884)" />
          </clipPath>
          <linearGradient id={`${gradId}-skel`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="120" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0.08" />
            <stop offset="50%" stopColor="white" stopOpacity="0.15" />
            <stop offset="60%" stopColor="white" stopOpacity="0.08" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`${maskId}-circle`}>
            <rect x="31.2031" y="196.797" width="35.3098" height="35.3098" rx="17.6549" transform="rotate(4.43935 31.2031 196.797)" />
          </clipPath>
          <clipPath id={`${maskId}-wide`}>
            <rect x="78.1416" y="200.441" width="276.593" height="35.3098" rx="9.41594" transform="rotate(4.43935 78.1416 200.441)" />
          </clipPath>
          <clipPath id={`${maskId}-bottom`}>
            <rect x="27.7412" y="241.389" width="336.824" height="9.48606" rx="4.74303" transform="rotate(4.43935 27.7412 241.389)" />
          </clipPath>
        </defs>
        {/* Skeleton bars (replacing the ones removed from static SVG) */}
        <rect x="50.9854" y="94.3857" width="284.175" height="9.48606" rx="4.74303" transform="rotate(4.43935 50.9854 94.3857)" fill="white" fillOpacity="0.05" />
        <rect x="49.7046" y="110.884" width="312.037" height="9.43444" rx="4.71722" transform="rotate(4.43935 49.7046 110.884)" fill="white" fillOpacity="0.05" />
        {/* Skeleton shimmer bar 1 */}
        <g clipPath={`url(#${maskId}-skel1)`}>
          <rect y="0" width="120" height="324" fill={`url(#${gradId}-skel)`}>
            <animateTransform attributeName="transform" type="translate" values="-120,0;420,0" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Skeleton shimmer bar 2 */}
        <g clipPath={`url(#${maskId}-skel2)`}>
          <rect y="0" width="120" height="324" fill={`url(#${gradId}-skel)`}>
            <animateTransform attributeName="transform" type="translate" values="-120,0;420,0" dur="2s" begin="0.3s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Gold bar + shimmer */}
        <path d="M33.9364 161.593C34.7414 151.224 43.8001 143.471 54.1694 144.276L348.708 167.143C359.077 167.948 366.831 177.006 366.026 187.376L365.935 188.549C365.13 198.919 356.071 206.672 345.702 205.867L51.163 183C40.7937 182.195 33.0403 173.136 33.8453 162.767L33.9364 161.593Z" fill={`url(#${gradId})`} />
        <g clipPath={`url(#${maskId})`}>
          <rect x="-100" y="140" width="200" height="70" fill={`url(#${gradId}-shimmer)`} style={{ animation: "bar-shimmer-svg 2.5s ease-in-out infinite" }} />
        </g>
        {/* Bottom skeleton group (replacing ones removed from static SVG) */}
        <g opacity="0.5">
          <rect x="31.2031" y="196.797" width="35.3098" height="35.3098" rx="17.6549" transform="rotate(4.43935 31.2031 196.797)" fill="white" fillOpacity="0.08" />
          <rect x="31.6861" y="197.361" width="34.2593" height="34.2593" rx="17.1297" transform="rotate(4.43935 31.6861 197.361)" stroke="white" strokeOpacity="0.1" strokeWidth="1.05043" fill="none" />
          <rect x="78.1416" y="200.441" width="276.593" height="35.3098" rx="9.41594" transform="rotate(4.43935 78.1416 200.441)" fill="white" fillOpacity="0.08" />
          <rect x="78.6246" y="201.005" width="275.543" height="34.2593" rx="8.89072" transform="rotate(4.43935 78.6246 201.005)" stroke="white" strokeOpacity="0.1" strokeWidth="1.05043" fill="none" />
          <rect x="27.7412" y="241.389" width="336.824" height="9.48606" rx="4.74303" transform="rotate(4.43935 27.7412 241.389)" fill="white" fillOpacity="0.08" />
          <rect x="28.2242" y="241.953" width="335.773" height="8.43564" rx="4.21782" transform="rotate(4.43935 28.2242 241.953)" stroke="white" strokeOpacity="0.1" strokeWidth="1.05043" fill="none" />
        </g>
        {/* Shimmer on circle */}
        <g clipPath={`url(#${maskId}-circle)`}>
          <rect y="0" width="80" height="324" fill={`url(#${gradId}-skel)`}>
            <animateTransform attributeName="transform" type="translate" values="-80,0;100,0" dur="1.8s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Shimmer on wide bar */}
        <g clipPath={`url(#${maskId}-wide)`}>
          <rect y="0" width="120" height="324" fill={`url(#${gradId}-skel)`}>
            <animateTransform attributeName="transform" type="translate" values="-120,0;420,0" dur="2s" begin="0.2s" repeatCount="indefinite" />
          </rect>
        </g>
        {/* Shimmer on bottom thin bar */}
        <g clipPath={`url(#${maskId}-bottom)`}>
          <rect y="0" width="120" height="324" fill={`url(#${gradId}-skel)`}>
            <animateTransform attributeName="transform" type="translate" values="-120,0;420,0" dur="2s" begin="0.4s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    </div>
  );
}

function LoadingSpinner({ cx, cy, dots, duration = 1.5 }: { cx: number; cy: number; dots: string[]; duration?: number }) {
  return (
    <g style={{ transformOrigin: `${cx}px ${cy}px`, animation: `orbit-spin ${duration}s linear infinite` }}>
      {dots.map((d, i) => (
        <path key={i} fillRule="evenodd" clipRule="evenodd" d={d} fill="#FAFAFA" />
      ))}
    </g>
  );
}

const SPINNER_TOP_DOTS = [
  "M34.8346 55.6876C35.2875 55.662 35.6703 56.0039 35.6958 56.4568C35.7214 56.9097 35.3795 57.2925 34.9266 57.3181C34.4737 57.3436 34.0909 57.0017 34.0653 56.5488C34.0398 56.0959 34.3817 55.7131 34.8346 55.6876Z",
  "M30.3767 57.2084C30.7288 57.0067 31.1868 57.0718 31.3884 57.4239C31.6806 57.7709 31.525 58.234 31.178 58.5262C30.8259 58.7278 30.3678 58.6628 30.1611 58.2201C29.8689 57.8731 30.0245 57.41 30.3767 57.2084Z",
  "M27.0281 60.6678C27.2743 60.1995 27.8076 59.9877 28.2758 60.2339C28.7441 60.4801 28.9559 61.0134 28.7097 61.4816C28.4635 61.9499 27.9251 62.0711 27.462 61.9155C26.9937 61.6693 26.8725 61.1309 27.0281 60.6678Z",
  "M26.11 65.3535C26.0794 64.81 26.4213 64.4272 26.9648 64.3966C27.4177 64.371 27.891 64.7078 27.9217 65.2513C27.9472 65.7042 27.5199 66.1827 27.067 66.2082C26.5235 66.2389 26.1356 65.8064 26.11 65.3535Z",
  "M27.5481 69.9125C27.2508 69.475 27.3962 68.8307 27.8338 68.5334C28.2713 68.2361 28.9156 68.3814 29.2129 68.819C29.5154 69.3472 29.3649 69.9009 28.9273 70.1982C28.3991 70.5006 27.8505 70.4407 27.5481 69.9125Z",
  "M31.1013 73.2553C30.5425 73.0142 30.3204 72.2998 30.5615 71.7409C30.8983 71.2676 31.5222 71.0506 32.081 71.2917C32.6398 71.5328 32.8619 72.2473 32.5302 72.8112C32.284 73.2794 31.6602 73.4964 31.1013 73.2553Z",
  "M35.8866 74.3474C35.2525 74.3832 34.6783 73.8704 34.6425 73.2363C34.6068 72.6022 35.1196 72.028 35.7537 71.9923C36.3878 71.9565 36.9619 72.4693 36.9977 73.1034C37.0335 73.7375 36.5206 74.3117 35.8866 74.3474Z",
  "M40.6208 72.8988C40.0123 73.3875 39.1817 73.1618 38.7836 72.5481C38.3855 71.9345 38.5207 71.109 39.1343 70.7109C39.8386 70.3077 40.664 70.4429 41.0621 71.0565C41.4602 71.6702 41.2345 72.5007 40.6208 72.8988Z",
  "M44.1406 69.2502C43.7286 70.0004 42.8381 70.3233 42.0879 69.9112C41.3428 69.5898 41.0199 68.6993 41.4319 67.9491C41.844 67.1989 42.7345 66.876 43.4796 67.1975C44.2298 67.6095 44.5527 68.5 44.1406 69.2502Z",
  "M45.2244 64.2761C45.2704 65.0914 44.5866 65.8569 43.7714 65.9029C42.8655 65.954 42.1906 65.2651 42.1446 64.4499C42.0986 63.6346 42.6918 62.8742 43.5976 62.8231C44.4128 62.7771 45.1784 63.4609 45.2244 64.2761Z",
  "M43.765 59.3656C44.2588 60.0647 44.0484 61.1671 43.2587 61.666C42.469 62.1649 41.4572 61.9494 40.9583 61.1597C40.3688 60.3751 40.5843 59.3633 41.374 58.8644C42.1637 58.3655 43.2661 58.5759 43.765 59.3656Z",
];

const SPINNER_BOTTOM_DOTS = [
  "M45.4726 210.12C45.8229 210.1 46.1185 210.358 46.1378 210.7C46.1571 211.042 45.8923 211.331 45.5421 211.351C45.1918 211.37 44.8962 211.113 44.8769 210.771C44.8576 210.429 45.1224 210.14 45.4726 210.12Z",
  "M42.0237 211.273C42.2962 211.12 42.6503 211.169 42.8058 211.435C43.0314 211.696 42.9106 212.046 42.6419 212.267C42.3694 212.419 42.0153 212.371 41.856 212.037C41.6304 211.775 41.7512 211.426 42.0237 211.273Z",
  "M39.4308 213.888C39.6217 213.534 40.0343 213.374 40.3961 213.559C40.7579 213.744 40.9211 214.147 40.7303 214.5C40.5394 214.854 40.123 214.946 39.765 214.829C39.4032 214.644 39.31 214.238 39.4308 213.888Z",
  "M38.7158 217.426C38.6927 217.015 38.9574 216.726 39.3777 216.702C39.728 216.683 40.0937 216.936 40.1168 217.347C40.1361 217.689 39.8051 218.05 39.4549 218.07C39.0346 218.094 38.7351 217.768 38.7158 217.426Z",
  "M39.8231 220.866C39.5936 220.536 39.7067 220.049 40.0454 219.824C40.3841 219.599 40.8822 219.708 41.1116 220.038C41.3449 220.437 41.2279 220.855 40.8893 221.08C40.4805 221.309 40.0564 221.264 39.8231 220.866Z",
  "M42.5673 223.385C42.1355 223.204 41.9645 222.665 42.1515 222.243C42.4124 221.885 42.8951 221.721 43.3269 221.902C43.7588 222.083 43.9298 222.623 43.6727 223.049C43.4818 223.402 42.9992 223.567 42.5673 223.385Z",
  "M46.2661 224.205C45.7758 224.232 45.3323 223.846 45.3053 223.367C45.2783 222.888 45.6755 222.455 46.1658 222.427C46.6562 222.399 47.0996 222.786 47.1266 223.264C47.1536 223.743 46.7565 224.177 46.2661 224.205Z",
  "M49.9288 223.106C49.4577 223.476 48.8157 223.306 48.5085 222.843C48.2013 222.38 48.3067 221.757 48.7816 221.456C49.3265 221.151 49.9647 221.252 50.2719 221.715C50.5791 222.178 50.4037 222.805 49.9288 223.106Z",
  "M52.6545 220.348C52.3351 220.915 51.6462 221.159 51.0665 220.849C50.4906 220.607 50.2419 219.935 50.5613 219.369C50.8807 218.802 51.5696 218.557 52.1455 218.799C52.7251 219.109 52.9739 219.781 52.6545 220.348Z",
  "M53.4978 216.593C53.5325 217.208 53.0029 217.786 52.3725 217.822C51.672 217.862 51.1508 217.342 51.1161 216.727C51.0813 216.112 51.5408 215.537 52.2413 215.497C52.8718 215.462 53.463 215.977 53.4978 216.593Z",
  "M52.3741 212.887C52.7552 213.415 52.5913 214.247 51.9801 214.624C51.369 215.002 50.5869 214.84 50.2019 214.245C49.7469 213.653 49.9146 212.889 50.5258 212.512C51.1369 212.134 51.9891 212.292 52.3741 212.887Z",
];

function TasksCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/figma/Frame 1707484613.svg?v=3" alt="Tasks card" className="w-full" />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 410 316"
        fill="none"
      >
        <LoadingSpinner cx={35.5} cy={65} dots={SPINNER_TOP_DOTS} duration={1.5} />
        <LoadingSpinner cx={46} cy={217} dots={SPINNER_BOTTOM_DOTS} duration={1.5} />
        {/* Hourglass icon - flipping animation */}
        <g style={{ transformOrigin: "297px 203px", animation: "hourglass-flip 3s ease-in-out infinite" }}>
          <path d="M298.795 203.083C300.129 202.353 300.997 200.901 300.906 199.282L300.795 197.315L292.667 197.774L292.778 199.74C292.869 201.36 293.895 202.704 295.303 203.28C293.969 204.011 293.101 205.462 293.192 207.082L293.303 209.048L295.401 208.93L295.29 206.963C295.228 205.877 296.059 204.947 297.145 204.886C298.231 204.825 299.161 205.655 299.222 206.741L299.333 208.708L301.431 208.59L301.32 206.623C301.229 205.004 300.203 203.659 298.795 203.083Z" fill="#7D7C83" />
          <path fillRule="evenodd" clipRule="evenodd" d="M301.513 198.327L292.074 198.86L292.015 197.811L301.453 197.278L301.513 198.327Z" fill="#7D7C83" />
          <path fillRule="evenodd" clipRule="evenodd" d="M302.09 208.552L292.651 209.085L292.592 208.036L302.031 207.504L302.09 208.552Z" fill="#7D7C83" />
        </g>
      </svg>
    </div>
  );
}

function InlinePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-[18px] border border-white/15 bg-transparent",
        "px-[11px] py-[4px]",
        "shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "font-['Urbanist'] text-[18px] font-normal text-gray-100 md:text-base lg:text-2xl",
        className
      )}
    >
      {children}
    </span>
  );
}

export function AIWorkforceSection() {
  return (
    <Section
       className="self-stretch bg-black px-4 py-10 md:px-8 md:py-20 flex flex-col justify-start items-center gap-16 overflow-hidden"
      id="ai-workforce"
    >
      {/* Header */}
      <div className="flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-start items-center gap-1">
          <Badge className="w-56 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">What Chorus Actually Is</Badge>
          <ScrollTextReveal
            text="Your AI Workforce. Always in Sync."
            className="justify-start text-white text-2xl leading-8 md:text-3xl md:leading-[42px] lg:text-5xl font-bold font-['Urbanist'] lg:leading-[78px] text-center"
          />
        </div>

        {/* Description */}
        <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
          <div className="w-full md:max-w-[1108px] text-center font-['Urbanist'] text-sm leading-6 font-normal text-gray-300 md:text-base md:leading-7 lg:text-xl lg:leading-9">
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9">Forget chatbots that &quot;help&quot; you draft emails. Chorus gives you autonomous agents that coordinate with each other<br />and run your </span>
            <span className="text-white text-sm md:text-base lg:text-xl font-medium font-['Urbanist'] leading-6 md:leading-9">Sales, Marketing, Finance, Operations, Customer Success</span>
            <span className="text-gray-300 md:text-xl font-normal font-['Urbanist'] md:leading-9"> - any department you need.</span>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Cards area */}
      <div className="flex w-full flex-col items-center">
        {/* Mobile: stacked layout */}
        <div className="flex w-full flex-col items-center gap-0 md:hidden">
          <p className="text-center font-['Urbanist'] text-sm font-normal leading-5 text-gray-300">
            You don&apos;t coordinate.You{" "}
            <span className="text-gray-100">orchestrate</span>
          </p>
          <ChatCard className="w-full max-w-[320px] h-auto rotate-[-4deg]" />

          <p className="text-center font-['Urbanist'] text-sm font-normal leading-6 text-gray-400 translate-y-[10px]">
            They <span className="text-gray-100">execute.</span>{" "}
            They <span className="text-gray-100">deliver.</span>
          </p>
          <TasksCard className="w-full max-w-[320px] h-auto rotate-[3.5deg]" />

          <p className="text-center font-['Urbanist'] text-sm font-normal leading-6 text-gray-400">
            Skip management.{" "}
            <span className="text-gray-100">Set goals.</span>
          </p>
          <RadarCard className="w-full max-w-[320px] h-auto rotate-[3deg]" />
        </div>

          {/* Desktop: overlapping 3-card layout */}
          <StaggerChildren staggerDelay={150} className="hidden md:block md:max-w-[600px] lg:max-w-none mx-auto">
            {/* Cards row — overlapping, with labels inside each ScrollParallax */}
            <div className="flex items-start justify-center">
              <ScrollParallax offset={30} delay={0} className="w-[36%] -mr-[3.5%] relative z-0">
                <p className="absolute -top-10 left-0 w-max font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal leading-10 text-gray-300 md:translate-x-[15px] lg:translate-x-[20px] rotate-[-3deg]">
                  You don&apos;t coordinate. You{" "}
                  <InlinePill>orchestrate</InlinePill>
                </p>
                <RadarCard className="w-full" />
              </ScrollParallax>
              <ScrollParallax offset={30} delay={0.5} className="w-[37%] relative z-10 -mt-[20px]">
                <ChatCard className="w-full" />
              </ScrollParallax>
              <ScrollParallax offset={30} delay={1} className="w-[36%] -ml-[2.5%] relative z-11 -mt-[25px] rotate-[-2deg]">
                <p className="absolute -top-10 left-8 w-max font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal leading-10 text-gray-300 rotate-[-3deg] text-left">
                  They{" "}
                  <InlinePill className="w-28 h-10 pl-3 py-1 bg-black/0 rounded-2xl shadow-[0px_4.43361234664917px_4.43361234664917px_0px_rgba(0,0,0,0.25)]">execute.</InlinePill>{" "}
                  They{" "}
                  <InlinePill className="w-28 h-10 pl-3 py-1 bg-black/0 rounded-2xl shadow-[0px_4.43361234664917px_4.43361234664917px_0px_rgba(0,0,0,0.25)]">deliver.</InlinePill>
                </p>
                <TasksCard className="w-full" />
              </ScrollParallax>
            </div>

            {/* Bottom label */}
            <p className="mt-2 text-center font-['Urbanist'] md:text-[16px] lg:text-[22px] font-normal text-gray-300 md:translate-x-[20px] lg:translate-x-[40px] rotate-[3deg]">
              Skip management.{" "}
              <InlinePill>Set goals.</InlinePill>
            </p>
          </StaggerChildren>
        </div>
    </Section>
  );
}
