# Native Scroll Restoration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore native browser scrolling site-wide while preserving the existing scroll-driven animation hooks.

**Architecture:** Replace the current global `Lenis`-backed scroll provider with a native window-scroll event bus. Keep the existing `SmoothScroll`, `useScrollCallback`, and `useScrollY` entry points so the rest of the app can continue consuming scroll state without global scroll interception.

**Tech Stack:** Next.js 16, React 19, TypeScript, Vitest, Testing Library

---

### Task 1: Add regression test infrastructure for scroll hooks

**Files:**
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `src/components/ui/__tests__/SmoothScroll.test.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`

**Step 1: Write the failing test**

Write tests that mount `SmoothScroll` with a small probe component and assert:

- native `scroll` dispatch invokes `useScrollCallback`
- `useScrollY` reports the updated `window.scrollY`

**Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/ui/__tests__/SmoothScroll.test.tsx`

Expected: FAIL because the current `Lenis`-based provider does not react to native `scroll` events.

**Step 3: Add the minimal test runner setup**

Install and configure Vitest, jsdom, and Testing Library so the regression test can run in a DOM environment.

**Step 4: Run test to verify it still fails for the expected reason**

Run: `npx vitest run src/components/ui/__tests__/SmoothScroll.test.tsx`

Expected: FAIL on the behavior assertion, not on missing tooling.

### Task 2: Replace `Lenis` with a native scroll provider

**Files:**
- Modify: `src/components/ui/SmoothScroll.tsx`
- Modify: `src/components/ui/index.ts`
- Modify: `src/app/layout.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`

**Step 1: Write the minimal implementation**

Update `SmoothScroll` to:

- attach a passive window `scroll` listener once
- fan out updates to subscribers
- source scroll position from `window.scrollY`
- remove `Lenis` entirely

**Step 2: Run the regression test to verify it passes**

Run: `npx vitest run src/components/ui/__tests__/SmoothScroll.test.tsx`

Expected: PASS

**Step 3: Remove the unused dependency**

Delete the `lenis` dependency from the package manifest and lockfile.

**Step 4: Run repo verification**

Run:

- `npm run lint`
- `npm run build`
- `npx vitest run src/components/ui/__tests__/SmoothScroll.test.tsx`

Expected:

- lint exits 0
- build exits 0
- regression tests pass
