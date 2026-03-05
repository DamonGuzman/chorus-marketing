'use client';

import { cn } from '@/lib/utils';

interface AgentHierarchyViewProps {
  className?: string;
}

export function AgentHierarchyView({ className }: AgentHierarchyViewProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Agent Hierarchy — coming soon
      </p>
    </div>
  );
}
