"use client";

import { useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Core({
  scrollProgress,
  pointer,
}: {
  scrollProgress: MutableRefObject<number>;
  pointer: MutableRefObject<{ x: number; y: number }>;
}) {
  const group = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Mesh>(null!);
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    const p = scrollProgress.current;
    const g = group.current;
    if (g) {
      g.rotation.y += delta * 0.15;
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pointer.current.y * 0.15, 0.05);
      g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, -pointer.current.x * 0.08, 0.05);

      const scale = THREE.MathUtils.lerp(1.5, 0.65, p);
      g.scale.setScalar(scale);

      const targetX = THREE.MathUtils.lerp(1.15, 0, p);
      const targetY = THREE.MathUtils.lerp(0.05, -0.25, p);
      g.position.x = THREE.MathUtils.lerp(g.position.x, targetX, 0.04);
      g.position.y = THREE.MathUtils.lerp(g.position.y, targetY, 0.04);
    }
    if (ringA.current) ringA.current.rotation.x += delta * 0.4;
    if (ringB.current) ringB.current.rotation.y += delta * 0.3;
    if (inner.current) inner.current.rotation.y -= delta * 0.6;
  });

  return (
    <group ref={group} position={[1.15, 0.05, 0]}>
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#7c6cf6" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner} scale={0.45}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#7c6cf6" emissive="#7c6cf6" emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.6, 0.006, 8, 128]} />
        <meshBasicMaterial color="#7c6cf6" transparent opacity={0.35} toneMapped={false} />
      </mesh>
      <mesh ref={ringB} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[1.9, 0.004, 8, 128]} />
        <meshBasicMaterial color="#e8e9ec" transparent opacity={0.15} toneMapped={false} />
      </mesh>
    </group>
  );
}
