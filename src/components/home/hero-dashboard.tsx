"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/icon";

const nodes = [
  { x: 50, y: 20, label: "AI Core", color: "#0F766E" },
  { x: 20, y: 45, label: "Analytics", color: "#C68B59" },
  { x: 80, y: 40, label: "Mobile", color: "#C68B59" },
  { x: 35, y: 75, label: "Cloud", color: "#0F766E" },
  { x: 70, y: 72, label: "API", color: "#C68B59" },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4],
];

const barHeights = [40, 65, 45, 80, 55, 90, 70];

const services = [
  { name: "API Gateway" },
  { name: "Lambda" },
  { name: "RDS" },
];

const statusItems = [
  { label: "AI Models", status: "Active", color: "text-primary" },
  { label: "Data Pipeline", status: "Streaming", color: "text-accent-secondary" },
];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow backdrop */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/8 via-accent-secondary/4 to-accent-light/8 blur-xl" />

      {/* Main card — no overflow-hidden so nothing gets clipped */}
      <div className="glass-card relative p-4 sm:p-5 md:p-6">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-subtle-border pb-3 sm:pb-4">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 sm:h-3 sm:w-3" />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-accent-secondary sm:text-[10px]">
            magnivel-intelligence
          </span>
        </div>

        {/* Content grid — stacks on mobile, side-by-side on lg */}
        <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Network visualization — aspect-ratio on mobile only, flexible on desktop */}
          <div className="relative aspect-[4/3] rounded-xl border border-subtle-border bg-[#F3EEE7]/90 p-3 sm:p-4 lg:aspect-auto lg:min-h-[240px]">
            <svg
              viewBox="0 0 100 100"
              className="h-full w-full"
              aria-hidden="true"
            >
              {connections.map(([a, b], i) => (
                <motion.line
                  key={i}
                  x1={nodes[a].x}
                  y1={nodes[a].y}
                  x2={nodes[b].x}
                  y2={nodes[b].y}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                />
              ))}
              <defs>
                <linearGradient
                  id="lineGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0F766E" />
                  <stop offset="100%" stopColor="#C68B59" />
                </linearGradient>
              </defs>
              {nodes.map((node, i) => (
                <g key={node.label}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="3"
                    fill={node.color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                  />
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="6"
                    fill="none"
                    stroke={node.color}
                    strokeWidth="0.3"
                    opacity="0.4"
                    animate={{ r: [6, 9, 6], opacity: [0.4, 0.1, 0.4] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    fill="#6B7280"
                    fontSize="3.5"
                    fontFamily="monospace"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Floating icons */}
            <motion.div
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 text-primary sm:right-3 sm:top-3 sm:h-8 sm:w-8"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Icon name="brain" size={14} />
            </motion.div>
            <motion.div
              className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-lg border border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary sm:bottom-3 sm:left-3 sm:h-8 sm:w-8"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <Icon name="cloud" size={14} />
            </motion.div>
          </div>

          {/* Side panels — all content visible, no clipping */}
          <div className="flex flex-col gap-2 sm:gap-2.5">
            {/* Performance mini chart */}
            <div className="rounded-xl border border-subtle-border bg-[#F3EEE7]/80 p-2.5 sm:p-3">
              <p className="text-[9px] font-bold uppercase tracking-wider text-muted sm:text-[10px]">
                Performance
              </p>
              <div className="mt-1.5 flex items-end gap-1 h-10 sm:mt-2 sm:h-12">
                {barHeights.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-primary to-accent-secondary"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Mobile preview + AWS status — always side-by-side */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {/* Mobile App preview */}
              <div className="rounded-xl border border-subtle-border bg-[#F3EEE7]/80 p-2 sm:p-2.5">
                <div className="mx-auto w-10 rounded-lg border border-subtle-border bg-surface p-1 sm:w-12 sm:p-1.5">
                  <div className="mx-auto mb-1 h-0.5 w-3 rounded-full bg-black/10 sm:mb-1.5 sm:h-1 sm:w-4" />
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="h-0.5 w-full rounded bg-primary/40 sm:h-1" />
                    <div className="h-0.5 w-3/4 rounded bg-accent-secondary/30 sm:h-1" />
                    <div className="h-0.5 w-1/2 rounded bg-accent-secondary/20 sm:h-1" />
                  </div>
                </div>
                <p className="mt-1.5 text-center text-[8px] font-semibold text-muted sm:mt-2 sm:text-[9px]">
                  Mobile App
                </p>
              </div>

              {/* AWS Status panel */}
              <div className="rounded-xl border border-subtle-border bg-[#F3EEE7]/80 p-2 sm:p-2.5">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Icon
                    name="server"
                    size={12}
                    className="shrink-0 text-accent-secondary"
                  />
                  <span className="truncate font-mono text-[8px] text-primary sm:text-[9px]">
                    AWS Live
                  </span>
                </div>
                <div className="mt-1.5 space-y-1 sm:mt-2 sm:space-y-1.5">
                  {services.map((svc) => (
                    <div
                      key={svc.name}
                      className="flex items-center justify-between text-[7px] sm:text-[8px]"
                    >
                      <span className="truncate text-muted">{svc.name}</span>
                      <span className="ml-1 h-1 w-1 shrink-0 rounded-full bg-primary sm:h-1.5 sm:w-1.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status rows — fully visible with proper padding */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-subtle-border bg-[#F7F4EF]/50 px-2.5 py-1.5 sm:px-3 sm:py-2"
                >
                  <span className="text-[9px] font-semibold text-foreground sm:text-[10px]">
                    {item.label}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                          item.color === "text-primary"
                            ? "bg-primary"
                            : "bg-accent-secondary"
                        }`}
                      />
                      <span
                        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                          item.color === "text-primary"
                            ? "bg-primary"
                            : "bg-accent-secondary"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-[9px] font-bold sm:text-[10px] ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
