"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Position of the mouse pointer
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring uses spring animation for smooth lag
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices or if prefers-reduced-motion is active
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      // Offset by half of cursor width/height to center it
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");
        
      setHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-transparent opacity-70"
        style={{
          x: ringX,
          y: ringY,
          scale: hovered ? 1.6 : 1,
          borderColor: hovered ? "var(--accent-secondary)" : "var(--primary)",
          backgroundColor: hovered ? "rgba(15, 118, 110, 0.05)" : "rgba(15, 118, 110, 0)",
          boxShadow: hovered ? "0 0 10px rgba(15, 118, 110, 0.2)" : "none",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{
          x: mouseX,
          y: mouseY,
          scale: hovered ? 0.4 : 1,
          backgroundColor: hovered ? "var(--accent-secondary)" : "var(--primary)",
        }}
      />
    </>
  );
}
