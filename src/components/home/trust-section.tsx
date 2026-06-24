"use client";

import { Icon } from "@/components/icon";
import { AnimatedCounter, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { trustMetrics } from "@/lib/home-data";

const indicators = [
  "Enterprise-Grade Security",
  "NDA Protected Projects",
  "24/7 Support Available",
  "Agile Delivery Model",
];

export function TrustSection() {
  return (
    <section className="relative overflow-hidden border-y border-subtle-border py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-light/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Trust & Credibility</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Proven Expertise You Can Rely On
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
            Years of delivering enterprise-grade software with measurable business impact across industries worldwide.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-5">
          {trustMetrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.08}>
              <div className="glass-card group p-6 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark transition group-hover:shadow-lg group-hover:shadow-accent/25">
                  <Icon name={metric.icon} size={18} />
                </span>
                <div className="mt-4">
                  <AnimatedCounter value={metric.value} label={metric.label} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <StaggerContainer className="mt-12 flex flex-wrap justify-center gap-3">
          {indicators.map((item) => (
            <StaggerItem key={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">
                <Icon name="check-circle" size={14} />
                {item}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
