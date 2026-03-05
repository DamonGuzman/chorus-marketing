'use client';

/**
 * AgentWorkspaceView
 *
 * The full Agent Workspace screen. Combines `AgentWorkspaceHeader` on top
 * with a two-column body: `AgentWorkspaceSidebar` on the left and a
 * content panel on the right for the Output Gallery, Tasks, Files, and
 * Integration tabs.
 *
 * This component owns the mock data and tab selection state for the initial
 * scaffolding. Real data will come from an API once the backend is wired.
 *
 * Use this component inside `WorkspaceStudioLayout` when
 * `isAgentWorkspaceOpen` is true in the Zustand store.
 *
 * @example
 * ```tsx
 * {isAgentWorkspaceOpen && (
 *   <AgentWorkspaceView onClose={closeAgentWorkspace} />
 * )}
 * ```
 *
 * Props:
 * - `onClose`           – Called when the back arrow in the header is pressed.
 * - `phaseTitle`        – Optional title override.
 * - `actionsRequired`   – Number shown in the header actions pill.
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AgentWorkspaceHeader } from './AgentWorkspaceHeader';
import { AgentWorkspaceSidebar } from './AgentWorkspaceSidebar';
import { AgentChatPanel } from './AgentChatPanel';
import { AgentHierarchyView } from './AgentHierarchyView';
import { AgentHierarchyHeader } from './AgentHierarchyHeader';
import { AgentDashboardView } from './AgentDashboardView';
import { AgentAppsWorkView } from './AgentAppsWorkView';
import { AgentKnowledgeBaseView } from './AgentKnowledgeBaseView';
import { AgentIntegrationView } from './AgentIntegrationView';
import type { AgentHierarchyTab } from './AgentHierarchyHeader';
import type { SubAgentData, ManagerAgentData } from './AgentWorkspaceSidebar';
import {
  ImageIcon,
  CheckSquare,
  Folder,
  GitMerge,
  MessageSquare,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Mock data – replace with API data when backend is ready
// ---------------------------------------------------------------------------

const MOCK_MANAGER: ManagerAgentData = {
  name: 'Manager Agent',
  tasksCount: 3,
  avatar: '/images/figma/10.svg',
};

const MOCK_SUB_AGENTS: SubAgentData[] = [
  {
    id: 'sa-social-1',
    name: 'Social Media Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
    avatar: '/images/figma/11.svg',
  },
  {
    id: 'sa-email-1',
    name: 'Email Marketing Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'pending',
    avatar: '/images/figma/12.svg',
  },
  {
    id: 'sa-ad-1',
    name: 'Ad Campaign Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
    avatar: '/images/figma/13.svg',
  },
  {
    id: 'sa-social-2',
    name: 'Social Media Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
    avatar: '/images/figma/14.svg',
  },
];

// ---------------------------------------------------------------------------
// Mock gallery items – placeholder images (replace with real ones later)
// ---------------------------------------------------------------------------

interface GalleryItem {
  title: string;
  description: string;
  date: string;
  imageSrc?: string;
}

const MOCK_GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Music Player',
    description: 'Team communication and collaboration platform',
    date: 'Updated jan 15',
    imageSrc: '/images/figma/image 37 (1).svg',
  },
  {
    title: 'Dashboard UI',
    description: 'Analytics and reporting interface for managers',
    date: 'Updated jan 14',
    imageSrc: '/images/figma/image 38 (1).svg',
  },
  {
    title: 'E-Commerce App',
    description: 'Online storefront with cart and checkout flow',
    date: 'Updated jan 13',
    imageSrc: '/images/figma/image 37 (2).svg',
  },
  {
    title: 'CRM Portal',
    description: 'Customer relationship management dashboard',
    date: 'Updated jan 12',
    imageSrc: '/images/figma/image 38 (2).svg',
  },
  {
    title: 'Task Tracker',
    description: 'Agile project board with drag-and-drop support',
    date: 'Updated jan 11',
    imageSrc: '/images/figma/image 37 (3).svg',
  },
  {
    title: 'Finance App',
    description: 'Personal budget tracker and expense categorizer',
    date: 'Updated jan 10',
    imageSrc: '/images/figma/image 38 (3).svg',
  },
  {
    title: 'Social Feed',
    description: 'Real-time social media timeline and notifications',
    date: 'Updated jan 9',
    imageSrc: '/images/figma/image 38 (4).svg',
  },
  {
    title: 'Video Player',
    description: 'Streaming player with playlist and controls',
    date: 'Updated jan 8',
    imageSrc: '/images/figma/image 37 (4).svg',
  },
  {
    title: 'Calendar App',
    description: 'Event scheduling with reminders and invites',
    date: 'Updated jan 7',
    imageSrc: '/images/figma/image 37 (5).svg',
  },
];

// ---------------------------------------------------------------------------
// Mock files
// ---------------------------------------------------------------------------

interface MockFileItem {
  id: string;
  name: string;
  time: string;
}

const MOCK_FILES: MockFileItem[] = [
  { id: 'file-1',  name: 'Marketing Campaign Q1',     time: '5 mins ago' },
  { id: 'file-2',  name: 'Product Launch Meeting',    time: '10 mins ago' },
  { id: 'file-3',  name: 'Tes data.py',               time: '5 mins ago' },
  { id: 'file-4',  name: 'Tes data.py',               time: '5 mins ago' },
  { id: 'file-5',  name: 'Price comparison.png',      time: '5 mins ago' },
  { id: 'file-6',  name: 'Metrics comparison.csv',    time: '5 mins ago' },
  { id: 'file-7',  name: 'Metrics comparison.csv',    time: '5 mins ago' },
  { id: 'file-8',  name: 'Sales Strategy Review',     time: '15 mins ago' },
  { id: 'file-9',  name: 'Customer Feedback Session', time: '20 mins ago' },
  { id: 'file-10', name: 'Marketing Campaign Q1',     time: '5 mins ago' },
  { id: 'file-11', name: 'Metrics comparison.csv',    time: '5 mins ago' },
  { id: 'file-12', name: 'Quarterly Budget Planning', time: '30 mins ago' },
];

// ---------------------------------------------------------------------------
// Mock integrations
// ---------------------------------------------------------------------------

interface MockIntegrationItem {
  id: string;
  name: string;
  description: string;
}

const MOCK_INTEGRATIONS: MockIntegrationItem[] = [
  { id: 'int-1', name: 'Github', description: 'Team communication and collaboration' },
  { id: 'int-2', name: 'Jira', description: 'Team communication and collaboration' },
  { id: 'int-3', name: 'Slack', description: 'Team communication and collaboration' },
  { id: 'int-4', name: 'Claude', description: 'Team communication and collaboration' },
  { id: 'int-5', name: 'Stripe', description: 'Team communication and collaboration' },
  { id: 'int-6', name: 'Jira', description: 'Team communication and collaboration' },
  { id: 'int-7', name: 'Slack', description: 'Team communication and collaboration' },
  { id: 'int-8', name: 'Claude', description: 'Team communication and collaboration' },
  { id: 'int-9', name: 'Stripe', description: 'Team communication and collaboration' },
];

// ---------------------------------------------------------------------------
// Content tab definitions
// ---------------------------------------------------------------------------

type ContentTab = 'output' | 'tasks' | 'files' | 'integration';

interface TabDefinition {
  id: ContentTab;
  label: string;
  icon: React.ReactNode;
}

const CONTENT_TABS: TabDefinition[] = [
  { id: 'output',      label: 'Output Gallery', icon: <ImageIcon size={13} strokeWidth={2} /> },
  { id: 'tasks',       label: 'Tasks',          icon: <CheckSquare size={13} strokeWidth={2} /> },
  { id: 'files',       label: 'Files',          icon: <Folder size={13} strokeWidth={2} /> },
  { id: 'integration', label: 'Integration',    icon: <GitMerge size={13} strokeWidth={2} /> },
];

// ---------------------------------------------------------------------------
// Tab bar
// ---------------------------------------------------------------------------

interface ContentTabBarProps {
  activeTab: ContentTab;
  onTabChange: (tab: ContentTab) => void;
  isChatOpen?: boolean;
  onToggleChat?: () => void;
}

function ContentTabBar({ activeTab, onTabChange, isChatOpen, onToggleChat }: ContentTabBarProps) {
  return (
    <div className="flex items-center gap-1 px-4 pt-3 border-b border-white/10 shrink-0">
      {CONTENT_TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => {
              onTabChange(tab.id);
            }}
            className={cn(
              'flex items-center gap-1.5 px-3 py-2 rounded-t-lg',
              'text-xs font-semibold font-[Urbanist,sans-serif]',
              'border-b-2 -mb-px transition-colors duration-150',
              isActive
                ? 'text-white border-white'
                : 'text-white/40 border-transparent hover:text-white/70',
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}

      <div className="ml-auto pb-2">
        <button
          onClick={onToggleChat}
          aria-label="Toggle agent chat"
          className={cn(
            'flex items-center justify-center w-7 h-7 rounded-lg',
            'transition-colors duration-150',
            isChatOpen
              ? 'text-[#8b5cf6] bg-[#8b5cf6]/15'
              : 'text-white/40 hover:text-white hover:bg-white/8',
          )}
        >
          <MessageSquare size={15} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Gallery card
// ---------------------------------------------------------------------------

interface GalleryCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc?: string;
}

function GalleryCard({ title, description, date, imageSrc }: GalleryCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl overflow-hidden',
        'bg-[#111115] border border-white/[0.07]',
      )}
    >
      <div className="w-full h-44 p-3 flex-shrink-0">
        <div
          className={cn(
            'w-full h-full rounded-xl overflow-hidden',
            'bg-[#1c1c24]',
            'flex items-center justify-center',
          )}
        >
          {imageSrc ? (
            <img src={imageSrc} alt="" className="w-full h-full object-contain" />
          ) : (
            <ImageIcon size={28} className="text-white/10" strokeWidth={1.2} />
          )}
        </div>
      </div>

      <div className="px-4 pb-5">
        <p className="text-white text-base font-bold font-[Urbanist,sans-serif] leading-snug">
          {title}
        </p>
        <p className="text-white/40 text-sm font-medium mt-1 font-[Urbanist,sans-serif] leading-snug line-clamp-1">
          {description}
        </p>
        <p className="text-white/30 text-sm font-medium mt-2 font-[Urbanist,sans-serif]">
          {date}
        </p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Output gallery
// ---------------------------------------------------------------------------

function OutputGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="relative h-full">
      <div
        className={cn(
          'grid gap-4 p-4',
          'grid-cols-2 sm:grid-cols-3',
          'overflow-y-auto h-full content-start',
        )}
      >
        {MOCK_GALLERY_ITEMS.map((item, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="w-full text-left bg-transparent p-0 border-0 focus:outline-none"
          >
            <GalleryCard {...item} />
          </button>
        ))}
      </div>

      {selectedItem && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="w-full max-w-[630px] rounded-2xl border border-white/10 bg-[#16161d] shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="p-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#101014]">
                {selectedItem.imageSrc ? (
                  <img
                    src={selectedItem.imageSrc}
                    alt=""
                    className="w-full h-96 object-contain"
                  />
                ) : (
                  <div className="w-full h-96 flex items-center justify-center">
                    <ImageIcon size={28} className="text-white/10" strokeWidth={1.2} />
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-white text-sm font-semibold font-[Urbanist,sans-serif]">
                  {selectedItem.title}
                </p>
                <p className="text-white/50 text-xs font-medium font-[Urbanist,sans-serif] mt-1">
                  {selectedItem.description}
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {MOCK_TASKS_LONG.map((task) => (
                  <TaskListItem key={`gallery-${task.id}`} {...task} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Tasks panel
// ---------------------------------------------------------------------------

type TaskStatus = 'done' | 'in-progress' | 'pending';

interface TaskItem {
  id: string;
  title: string;
  status: TaskStatus;
  meta?: string;
}

interface TaskCardData {
  id: string;
  collapsedTasks: TaskItem[];
  expandedTasks: TaskItem[];
}

const MOCK_TASKS_SHORT: TaskItem[] = [
  {
    id: 'task-short-1',
    title: 'Initialize the work with appropriate scofholding',
    status: 'in-progress',
    meta: '2:50 Initializing the work...',
  },
  {
    id: 'task-short-2',
    title: 'LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content',
    status: 'pending',
  },
];

const MOCK_TASKS_LONG: TaskItem[] = [
  {
    id: 'task-long-1',
    title: 'LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content',
    status: 'done',
  },
  {
    id: 'task-long-2',
    title: 'Email nurture sequence to 5K list - build anticipation',
    status: 'done',
  },
  {
    id: 'task-long-3',
    title: 'LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content',
    status: 'done',
  },
  {
    id: 'task-long-4',
    title: 'Email nurture sequence to 5K list - build anticipation',
    status: 'done',
  },
  {
    id: 'task-long-5',
    title: 'LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content',
    status: 'done',
  },
  {
    id: 'task-long-6',
    title: 'Initialize the work with appropriate scofholding',
    status: 'in-progress',
    meta: '2:50 Initializing the work...',
  },
  {
    id: 'task-long-7',
    title: 'LinkedIn organic posts (3x/week) - behind-the-scenes, problem-solving content',
    status: 'pending',
  },
];

const MOCK_TASK_CARDS: TaskCardData[] = [
  {
    id: 'task-card-1',
    collapsedTasks: MOCK_TASKS_SHORT,
    expandedTasks: MOCK_TASKS_LONG,
  },
  {
    id: 'task-card-2',
    collapsedTasks: MOCK_TASKS_SHORT,
    expandedTasks: MOCK_TASKS_LONG,
  },
  {
    id: 'task-card-3',
    collapsedTasks: MOCK_TASKS_SHORT,
    expandedTasks: MOCK_TASKS_LONG,
  },
];

const STATUS_COLORS: Record<TaskStatus, string> = {
  done: 'text-emerald-400',
  'in-progress': 'text-[#f59e0b]',
  pending: 'text-white/30',
};

function TaskListItem({ title, status, meta }: TaskItem) {
  const isInProgress = status === 'in-progress';

  return (
    <div className="flex items-start gap-3">
      {isInProgress ? (
        <span className="relative flex-shrink-0 w-3.5 h-3.5 mt-1 flex items-center justify-center">
          <span
            className="absolute inset-0 rounded-full bg-[#f59e0b]/40 animate-ping"
            style={{ animationDuration: '1.4s' }}
          />
          <span
            className="relative w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"
            style={{ animationDuration: '1.4s' }}
          />
        </span>
      ) : status === 'done' ? (
        <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full border-2 border-emerald-400 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1.5 4L3 5.5L6.5 2" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : (
        <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full border border-white/20 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="1.5" fill="white" fillOpacity="0.2" />
          </svg>
        </span>
      )}

      <div className="min-w-0">
        <p
          className={cn(
            'text-sm font-medium font-[Urbanist,sans-serif] leading-snug',
            status === 'pending' ? 'text-white/40' : 'text-white/70',
            isInProgress && 'animate-pulse',
          )}
          style={isInProgress ? { animationDuration: '1.4s' } : undefined}
        >
          {title}
        </p>
        {meta && (
          <p className="text-xs text-white/30 font-medium font-[Urbanist,sans-serif] mt-1">{meta}</p>
        )}
      </div>
    </div>
  );
}

interface TaskCardProps extends TaskCardData {
  isExpanded: boolean;
  onToggle: () => void;
}

function TaskCard({ collapsedTasks, expandedTasks, isExpanded, onToggle }: TaskCardProps) {
  const tasks = isExpanded ? expandedTasks : collapsedTasks;
  const ActionIcon = isExpanded ? ChevronDown : ChevronRight;
  const actionLabel = isExpanded ? 'Close' : 'Open';
  return (
    <motion.div
      layout
      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'rounded-2xl border px-5 py-4',
        isExpanded
          ? 'bg-[#16161d] border-[#8b5cf6]/50 shadow-[0_0_0_1px_rgba(139,92,246,0.15)]'
          : 'bg-[#1b1b20] border-white/10',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-[#15151a]">
          <span className="w-4 h-4 rounded-full bg-white/10" />
          <span className="text-white text-xs font-semibold font-[Urbanist,sans-serif]">
            Content Creation agent
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-white/60 font-[Urbanist,sans-serif]">
          <span
            className="w-3 h-3 rounded-full border-2 border-dashed border-white/30 animate-spin"
            style={{ animationDuration: '1.8s' }}
          />
          <span
            className="animate-pulse"
            style={{ animationDuration: '1.8s' }}
          >
            In Progress
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-[#101014] relative">
              <div className="w-full h-82 bg-[#1c1c24] flex items-center justify-center">
                <ImageIcon size={28} className="text-white/10" strokeWidth={1.2} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          className="mt-4 flex flex-col gap-3"
        >
          {tasks.map((task) => (
            <TaskListItem key={task.id} {...task} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#141418] text-xs font-semibold text-white/70 font-[Urbanist,sans-serif] hover:text-white hover:bg-white/10 transition-colors"
        >
          {actionLabel}
          <ActionIcon size={14} className="text-white/50" />
        </button>
      </div>
    </motion.div>
  );
}

function TasksPanel() {
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Tasks — coming soon
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Files panel
// ---------------------------------------------------------------------------

function FilesPanel() {
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Files — coming soon
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Integrations panel
// ---------------------------------------------------------------------------

function IntegrationsPanel() {
  return (
    <div className="h-full flex items-center justify-center">
      <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
        Integration — coming soon
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------

interface AgentWorkspaceViewProps {
  onClose: () => void;
  phaseTitle?: string;
  actionsRequired?: number;
  onActionClick?: () => void;
  workspaceTitle?: string;
  workspaceDescription?: string;
  onBuild?: () => void;
}

export function AgentWorkspaceView({
  onClose,
  phaseTitle = 'Phase 1: Pre-Launch Strategy',
  actionsRequired = 3,
  onActionClick,
  workspaceTitle = 'Agent Workspace',
  workspaceDescription = '',
  onBuild,
}: AgentWorkspaceViewProps) {
  const [activeTab, setActiveTab] = useState<ContentTab>('output');

  // Hierarchy state (replaces react-router-dom useSearchParams for Next.js compatibility)
  const [isHierarchyOpen, setIsHierarchyOpen] = useState(false);
  const [hierarchyTab, setHierarchyTab] = useState<AgentHierarchyTab>('work');

  const openHierarchy = useCallback((tab: AgentHierarchyTab = 'work') => {
    setIsHierarchyOpen(true);
    setHierarchyTab(tab);
  }, []);

  const closeHierarchy = useCallback(() => {
    setIsHierarchyOpen(false);
  }, []);

  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  const selectedAgentName = (() => {
    if (!selectedAgentId) return '';
    if (selectedAgentId === 'manager') return MOCK_MANAGER.name;
    return MOCK_SUB_AGENTS.find((a) => a.id === selectedAgentId)?.name ?? 'Agent';
  })();

  const isChatOpen = selectedAgentId !== null;

  const handleSelectAgent = (id: string) => {
    if (id === 'manager') {
      setSelectedAgentId(null);
    } else {
      setSelectedAgentId(id);
    }
  };

  const handleToggleChat = () => {
    if (selectedAgentId !== null) {
      setSelectedAgentId(null);
    } else {
      setSelectedAgentId('manager');
    }
  };

  return (
    <div className="flex flex-col w-full h-full overflow-hidden bg-[#0a0a0f]">
      {isHierarchyOpen ? (
        <div className="border-b border-white/10 flex-shrink-0">
          <AgentHierarchyHeader
            title={workspaceTitle}
            description={workspaceDescription}
            activeTab={hierarchyTab}
            onTabChange={setHierarchyTab}
            onBuild={onBuild}
            onBack={() => {
              closeHierarchy();
              setSelectedAgentId(null);
            }}
          />
        </div>
      ) : (
        <AgentWorkspaceHeader
          title={phaseTitle}
          actionsRequired={actionsRequired}
          onBack={onClose}
          onActionClick={onActionClick}
        />
      )}

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {!isHierarchyOpen && (
          <AgentWorkspaceSidebar
            manager={MOCK_MANAGER}
            subAgents={MOCK_SUB_AGENTS}
            selectedAgentId={selectedAgentId ?? undefined}
            onSelectAgent={(id) => {
              closeHierarchy();
              handleSelectAgent(id);
            }}
            onChatAgent={(id) => {
              setSelectedAgentId(id);
            }}
            onHierarchyToggle={() => {
              if (isHierarchyOpen) {
                closeHierarchy();
              } else {
                openHierarchy();
              }
              setSelectedAgentId(null);
            }}
            isHierarchyActive={isHierarchyOpen}
            className="border-r border-white/10"
          />
        )}

        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {isHierarchyOpen ? (
            hierarchyTab === 'dashboard' ? (
              <AgentDashboardView
                workspaceName={workspaceTitle}
                className="flex-1 min-h-0"
              />
            ) : hierarchyTab === 'apps' ? (
              <AgentAppsWorkView className="flex-1 min-h-0" />
            ) : hierarchyTab === 'knowledge' ? (
              <AgentKnowledgeBaseView className="flex-1 min-h-0" />
            ) : hierarchyTab === 'integration' ? (
              <AgentIntegrationView className="flex-1 min-h-0" />
            ) : (
              <AgentHierarchyView className="flex-1 min-h-0" />
            )
          ) : (
            <>
              <ContentTabBar
                activeTab={activeTab}
                onTabChange={setActiveTab}
                isChatOpen={isChatOpen}
                onToggleChat={handleToggleChat}
              />

              {isChatOpen ? (
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  <motion.div
                    initial={{ x: -28, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-[420px] min-w-[320px] max-w-[460px] border-r border-white/10 flex-shrink-0"
                  >
                    <AgentChatPanel
                      agentName={selectedAgentName}
                      onClose={handleToggleChat}
                    />
                  </motion.div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.12 }}
                      className="flex-1 min-h-0 overflow-hidden"
                    >
                      {activeTab === 'output' && <OutputGallery />}
                      {activeTab === 'tasks' && <TasksPanel />}
                      {activeTab === 'files' && <FilesPanel />}
                      {activeTab === 'integration' && <IntegrationsPanel />}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="flex-1 min-h-0 overflow-hidden"
                  >
                    {activeTab === 'output' && <OutputGallery />}
                    {activeTab === 'tasks' && <TasksPanel />}
                    {activeTab === 'files' && <FilesPanel />}
                    {activeTab === 'integration' && <IntegrationsPanel />}
                  </motion.div>
                </AnimatePresence>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
