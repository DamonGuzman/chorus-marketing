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
        "flex flex-col justify-start gap-4 md:gap-6",
        alignment === "center" && "items-center text-center",
        alignment === "left" && "items-start text-left",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      {/* Section Title */}
      <h2 className="text-[28px] leading-[36px] md:text-5xl md:leading-[78px] font-bold font-['Urbanist'] text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[16px] leading-[26px] md:text-xl md:leading-9 font-normal font-['Urbanist'] text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
