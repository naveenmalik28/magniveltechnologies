"use client";

import { ScrollReveal } from "@/components/motion";

const technologies = [
  "React", "Angular", "Next.js", "Node.js", "Python", "Django",
  "Laravel", "AWS", "Docker", "MySQL", "PostgreSQL", "MongoDB",
];

export function TechMarquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="border-y border-subtle-border bg-surface/50 py-12 overflow-hidden">
      <ScrollReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted">
          Technologies We Master
        </p>
      </ScrollReveal>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee gap-4 whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-subtle-border bg-surface-elevated/80 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
