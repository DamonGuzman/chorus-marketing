
import { Badge } from "@/components/ui";

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
  <div className="w-14 h-14 md:w-20 md:h-20 bg-neutral-800 rounded-full shadow-[0px_3.9766557216644287px_24.854097366333008px_0px_rgba(0,0,0,0.25)] shadow-[inset_0px_0px_5.159178733825684px_0px_rgba(255,255,255,0.55)] flex justify-center items-center">
    <img src={`/images/figma/landing-page/${src}`} alt="Integration" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
  </div>
);

export function IntegrationsSection() {
  return (
    <section id="integrations" className="w-full h-full px-4 py-[50px] md:px-[100px] md:py-[75px] bg-black inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
      <div className="self-stretch px-0 py-0 md:px-24 md:py-20 bg-black inline-flex flex-col justify-start items-center gap-2.5">
        <div className="flex flex-col justify-start items-center gap-14">
          <div className="flex flex-col justify-start items-center gap-6">
            <Badge className="px-3 py-1">
              Integration
            </Badge>
            <div className="flex flex-col justify-start items-center gap-7">
              <div className="text-center text-white text-[32px] leading-[42px] md:text-5xl md:leading-[78px] font-bold font-['Urbanist']">Works In Harmony With Your Current Stack</div>
              <div className="w-full max-w-[668px] text-center text-Secondary-Tint1 text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist']">More than just integrations, 10,000+ tools that can adapt — turning automation into intuition.</div>
            </div>
          </div>
        </div>


        <div className="w-full h-[400px] md:h-[602px] max-w-[1209px] relative overflow-hidden flex flex-col justify-center items-center gap-5">
          {/* Layer 2: Gradient Overlay (fades icons) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_0%,_black_100%)] z-20 pointer-events-none" />

          {/* Layer 3: Central Logo (topmost) */}
          <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-30 w-[140px] h-[140px] md:w-auto md:h-auto" src="images/figma/landing-page/landing-page-animated-logo-icon.svg" alt="Integration visual" />


          <div className="inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(0, 9).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(9, 19).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(19, 28).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(28, 38).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(38, 47).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
          <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-5 relative z-10">
            {randomIcons.slice(47, 57).map((icon, i) => (
              <IntegrationIcon key={i} src={icon} />
            ))}
          </div>
        </div>

      </div>
    </section >
  );
}
