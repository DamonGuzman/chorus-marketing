'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  X,
  FileText,
  ChevronRight,
  Clock,
  AlertCircle,
  CheckCircle2,
  MoreHorizontal,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Workspace header tab definitions
// ---------------------------------------------------------------------------

type WorkspaceTab = 'work' | 'works' | 'knowledge' | 'integration' | 'dashboard';

const WORKSPACE_TABS: { id: WorkspaceTab; label: string; icon: React.ReactNode }[] = [
  {
    id: 'work',
    label: 'Work In progress',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M4 7h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'works',
    label: 'Works',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="8" y="1" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="8" y="8" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: 'knowledge',
    label: 'Knowledge Base',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 3a1 1 0 011-1h3l1 1h4a1 1 0 011 1v7a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    id: 'integration',
    label: 'Integration',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7 6.5V10M4.5 12L7 10l2.5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="1" width="5" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="8" y="1" width="5" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="1" y="9" width="5" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="8" y="6" width="5" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type AgentStatus = 'active' | 'pending' | 'completed';

interface Agent {
  id: string;
  name: string;
  integrations: string[];
  timeElapsed: string;
  currentTask: string;
  status: AgentStatus;
}

interface Phase {
  id: string;
  name: string;
  agents?: Agent[];
  previewImages?: string[];
}

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const MOCK_PHASES: Phase[] = [
  {
    id: 'phase-1',
    name: 'Phase 1: Pre-Launch Strategy',
    previewImages: ['/images/figma/milestone1.svg', '/images/figma/milestone2.svg', '/images/figma/milestone3.svg', '/images/figma/milestone4.svg'],
    agents: [
      { id: 'a1', name: 'Social Media Agent', integrations: ['launch1', 'launch2', 'launch3'], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'completed' },
      { id: 'a2', name: 'Research Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'completed' },
      { id: 'a3', name: 'Planning Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'completed' },
    ],
  },
  {
    id: 'phase-2',
    name: 'Phase 2: Content & Marketing',
    previewImages: ['/images/figma/milestone5.svg'],
    agents: [
      { id: 'a4', name: 'Content Agent', integrations: ['launch1', 'launch2', 'launch3'], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
      { id: 'a5', name: 'SEO Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
      { id: 'a6', name: 'Email Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
      { id: 'a7', name: 'Ads Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
    ],
  },
  {
    id: 'phase-3',
    name: 'Phase 3: Launch Execution',
    previewImages: ['/images/figma/milestone6.svg'],
    agents: [
      { id: 'a8', name: 'Launch Agent', integrations: ['launch1', 'launch2', 'launch3'], timeElapsed: '1 hr 30 mins', currentTask: 'Review LinkedIn post schedule', status: 'active' },
      { id: 'a9', name: 'Growth Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Review LinkedIn post schedule', status: 'pending' },
      { id: 'a10', name: 'DevOps Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Review LinkedIn post schedule', status: 'pending' },
      { id: 'a11', name: 'Metrics Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Review LinkedIn post schedule', status: 'pending' },
    ],
  },
  {
    id: 'phase-4',
    name: 'Phase 4: Content & Marketing',
    previewImages: ['/images/figma/milestone5.svg'],
    agents: [
      { id: 'a12', name: 'Analytics Agent', integrations: ['launch1', 'launch2', 'launch3'], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
      { id: 'a13', name: 'Reporting Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Building Linear Clone', status: 'active' },
    ],
  },
  {
    id: 'phase-5',
    name: 'Phase 5: Launch Execution',
    agents: [
      { id: 'a14', name: 'Social Media Agent', integrations: ['launch1', 'launch2', 'launch3'], timeElapsed: '1 hr 30 mins', currentTask: 'Awaiting phase 4', status: 'pending' },
      { id: 'a15', name: 'Finalize Agent', integrations: [], timeElapsed: '1 hr 30 mins', currentTask: 'Awaiting phase 4', status: 'pending' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const INTEGRATION_COLORS: Record<string, { bg: string; letter: string }> = {
  slack:    { bg: '#e01e5a', letter: 'S' },
  youtube:  { bg: '#ff0000', letter: 'Y' },
  figma:    { bg: '#a259ff', letter: 'F' },
  notion:   { bg: '#ffffff', letter: 'N' },
  twitter:  { bg: '#1da1f2', letter: 'T' },
  stripe:   { bg: '#635bff', letter: 'S' },
  google:   { bg: '#4285f4', letter: 'G' },
  github:   { bg: '#333333', letter: 'G' },
  linear:   { bg: '#5e6ad2', letter: 'L' },
  discord:  { bg: '#5865f2', letter: 'D' },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function resolvePhaseStatus(phase: Phase): {
  label: string;
  type: 'completed' | 'in_progress' | 'in_queue';
  progress?: number;
} {
  if (!phase.agents || phase.agents.length === 0) {
    return { label: 'In Queue', type: 'in_queue' };
  }
  const completed = phase.agents.filter((a) => a.status === 'completed').length;
  const pending = phase.agents.filter((a) => a.status === 'pending').length;
  const total = phase.agents.length;
  if (completed === total) {
    return { label: 'Completed', type: 'completed' };
  }
  if (pending === total) {
    return { label: 'In Queue', type: 'in_queue' };
  }
  const pct = Math.round((completed / total) * 100);
  return { label: 'In Progress', type: 'in_progress', progress: pct || 70 };
}

function collectIntegrations(phase: Phase): string[] {
  if (!phase.agents) return [];
  const set = new Set<string>();
  phase.agents.forEach((a) => a.integrations.forEach((i) => set.add(i)));
  return Array.from(set).slice(0, 6);
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const StatusBadge: React.FC<{ status: ReturnType<typeof resolvePhaseStatus> }> = ({ status }) => {
  if (status.type === 'completed') {
    return (
      <div className="flex items-center gap-2">
        <img src="/images/figma/Icon.svg" alt="" className="w-4 h-4" />
        <span className="text-white text-xs font-bold font-[Urbanist,sans-serif]">Completed</span>
      </div>
    );
  }
  if (status.type === 'in_progress') {
    return (
      <div className="flex items-center gap-1">
        <img src="/images/figma/inprogress.svg" alt="" className="w-4 h-4" />
        <span className="text-white text-xs font-semibold font-[Urbanist,sans-serif]">{status.label}</span>
        <span className="text-[#7d7c83] text-xs font-semibold font-[Urbanist,sans-serif]">({status.progress}%)</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1">
      <span className="text-white text-xs font-semibold font-[Urbanist,sans-serif]">In Queue</span>
    </div>
  );
};

const INTEGRATION_IMAGES: Record<string, string> = {
  launch1: '/images/figma/launch1.svg',
  launch2: '/images/figma/launch2.svg',
  launch3: '/images/figma/launch3.svg',
};

const IntegrationDot: React.FC<{ name: string }> = ({ name }) => {
  const imageSrc = INTEGRATION_IMAGES[name];
  if (imageSrc) {
    return (
      <div className="w-6 h-6 rounded-full overflow-hidden border border-[#2a2930] -ml-1 first:ml-0 flex-shrink-0">
        <img src={imageSrc} alt="" className="w-full h-full object-cover" />
      </div>
    );
  }
  const config = INTEGRATION_COLORS[name] || { bg: '#555', letter: name[0]?.toUpperCase() || '?' };
  return (
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white border border-[#2a2930] -ml-1 first:ml-0"
      style={{ backgroundColor: config.bg }}
    >
      {config.letter}
    </div>
  );
};

// ---------------------------------------------------------------------------
// Preview variants
// ---------------------------------------------------------------------------

const CompletedPreview: React.FC<{ images: string[] }> = ({ images }) => {
  if (images.length === 1) {
    return (
      <div className="flex items-center justify-center flex-shrink-0 w-[110px] min-w-[80px]">
        <div className="w-full aspect-square rounded-xl border border-[rgba(255,255,255,0.1)] overflow-hidden bg-[#1a1a1e]">
          {images[0] ? (
            <img src={images[0]} alt="" className="w-full h-full object-cover object-center" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/10 text-[8px] font-[Urbanist,sans-serif]">Placeholder</div>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-start flex-shrink-0 w-[110px] min-w-[80px]">
      <div className="grid grid-cols-2 gap-1">
        {images.slice(0, 4).map((src, index) => (
          <div
            key={`preview-${index}`}
            className="w-[52px] h-[52px] rounded-lg border border-[rgba(255,255,255,0.1)] overflow-hidden relative bg-[#1a1a1e]"
          >
            {src ? (
              <img src={src} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/10 text-[6px] font-[Urbanist,sans-serif]">—</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const LoadingPreview: React.FC = () => (
  <div className="flex flex-col items-center gap-0.5 flex-shrink-0 w-[110px] min-w-[80px]">
    <div className="w-full aspect-square bg-white/5 rounded-xl relative flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 36 36" className="relative z-10 w-6 h-6" fill="none" aria-label="Loading">
        <circle cx="18" cy="18" r="15" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
        <path d="M 18 3 A 15 15 0 0 1 33 18" stroke="white" strokeWidth="3" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
    <svg viewBox="0 0 90 14" className="h-3.5 w-[90px]" aria-hidden="true">
      <text x="45" y="11" textAnchor="middle" fontSize="9" fontFamily="Urbanist, sans-serif" fill="rgba(125,124,131,1)">
        Preview loading...
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
      </text>
    </svg>
  </div>
);

// ---------------------------------------------------------------------------
// QueuedPhaseContent
// ---------------------------------------------------------------------------

const QueuedPhaseContent: React.FC<{ phase: Phase }> = ({ phase }) => {
  const integrations = collectIntegrations(phase);
  const status = resolvePhaseStatus(phase);
  return (
    <div className="grow shrink-0 basis-[200px] flex flex-col gap-2 min-w-0 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
        <span className="text-[#cbcacc] text-sm font-extrabold font-[Urbanist,sans-serif] leading-6 truncate min-w-0">
          {phase.name}
        </span>
        <StatusBadge status={status} />
      </div>
      <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
        {integrations.length > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="text-[#7d7c83] text-xs font-normal font-[Urbanist,sans-serif] whitespace-nowrap">Integration :</span>
            <div className="flex items-center">
              {integrations.map((name) => <IntegrationDot key={name} name={name} />)}
            </div>
          </div>
        )}
        {phase.agents && phase.agents.length > 0 && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#7d7c83] flex-shrink-0" />
            <span className="text-[#7d7c83] text-xs font-normal font-[Urbanist,sans-serif] whitespace-nowrap">
              {phase.agents[0]?.timeElapsed || '—'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// MilestonePhaseCard
// ---------------------------------------------------------------------------

interface MilestonePhaseCardProps {
  phase: Phase;
  onClick?: () => void;
  onActionClick?: (phaseId: string) => void;
  onAgentClick?: () => void;
}

const MilestonePhaseCard: React.FC<MilestonePhaseCardProps> = ({
  phase,
  onClick,
  onActionClick,
  onAgentClick,
}) => {
  const status = resolvePhaseStatus(phase);
  const integrations = collectIntegrations(phase);
  const isQueued = status.type === 'in_queue';
  const activeAgent = phase.agents?.find((a) => a.status === 'active');
  const actionCount = phase.agents?.filter((a) => a.status === 'pending').length || 0;

  const hasCompletedImages = status.type === 'completed' && phase.previewImages && phase.previewImages.length > 0;
  const hasInProgressImages = status.type === 'in_progress' && phase.previewImages && phase.previewImages.length > 0;

  const preview = isQueued
    ? null
    : hasCompletedImages
      ? <CompletedPreview images={phase.previewImages!} />
      : hasInProgressImages
        ? <CompletedPreview images={phase.previewImages!} />
        : <LoadingPreview />;

  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full px-3.5 rounded-2xl text-left',
        'bg-[rgba(255,255,255,0.04)]',
        'flex flex-wrap justify-start items-start gap-3',
        'transition-all duration-200 hover:bg-[rgba(255,255,255,0.06)]',
        'overflow-hidden',
        isQueued ? 'py-6 opacity-60' : 'py-5',
      )}
    >
      {preview}

      {isQueued ? (
        <QueuedPhaseContent phase={phase} />
      ) : (
        <div className="grow shrink-0 basis-[200px] flex flex-col justify-start items-stretch gap-3 min-w-0 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="self-stretch flex flex-wrap justify-between items-center gap-x-3 gap-y-1">
              <span className="text-[#cbcacc] text-sm font-extrabold font-[Urbanist,sans-serif] leading-6 truncate min-w-0">
                {phase.name}
              </span>
              <StatusBadge status={status} />
            </div>

            <div className="self-stretch flex flex-wrap items-center gap-x-4 gap-y-2">
              {integrations.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <span className="text-[#7d7c83] text-xs font-semibold font-[Urbanist,sans-serif] leading-6 whitespace-nowrap">Integration :</span>
                  <div className="flex items-center">
                    {integrations.map((name) => <IntegrationDot key={name} name={name} />)}
                  </div>
                </div>
              )}

              {phase.agents && phase.agents.length > 0 && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); onAgentClick?.(); }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); onAgentClick?.(); }
                  }}
                  className="flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <span className="text-[#7d7c83] text-xs font-semibold font-[Urbanist,sans-serif] leading-4 whitespace-nowrap">Agents :</span>
                  <div className="flex items-center gap-[3px]">
                    <div className="flex items-center">
                      {['/images/figma/launch4.svg', '/images/figma/launch5.svg', '/images/figma/launch6.svg'].map((src, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border border-[#2a2930] overflow-hidden -ml-1 first:ml-0 flex-shrink-0"
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[#7d7c83] text-xs font-bold font-[Urbanist,sans-serif] leading-4">
                      +3
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7d7c83] flex-shrink-0" />
                <span className="text-[#7d7c83] text-xs font-normal font-[Urbanist,sans-serif] leading-6 whitespace-nowrap">
                  {activeAgent?.timeElapsed || phase.agents?.[0]?.timeElapsed || '—'}
                </span>
              </div>
            </div>
          </div>

          <div className="self-stretch h-11 px-3 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg flex justify-between items-center gap-2 cursor-pointer transition-colors">
            <div className="flex flex-col justify-center items-start min-w-0 flex-1">
              <span className="text-[#7d7c83] text-[10px] font-normal font-[Urbanist,sans-serif] leading-4">
                Currently working on
              </span>
              <div className="flex justify-start items-center gap-1.5 max-w-full">
                {actionCount > 0 ? (
                  <AlertCircle className="w-3 h-3 text-red-600 flex-shrink-0" />
                ) : (
                  <div className="w-[5px] h-[5px] bg-[#8b4dea] rounded-full flex-shrink-0" />
                )}
                <span className="text-[#cbcacc] text-xs font-semibold font-[Urbanist,sans-serif] leading-5 truncate">
                  {activeAgent?.currentTask || phase.agents?.[0]?.currentTask || '—'}
                </span>
              </div>
            </div>

            <div className="flex items-center flex-shrink-0">
              {actionCount > 0 ? (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); onActionClick?.(phase.id); }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); onActionClick?.(phase.id); }
                  }}
                  className="h-7 px-2 bg-red-600 rounded-lg flex items-center gap-1.5 overflow-hidden cursor-pointer hover:bg-red-700 transition-colors"
                >
                  <AlertCircle className="w-3 h-3 text-white flex-shrink-0" />
                  <span className="text-white text-xs font-bold font-[Urbanist,sans-serif] whitespace-nowrap">{actionCount} Actions</span>
                  <ChevronRight className="w-3 h-3 text-white flex-shrink-0" />
                </div>
              ) : (
                <ChevronRight className="w-4 h-4 text-white/50" />
              )}
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

// ---------------------------------------------------------------------------
// CampaignMilestonesView — main exported component
// ---------------------------------------------------------------------------

interface CampaignMilestonesViewProps {
  campaignTitle?: string;
  campaignDescription?: string;
  phases?: Phase[];
  onPhaseToggle?: (phaseId: string) => void;
  onActionClick?: (phaseId: string) => void;
  onAgentClick?: () => void;
  onClose?: () => void;
}

export function CampaignMilestonesView({
  campaignTitle = 'Marketing Campaign Q1',
  campaignDescription = 'Launch complete product marketing campaign',
  phases = MOCK_PHASES,
  onPhaseToggle,
  onActionClick,
  onAgentClick,
  onClose,
}: CampaignMilestonesViewProps) {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('work');

  return (
    <div className="flex flex-col h-full bg-[#0f0f13]">
      {/* Workspace header */}
      <div className="flex items-center px-6 py-5 border-b border-white/[0.08] shrink-0 bg-[#0c0c10]">
        <div className="min-w-0 shrink-0">
          <h1 className="text-white text-lg font-bold font-[Urbanist,sans-serif]">{campaignTitle}</h1>
          <p className="text-white/30 text-xs font-medium font-[Urbanist,sans-serif] mt-0.5">
            {campaignDescription}
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center gap-1.5">
          {WORKSPACE_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg',
                  'text-[11px] font-semibold font-[Urbanist,sans-serif] transition-colors',
                  'border',
                  isActive
                    ? 'bg-white/10 border-white/15 text-white'
                    : 'bg-transparent border-white/[0.06] text-white/35 hover:text-white/60 hover:border-white/15',
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button className="inline-flex items-center gap-1.5 px-8 py-2.5 rounded-full bg-[#8b5cf6] text-white text-[11px] font-bold font-[Urbanist,sans-serif] hover:bg-[#7c4fe0] transition-colors">
            <span className="text-sm leading-none">+</span>
            Build
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-lg text-white/30 hover:text-white hover:bg-white/10 transition-colors">
            <MoreHorizontal size={15} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Phase cards */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {/* Milestones label */}
        <div className="flex items-center justify-between px-1 pb-1">
          <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-white/50" />
          </div>
          <span className="text-white text-lg font-bold font-[Urbanist,sans-serif] tracking-tight">
            Milestones
          </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/[0.06] transition-colors"
          >
            <img src="/images/figma/side.svg" alt="" className="w-12 h-12" />
          </button>
        </div>
        {phases.map((phase) => (
          <MilestonePhaseCard
            key={phase.id}
            phase={phase}
            onClick={() => onPhaseToggle?.(phase.id)}
            onActionClick={onActionClick}
            onAgentClick={onAgentClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CampaignMilestonesView;
