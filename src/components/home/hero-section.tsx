"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@/components/icon";
import { ParticlesBackground } from "@/components/motion";
import { HeroDashboard } from "./hero-dashboard";

export function HeroSection() {
  return (
    <section className="gradient-mesh bg-grid relative overflow-hidden">
      <ParticlesBackground count={24} />
      <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-40 h-80 w-80 rounded-full bg-accent-secondary/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent-light/8 blur-[80px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-dark"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
            AI-Powered Software Development
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Transforming Ideas Into{" "}
            <span className="gradient-text">Intelligent Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            We build AI-powered software, scalable web platforms, mobile applications, and enterprise solutions that accelerate business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Start Your Project
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
              <Icon name="external-link" size={16} />
            </Link>
          </motion.div>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
