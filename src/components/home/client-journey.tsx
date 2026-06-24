"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/motion";
import { clientJourney } from "@/lib/home-data";

export function ClientJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Client Journey</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Your Path to Digital Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            A transparent, collaborative journey from initial discovery to sustained growth.
          </p>
        </ScrollReveal>

        {/* Progress bar */}
        <div className="relative mx-auto mt-14 hidden max-w-4xl lg:block">
          <div className="h-1 rounded-full bg-subtle-border">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent-secondary"
              style={{ width: isInView ? progressWidth : "0%" }}
            />
          </div>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-7 lg:gap-3 lg:overflow-visible lg:pb-0">
          {clientJourney.map((step, index) => (
            <motion.div
              key={step.step}
              className="glass-card min-w-[160px] flex-shrink-0 snap-center p-4 text-center lg:min-w-0"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                <Icon name={step.icon} size={20} className="text-accent-dark" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white">
                  {step.step}
                </span>
              </div>
              <h3 className="mt-3 text-xs font-extrabold text-heading">{step.title}</h3>
              <p className="mt-1.5 hidden text-[10px] leading-relaxed text-muted sm:block">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
