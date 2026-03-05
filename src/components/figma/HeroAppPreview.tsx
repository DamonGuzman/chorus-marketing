"use client";

/**
 * HeroAppPreview — two-screen auto-advancing hero preview
 *
 * Sequence:
 *  1. Milestones view (Work In Progress tab) with Output Gallery modal  → 0 s
 *  2. Modal fades out                                                    → 2.5 s
 *  3. Crossfade to Agent Hierarchy view                                  → 4.5 s
 *
 * Canvas: 1440 × 1044 px (exact Figma frame), CSS-scaled to `displayWidth`.
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  LayoutGrid, MessageSquare, Hammer, GitMerge, BookOpen,
  Sliders, MoreHorizontal, Plus, BarChart3, Bot, CheckSquare,
  Network, ChevronRight, PanelRight, Users, X, Clock, Check,
} from "lucide-react";
import { CampaignMilestonesView } from "./CampaignMilestonesView";
import { AgentWorkspaceHeader } from "./AgentWorkspaceHeader";
import { AgentWorkspaceSidebar } from "./AgentWorkspaceSidebar";
import type { SubAgentData, ManagerAgentData } from "./AgentWorkspaceSidebar";

// ─────────────────────────────────────────────────────────────────────────────
// Canvas / geometry
// ─────────────────────────────────────────────────────────────────────────────

const CANVAS_W = 1440;
const CANVAS_H = 1044;

const MGR    = { x: 721,  y: 155, w: 320, h: 80  };
const SOC    = { x: 540,  y: 339, w: 288, h: 148 };
const EML    = { x: 952,  y: 337, w: 288, h: 148 };
const LEAF_W = 288;
const LEAF_H = 148;
const ROW1   = [{ x: 366, y: 585 }, { x: 693, y: 585 }, { x: 1096, y: 585 }];
const ROW2   = [{ x: 363, y: 742 }, { x: 690, y: 742 }, { x: 1093, y: 742 }];

const MGR_CX = MGR.x + MGR.w / 2;
const SOC_CX = SOC.x + SOC.w / 2;
const EML_CX = EML.x + EML.w / 2;
const L_CX   = ROW1.map((l) => l.x + LEAF_W / 2);
const BUS1_Y = 279;
const BUS2_Y = 534;
const CR     = 12;
const LC     = "rgba(255,255,255,0.18)";
const LW     = 1.5;

const mgr_b = MGR.y + MGR.h;
const soc_b = SOC.y + SOC.h;
const eml_b = EML.y + EML.h;
const l1_b  = ROW1[0].y + LEAF_H;
const lr2_t = ROW2[0].y;

const P_C1L = `M ${MGR_CX} ${mgr_b} L ${MGR_CX} ${BUS1_Y-CR} Q ${MGR_CX} ${BUS1_Y} ${MGR_CX-CR} ${BUS1_Y} L ${SOC_CX+CR} ${BUS1_Y} Q ${SOC_CX} ${BUS1_Y} ${SOC_CX} ${BUS1_Y+CR} L ${SOC_CX} ${SOC.y}`;
const P_C1R = `M ${MGR_CX} ${BUS1_Y-CR} Q ${MGR_CX} ${BUS1_Y} ${MGR_CX+CR} ${BUS1_Y} L ${EML_CX-CR} ${BUS1_Y} Q ${EML_CX} ${BUS1_Y} ${EML_CX} ${BUS1_Y+CR} L ${EML_CX} ${EML.y}`;
const P_SOC = `M ${SOC_CX} ${soc_b} L ${SOC_CX} ${BUS2_Y}`;
const P_EML = `M ${EML_CX} ${eml_b} L ${EML_CX} ${BUS2_Y}`;
const P_BUS = `M ${SOC_CX} ${BUS2_Y} L ${EML_CX} ${BUS2_Y}`;
const P_C2L = `M ${SOC_CX} ${BUS2_Y} L ${L_CX[0]+CR} ${BUS2_Y} Q ${L_CX[0]} ${BUS2_Y} ${L_CX[0]} ${BUS2_Y+CR} L ${L_CX[0]} ${ROW1[0].y}`;
const P_C2M = `M ${L_CX[1]} ${BUS2_Y} L ${L_CX[1]} ${ROW1[1].y}`;
const P_C2R = `M ${EML_CX} ${BUS2_Y} L ${L_CX[2]-CR} ${BUS2_Y} Q ${L_CX[2]} ${BUS2_Y} ${L_CX[2]} ${BUS2_Y+CR} L ${L_CX[2]} ${ROW1[2].y}`;
const P_R1R2 = L_CX.map((cx) => `M ${cx} ${l1_b} L ${cx} ${lr2_t}`);

// ─────────────────────────────────────────────────────────────────────────────
// Avatar images
// ─────────────────────────────────────────────────────────────────────────────

const AVATAR_SRCS: Record<string, string> = {
  manager: "/images/figma/image 41.svg",
  social:  "/images/figma/image 41 (2).svg",
  email:   "/images/figma/image 41 (3).svg",
  ad:      "/images/figma/image 41 (4).svg",
};

function AgentAvatar({ tier, variant }: { tier: 0 | 1 | 2; variant?: string }) {
  const src = variant ? AVATAR_SRCS[variant] : undefined;
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt="Agent" className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" />
    );
  }
  const bg = [
    "linear-gradient(145deg,#4a2d8a,#221545)",
    "linear-gradient(145deg,#1e3a6e,#0e1e3a)",
    "linear-gradient(145deg,#1f2060,#0d0e2b)",
  ][tier];
  return (
    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: bg }}>
      <svg viewBox="0 0 40 40" className="w-[68%] h-[68%]" fill="none">
        <rect x="8" y="12" width="24" height="18" rx="4" fill="rgba(255,255,255,0.22)" />
        <circle cx="15.5" cy="20" r="3"   fill="rgba(255,255,255,0.9)" />
        <circle cx="24.5" cy="20" r="3"   fill="rgba(255,255,255,0.9)" />
        <circle cx="16.5" cy="20" r="1.5" fill="#1a1a2e" />
        <circle cx="25.5" cy="20" r="1.5" fill="#1a1a2e" />
        <rect x="14" y="25" width="12" height="2" rx="1" fill="rgba(255,255,255,0.5)" />
        <rect x="18" y="7"  width="4"  height="5" rx="1" fill="rgba(255,255,255,0.25)" />
        <circle cx="20" cy="6" r="2" fill="rgba(255,255,255,0.4)" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared atoms
// ─────────────────────────────────────────────────────────────────────────────

function StatusDot({ pending }: { pending?: boolean }) {
  return (
    <span className={cn("w-2 h-2 rounded-full border border-white flex-shrink-0",
      pending ? "bg-amber-400" : "bg-green-700")} />
  );
}

function TaskRow({ pending }: { pending?: boolean }) {
  return (
    <div className="pl-2 rounded-[10px] flex items-center gap-2 min-h-[48px]">
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-white/40 text-[10px] font-normal font-urbanist">Currently working on</span>
        <div className="flex items-center gap-1.5">
          <span className="w-[5px] h-[5px] rounded-full bg-purple-400 flex-shrink-0" />
          <span className="text-white/70 text-xs font-semibold font-urbanist">Building Linear Clone</span>
        </div>
      </div>
      {pending && (
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-[50px] flex-shrink-0"
          style={{ background: "rgba(220,38,38,0.05)", outline: "0.58px solid rgb(251,146,60)" }}>
          <span className="w-[5px] h-[5px] bg-orange-400 rounded-full" />
          <span className="text-white/70 text-[10px] font-bold font-urbanist">Pending</span>
        </div>
      )}
      <ChevronRight size={12} className="text-white/25 flex-shrink-0" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Hierarchy agent cards
// ─────────────────────────────────────────────────────────────────────────────

function ManagerCard() {
  return (
    <div className="absolute flex items-center gap-3 p-4 rounded-2xl"
      style={{ left: MGR.x, top: MGR.y, width: MGR.w, height: MGR.h,
        background: "#0d0c18", boxShadow: "10px 10px 15px rgba(0,0,0,0.10)",
        outline: "1px solid rgba(14,165,233,0.9)" }}>
      <AgentAvatar tier={0} variant="manager" />
      <StatusDot />
      <div>
        <p className="text-white text-sm font-bold font-urbanist leading-6">Manager Agent</p>
        <p className="text-white/40 text-xs font-normal font-urbanist">3 tasks managing in parallel</p>
      </div>
    </div>
  );
}

function MidCard({ x, y, name, pending, variant }: { x: number; y: number; name: string; pending?: boolean; variant?: string }) {
  return (
    <div className="absolute pl-4 pr-5 pt-4 pb-5 rounded-2xl flex flex-col gap-3.5"
      style={{ left: x, top: y, width: SOC.w, background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        ...(pending ? { outline: "0.81px solid rgb(251,146,60)" } : {}) }}>
      <div className="flex items-center gap-3">
        <AgentAvatar tier={1} variant={variant} />
        <StatusDot pending={pending} />
        <div className="min-w-0">
          <p className="text-white text-sm font-bold font-urbanist leading-6 truncate">{name}</p>
          <p className="text-white/40 text-xs font-normal font-urbanist">3 tasks working in parallel</p>
        </div>
      </div>
      <TaskRow pending={pending} />
    </div>
  );
}

function LeafCard({ x, y }: { x: number; y: number }) {
  return (
    <div className="absolute pl-4 pr-5 pt-4 pb-5 rounded-2xl flex flex-col gap-3.5"
      style={{ left: x, top: y, width: LEAF_W, background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)" }}>
      <div className="flex items-center gap-3">
        <AgentAvatar tier={2} variant="ad" />
        <StatusDot />
        <div className="min-w-0">
          <p className="text-white text-sm font-bold font-urbanist leading-6 truncate">Ad Campaign Agent</p>
          <p className="text-white/40 text-xs font-normal font-urbanist">3 tasks working in parallel</p>
        </div>
      </div>
      <TaskRow />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Milestone badge
// ─────────────────────────────────────────────────────────────────────────────

function MilestoneBadge({ label, x, y }: { label: string; x: number; y: number }) {
  return (
    <div className="absolute h-5 px-1.5 bg-green-700/20 rounded flex items-center gap-1.5" style={{ left: x, top: y }}>
      <span className="text-green-300 text-[10px] font-semibold font-urbanist">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG connector overlay (animated path-draw)
// ─────────────────────────────────────────────────────────────────────────────

const AH_ID = "hap-arrow";

function ArrowDefs() {
  return (
    <defs>
      <marker id={AH_ID} markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
        <path d="M0,0 L10,5 L0,10 Z" fill="rgba(255,255,255,0.28)" />
      </marker>
    </defs>
  );
}

function pathAnim(delay: number, duration = 0.45) {
  return {
    initial:    { pathLength: 0, opacity: 0 },
    animate:    { pathLength: 1, opacity: 1 },
    transition: {
      pathLength: { duration, delay, ease: "easeOut" as const },
      opacity:    { duration: 0.1, delay },
    },
  };
}

const AU = `url(#${AH_ID})`;

function Connectors() {
  return (
    <svg className="absolute inset-0 pointer-events-none" width={CANVAS_W} height={CANVAS_H}
      viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} fill="none">
      <ArrowDefs />
      <motion.path d={P_C1L} stroke={LC} strokeWidth={LW} markerEnd={AU} {...pathAnim(0.25)} />
      <motion.path d={P_C1R} stroke={LC} strokeWidth={LW} markerEnd={AU} {...pathAnim(0.30)} />
      <motion.path d={P_SOC} stroke={LC} strokeWidth={LW} {...pathAnim(0.88, 0.25)} />
      <motion.path d={P_EML} stroke={LC} strokeWidth={LW} {...pathAnim(0.88, 0.25)} />
      <motion.path d={P_BUS} stroke={LC} strokeWidth={LW} {...pathAnim(0.88, 0.25)} />
      <motion.path d={P_C2L} stroke={LC} strokeWidth={LW} markerEnd={AU} {...pathAnim(0.98)} />
      <motion.path d={P_C2M} stroke={LC} strokeWidth={LW} markerEnd={AU} {...pathAnim(0.98, 0.30)} />
      <motion.path d={P_C2R} stroke={LC} strokeWidth={LW} markerEnd={AU} {...pathAnim(0.98)} />
      {P_R1R2.map((d, i) => (
        <motion.path key={i} d={d} stroke={LC} strokeWidth={LW} {...pathAnim(1.45 + i * 0.07, 0.2)} />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar — icon rail
// ─────────────────────────────────────────────────────────────────────────────

const NAV = [
  { icon: LayoutGrid,     label: "Workspace\nStudio", active: true  },
  { icon: MessageSquare,  label: "Chat",              active: false },
  { icon: Hammer,         label: "Build",             active: false },
  { icon: GitMerge,       label: "Integration",       active: false },
  { icon: BookOpen,       label: "KB",                active: false },
  { icon: Sliders,        label: "Control",           active: false },
  { icon: MoreHorizontal, label: "More",              active: false },
];

function IconRail() {
  return (
    <div className="flex flex-col justify-between items-center pt-3"
      style={{ width: 64, flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.05)", height: "100%" }}>
      <div className="flex flex-col items-center gap-4 w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/Frame 236317.svg" alt="Logo"
          className="w-7 h-7 rounded-[30px] flex-shrink-0 object-cover" />
        {NAV.map(({ icon: Icon, label, active }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 w-full">
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center",
              active && "outline outline-1 outline-white/[0.05]")}
              style={active ? { background: "rgba(255,255,255,0.05)" } : {}}>
              <Icon size={active ? 18 : 16} strokeWidth={1.6}
                className={active ? "text-[#a78bfa]" : "text-white/30"} />
            </div>
            <span className={cn("text-[8.5px] font-medium font-urbanist text-center leading-tight whitespace-pre-line",
              active ? "text-[#a78bfa]" : "text-white/30")}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="pb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/figma/image 19 (2).svg" alt="User"
          className="w-9 h-9 rounded-full object-cover" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar — workspace list
// ─────────────────────────────────────────────────────────────────────────────

const WS = [
  { label: "Marketing Campaign",  color: "#22c55e", active: false, icon: "/images/figma/stars (1).svg"  },
  { label: "Product Development", color: "#ef4444", active: true,  icon: "/images/figma/diagram.svg"    },
  { label: "Sales Outreach",      color: "#3b82f6", active: false, icon: "/images/figma/pie-chart.svg"  },
  { label: "SEO Optimization",    color: "#f59e0b", active: false, icon: "/images/figma/pie-chart.svg"  },
  { label: "Content Creation",    color: "#8b5cf6", active: false, icon: "/images/figma/note.svg"       },
];

function WorkspaceList() {
  return (
    <div className="pt-3 flex flex-col gap-3 px-1">
      <div className="w-48 h-9 px-2.5 py-1.5 rounded-3xl flex items-center justify-center gap-2 flex-shrink-0"
        style={{ background: "#0d0c18", boxShadow: "0px 1px 9px rgba(139,77,234,0.32)", outline: "0.5px solid rgb(139,92,246)" }}>
        <Plus size={13} strokeWidth={2.5} className="text-violet-400" />
        <span className="text-violet-400 text-sm font-semibold font-urbanist">New Workspace</span>
      </div>
      <div className="flex flex-col gap-2">
        {WS.map(({ label, color, active, icon }) => (
          <div key={label} className="w-52 h-10 pl-2.5 pr-4 relative rounded-xl flex items-center gap-2.5 overflow-hidden"
            style={active ? {
              background: "radial-gradient(ellipse 96.93% 776.85% at 38.61% 6.25%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.12) 100%)",
              outline: "0.5px solid rgba(255,255,255,0.25)",
            } : {}}>
            <div className="w-6 h-6 rounded-[30px] flex-shrink-0 flex items-center justify-center overflow-hidden"
              style={{ background: color }}>
              {icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={icon} alt="" className="w-full h-full object-cover" />
              )}
            </div>
            <span className={cn("text-sm font-urbanist truncate", active ? "text-white font-bold" : "text-white/70 font-medium")}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FigmaSidebar({ disableBlur = false }: { disableBlur?: boolean }) {
  return (
    <div className="absolute rounded-2xl overflow-hidden flex"
      style={{ left: 10, top: 10, width: 320, height: 1022,
        background: "radial-gradient(ellipse 52.92% 85.55% at 39.01% 48.24%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 100%)",
        boxShadow: "0px 64px 64px -32px rgba(255,255,255,0.56)",
        backdropFilter: disableBlur ? "none" : "blur(80px)",
        WebkitBackdropFilter: disableBlur ? "none" : "blur(80px)" }}>
      <IconRail />
      <WorkspaceList />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Shared header
// ─────────────────────────────────────────────────────────────────────────────

const TABS = [
  { id: "work",        label: "Work In progress", icon: Bot          },
  { id: "apps",        label: "Apps & Work",       icon: CheckSquare  },
  { id: "knowledge",   label: "Knowledge Base",    icon: BookOpen     },
  { id: "integration", label: "Integration",       icon: Network      },
  { id: "dashboard",   label: "Dashboard",         icon: BarChart3    },
] as const;

function FigmaHeader({ activeTab, onTabChange, section = "hierarchy" }:
  { activeTab: string; onTabChange: (t: string) => void; section?: "hierarchy" | "milestones" }) {
  return (
    <>
      <div className="absolute" style={{ left: 343, top: 18 }}>
        <p className="text-white text-lg font-bold font-urbanist leading-tight">Marketing Campaign Q1</p>
        <p className="text-white/40 text-xs font-normal font-urbanist leading-6 mt-1">
          Launch complete product marketing campaign
        </p>
      </div>

      <div className="absolute flex items-center gap-2.5" style={{ left: 645, top: 22, width: 610 }}>
        {TABS.map(({ id, label, icon: Icon }) => {
          const active = activeTab === id;
          return (
            <button key={id} onClick={() => onTabChange(id)}
              className={cn("h-7 px-2.5 py-2 rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap",
                active ? "text-white" : "text-white/40 hover:text-white/60")}
              style={{ outline: active ? "0.5px solid white" : "0.5px solid rgba(255,255,255,0.25)" }}>
              <Icon size={11} strokeWidth={1.6} />
              <span className="text-[11px] font-semibold font-urbanist leading-4">{label}</span>
            </button>
          );
        })}
      </div>

      <div className="absolute flex items-center gap-2.5" style={{ right: 48, top: 20 }}>
        <button className="h-9 px-5 rounded-[50px] flex items-center gap-2 text-white text-sm font-bold font-urbanist"
          style={{ background: "linear-gradient(-65.92deg, rgb(180,138,251) 14.59%, rgb(145,85,237) 88.44%)",
            boxShadow: "0px 0px 8px rgba(175,130,249,0.63)" }}>
          <Plus size={16} strokeWidth={2.5} />Build
        </button>
        <MoreHorizontal size={20} className="text-white/40" />
      </div>

      <div className="absolute" style={{ left: 317, top: 82, width: 1123, height: 1, background: "rgba(255,255,255,0.10)" }} />

      <div className="absolute flex items-center justify-between" style={{ left: 343, top: 99, width: 1074 }}>
        <div className="flex items-center gap-3">
          <PanelRight size={16} className="text-white/40" strokeWidth={1.6} />
          <span className="text-white text-base font-bold font-urbanist">
            {section === "milestones" ? "Milestones" : "Agent Hierarchy"}
          </span>
        </div>
        {section === "hierarchy" ? (
          <button className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(168,85,247,0.40)", outline: "1px solid rgb(168,85,247)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/figma/hierarchy-square-02.svg" alt="Agent Hierarchy" className="w-5 h-5 object-contain" />
          </button>
        ) : (
          <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
            <Users size={16} className="text-white/50" strokeWidth={1.6} />
          </button>
        )}
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Milestones view — phase cards
// ─────────────────────────────────────────────────────────────────────────────

const PHASE_DATA = [
  { id: 1, title: "Phase 1: Pre-Launch Strategy", status: "completed",  task: "Building Linear Clone",         actions: 0 },
  { id: 2, title: "Phase 2: Content & Marketing",  status: "in-progress", task: "Building Linear Clone",         actions: 0 },
  { id: 3, title: "Phase 3: Launch Execution",     status: "in-progress", task: "Review LinkedIn post schedule", actions: 3 },
  { id: 4, title: "Phase 4: Content & Marketing",  status: "in-progress", task: "Building Linear Clone",         actions: 0 },
  { id: 5, title: "Phase 5: Launch Execution",     status: "in-queue",    task: "",                              actions: 0 },
];
const PHASE_Y = [149, 348, 542, 736, 930];
const PHASE_X = 345;
const PHASE_W = 1072;

const INTEGRATION_COLORS = ["#4a9eff", "#9c27b0", "#2196f3"];
const AGENT_IMGS = [
  "/images/figma/image 41.svg",
  "/images/figma/image 41 (2).svg",
  "/images/figma/image 41 (3).svg",
  "/images/figma/image 41 (4).svg",
];

function IntegrationCircles() {
  return (
    <div className="flex items-center">
      {INTEGRATION_COLORS.map((color, i) => (
        <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0f0e14] -ml-1 first:ml-0 flex-shrink-0"
          style={{ background: color }} />
      ))}
    </div>
  );
}

function AgentCircles() {
  return (
    <div className="flex items-center gap-0.5">
      {AGENT_IMGS.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} className="w-5 h-5 rounded-full border-2 border-[#0f0e14] -ml-1 first:ml-0 object-cover flex-shrink-0" alt="" />
      ))}
      <span className="text-white/40 text-[10px] font-bold font-urbanist ml-1">+3</span>
    </div>
  );
}

function PhaseStatusBadge({ status, progress }: { status: string; progress?: number }) {
  if (status === "completed") {
    return (
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Check size={9} strokeWidth={3} className="text-white" />
        </div>
        <span className="text-white text-xs font-bold font-urbanist">Completed</span>
      </div>
    );
  }
  if (status === "in-progress") {
    return (
      <div className="flex items-center gap-1">
        <span className="text-white text-xs font-semibold font-urbanist">In Progress</span>
        <span className="text-white/40 text-xs font-semibold font-urbanist">({progress ?? 70}%)</span>
      </div>
    );
  }
  return <span className="text-white/50 text-xs font-semibold font-urbanist">In Queue</span>;
}

function PhaseCard({ phase, y }: { phase: typeof PHASE_DATA[0]; y: number }) {
  const isQueue = phase.status === "in-queue";
  return (
    <div className="absolute pl-4 pr-3 pt-4 pb-3 rounded-2xl flex gap-5"
      style={{ left: PHASE_X, top: y, width: PHASE_W, background: "rgba(255,255,255,0.04)", opacity: isQueue ? 0.6 : 1 }}>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Title + status */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-base font-extrabold font-urbanist leading-6">{phase.title}</span>
            <PhaseStatusBadge status={phase.status} />
          </div>

          {/* Meta row */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <span className="text-white/40 text-xs font-semibold font-urbanist">Integration :</span>
                <IntegrationCircles />
              </div>
              {!isQueue && (
                <div className="flex items-center gap-1.5">
                  <span className="text-white/40 text-xs font-semibold font-urbanist">Agents :</span>
                  <AgentCircles />
                </div>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-normal font-urbanist">
              <Clock size={12} strokeWidth={1.5} />
              1 hr 30 mins
            </div>
          </div>
        </div>

        {/* Current task row */}
        {phase.task && (
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1.5">
              <span className="text-white/40 text-[10px] font-normal font-urbanist">Currently working on</span>
              <div className="flex items-center gap-1.5">
                {phase.actions > 0 ? (
                  <div className="w-3.5 h-3.5 rounded-full border border-red-500 flex-shrink-0" />
                ) : (
                  <span className="w-[5px] h-[5px] rounded-full bg-purple-400 flex-shrink-0" />
                )}
                <span className="text-white/70 text-xs font-semibold font-urbanist">{phase.task}</span>
              </div>
            </div>
            {phase.actions > 0 ? (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-red-600 rounded-xl text-white text-sm font-bold font-urbanist flex-shrink-0">
                <div className="w-3 h-3 rounded-full border border-white flex-shrink-0" />
                {phase.actions} Actions
                <ChevronRight size={13} />
              </div>
            ) : (
              <ChevronRight size={12} className="text-white/25 flex-shrink-0" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Output Gallery modal overlay
// ─────────────────────────────────────────────────────────────────────────────

function OutputGalleryModal() {
  return (
    <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.80)" }}>
      <div className="absolute flex flex-col gap-6 p-7 rounded-3xl overflow-hidden"
        style={{ left: 369, top: 132, width: 746,
          background: "#18171f",
          boxShadow: "0px 0px 55px rgba(0,0,0,1)",
          outline: "1px solid rgba(255,255,255,0.10)" }}>

        {/* Header */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-white text-xl font-bold font-urbanist leading-8">Output Gallery </span>
              <span className="text-white/40 text-xl font-semibold font-urbanist leading-8">
                #Phase 1: Pre-Launch Strategy
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-xl font-semibold font-urbanist">1/7</span>
              <X size={18} className="text-white/40" />
            </div>
          </div>
          <div className="h-px bg-white/10 w-full" />
        </div>

        {/* Image area */}
        <div className="w-full rounded-2xl overflow-hidden" style={{ height: 400 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/figma/image 1477.svg"
            alt="Phase 1: Pre-Launch Strategy preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4 p-2.5">
            <div className="px-2 py-1.5 bg-white/[0.04] rounded-lg border border-white/10 flex items-center gap-1.5 self-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/figma/image 41 (4).svg" className="w-6 h-6 rounded-xl object-cover" alt="" />
              <span className="text-white/70 text-xs font-semibold font-urbanist">Content Creation agent</span>
            </div>
            <div>
              <p className="text-white text-lg font-bold font-urbanist">Marketing Login page Q1</p>
              <p className="text-white/40 text-xs font-normal font-urbanist leading-6 mt-1">
                Launch complete product marketing campaign
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <button className="w-10 h-10 rounded-[50px] flex items-center justify-center"
              style={{ background: "#0d0c18" }}>
              <ChevronRight size={14} className="text-white/40 rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-[50px] flex items-center justify-center"
              style={{ background: "linear-gradient(to left, #a78bfa, #8b5cf6)" }}>
              <ChevronRight size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Screen 2 — Agent Workspace view (matches screenshot with sidebar + gallery)
// ─────────────────────────────────────────────────────────────────────────────

const WS_MANAGER: ManagerAgentData = { name: "Manager Agent", tasksCount: 3, avatar: "/images/figma/image 41.svg" };

const WS_AGENTS: SubAgentData[] = [
  { id: "sa-1", name: "Social Media Agent",    tasksCount: 3, currentTask: "Building Linear Clone",  status: "active",  avatar: "/images/figma/image 41 (2).svg" },
  { id: "sa-2", name: "Email Marketing Agent", tasksCount: 3, currentTask: "Building Linear Clone",  status: "pending", avatar: "/images/figma/image 41 (3).svg" },
  { id: "sa-3", name: "Ad Campaign Agent",     tasksCount: 3, currentTask: "Building Linear Clone",  status: "active",  avatar: "/images/figma/image 41 (4).svg" },
  { id: "sa-4", name: "Social Media Agent",    tasksCount: 3, currentTask: "Building Linear Clone",  status: "active",  avatar: "/images/figma/image 41 (2).svg" },
];

const GALLERY_IMGS = [
  "/images/figma/image 37 (1).svg", "/images/figma/image 37 (2).svg", "/images/figma/image 37 (3).svg",
  "/images/figma/image 38 (1).svg", "/images/figma/image 38 (2).svg", "/images/figma/image 38 (3).svg",
  "/images/figma/image 37 (4).svg", "/images/figma/image 37 (5).svg", "/images/figma/image 38 (4).svg",
];

const GALLERY_TABS = [
  { id: "output", label: "Output Gallery", icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="7.5" y="1" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="7.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="7.5" y="7.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg> },
  { id: "tasks",  label: "Tasks",          icon: <CheckSquare size={13} strokeWidth={1.8} /> },
  { id: "files",  label: "Files",          icon: <BookOpen    size={13} strokeWidth={1.8} /> },
  { id: "integration", label: "Integration", icon: <GitMerge size={13} strokeWidth={1.8} /> },
];

function GalleryCard({ src }: { src: string }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-[#111115] border border-white/[0.07]">
      <div className="h-44 p-3">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#1c1c24] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-4 pb-4">
        <p className="text-white text-sm font-bold font-urbanist">Music Player</p>
        <p className="text-white/40 text-xs font-medium font-urbanist mt-1 line-clamp-1">Team communication and collaboration platform</p>
        <p className="text-white/30 text-xs font-medium font-urbanist mt-2">Updated Jan 15</p>
      </div>
    </div>
  );
}

function HeroWorkspaceView() {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0c0c10]">
      <AgentWorkspaceHeader title="Phase 1: Pre-Launch Strategy" actionsRequired={3} />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Left: agent sidebar */}
        <AgentWorkspaceSidebar
          manager={WS_MANAGER}
          subAgents={WS_AGENTS}
          selectedAgentId={selectedAgent ?? undefined}
          onSelectAgent={setSelectedAgent}
          className="border-r border-white/10"
        />

        {/* Right: output gallery */}
        <div className="flex flex-col flex-1 min-h-0 overflow-hidden bg-[#0f0f13]">
          {/* Tab bar */}
          <div className="flex items-center gap-1 px-4 pt-3 border-b border-white/10 shrink-0">
            {GALLERY_TABS.map((tab, i) => (
              <button key={tab.id}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-xs font-semibold font-urbanist border-b-2 -mb-px transition-colors",
                  i === 0 ? "text-white border-white" : "text-white/40 border-transparent hover:text-white/60",
                )}>
                {tab.icon}
                {tab.label}
              </button>
            ))}
            <div className="ml-auto pb-2">
              <button className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-colors">
                <MessageSquare size={15} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-3 gap-4 p-4">
              {GALLERY_IMGS.map((src, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}>
                  <GalleryCard src={src} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

interface HeroAppPreviewProps {
  displayWidth?: number;
  className?: string;
}

export function HeroAppPreview({ displayWidth = 1100, className }: HeroAppPreviewProps) {
  const scale         = displayWidth / CANVAS_W;
  const displayHeight = CANVAS_H * scale;

  const containerRef = useRef<HTMLDivElement>(null);
  const [view,      setView]      = useState<"milestones" | "workspace" | "hierarchy">("milestones");
  const [showModal, setShowModal] = useState(true);
  const [activeTab, setActiveTab] = useState("work");
  const [isVisible, setIsVisible] = useState(true);

  // Pause the loop when scrolled off-screen to avoid scroll jank
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // don't run timers while off-screen

    let timers: ReturnType<typeof setTimeout>[] = [];

    function startCycle() {
      setView("milestones");
      setShowModal(true);

      timers = [
        setTimeout(() => setShowModal(false),   2500),
        setTimeout(() => setView("workspace"),  4500),
        setTimeout(() => setView("hierarchy"),  9000),
        setTimeout(() => startCycle(),          13000),
      ];
    }

    startCycle();
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div ref={containerRef} className={cn("relative", className)} style={{ width: displayWidth, height: displayHeight }}>
      <div className="relative overflow-hidden rounded-2xl"
        style={{ width: CANVAS_W, height: CANVAS_H,
          transformOrigin: "top left", transform: `scale(${scale})`,
          background: "#080812",
          willChange: "transform",
          backfaceVisibility: "hidden" }}>

        {/* ── Sidebar always visible; header only on milestone + hierarchy screens ── */}
        <FigmaSidebar disableBlur={scale < 0.5} />
        {view !== "workspace" && (
          <FigmaHeader
            activeTab={activeTab}
            onTabChange={setActiveTab}
            section={view === "milestones" ? "milestones" : "hierarchy"}
          />
        )}

        {/* ── Animated content area ── */}
        <AnimatePresence mode="wait">

          {view === "workspace" ? (
            /* ── Screen 2: Agent Workspace ── */
            <motion.div key="workspace" className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>
              {/* Workspace covers full canvas minus sidebar */}
              <div className="absolute overflow-hidden"
                style={{ left: 333, top: 0, width: CANVAS_W - 333, height: CANVAS_H }}>
                <HeroWorkspaceView />
              </div>
            </motion.div>

          ) : view === "milestones" ? (
            <motion.div key="milestones" className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}>

              {/* CampaignMilestonesView — starts below shared FigmaHeader (y≈135) */}
              <div
                className="absolute overflow-hidden"
                style={{ left: 333, top: 135, width: CANVAS_W - 333, height: CANVAS_H - 135 }}
              >
                <CampaignMilestonesView hideHeader />
              </div>

              {/* Output Gallery modal */}
              <AnimatePresence>
                {showModal && (
                  <motion.div key="modal" className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}>
                    <OutputGalleryModal />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          ) : (

            <motion.div key="hierarchy" className="absolute inset-0"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}>

              <Connectors />

              {/* Milestone badges */}
              {[{ label: "Milestone 1", x: 545, y: 316 }, { label: "Milestone 2", x: 1169, y: 310 }]
                .map(({ label, x, y }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}>
                    <MilestoneBadge label={label} x={x} y={y} />
                  </motion.div>
                ))}

              {/* Manager */}
              <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}>
                <ManagerCard />
              </motion.div>

              {/* Tier-1 */}
              {[
                { x: SOC.x, y: SOC.y, name: "Social Media Agent",    pending: false, variant: "social" },
                { x: EML.x, y: EML.y, name: "Email Marketing Agent", pending: true,  variant: "email"  },
              ].map(({ x, y, name, pending, variant }, i) => (
                <motion.div key={name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.65 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}>
                  <MidCard x={x} y={y} name={name} pending={pending} variant={variant} />
                </motion.div>
              ))}

              {/* Leaf row 1 */}
              {ROW1.map((pos, i) => (
                <motion.div key={`r1-${pos.x}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 1.25 + i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}>
                  <LeafCard x={pos.x} y={pos.y} />
                </motion.div>
              ))}

              {/* Leaf row 2 — rises from below canvas */}
              {ROW2.map((pos, i) => (
                <motion.div key={`r2-${pos.x}`}
                  initial={{ opacity: 0, y: CANVAS_H - pos.y + 40 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 1.45 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}>
                  <LeafCard x={pos.x} y={pos.y} />
                </motion.div>
              ))}

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
