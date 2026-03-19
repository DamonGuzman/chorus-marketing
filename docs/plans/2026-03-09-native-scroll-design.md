# Native Scroll Design

## Goal

Restore native browser scrolling across the site and remove the global scroll-capture behavior, while preserving existing components that react to scroll position.

## Current State

The root layout mounts `SmoothScroll`, which currently instantiates `Lenis` globally. That changes the feel of wheel and touch scrolling for every page. Several components depend on `useScrollCallback` to update animation state, but they do not require smooth-scroll interception. They only need a reliable stream of scroll updates.

## Options Considered

### 1. Remove `Lenis` entirely and keep a native scroll event provider

Replace the current `SmoothScroll` implementation with a minimal provider backed by passive native `scroll` listeners and `window.scrollY`.

Pros:
- Restores default browser scroll behavior everywhere
- Keeps existing animation hooks usable without rewriting sections
- Removes an unnecessary runtime dependency

Cons:
- The `SmoothScroll` name becomes historical unless renamed later

### 2. Keep `Lenis` but configure it to behave more like native scrolling

Adjust `duration`, easing, and multipliers to reduce the effect.

Pros:
- Small code change

Cons:
- Still intercepts scrolling
- Leaves the root cause in place
- Harder to reason about and debug

### 3. Disable the wrapper only on selected pages

Keep global interception available but opt out page by page.

Pros:
- Limits code churn

Cons:
- Inconsistent site behavior
- Adds ongoing maintenance cost
- Solves the symptom selectively instead of fixing the system

## Chosen Design

Use option 1.

`SmoothScroll` will become a lightweight native scroll provider. It will:

- Register one passive window `scroll` listener while mounted
- Notify subscribers through the existing hook surface
- Read scroll position from `window.scrollY`
- Avoid any wheel, touch, or animation-frame interception

## Testing

Add a regression test suite around `SmoothScroll` that proves:

- `useScrollCallback` fires in response to native `scroll` events when wrapped in the provider
- `useScrollY` reflects native `window.scrollY` updates

This captures the expected behavior without depending on visual inspection alone.
