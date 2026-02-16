import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";
import { PressCarousel } from "@/components/sections/PressCarousel";
import { FinalCTASection } from "@/components/sections";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <section
          id="about-us"
          className="bg-black py-[50px] md:py-section-y overflow-hidden"
        >
          {/* first parent section */}
          {/* desktop */}
          <div className="hidden md:block self-stretch h-[659px] relative bg-black overflow-hidden">
            <img
              className="w-[736px] h-[571px] right-0 top-[88px] absolute"
              src="/images/figma/about-us/torch.svg"
            />
            <div className="md:w-[80%] lg:w-[55%] left-[123px] top-[146px] absolute inline-flex flex-col justify-start items-start gap-8">
              <div className="text-center justify-center text-White text-base font-bold font-['Urbanist'] leading-6">
                <Badge className="px-3 py-1">About us</Badge>
              </div>
              <div className="self-stretch justify-center text-6xl font-bold font-['Urbanist'] leading-[74px]">
                <span className="text-white">Chorus is the </span>{" "}
                <span className="bg-linear-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
                  agentic AI platform
                </span>
                <span className="bg-linear-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
                  {" "}
                  that proves real magic exists
                </span>
              </div>
              <div className="self-stretch justify-start text-gray-300 text-3xl font-medium font-['Urbanist'] leading-9">
                We don&apos;t promise the impossible. We deliver it.
              </div>
            </div>
          </div>

          {/* mobile */}
          <div className="block md:hidden self-stretch h-[509px] relative bg-black overflow-hidden">
            <img
              className="w-72 h-56 right-0 top-[259px] absolute"
              src="/images/figma/about-us/torch.svg"
            />
            <div
              data-size="lg"
              data-state="view"
              data-type="img"
              className="w-7 h-7 left-[527.21px] top-[55.38px] absolute rounded-3xl"
            >
              <div className="w-7 h-7 -left-px -top-px absolute rounded-full outline-1 outline-gray-200" />
            </div>
            <div className="w-52 h-80 left-[18px] top-[28.99px] absolute inline-flex flex-col justify-start items-start">
              <div className="flex flex-col justify-start items-center gap-7">
                <div className="text-center justify-center text-White text-base font-bold font-['Urbanist'] leading-6">
                  <Badge className="px-3 py-1">About us</Badge>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="w-80 text-center justify-center text-white text-4xl font-bold font-['Urbanist'] leading-10">
                    <span className="text-white">Chorus is the </span>
                    <span className="bg-linear-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
                      agentic AI platform
                    </span>
                    <span className="bg-linear-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
                      {" "}
                      that proves real magic exists
                    </span>
                  </div>
                  <div className="self-stretch text-center justify-start text-[#CACACC] text-base font-normal font-['Urbanist'] leading-6">
                    We don&apos;t promise the impossible. We deliver it.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* end first parent section */}

          {/* testimonials */}
          <div className="self-stretch px-6 md:px-24 py-20 bg-black flex flex-col justify-start items-center">
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 md:divide-x divide-white/20">
                {/* Card 1 */}
                <div className="flex flex-col gap-9">
                  <div className="w-12 h-12">
                    <img
                      src="/images/figma/about-us/atom-02.svg"
                      alt="Atom illustration"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
                      Built in Public. Proven in Public
                    </h3>
                    <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-8">
                      We launched not with promises, but with a 30-day public
                      experiment where every business decision was voted on by
                      thousands—live, transparent, and real.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-9 md:pl-8 lg:pl-12">
                  <div className="w-12 h-12">
                    <img src="/images/figma/about-us/bot.svg" alt="AI Agents" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
                      AI Agents in Perfect Harmony
                    </h3>
                    <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-8">
                      Chorus coordinated and executed every task in real-time,
                      balancing thousands of voices while building a profitable
                      business from scratch.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-9 md:pl-8 lg:pl-12">
                  <div className="w-12 h-12">
                    <img
                      src="/images/figma/about-us/blend.svg"
                      alt="Proof Before Belief"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
                      Proof Before Belief
                    </h3>
                    <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-8">
                      You didn&apos;t have to take our word for it you watched
                      it happen. A real company, real decisions, real results.
                      That&apos;s the power of Chorus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Origin Story */}
          <div className="self-stretch px-4 md:px-24 py-[50px] md:py-20 bg-black flex flex-col justify-start items-start">
            <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-4">
              {/* Left Content */}
              <div className="flex flex-col justify-start items-center lg:items-start gap-8 md:gap-12 flex-1 text-center lg:text-left">
                <Badge className="px-3 py-1">Origin Story</Badge>

                <h2 className="text-[28px] md:text-5xl font-bold font-['Urbanist'] leading-[38px] md:leading-tight text-white max-w-[583px]">
                  Built By People Who Understand Both Vision And Execution
                </h2>

                {/* Images — visible on mobile, stacked above text */}
                <div className="relative w-full lg:hidden">
                  <img
                    className="w-full h-auto max-h-[400px] object-contain"
                    src="images/figma/about-us/tilted-image.png"
                    alt="Origin story illustration"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,_rgba(0,_0,_0,_0)_0%,_black_100%)]" />
                  <img
                    className="absolute inset-0 w-full h-full object-contain"
                    src="images/figma/about-us/test.svg"
                    alt="Origin story illustration overlay"
                  />
                </div>

                <div className="max-w-[529px]">
                  <p className="text-gray-400 text-[15px] md:text-lg font-medium font-['Urbanist'] leading-[26px] md:leading-9">
                    We&apos;ve been on both sides: building with limited
                    resources and watching others scale impossibly fast. We
                    built Chorus because we were tired of AI companies
                    overpromising and underdelivering. We wanted real magic.
                  </p>
                  <br />
                  <p className="text-white text-[17px] md:text-xl font-semibold italic font-['Urbanist'] leading-[28px] md:leading-9">
                    Not smoke and mirrors. So we built it.
                  </p>
                  <br />
                  <p className="text-gray-400 text-[15px] md:text-lg font-medium font-['Urbanist'] leading-[26px] md:leading-9">
                    Tested it internally. And now we&apos;re sharing it with
                    founders who are ready to build without limits.
                  </p>
                </div>
              </div>

              {/* Right Images — desktop only */}
              <div className="relative flex-1 hidden lg:flex items-center justify-end">
                <img
                  className="w-full max-w-[524px] h-auto"
                  src="images/figma/about-us/tilted-image.png"
                  alt="Origin story illustration 1"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_39.15%_39.16%_at_50.00%_50.00%,_rgba(0,_0,_0,_0)_0%,_black_100%)]" />
                <img
                  className="absolute right-0 w-full max-w-[705px] h-auto"
                  src="images/figma/about-us/test.svg"
                  alt="Origin story illustration 2"
                />
              </div>
            </div>
          </div>

          {/* Press Section */}
          <div className="self-stretch px-4 md:px-24 py-[50px] md:py-20 bg-black flex flex-col justify-start items-center">
            <div className="w-full flex flex-col justify-start items-center gap-6">
              <Badge className="px-3 py-1">Features</Badge>
              <div className="flex flex-col justify-start items-center gap-6 md:gap-8">
                <h2 className="text-center text-white text-[28px] md:text-5xl font-bold font-['Urbanist'] leading-[38px] md:leading-[78px]">
                  What The Audience Is Saying
                </h2>
                <p className="text-center text-gray-400 text-[16px] md:text-2xl font-medium font-['Urbanist'] leading-[26px] md:leading-9">
                  The Difference That Changes Everything
                </p>
              </div>
            </div>
          </div>

          {/* Press Testimonials — Mobile: carousel, Desktop: grid */}
          <PressCarousel />

          {/* Desktop grid */}
          <div className="hidden lg:flex self-stretch pl-52 pr-24 py-20 bg-black flex-col justify-start items-center gap-14 overflow-hidden">
            <div className="w-full max-w-[1328px] flex flex-col justify-start items-center gap-20">
              <div className="w-full grid grid-cols-2 gap-14">
                <div className="flex flex-row justify-start items-end gap-9">
                  <img
                    className="w-64 h-56 rounded-card border border-white/40 object-[inherit]"
                    src="images/figma/about-us/person-1.jpg"
                    alt="TechCrunch"
                  />
                  <div className="flex flex-col justify-start items-start gap-5">
                    <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                      Chorus didn&apos;t just launch a product—they performed it
                      live. 15,000 people directing, AI executing, $25K in 30
                      days. That&apos;s not a demo. That&apos;s a debut.
                    </p>
                    <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">
                      — TechCrunch
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-end gap-9">
                  <img
                    className="w-64 h-56 rounded-card border border-white/40 object-[inherit]"
                    src="images/figma/about-us/person-2.jpg"
                    alt="The Information"
                  />
                  <div className="flex flex-col justify-start items-start gap-5">
                    <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                      The most coordinated AI launch we&apos;ve seen.
                    </p>
                    <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">
                      — The Information
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-14 pl-64">
                <div className="flex flex-row justify-start items-end gap-9">
                  <img
                    className="w-64 h-56 rounded-card border border-white/40 object-cover"
                    src="images/figma/about-us/person-3.jpg"
                    alt="VentureBeat"
                  />
                  <div className="flex flex-col justify-start items-start gap-5">
                    <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                      If this is what agentic AI actually looks like when it
                      works in harmony, every startup&apos;s playbook just got
                      rewritten.
                    </p>
                    <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">
                      — VentureBeat
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-end gap-9">
                  <img
                    className="w-60 h-56 rounded-card border border-white/40 object-cover"
                    src="images/figma/about-us/person-4.jpg"
                    alt="TechCrunch"
                  />
                  <div className="flex flex-col justify-start items-start gap-5">
                    <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                      Chorus didn&apos;t just launch a product—they performed it
                      live. 15,000 people directing, AI executing, $25K in 30
                      days. That&apos;s not a demo. That&apos;s a debut.
                    </p>
                    <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">
                      — TechCrunch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="h-12 px-8 py-3 bg-white rounded-pill shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-100 transition-colors">
              <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">
                See The Proof
              </span>
            </button>
          </div>

          {/* Our Team */}
          <div className="self-stretch px-4 md:px-24 pt-[50px] md:pt-20 pb-[60px] md:pb-24 bg-black flex flex-col justify-start items-center">
            <div className="flex flex-col justify-start items-center gap-[40px] md:gap-20">
              {/* Header */}
              <div className="flex flex-col justify-start items-center gap-5 md:gap-6">
                <Badge className="px-3 py-1">Our team members</Badge>
                <div className="flex flex-col justify-start items-center gap-3 md:gap-4">
                  <h2 className="text-white text-[28px] md:text-5xl font-bold font-['Urbanist'] leading-[38px] md:leading-[78px]">
                    Our Team
                  </h2>
                  <p className="text-center text-gray-400 text-[15px] md:text-xl font-normal font-['Urbanist'] leading-[24px] md:leading-9 max-w-3xl">
                    The best way to reach humans instead of spam folders.
                    Deliver transactional and marketing emails at scale.
                  </p>
                </div>
              </div>

              {/* Team Grid */}
              <div className="w-full max-w-[1064px] grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 lg:gap-32">
                {/* Team Member 1 */}
                {[
                  { src: "images/figma/about-us/team-person-1.png" },
                  { src: "images/figma/about-us/team-person-2.png" },
                  { src: "images/figma/about-us/team-person-3.png" },
                  { src: "images/figma/about-us/team-person-4.png" },
                  { src: "images/figma/about-us/team-person-5.png" },
                  { src: "images/figma/about-us/team-person-6.png" },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-start items-center gap-3 md:gap-6"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-[140px] h-[140px] md:w-72 md:h-72 object-cover rounded-full bg-[#ADADAD]"
                      src={member.src}
                      alt="Team member"
                    />
                    <div className="flex flex-col justify-start items-center gap-1 md:gap-2.5">
                      <h3 className="text-center text-white text-[16px] md:text-4xl font-bold font-['Urbanist'] leading-tight">
                        David Henricks
                      </h3>
                      <p className="text-center text-gray-500 text-[12px] md:text-base font-medium font-['Urbanist'] uppercase leading-[18px] md:leading-6">
                        Founder &amp; CEO
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <FinalCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
