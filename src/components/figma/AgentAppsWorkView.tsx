'use client';

import { cn } from '@/lib/utils';

interface AgentAppsWorkViewProps {
  className?: string;
}

export function AgentAppsWorkView({ className }: AgentAppsWorkViewProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Apps & Work — coming soon
      </p>
    </div>
  );
}
