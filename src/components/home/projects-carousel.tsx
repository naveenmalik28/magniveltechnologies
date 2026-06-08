"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/motion";

type Project = {
  title: string;
  impact: string;
  tech: string[];
  desc: string;
  gradient: string;
};

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  function prev() {
    setActive((i) => (i === 0 ? projects.length - 1 : i - 1));
  }

  function next() {
    setActive((i) => (i === projects.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-eyebrow">Portfolio</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-4 max-w-xl text-base text-muted">
                Representative software platforms and AI solutions engineered for measurable business impact.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary shrink-0 text-xs">
              View All Work
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient}`}
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 bg-[#0b1020]/40" />
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <span className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  {project.impact}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{project.title}</h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-base leading-relaxed text-muted">{project.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-surface-elevated px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-foreground transition hover:border-accent/40 hover:text-accent-dark"
              >
                <Icon name="chevron-right" size={18} className="rotate-180" />
              </button>
              <button
                onClick={next}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface text-foreground transition hover:border-accent/40 hover:text-accent-dark"
              >
                <Icon name="chevron-right" size={18} />
              </button>
              <div className="flex gap-2 ml-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Go to project ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === active ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
