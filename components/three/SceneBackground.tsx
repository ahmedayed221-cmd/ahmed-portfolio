"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsPageActive } from "@/hooks/useIsPageActive";

const Scene = dynamic(() => import("@/components/three/Scene").then((mod) => mod.Scene), {
  ssr: false,
});

export function SceneBackground() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const active = useIsPageActive();

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none" aria-hidden="true">
      <Scene isMobile={isMobile} active={active} />
    </div>
  );
}
