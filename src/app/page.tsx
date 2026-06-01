import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { PageShell, SectionTitle } from "@/components/page-shell";
import { projects, services, technologies } from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Software agency</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-emerald-950 sm:text-6xl">
              Build Websites, Apps & SaaS Products That Grow Your Business
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Magnivel Technologies designs and develops modern digital products that generate leads,
              streamline operations and create durable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white">
                Get Free Consultation
              </Link>
              <Link href="/services" className="rounded-md border border-emerald-900/20 px-5 py-3 text-sm font-semibold text-emerald-950">
                View Services
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-emerald-950 p-6 text-white shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Lead generation", "Product strategy", "Secure dashboards", "AI automation"].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold">{item}</p>
                  <p className="mt-2 text-sm text-emerald-50/75">Built for measurable business outcomes.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Services" title="Full-cycle software delivery for growing teams." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionTitle
            eyebrow="Why choose us"
            title="Clean engineering, practical strategy and conversion-first execution."
            description="Every build is structured for speed, maintainability, security and future growth."
          />
          <div className="grid gap-4">
            {["Discovery before development", "Reusable components and clean architecture", "Server-side validation and secure defaults", "SEO and mobile performance baked in"].map((item) => (
              <div key={item} className="rounded-md border border-emerald-950/10 p-4 text-sm font-medium text-slate-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Technologies" title="Modern tools for stable, scalable products." />
        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-emerald-950 shadow-sm">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Portfolio" title="Representative project work." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-lg border border-emerald-950/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">{project.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-emerald-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <SectionTitle
          eyebrow="Contact"
          title="Tell us what you want to build."
          description="Share the service, budget and project details. The Magnivel team will follow up shortly."
        />
        <ContactForm />
      </section>
    </PageShell>
  );
}
