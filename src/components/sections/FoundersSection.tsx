import Image from "next/image";
import { Badge, Section } from "@/components/ui";

/* eslint-disable @next/next/no-img-element */

const QUOTE_TEXT =
  '"Stripe for payments, Vercel for deployments, Dub.co for links. As the cloud evolves, we abstract out common needs into reusable, high-performance infrastructure. Excited about Dub filling this foundational missing piece of the puzzle."';

/* ============================================================
   Grid lines overlay
   ============================================================ */

function GridLines({ dark = false }: { dark?: boolean }) {
  const color = dark
    ? "rgba(0, 0, 0, 0.06)"
    : "rgba(255, 255, 255, 0.06)";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {/* Horizontal lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0"
          style={{
            top: `${(i + 1) * 12.5}%`,
            height: "1px",
            background: color,
          }}
        />
      ))}
      {/* Vertical lines */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0"
          style={{
            left: `${(i + 1) * 16.67}%`,
            width: "1px",
            background: color,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   Card components — single unified cards
   ============================================================ */

/** Light card with logo + quote + author (light gradient bg, dark text) */
function LightCard({
  logo,
  alt,
  logoWidth = 158,
  logoHeight = 38,
}: {
  logo: string;
  alt: string;
  logoWidth?: number;
  logoHeight?: number;
}) {
  return (
    <div
      className="relative w-[300px] shrink-0 sm:w-[340px] lg:w-96 overflow-hidden rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(37deg, #F6F6F6 0%, #CCCBCB 100%)",
      }}
    >
      <GridLines dark />
      <div className="relative z-10 flex flex-col gap-20 px-[24px] pb-[24px] pt-[30px] sm:px-[30px] sm:pb-[30px] sm:pt-[35px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} />

        {/* Quote */}
        <p className="w-80 text-lg font-bold font-['Urbanist'] leading-7 text-gray-800">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="w-80 inline-flex justify-start items-start gap-40">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <span className="text-base font-bold font-['Urbanist'] leading-6 text-[#222222]">
              Theo Browne
            </span>
            <span className="text-sm font-bold font-['Urbanist'] leading-5 text-[#222222]">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-[50px] shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/team/member-1.png"
              alt="Theo Browne"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Dark card with logo + quote + author (dark gradient bg, light text) */
function DarkCard({
  logo,
  alt,
  logoWidth = 103,
  logoHeight = 31,
}: {
  logo: string;
  alt: string;
  logoWidth?: number;
  logoHeight?: number;
}) {
  return (
    <div
      className="relative w-[300px] shrink-0 sm:w-[340px] lg:w-96 overflow-hidden rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(45deg, #101010 0%, #242324 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col gap-20 px-[24px] pb-[24px] pt-[30px] sm:px-[30px] sm:pb-[30px] sm:pt-[35px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} />

        {/* Quote */}
        <p className="w-80 text-lg font-bold font-['Urbanist'] leading-7 text-gray-100">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="w-80 inline-flex justify-start items-start gap-40">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <span className="text-base font-bold font-['Urbanist'] leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-sm font-bold font-['Urbanist'] leading-5 text-white/60">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-[50px] shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/team/member-1.png"
              alt="Theo Browne"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Glass card — text only, no logo (gray text variant) */
function GlassCard() {
  return (
    <div
      className="relative w-[300px] shrink-0 sm:w-[340px] lg:w-96 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] pl-9 pr-7 pt-10 pb-2.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col justify-start items-start gap-11">
        <p className="w-80 text-lg font-bold font-['Urbanist'] leading-7 text-gray-100">
          {QUOTE_TEXT}
        </p>
        <div className="inline-flex justify-start items-start gap-40">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <span className="text-base font-bold font-['Urbanist'] leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-sm font-bold font-['Urbanist'] leading-5 text-gray-300">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-[50px] shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/team/member-1.png"
              alt="Theo Browne"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Glass card — white text variant */
function GlassWhiteCard() {
  return (
    <div
      className="relative w-[300px] shrink-0 sm:w-[340px] lg:w-96 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] pl-9 pr-7 pt-10 pb-2.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col justify-start items-start gap-11">
        <p className="w-80 text-lg font-bold font-['Urbanist'] leading-7 text-white">
          {QUOTE_TEXT}
        </p>
        <div className="inline-flex justify-start items-start gap-40">
          <div className="inline-flex flex-col justify-start items-start gap-1.5">
            <span className="text-base font-bold font-['Urbanist'] leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-sm font-bold font-['Urbanist'] leading-5 text-gray-300">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-[50px] shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/team/member-1.png"
              alt="Theo Browne"
              width={50}
              height={50}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Main Section
   ============================================================ */

export function FoundersSection() {
  return (
    <Section
      className="bg-black px-4 py-[50px] md:px-24 md:py-20 md:flex md:flex-col md:items-center"
      id="testimonials"
    >
      <div className="flex flex-col justify-start items-center gap-[40px] md:gap-14">
        {/* Header */}
        <div className="flex flex-col justify-start items-center gap-6">
          <Badge>Testimonials</Badge>
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="text-center text-white text-[32px] leading-[1.3] md:text-5xl md:leading-[78px] font-bold font-['Urbanist']">
              Founders Are Already Building With Chorus
            </h2>
            <p className="text-center text-gray-300 text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist']">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
          </div>
        </div>

        {/* 3-column masonry grid — desktop */}
        <div className="hidden lg:inline-flex justify-start items-start gap-10">
          {/* Column 1 */}
          <div className="inline-flex flex-col justify-start items-start gap-11">
            <LightCard
              logo="/images/figma/image 23.svg"
              alt="Perplexity"
              logoWidth={158}
              logoHeight={38}
            />
            <DarkCard logo="/images/figma/bbdo-logo.svg" alt="BBDO" />
          </div>

          {/* Column 2 */}
          <div className="inline-flex flex-col justify-start items-start gap-7">
            <GlassCard />
            <DarkCard logo="/images/figma/image 23 (2).svg" alt="Raycas" />
            <GlassWhiteCard />
          </div>

          {/* Column 3 */}
          <div className="inline-flex flex-col justify-start items-start gap-9">
            <DarkCard
              logo="/images/figma/image 23 (1).svg"
              alt="Clerk"
            />
            <LightCard
              logo="/images/figma/image 23.svg"
              alt="Perplexity"
              logoWidth={158}
              logoHeight={38}
            />
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="w-full lg:hidden -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-start gap-[16px] w-max">
            <LightCard
              logo="/images/figma/image 23.svg"
              alt="Perplexity"
              logoWidth={158}
              logoHeight={38}
            />
            <DarkCard logo="/images/figma/bbdo-logo.svg" alt="BBDO" />
            <GlassCard />
            <DarkCard logo="/images/figma/image 23 (2).svg" alt="Raycas" />
            <GlassWhiteCard />
          </div>
        </div>
      </div>
    </Section>
  );
}
