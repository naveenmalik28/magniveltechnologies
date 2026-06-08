"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@/components/icon";
import { AuroraBackground } from "@/components/premium/aurora-background";
import { MagneticButton } from "@/components/premium/magnetic-button";
import { ParticlesBackground } from "@/components/motion";
import { floatingSnippets, heroPhrases } from "@/lib/home-data";
import { HeroDashboard } from "./hero-dashboard";

export function PremiumHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % heroPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-grid">
      <AuroraBackground />
      <ParticlesBackground count={28} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Floating code snippets */}
      {floatingSnippets.map((snippet, i) => (
        <motion.div
          key={snippet}
          className="pointer-events-none absolute hidden font-mono text-[10px] text-accent-light/50 lg:block"
          style={{
            left: `${12 + i * 18}%`,
            top: `${20 + (i % 2) * 35}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          <span className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
            {snippet}
          </span>
        </motion.div>
      ))}

      <motion.div
        style={{ y: parallaxY, opacity }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-0"
      >
        <div className="z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-dark neon-border"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
            Global Technology Partner
          </motion.span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
            Transforming Ideas Into
            <br />
            <span className="relative mt-2 inline-block h-[1.15em] min-w-[280px] overflow-hidden sm:min-w-[360px] lg:min-w-[480px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="gradient-text absolute left-0 top-0"
                >
                  {heroPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            A global technology partner delivering AI-powered software, enterprise platforms,
            digital transformation solutions, and scalable innovation for modern businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="/contact">
              Start Your Project
              <Icon name="arrow-right" size={16} />
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="secondary">
              View Our Work
              <Icon name="external-link" size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 border-t border-white/8 pt-8"
          >
            {["Innovation", "Trust", "Excellence", "Global Reach"].map((tag) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-muted">
                <span className="mr-2 text-accent-light">◆</span>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mt-12 lg:mt-0">
          <HeroDashboard />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-accent-light" />
        </div>
      </motion.div>
    </section>
  );
}
