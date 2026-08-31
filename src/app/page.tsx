import { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { AiShowcase } from "@/components/home/ai-showcase";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { ClientJourney } from "@/components/home/client-journey";
import { GlobalPresence } from "@/components/home/global-presence";
import { PremiumHero } from "@/components/home/premium-hero";
import { TechEcosystem } from "@/components/home/tech-ecosystem";
import { TechMarquee } from "@/components/home/tech-marquee";
import { TrustSection } from "@/components/home/trust-section";
import { PageShell, SectionTitle } from "@/components/page-shell";
import { faqs, homeServices, whyChoose, workingWithUs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Magnivel Technologies | Web, Mobile App & AI Development Company",
  description:
    "Magnivel Technologies provides website development, SaaS applications, mobile apps, AI solutions, e-commerce platforms, and custom software development services for businesses worldwide.",
  keywords: [
    "Software Development Company",
    "Web Development Company",
    "Mobile App Development Company",
    "AI Development Company",
    "Custom Software Development",
    "SaaS Development",
    "E-commerce Development",
    "API Development",
  ],
  alternates: {
    canonical: "https://magnivel.com",
  },
  openGraph: {
    title: "Magnivel Technologies | Web, Mobile App & AI Development Company",
    description:
      "Magnivel Technologies provides website development, SaaS applications, mobile apps, AI solutions, e-commerce platforms, and custom software development services for businesses worldwide.",
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



const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Magnivel Technologies",
    url: "https://magnivel.com",
    description:
      "Global technology partner delivering AI-powered software, enterprise platforms, digital transformation solutions, and scalable innovation.",
    areaServed: "Worldwide",
    serviceType: [
      "AI Solutions",
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "SaaS Development",
      "Cloud & DevOps",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Enterprise Software",
      "Digital Transformation",
      "Cloud Architecture",
    ],
  },
  {
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
  },
];

export default function Home() {
  return (
    <PageShell>
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PremiumHero />
      <TrustSection />
      <TechMarquee />

      {/* Services */}
      <section id="services" className="py-32 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="End-to-End Digital Solutions"
            description="From concept to deployment, we deliver premium software engineered for performance, security, and scale."
            centered
            className="mx-auto"
          />
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeServices.map((service) => (
              <article
                key={service.title}
                className="glass-card flex flex-col p-8 transition-all"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary transition group-hover:border-accent-secondary/50 group-hover:shadow-lg group-hover:shadow-accent-secondary/20">
                  <Icon name={service.icon} size={22} />
                </span>
                <h3 className="font-heading mt-6 text-base font-extrabold uppercase tracking-wide text-heading">{service.title}</h3>
                <p className="mt-4 flex-1 text-xs leading-relaxed text-muted font-sans">{service.description}</p>
                <Link
                  href={service.href}
                  className="link-underline mt-8 inline-flex items-center gap-1.5 text-xs font-bold font-heading uppercase tracking-widest text-accent-secondary hover:text-primary"
                >
                  Learn More
                  <Icon name="arrow-right" size={12} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ready-to-Launch Websites CTA Section */}
      <section className="border-t border-subtle-border bg-background-secondary/50 py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/3 to-accent-secondary/3 animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-primary/10">
            <div className="max-w-2xl">
              <span className="section-eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary animate-pulse" />
                Launch Instantly
              </span>
              <h3 className="font-heading text-2xl font-extrabold uppercase tracking-wider text-heading sm:text-3xl">
                Ready-Made Websites for Sale
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm font-medium">
                Skip the long custom development and scoping process. Launch your restaurant, e-commerce, or corporate business online in 5–7 days with our pre-built, premium website templates. Fully responsive, SEO optimized, and customized for your branding.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link href="/ready-websites" className="btn-primary premium-btn text-center justify-center py-3.5 px-6">
                Browse Marketplace
                <Icon name="arrow-right" size={14} />
              </Link>
              <Link href="/ready-websites/restaurant-website-template" className="btn-secondary text-center justify-center py-3.5 px-6">
                Featured Template
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AiShowcase />
      <CaseStudiesSection />

      {/* Why Choose Magnivel */}
      <section className="relative overflow-hidden border-y border-subtle-border bg-background-secondary py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-secondary/3 via-transparent to-primary/3" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Magnivel"
            title="How We Work"
            description="Here's what you get when you work with Magnivel Technologies."
            centered
            className="mx-auto"
          />
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article key={item.title} className="glass-card p-8 transition-all">
                <span className="text-3xl" role="img" aria-hidden="true">
                  {item.emoji}
                </span>
                <h3 className="font-heading mt-6 text-base font-extrabold uppercase tracking-wide text-heading">{item.title}</h3>
                <p className="mt-4 text-xs leading-relaxed text-muted font-sans">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TechEcosystem />
      <GlobalPresence />
      <ClientJourney />
      {/* What Working With Us Looks Like */}
      <section className="border-t border-subtle-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="section-eyebrow">Our Process</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              What Working With Us Looks Like
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted">
              We believe in transparency over testimonials. Here&apos;s how we actually work with clients.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workingWithUs.map((item, i) => (
              <article key={item.title} className="glass-card p-8">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-extrabold border border-primary/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading mt-5 text-base font-extrabold uppercase tracking-wide text-heading">{item.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted font-sans">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-subtle-border bg-background-secondary py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Learn more about our methodology, timelines, and how we deliver exceptional software."
            />
          </div>
          <div className="grid gap-6 lg:col-span-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="group glass-card p-6">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-extrabold text-heading select-none font-heading uppercase tracking-wide">
                  {faq.question}
                  <span className="text-accent-secondary transition-transform group-open:rotate-180">
                    <Icon name="chevron-down" size={16} />
                  </span>
                </summary>
                <p className="mt-4 border-t border-subtle-border/30 pt-4 text-xs leading-relaxed text-muted font-sans">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative overflow-hidden py-32 border-t border-subtle-border bg-gradient-to-b from-transparent to-background-secondary">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent-secondary/3 via-transparent to-primary/3 animate-pulse-glow" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-widest text-heading sm:text-4xl lg:text-5xl">
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xs text-muted sm:text-sm font-sans uppercase tracking-widest">
              Tell us about your project — we&apos;ll review it and get back to you within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary premium-btn">
                Start a Project
                <Icon name="arrow-right" size={16} />
              </Link>
              <a href="mailto:contact@magnivel.com" className="btn-secondary premium-btn">
                Email Us Directly
                <Icon name="mail" size={16} />
              </a>
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
