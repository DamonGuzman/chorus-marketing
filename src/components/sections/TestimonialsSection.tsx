import { Section, SectionHeader, Button } from "@/components/ui";

const testimonials = [
  {
    quote:
      "Chorus didn't just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That's not a demo. That's a debut.",
    publication: "TechCrunch",
    image: "/testimonials/techcrunch.jpg",
  },
  {
    quote: "The most coordinated AI launch we've seen.",
    publication: "The Information",
    image: "/testimonials/information.jpg",
  },
  {
    quote:
      "If this is what agentic AI actually looks like when it works in harmony, every startup's playbook just got rewritten.",
    publication: "VentureBeat",
    image: "/testimonials/venturebeat.jpg",
  },
  {
    quote:
      "Chorus didn't just launch a product—they performed it live. 15,000 people directing, AI executing, $25K in 30 days. That's not a demo. That's a debut.",
    publication: "TechCrunch",
    image: "/testimonials/techcrunch2.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <>
      {/* Header Section */}
      <Section className="py-[75px] h-[278px] flex items-center justify-center">
        <SectionHeader
          badge="Control"
          title="What The Audience Is Saying"
          subtitle="The Difference That Changes Everything"
        />
      </Section>

      {/* Testimonials Grid */}
      <Section className="py-[75px] overflow-hidden">
        <div className="flex flex-col gap-[82px] max-w-[1328px] mx-auto">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-[58px]">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-[82px] lg:pl-[264px]">
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

function TestimonialCard({ quote, publication }: TestimonialCardProps) {
  return (
    <div className="flex gap-[38px] items-end">
      {/* Image Placeholder */}
      <div className="w-[249px] h-[225px] rounded-card border border-white/36 bg-gray-800 shrink-0" />

      {/* Content */}
      <div className="flex flex-col gap-[21px] max-w-[302px]">
        <p className="text-lg leading-[32px] font-bold italic text-gray-300">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="text-lg leading-[32px] font-semibold text-white">
          — {publication}
        </p>
      </div>
    </div>
  );
}
