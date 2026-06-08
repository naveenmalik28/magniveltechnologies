"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icon";
import { ScrollReveal } from "@/components/motion";

type Review = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  metrics?: string;
  initials: string;
};

export function TestimonialsCarousel({ reviews }: { reviews: Review[] }) {
  const [active, setActive] = useState(0);
  const review = reviews[active];

  return (
    <section className="border-t border-subtle-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
            Trusted by Ambitious Teams
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-10 text-center"
            >
              <div className="flex justify-center gap-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="star" size={16} className="fill-amber-400" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                &ldquo;{review.quote}&rdquo;
              </p>
              {review.metrics ? (
                <span className="mt-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  {review.metrics}
                </span>
              ) : null}
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-secondary text-lg font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="font-extrabold text-heading">{review.name}</p>
                  <p className="text-sm text-muted">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                onClick={() => setActive(i)}
                aria-label={`View testimonial from ${r.name}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition ${
                  i === active
                    ? "bg-accent text-white"
                    : "border border-white/10 bg-surface text-muted hover:border-accent/30"
                }`}
              >
                {r.initials}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
