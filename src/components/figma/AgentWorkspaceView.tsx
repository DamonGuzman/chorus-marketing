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
import { useSearchParams } from 'react-router-dom';
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
};

const MOCK_SUB_AGENTS: SubAgentData[] = [
  {
    id: 'sa-social-1',
    name: 'Social Media Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
  },
  {
    id: 'sa-email-1',
    name: 'Email Marketing Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'pending',
  },
  {
    id: 'sa-ad-1',
    name: 'Ad Campaign Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
  },
  {
    id: 'sa-social-2',
    name: 'Social Media Agent',
    tasksCount: 3,
    currentTask: 'Building Linear Clone',
    status: 'active',
  },
];

// ---------------------------------------------------------------------------
// Mock gallery items – enough to demonstrate scrolling
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
    imageSrc: '/icons/image 37.svg',
  },
  {
    title: 'Dashboard UI',
    description: 'Analytics and reporting interface for managers',
    date: 'Updated jan 14',
    imageSrc: '/icons/image 38.svg',
  },
  {
    title: 'E-Commerce App',
    description: 'Online storefront with cart and checkout flow',
    date: 'Updated jan 13',
    imageSrc: '/icons/image 37.svg',
  },
  {
    title: 'CRM Portal',
    description: 'Customer relationship management dashboard',
    date: 'Updated jan 12',
    imageSrc: '/icons/image 38.svg',
  },
  {
    title: 'Task Tracker',
    description: 'Agile project board with drag-and-drop support',
    date: 'Updated jan 11',
    imageSrc: '/icons/image 37.svg',
  },
  {
    title: 'Finance App',
    description: 'Personal budget tracker and expense categorizer',
    date: 'Updated jan 10',
    imageSrc: '/icons/image 38.svg',
  },
  {
    title: 'Social Feed',
    description: 'Real-time social media timeline and notifications',
    date: 'Updated jan 9',
    imageSrc: '/icons/image 38.svg',
  },
  {
    title: 'Video Player',
    description: 'Streaming player with playlist and controls',
    date: 'Updated jan 8',
    imageSrc: '/icons/image 37.svg',
  },
  {
    title: 'Calendar App',
    description: 'Event scheduling with reminders and invites',
    date: 'Updated jan 7',
    imageSrc: '/icons/image 37.svg',
  },
];

// ---------------------------------------------------------------------------
// Mock files – matches the Figma file list ordering and icons
// ---------------------------------------------------------------------------

interface MockFileItem {
  id: string;
  name: string;
  time: string;
  icon: string;
}

const MOCK_FILES: MockFileItem[] = [
  { id: 'file-1',  name: 'Marketing Campaign Q1',     time: '5 mins ago',  icon: '/icons/1.svg' },
  { id: 'file-2',  name: 'Product Launch Meeting',    time: '10 mins ago', icon: '/icons/1.svg' },
  { id: 'file-3',  name: 'Tes data.py',               time: '5 mins ago',  icon: '/icons/2.svg' },
  { id: 'file-4',  name: 'Tes data.py',               time: '5 mins ago',  icon: '/icons/2.svg' },
  { id: 'file-5',  name: 'Price comparison.png',      time: '5 mins ago',  icon: '/icons/3.svg' },
  { id: 'file-6',  name: 'Metrics comparison.csv',    time: '5 mins ago',  icon: '/icons/4.svg' },
  { id: 'file-7',  name: 'Metrics comparison.csv',    time: '5 mins ago',  icon: '/icons/4.svg' },
  { id: 'file-8',  name: 'Sales Strategy Review',     time: '15 mins ago', icon: '/icons/1.svg' },
  { id: 'file-9',  name: 'Customer Feedback Session', time: '20 mins ago', icon: '/icons/1.svg' },
  { id: 'file-10', name: 'Marketing Campaign Q1',     time: '5 mins ago',  icon: '/icons/1.svg' },
  { id: 'file-11', name: 'Metrics comparison.csv',    time: '5 mins ago',  icon: '/icons/4.svg' },
  { id: 'file-12', name: 'Quarterly Budget Planning', time: '30 mins ago', icon: '/icons/1.svg' },
];

// ---------------------------------------------------------------------------
// Mock integrations – matches the Figma list ordering and icons
// ---------------------------------------------------------------------------

