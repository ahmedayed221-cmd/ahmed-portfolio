"use client";

import { useEffect, useRef } from "react";

/**
 * Tracks scroll progress from 0 (top) to 1, normalized over the first ~1.1
 * viewport heights, then clamped. Returned as a ref (not state) so 60fps
 * scroll updates don't trigger React re-renders — read it inside a
 * requestAnimationFrame loop (e.g. R3F's useFrame) instead.
 */
export function useScrollProgressRef() {
  const progress = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const span = window.innerHeight * 1.1;
      progress.current = Math.min(1, Math.max(0, window.scrollY / span));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
