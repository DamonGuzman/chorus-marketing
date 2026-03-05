'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';

export type AgentHierarchyTab = 'work' | 'apps' | 'knowledge' | 'integration' | 'dashboard';

interface AgentHierarchyHeaderProps {
  title: string;
  description?: string;
  activeTab: AgentHierarchyTab;
  onTabChange: (tab: AgentHierarchyTab) => void;
  onBuild?: () => void;
  onBack?: () => void;
}

const HIERARCHY_TABS: { id: AgentHierarchyTab; label: string }[] = [
  { id: 'work', label: 'Work' },
  { id: 'apps', label: 'Apps' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'integration', label: 'Integration' },
  { id: 'dashboard', label: 'Dashboard' },
];

export function AgentHierarchyHeader({
  title,
  description,
  activeTab,
  onTabChange,
  onBuild,
  onBack,
}: AgentHierarchyHeaderProps) {
  return (
    <div className="px-5 py-3">
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-8 h-8 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </button>
        <div>
          <p className="text-white text-sm font-bold font-[Urbanist,sans-serif]">{title}</p>
          {description && (
            <p className="text-white/40 text-xs font-medium font-[Urbanist,sans-serif]">
              {description}
            </p>
          )}
        </div>
        {onBuild && (
          <button
            onClick={onBuild}
            className="ml-auto px-4 py-1.5 rounded-full bg-[#8b5cf6] text-white text-xs font-semibold font-[Urbanist,sans-serif] hover:bg-[#7c4fe0] transition-colors"
          >
            Build
          </button>
        )}
      </div>

      <div className="flex items-center gap-1">
        {HIERARCHY_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-semibold font-[Urbanist,sans-serif] transition-colors',
              activeTab === tab.id
                ? 'bg-white/10 text-white'
                : 'text-white/40 hover:text-white/70',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
