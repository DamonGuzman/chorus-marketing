import Image from "next/image";
import { Section } from "@/components/ui";

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
      className="relative w-[379px] overflow-hidden rounded-[20px] border border-white/50 px-[30px] pb-[30px] pt-[35px] backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(37deg, #F6F6F6 0%, #CCCBCB 100%)",
      }}
    >
      <GridLines dark />
      <div className="relative z-10 flex flex-col gap-[30px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} />

        {/* Quote */}
        <p className="font-urbanist text-[18px] font-bold leading-[28px] text-[#232227]">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[6px]">
            <span className="font-urbanist text-[16px] font-bold leading-[24px] text-[#222222]">
              Theo Browne
            </span>
            <span className="font-urbanist text-[14px] font-bold leading-[22px] text-[#222222]">
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
      className="relative w-[379px] overflow-hidden rounded-[20px] border border-white/15 px-[30px] pb-[30px] pt-[35px] backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(45deg, #101010 0%, #242324 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col gap-[30px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} />

        {/* Quote */}
        <p className="font-urbanist text-[18px] font-bold leading-[28px] text-[#CBCACC]">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[6px]">
            <span className="font-urbanist text-[16px] font-bold leading-[24px] text-white">
              Theo Browne
            </span>
            <span className="font-urbanist text-[14px] font-bold leading-[22px] text-white/[0.57]">
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
      className="relative w-[379px] overflow-hidden rounded-[20px] border border-white/20 px-[37px] pb-[30px] pt-[42px] backdrop-blur-[30px]"
      style={{
        background:
          "linear-gradient(186deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col gap-[44px]">
        <p className="font-urbanist text-[18px] font-bold leading-[28px] text-[#CBCACC]">
          {QUOTE_TEXT}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[6px]">
            <span className="font-urbanist text-[16px] font-bold leading-[24px] text-white">
              Theo Browne
            </span>
            <span className="font-urbanist text-[14px] font-bold leading-[22px] text-[#7D7C83]">
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
      className="relative w-[379px] overflow-hidden rounded-[20px] border border-white/20 px-[37px] pb-[30px] pt-[42px] backdrop-blur-[30px]"
      style={{
        background:
          "linear-gradient(186deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 55%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <GridLines />
      <div className="relative z-10 flex flex-col gap-[44px]">
        <p className="font-urbanist text-[18px] font-bold leading-[28px] text-white">
          {QUOTE_TEXT}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[6px]">
            <span className="font-urbanist text-[16px] font-bold leading-[24px] text-white">
              Theo Browne
            </span>
            <span className="font-urbanist text-[14px] font-bold leading-[22px] text-[#7D7C83]">
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
      className="bg-black px-6 py-[75px] lg:px-[100px]"
      id="testimonials"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[57px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[24px]">
          <div className="inline-flex items-center justify-center overflow-hidden rounded-full bg-white/[0.07] px-[12px] py-[4px]">
            <span className="text-center font-urbanist text-[16px] font-semibold leading-[24px] text-white">
              Testimonials
            </span>
          </div>
          <div className="flex flex-col items-center gap-[16px]">
            <h2 className="text-center font-urbanist text-[36px] font-bold leading-[1.3] text-white md:text-[50px] md:leading-[78px]">
              Founders Are Already Building With Chorus
            </h2>
            <p className="text-center font-urbanist text-[18px] font-normal leading-[30px] text-[#7D7C83] md:text-[22px] md:leading-[36px]">
              The best way to reach humans instead of spam folders. Deliver
              transactional and marketing emails at scale.
            </p>
          </div>
        </div>

        {/* 3-column masonry grid — desktop */}
        <div className="hidden w-full items-start justify-center gap-[40px] lg:inline-flex">
          {/* Column 1 */}
          <div className="inline-flex flex-col items-start gap-[40px]">
            <LightCard
              logo="/images/figma/image 23.svg"
              alt="Perplexity"
              logoWidth={158}
              logoHeight={38}
            />
            <DarkCard logo="/images/figma/bbdo-logo.svg" alt="BBDO" />
          </div>

          {/* Column 2 */}
          <div className="inline-flex flex-col items-start gap-[30px]">
            <GlassCard />
            <DarkCard logo="/images/figma/image 23 (2).svg" alt="Raycas" />
            <GlassWhiteCard />
          </div>

          {/* Column 3 */}
          <div className="inline-flex flex-col items-start gap-[36px]">
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

        {/* Mobile: single column */}
        <div className="flex flex-col items-center gap-[30px] lg:hidden">
          <GlassCard />
          <DarkCard logo="/images/figma/image 23 (2).svg" alt="Raycas" />
          <GlassWhiteCard />
        </div>
      </div>
    </Section>
  );
}
