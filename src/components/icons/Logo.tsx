import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={cn("w-[30px] h-[29px]", className)}
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0L18.5 10.5L30 14.5L18.5 18.5L15 29L11.5 18.5L0 14.5L11.5 10.5L15 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
