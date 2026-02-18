
import { AnimateOnScroll, Badge, ScrollTextReveal } from "@/components/ui";

const integrationIcons = [
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
  "Calendly.svg",
  "Figma.svg",
  "Obviously AI.svg",
  "OpenSea.svg",
  "Outreach.svg",
  "Patreon.svg",
  "PayPal.svg",
  "Pendo.svg",
  "People.ai.svg",
  "Postman.svg",
  "Prismic.svg",
  "Product Hunt.svg",
  "Protopie.svg",
  "Pry.svg",
  "Ramp.svg",
  "Readymag.svg",
  "Reclaim.svg",
  "Reddit.svg",
  "Restream.svg",
];

// Shuffle function to randomize the icons
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const randomIcons = shuffleArray(integrationIcons);

const IntegrationIcon = ({ src }: { src: string }) => (
  <div className="w-9 h-9 md:w-12 md:h-12 lg:w-20 lg:h-20 bg-neutral-800 rounded-full shadow-[0px_1.73px_10.79px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_2.24px_0px_rgba(255,255,255,0.55)] lg:shadow-[0px_3.98px_24.85px_0px_rgba(0,0,0,0.25)] lg:shadow-[inset_0px_0px_5.16px_0px_rgba(255,255,255,0.55)] flex justify-center items-center">
    <img src={`/images/figma/landing-page/${src}`} alt="Integration" className="w-5 h-5 md:w-7 md:h-7 lg:w-12 lg:h-12 object-contain" />
  </div>
);

export function IntegrationsSection() {
  return (
    <section id="integrations" className="w-full px-4 py-10 md:px-8 md:py-20 bg-black flex flex-col items-center gap-2.5 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-center gap-6 md:gap-14">
        <div className="self-stretch flex flex-col justify-start items-center gap-3">
          <Badge className="w-32 h-9 px-3 py-1 bg-white/5 rounded-[100px] inline-flex justify-center items-center gap-2 overflow-hidden">
            Integration
          </Badge>
          <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-7">
            <ScrollTextReveal
              text="Works In Harmony With Your Current Stack"
              className="justify-start text-white text-5xl font-bold font-['Urbanist'] leading-[78px]"
            />
            <AnimateOnScroll animation="fade-up" duration={0.8} threshold={0.3}>
              <div className="w-80 md:w-full md:max-w-[668px] text-center text-gray-300 text-sm leading-6 md:text-base md:leading-7 lg:text-xl lg:leading-9 font-normal font-['Urbanist']">More than just integrations, 10,000+ tools that can adapt — turning automation into intuition.</div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>


        <div className="w-[525px] md:w-full h-64 md:h-[480px] lg:h-[602px] max-w-[1209px] relative overflow-hidden flex flex-col justify-center items-center gap-1.5 md:gap-2.5 lg:gap-5">
          {/* Layer 2: Gradient Overlay (fades icons) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_0%,_black_100%)] z-20 pointer-events-none" />

          {/* Layer 3: Blue glowing circle video + blur mask */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[25] w-[340px] h-[340px] md:w-[380px] md:h-[380px] lg:w-[520px] lg:h-[520px] pointer-events-none"
            style={{
              mask: "radial-gradient(circle, white 30%, transparent 60%)",
              WebkitMask: "radial-gradient(circle, white 30%, transparent 60%)",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src="/images/integration/round loop.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Layer 4: Central Logo (topmost, on top of video) */}
          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30 w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]"
            src="/images/figma/landing-page/landing-page-animated-logo-icon.svg"
            alt="Chorus logo"
          />


          <div className="inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(0, 9).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(9, 19).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(19, 28).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(28, 38).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(38, 47).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-5 relative z-10">
            {randomIcons.slice(47, 57).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
        </div>
    </section>
  );
}
