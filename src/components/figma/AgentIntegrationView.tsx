'use client';

import { cn } from '@/lib/utils';

interface AgentIntegrationViewProps {
  className?: string;
}

export function AgentIntegrationView({ className }: AgentIntegrationViewProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Integration — coming soon
      </p>
    </div>
  );
}
