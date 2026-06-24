"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, Suspense, useEffect } from "react";
import * as THREE from "three";

function RotatingSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const outerSphereRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Target rotation based on cursor
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      // Map to moderate rotation limits
      targetRotation.current = { x: y * 0.4, y: x * 0.4 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    // Lerp coordinates for inertia effect
    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        0.05
      );
    }

    if (outerSphereRef.current) {
      outerSphereRef.current.rotation.y += delta * 0.1;
    }
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y -= delta * 0.16;
      innerSphereRef.current.rotation.x += delta * 0.05;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.07;
      particlesRef.current.rotation.z -= delta * 0.03;
    }
  });

  // Custom point cloud coordinates on a shell
  const particleCount = 140;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 1.1 + Math.random() * 0.4;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={groupRef}>
      {/* Outer Hologram Shell */}
      <mesh ref={outerSphereRef}>
        <sphereGeometry args={[1.7, 40, 40]} />
        <meshBasicMaterial
          color="#0F766E"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Inner Luxury Core */}
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[1.05, 20, 20]} />
        <meshBasicMaterial
          color="#C68B59"
          wireframe
          transparent
          opacity={0.14}
        />
      </mesh>

      {/* Sparks / Particles Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#0F766E"
          size={0.038}
          sizeAttenuation
          transparent
          opacity={0.7}
        />
      </points>

      {/* Ambient and directional lights */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#0f766e" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#c68b59" />
    </group>
  );
}

export function CyberSphere() {
  return (
    <div className="relative h-[280px] w-full sm:h-[340px] md:h-[380px] lg:h-[440px]">
      {/* Dynamic glow blur underneath */}
      <div className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-accent-secondary/15 blur-3xl" />
      
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        className="relative z-10"
      >
        <Suspense fallback={null}>
          <RotatingSphere />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
