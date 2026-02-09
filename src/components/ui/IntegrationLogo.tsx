import { cn } from "@/lib/utils";

const brandStyles: Record<
  string,
  { bgClass: string; textClass: string; label: string }
> = {
  Slack: { bgClass: "bg-[#4A154B]/25", textClass: "text-[#E01E5A]", label: "S" },
  Stripe: { bgClass: "bg-[#635BFF]/20", textClass: "text-[#A5A0FF]", label: "S" },
  HubSpot: { bgClass: "bg-[#FF7A59]/20", textClass: "text-[#FF7A59]", label: "H" },
  Gmail: { bgClass: "bg-[#EA4335]/15", textClass: "text-[#EA4335]", label: "M" },
  Notion: { bgClass: "bg-white/10", textClass: "text-white", label: "N" },
  Salesforce: { bgClass: "bg-[#00A1E0]/15", textClass: "text-[#00A1E0]", label: "S" },
  Zapier: { bgClass: "bg-[#FF4A00]/15", textClass: "text-[#FF4A00]", label: "Z" },
  Airtable: { bgClass: "bg-[#FDB400]/15", textClass: "text-[#FDB400]", label: "A" },
  Figma: { bgClass: "bg-[#A259FF]/15", textClass: "text-[#A259FF]", label: "F" },
  GitHub: { bgClass: "bg-white/10", textClass: "text-white", label: "G" },
  Jira: { bgClass: "bg-[#2684FF]/15", textClass: "text-[#2684FF]", label: "J" },
  Zoom: { bgClass: "bg-[#2D8CFF]/15", textClass: "text-[#2D8CFF]", label: "Z" },
  Calendly: { bgClass: "bg-[#006BFF]/15", textClass: "text-[#006BFF]", label: "C" },
  Intercom: { bgClass: "bg-[#1F8DED]/15", textClass: "text-[#1F8DED]", label: "I" },
  Mailchimp: { bgClass: "bg-[#FFE01B]/15", textClass: "text-[#FFE01B]", label: "M" },
  Shopify: { bgClass: "bg-[#95BF47]/15", textClass: "text-[#95BF47]", label: "S" },
};

export function IntegrationLogo({
  name,
  className,
  size = "md",
  shape = "square",
}: {
  name: string;
  className?: string;
  size?: "sm" | "md";
  shape?: "square" | "circle";
}) {
  const brand = brandStyles[name] ?? {
    bgClass: "bg-white/5",
    textClass: "text-white/70",
    label: name.slice(0, 1).toUpperCase(),
  };

  const renderMark = () => {
    if (name === "Slack") {
      return (
        <svg viewBox="0 0 24 24" className={cn("size-full", shape === "circle" ? "p-[5px]" : "p-[4px]")}>
          <circle cx="8" cy="8" r="2.2" fill="#36C5F0" />
          <circle cx="16" cy="8" r="2.2" fill="#2EB67D" />
          <circle cx="8" cy="16" r="2.2" fill="#E01E5A" />
          <circle cx="16" cy="16" r="2.2" fill="#ECB22E" />
        </svg>
      );
    }

    if (name === "Stripe") {
      return (
        <span className={cn("font-extrabold", brand.textClass, size === "sm" ? "text-[9px] leading-[16px]" : "text-[11px] leading-[24px]")}>
          S
        </span>
      );
    }

    if (name === "HubSpot") {
      return (
        <span className={cn("font-extrabold", brand.textClass, size === "sm" ? "text-[9px] leading-[16px]" : "text-[11px] leading-[24px]")}>
          H
        </span>
      );
    }

    return (
      <span className={cn("font-bold leading-none", brand.textClass, size === "sm" ? "text-[9px]" : "text-[11px]")}>
        {brand.label}
      </span>
    );
  };

  return (
    <span
      aria-label={name}
      title={name}
      className={cn(
        "inline-grid place-items-center border border-white/10",
        "shadow-[0px_0px_16px_0px_rgba(175,130,249,0.06)]",
        brand.bgClass,
        shape === "circle" ? "rounded-full" : "rounded-[10px]",
        size === "sm" && (shape === "circle" ? "w-[16px] h-[16px]" : "w-[16px] h-[16px] rounded-[6px]"),
        size === "md" && (shape === "circle" ? "w-[24px] h-[24px]" : "w-[24px] h-[24px] rounded-[8px]"),
        className
      )}
    >
      {renderMark()}
    </span>
  );
}
