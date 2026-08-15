"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Core } from "@/components/three/Core";
import { useScrollProgressRef } from "@/hooks/useScrollProgressRef";

export function Scene({ isMobile, active }: { isMobile: boolean; active: boolean }) {
  const scrollProgress = useScrollProgressRef();
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointer.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      };
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{ antialias: !isMobile, powerPreference: "high-performance", alpha: true }}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 1.5, 3]} intensity={12} color="#7c6cf6" distance={12} />
      <Core scrollProgress={scrollProgress} pointer={pointer} />
      <Sparkles
        count={isMobile ? 40 : 110}
        scale={[7, 5, 4]}
        size={1.6}
        speed={0.25}
        opacity={0.55}
        color="#7c6cf6"
      />
      {!isMobile && (
        <EffectComposer multisampling={0}>
          <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={0.9} mipmapBlur />
        </EffectComposer>
      )}
    </Canvas>
  );
}
