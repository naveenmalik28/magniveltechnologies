"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/icon";
import { PageShell, SectionTitle } from "@/components/page-shell";
import { careersBenefits, jobOpenings, applicationSteps } from "@/lib/site";
import { AuroraBackground } from "@/components/premium/aurora-background";
import { CyberSphere } from "@/components/premium/cyber-sphere";
import { ParticlesBackground, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion";

const categories = ["All", "Full Stack", "Frontend", "Backend", "AI Engineer"];

export function CareersClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedJobSubject, setSelectedJobSubject] = useState("");

  const openingsRef = useRef<HTMLDivElement>(null);
  const applyRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement | null>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleApplyClick = (position: string) => {
    setSelectedJobSubject(`Application for ${position} - [Your Name]`);
    scrollToSection(applyRef);
  };

  // Filter jobs based on selected category tag
  const filteredJobs = jobOpenings.filter((job) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Full Stack") return job.position.includes("Full Stack");
    if (activeCategory === "Frontend") return job.position.includes("React") || job.position.includes("Frontend");
    if (activeCategory === "Backend") return job.position.includes("Backend") || job.position.includes("Python");
    if (activeCategory === "AI Engineer") return job.position.includes("AI");
    return true;
  });

  return (
    <PageShell>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-grid flex flex-col justify-center pt-36 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28 border-b border-white/5">
        <AuroraBackground />
        <ParticlesBackground count={30} />
        
        {/* Dark vignette overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-[#0B1215]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#0B1215]/40 to-transparent hidden lg:block" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Left Column: Typography Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-accent-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                Careers at Magnivel Technologies
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading mt-6 text-4xl font-extrabold leading-[1.08] tracking-wider text-heading sm:text-5xl md:text-6xl lg:text-7xl"
              >
                BUILD THE
                <br />
                <span className="gradient-text">FUTURE WITH US</span>
              </motion.h1>
 
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:text-lg font-sans"
              >
                Join our team and help build innovative software, web applications, mobile apps, AI solutions, and digital products for clients worldwide. We are always looking for talented developers and innovators to join our growing team.
              </motion.p>
 
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection(openingsRef)}
                  className="btn-primary cursor-pointer font-heading font-bold"
                >
                  View Open Positions
                  <Icon name="arrow-right" size={14} className="text-white" />
                </button>
                <button
                  onClick={() => scrollToSection(applyRef)}
                  className="btn-secondary cursor-pointer font-heading font-bold"
                >
                  Apply Now
                  <Icon name="mail" size={14} className="text-primary group-hover:text-primary" />
                </button>
              </motion.div>

              {/* Specs Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-8 border-t border-white/5 pt-8"
              >
                {[
                  { label: "Remote & Hybrid", spec: "WORK ENVIRONMENT" },
                  { label: "Modern Web & AI Tech", spec: "STACK FOCUS" },
                  { label: "Collaborative Culture", spec: "TEAM MINDSET" },
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

            {/* Right Column: 3D CyberSphere & Floating Tech badges */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-[480px]"
              >
                <CyberSphere />

                {/* Floating Tech Badge 1: React */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-card absolute left-2 top-[10%] z-20 flex items-center gap-2.5 p-2.5 shadow-2xl backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20">
                    <Icon name="code" size={12} />
                  </span>
                  <div>
                    <h4 className="text-[8px] font-bold uppercase tracking-widest text-muted font-heading">Frontend Core</h4>
                    <p className="font-mono text-[9px] text-heading">React / Next.js</p>
                  </div>
                </motion.div>
 
                {/* Floating Tech Badge 2: AI */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="glass-card absolute right-4 top-[15%] z-20 flex items-center gap-2.5 p-2.5 shadow-2xl backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20">
                    <Icon name="brain" size={12} />
                  </span>
                  <div>
                    <h4 className="text-[8px] font-bold uppercase tracking-widest text-muted font-heading">Intelligence</h4>
                    <p className="font-mono text-[9px] text-heading">AI / LLM Agents</p>
                  </div>
                </motion.div>
 
                {/* Floating Tech Badge 3: Node / Python */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="glass-card absolute left-6 bottom-[20%] z-20 flex items-center gap-2.5 p-2.5 shadow-2xl backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success border border-success/20">
                    <Icon name="server" size={12} />
                  </span>
                  <div>
                    <h4 className="text-[8px] font-bold uppercase tracking-widest text-muted font-heading">Backend Services</h4>
                    <p className="font-mono text-[9px] text-heading">Node / Python</p>
                  </div>
                </motion.div>
 
                {/* Floating Tech Badge 4: Cloud */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="glass-card absolute right-12 bottom-[10%] z-20 flex items-center gap-2.5 p-2.5 shadow-2xl backdrop-blur-md"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                    <Icon name="cloud" size={12} />
                  </span>
                  <div>
                    <h4 className="text-[8px] font-bold uppercase tracking-widest text-muted font-heading">Infrastructure</h4>
                    <p className="font-mono text-[9px] text-heading">AWS / Cloud</p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>

        {/* Down Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={() => scrollToSection(openingsRef)}
            aria-label="Scroll down to openings"
            className="flex h-10 w-6 items-start justify-center rounded-full border border-subtle-border p-1.5 cursor-pointer"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1 rounded-full bg-accent-secondary" 
            />
          </button>
        </motion.div>
      </section>
 
      {/* Why Join Us Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Why Work With Magnivel Technologies"
            title="A Culture Engineered For Growth"
            description="We combine cutting-edge tech stacks, modern workspaces, and collaborative engineering principles to create an elite developer environment."
            centered
            className="mx-auto"
          />
        </ScrollReveal>
 
        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careersBenefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <article className="glass-card h-full p-8 flex flex-col justify-between group">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary group-hover:border-accent-secondary/50 group-hover:bg-accent-secondary/15 transition-all duration-300">
                    <Icon name={benefit.icon} size={22} />
                  </span>
                  <h3 className="font-heading mt-6 text-base font-extrabold uppercase tracking-wide text-heading group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 text-xs leading-relaxed text-muted font-sans">
                    {benefit.description}
                  </p>
                </div>
                <div className="mt-6 h-0.5 w-8 bg-accent/20 group-hover:w-16 group-hover:bg-accent-secondary transition-all duration-300" />
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Current Openings Section */}
      <section ref={openingsRef} id="openings" className="border-t border-white/5 bg-surface/10 py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Join Our Elite Ranks"
              title="Current Openings"
              description="Explore remote and hybrid engineering positions and help build the future of software development."
              centered
              className="mx-auto"
            />
          </ScrollReveal>

          {/* Categories / Filter Bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "border-accent bg-accent text-white shadow-sm shadow-accent/15"
                    : "border-subtle-border bg-surface text-muted hover:border-accent/30 hover:text-heading"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <motion.div
            layout
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={job.id}
                  className="glass-card flex flex-col justify-between p-6 h-full group"
                >
                  <div>
                    {/* Badge and Location */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="badge font-mono text-[9px]">
                        OPEN
                      </span>
                      <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-widest flex items-center gap-1">
                        <Icon name="globe" size={10} className="text-accent-secondary" />
                        {job.location}
                      </span>
                    </div>

                    {/* Position */}
                    <h3 className="font-heading mt-4 text-base font-extrabold uppercase tracking-wide text-heading group-hover:text-accent transition-colors duration-300">
                      {job.position}
                    </h3>
                    
                    {/* Experience required */}
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent-secondary font-mono mt-1">
                      Experience: {job.experience}
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-xs leading-relaxed text-muted font-sans">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[9px] font-bold font-mono tracking-wide bg-surface border border-subtle-border text-muted group-hover:border-accent-secondary/20 group-hover:text-accent-secondary transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Action inside Card */}
                  <div className="mt-8 border-t border-subtle-border pt-4">
                    <button
                      onClick={() => handleApplyClick(job.position)}
                      className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted group-hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                      <span>Apply For This Role</span>
                      <Icon name="chevron-right" size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Fallback if no jobs filtered */}
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted font-sans text-sm">No positions currently open in this category.</p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 text-xs font-bold text-accent uppercase tracking-widest underline"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            eyebrow="The Journey To Join Us"
            title="How To Apply"
            description="Our recruitment pipelines are streamlined, fast, and structured. Here is what to expect."
            centered
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="mt-16 relative">
          {/* Connector Line in Background for Desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-accent/10 via-accent-secondary/30 to-accent/10 -translate-y-1/2 hidden lg:block pointer-events-none" />

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {applicationSteps.map((stepItem) => (
              <StaggerItem key={stepItem.step}>
                <div className="glass-card p-6 flex flex-col h-full hover:border-accent-secondary/20 hover:shadow-md transition-all duration-300">
                  {/* Step bubble */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-secondary/30 bg-accent-secondary/5 font-mono text-xs font-bold text-accent-secondary shadow-sm shadow-accent-secondary/5">
                    {stepItem.step}
                  </div>
                  <h3 className="font-heading mt-6 text-sm font-extrabold uppercase tracking-wide text-heading">
                    {stepItem.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted font-sans">
                    {stepItem.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Apply Now Section */}
      <section ref={applyRef} id="apply" className="border-t border-subtle-border py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card relative overflow-hidden p-8 sm:p-16 lg:p-20 text-center rounded-2xl border border-subtle-border hover:border-accent-secondary/20 transition-all duration-500">
            {/* Glowing background meshes */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-accent-secondary/10 blur-3xl animate-pulse-glow" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="section-eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
                Career Gateway
              </span>

              <h2 className="font-heading text-3xl font-extrabold uppercase leading-[1.1] tracking-widest text-heading sm:text-4xl lg:text-5xl">
                Ready To <span className="gradient-text">Join Our Team?</span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base md:text-lg font-sans">
                Send your updated resume, cover letter, and a link to your portfolio to our recruiting mailbox:
              </p>

              <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-background-secondary border border-subtle-border font-mono text-sm sm:text-base text-heading shadow-inner select-all">
                <Icon name="mail" size={16} className="text-accent-secondary" />
                contact@magnivel.com
              </div>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={`mailto:contact@magnivel.com?subject=${encodeURIComponent(
                    selectedJobSubject || "Careers Inquiry - [Your Name]"
                  )}&body=${encodeURIComponent(
                    "Hi Magnivel Recruiting Team,\n\nI am writing to express my interest in joining Magnivel Technologies. Attached is my resume and portfolio.\n\nPosition of interest:\nFull Name:\nPhone:\nLinkedIn / GitHub:\n\nThank you."
                  )}`}
                  className="btn-primary flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary/10 font-heading font-bold"
                >
                  Send Resume
                  <Icon name="mail" size={14} className="text-white" />
                </a >
                <button
                  onClick={() => scrollToSection(openingsRef)}
                  className="btn-secondary cursor-pointer font-heading font-bold"
                >
                  Review Positions
                  <Icon name="chevron-down" size={14} className="text-muted" />
                </button>
              </div>

              <p className="mt-6 text-[10px] text-dimmed uppercase tracking-wider font-mono">
                {"// "}NO DATABASE REQUIRED. ALL APPLICATIONS MANUALLY EVALUATED BY OUR CORE LEADERS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
