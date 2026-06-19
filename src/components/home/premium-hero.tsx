"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@/components/icon";
import { AuroraBackground } from "@/components/premium/aurora-background";
import { MagneticButton } from "@/components/premium/magnetic-button";
import { ParticlesBackground } from "@/components/motion";
import { CyberSphere } from "@/components/premium/cyber-sphere";

export function PremiumHero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-grid flex flex-col justify-center pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
      <AuroraBackground />
      <ParticlesBackground count={35} />
      
      {/* Dark vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-[#0B1215]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#0B1215]/40 to-transparent hidden lg:block" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Left Column: Typography Content */}
          <div className="z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Software Development Company
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading mt-6 text-4xl font-extrabold leading-[1.08] tracking-wider text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              BUILDING THE
              <br />
              SYSTEMS THAT
              <br />
              <span className="gradient-text">DRIVE BUSINESS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg font-sans"
            >
              Magnivel Technologies is a software development company that helps businesses build websites, web applications, SaaS platforms, mobile apps, AI solutions, and custom software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton href="/contact">
                Get Free Consultation
                <Icon name="arrow-right" size={14} className="text-white" />
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="secondary">
                View Our Work
                <Icon name="external-link" size={14} className="text-muted group-hover:text-white" />
              </MagneticButton>
            </motion.div>

            {/* Cyberpunk Specs Info Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 border-t border-white/5 pt-8"
            >
              {[
                { label: "Applied Intelligence", spec: "AI & ML DEVELOPMENT" },
                { label: "Core Web Vitals Optimized", spec: "99+ LIGHTHOUSE SCORE" },
                { label: "Client-Centric Collaboration", spec: "TRANSPARENT PROCESS" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#D9B08C] font-mono">
                    {"// "}{item.spec}
                  </span>
                  <span className="text-[11px] font-bold text-muted font-heading uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D CyberSphere & Float Cards */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[480px]"
            >
              {/* Animated CyberSphere */}
              <CyberSphere />

              {/* Float Card 1: AI Solutions status */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card absolute left-2 top-[10%] z-20 flex items-center gap-3 p-3 shadow-2xl backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20">
                  <Icon name="brain" size={14} />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted">AI Engineering</h4>
                  <p className="font-mono text-[10px] text-white">{"MODEL INTEGRATION // ACTIVE"}</p>
                </div>
              </motion.div>

              {/* Float Card 2: Production status */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="glass-card absolute right-4 bottom-[15%] z-20 flex items-center gap-3 p-3 shadow-2xl backdrop-blur-md"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/15 text-success border border-success/20 animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-success" />
                </div>
                <div>
                  <h4 className="text-[9px] font-bold uppercase tracking-widest text-muted">Cloud Operations</h4>
                  <p className="font-mono text-[10px] text-white">{"UPTIME // 99.99%"}</p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Down Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#services" className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5 cursor-pointer">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-accent-secondary" 
          />
        </a>
      </motion.div>
    </section>
  );
}
