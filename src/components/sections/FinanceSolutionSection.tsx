/* eslint-disable @next/next/no-img-element */

const features = [
  { title: "Spin up any role in 60 seconds", color: "bg-gradient-to-l from-red-400 to-pink-800" },
  { title: "Every role works in harmony", color: "bg-violet-700" },
  { title: "Full productivity from minute one", color: "bg-blue-700" },
  { title: "One direction cascades automatically", color: "bg-fuchsia-800" },
  { title: "Scale without adding coordination overhead", color: "bg-green-800" },
  { title: "$0.12/hour per AI agent", color: "bg-neutral-600" },
];

export function FinanceSolutionSection() {
  return (
    <section className="w-full px-6 md:px-24 py-12 md:py-20 bg-black overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-11 max-w-[500px]">
          <div className="w-36 h-9 px-3 py-1 bg-white/5 rounded-full flex justify-center items-center">
            <span className="text-white text-base font-semibold font-['Urbanist']">The Solution</span>
          </div>
          <h2 className="text-white text-3xl md:text-5xl font-bold font-['Urbanist'] leading-tight md:leading-[64px]">
            The Chorus Way<br />Manifest Your Team Instantly
          </h2>
          <p className="text-[#7D7C83] text-lg font-medium font-['Urbanist'] leading-9">
            VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads, engage with customers, and grow their revenue.
          </p>
          <p className="text-[#7D7C83] text-lg font-medium font-['Urbanist'] leading-9">
            VocAI CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads,
          </p>
        </div>

        {/* Right: Orbital + feature pills */}
        <div className="flex-1 relative min-h-[500px] flex items-center justify-center">
          {/* Orbital circles */}
          <div className="absolute w-80 h-80 rounded-full bg-white/[0.04] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] border border-white/30" />
          <div className="absolute w-[506px] h-[506px] rounded-full shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] border border-white/10" />
          <div className="absolute w-96 h-96 rounded-full shadow-[0px_2px_2px_0px_rgba(0,0,0,0.25)] border border-white/20" />

          {/* Center icon */}
          <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-white/80 to-neutral-400/80 rounded-2xl" />

          {/* Feature pills positioned around */}
          <div className="absolute inset-0 flex flex-col items-end justify-center gap-4 pr-0 md:-right-20">
            {features.map((feature) => (
              <div key={feature.title} className="w-60 h-16 pl-2.5 py-1 bg-white/10 rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center gap-3.5">
                <div className={`w-11 h-11 ${feature.color} rounded-xl shrink-0`} />
                <span className="text-[#CBCACC] text-sm font-semibold font-['Urbanist'] leading-5">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
