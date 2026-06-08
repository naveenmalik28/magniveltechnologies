"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { aiSolutions } from "@/lib/home-data";

export function AiShowcase() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal>
            <span className="section-eyebrow">AI Innovation</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              AI-First Thinking,{" "}
              <span className="gradient-text">Enterprise Results</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              From intelligent chatbots to autonomous workflows, we embed cutting-edge AI into every layer of your digital products.
            </p>

            {/* Futuristic AI brain visual */}
            <div className="relative mt-10 hidden aspect-square max-w-xs lg:block">
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-accent-light/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex h-24 w-24 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-2xl shadow-accent/20"
                >
                  <Icon name="brain" size={40} className="text-accent-dark" />
                </motion.div>
              </div>
              {["GPT", "RAG", "ML", "Agents"].map((label, i) => {
                const angle = (i / 4) * Math.PI * 2;
                const x = 50 + Math.cos(angle) * 42;
                const y = 50 + Math.sin(angle) * 42;
                return (
                  <motion.span
                    key={label}
                    className="absolute rounded-full border border-white/10 bg-surface px-2 py-0.5 text-[9px] font-bold text-accent-light"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {label}
                  </motion.span>
                );
              })}
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {aiSolutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Link
                  href={solution.href}
                  className="glass-card group block h-full p-5 transition hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent-light/20 bg-accent-light/10 text-accent-light transition group-hover:shadow-lg group-hover:shadow-accent-light/20">
                    <Icon name={solution.icon} size={18} />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-heading group-hover:text-accent-dark transition">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{solution.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent-dark opacity-0 transition group-hover:opacity-100">
                    Explore
                    <Icon name="arrow-right" size={12} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
