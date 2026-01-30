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
        "flex flex-col gap-6",
        alignment === "center" && "items-center text-center",
        alignment === "left" && "items-start text-left",
        className
      )}
    >
      {badge && <Badge>{badge}</Badge>}
      <h2 className="text-[50px] leading-[78px] font-bold text-white tracking-[-0.5px]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[26px] leading-[36px] font-medium text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
