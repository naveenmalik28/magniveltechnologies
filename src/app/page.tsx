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
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { TrustSection } from "@/components/home/trust-section";
import { PageShell, SectionTitle } from "@/components/page-shell";
import { faqs, homeServices, whyChoose } from "@/lib/site";

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

const clientReviews = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    company: "TechVentures India",
    quote:
      "Magnivel Technologies transformed our digital presence. Their AI agents and clean web builds have automated our leads routing flawlessly.",
    rating: 5,
    metrics: "3x Inquiries Growth",
    initials: "RK",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Product",
    company: "DataFlow Systems USA",
    quote:
      "Working with Magnivel was exceptional. They built our customer operations panel quickly, and the Gemini integration saves our support reps hours every day.",
    rating: 5,
    metrics: "60% Staff Hours Saved",
    initials: "SM",
  },
  {
    name: "Faisal Al-Suwaidi",
    role: "Managing Director",
    company: "Apex Properties Dubai",
    quote:
      "Highly competent tech partner. They delivered a custom database engine on budget and under schedule. Recommended for complex software engineering.",
    rating: 5,
    metrics: "100% Reliable Deployment",
    initials: "FA",
  },
];

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

      <AiShowcase />
      <CaseStudiesSection />

      {/* Why Choose Magnivel */}
      <section className="relative overflow-hidden border-y border-subtle-border bg-background-secondary py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-secondary/3 via-transparent to-primary/3" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Magnivel"
            title="Engineered for Scalability"
            description="We combine cutting-edge technology with proven engineering practices to deliver solutions that drive real business outcomes."
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
      <TestimonialsCarousel reviews={clientReviews} />

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
              Let&apos;s discuss your next software, AI, or digital transformation project.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary premium-btn">
                Book Consultation
                <Icon name="arrow-right" size={16} />
              </Link>
              <a href="mailto:contact@magnivel.com" className="btn-secondary premium-btn">
                Contact Us
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
