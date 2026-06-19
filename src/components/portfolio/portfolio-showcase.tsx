"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/motion";
import { projects } from "@/lib/site";
import { ProjectVisual } from "./project-visual";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function PortfolioShowcase() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(projects[0]?.id ?? null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div className="mt-14">
      {/* Filters + stats bar */}
      <ScrollReveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setExpandedId(null);
                }}
                className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "border border-white/10 bg-surface text-muted hover:border-accent/30 hover:text-heading"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted">
            <span className="font-extrabold text-heading">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </ScrollReveal>

      {/* Case study list */}
      <div className="mt-10 space-y-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => {
            const isExpanded = expandedId === project.id;
            const reversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card interactive-card overflow-hidden"
              >
                <div
                  className={`grid lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  {/* Visual */}
                  <div
                    className={`relative bg-gradient-to-br ${project.gradient} lg:min-h-[360px]`}
                  >
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute inset-0 bg-[#0b1020]/25" />
                    <div className="relative flex flex-col">
                      <div className="flex items-center justify-between px-5 pt-5">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-semibold text-white/70">
                          {project.industry}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="min-h-[260px] w-full text-left sm:min-h-[300px]"
                        aria-expanded={isExpanded}
                        aria-label={`View details for ${project.title}`}
                      >
                        <ProjectVisual type={project.visual} />
                      </button>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="flex flex-col justify-center p-6 sm:p-8">
                    <h3 className="text-xl font-extrabold text-heading sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

                    <div className="mt-4 text-xs text-muted flex items-center gap-1">
                      <span className="font-extrabold text-heading">Project Industry:</span>
                      <span className="text-accent-secondary font-bold uppercase tracking-wider text-[10px] font-mono">{project.industry}</span>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl border border-white/8 bg-surface-elevated/80 p-3 text-center"
                        >
                          <p className="text-lg font-extrabold gradient-text">{m.value}</p>
                          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-dimmed">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-extrabold text-heading mb-2">Technologies Used:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/8 bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="link-underline mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-accent-dark transition hover:text-accent-light"
                    >
                      {isExpanded ? "Hide case study details" : "Read full case study details"}
                      <Icon
                        name="chevron-down"
                        size={16}
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded storytelling */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-subtle-border"
                    >
                      <div className="grid gap-6 bg-surface/40 p-6 sm:grid-cols-2 md:grid-cols-4 sm:p-8">
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D9B08C]">
                            <Icon name="target" size={14} />
                            Business Goal
                          </p>
                          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">{project.businessGoal}</p>
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-secondary">
                            <Icon name="code" size={14} />
                            Key Features
                          </p>
                          <ul className="mt-3 list-disc list-inside space-y-1.5 text-xs text-muted font-sans leading-relaxed">
                            {project.keyFeatures.map((feat) => (
                              <li key={feat}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted">
                            <Icon name="layers" size={14} />
                            The Challenge & Solution
                          </p>
                          <div className="mt-3 text-xs leading-relaxed text-muted font-sans space-y-2">
                            <p><strong className="text-heading">Challenge:</strong> {project.challenge}</p>
                            <p><strong className="text-heading">Solution:</strong> {project.solution}</p>
                          </div>
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                            <Icon name="trending-up" size={14} />
                            Business Impact
                          </p>
                          <p className="mt-3 text-xs sm:text-sm font-semibold leading-relaxed text-foreground font-sans">
                            {project.impact}
                          </p>
                          <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/5 px-4 py-3">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                              Key Result
                            </p>
                            <p className="mt-1 text-2xl font-extrabold text-heading">
                              {project.metrics[0]?.value}
                            </p>
                            <p className="text-xs text-muted">{project.metrics[0]?.label}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
