import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";
import { PressCarousel } from "@/components/sections/PressCarousel";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden">
            <Header />
            <main>
                <section id="about-us" className="bg-black py-[50px] md:py-[75px] overflow-hidden">
                    {/* first parent section */}
                    <div className="relative w-full md:px-[30px] min-h-[650px] md:min-h-[700px] lg:min-h-[800px]">
                        {/* Torch Image - positioned behind text */}
                        <div className="absolute right-0 bottom-0 w-[70%] md:w-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto z-0">
                            <img
                                className="w-full h-auto object-contain"
                                src="/images/figma/about-us/torch.svg"
                                alt="Torch illustration"
                            />
                        </div>

                        {/* Content - stacked: badge + title on top, then subtitle overlapping the image */}
                        <div className="relative w-full lg:max-w-[50%] px-4 md:px-24 pt-[80px] md:pt-20 flex flex-col justify-start items-center lg:items-start gap-6 md:gap-8 z-10 text-center lg:text-left">
                            <Badge className="px-3 py-1">
                                About us
                            </Badge>

                            <div className="self-stretch">
                                <h1 className="text-[36px] md:text-6xl font-bold font-['Urbanist'] leading-[46px] md:leading-[74px]">
                                    <span className="text-white">Chorus is the </span>
                                    <span className="bg-gradient-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
                                        agentic AI platform
                                    </span>
                                    <span className="bg-gradient-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
                                        {' '}that proves real magic exists
                                    </span>
                                </h1>
                            </div>
                        </div>

                        {/* Subtitle - positioned to overlap the torch image on mobile */}
                        <div className="absolute bottom-[180px] md:bottom-auto md:top-[420px] lg:top-[380px] left-0 w-full lg:w-[50%] px-4 md:px-24 z-10 text-center lg:text-left">
                            <p className="text-[#CACACC] text-[14px] md:text-3xl font-medium font-['Urbanist'] leading-[22px] md:leading-9 whitespace-nowrap">
                                We don&apos;t promise the impossible. We deliver it.
                            </p>
                        </div>
                    </div>

                    {/* testimonials */}
                    <div className="self-stretch px-6 md:px-24 py-20 bg-black flex flex-col justify-start items-center">
                        <div className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 md:divide-x divide-white/20">
                                {/* Card 1 */}
                                <div className="flex flex-col gap-9">
                                    <div className="w-12 h-12">
                                        <img src="/images/figma/about-us/atom-02.svg" alt="Atom illustration" />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h3 className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
                                            Built in Public. Proven in Public
                                        </h3>
                                        <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-8">
                                            We launched not with promises, but with a 30-day public experiment where every business decision was voted on by thousands—live, transparent, and real.
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
                                            Chorus coordinated and executed every task in real-time, balancing thousands of voices while building a profitable business from scratch.
                                        </p>
                                    </div>
                                </div>

                                {/* Card 3 */}
                                <div className="flex flex-col gap-9 md:pl-8 lg:pl-12">
                                    <div className="w-12 h-12">
                                        <img src="/images/figma/about-us/blend.svg" alt="Proof Before Belief" />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <h3 className="text-white text-2xl font-bold font-['Urbanist'] leading-10">
                                            Proof Before Belief
                                        </h3>
                                        <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-8">
                                            You didn&apos;t have to take our word for it you watched it happen. A real company, real decisions, real results. That&apos;s the power of Chorus.
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
                                <Badge className="px-3 py-1">
                                    Origin Story
                                </Badge>

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
                                        We&apos;ve been on both sides: building with limited resources and watching others scale impossibly fast. We built Chorus because we were tired of AI companies overpromising and underdelivering. We wanted real magic.
                                    </p>
                                    <br />
                                    <p className="text-white text-[17px] md:text-xl font-semibold italic font-['Urbanist'] leading-[28px] md:leading-9">
                                        Not smoke and mirrors. So we built it.
                                    </p>
                                    <br />
                                    <p className="text-gray-400 text-[15px] md:text-lg font-medium font-['Urbanist'] leading-[26px] md:leading-9">
                                        Tested it internally. And now we&apos;re sharing it with founders who are ready to build without limits.
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
                            <Badge className="px-3 py-1">
                                Features
                            </Badge>
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
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-[inherit]" src="images/figma/about-us/person-1.jpg" alt="TechCrunch" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            Chorus didn&apos;t just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That&apos;s not a demo. That&apos;s a debut.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— TechCrunch</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start items-end gap-9">
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-[inherit]" src="images/figma/about-us/person-2.jpg" alt="The Information" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            The most coordinated AI launch we&apos;ve seen.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— The Information</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-14 pl-64">
                                <div className="flex flex-row justify-start items-end gap-9">
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-cover" src="images/figma/about-us/person-3.jpg" alt="VentureBeat" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            If this is what agentic AI actually looks like when it works in harmony, every startup&apos;s playbook just got rewritten.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— VentureBeat</p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-start items-end gap-9">
                                    <img className="w-60 h-56 rounded-[35px] border border-white/40 object-cover" src="images/figma/about-us/person-4.jpg" alt="TechCrunch" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            Chorus didn&apos;t just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That&apos;s not a demo. That&apos;s a debut.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— TechCrunch</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="h-12 px-8 py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-100 transition-colors">
                            <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">See The Proof</span>
                        </button>
                    </div>

                    {/* Our Team */}
                    <div className="self-stretch px-4 md:px-24 pt-[50px] md:pt-20 pb-[60px] md:pb-24 bg-black flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-start items-center gap-[40px] md:gap-20">
                            {/* Header */}
                            <div className="flex flex-col justify-start items-center gap-5 md:gap-6">
                                <Badge className="px-3 py-1">
                                    Our team members
                                </Badge>
                                <div className="flex flex-col justify-start items-center gap-3 md:gap-4">
                                    <h2 className="text-white text-[28px] md:text-5xl font-bold font-['Urbanist'] leading-[38px] md:leading-[78px]">
                                        Our Team
                                    </h2>
                                    <p className="text-center text-gray-400 text-[15px] md:text-xl font-normal font-['Urbanist'] leading-[24px] md:leading-9 max-w-3xl">
                                        The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
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
                                    <div key={i} className="flex flex-col justify-start items-center gap-3 md:gap-6">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img className="w-[140px] h-[140px] md:w-72 md:h-72 object-cover rounded-full bg-[#ADADAD]" src={member.src} alt="Team member" />
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
                    <div>
                        <div className="w-full h-1 bg-gradient-to-r from-white/0 via-neutral-400 to-white/0 rounded-full" />
                        <div className="relative w-full min-h-[500px] md:h-[632px] px-4 md:px-24 py-[50px] md:py-20 bg-gradient-to-b from-white/20 via-white/0 to-black/0 flex flex-col justify-center items-center overflow-hidden">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: 'url(/images/figma/about-us/Vector.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />

                            {/* Content */}
                            <div className="w-full max-w-[1039px] flex flex-col justify-start items-center gap-[30px] md:gap-12 z-10">
                                <div className="w-full flex flex-col justify-start items-center gap-[20px] md:gap-6">
                                    <div className="w-full flex flex-col justify-start items-center gap-[20px] md:gap-10">
                                        <h2 className="text-center text-white text-[26px] md:text-5xl font-bold italic md:not-italic font-['Urbanist'] leading-[36px] md:leading-[68px]">
                                            The Best Companies Don&apos;t Have More People. They Have<br className="md:hidden" /> Better Coordination.
                                        </h2>
                                        <p className="text-center text-gray-500 text-[14px] md:text-xl font-normal font-['Urbanist'] leading-[22px] md:leading-9">
                                            While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
                                        </p>
                                    </div>

                                    {/* Feature Badges — desktop */}
                                    <div className="hidden md:flex flex-wrap justify-center items-center gap-6">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-5">
                                            <img src="images/figma/about-us/group.svg" alt="" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Build without hiring</span>
                                        </div>
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-5">
                                            <img src="images/figma/about-us/group.svg" alt="" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Scale without friction</span>
                                        </div>
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-3.5">
                                            <img src="images/figma/about-us/group.svg" alt="" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Grow with Chorus</span>
                                        </div>
                                    </div>

                                    {/* Feature Badges — mobile */}
                                    <div className="flex flex-col items-center gap-[8px] md:hidden">
                                        <div className="flex items-center gap-[8px]">
                                            {["Build without hiring", "Scale without friction"].map((text) => (
                                                <div key={text} className="h-[36px] px-[12px] rounded-full flex items-center gap-[8px] border border-white/30 backdrop-blur-[30px]">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src="images/figma/about-us/group.svg" alt="" className="w-[16px] h-[16px]" />
                                                    <span className="text-stone-300 text-[11px] font-medium font-['Urbanist'] whitespace-nowrap">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="h-[36px] px-[12px] rounded-full flex items-center gap-[8px] border border-white/30 backdrop-blur-[30px]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="images/figma/about-us/group.svg" alt="" className="w-[16px] h-[16px]" />
                                            <span className="text-stone-300 text-[11px] font-medium font-['Urbanist'] whitespace-nowrap">Grow with Chorus</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="h-[42px] md:h-12 px-[24px] md:px-8 py-[10px] md:py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-100 transition-colors">
                                    <span className="text-center text-black text-[13px] md:text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
