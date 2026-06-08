"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    function onMove(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 35%, transparent 70%)",
        }}
      />
    </div>
  );
}
