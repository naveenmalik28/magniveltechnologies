"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { aiSolutions } from "@/lib/home-data";

export function AiShowcase() {
  return (
    <section className="relative overflow-hidden border-y border-subtle-border bg-gradient-to-b from-background via-surface-elevated/40 to-background py-24 sm:py-32">
      {/* Background ambient lighting and subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-primary/6 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/6 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Left Column: Heading, Value Points & Visual */}
          <ScrollReveal>
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              AI Innovation
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl leading-[1.15]">
              AI-First Thinking,{" "}
              <span className="gradient-text">Enterprise Results</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted font-sans">
              From intelligent chatbots to autonomous workflows, we embed cutting-edge AI into every layer of your digital products.
            </p>

            {/* Value checklist */}
            <div className="mt-6 flex flex-col gap-2.5">
              {[
                "Private Knowledge Bases & Secure Enterprise RAG",
                "Autonomous Multi-Agent Task Orchestration",
                "LLM Fine-Tuning & Custom Model Integrations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-heading/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon name="check" size={12} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/ai-solutions"
                className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2 shadow-lg shadow-primary/20"
              >
                Explore AI Solutions
                <Icon name="arrow-right" size={14} />
              </Link>
            </div>

            {/* Futuristic AI brain visual */}
            <div className="relative mt-12 hidden aspect-square max-w-[320px] lg:flex items-center justify-center">
              {/* Radial gradient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 via-accent-secondary/10 to-transparent blur-2xl" />

              {/* Outer dashed spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-dashed border-primary/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Middle reverse ring */}
              <motion.div
                className="absolute inset-6 rounded-full border border-accent-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Center core pulse */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/25 bg-surface shadow-2xl shadow-primary/20 backdrop-blur-md"
                >
                  <div className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <Icon name="brain" size={42} className="text-primary" />
                </motion.div>
              </div>

              {/* Orbiting badges */}
              {[
                { label: "LLM / RAG", angle: 0 },
                { label: "Agentic AI", angle: Math.PI * 0.5 },
                { label: "Private Data", angle: Math.PI },
                { label: "Automation", angle: Math.PI * 1.5 },
              ].map((node, i) => {
                const x = 50 + Math.cos(node.angle) * 44;
                const y = 50 + Math.sin(node.angle) * 44;
                return (
                  <motion.div
                    key={node.label}
                    className="absolute flex items-center gap-1.5 rounded-full border border-subtle-border bg-surface px-3 py-1 text-[11px] font-bold text-heading shadow-md shadow-black/5"
                    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {node.label}
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right Column: AI Solutions Cards Grid */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {aiSolutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Link
                  href={solution.href}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-subtle-border bg-surface/90 p-5 sm:p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface hover:shadow-xl hover:shadow-primary/10"
                >
                  {/* Subtle ambient hover gradient glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/4 via-transparent to-accent-secondary/4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/25">
                        <Icon name={solution.icon} size={20} />
                      </span>
                      <span className="rounded-full bg-[#F1EEE5] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        Enterprise
                      </span>
                    </div>

                    <h3 className="font-heading mt-4 text-base font-bold text-heading group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground/80 font-sans">
                      {solution.description}
                    </p>
                  </div>

                  <div className="relative mt-4 flex items-center gap-1 text-xs font-semibold text-primary transition-transform duration-200 group-hover:translate-x-1">
                    <span>Explore Capability</span>
                    <Icon name="arrow-right" size={13} />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