interface MockIntegrationItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const MOCK_INTEGRATIONS: MockIntegrationItem[] = [
  { id: 'int-1', name: 'Github', description: 'Team communication and collaboration', icon: '/icons/5.svg' },
  { id: 'int-2', name: 'Jira', description: 'Team communication and collaboration', icon: '/icons/6.svg' },
  { id: 'int-3', name: 'Slack', description: 'Team communication and collaboration', icon: '/icons/7.svg' },
  { id: 'int-4', name: 'Claude', description: 'Team communication and collaboration', icon: '/icons/8.svg' },
  { id: 'int-5', name: 'Stripe', description: 'Team communication and collaboration', icon: '/icons/9.svg' },
  { id: 'int-6', name: 'Jira', description: 'Team communication and collaboration', icon: '/icons/6.svg' },
  { id: 'int-7', name: 'Slack', description: 'Team communication and collaboration', icon: '/icons/7.svg' },
  { id: 'int-8', name: 'Claude', description: 'Team communication and collaboration', icon: '/icons/8.svg' },
  { id: 'int-9', name: 'Stripe', description: 'Team communication and collaboration', icon: '/icons/9.svg' },
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
  /** Whether the chat panel is currently open – highlights the chat icon */
  isChatOpen?: boolean;
  /** Called when the chat bubble icon is clicked */
  onToggleChat?: () => void;
}

/**
 * ContentTabBar – Output Gallery / Tasks / Files / Integration tabs.
 * The chat bubble icon on the far right toggles the agent chat panel.
 * When `isChatOpen` is true the icon is highlighted in purple.
 */
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

      {/* Chat bubble icon – highlighted when chat is open */}
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

/**
 * GalleryCard – a single output preview card.
 * The preview image sits inside a padded inner container so it doesn't
 * touch the card edges, matching the Figma design.
 */
function GalleryCard({ title, description, date, imageSrc }: GalleryCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl overflow-hidden',
        'bg-[#111115] border border-white/[0.07]',
      )}
    >
      {/* Preview area – inner container with padding to avoid edge-to-edge */}
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

      {/* Caption – large text matching design, no border separator */}
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

/**
 * OutputGallery – scrollable grid of GalleryCards.
 * `h-full` gives the grid a bounded height so `overflow-y-auto` scrolls.
 * `content-start` prevents grid rows from stretching to fill unused space.
 */
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
  previewSrc?: string;
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
    previewSrc: '/icons/Mask group.svg',
  },
  {
    id: 'task-card-2',
    collapsedTasks: MOCK_TASKS_SHORT,
    expandedTasks: MOCK_TASKS_LONG,
    previewSrc: '/icons/Mask group.svg',
  },
  {
    id: 'task-card-3',
    collapsedTasks: MOCK_TASKS_SHORT,
    expandedTasks: MOCK_TASKS_LONG,
    previewSrc: '/icons/Mask group.svg',
  },
];

const TASK_STATUS_ICON: Record<TaskStatus, { src: string; className: string }> = {
  done:         { src: '/icons/tick-circle.svg',   className: 'w-4 h-4 mt-0.5' },
  'in-progress':{ src: '/icons/Ellipse 2000.svg',  className: 'w-3.5 h-3.5 mt-1' },
  pending:      { src: '/icons/clock.svg',          className: 'w-4 h-4 mt-0.5' },
};

