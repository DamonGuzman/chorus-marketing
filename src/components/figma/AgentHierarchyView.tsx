/**
 * AgentHierarchyView
 *
 * Renders the "Agent Hierarchy" tree canvas, matching the Figma design exactly:
 *
 *  Tier 0  — Manager Agent (root, centred, blue gradient border)
 *  Tier 1  — Social Media Agent | Email Marketing Agent  (milestone badges above)
 *  Tier 2  — 6 Ad Campaign agents in a 3-column × 2-row grid
 *
 * Connector geometry (SVG, viewBox 0 0 900 H):
 *   Manager (x=450) → shared H-bus → Social (x=252) + Email (x=648)
 *   Social (x=252) + Email (x=648) → shared H-bus → 3 leaf cols (146, 450, 754)
 *   All branch-end lines carry a small downward arrowhead via SVG <marker>.
 *
 * @example
 * ```tsx
 * <AgentHierarchyView />
 * ```
 */

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LayoutGrid, MoreHorizontal, ChevronRight, ArrowLeft } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Layout constants  (all in px, canvas = 900 px wide)
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W  = 900;   // fixed tree canvas width
const LEAF_GAP  = 12;    // gap between leaf cards
const LEAF_W    = (CANVAS_W - LEAF_GAP * 2) / 3;  // ~292 px per leaf card

// SVG x-coordinates in viewBox 0 0 900 H
const MGR_X = 450;                                        // Manager centre: 50 %
const SOC_X = 252;                                        // Social centre : 28 %
const EML_X = 648;                                        // Email centre  : 72 %
const L1_X  = LEAF_W / 2;                                 // ~146 col-1 centre
const L2_X  = LEAF_W + LEAF_GAP + LEAF_W / 2;            // ~450 col-2 centre
const L3_X  = LEAF_W * 2 + LEAF_GAP * 2 + LEAF_W / 2;   // ~754 col-3 centre

// Mid-level card width — 220 px, centred at SOC_X / EML_X.
// Padding = SOC_X − (card_w / 2) = 252 − 110 = 142 px each side.
const MID_PADDING = Math.round(SOC_X - 110); // 142 px

// Connector stroke colour & width
const LC = 'rgba(255,255,255,0.22)';
const LW = 1.5;

// ─────────────────────────────────────────────────────────────────────────────
// Types & mock data
// ─────────────────────────────────────────────────────────────────────────────

interface AgentNodeData {
  id: string;
  name: string;
  tasksLabel: string;
  currentTask?: string;
  isPending?: boolean;
  milestone?: string;
}

const MANAGER_AGENT: AgentNodeData = {
  id: 'manager',
  name: 'Manager Agent',
  tasksLabel: '3 tasks managing in parallel',
};

const MID_AGENTS: AgentNodeData[] = [
  {
    id: 'social',
    name: 'Social Media Agent',
    tasksLabel: '3 tasks working in parallel',
    currentTask: 'Building Linear Clone',
    milestone: 'Milestone 1',
  },
  {
    id: 'email',
    name: 'Email Marketing Agent',
    tasksLabel: '3 tasks working in parallel',
    currentTask: 'Building Linear Clone',
    isPending: true,
    milestone: 'Milestone 2',
  },
];

/**
 * Generates Ad Campaign leaf nodes.
 *
 * @param count   - number of agents to create
 * @param startId - numeric suffix for the first agent id
 */
function makeLeaves(count: number, startId = 1): AgentNodeData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `ad-${startId + i}`,
    name: 'Ad Campaign Agent',
    tasksLabel: '3 tasks working in parallel',
    currentTask: 'Building Linear Clone',
  }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared UI atoms
// ─────────────────────────────────────────────────────────────────────────────

/** Small green milestone pill rendered above each Tier-1 card. */
function MilestoneBadge({ label }: { label: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-[3px] rounded-full',
        'text-[11px] font-semibold font-urbanist tracking-wide',
        'bg-emerald-500/15 text-emerald-400 border border-emerald-500/25',
      )}
    >
      {label}
    </span>
  );
}

/** Amber "Pending" pill inside the current-task row. */
function PendingBadge() {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-[2px] rounded-full flex-shrink-0',
        'text-[10px] font-semibold font-urbanist',
        'bg-amber-500/15 text-amber-400 border border-amber-500/25',
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
      Pending
    </span>
  );
}

