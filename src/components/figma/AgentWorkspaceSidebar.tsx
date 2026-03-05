'use client';

import { cn } from '@/lib/utils';
import { ChevronRight, MessageSquare, MoreVertical } from 'lucide-react';

export interface ManagerAgentData {
  name: string;
  tasksCount: number;
  avatar?: string;
}

export interface SubAgentData {
  id: string;
  name: string;
  tasksCount: number;
  currentTask?: string;
  status: 'active' | 'pending' | 'idle';
  avatar?: string;
}

interface AgentWorkspaceSidebarProps {
  manager: ManagerAgentData;
  subAgents: SubAgentData[];
  selectedAgentId?: string;
  onSelectAgent?: (id: string) => void;
  onChatAgent?: (id: string) => void;
  onHierarchyToggle?: () => void;
  isHierarchyActive?: boolean;
  className?: string;
}

export function AgentWorkspaceSidebar({
  manager,
  subAgents,
  selectedAgentId,
  onSelectAgent,
  onChatAgent,
  onHierarchyToggle,
  isHierarchyActive,
  className,
}: AgentWorkspaceSidebarProps) {
  return (
    <div
      className={cn(
        'w-[320px] min-w-[280px] flex flex-col bg-[#0c0c10] overflow-y-auto shrink-0',
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 pt-4 pb-3">
        <span className="text-white text-sm font-bold font-[Urbanist,sans-serif]">
          Agent Workspace
        </span>
        <button
          onClick={onHierarchyToggle}
          className="text-white/40 hover:text-white transition-colors"
          aria-label="Toggle hierarchy"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Manager agent */}
      <div className="px-3 mb-2">
        <button
          onClick={() => onSelectAgent?.('manager')}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-3 rounded-xl',
            'border transition-colors',
            selectedAgentId === 'manager'
              ? 'border-[#f59e0b]/40 bg-[#f59e0b]/5'
              : 'border-[#f59e0b]/30 bg-transparent hover:bg-white/5',
          )}
        >
          <div className="w-9 h-9 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
            {manager.avatar ? (
              <img src={manager.avatar} alt="" className="w-full h-full object-cover" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="3" width="10" height="10" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
              </svg>
            )}
          </div>
          <div className="min-w-0 text-left">
            <p className="text-white text-xs font-bold font-[Urbanist,sans-serif] truncate">
              {manager.name}
            </p>
            <p className="text-white/40 text-[10px] font-medium font-[Urbanist,sans-serif]">
              {manager.tasksCount} tasks managing in parallel
            </p>
          </div>
          <MoreVertical size={14} className="text-white/30 ml-auto flex-shrink-0" />
        </button>
      </div>

      {/* Sub agents */}
      <div className="flex flex-col gap-1.5 px-3 pb-4">
        {subAgents.map((agent) => {
          const isSelected = selectedAgentId === agent.id;
          return (
            <button
              key={agent.id}
              onClick={() => onSelectAgent?.(agent.id)}
              className={cn(
                'w-full flex flex-col gap-2 px-3 py-3 rounded-xl border transition-colors text-left',
                isSelected
                  ? 'border-white/15 bg-white/5'
                  : 'border-transparent hover:bg-white/5',
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1c1c24] border border-white/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {agent.avatar ? (
                    <img src={agent.avatar} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="3" y="3" width="10" height="10" rx="2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-xs font-bold font-[Urbanist,sans-serif] truncate">
                    {agent.name}
                  </p>
                  <p className="text-white/40 text-[10px] font-medium font-[Urbanist,sans-serif]">
                    {agent.tasksCount} tasks working in parallel
                  </p>
                </div>
                <MoreVertical size={14} className="text-white/30 ml-auto flex-shrink-0" />
              </div>

              {agent.currentTask && (
                <div className="flex items-center gap-2 pl-12">
                  <span className="text-white/40 text-[10px] font-medium font-[Urbanist,sans-serif]">
                    Currently working on
                  </span>
                </div>
              )}

              {agent.currentTask && (
                <div className="flex items-center gap-2 ml-12 px-2 py-1 rounded-md bg-white/5">
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full flex-shrink-0',
                      agent.status === 'active' ? 'bg-emerald-400' : 'bg-[#f59e0b]',
                    )}
                  />
                  <span className="text-white text-[10px] font-semibold font-[Urbanist,sans-serif] truncate">
                    {agent.currentTask}
                  </span>
                  <ChevronRight size={10} className="text-white/30 ml-auto flex-shrink-0" />
                </div>
              )}

              {agent.status === 'pending' && (
                <div className="ml-12">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 text-[#f59e0b] text-[10px] font-semibold font-[Urbanist,sans-serif]">
                    ● Pending
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