function TaskListItem({ title, status, meta }: TaskItem) {
  const icon = TASK_STATUS_ICON[status];
  const isInProgress = status === 'in-progress';

  return (
    <div className="flex items-start gap-3">
      {isInProgress ? (
        /*
         * In-progress indicator: amber dot with an expanding ping ring behind
         * it + the dot itself fades in/out, mirroring the sidebar pending dot.
         */
        <span className="relative flex-shrink-0 w-3.5 h-3.5 mt-1 flex items-center justify-center">
          {/* Expanding amber ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#f59e0b]/40 animate-ping"
            style={{ animationDuration: '1.4s' }}
          />
          {/* Pulsing solid amber dot */}
          <span
            className="relative w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"
            style={{ animationDuration: '1.4s' }}
          />
        </span>
      ) : (
        <img src={icon.src} alt="" className={cn('flex-shrink-0', icon.className)} />
      )}

      <div className="min-w-0">
        <p
          className={cn(
            'text-sm font-medium font-[Urbanist,sans-serif] leading-snug',
            status === 'pending' ? 'text-white/40' : 'text-white/70',
            /* Title text fades with the dot to reinforce the in-progress state */
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

function TaskCard({ collapsedTasks, expandedTasks, previewSrc, isExpanded, onToggle }: TaskCardProps) {
  const tasks = isExpanded ? expandedTasks : collapsedTasks;
  const ActionIcon = isExpanded ? ChevronDown : ChevronRight;
  const actionLabel = isExpanded ? 'Close' : 'Open';
  return (
    /*
     * `layout` lets Framer Motion smoothly animate the card's height as it
     * expands/collapses rather than jumping to the new size instantly.
     */
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
          <img src="/icons/Group 20963.svg" alt="" className="w-4 h-4" />
          <span className="text-white text-xs font-semibold font-[Urbanist,sans-serif]">
            Content Creation agent
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-white/60 font-[Urbanist,sans-serif]">
          {/* Spinning dashed-ring icon signals active work */}
          <img
            src="/icons/inprogress.svg"
            alt=""
            className="w-3 h-3 animate-spin"
            style={{ animationDuration: '1.8s' }}
          />
          {/* Text pulses in sync to reinforce the in-progress state */}
          <span
            className="animate-pulse"
            style={{ animationDuration: '1.8s' }}
          >
            In Progress
          </span>
        </div>
      </div>

      {/* Preview image slides open/closed with height + opacity animation */}
      <AnimatePresence>
        {isExpanded && previewSrc && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl overflow-hidden border border-white/10 bg-[#101014] relative">
              <img src={previewSrc} alt="" className="w-full h-82 object-cover opacity-80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Task list cross-fades between the collapsed and expanded task sets */}
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
  const [expandedCardId, setExpandedCardId] = useState<string | null>(MOCK_TASK_CARDS[1]?.id ?? null);

  return (
    <div className="h-full overflow-y-auto px-5 py-4">
      <div className="flex flex-col gap-4">
        {MOCK_TASK_CARDS.map((card) => {
          const isExpanded = expandedCardId === card.id;
          return (
            <TaskCard
              key={card.id}
              {...card}
              isExpanded={isExpanded}
              onToggle={() => setExpandedCardId((prev) => (prev === card.id ? null : card.id))}
            />
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Files panel
// ---------------------------------------------------------------------------

function FilesPanel() {
  return (
    <div className="h-full overflow-y-auto px-5 py-4">
      <div className="flex flex-col gap-3">
        {MOCK_FILES.map((file) => (
          <div
            key={file.id}
            className={cn(
              'flex items-center justify-between gap-3',
              'px-4 py-3 rounded-2xl',
              'bg-[#1c1c1e] border border-white/10',
            )}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#15151a] border border-white/10 flex items-center justify-center flex-shrink-0">
                <img src={file.icon} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold font-[Urbanist,sans-serif] truncate">
                  {file.name}
                </p>
                <p className="text-white/40 text-xs font-medium font-[Urbanist,sans-serif]">
                  {file.time}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              title="More options"
            >
              <MoreHorizontal size={16} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Integrations panel
// ---------------------------------------------------------------------------

function IntegrationsPanel() {
  return (
    <div className="h-full overflow-y-auto px-5 py-4">
      <div className="flex flex-col gap-3">
        {MOCK_INTEGRATIONS.map((integration) => (
          <div
            key={integration.id}
            className={cn(
              'flex items-center justify-between gap-3',
              'px-4 py-3 rounded-2xl',
              'bg-[#1c1c1e] border border-white/10',
            )}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[#15151a] border border-white/10 flex items-center justify-center flex-shrink-0">
                <img src={integration.icon} alt="" className="w-9 h-9 object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-semibold font-[Urbanist,sans-serif] truncate">
                  {integration.name}
                </p>
                <p className="text-white/40 text-xs font-medium font-[Urbanist,sans-serif]">
                  {integration.description}
                </p>
              </div>
            </div>

            <button
              type="button"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              title="More options"
            >
              <MoreHorizontal size={16} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main view
// ---------------------------------------------------------------------------

interface AgentWorkspaceViewProps {
  /** Called when the user presses the back arrow in the header */
  onClose: () => void;
  /** Phase title shown in the AgentWorkspaceHeader (non-hierarchy mode) */
  phaseTitle?: string;
  /** Number of pending actions shown in the header pill */
  actionsRequired?: number;
  /** Called when the "Actions Required" pill in the header is clicked */
  onActionClick?: () => void;
  /**
   * Workspace name passed to WorkspaceHeader when the hierarchy is open.
   * Falls back to a generic label if not provided.
   */
  workspaceTitle?: string;
  /** Workspace description shown under the title in hierarchy mode */
  workspaceDescription?: string;
  /** Called when the Build button in the WorkspaceHeader is clicked */
  onBuild?: () => void;
}

/**
 * AgentWorkspaceView
 *
 * Full-screen Agent Workspace layout: header + sidebar + content panel.
 * Owns mock data and tab selection state. Designed to slot in as a
 * conditional replace for the normal workspace content in `WorkspaceStudioLayout`.
 */
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

  /**
   * URL search params drive both whether the hierarchy panel is open and
   * which tab within it is active, enabling shareable / deep-linkable URLs.
   *
   * ?view=hierarchy          → hierarchy open, default tab ('work')
   * ?view=hierarchy&tab=apps → hierarchy open, Apps & Work tab active
   */
  const [searchParams, setSearchParams] = useSearchParams();

  const isHierarchyOpen = searchParams.get('view') === 'hierarchy';
  const hierarchyTab = (searchParams.get('tab') as AgentHierarchyTab | null) ?? 'work';

  /** Opens the hierarchy panel and optionally sets a specific tab. */
  const openHierarchy = useCallback((tab: AgentHierarchyTab = 'work') => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('view', 'hierarchy');
      next.set('tab', tab);
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  /** Closes the hierarchy panel and removes the view/tab params from the URL. */
  const closeHierarchy = useCallback(() => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete('view');
      next.delete('tab');
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  /** Changes the active hierarchy tab and reflects it in the URL. */
  const setHierarchyTab = useCallback((tab: AgentHierarchyTab) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('view', 'hierarchy');
      next.set('tab', tab);
      return next;
    }, { replace: true });
  }, [setSearchParams]);


  /**
   * The ID of the agent whose chat is open.
   * `null` = no agent selected, show the gallery/tab content.
   * `'manager'` = Manager Agent chat.
   * Any sub-agent id = that sub-agent's chat.
   */
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  /** Derive the display name from the selected agent ID */
  const selectedAgentName = (() => {
    if (!selectedAgentId) return '';
    if (selectedAgentId === 'manager') return MOCK_MANAGER.name;
    return MOCK_SUB_AGENTS.find((a) => a.id === selectedAgentId)?.name ?? 'Agent';
  })();

  const isChatOpen = selectedAgentId !== null;

  const handleSelectAgent = (id: string) => {
    if (id === 'manager') {
      // Manager Agent is the root – clicking it always returns to the gallery.
      setSelectedAgentId(null);
    } else {
      // Sub-agents open their chat; re-clicking the same one stays on chat.
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
    <div className="flex flex-col w-full h-full overflow-hidden">
      {/*
        Header swaps based on mode:
        – Hierarchy open  → WorkspaceHeader (workspace title + tab pills, image 1)
        – Normal mode     → AgentWorkspaceHeader (back arrow + phase title, image 2)
      */}
      {isHierarchyOpen ? (
        /* Hierarchy mode: dedicated header with agent-context tabs + Dashboard */
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
        /* Normal mode: phase-level header with back arrow */
        <AgentWorkspaceHeader
          title={phaseTitle}
          actionsRequired={actionsRequired}
          onBack={onClose}
          onActionClick={onActionClick}
        />
      )}

      {/* Body: sidebar + content */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/*
          Left – agent sidebar.
          Hidden when hierarchy is open so the tree gets the full width.
          Scroll position and state are preserved when navigating back.
        */}
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
              // Opens the chat panel for the chosen agent without navigating away
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

        {/* Right – hierarchy / dashboard / tabbed content / agent chat panel */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {isHierarchyOpen ? (
            /*
              Hierarchy mode — sidebar is hidden so this takes the full width.
              Tab selection in AgentHierarchyHeader controls which view renders.
            */
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
                /*
                 * Split-panel layout: chat slides in from the left, tab content
                 * stays on the right and cross-fades when the active tab changes.
                 */
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  {/* Left – agent chat panel: slides in from the left on mount */}
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

                  {/* Right – tab content: fades between tabs */}
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

                      {activeTab !== 'output' &&
                        activeTab !== 'tasks' &&
                        activeTab !== 'files' &&
                        activeTab !== 'integration' && (
                          <div className="flex items-center justify-center h-full">
                            <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
                              {CONTENT_TABS.find((t) => t.id === activeTab)?.label} coming soon
                            </p>
                          </div>
                        )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                /* No agent selected – full-width tab content, cross-fades between tabs */
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

                    {activeTab !== 'output' &&
                      activeTab !== 'tasks' &&
                      activeTab !== 'files' &&
                      activeTab !== 'integration' && (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-white/30 text-sm font-medium font-[Urbanist,sans-serif]">
                            {CONTENT_TABS.find((t) => t.id === activeTab)?.label} coming soon
                          </p>
                        </div>
                      )}
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
