'use client';

import { cn } from '@/lib/utils';

interface AgentDashboardViewProps {
  workspaceName?: string;
  className?: string;
}

export function AgentDashboardView({ workspaceName, className }: AgentDashboardViewProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        {workspaceName ? `${workspaceName} — ` : ''}Dashboard — coming soon
      </p>
    </div>
  );
}
