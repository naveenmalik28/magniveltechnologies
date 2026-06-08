"use client";

import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/motion";
import { globalCapabilities, globalRegions } from "@/lib/home-data";

const Globe3D = dynamic(() => import("@/components/premium/globe-3d"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[280px] items-center justify-center">
      <div className="h-32 w-32 animate-pulse rounded-full border border-accent/20 bg-accent/5" />
    </div>
  ),
});

function WorldMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 60"
      className="h-full w-full"
      aria-label="Global presence map"
    >
      <defs>
        <radialGradient id="mapGlow">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Simplified continent outlines */}
      <ellipse cx="25" cy="35" rx="14" ry="10" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />
      <ellipse cx="48" cy="28" rx="12" ry="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />
      <ellipse cx="72" cy="42" rx="16" ry="12" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />
      <ellipse cx="78" cy="50" rx="8" ry="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />

      {globalRegions.map((region, i) => (
        <g key={region.name}>
          <motion.circle
            cx={region.x}
            cy={region.y}
            r="0"
            fill="url(#mapGlow)"
            initial={{ r: 0, opacity: 0 }}
            animate={isInView ? { r: 4, opacity: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          />
          <motion.circle
            cx={region.x}
            cy={region.y}
            r="1.2"
            fill="#06b6d4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
          />
          {isInView && (
            <motion.circle
              cx={region.x}
              cy={region.y}
              r="2"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="0.3"
              initial={{ r: 2, opacity: 0.8 }}
              animate={{ r: 6, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            />
          )}
          <text
            x={region.x}
            y={region.y + 4}
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="2.2"
            fontFamily="system-ui"
          >
            {region.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function GlobalPresence() {
  return (
    <section className="relative overflow-hidden border-y border-subtle-border py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/5 via-transparent to-accent-light/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Global Presence</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Worldwide Delivery, Local Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Serving clients across continents with conference technology, publishing platforms, and research ecosystem solutions.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="glass-card overflow-hidden p-4 sm:p-6">
            <div className="aspect-[5/3]">
              <WorldMap />
            </div>
          </div>

          <div className="glass-card hidden overflow-hidden p-2 lg:block">
            <Globe3D />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {globalCapabilities.map((cap) => (
            <article key={cap.title} className="glass-card group p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark transition group-hover:shadow-lg group-hover:shadow-accent/20">
                <Icon name={cap.icon} size={18} />
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-heading">{cap.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{cap.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
