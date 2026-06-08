"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/icon";

const nodes = [
  { x: 50, y: 20, label: "AI Core", color: "#6366F1" },
  { x: 20, y: 45, label: "Analytics", color: "#06B6D4" },
  { x: 80, y: 40, label: "Mobile", color: "#8B5CF6" },
  { x: 35, y: 75, label: "Cloud", color: "#6366F1" },
  { x: 70, y: 72, label: "API", color: "#06B6D4" },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [1, 3], [2, 4],
];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-accent-secondary/10 to-accent-light/20 blur-2xl" />
      <div className="glass-card relative overflow-hidden p-5 sm:p-6">
        <div className="flex items-center justify-between border-b border-white/8 pb-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent-light">
            magnivel-intelligence
          </span>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Network visualization */}
          <div className="relative aspect-[4/3] rounded-xl border border-white/6 bg-[#0b1020]/80 p-4">
            <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
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
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#06B6D4" />
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
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                  />
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    fill="#94A3B8"
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
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-dark"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Icon name="brain" size={14} />
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg border border-accent-light/30 bg-accent-light/10 text-accent-light"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <Icon name="cloud" size={14} />
            </motion.div>
          </div>

          {/* Side panels */}
          <div className="flex flex-col gap-3">
            {/* Mini chart */}
            <div className="rounded-xl border border-white/6 bg-[#0b1020]/60 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">Performance</p>
              <div className="mt-2 flex items-end gap-1 h-12">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent-light"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>

            {/* Mobile preview */}
            <div className="flex gap-3">
              <div className="flex-1 rounded-xl border border-white/6 bg-[#0b1020]/60 p-3">
                <div className="mx-auto w-12 rounded-lg border border-white/10 bg-surface p-1.5">
                  <div className="h-1 w-4 mx-auto rounded-full bg-white/20 mb-1.5" />
                  <div className="space-y-1">
                    <div className="h-1 w-full rounded bg-accent/40" />
                    <div className="h-1 w-3/4 rounded bg-accent-light/30" />
                    <div className="h-1 w-1/2 rounded bg-accent-secondary/30" />
                  </div>
                </div>
                <p className="mt-2 text-center text-[9px] font-semibold text-muted">Mobile App</p>
              </div>
              <div className="flex-1 rounded-xl border border-white/6 bg-[#0b1020]/60 p-3">
                <div className="flex items-center gap-1.5">
                  <Icon name="server" size={12} className="text-accent-light" />
                  <span className="text-[9px] font-mono text-emerald-400">AWS Live</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  {["API Gateway", "Lambda", "RDS"].map((svc) => (
                    <div key={svc} className="flex items-center justify-between text-[8px]">
                      <span className="text-muted">{svc}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Status row */}
            {[
              { label: "AI Models", status: "Active", color: "text-emerald-400" },
              { label: "Data Pipeline", status: "Streaming", color: "text-accent-light" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/3 px-3 py-2">
                <span className="text-[10px] font-semibold text-foreground">{item.label}</span>
                <span className={`text-[10px] font-bold ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
