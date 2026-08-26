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
  const [activeDemo, setActiveDemo] = useState<{ url: string; title: string } | null>(null);

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
                    ? "bg-accent text-white shadow-md shadow-accent/15"
                    : "border border-subtle-border bg-surface text-muted hover:border-accent/30 hover:text-heading"
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
            const hasDemo = "demoUrl" in project && typeof project.demoUrl === "string";

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
                        <span className="rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-secondary backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-semibold text-white/80">
                          {project.industry}
                        </span>
                      </div>

                      {hasDemo && (
                        <div className="px-5 pt-3">
                          <button
                            type="button"
                            onClick={() => setActiveDemo({ url: (project as { demoUrl: string }).demoUrl, title: project.title })}
                            className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/40 bg-teal-500/20 px-3 py-1 text-[11px] font-extrabold text-teal-200 backdrop-blur-md hover:bg-teal-500/30 transition-all cursor-pointer shadow-lg"
                          >
                            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                            Live Interactive Demo Available
                          </button>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="min-h-[240px] w-full text-left sm:min-h-[280px]"
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
                    <p className="mt-3 text-sm leading-relaxed text-muted font-sans">{project.description}</p>

                    {/* Key metrics badge row */}
                    <div className="mt-6 grid grid-cols-3 gap-3 border-y border-subtle-border py-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="font-heading text-lg font-extrabold text-heading sm:text-xl">{m.value}</p>
                          <p className="mt-0.5 text-[10px] font-bold text-muted uppercase tracking-wider">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack tags */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-dimmed">Stack:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-subtle-border bg-surface px-2 py-0.5 text-[10px] font-semibold text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {hasDemo && (
                        <button
                          type="button"
                          onClick={() => setActiveDemo({ url: (project as { demoUrl: string }).demoUrl, title: project.title })}
                          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-primary-hover transition-colors cursor-pointer"
                        >
                          <Icon name="external-link" size={14} />
                          Launch Live Application
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark transition hover:text-accent-light cursor-pointer"
                      >
                        {isExpanded ? "Hide details" : "Case study details"}
                        <Icon
                          name="chevron-down"
                          size={14}
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
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
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-secondary">
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
                            The Challenge &amp; Solution
                          </p>
                          <div className="mt-3 text-xs leading-relaxed text-muted font-sans space-y-2">
                            <p><strong className="text-heading">Challenge:</strong> {project.challenge}</p>
                            <p><strong className="text-heading">Solution:</strong> {project.solution}</p>
                          </div>
                        </div>
                        <div>
                          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                            <Icon name="trending-up" size={14} />
                            Business Impact
                          </p>
                          <p className="mt-3 text-xs sm:text-sm font-semibold leading-relaxed text-foreground font-sans">
                            {project.impact}
                          </p>
                          <div className="mt-4 rounded-xl border border-accent/20 bg-accent-subtle px-4 py-3">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-accent">
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

      {/* Interactive Application Modal */}
      {activeDemo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fade-in">
          <div className="relative flex h-[90vh] w-full max-w-6xl flex-col rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl overflow-hidden">
            {/* Modal Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#161b22] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-heading text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                  Live Application Demo: {activeDemo.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/10 transition-colors"
                >
                  Open Full Screen
                  <Icon name="external-link" size={13} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveDemo(null)}
                  className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <Icon name="x" size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body iframe */}
            <div className="flex-1 bg-black">
              <iframe
                src={activeDemo.url}
                title={activeDemo.title}
                className="h-full w-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
