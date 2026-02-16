import Image from "next/image";
import { Section, SectionHeader, Button } from "@/components/ui";

const testimonials = [
  {
    quote:
      "Chorus didn't just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That's not a demo. That's a debut.",
    publication: "TechCrunch",
    image: "/images/testimonials/pub-1.png",
  },
  {
    quote: "The most coordinated AI launch we've seen.",
    publication: "The Information",
    image: "/images/testimonials/pub-2.png",
  },
  {
    quote:
      "If this is what agentic AI actually looks like when it works in harmony, every startup's playbook just got rewritten.",
    publication: "VentureBeat",
    image: "/images/testimonials/pub-3.png",
  },
  {
    quote:
      "Chorus didn't just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That's not a demo. That's a debut.",
    publication: "TechCrunch",
    image: "/images/testimonials/pub-4.png",
  },
];

export function TestimonialsSection() {
  return (
    <>
      {/* Header Section */}
      <Section className="py-[75px] px-8">
        <SectionHeader
          badge="Control"
          title="What The Audience Is Saying"
          subtitle="The Difference That Changes Everything"
        />
      </Section>

      {/* Testimonials Grid */}
      <Section className="py-[75px] px-8 overflow-hidden">
        <div className="flex flex-col gap-[82px] max-w-[1240px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-[58px]">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Row 2 - offset to the right */}
          <div className="flex flex-col lg:flex-row gap-[82px] lg:ml-[264px]">
            {testimonials.slice(2, 4).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-[60px]">
          <Button variant="primary">Add Review</Button>
        </div>
      </Section>
    </>
  );
}

interface TestimonialCardProps {
  quote: string;
  publication: string;
  image: string;
}

function TestimonialCard({ quote, publication, image }: TestimonialCardProps) {
  return (
    <div className="flex gap-[38px] items-end">
      {/* Publication Image */}
      <div className="w-[249px] h-[225px] rounded-[35px] border border-white/[0.36] overflow-hidden shrink-0 relative">
        <Image
          src={image}
          alt={publication}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[21px] max-w-[302px]">
        {/* Quote: 18px, bold italic, 32px line-height */}
        <p className="text-[18px] leading-[32px] font-bold italic text-gray-300">
          &ldquo;{quote}&rdquo;
        </p>
        {/* Attribution: 18px, semibold, 32px line-height */}
        <p className="text-[18px] leading-[32px] font-semibold text-white">
          — {publication}
        </p>
      </div>
    </div>
  );
}
