import { cn } from "@/lib/utils";

interface ChevronIconProps {
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ChevronIcon({ className, direction = "down" }: ChevronIconProps) {
  const rotation = {
    up: "rotate-180",
    down: "rotate-0",
    left: "rotate-90",
    right: "-rotate-90",
  };

  return (
    <svg
      className={cn("w-[6px] h-[3px]", rotation[direction], className)}
      viewBox="0 0 6 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L3 3L6 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