/**
 * Stylised avatar square — gradient background with a robot SVG character
 * and a small status dot in the bottom-right corner.
 *
 * @param tier   - 0 = Manager (purple), 1 = Mid (blue), 2 = Leaf (indigo)
 * @param size   - outer dimensions
 * @param status - colour of the status dot; pass undefined to hide the dot
 */
function AgentAvatar({
  tier,
  size,
  status = 'active',
}: {
  tier: 0 | 1 | 2;
  size: 'lg' | 'md' | 'sm';
  status?: 'active' | 'pending' | 'idle' | undefined;
}) {
  const sizeCls = {
    lg: 'w-12 h-12 rounded-xl',
    md: 'w-11 h-11 rounded-xl',
    sm: 'w-11 h-11 rounded-xl',
  }[size];

  const gradient = [
    'linear-gradient(145deg, #4a2d8a 0%, #221545 100%)',  // Tier-0 — deep purple
    'linear-gradient(145deg, #1e3a6e 0%, #0e1e3a 100%)',  // Tier-1 — navy blue
    'linear-gradient(145deg, #1f2060 0%, #0d0e2b 100%)',  // Tier-2 — indigo
  ][tier];

  const dotColor =
    status === 'active'  ? 'bg-emerald-400' :
    status === 'pending' ? 'bg-amber-400'   : 'bg-white/30';

  return (
    <div className="relative flex-shrink-0">
      <div
        className={cn('flex items-center justify-center overflow-hidden', sizeCls)}
        style={{ background: gradient }}
      >
        {/* Stylised robot/character face SVG */}
        <svg viewBox="0 0 40 40" className="w-[68%] h-[68%]" fill="none">
          {/* Head */}
          <rect x="8" y="12" width="24" height="18" rx="4" fill="rgba(255,255,255,0.22)" />
          {/* Eyes */}
          <circle cx="15.5" cy="20" r="3" fill="rgba(255,255,255,0.9)" />
          <circle cx="24.5" cy="20" r="3" fill="rgba(255,255,255,0.9)" />
          <circle cx="16.5" cy="20" r="1.5" fill="#1a1a2e" />
          <circle cx="25.5" cy="20" r="1.5" fill="#1a1a2e" />
          {/* Mouth */}
          <rect x="14" y="25" width="12" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
          {/* Antenna */}
          <rect x="18" y="7" width="4" height="5" rx="1" fill="rgba(255,255,255,0.25)" />
          <circle cx="20" cy="6" r="2" fill="rgba(255,255,255,0.4)" />
        </svg>
      </div>

      {/* Status dot — bottom-right of avatar */}
      {status && (
        <span
          className={cn(
            'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#16151b]',
            dotColor,
          )}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Card components
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Tier-0 Manager Agent card.
 * Has a 1 px blue gradient border wrapper (matching Figma) and no task row.
 */
function ManagerCard({ agent }: { agent: AgentNodeData }) {
  return (
    /* Gradient border wrapper — 1 px */
    <div
      className="p-px rounded-2xl"
      style={{
        background:
          'linear-gradient(135deg, rgba(99,140,243,1.0) 0%, rgba(75,115,230,0.85) 40%, rgba(50,90,200,0.50) 100%)',
        width: 270,
      }}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-4 py-4 rounded-[15px]',
          'bg-[#16151b]',
        )}
      >
        <AgentAvatar tier={0} size="lg" status={undefined} />
        <div className="flex-1 min-w-0">
          <p className="text-white text-[15px] font-semibold font-urbanist leading-snug">
            {agent.name}
          </p>
          <p className="text-white/40 text-[12px] font-medium font-urbanist mt-0.5 leading-relaxed">
            {agent.tasksLabel}
          </p>
        </div>
        <button
          aria-label="Agent options"
          className="flex-shrink-0 p-1 text-white/30 hover:text-white/70 transition-colors"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}

/**
 * Tier-1 mid-level agent card (Social Media / Email Marketing).
 * Includes milestone badge above, current-task section, optional Pending badge.
 */
function MidAgentCard({ agent }: { agent: AgentNodeData }) {
  return (
    <div className="flex flex-col items-start gap-2" style={{ width: 220 }}>
      {/* Milestone badge above the card */}
      {agent.milestone && <MilestoneBadge label={agent.milestone} />}

      <div
        className={cn(
          'flex flex-col w-full rounded-2xl overflow-hidden',
          'bg-[#16151b] border border-white/[0.10]',
          'shadow-[0_4px_24px_rgba(0,0,0,0.4)]',
        )}
      >
        {/* Avatar + name */}
        <div className="flex items-start gap-2.5 px-3 pt-3 pb-2">
          <AgentAvatar
            tier={1}
            size="md"
            status={agent.isPending ? 'pending' : 'active'}
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-[13px] font-semibold font-urbanist leading-snug truncate">
              {agent.name}
            </p>
            <p className="text-white/35 text-[11px] font-medium font-urbanist mt-0.5 leading-relaxed">
              {agent.tasksLabel}
            </p>
          </div>
          <button
            aria-label="Agent options"
            className="flex-shrink-0 p-0.5 mt-0.5 text-white/25 hover:text-white/70 transition-colors"
          >
            <MoreHorizontal size={14} />
          </button>
        </div>

        {/* Current-task row */}
        {agent.currentTask && (
          <div className="mx-2 mb-2 px-2.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07]">
            <p className="text-white/30 text-[10px] font-medium font-urbanist mb-1 leading-none">
              Currently working on
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-white text-[11px] font-medium font-urbanist truncate">
                  {agent.currentTask}
                </span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                {agent.isPending && <PendingBadge />}
                <ChevronRight size={12} className="text-white/30" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Tier-2 leaf card (Ad Campaign / Social Media agents).
 * Matches MidAgentCard width (220 px = CARD_W) and sits directly below
 * its parent mid-level card, centred at the same x-coordinate.
 */
function LeafAgentCard({ agent }: { agent: AgentNodeData }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl overflow-hidden',
        'bg-[#16151b] border border-white/[0.09]',
        'shadow-[0_2px_16px_rgba(0,0,0,0.35)]',
      )}
    >
      {/* Avatar + name */}
      <div className="flex items-start gap-2.5 px-3 pt-3 pb-2">
        <AgentAvatar tier={2} size="md" status="active" />
        <div className="flex-1 min-w-0">
          <p className="text-white text-[13px] font-semibold font-urbanist leading-snug truncate">
            {agent.name}
          </p>
          <p className="text-white/35 text-[11px] font-medium font-urbanist mt-0.5 leading-relaxed">
            {agent.tasksLabel}
          </p>
        </div>
        <button
          aria-label="Agent options"
          className="flex-shrink-0 p-0.5 mt-0.5 text-white/25 hover:text-white/70 transition-colors"
        >
          <MoreHorizontal size={14} />
        </button>
      </div>

      {/* Current-task row */}
      {agent.currentTask && (
        <div className="mx-2 mb-2 px-2.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07]">
          <p className="text-white/30 text-[10px] font-medium font-urbanist mb-1 leading-none">
            Currently working on
          </p>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              <span className="text-white text-[11px] font-medium font-urbanist truncate">
                {agent.currentTask}
              </span>
            </div>
            <ChevronRight size={12} className="text-white/30 flex-shrink-0" />
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG connector components
//
// Each connector uses a fixed viewBox 0 0 900 H so x-coords map 1-to-1 with
// the 900 px canvas.  "preserveAspectRatio=none" lets the SVG fill whatever
// container it sits in (always 900 px in practice).
//
// A shared <marker> provides the downward arrowhead on branch end-points.
// ─────────────────────────────────────────────────────────────────────────────

/** Arrowhead marker id */
const AH_ID = 'ah';

/**
 * Shared arrowhead marker — a downward-pointing triangle.
 * With orient="auto" the marker rotates so its tip aligns with the path
 * endpoint direction; since all branch paths end going downward, the triangle
 * naturally points down.
 */
function ArrowDefs() {
  return (
    <defs>
      <marker
        id={AH_ID}
        markerWidth="10"
        markerHeight="10"
        refX="10"
        refY="5"
        orient="auto"
      >
        {/* Right-pointing triangle; rotated 90° CW by orient="auto" → points DOWN */}
        <path d="M0,0 L10,5 L0,10 Z" fill="rgba(255,255,255,0.28)" />
      </marker>
    </defs>
  );
}

/**
 * Connector: Manager (x=450) → Social (x=252) + Email (x=648).
 *
 * Uses quadratic Bézier curves (Q command) to produce the Figma-style
 * rounded corners at each bend of the ┌─┐ shape.
 *
 * Path anatomy:
 *  Left branch : MGR_X ↓ (rounded bend left) → SOC_X ↓ (arrowhead)
 *  Right branch: MGR_X ↓ (rounded bend right) → EML_X ↓ (arrowhead)
 *
 * @param startDelay - seconds before the line-draw animation begins
 */
function ConnectorManagerToMid({ startDelay = 0 }: { startDelay?: number }) {
  const H     = 90;
  const splitY = 38;  // y where the branch forks
  const r     = 14;   // corner radius
  const au    = `url(#${AH_ID})`;
  const s     = LC;
  const w     = LW;

  // Left: MGR_X ↓ → round corner left → SOC_X ↓ (arrow)
  const left = [
    `M ${MGR_X} 0`,
    `L ${MGR_X} ${splitY - r}`,
    `Q ${MGR_X} ${splitY} ${MGR_X - r} ${splitY}`,
    `L ${SOC_X + r} ${splitY}`,
    `Q ${SOC_X} ${splitY} ${SOC_X} ${splitY + r}`,
    `L ${SOC_X} ${H}`,
  ].join(' ');

  // Right: continues from the fork point → round corner right → EML_X ↓ (arrow)
  const right = [
    `M ${MGR_X} ${splitY - r}`,
    `Q ${MGR_X} ${splitY} ${MGR_X + r} ${splitY}`,
    `L ${EML_X - r} ${splitY}`,
    `Q ${EML_X} ${splitY} ${EML_X} ${splitY + r}`,
    `L ${EML_X} ${H}`,
  ].join(' ');

  const pathAnim = (extraDelay = 0) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration: 0.45, delay: startDelay + extraDelay, ease: 'easeOut' as const },
      opacity:    { duration: 0.1,  delay: startDelay + extraDelay },
    },
  });

  return (
    <svg
      width={CANVAS_W}
      height={H}
      viewBox={`0 0 ${CANVAS_W} ${H}`}
      fill="none"
      style={{ display: 'block' }}
    >
      <ArrowDefs />
      <motion.path d={left}  stroke={s} strokeWidth={w} markerEnd={au} {...pathAnim(0)} />
      <motion.path d={right} stroke={s} strokeWidth={w} markerEnd={au} {...pathAnim(0.05)} />
    </svg>
  );
}

/**
 * Connector: Social (x=252) + Email (x=648) → 3 leaf columns (x≈146, 450, 754).
 *
 * Anatomy (all corners rounded with Q bezier, r=14):
 *  Social  → bends LEFT  → L1_X ↓ (arrow)
 *  H-bus   → SOC_X ─── EML_X
 *  Center  → L2_X ↓ (arrow)
 *  Email   → bends RIGHT → L3_X ↓ (arrow)
 *
 * @param startDelay - seconds before the line-draw animation begins
 */
function ConnectorMidToLeaves({ startDelay = 0 }: { startDelay?: number }) {
  const H    = 100;
  const busY = 46;
  const r    = 14;
  const au   = `url(#${AH_ID})`;
  const s    = LC;
  const w    = LW;

  // Social drops, bends LEFT at busY, continues to L1_X ↓ (arrow)
  const leftBranch = [
    `M ${SOC_X} 0`,
    `L ${SOC_X} ${busY - r}`,
    `Q ${SOC_X} ${busY} ${SOC_X - r} ${busY}`,
    `L ${L1_X + r} ${busY}`,
    `Q ${L1_X} ${busY} ${L1_X} ${busY + r}`,
    `L ${L1_X} ${H}`,
  ].join(' ');

  // Email drops, bends RIGHT at busY, continues to L3_X ↓ (arrow)
  const rightBranch = [
    `M ${EML_X} 0`,
    `L ${EML_X} ${busY - r}`,
    `Q ${EML_X} ${busY} ${EML_X + r} ${busY}`,
    `L ${L3_X - r} ${busY}`,
    `Q ${L3_X} ${busY} ${L3_X} ${busY + r}`,
    `L ${L3_X} ${H}`,
  ].join(' ');

  // Shared H-bus connecting both drop points at busY
  const hBus = `M ${SOC_X} ${busY} L ${EML_X} ${busY}`;

  // Centre drop from H-bus at L2_X ↓ (arrow)
  const centerDrop = `M ${L2_X} ${busY} L ${L2_X} ${H}`;

  const pathAnim = (extraDelay = 0, duration = 0.45) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay: startDelay + extraDelay, ease: 'easeOut' as const },
      opacity:    { duration: 0.1, delay: startDelay + extraDelay },
    },
  });

  return (
    <svg
      width={CANVAS_W}
      height={H}
      viewBox={`0 0 ${CANVAS_W} ${H}`}
      fill="none"
      style={{ display: 'block' }}
    >
      <ArrowDefs />
      {/* H-bus draws first, then branches fan outward */}
      <motion.path d={hBus}        stroke={s} strokeWidth={w} {...pathAnim(0, 0.25)} />
      <motion.path d={leftBranch}  stroke={s} strokeWidth={w} markerEnd={au} {...pathAnim(0.1)} />
      <motion.path d={centerDrop}  stroke={s} strokeWidth={w} markerEnd={au} {...pathAnim(0.1, 0.3)} />
      <motion.path d={rightBranch} stroke={s} strokeWidth={w} markerEnd={au} {...pathAnim(0.1)} />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────────────

export interface AgentHierarchyViewProps {
  /** Optional additional class names for the outer wrapper */
  className?: string;
  /**
   * Called when the user clicks the back button in the hierarchy header.
   * The parent should collapse the hierarchy and restore the sidebar + gallery.
   */
  onClose?: () => void;
}

/**
 * AgentHierarchyView
 *
 * Full-height scrollable panel that renders the three-tier agent tree.
 * The inner canvas is fixed at CANVAS_W (900 px); on narrow viewports the
 * panel scrolls horizontally without breaking connector geometry.
 *
 * When `onClose` is provided a back-arrow button appears in the title bar,
 * allowing the user to collapse the hierarchy and return to the sidebar+gallery.
 */
export function AgentHierarchyView({ className, onClose }: AgentHierarchyViewProps) {
  const leafRow1 = makeLeaves(3, 1);
  const leafRow2 = makeLeaves(3, 4);

  return (
    <div className={cn('flex flex-col h-full overflow-hidden', className)}>

      {/* ── Title bar ── */}
      <div className="flex items-center justify-between px-6 pt-5 pb-4 flex-shrink-0">
        <div className="flex items-center gap-2.5">
          {/* Back button — collapses hierarchy and restores sidebar */}
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Back to Agent Workspace"
              title="Back to Agent Workspace"
              className="flex items-center justify-center w-7 h-7 rounded-lg text-white/50 hover:text-white hover:bg-white/8 transition-colors"
            >
              <ArrowLeft size={15} strokeWidth={1.8} />
            </button>
          )}
          <LayoutGrid size={16} className="text-white/50" strokeWidth={1.8} />
          <span className="text-white text-[15px] font-semibold font-urbanist tracking-tight">
            Agent Hierarchy
          </span>
        </div>
        <button
          aria-label="View all agents"
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold font-urbanist shadow-[0_0_0_2px_rgba(139,92,246,0.4)]"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          AG
        </button>
      </div>

      {/* ── Scrollable tree canvas ── */}
      <div className="flex-1 overflow-auto px-6 pb-10">
        <div
          className="flex flex-col items-center"
          style={{ width: CANVAS_W, margin: '0 auto' }}
        >

          {/* ── Tier 0: Manager Agent — fades in from above ── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ManagerCard agent={MANAGER_AGENT} />
          </motion.div>

          {/* ── Connector 0 → 1: lines draw themselves after manager appears ── */}
          <ConnectorManagerToMid startDelay={0.25} />

          {/* ── Tier 1: Social Media | Email Marketing — stagger in after connector ── */}
          <div
            className="flex justify-between w-full items-start"
            style={{ paddingLeft: MID_PADDING, paddingRight: MID_PADDING }}
          >
            {MID_AGENTS.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.65 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <MidAgentCard agent={agent} />
              </motion.div>
            ))}
          </div>

          {/* ── Connector 1 → 2: branches fan out after mid-agents land ── */}
          <ConnectorMidToLeaves startDelay={0.88} />

          {/* ── Tier 2, Row 1: 3 Ad Campaign agents — stagger in ── */}
          <div className="grid grid-cols-3 w-full" style={{ gap: LEAF_GAP }}>
            {leafRow1.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 1.25 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <LeafAgentCard agent={a} />
              </motion.div>
            ))}
          </div>

          {/* ── Tier 2, Row 2: 3 more agents — stagger after row 1 ── */}
          <div className="grid grid-cols-3 w-full" style={{ gap: LEAF_GAP, marginTop: LEAF_GAP }}>
            {leafRow2.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: 1.45 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <LeafAgentCard agent={a} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
