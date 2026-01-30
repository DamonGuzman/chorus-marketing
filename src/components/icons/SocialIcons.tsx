import { cn } from "@/lib/utils";

interface SocialIconProps {
  className?: string;
}

export function TwitterIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={cn("w-[18px] h-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.5H16L10.5 7.75L17 16.5H12L8 11.25L3.5 16.5H1L6.75 9.75L0.5 1.5H5.5L9.25 6.25L13.5 1.5ZM12.5 15H14L5 3H3L12.5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={cn("w-[18px] h-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 2.5C4 3.33 3.33 4 2.5 4C1.67 4 1 3.33 1 2.5C1 1.67 1.67 1 2.5 1C3.33 1 4 1.67 4 2.5ZM4 5.5H1V17H4V5.5ZM9.5 5.5H6.5V17H9.5V11C9.5 7.75 13.75 7.5 13.75 11V17H16.75V10C16.75 4.75 11 5 9.5 7.5V5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: SocialIconProps) {
  return (
    <svg
      className={cn("w-[18px] h-[18px]", className)}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14" cy="4" r="1" fill="currentColor" />
    </svg>
  );
}
