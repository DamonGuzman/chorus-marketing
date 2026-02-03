import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        // Gap between elements: 32px
        "flex flex-col gap-[32px]",
        alignment === "center" && "items-center text-center",
        alignment === "left" && "items-start text-left",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      {/* Section Title: 50px, bold, 78px line-height, -0.5px letter-spacing */}
      <h2 className="text-[50px] leading-[78px] font-bold text-white tracking-[-0.5px]">
        {title}
      </h2>
      {subtitle && (
        /* Body Large: 28px, medium, 36px line-height */
        <p className="text-[28px] leading-[36px] font-medium text-gray-300 max-w-[800px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
