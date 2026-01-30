import { cn } from "@/lib/utils";

interface BotIconProps {
  className?: string;
}

export function BotIcon({ className }: BotIconProps) {
  return (
    <svg
      className={cn("w-[50px] h-[50px]", className)}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="12" width="34" height="26" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="24" r="3" fill="currentColor" />
      <circle cx="32" cy="24" r="3" fill="currentColor" />
      <path d="M18 32H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="4" r="2" fill="currentColor" />
      <path d="M4 20V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 20V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
