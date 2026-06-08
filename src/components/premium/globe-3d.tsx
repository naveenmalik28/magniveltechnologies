"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function RotatingGlobe() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group>
      <Sphere ref={ref} args={[1.6, 48, 48]}>
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.22}
        />
      </Sphere>
      <Sphere args={[1.55, 32, 32]}>
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#8b5cf6" />
      <pointLight position={[-4, -2, -4]} intensity={0.6} color="#06b6d4" />
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="h-full w-full min-h-[280px]">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <RotatingGlobe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
