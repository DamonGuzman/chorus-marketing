"use client";

import {
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";
import Lenis from "lenis";

/* ------------------------------------------------------------------ */
/*  Lenis context                                                      */
/* ------------------------------------------------------------------ */

const LenisContext = createContext<Lenis | null>(null);

export function useLenisInstance() {
  return useContext(LenisContext);
}

/* ------------------------------------------------------------------ */
/*  Shared scroll-bus: one Lenis "scroll" listener, many subscribers   */
/* ------------------------------------------------------------------ */

type ScrollCallback = () => void;
const subscribers = new Set<ScrollCallback>();
let currentLenis: Lenis | null = null;

function subscribe(cb: ScrollCallback) {
  subscribers.add(cb);
  return () => { subscribers.delete(cb); };
}

function emitScroll() {
  subscribers.forEach((cb) => cb());
}

/**
 * Hook that lets any component run a callback on every Lenis scroll tick.
 * Falls back to native `scroll` event if Lenis isn't mounted yet.
 */
export function useScrollCallback(cb: ScrollCallback) {
  useEffect(() => {
    if (currentLenis) {
      const unsub = subscribe(cb);
      return unsub;
    }
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
  }, [cb]);
}

/**
 * Returns the current scroll-Y, updated on every Lenis tick.
 * Useful for deriving scroll progress without adding listeners.
 */
const getScrollY = () => (currentLenis ? currentLenis.scroll : (typeof window !== "undefined" ? window.scrollY : 0));
const getServerScrollY = () => 0;

export function useScrollY() {
  return useSyncExternalStore(subscribe, getScrollY, getServerScrollY);
}

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  const initLenis = useCallback(() => {
    if (lenisRef.current) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
      wheelMultiplier: 1.0,
      infinite: false,
      autoRaf: true,
    });

    lenis.on("scroll", emitScroll);
    lenisRef.current = lenis;
    currentLenis = lenis;
  }, []);

  useEffect(() => {
    initLenis();
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      currentLenis = null;
    };
  }, [initLenis]);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
}
