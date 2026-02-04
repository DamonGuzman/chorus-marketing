import { cn } from "@/lib/utils";

interface UserResearchIconProps {
  className?: string;
}

export function UserResearchIcon({ className }: UserResearchIconProps) {
  return (
    <svg
      className={cn("w-[93px] h-[80px]", className)}
      viewBox="0 0 93 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Magnifying glass */}
      <g opacity="0.7" fill="currentColor">
        <path d="M18.5 38.5c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16Zm0-6c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z" />
        <path d="M31.9 33.8a3 3 0 0 1 4.242 0l11.4 11.4a3 3 0 1 1-4.243 4.243l-11.4-11.4a3 3 0 0 1 0-4.243Z" />
      </g>

      {/* People silhouettes */}
      <g opacity="0.55" fill="currentColor">
        <path d="M54.5 36.5c5.247 0 9.5-4.253 9.5-9.5s-4.253-9.5-9.5-9.5S45 21.753 45 27s4.253 9.5 9.5 9.5Z" />
        <path d="M74.5 38.5c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8Z" />
        <path d="M39.5 64c0-9.113 7.387-16.5 16.5-16.5h2c9.113 0 16.5 7.387 16.5 16.5v6.5H39.5V64Z" />
        <path d="M66.5 50.8c2.305-1.38 5.03-2.3 8-2.3h1c8.008 0 14.5 6.492 14.5 14.5v7.5H77.5V63c0-4.78-1.605-9.185-4.31-12.2Z" />
      </g>

      {/* Small chat bubble */}
      <g opacity="0.5" fill="currentColor">
        <path d="M46 10.5c0-3.314 2.686-6 6-6h22c3.314 0 6 2.686 6 6v10c0 3.314-2.686 6-6 6H62.5l-6.65 4.55c-.93.637-2.19-.03-2.19-1.16V26.5H52c-3.314 0-6-2.686-6-6v-10Z" />
        <rect x="55" y="12" width="16" height="2.8" rx="1.4" />
        <rect x="55" y="17" width="12" height="2.8" rx="1.4" />
      </g>
    </svg>
  );
}

