import { cn } from "@/lib/utils";

interface BlendIconProps {
  className?: string;
}

export function BlendIcon({ className }: BlendIconProps) {
  return (
    <svg
      className={cn("w-[50px] h-[50px]", className)}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="20" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="25" cy="30" r="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
