"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { techEcosystem } from "@/lib/home-data";

export function TechEcosystem() {
  return (
    <section className="border-y border-subtle-border bg-surface/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Technology Ecosystem</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Our Technology Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            A comprehensive ecosystem of battle-tested technologies powering enterprise-grade solutions.
          </p>
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techEcosystem.map((group) => (
            <StaggerItem key={group.category}>
              <div className="glass-card group h-full p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-dark">
                  {group.category}
                </p>
                <div className="mt-5 flex flex-col gap-2.5">
                  {group.items.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="rounded-lg border border-white/8 bg-surface-elevated/80 px-3 py-2 text-sm font-semibold text-foreground transition"
                      whileHover={{
                        scale: 1.03,
                        borderColor: "rgba(99, 102, 241, 0.4)",
                        boxShadow: "0 8px 24px -8px rgba(99, 102, 241, 0.35)",
                      }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
