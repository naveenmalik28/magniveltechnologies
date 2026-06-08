import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { PageShell, SectionTitle } from "@/components/page-shell";
import {
  faqs,
  processSteps,
  stats,
  trustedBy,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Magnivel Technologies | Premium AI & Software Development Company",
  description:
    "Magnivel Technologies builds AI-powered websites, custom software, mobile apps, SaaS platforms, and automation systems for startups, SMEs, enterprises, and global clients.",
  keywords: [
    "AI Software Development Company",
    "Web Application Development",
    "AI Chatbot Developers",
    "SaaS Platform Development",
    "Enterprise AI Solutions",
    "Custom Software Engineering",
    "Next.js Development",
    "AI automation",
  ],
  alternates: {
    canonical: "https://magnivel.com",
  },
  openGraph: {
    title: "Magnivel Technologies | Premium Software & AI Solutions",
    description:
      "Transforming ideas into secure, scalable, and AI-driven applications. Partner with our engineering team today.",
    url: "https://magnivel.com",
    type: "website",
    images: [
      {
        url: "https://magnivel.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Magnivel Technologies",
      },
    ],
  },
};

const serviceCards = [
  {
    title: "Website Development",
    href: "/website-development-services",
    icon: "globe",
    description: "High-performance marketing websites, corporate portals, and headless CMS setups tailored for organic growth.",
    tag: "SEO & Lead Focused"
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app-development",
    icon: "smartphone",
    description: "Native and cross-platform iOS & Android apps designed for smooth mobile engagement.",
    tag: "iOS & Android"
  },
  {
    title: "Custom Software",
    href: "/custom-software-development",
    icon: "code",
    description: "Scalable backend systems, operations dashboards, API architectures, and databases.",
    tag: "Secure & Scalable"
  },
  {
    title: "AI Chatbots & Agents",
    href: "/ai-chatbot-development",
    icon: "brain",
    description: "Advanced GPT, Gemini, and Claude powered chatbots, semantic databases, and RAG systems.",
    tag: "Agentic AI"
  },
  {
    title: "AI Automation Services",
    href: "/ai-automation-services",
    icon: "sparkles",
    description: "Streamline workflows, parse document data, automate repetitive tasks, and cut operating costs.",
    tag: "Hyper-Automation"
  },
  {
    title: "SaaS Development",
    href: "/saas-development",
    icon: "layers",
    description: "Multi-tenant cloud architecture, robust subscription structures, and Stripe setups.",
    tag: "Subscription Ready"
  }
];

const backingCards = [
  {
    title: "Global Business Network",
    icon: "users",
    description:
      "Connecting professionals, organizations, and businesses across industries through innovation and collaboration.",
  },
  {
    title: "International Conferences & Events",
    icon: "globe",
    description:
      "Supporting global conferences, summits, and knowledge-sharing platforms across multiple industries.",
    href: "https://magnivelinternational.com/conferences",
  },
  {
    title: "Research & Publishing Initiatives",
    icon: "book",
    description:
      "Contributing to academic publishing, research dissemination, and scientific knowledge exchange worldwide.",
    href: "https://magnivelinternational.com/journals",
  },
  {
    title: "Technology & Innovation",
    icon: "sparkles",
    description:
      "Delivering modern software solutions, AI applications, cloud platforms, and digital transformation services.",
  },
];

const choosePillars = [
  {
    title: "AI Expertise",
    desc: "We integrate state-of-the-art LLMs (GPT-4o, Gemini 1.5 Pro, Claude 3.5 Sonnet) into production workflows with precision.",
    icon: "brain"
  },
  {
    title: "On-Time Delivery",
    desc: "Our agile execution model ensures weekly product updates, absolute milestones tracking, and zero launch delays.",
    icon: "clock"
  },
  {
    title: "Modern Tech Stack",
    desc: "We use Node.js, Python, Next.js, Django, AWS, and secure Postgres instances for fast load times and clean codes.",
    icon: "code"
  },
  {
    title: "Global Delivery Hubs",
    desc: "Serving startups, SMEs, and enterprise clients across India, North America, UAE, Europe, and Southeast Asia.",
    icon: "globe"
  },
  {
    title: "Secure Development",
    desc: "Strict compliance protocols, encrypted databases, safe payment systems, and ready-to-sign NDAs for IP protection.",
    icon: "shield"
  },
  {
    title: "Dedicated Technical Support",
    desc: "We provide round-the-clock server monitoring, immediate bug mitigation, and proactive scalability planning.",
    icon: "headphones"
  }
];

