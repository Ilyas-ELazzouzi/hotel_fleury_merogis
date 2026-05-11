import { ReactLenis } from "lenis/react";
import { type ReactNode, useSyncExternalStore } from "react";

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.085,
  smoothWheel: true,
  wheelMultiplier: 0.92,
  touchMultiplier: 1,
  /** Ancres # — le décalage header reste géré par `scroll-padding-top` sur `html` */
  anchors: true,
} as const;

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
