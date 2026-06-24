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

/* ── Continent shapes for the SVG map ── */
const continentPaths = [
  // North America
  "M15,18 Q18,14 22,16 Q26,12 30,14 L32,18 Q30,22 28,24 L24,26 Q20,24 18,22 Z",
  // South America
  "M24,28 Q26,30 27,34 L26,40 Q24,42 22,40 L21,36 Q22,32 24,28 Z",
  // Europe
  "M46,14 Q48,12 52,14 L54,18 Q52,20 50,20 L48,18 Q46,16 46,14 Z",
  // Africa
  "M46,22 Q50,20 54,22 L56,28 Q54,34 52,36 L48,36 Q44,32 44,28 Z",
  // Asia
  "M56,10 Q62,8 70,12 L76,16 Q78,20 76,24 L72,26 Q66,24 60,22 L56,18 Z",
  // Australia / Oceania
  "M72,36 Q76,34 80,36 L82,38 Q80,42 78,42 L74,40 Q72,38 72,36 Z",
];

/* ── Connection arcs between regions (SVG paths) ── */
const connectionArcs = [
  { from: "India", to: "United States", d: "M72,48 Q50,20 22,38" },
  { from: "India", to: "UAE", d: "M72,48 Q66,44 58,44" },
  { from: "India", to: "Europe", d: "M72,48 Q60,34 48,30" },
  { from: "India", to: "Southeast Asia", d: "M72,48 Q76,50 78,52" },
  { from: "United States", to: "Europe", d: "M22,38 Q36,22 48,30" },
];

function WorldMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <svg
      ref={ref}
      viewBox="0 0 100 60"
      className="h-full w-full"
      aria-label="Global presence map showing offices in India, United States, UAE, Europe, and Southeast Asia"
    >
      <defs>
        <radialGradient id="mapGlow">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="dotGlow">
          <stop offset="0%" stopColor="#C68B59" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C68B59" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F766E" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#C68B59" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0F766E" stopOpacity="0.5" />
        </linearGradient>
        {/* Grid pattern */}
        <pattern id="mapGrid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(15,118,110,0.08)" strokeWidth="0.15" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="100" height="60" fill="url(#mapGrid)" />

      {/* Latitude / longitude lines for depth */}
      {[15, 30, 45].map((y) => (
        <line key={`lat-${y}`} x1="2" y1={y} x2="98" y2={y} stroke="rgba(15,118,110,0.05)" strokeWidth="0.2" strokeDasharray="1 2" />
      ))}
      {[20, 40, 60, 80].map((x) => (
        <line key={`lng-${x}`} x1={x} y1="2" x2={x} y2="58" stroke="rgba(15,118,110,0.05)" strokeWidth="0.2" strokeDasharray="1 2" />
      ))}

      {/* Continent shapes */}
      {continentPaths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="rgba(15,118,110,0.04)"
          stroke="rgba(15,118,110,0.15)"
          strokeWidth="0.3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
        />
      ))}

      {/* Connection arcs between regions */}
      {connectionArcs.map((arc, i) => (
        <motion.path
          key={`arc-${i}`}
          d={arc.d}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="0.25"
          strokeDasharray="1.5 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
          transition={{ delay: 0.8 + i * 0.15, duration: 1.2, ease: "easeOut" }}
        />
      ))}

      {/* Region markers */}
      {globalRegions.map((region, i) => (
        <g key={region.name}>
          {/* Outer glow */}
          <motion.circle
            cx={region.x}
            cy={region.y}
            r="0"
            fill="url(#dotGlow)"
            initial={{ r: 0, opacity: 0 }}
            animate={isInView ? { r: 5, opacity: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          />
          {/* Solid dot */}
          <motion.circle
            cx={region.x}
            cy={region.y}
            r="1.4"
            fill="#C68B59"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.4 + i * 0.15, type: "spring" }}
          />
          {/* Pulse ring */}
          {isInView && (
            <motion.circle
              cx={region.x}
              cy={region.y}
              r="2"
              fill="none"
              stroke="#C68B59"
              strokeWidth="0.3"
              initial={{ r: 2, opacity: 0.8 }}
              animate={{ r: 6, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
            />
          )}
          {/* Region name */}
          <text
            x={region.x}
            y={region.y + 4.5}
            textAnchor="middle"
            fill="#6B7280"
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
    <section className="relative overflow-hidden border-y border-subtle-border bg-background-secondary py-24">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/3 via-transparent to-primary/3" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Global Presence</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Worldwide Delivery, Local Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Serving clients across continents with conference technology, publishing platforms, and research ecosystem solutions.
          </p>
        </ScrollReveal>

        {/* Map + Globe grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          {/* SVG Map card */}
          <div className="glass-card flex flex-col p-4 sm:p-6">
            {/* Map container */}
            <div className="flex-1">
              <div className="aspect-[5/3]">
                <WorldMap />
              </div>
            </div>

            {/* Region tags below the map */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-t border-subtle-border pt-4">
              {globalRegions.map((region) => (
                <span
                  key={region.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent-secondary/20 bg-accent-secondary/5 px-2.5 py-1 text-[10px] font-semibold text-accent-secondary sm:text-xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                  {region.name}
                </span>
              ))}
            </div>
          </div>

          {/* 3D Globe card — visible on lg+, replaced with a styled info card on mobile */}
          <div className="hidden lg:block">
            <div className="glass-card h-full p-3">
              <div className="h-full min-h-[320px]">
                <Globe3D />
              </div>
            </div>
          </div>

          {/* Mobile fallback: region detail cards (shown only below lg) */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
            {globalRegions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card flex flex-col items-center p-3 text-center sm:p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                  <Icon name="map-pin" size={14} className="text-primary" />
                </span>
                <p className="mt-2 text-xs font-bold text-heading sm:text-sm">
                  {region.name}
                </p>
                <p className="mt-0.5 text-[10px] text-muted sm:text-xs">
                  {region.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {globalCapabilities.map((cap, i) => (
            <motion.article
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card group p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 text-primary transition group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                <Icon name={cap.icon} size={18} />
              </span>
              <h3 className="mt-4 text-sm font-extrabold text-heading">
                {cap.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {cap.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