const featuredProjects = [
  {
    title: "AI-Powered Patient Scheduler",
    impact: "75% Reduction in Support Overhead",
    tech: ["Next.js", "LangChain", "Gemini API", "PostgreSQL"],
    desc: "Built a secure HIPAA-compliant scheduling agent that matches patient files with practitioner availability slots dynamically."
  },
  {
    title: "Multi-Tenant B2B Analytics SaaS",
    impact: "+240% Client Conversion Growth",
    tech: ["React", "Node.js", "Redis", "Stripe API"],
    desc: "Developed a granular metrics portal featuring dynamic dashboards, usage-based pricing models, and team-collaboration logs."
  },
  {
    title: "Real Estate Portal with QR Integrations",
    impact: "Over 50K Leads Captured Stably",
    tech: ["Django", "Python", "AWS S3", "Tailwind CSS"],
    desc: "Architected a responsive property database showing live inventory locations, PDF brochure builders, and automated broker alerts."
  }
];

const clientReviews = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    company: "TechVentures India",
    quote: "Magnivel Technologies transformed our digital presence. Their AI agents and clean web builds have automated our leads routing flawlessly. Five stars!",
    rating: 5,
    metrics: "3x Inquiries Growth"
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Product",
    company: "DataFlow Systems USA",
    quote: "Working with Magnivel was exceptional. They built our customer operations panel quickly, and the Gemini integration saves our support reps hours every day.",
    rating: 5,
    metrics: "60% Staff Hours Saved"
  },
  {
    name: "Faisal Al-Suwaidi",
    role: "Managing Director",
    company: "Apex Properties Dubai",
    quote: "Highly competent tech partner. They delivered a custom database engine on budget and under schedule. Recommended for complex software engineering.",
    rating: 5,
    metrics: "100% Reliable Deployment"
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function MagnivelInternationalBacking() {
  return (
    <section
      aria-labelledby="magnivel-international-heading"
      className="border-b border-subtle-border bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="animate-fade-up">
            <span className="inline-flex rounded-full border border-accent/15 bg-accent-subtle px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-dark">
              Group Strength
            </span>
            <h2
              id="magnivel-international-heading"
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl"
            >
              Backed by Magnivel International
            </h2>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-widest text-accent-dark">
              Global Reach. Industry Expertise. Technology Excellence.
            </p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                Magnivel Technologies operates as the technology and digital solutions division of Magnivel International, a global organization focused on conferences, research, publishing, business networking, and innovation-driven initiatives.
              </p>
              <p>
                Through this association, we combine industry expertise, international reach, and technical excellence to deliver modern digital solutions for businesses, startups, organizations, and enterprises worldwide.
              </p>
              <p className="text-xs font-semibold leading-relaxed text-dimmed">
                This ecosystem strengthens our work as a software development company providing digital transformation services, AI solutions, web development, mobile app development, technology consulting, research and innovation support, international conferences, and publishing solutions.
              </p>
            </div>

            <div
              aria-label="Magnivel brand relationship"
              className="mt-8 rounded-lg border border-subtle-border bg-background/70 p-4 shadow-sm"
            >
              {[
                "Magnivel International",
                "Magnivel Technologies",
                "Web Development | Mobile Apps | AI Solutions | Custom Software",
              ].map((item, index, arr) => (
                <div key={item} className="flex flex-col items-center text-center">
                  <div
                    className={`w-full rounded-lg border px-4 py-3 text-xs font-extrabold ${
                      index === 1
                        ? "border-accent/25 bg-white text-accent-dark shadow-sm"
                        : "border-subtle-border bg-white/70 text-heading"
                    }`}
                  >
                    {item}
                  </div>
                  {index < arr.length - 1 ? (
                    <Icon name="chevron-down" size={18} className="my-2 text-accent" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {backingCards.map((card, index) => {
              const className = `glow-card group min-h-52 p-6 animate-fade-up ${
                index === 1 ? "delay-75" : index === 2 ? "delay-150" : ""
              }`;
              const content = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/10 bg-accent-subtle text-accent-dark">
                      <Icon name={card.icon} size={18} />
                    </span>
                    {card.href ? (
                      <Icon name="external-link" size={14} className="text-dimmed transition-colors group-hover:text-accent-dark" />
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-heading">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {card.description}
                  </p>
                </>
              );

              return card.href ? (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              ) : (
                <article key={card.title} className={className}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ─── HERO SECTION ─── */}
      <section className="gradient-mesh bg-grid dark-panel relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="relative z-10 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/8 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-100 animate-pulse-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-ping" />
              AI-Powered Software Development Company
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Premium <span className="text-cyan-300">Software & AI</span> Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We design and build secure, fast, and scalable digital products. From high-conversion SaaS platforms to custom LLM agents and enterprise portals, we partner with clients in India, USA, and globally.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15">
                Explore Services
                <Icon name="chevron-down" size={16} />
              </Link>
            </div>
            
            {/* Trusted By indicators */}
            <div className="mt-12 border-t border-white/10 pt-6">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Collaborating with Ambitious Brands Worldwide</p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-xs font-bold text-slate-300">
                {trustedBy.map((partner) => (
                  <span key={partner} className="hover:text-cyan-200 transition-colors">{partner}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Hero Side graphic */}
          <div className="relative z-10 lg:col-span-5">
            <div className="rounded-xl border border-white/12 bg-white/5 p-5 shadow-2xl backdrop-blur-xl animate-float">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-cyan-200 uppercase font-bold">magnivel-ai-node v1.0.4</span>
              </div>
              <div className="grid gap-3 pt-4">
                {[
                  ["GPT/Claude Integration", "Active - 99.9% uptime", "API Connected", "text-cyan-300"],
                  ["Cloud Infrastructure", "Fully Configured", "AWS Node", "text-emerald-300"],
                  ["Lead Routing Engine", "Dynamic Matching", "Online", "text-amber-300"],
                ].map(([title, desc, status, colorClass]) => (
                  <div key={title} className="rounded-lg border border-white/5 bg-slate-950/40 p-4 transition-all hover:bg-slate-950/60">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs font-bold text-white">{title}</p>
                      <span className={`text-[10px] font-bold ${colorClass}`}>{status}</span>
                    </div>
                    <p className="mt-1 font-mono text-[10px] text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS SECTION ─── */}
      <section className="border-b border-subtle-border bg-white">
        <div className="mx-auto grid grid-cols-2 gap-4 px-4 py-8 sm:px-6 md:grid-cols-5 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-subtle-border bg-background/50 p-5 text-center shadow-sm">
              <p className="text-2xl font-extrabold text-heading sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-bold text-dimmed uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <MagnivelInternationalBacking />

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-20">
        <SectionTitle
          eyebrow="Services"
          title="Engineered for high speed, premium design, and organic SEO."
          description="We deliver full-cycle web and software solutions. Browse our premium service lines below to explore deep technical benefits."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <article key={service.title} className="glow-card flex flex-col justify-between p-6 hover:border-accent-light/40">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/10">
                    <Icon name={service.icon} size={18} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-muted">{service.tag}</span>
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-heading">{service.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">{service.description}</p>
              </div>
              <Link href={service.href} className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark hover:text-accent-light transition-colors group">
                Learn technical details
                <Icon name="arrow-right" size={12} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ─── FEATURED CASE STUDIES ─── */}
      <section className="bg-surface/40 border-y border-subtle-border py-20 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-100/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              eyebrow="Portfolio & Proofs"
              title="Featured Case Studies & Software Impacts"
              description="Explore representative software platforms and custom AI solutions engineered by Magnivel Technologies."
            />
            <Link href="/portfolio" className="btn-secondary text-xs">
              View Complete Portfolio
              <Icon name="external-link" size={12} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.title} className="glow-card flex flex-col justify-between p-6">
                <div>
                  <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                    {project.impact}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-heading">{project.title}</h3>
                  <p className="mt-3.5 text-xs leading-relaxed text-muted">{project.desc}</p>
                </div>
                <div className="mt-6 border-t border-subtle-border/50 pt-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-md border border-subtle-border bg-background px-2 py-0.5 text-[9px] font-semibold text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (6 PILLARS) ─── */}
      <section className="dark-panel py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="rounded-full border border-cyan-300/25 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
              Why Partner With Us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Reliable engineering designed for business scale.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We combine product-led planning, strict timelines, robust security, and deep AI integrations to deliver software that builds immediate business value.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {choosePillars.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/8 bg-white/5 p-6 hover:border-cyan-300/20 transition-all">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200 border border-cyan-300/20 mb-4">
                  <Icon name={item.icon === "headphones" ? "headphones" : item.icon} size={16} />
                </span>
                <h4 className="text-sm font-extrabold text-white uppercase tracking-wide">{item.title}</h4>
                <p className="mt-3.5 text-xs leading-relaxed text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE DEVELOPMENT PROCESS ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Blueprint" title="A meticulous, five-step development lifecycle." />
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.step} className="glow-card p-5 hover:border-accent-light/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-accent-dark uppercase tracking-widest">Step 0{step.step}</span>
                <span className="text-dimmed">
                  <Icon name={step.icon} size={16} />
                </span>
              </div>
              <h3 className="mt-5 text-sm font-extrabold text-heading leading-tight">{step.title}</h3>
              <p className="mt-3 text-[11px] leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── CLIENT TESTIMONIALS ─── */}
      <section className="border-t border-subtle-border bg-surface/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Testimonials" title="Proven results backed by client feedback." className="mx-auto text-center" />
          
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clientReviews.map((rev) => (
              <article key={rev.name} className="glow-card flex flex-col justify-between p-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div className="flex gap-0.5 text-amber-500">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Icon key={i} name="star" size={13} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 border border-emerald-100">
                      {rev.metrics}
                    </span>
                  </div>
                  <p className="mt-4 text-xs italic leading-relaxed text-muted">&ldquo;{rev.quote}&rdquo;</p>
                </div>
                <div className="mt-6 border-t border-subtle-border/50 pt-4">
                  <p className="text-xs font-extrabold text-heading">{rev.name}</p>
                  <p className="text-[10px] text-muted">{rev.role}, {rev.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SEO FAQ SECTION ─── */}
      <section className="border-y border-subtle-border bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="Answers"
              title="Frequently Asked Technical Questions"
              description="Learn more about our service methodology, budget estimates, development timelines, and secure cloud setups."
            />
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-subtle-border bg-background/50 p-4 transition-all hover:bg-background">
                <summary className="cursor-pointer font-extrabold text-heading text-sm flex justify-between items-center select-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180 text-accent">
                    <Icon name="chevron-down" size={14} />
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-muted pl-1 border-t border-subtle-border/30 pt-2.5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 scroll-mt-20">
        <div className="flex flex-col gap-6">
          <SectionTitle
            eyebrow="Free Consultation"
            title="Let's build something exceptional together."
            description="Discuss your project timeline, feature requirements, or custom AI concepts. We sign NDAs promptly and reply within 24 hours."
          />
          <div className="mt-4 flex flex-col gap-4 text-xs font-semibold text-heading">
            <a href="mailto:contact@magnivel.com" className="flex items-center gap-3 hover:text-accent transition-colors">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-subtle text-accent border border-accent/15">
                <Icon name="mail" size={14} />
              </span>
              contact@magnivel.com
            </a>
            <span className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-subtle text-accent border border-accent/15">
                <Icon name="shield" size={14} />
              </span>
              Strict NDA Protection Guaranteed
            </span>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
