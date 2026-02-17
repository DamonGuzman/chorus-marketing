import Image from "next/image";
import { AnimateOnScroll, Badge, Section, ScrollTextReveal, StaggerChildren, ScrollParallax } from "@/components/ui";

/* eslint-disable @next/next/no-img-element */

const QUOTE_TEXT =
  '"Stripe for payments, Vercel for deployments, Dub.co for links. As the cloud evolves, we abstract out common needs into reusable, high-performance infrastructure. Excited about Dub filling this foundational missing piece of the puzzle."';

/* ============================================================
   Grid lines overlay
   ============================================================ */

function GridBg({ dark = false }: { dark?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <img
        src="/images/figma/design.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: dark ? 0.8 : 0.7,
          filter: dark ? "invert(1)" : "none",
        }}
      />
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
      className="relative w-72 h-96 shrink-0 md:w-full md:h-auto overflow-hidden rounded-xl md:rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(37deg, #F6F6F6 0%, #CCCBCB 100%)",
      }}
    >
      <GridBg dark />
      <div className="relative z-10 flex flex-col gap-16 md:gap-8 lg:gap-20 px-[18px] pb-[18px] pt-[24px] md:px-5 md:pb-5 md:pt-6 lg:px-[30px] lg:pb-[30px] lg:pt-[35px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} className="w-28 h-7 md:h-6 lg:h-10 md:w-auto object-contain self-start" />

        {/* Quote */}
        <p className="w-60 md:w-auto text-sm leading-5 md:text-sm md:leading-5 lg:text-lg font-bold font-['Urbanist'] lg:leading-7 text-gray-800">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="w-60 md:w-full inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <span className="text-xs md:text-base font-bold font-['Urbanist'] leading-4 md:leading-6 text-[#222222]">
              Theo Browne
            </span>
            <span className="text-xs md:text-sm font-bold font-['Urbanist'] leading-4 md:leading-5 text-[#222222]">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-9 md:size-[50px] shrink-0 overflow-hidden rounded-full">
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
      className="relative w-72 h-96 shrink-0 md:w-full md:h-auto overflow-hidden rounded-xl md:rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px]"
      style={{
        background: "linear-gradient(45deg, #101010 0%, #242324 100%)",
      }}
    >
      <GridBg />
      <div className="relative z-10 flex flex-col gap-16 md:gap-8 lg:gap-20 px-[18px] pb-[18px] pt-[24px] md:px-5 md:pb-5 md:pt-6 lg:px-[30px] lg:pb-[30px] lg:pt-[35px]">
        {/* Logo */}
        <img src={logo} alt={alt} width={logoWidth} height={logoHeight} className="w-28 h-7 md:h-6 lg:h-10 md:w-auto object-contain self-start" />

        {/* Quote */}
        <p className="w-60 md:w-auto text-sm leading-5 md:text-sm md:leading-5 lg:text-lg font-bold font-['Urbanist'] lg:leading-7 text-gray-100">
          {QUOTE_TEXT}
        </p>

        {/* Author */}
        <div className="w-60 md:w-full inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <span className="text-xs md:text-base font-bold font-['Urbanist'] leading-4 md:leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-xs md:text-sm font-bold font-['Urbanist'] leading-4 md:leading-5 text-white/60">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-9 md:size-[50px] shrink-0 overflow-hidden rounded-full">
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
      className="relative w-72 h-96 shrink-0 md:w-full md:h-auto rounded-xl md:rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] px-[18px] pt-[24px] pb-[18px] md:pl-5 md:pr-4 md:pt-6 md:pb-2 lg:pl-9 lg:pr-7 lg:pt-10 lg:pb-2.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col justify-start items-start gap-16 md:gap-6 lg:gap-11 h-full">
        <p className="w-60 md:w-auto text-sm leading-5 md:text-sm md:leading-5 lg:text-lg font-bold font-['Urbanist'] lg:leading-7 text-gray-100 flex-1">
          {QUOTE_TEXT}
        </p>
        <div className="w-60 md:w-full inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <span className="text-xs md:text-base font-bold font-['Urbanist'] leading-4 md:leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-xs md:text-sm font-bold font-['Urbanist'] leading-4 md:leading-5 text-gray-300">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-9 md:size-[50px] shrink-0 overflow-hidden rounded-full">
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
      className="relative w-72 h-96 shrink-0 md:w-full md:h-auto rounded-xl md:rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/30 backdrop-blur-[30px] px-[18px] pt-[24px] pb-[18px] md:pl-5 md:pr-4 md:pt-6 md:pb-2 lg:pl-9 lg:pr-7 lg:pt-10 lg:pb-2.5"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.05) 100%)",
      }}
    >
      <div className="relative z-10 flex flex-col justify-start items-start gap-16 md:gap-6 lg:gap-11 h-full">
        <p className="w-60 md:w-auto text-sm leading-5 md:text-sm md:leading-5 lg:text-lg font-bold font-['Urbanist'] lg:leading-7 text-white flex-1">
          {QUOTE_TEXT}
        </p>
        <div className="w-60 md:w-full inline-flex justify-between items-start">
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <span className="text-xs md:text-base font-bold font-['Urbanist'] leading-4 md:leading-6 text-white">
              Theo Browne
            </span>
            <span className="text-xs md:text-sm font-bold font-['Urbanist'] leading-4 md:leading-5 text-gray-300">
              CEO / Ping Labs
            </span>
          </div>
          <div className="size-9 md:size-[50px] shrink-0 overflow-hidden rounded-full">
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
      className="bg-black px-4 py-10 md:px-8 md:py-20 md:flex md:flex-col md:items-center"
      id="testimonials"
    >
      <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-14">
        {/* Header */}
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <Badge>Testimonials</Badge>
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="w-80 md:w-auto">
              <div className="md:hidden">
                <ScrollTextReveal
                  text="The Best Companies Don't Have More People. They Have Better Coordination."
                  className="text-center text-2xl leading-8 font-bold font-['Urbanist']"
                />
              </div>
              <div className="hidden md:block">
                <ScrollTextReveal
                  text="Founders Are Already Building With Chorus"
                  className="text-center md:text-3xl md:leading-[42px] lg:text-5xl lg:leading-[78px] font-bold font-['Urbanist']"
                />
              </div>
            </div>
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <p className="w-full text-center text-gray-300 text-sm leading-6 md:text-xl md:leading-9 font-normal font-['Urbanist']">
                The best way to reach humans instead of spam folders. Deliver
                transactional and marketing emails at scale.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* 3-column masonry grid — desktop */}
        <StaggerChildren staggerDelay={150} className="hidden md:inline-flex justify-start items-start gap-5 xl:gap-10 w-full max-w-[1240px]">
          {/* Column 1 */}
          <ScrollParallax offset={30} delay={0} className="flex-1 min-w-0">
            <div className="inline-flex flex-col justify-start items-start gap-11 w-full">
              <LightCard
                logo="/images/figma/image 23.svg"
                alt="Perplexity"
                logoWidth={158}
                logoHeight={38}
              />
              <DarkCard logo="/images/figma/bbdo-logo.svg" alt="BBDO" />
            </div>
          </ScrollParallax>

          {/* Column 2 */}
          <ScrollParallax offset={30} delay={0.5} className="flex-1 min-w-0">
            <div className="inline-flex flex-col justify-start items-start gap-7 w-full">
              <GlassCard />
              <DarkCard logo="/images/figma/image 23 (2).svg" alt="Raycas" />
              <GlassWhiteCard />
            </div>
          </ScrollParallax>

          {/* Column 3 */}
          <ScrollParallax offset={30} delay={1} className="flex-1 min-w-0">
            <div className="inline-flex flex-col justify-start items-start gap-9 w-full">
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
          </ScrollParallax>
        </StaggerChildren>

        {/* Mobile: horizontal scroll */}
        <div className="w-full md:hidden -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
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
