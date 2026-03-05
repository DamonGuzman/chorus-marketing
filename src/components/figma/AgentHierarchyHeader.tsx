/**
 * AgentHierarchyHeader
 *
 * The top bar shown exclusively when the Agent Hierarchy tree view is open
 * inside `AgentWorkspaceView`. It intentionally mirrors the visual style of
 * `WorkspaceHeader` but carries its own tab set — including the extra
 * "Dashboard" tab that only makes sense in the agent/sub-agent context.
 *
 * Tabs:
 *  1. Work In Progress  – overview of running tasks across all agents
 *  2. Apps & Work       – integrations and tool connections
 *  3. Knowledge Base    – reference documents consumed by agents
 *  4. Integration       – third-party connector management
 *  5. Dashboard         – analytics and performance view (agent-only)
 *
 * @example
 * ```tsx
 * <AgentHierarchyHeader
 *   title="Marketing Campaign Q1"
 *   description="Launch complete product marketing campaign"
 *   activeTab="work"
 *   onTabChange={(tab) => setTab(tab)}
 *   onBuild={() => openBuildModal()}
 * />
 * ```
 *
 * Props:
 * - `title`       – Workspace name shown on the left.
 * - `description` – Short subtitle beneath the title.
 * - `activeTab`   – Currently selected tab id.
 * - `onTabChange` – Fired when the user clicks a different tab.
 * - `onBuild`     – Fired when the Build button is clicked.
 */

import React from 'react';
import { cn } from '@/lib/utils';
import {
  Bot,
  CheckSquare,
  BookOpen,
  Network,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  ArrowLeft,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

/** Tab identifiers exclusive to the agent-hierarchy header. */
export type AgentHierarchyTab =
  | 'work'
  | 'apps'
  | 'knowledge'
  | 'integration'
  | 'dashboard';

interface AgentHierarchyHeaderProps {
  /** Workspace name displayed on the left */
  title: string;
  /** Short workspace description shown beneath the title */
  description?: string;
  /** Currently active tab */
  activeTab?: AgentHierarchyTab;
  /** Fired when the user clicks a tab */
  onTabChange?: (tab: AgentHierarchyTab) => void;
  /** Fired when the Build button is clicked */
  onBuild?: () => void;
  /**
   * Fired when the back arrow is pressed.
   * When provided a ← arrow renders on the far left, allowing the user
   * to collapse the hierarchy and return to the agent sidebar + gallery.
   */
  onBack?: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Tab configuration
// ─────────────────────────────────────────────────────────────────────────────

interface TabConfig {
  id: AgentHierarchyTab;
  label: string;
  icon: React.ElementType;
  activeIconSize: number;
}

const TABS: TabConfig[] = [
  { id: 'work',        label: 'Work In progress', icon: Bot,              activeIconSize: 17 },
  { id: 'apps',        label: 'Apps & Work',       icon: CheckSquare,     activeIconSize: 13 },
  { id: 'knowledge',   label: 'Knowledge Base',    icon: BookOpen,        activeIconSize: 13 },
  { id: 'integration', label: 'Integration',       icon: Network,         activeIconSize: 13 },
  { id: 'dashboard',   label: 'Dashboard',         icon: LayoutDashboard, activeIconSize: 13 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Single tab pill button.
 * Active state: white solid border.
 * Inactive: 25 % white border with muted text.
 */
const TabButton: React.FC<{
  tab: TabConfig;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => {
  const Icon = tab.icon;
  const iconSize = isActive && tab.id === 'work' ? tab.activeIconSize : 13;

  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-[6px] px-[10px] py-[8px] rounded-[6px] h-[28px]',
        'transition-all duration-200 overflow-hidden border-[0.5px]',
        'font-[Urbanist,sans-serif] whitespace-nowrap',
        isActive
          ? 'border-white bg-transparent text-white'
          : 'border-[rgba(255,255,255,0.25)] text-[#7d7c83] hover:text-white hover:border-white/50',
      )}
    >
      <Icon className="flex-shrink-0" style={{ width: iconSize, height: iconSize }} />
      <span className="text-[12px] font-semibold leading-[18px]">{tab.label}</span>
    </button>
  );
};

/** Purple-gradient Build button — matches the one in WorkspaceHeader. */
const BuildButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      'flex items-center gap-[8px] h-[36px] w-[104px] rounded-[50px]',
      'pl-[15px] pr-[25px] py-[12px]',
      'shadow-[0px_0px_8px_0px_rgba(175,130,249,0.63)]',
      'hover:opacity-90 transition-opacity',
    )}
    style={{
      backgroundImage:
        'linear-gradient(-65.92deg, rgb(180,138,251) 14.59%, rgb(145,85,237) 88.44%)',
    }}
  >
    <Plus className="w-[18px] h-[18px] text-white" strokeWidth={2.5} />
    <span className="text-[14px] font-bold text-white leading-[24px] font-[Urbanist,sans-serif]">
      Build
    </span>
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────

/**
 * AgentHierarchyHeader
 *
 * Renders the workspace-style header used exclusively when the Agent
 * Hierarchy tree is visible. Includes the "Dashboard" tab which is only
 * relevant in the agent-management context.
 */
export function AgentHierarchyHeader({
  title,
  description = '',
  activeTab = 'work',
  onTabChange,
  onBuild,
  onBack,
}: AgentHierarchyHeaderProps) {
  return (
    <div className="flex items-start justify-between p-[10px]">
      {/* Left: optional back arrow + workspace title + description */}
      <div className="flex items-start gap-2 p-2.5 min-w-0">
        {onBack && (
          <button
            onClick={onBack}
            aria-label="Back to Agent Workspace"
            title="Back to Agent Workspace"
            className="flex items-center justify-center w-7 h-7 mt-0.5 rounded-lg flex-shrink-0 text-white/50 hover:text-white hover:bg-white/8 transition-colors"
          >
            <ArrowLeft size={15} strokeWidth={1.8} />
          </button>
        )}
        <div className="flex flex-col gap-1 min-w-0">
          <h1 className="text-white text-lg font-bold font-urbanist leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-[#7d7c83] text-xs font-normal font-urbanist leading-6 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Centre: tab pills */}
      <div className="flex items-center gap-[10px] justify-center p-[10px] flex-wrap">
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            tab={tab}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange?.(tab.id)}
          />
        ))}
      </div>

      {/* Right: Build button + overflow */}
      <div className="flex items-center gap-[10px] p-[10px]">
        <BuildButton onClick={onBuild} />
        <button
          className="w-[24px] h-[24px] flex items-center justify-center text-[#7d7c83] hover:text-white transition-colors"
          title="More options"
          aria-label="More options"
        >
          <MoreHorizontal className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
}
