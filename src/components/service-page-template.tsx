import Link from "next/link";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export interface Benefit {
  title: string;
  desc: string;
  icon: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  title: string;
  eyebrow: string;
  description: string;
  overview: string;
  benefits: Benefit[];
  features: Feature[];
  process: ProcessStep[];
  faqs: FAQ[];
  ctaTitle?: string;
  ctaDesc?: string;
}

export function ServicePageTemplate({
  title,
  eyebrow,
  description,
  overview,
  benefits,
  features,
  process,
  faqs,
  ctaTitle = "Ready to build your solution?",
  ctaDesc = "Partner with Magnivel Technologies to turn your concept into reliable, clean-coded software.",
}: ServicePageProps) {
  const faqSchema = {
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

  return (
    <PageShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <PageHeader eyebrow={eyebrow} title={title} description={description} />

      {/* Overview Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-subtle-border bg-surface p-8 shadow-xl glow-card">
          <h2 className="text-xl font-extrabold text-heading">Service Overview</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base whitespace-pre-line">
            {overview}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-surface/30 border-y border-subtle-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Benefits"
            title="Strategic advantages we deliver"
            description="We prioritize execution speed, architecture stability, and measurable business outcomes."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-subtle-border bg-surface p-6 shadow-sm hover:border-accent-light/30 transition-all glow-card"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/15">
                  <Icon name={benefit.icon} size={16} />
                </span>
                <h3 className="mt-4 text-base font-bold text-heading">{benefit.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Features"
          title="Engineered with robust capabilities"
          description="Every codebase is built with responsive UI, secure logic, and clean architectures."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="rounded-xl border border-subtle-border bg-background p-5 hover:border-accent-light/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <Icon name="check" size={12} />
                </span>
                <h4 className="text-xs font-extrabold text-heading uppercase tracking-wide">{feat.title}</h4>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-muted">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-surface/30 border-t border-subtle-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Execution"
            title="Our development roadmap"
            description="A weekly milestone-driven blueprint guiding your build safely to launch."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-xl border border-subtle-border bg-surface p-5 flex flex-col justify-between hover:border-accent/30 transition-all relative"
              >
                <span className="absolute top-4 right-4 text-2xl font-extrabold text-accent/10">0{p.step}</span>
                <div>
                  <h4 className="text-xs font-extrabold text-heading uppercase tracking-wide">{p.title}</h4>
                  <p className="mt-3 text-[10px] leading-relaxed text-muted">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="border-t border-subtle-border bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              description="Find answers to common project scoping, cost estimation, and technical deployment queries."
            />
          </div>
          <div className="grid gap-3 lg:col-span-7">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-subtle-border bg-background p-4 hover:bg-background/80 transition-all"
              >
                <summary className="cursor-pointer font-bold text-heading text-xs sm:text-sm flex justify-between items-center select-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180 text-accent">
                    <Icon name="chevron-down" size={14} />
                  </span>
                </summary>
                <p className="mt-3 text-xs leading-relaxed text-muted border-t border-subtle-border/30 pt-2">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mb-8">
        <div className="rounded-2xl dark-panel p-8 text-center sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl pointer-events-none" />
          <h2 className="text-xl font-extrabold text-white sm:text-3xl">{ctaTitle}</h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {ctaDesc}
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider">
              Get Free Consultation
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
