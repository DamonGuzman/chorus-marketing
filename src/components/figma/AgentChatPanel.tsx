'use client';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface AgentChatPanelProps {
  agentName: string;
  onClose?: () => void;
}

export function AgentChatPanel({ agentName, onClose }: AgentChatPanelProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <span className="text-white text-sm font-semibold font-[Urbanist,sans-serif]">
          Chat with {agentName}
        </span>
        <button
          onClick={onClose}
          className="text-white/40 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
          Chat panel — coming soon
        </p>
      </div>
    </div>
  );
}
