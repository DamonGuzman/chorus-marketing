'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, MoreHorizontal } from 'lucide-react';

interface AgentWorkspaceHeaderProps {
  title: string;
  actionsRequired?: number;
  onBack?: () => void;
  onActionClick?: () => void;
}

export function AgentWorkspaceHeader({
  title,
  actionsRequired = 0,
  onBack,
  onActionClick,
}: AgentWorkspaceHeaderProps) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 shrink-0 bg-[#0c0c10]">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <span className="text-white text-sm font-semibold font-[Urbanist,sans-serif]">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {actionsRequired > 0 && (
          <button
            onClick={onActionClick}
            className={cn(
              'inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full',
              'bg-red-500/20 border border-red-500/40',
              'text-red-400 text-xs font-semibold font-[Urbanist,sans-serif]',
              'hover:bg-red-500/30 transition-colors',
            )}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 4v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="7" cy="9.5" r="0.75" fill="currentColor" />
            </svg>
            {actionsRequired} Actions Required
            <span className="text-red-400/80 ml-0.5">›</span>
          </button>
        )}

        <button className="flex items-center justify-center w-8 h-8 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-colors">
          <MoreHorizontal size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
