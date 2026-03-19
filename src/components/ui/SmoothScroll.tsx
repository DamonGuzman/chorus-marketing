"use client";

import { useEffect, useSyncExternalStore } from "react";

type ScrollCallback = () => void;

const subscribers = new Set<ScrollCallback>();
let providerCount = 0;
let detachProviderListener: (() => void) | null = null;

function emitScroll() {
  subscribers.forEach((callback) => callback());
}

function getScrollY() {
  return typeof window === "undefined" ? 0 : window.scrollY;
}

function subscribe(callback: ScrollCallback) {
  subscribers.add(callback);

  return () => {
    subscribers.delete(callback);
  };
}

function attachProviderListener() {
  if (detachProviderListener || typeof window === "undefined") return;

  const onScroll = () => {
    emitScroll();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  detachProviderListener = () => {
    window.removeEventListener("scroll", onScroll);
  };
}

function detachListenerIfUnused() {
  if (providerCount !== 0 || !detachProviderListener) return;

  detachProviderListener();
  detachProviderListener = null;
}

export function useLenisInstance() {
  return null;
}

export function useScrollCallback(callback: ScrollCallback) {
  useEffect(() => {
    if (providerCount > 0) {
      return subscribe(callback);
    }

    window.addEventListener("scroll", callback, { passive: true });
    return () => window.removeEventListener("scroll", callback);
  }, [callback]);
}

export function useScrollY() {
  return useSyncExternalStore(subscribe, getScrollY, () => 0);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    providerCount += 1;
    attachProviderListener();

    return () => {
      providerCount -= 1;
      detachListenerIfUnused();
    };
  }, []);

  return children;
}
