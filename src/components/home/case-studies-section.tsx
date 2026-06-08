"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icon";
import { ProjectVisual } from "@/components/portfolio/project-visual";
import { ScrollReveal } from "@/components/motion";
import { caseStudies } from "@/lib/home-data";

export function CaseStudiesSection() {
  const [active, setActive] = useState(0);
  const study = caseStudies[active];

  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-eyebrow">Case Studies</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
                Real Results, Real Impact
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted">
                Detailed stories of how we solve complex business challenges with intelligent software engineering.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary shrink-0 text-xs">
              All Case Studies
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                i === active
                  ? "bg-accent text-white shadow-lg shadow-accent/30"
                  : "border border-white/10 bg-surface text-muted hover:border-accent/30"
              }`}
            >
              {cs.industry}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center"
          >
            {/* Template design showcase */}
            <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${study.gradient}`}>
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 bg-[#0b1020]/30" />
              <div className="relative min-h-[280px] sm:min-h-[340px]">
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {study.industry}
                  </span>
                </div>
                <ProjectVisual type={study.visual} />
              </div>
              <div className="relative border-t border-white/10 bg-[#0b1020]/60 px-5 py-4 backdrop-blur-sm">
                <h3 className="text-lg font-extrabold text-white sm:text-xl">{study.title}</h3>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {study.metrics.map((m) => (
                    <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-center">
                      <p className="text-sm font-extrabold text-white">{m.value}</p>
                      <p className="text-[8px] font-semibold uppercase tracking-wider text-white/60">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-dark">The Challenge</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{study.challenge}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent-light">Our Solution</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{study.solution}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Business Impact</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{study.impact}</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-dimmed">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-surface-elevated px-3 py-1 text-xs font-semibold text-foreground transition hover:border-accent/30 hover:text-accent-dark"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
