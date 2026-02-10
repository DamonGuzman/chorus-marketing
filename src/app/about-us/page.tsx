import { Header, Footer } from "@/components/layout";
import { Badge } from "@/components/ui";

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main>
                <section id="about-us" className="bg-black py-[75px] overflow-hidden">
                    {/* first parent section */}
                    <div className="relative w-full top-3 md:px-[30px] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col md:flex-row justify-center md:justify-start">
                        {/* Left Content - Constrained */}
                        <div className="relative w-full md:max-w-[62%] px-6 md:px-24 py-20 flex flex-col justify-center items-center md:items-start gap-8 z-10 pt-20">
                            <Badge className="px-3 py-1">
                                About us
                            </Badge>

                            <div className="self-stretch text-center md:text-left">
                                <h1 className="text-6xl font-bold font-['Urbanist'] leading-[74px]">
                                    <span className="text-white">Chorus is the </span>
                                    <span className="bg-gradient-to-r from-[#CACACC] to-[#7C7B82] bg-clip-text text-transparent">
                                        agentic AI platform
                                    </span>
                                    <span className="bg-gradient-to-r from-[#7C7B82] via-[#7C7B82] to-[#7C7B82] bg-clip-text text-transparent">
                                        {' '}that proves real magic exists
                                    </span>
                                </h1>
                            </div>

                            <div className="self-stretch text-[#CACACC] text-3xl font-medium font-['Urbanist'] leading-9 text-center md:text-left">
                                We don&apos;t promise the impossible. We deliver it.
                            </div>
                        </div>

                        {/* Right Image - Extends to edge */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 block z-0 opacity-80 md:opacity-100">
                            <img
                                className="w-full h-auto object-contain"
                                src="/images/figma/about-us/torch.svg"
                                alt="Torch illustration"
                            />
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
                    <div className="self-stretch px-6 md:px-24 py-20 bg-black flex flex-col justify-start items-start">
                        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-4">
                            {/* Left Content */}
                            <div className="flex flex-col justify-start items-start gap-12 flex-1">
                                <Badge className="px-3 py-1">
                                    Origin Story
                                </Badge>

                                <h2 className="text-4xl md:text-5xl font-bold font-['Urbanist'] leading-tight text-white max-w-[583px]">
                                    Built By People Who Understand Both Vision And Execution
                                </h2>

                                <div className="w-24 h-24 bg-zinc-300" />

                                <div className="max-w-[529px]">
                                    <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-9">
                                        We&apos;ve been on both sides: building with limited resources and watching others scale impossibly fast. We built Chorus because we were tired of AI companies overpromising and underdelivering. We wanted real magic.
                                    </p>
                                    <br />
                                    <p className="text-white text-xl font-semibold font-['Urbanist'] leading-9">
                                        Not smoke and mirrors. So we built it.
                                    </p>
                                    <br />
                                    <p className="text-gray-400 text-lg font-medium font-['Urbanist'] leading-9">
                                        Tested it internally. And now we&apos;re sharing it with founders who are ready to build without limits.
                                    </p>
                                </div>
                            </div>

                            {/* Right Images */}
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
                    <div className="self-stretch px-6 md:px-24 py-20 bg-black flex flex-col justify-start items-center">
                        <div className="w-full flex flex-col justify-start items-center gap-6">
                            <Badge className="px-3 py-1">
                                Press
                            </Badge>
                            <div className="flex flex-col justify-start items-center gap-8">
                                <h2 className="text-center text-white text-4xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
                                    What The Audience Is Saying
                                </h2>
                                <p className="text-center text-gray-400 text-xl md:text-2xl font-medium font-['Urbanist'] leading-9">
                                    The Difference That Changes Everything
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Press Testimonials */}
                    <div className="self-stretch px-6 md:pl-52 md:pr-24 py-20 bg-black flex flex-col justify-start items-center gap-14 overflow-hidden">
                        <div className="w-full max-w-[1328px] flex flex-col justify-start items-center gap-20">
                            {/* First Row */}
                            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14">
                                <div className="flex flex-col md:flex-row justify-start items-end gap-9">
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-[inherit]" src="images/figma/about-us/person-1.jpg" alt="TechCrunch" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            Chorus didn&apos;t just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That&apos;s not a demo. That&apos;s a debut.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— TechCrunch</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start items-end gap-9">
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-[inherit]" src="images/figma/about-us/person-2.jpg" alt="The Information" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            The most coordinated AI launch we&apos;ve seen.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— The Information</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:pl-64">
                                <div className="flex flex-col md:flex-row justify-start items-end gap-9">
                                    <img className="w-64 h-56 rounded-[35px] border border-white/40 object-cover" src="images/figma/about-us/person-3.jpg" alt="VentureBeat" />
                                    <div className="flex flex-col justify-start items-start gap-5">
                                        <p className="text-gray-400 text-lg font-bold font-['Urbanist'] leading-8 max-w-[288px]">
                                            If this is what agentic AI actually looks like when it works in harmony, every startup&apos;s playbook just got rewritten.
                                        </p>
                                        <p className="text-white text-lg font-semibold font-['Urbanist'] leading-8">— VentureBeat</p>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row justify-start items-end gap-9">
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
                    <div className="self-stretch px-6 md:px-24 pt-20 pb-24 bg-black flex flex-col justify-start items-center">
                        <div className="flex flex-col justify-start items-center gap-20">
                            {/* Header */}
                            <div className="flex flex-col justify-start items-center gap-6">
                                <Badge className="px-3 py-1">
                                    Our team members
                                </Badge>
                                <div className="flex flex-col justify-start items-center gap-4">
                                    <h2 className="text-white text-4xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[78px]">
                                        Our Team
                                    </h2>
                                    <p className="text-center text-gray-400 text-lg md:text-xl font-normal font-['Urbanist'] leading-9 max-w-3xl">
                                        The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.
                                    </p>
                                </div>
                            </div>

                            {/* Team Grid */}
                            <div className="w-full max-w-[1064px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-20 lg:gap-32">
                                {/* Team Member 1 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-1.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Team Member 2 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-2.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Team Member 3 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-3.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Team Member 4 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-4.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Team Member 5 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-5.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>

                                {/* Team Member 6 */}
                                <div className="flex flex-col justify-start items-center gap-6">
                                    <img className="w-72 h-72 object-cover rounded-full bg-[#ADADAD]" src="images/figma/about-us/team-person-6.png" alt="Team member" />
                                    <div className="flex flex-col justify-start items-center gap-2.5">
                                        <h3 className="text-center text-white text-3xl md:text-4xl font-bold font-['Urbanist'] leading-tight">
                                            David Henricks
                                        </h3>
                                        <p className="text-center text-gray-500 text-base font-medium font-['Urbanist'] uppercase leading-6">
                                            Founder &amp; CEO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA Section */}
                    <div>
                        <div className="w-full h-1 bg-gradient-to-r from-white/0 via-neutral-400 to-white/0 rounded-full" />
                        <div className="relative w-full h-[632px] px-6 md:px-24 py-20 bg-gradient-to-b from-white/20 via-white/0 to-black/0 flex flex-col justify-center items-center overflow-hidden">
                            {/* Background Image - on top of gradient */}
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
                            <div className="w-full max-w-[1039px] flex flex-col justify-start items-center gap-12 z-10">
                                <div className="w-full flex flex-col justify-start items-center gap-6">
                                    <div className="w-full flex flex-col justify-start items-center gap-10">
                                        <h2 className="text-center text-white text-4xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[68px]">
                                            The Best Companies Don&apos;t Have More People. They Have Better Coordination.
                                        </h2>
                                        <p className="text-center text-gray-500 text-lg md:text-xl font-normal font-['Urbanist'] leading-9">
                                            While competitors spend months hiring and aligning teams, you could have a complete, synchronized workforce executing tomorrow.
                                        </p>
                                    </div>

                                    {/* Feature Badges */}
                                    <div className="flex flex-wrap justify-center items-center gap-6">
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-5">
                                            <img src="images/figma/about-us/group.svg" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Build without hiring</span>
                                        </div>
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-5">
                                            <img src="images/figma/about-us/group.svg" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Scale without friction</span>
                                        </div>
                                        <div className="h-12 px-9 py-3 bg-white/0 rounded-[50px] border border-white/30 backdrop-blur-[30px] flex items-center gap-3.5">
                                            <img src="images/figma/about-us/group.svg" />
                                            <span className="text-stone-300 text-base font-medium font-['Urbanist']">Grow with Chorus</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="h-12 px-8 py-3 bg-white rounded-[50px] shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)] flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-100 transition-colors">
                                    <span className="text-center text-black text-sm font-bold font-['Urbanist'] leading-6">Build Your Team Now</span>
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
