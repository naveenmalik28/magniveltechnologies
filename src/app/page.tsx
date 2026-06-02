import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { PageShell, SectionTitle } from "@/components/page-shell";
import {
  faqs,
  industries,
  processSteps,
  projects,
  services,
  stats,
  technologies,
  testimonials,
  trustedBy,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Magnivel Technologies | Software, Web, Mobile App & AI Development",
  description:
    "Magnivel Technologies builds scalable websites, mobile apps, AI-powered platforms, cloud systems, and custom software for startups, SMBs, enterprises, and international clients.",
  keywords: [
    "Software Development Company",
    "Web Development Company",
    "Mobile App Development Company",
    "AI Development Services",
    "Custom Software Development",
    "SaaS Development Company",
    "Enterprise Software Solutions",
    "Digital Transformation Services",
    "Cloud Application Development",
    "Technology Consulting Services",
  ],
  alternates: {
    canonical: "https://magnivel.com",
  },
  openGraph: {
    title: "Magnivel Technologies | Powerful Digital Solutions",
    description:
      "We build scalable websites, mobile apps, AI-powered platforms, and custom software that help businesses grow faster.",
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

const whyChoose = [
  "Expert Development Team",
  "Agile Development Process",
  "Transparent Communication",
  "On-Time Delivery",
  "Scalable Architecture",
  "Ongoing Support",
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

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="gradient-mesh bg-grid dark-panel relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-28">
          <div className="relative z-10 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/8 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse-glow" />
              Software development for growing companies
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Transforming Ideas Into Powerful Digital Solutions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              We build scalable websites, mobile apps, AI-powered platforms, and custom software that help businesses grow faster and operate smarter.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15">
                View Our Work
                <Icon name="external-link" size={16} />
              </Link>
            </div>
            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Trusted by product teams and businesses</p>
              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-300">
                {trustedBy.map((partner) => (
                  <span key={partner}>{partner}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-5">
            <div className="rounded-lg border border-white/12 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-xs text-cyan-100">product-pipeline</span>
              </div>
              <div className="grid gap-3 pt-4">
                {[
                  ["AI automation", "98% accuracy", "Live"],
                  ["Cloud platform", "99.9% reliability", "Stable"],
                  ["Lead conversion", "+240% lift", "Optimized"],
                ].map(([title, metric, status]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-slate-950/36 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-white">{title}</p>
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold text-cyan-100">{status}</span>
                    </div>
                    <p className="mt-2 font-mono text-sm text-slate-300">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-subtle-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-10 sm:px-6 md:grid-cols-5 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-subtle-border bg-background p-5 text-center">
              <p className="text-3xl font-extrabold text-heading">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="Full-cycle software delivery for ambitious teams."
          description="From strategy and UI/UX to cloud deployment and support, Magnivel builds production-ready systems with clean code and conversion-focused design."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glow-card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark">
                <Icon name={service.icon} size={22} />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-heading">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-accent-dark hover:text-accent-light">
                Learn more
                <Icon name="chevron-right" size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-panel py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="rounded-full border border-cyan-300/25 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-100">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Reliable product execution with transparent communication.
            </h2>
            <p className="mt-4 text-slate-300">
              We combine thoughtful product planning, clean engineering, and practical support so your software is useful on launch day and maintainable after it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {whyChoose.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <Icon name="check-circle" size={20} className="text-cyan-200" />
                <p className="mt-3 font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Process" title="Our Proven Development Process" />
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.step} className="glow-card p-5">
              <span className="text-sm font-extrabold text-accent-dark">0{step.step}</span>
              <Icon name={step.icon} size={22} className="mt-5 text-accent-light" />
              <h3 className="mt-4 font-extrabold text-heading">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-subtle-border bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Industries" title="Industry experience across modern business models." />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map((industry) => (
              <div key={industry} className="rounded-lg border border-subtle-border bg-background px-4 py-3 text-sm font-bold text-heading">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow="Portfolio" title="Results-focused digital products." description="Representative case studies across web, mobile, AI, SaaS, and custom software." />
          <Link href="/portfolio" className="btn-secondary">
            View All Projects
            <Icon name="external-link" size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.title} className="glow-card p-6">
              <span className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-dark">{project.category}</span>
              <h3 className="mt-4 text-xl font-extrabold text-heading">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-subtle-border bg-background px-2.5 py-1 text-xs font-semibold text-muted">{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-subtle-border bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Technologies" title="Modern tools for stable, secure products." className="mx-auto" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="rounded-lg border border-subtle-border bg-background px-4 py-2 text-sm font-bold text-heading">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="What our clients say." className="mx-auto text-center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="glow-card p-6">
              <div className="flex gap-1 text-accent-light">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Icon key={index} name="star" size={15} className="fill-accent-light" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="mt-6 border-t border-subtle-border pt-4">
                <p className="font-extrabold text-heading">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}, {testimonial.company}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-subtle-border bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="SEO"
              title="Leading Software Development Company"
              description="Magnivel Technologies provides web development, mobile application development, AI solutions, cloud services, enterprise software development, and digital transformation services for businesses worldwide."
            />
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-subtle-border bg-background p-5">
                <summary className="cursor-pointer font-extrabold text-heading">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Build Something Amazing Together"
            description="Share your goals, service needs, and preferred budget. The Magnivel Technologies team will respond within 24 hours."
          />
          <div className="mt-8 grid gap-4 text-sm font-semibold text-heading">
            <a href="mailto:contact@magnivel.com" className="flex items-center gap-3">
              <Icon name="mail" size={18} className="text-accent-dark" />
              contact@magnivel.com
            </a>
            <a href="https://magnivel.com" className="flex items-center gap-3">
              <Icon name="globe" size={18} className="text-accent-dark" />
              magnivel.com
            </a>
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
