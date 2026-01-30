import { cn } from "@/lib/utils";

interface AtomIconProps {
  className?: string;
}

export function AtomIcon({ className }: AtomIconProps) {
  return (
    <svg
      className={cn("w-[50px] h-[50px]", className)}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="25"
        cy="25"
        rx="20"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(0 25 25)"
      />
      <ellipse
        cx="25"
        cy="25"
        rx="20"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(60 25 25)"
      />
      <ellipse
        cx="25"
        cy="25"
        rx="20"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
        transform="rotate(120 25 25)"
      />
      <circle cx="25" cy="25" r="4" fill="currentColor" />
    </svg>
  );
}
