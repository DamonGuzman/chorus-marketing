'use client';

import { cn } from '@/lib/utils';

interface AgentKnowledgeBaseViewProps {
  className?: string;
}

export function AgentKnowledgeBaseView({ className }: AgentKnowledgeBaseViewProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Knowledge Base — coming soon
      </p>
    </div>
  );
}
