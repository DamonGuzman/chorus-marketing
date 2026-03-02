"use client";

import Image from "next/image";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui";

const teamMembers = [
  { name: "David Henricks", title: "Founder & CEO", image: "/images/team/member-1.png" },
  { name: "Sarah Chen", title: "CTO", image: "/images/team/member-2.png" },
  { name: "Michael Torres", title: "Head of Product", image: "/images/team/member-3.png" },
  { name: "Emily Watson", title: "Head of Design", image: "/images/team/member-4.png" },
  { name: "James Miller", title: "Head of Engineering", image: "/images/team/member-5.png" },
  { name: "Lisa Park", title: "Head of Marketing", image: "/images/team/member-6.png" },
];

export function TeamSection() {
  return (
    <Section className="py-[75px] px-8">
      <div className="flex flex-col gap-[75px] items-center max-w-[1240px] mx-auto">
        <SectionHeader
          badge="Control"
          title="Our Team"
          subtitle="We’re building the coordination layer for autonomous work."
        />

        {/* Team Grid - 3 columns with specific gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[127px] gap-y-[75px]">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
}

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
}

function TeamMemberCard({ name, title, image }: TeamMemberCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-[26px] items-center">
      <div
        className="w-[270px] h-[270px] relative cursor-pointer"
        style={{ perspective: "800px" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-full bg-gray-600 overflow-hidden transition-all duration-700"
          style={{
            backfaceVisibility: "hidden",
            transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <Image src={image} alt={name} fill className="object-cover" />
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 rounded-full bg-gray-800 overflow-hidden transition-all duration-700 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: hovered ? "rotateY(0deg)" : "rotateY(-180deg)",
          }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover scale-110 blur-sm brightness-[0.3]"
          />
          <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
            <span className="text-white text-xl font-bold font-['Urbanist']">{name}</span>
            <span className="text-gray-300 text-sm font-semibold uppercase tracking-wide">{title}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[11px] items-center text-center">
        <h3 className="text-[34px] leading-[48px] font-bold text-white">
          {name}
        </h3>
        <p className="text-[16px] leading-[24px] font-semibold text-gray-100 uppercase font-feature-stylistic">
          {title}
        </p>
      </div>
    </div>
  );
}
