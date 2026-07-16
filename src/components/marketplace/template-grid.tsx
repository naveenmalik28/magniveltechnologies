"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { TEMPLATES, CATEGORIES, FUTURE_CATEGORIES } from "@/lib/ready-websites-data";

export function TemplateGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = TEMPLATES.filter((tpl) => {
    const matchesCategory = activeCategory === "all" || tpl.categorySlug === activeCategory;
    const matchesSearch =
      tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Determine if we should show coming soon placeholders for the selected category
  const showComingSoon = activeCategory !== "all" && filteredTemplates.length === 0;

  return (
    <div className="space-y-12">
      {/* Search & Filter Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-subtle-border/60 pb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-none md:pb-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold font-heading uppercase tracking-wider transition-all cursor-pointer border ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-subtle-border bg-surface text-muted hover:border-accent-secondary/40 hover:text-heading"
                }`}
              >
                <Icon name={cat.icon} size={14} />
                <span>{cat.name}</span>
                {cat.count > 0 && (
                  <span
                    className={`ml-1 rounded-full px-2 py-0.5 text-[9px] font-extrabold ${
                      isActive ? "bg-white text-primary" : "bg-accent-subtle text-accent-dark"
                    }`}
                  >
                    {cat.count}
                  </span>
                )}
                {cat.isComingSoon && (
                  <span className="rounded bg-accent-secondary/20 px-1.5 py-0.5 text-[8px] font-extrabold uppercase text-accent-secondary">
                    Soon
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full max-w-md shrink-0">
          <input
            type="text"
            placeholder="Search ready websites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input pl-11"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-dimmed">
            <Icon name="search" size={16} />
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-heading cursor-pointer"
            >
              <Icon name="x" size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Active templates */}
        {filteredTemplates.map((tpl) => (
          <motion.div
            key={tpl.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card flex flex-col justify-between overflow-hidden"
          >
            {/* Card Header & Preview */}
            <div>
              <div className="relative aspect-video w-full bg-surface-elevated/40 border-b border-subtle-border flex flex-col items-center justify-center p-6 group overflow-hidden">
                {/* Clean gradient background mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 transition-transform group-hover:scale-105 duration-700" />
                
                {/* Mockup browser header */}
                <div className="absolute top-0 inset-x-0 h-6 border-b border-subtle-border/60 bg-background-secondary/80 flex items-center gap-1.5 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/80" />
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-[8px] text-dimmed font-mono truncate max-w-[120px]">
                    {tpl.liveDemoUrl.replace("https://", "")}
                  </span>
                </div>

                {/* Template Visual Concept Card */}
                <div className="relative mt-4 flex flex-col items-center text-center p-4 rounded-lg bg-surface shadow-md border border-subtle-border max-w-[85%] transform group-hover:translate-y-[-4px] transition-transform duration-500">
                  <span className="rounded-full bg-accent-subtle p-2 text-primary">
                    <Icon name="palette" size={18} />
                  </span>
                  <h4 className="mt-2 text-[11px] font-extrabold text-heading uppercase tracking-wide">
                    {tpl.title}
                  </h4>
                  <span className="mt-1 text-[9px] font-bold text-accent-secondary uppercase tracking-widest">
                    Live Preview Ready
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute left-3 bottom-3 flex flex-wrap gap-1">
                  {tpl.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`rounded px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide border ${
                        badge === "Best Seller"
                          ? "bg-amber-500/10 border-amber-500/20 text-amber-600"
                          : "bg-primary/5 border-primary/10 text-primary"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {/* Category and title */}
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-accent-secondary">
                  {tpl.category}
                </span>
                <h3 className="mt-2 text-base font-extrabold text-heading leading-snug hover:text-primary transition-colors">
                  <Link href={`/ready-websites/${tpl.slug}`}>{tpl.title}</Link>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-2">
                  {tpl.shortDesc}
                </p>

                {/* Premium Pricing Row (Moved from footer to body) */}
                <div className="mt-4 flex items-center justify-between border-t border-subtle-border/40 pt-4">
                  <div>
                    <span className="block text-[8px] font-extrabold uppercase tracking-widest text-dimmed">
                      One-Time Setup Fee
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-base sm:text-lg font-black text-heading font-heading">
                        ${tpl.priceUsd.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-muted font-bold">
                        / ₹{tpl.priceInr.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <span className="rounded bg-accent-subtle border border-accent/15 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-accent-dark">
                    {tpl.deliveryDays} Days Delivery
                  </span>
                </div>

                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-subtle-border/40 pt-4 text-[10px] text-muted">
                  <span className="flex items-center gap-1">
                    <Icon name="check-circle" size={12} className="text-emerald-500" />
                    Clean Code
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="check-circle" size={12} className="text-emerald-500" />
                    1 Month Support
                  </span>
                </div>
              </div>
            </div>

            {/* Card Footer: Clean 50/50 Split buttons */}
            <div className="grid grid-cols-2 border-t border-subtle-border/40 bg-background-secondary/30 p-4 gap-3">
              <a
                href={tpl.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-4 text-[11px] font-extrabold uppercase tracking-wider justify-center text-center border border-subtle-border/80 hover:bg-background-alternate transition-colors cursor-pointer flex items-center gap-1.5"
              >
                Live Demo
                <Icon name="external-link" size={12} />
              </a>
              <Link
                href={`/ready-websites/${tpl.slug}`}
                className="btn-primary py-2.5 px-4 text-[11px] font-extrabold uppercase tracking-wider justify-center text-center premium-btn cursor-pointer flex items-center gap-1.5"
              >
                Details
                <Icon name="arrow-right" size={12} />
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Placeholders */}
        {(showComingSoon || activeCategory === "all") &&
          (activeCategory === "all"
            ? FUTURE_CATEGORIES.slice(0, 5) // Show top 5 placeholders in the 'all' view
            : FUTURE_CATEGORIES.filter((cat) => {
                // If category filter is specifically one of the future items
                const matchingCat = CATEGORIES.find((c) => c.slug === activeCategory);
                return matchingCat ? cat.toLowerCase().includes(matchingCat.name.split(" ")[0].toLowerCase()) : false;
              }).concat(FUTURE_CATEGORIES.slice(0, 2)) // Fallback if no exact match
          ).map((catName, idx) => (
            <motion.div
              key={`soon-${catName}-${idx}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-dashed border-subtle-border bg-surface/50 p-6 flex flex-col justify-between min-h-[360px] opacity-75 hover:opacity-100 transition-opacity"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded bg-accent-secondary/15 px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-accent-secondary">
                    Coming Soon
                  </span>
                  <span className="text-[10px] text-dimmed font-bold">Premium Spec</span>
                </div>

                <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl bg-background-secondary border border-subtle-border text-dimmed">
                  <Icon name="sparkles" size={20} />
                </div>

                <h3 className="mt-6 text-sm font-extrabold text-heading uppercase tracking-wide">
                  {catName} Website Template
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted font-medium">
                  We are constructing high-performance, conversion-optimized pre-built designs for {catName.toLowerCase()} businesses. Available for pre-order customization.
                </p>

                <ul className="mt-4 space-y-1.5 text-[10px] text-muted font-semibold">
                  <li className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-accent-secondary" />
                    Branded Custom UI Design
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-accent-secondary" />
                    Dynamic Reservation & CMS
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-accent-secondary" />
                    Core Web Vitals Optimized
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-t border-subtle-border/30 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-accent-secondary font-bold font-heading uppercase tracking-wider">
                  Pre-Order Available
                </span>
                <Link
                  href={`/contact?interest=Preorder-${catName}-Template`}
                  className="btn-secondary py-1.5 px-3.5 text-[9px] font-bold hover:border-primary hover:text-primary"
                >
                  Request Build
                  <Icon name="arrow-right" size={10} />
                </Link>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Empty Search State */}
      {filteredTemplates.length === 0 && !showComingSoon && (
        <div className="text-center py-16 border border-dashed border-subtle-border rounded-2xl bg-surface/30">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-primary mb-4">
            <Icon name="search" size={20} />
          </div>
          <h3 className="text-sm font-extrabold text-heading uppercase tracking-wide">
            No templates found
          </h3>
          <p className="mt-2 text-xs text-muted max-w-sm mx-auto leading-relaxed">
            We couldn&apos;t find any template matching &quot;{searchQuery}&quot;. Try adjusting your search keywords or request a custom build.
          </p>
          <div className="mt-6">
            <Link href="/contact?interest=Custom-Website" className="btn-secondary py-2 px-5 text-xs font-bold">
              Request Custom Development
              <Icon name="arrow-right" size={12} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
