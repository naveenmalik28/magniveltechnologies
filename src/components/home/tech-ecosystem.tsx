"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/motion";
import { partnerPlatforms, partnerCategories } from "@/lib/partners-data";
import { PartnerLogo } from "@/components/home/partner-logos";
import { PartnerPlatform } from "@/types/partner";

export function TechEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPlatforms =
    activeCategory === "all"
      ? partnerPlatforms
      : partnerPlatforms.filter((p) => {
          const catObj = partnerCategories.find((c) => c.id === activeCategory);
          return catObj?.category ? p.category === catObj.category : true;
        });

  // Unique categories in specified order for grouped rendering in "All" view
  const categoriesInOrder = Array.from(
    new Set(partnerPlatforms.map((p) => p.category))
  );

  return (
    <section
      id="technology-ecosystem"
      className="relative overflow-hidden border-y border-subtle-border bg-background py-24 sm:py-32"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Our Technology Ecosystem
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            Technology &amp; Platform Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg font-medium text-heading/85">
            We build, integrate and scale digital solutions using trusted technologies and leading global platforms.
          </p>

          <p className="mx-auto mt-2 max-w-2xl text-sm sm:text-base text-muted font-sans">
            From cloud infrastructure and software development to digital marketing, e-commerce and business automation.
          </p>

          {/* Trust Statement Bar */}
          <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-xl border border-subtle-border bg-surface/80 px-4 py-2 text-xs text-muted shadow-xs backdrop-blur-xs">
            <span className="font-semibold text-heading">Our Technology Ecosystem</span>
            <span className="text-subtle-border">•</span>
            <span>Trusted platforms. Modern technology. Business-focused solutions.</span>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {partnerCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? partnerPlatforms.length
                : partnerPlatforms.filter((p) => p.category === cat.category).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "border border-subtle-border bg-surface text-muted hover:border-primary/30 hover:text-heading hover:bg-surface-hover"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#F1EEE5] text-muted group-hover:text-heading"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Platforms Grid / Groups */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeCategory === "all" ? (
              <motion.div
                key="all-grouped"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-14"
              >
                {categoriesInOrder.map((categoryName) => {
                  const platformsInCategory = partnerPlatforms.filter(
                    (p) => p.category === categoryName
                  );

                  return (
                    <div key={categoryName} className="space-y-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-subtle-border pb-3">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          <h3 className="text-lg font-bold text-heading">
                            {categoryName}
                          </h3>
                        </div>
                        <span className="mt-1 sm:mt-0 text-xs text-muted font-medium">
                          {platformsInCategory.length} {platformsInCategory.length === 1 ? "Platform" : "Platforms"}
                        </span>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {platformsInCategory.map((partner) => (
                          <PlatformCard key={partner.id} partner={partner} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredPlatforms.map((partner) => (
                  <PlatformCard key={partner.id} partner={partner} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Optional Call to Action Block */}
        <div className="mt-20 overflow-hidden rounded-2xl border border-subtle-border bg-gradient-to-br from-surface via-surface to-[#F1EEE5]/70 p-8 sm:p-12 shadow-sm text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-heading">
              Need a solution built around your technology stack?
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted font-sans">
              From custom software and SaaS platforms to e-commerce, cloud infrastructure and digital growth, Magnivel Technologies can help you plan, build and scale your solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ partner }: { partner: PartnerPlatform }) {
  return (
    <article
      className="glass-card group flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
      style={{
        borderTop: partner.color ? `3px solid ${partner.color}25` : undefined,
      }}
    >
      <div>
        {/* Top Header: Logo + Badges */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-11 w-auto max-w-[120px] items-center justify-start">
            <PartnerLogo id={partner.id} />
          </div>

          {/* Partner Status / Official Partner badge */}
          {partner.officialPartner ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              <svg
                className="h-3 w-3 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Official Partner
            </span>
          ) : (
            <span className="inline-flex items-center rounded-md border border-subtle-border bg-[#F1EEE5]/70 px-2 py-0.5 text-[10px] font-medium text-muted">
              {partner.status}
            </span>
          )}
        </div>

        {/* Platform Name & Category */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <h4 className="font-heading text-lg font-bold text-heading group-hover:text-primary transition-colors">
              {partner.name}
            </h4>
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-primary/80">
            {partner.category}
          </p>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted font-sans">
          {partner.description}
        </p>
      </div>

      {/* Card Footer: Subtle indicator / External Link */}
      <div className="mt-5 pt-3 border-t border-subtle-border/60 flex items-center justify-between text-[11px] text-muted">
        <span className="font-medium text-muted/80">{partner.altText.split(" ")[0]} Stack</span>
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary/70 hover:text-primary transition-colors font-semibold"
            aria-label={`Learn more about ${partner.name}`}
          >
            <span>Learn More</span>
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
