import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageShell, SectionTitle } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { projects, services, technologies, testimonials, trustedBy, stats } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-grid gradient-mesh border-b border-subtle-border py-20 lg:py-32">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-[300px] w-[500px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light border border-accent/15 shadow-md shadow-accent/5 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Advanced Software Engineering
            </span>
            
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl leading-none">
              Build Websites, Apps &{" "}
              <span className="bg-gradient-to-r from-accent-light via-indigo-300 to-[#a855f7] bg-clip-text text-transparent">
                SaaS Products
              </span>{" "}
              That Scale
            </h1>
            
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Magnivel Technologies designs, builds, and deploys high-performance digital products. 
              We combine robust system architecture, beautiful conversion-first interfaces, and custom AI integrations to drive growth.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary animate-fade-up">
                Get Free Consultation
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/services" className="btn-secondary animate-fade-up delay-75">
                Explore Services
              </Link>
            </div>
            
            {/* Trusted By strip */}
            <div className="mt-12 border-t border-subtle-border/60 pt-6 w-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Trusted by innovators at</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 items-center">
                {trustedBy.map((partner) => (
                  <span key={partner} className="text-sm font-semibold text-muted/70 hover:text-white transition-colors duration-200">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interactive Graphic / Card (Right-side) */}
          <div className="mt-16 lg:col-span-5 lg:mt-0 animate-float">
            <div className="rounded-xl border border-subtle-border bg-surface/50 p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              {/* Glass shine hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-subtle-border/80 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="flex h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="flex h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-accent-light">magnivel-dashboard.sh</span>
              </div>
              
              <div className="grid gap-4">
                {[
                  { name: "AI Automation Sprints", metric: "Active", percent: "98% accuracy", color: "text-[#22c55e] bg-emerald-500/10 border-emerald-500/20" },
                  { name: "Global Cloud Portals", metric: "Live", percent: "99.99% uptime", color: "text-accent-light bg-accent-subtle border-accent/20" },
                  { name: "Conversion Rate Optimize", metric: "+240%", percent: "Leads boosted", color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
                ].map((item) => (
                  <div key={item.name} className="rounded-lg border border-subtle-border bg-background/50 p-4 hover:border-accent-light/30 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <span className={`badge text-xs px-2.5 py-0.5 rounded-full border ${item.color}`}>
                        {item.metric}
                      </span>
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-xs text-muted">
                      <span>Production Server</span>
                      <span className="font-mono font-medium">{item.percent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats / Achievements ─── */}
      <section className="border-b border-subtle-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 items-center">
                <span className="text-4xl font-extrabold text-white tracking-tight bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm text-muted font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle 
          eyebrow="Services" 
          title="Full-cycle software delivery for ambitious teams." 
          description="We take product ideas from planning to code execution, ensuring scalable defaults and absolute security."
        />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article 
              key={service.title} 
              className="rounded-xl border border-subtle-border bg-surface p-6 shadow-sm hover:border-accent-light/30 glow-card group relative"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15 group-hover:scale-105 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon name={service.icon} size={22} />
                </span>
                <span className="text-xs font-mono text-dimmed group-hover:text-accent-light transition-colors">0{services.indexOf(service) + 1}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <Link href="/services" className="text-xs font-semibold text-accent-light hover:underline flex items-center gap-1">
                  Learn more
                  <Icon name="chevron-right" size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Why Choose Us Section ─── */}
      <section className="relative overflow-hidden bg-surface/30 border-y border-subtle-border py-20">
        <div className="absolute top-1/2 left-0 h-[250px] w-[500px] -translate-y-1/2 rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 items-center">
          <div className="lg:col-span-6">
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Clean engineering, practical strategies, and conversion-first execution."
              description="Off-the-shelf templates limit growth. We build bespoke systems engineered for speed, clean structures, and massive user retention."
            />
          </div>
          <div className="mt-12 lg:col-span-6 lg:mt-0 grid gap-4">
            {[
              { title: "Discovery Before Development", text: "We analyze target user flows and system limits before typing a line of code." },
              { title: "Clean, Componentized Architecture", text: "We build maintainable React / Next.js modules that are robust and reusable." },
              { title: "Server-Side Validation & Security", text: "All endpoints have deep verification, JWT checks, and robust database layers." },
              { title: "SEO & Mobile Optimization Baked In", text: "Enjoy perfect lighthouse scores, responsive grid scales, and quick image delivery." }
            ].map((item) => (
              <div 
                key={item.title} 
                className="rounded-xl border border-subtle-border bg-surface/60 p-5 hover:border-accent-light/20 transition-all duration-300 flex items-start gap-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-light border border-accent/15 mt-0.5">
                  <Icon name="check" size={14} />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="mt-1 text-xs text-muted leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio Section ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <SectionTitle eyebrow="Portfolio" title="High-fidelity case studies." />
          <Link href="/portfolio" className="btn-secondary py-2.5 px-5">
            View All Projects
            <Icon name="external-link" size={14} />
          </Link>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article 
              key={project.title} 
              className="rounded-xl border border-subtle-border bg-surface p-6 flex flex-col justify-between hover:border-accent-light/30 transition-all glow-card"
            >
              <div>
                <span className="inline-flex rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-light border border-accent/10">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 border-t border-subtle-border/40 pt-4 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md bg-background border border-subtle-border px-2 py-0.5 text-xs text-muted font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Technologies Section ─── */}
      <section className="relative overflow-hidden bg-surface/30 border-y border-subtle-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-light bg-accent-subtle px-3 py-1 rounded-full border border-accent/10">
              Tech Stack
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white">Modern tools for stable, secure products.</h2>
            <p className="mt-3 text-sm text-muted">We use production-proven languages and databases tailored to support high traffic.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="rounded-lg border border-subtle-border bg-surface px-5 py-3 text-sm font-semibold text-white hover:border-accent-light/40 transition-colors shadow-md flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-accent-light" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="What our clients say." className="text-center mx-auto" />
        
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div 
              key={t.name} 
              className="rounded-xl border border-subtle-border bg-surface p-6 shadow-sm flex flex-col justify-between relative glow-card"
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-0.5 text-accent-light mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Icon key={i} name="star" size={14} className="fill-accent-light text-accent-light" />
                  ))}
                </div>
                <p className="text-sm italic text-muted leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-subtle-border/50 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-muted mt-0.5">{t.role}, {t.company}</p>
                </div>
                <Icon name="quote" size={24} className="text-accent/15 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section className="border-t border-subtle-border bg-surface/20 py-20 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-12 lg:px-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <SectionTitle
              eyebrow="Contact"
              title="Tell us what you want to build."
              description="Share the service details, target budget, and scope. The Magnivel engineering team will respond within 24 hours."
            />
            
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
                  <Icon name="mail" size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">General Inquiries</p>
                  <p className="text-sm font-semibold text-white mt-0.5">contact@magnivel.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
                  <Icon name="globe" size={16} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Corporate Hub</p>
                  <p className="text-sm font-semibold text-white mt-0.5">magnivel.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
