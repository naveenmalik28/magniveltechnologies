import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { getTemplateBySlug, TEMPLATES } from "@/lib/ready-websites-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TEMPLATES.map((tpl) => ({
    slug: tpl.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return {};

  return {
    title: template.seo.title,
    description: template.seo.description,
    keywords: template.seo.keywords,
    alternates: {
      canonical: template.seo.canonicalUrl,
    },
    openGraph: {
      title: template.seo.title,
      description: template.seo.description,
      url: template.seo.canonicalUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: template.seo.title,
      description: template.seo.description,
    },
  };
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  // Schema Markup Structures
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://magnivel.com/#organization",
    name: "Magnivel Technologies",
    url: "https://magnivel.com",
    logo: "https://magnivel.com/logo.jpg",
    email: "contact@magnivel.com"
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.title,
    description: template.shortDesc,
    image: "https://magnivel.com/logo.jpg",
    offers: {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": template.priceUsd,
      "highPrice": template.priceUsd,
      "offerCount": 1,
      "offers": [
        {
          "@type": "Offer",
          "price": template.priceUsd,
          "priceCurrency": "USD",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": template.seo.canonicalUrl
        },
        {
          "@type": "Offer",
          "price": template.priceInr,
          "priceCurrency": "INR",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": template.seo.canonicalUrl
        }
      ]
    },
    brand: {
      "@type": "Brand",
      "name": "Magnivel Technologies"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": template.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://magnivel.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ready Websites",
        "item": "https://magnivel.com/ready-websites"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": template.title,
        "item": template.seo.canonicalUrl
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Magnivel Technologies",
    "url": "https://magnivel.com"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Magnivel Technologies",
    "image": "https://magnivel.com/logo.jpg",
    "@id": "https://magnivel.com/#organization",
    "url": "https://magnivel.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    }
  };

  const allSchemas = [
    organizationSchema,
    productSchema,
    faqSchema,
    breadcrumbSchema,
    websiteSchema,
    localBusinessSchema
  ];

  return (
    <PageShell>
      {/* Schema Injection */}
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Main Content Area */}
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Icon name="chevron-right" size={10} className="text-dimmed" />
          <Link href="/ready-websites" className="hover:text-primary transition-colors">Ready Websites</Link>
          <Icon name="chevron-right" size={10} className="text-dimmed" />
          <span className="text-heading truncate max-w-[200px] sm:max-w-none">{template.title}</span>
        </nav>

        {/* Title Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded-full bg-accent-subtle px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-accent-dark border border-accent/10">
              {template.category}
            </span>
            {template.badges.map((badge) => (
              <span
                key={badge}
                className="rounded bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-amber-600"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-wider text-heading sm:text-4xl lg:text-5xl">
            {template.title}
          </h1>
          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted max-w-3xl">
            {template.shortDesc}
          </p>
        </header>

        {/* Two-Column Grid Layout */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Mockup Browser Container */}
            <div className="glass-card overflow-hidden">
              {/* Browser frame header */}
              <div className="h-9 border-b border-subtle-border/60 bg-background-secondary/80 flex items-center justify-between px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 max-w-sm mx-auto bg-surface border border-subtle-border/60 rounded-md py-1 px-3 text-[10px] text-muted text-center font-mono truncate select-all">
                  {template.liveDemoUrl}
                </div>
                <div className="w-[30px]" />
              </div>

              {/* Inside Mockup Frame */}
              <div className="relative aspect-video w-full bg-surface-elevated/40 flex flex-col items-center justify-center p-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-secondary/5 transition-transform group-hover:scale-105 duration-700" />
                
                {/* Visual mockup graphics representation */}
                <div className="relative flex flex-col items-center text-center p-8 rounded-xl bg-surface shadow-2xl border border-subtle-border max-w-[80%] hover:-translate-y-1 transition-transform duration-500">
                  <span className="rounded-full bg-accent-subtle p-3.5 text-primary">
                    <Icon name="palette" size={28} />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-heading uppercase tracking-widest leading-snug">
                    {template.title}
                  </h3>
                  <p className="mt-2 text-[10px] text-muted max-w-xs leading-normal">
                    Interactive Restaurant Menus, Modern Reservation Forms, Dynamic Galleries, Social Integrations, and full SEO.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-emerald-600 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Ready to Deploy
                  </span>
                </div>

                {/* Overlaid preview trigger */}
                <div className="absolute inset-0 bg-heading/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={template.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-5 text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    View Live Demo
                    <Icon name="external-link" size={12} />
                  </a>
                  <Link
                    href={`/contact?interest=Buy-${template.slug}`}
                    className="btn-secondary py-2.5 px-5 text-xs font-bold bg-surface text-primary"
                  >
                    Buy Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Overview / Introduction */}
            <section className="glass-card p-8">
              <h2 className="font-heading text-lg font-extrabold uppercase tracking-widest text-heading border-b border-subtle-border/40 pb-4">
                Template Overview
              </h2>
              <p className="mt-6 text-xs sm:text-sm leading-relaxed text-muted whitespace-pre-line font-medium">
                {template.overview}
              </p>
            </section>

            {/* Customization Details: What We Replace */}
            <section className="glass-card p-8">
              <h2 className="font-heading text-lg font-extrabold uppercase tracking-widest text-heading border-b border-subtle-border/40 pb-4">
                What We Customize For You
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                This is a fully operational, pre-designed website framework. Our developers will replace the following items with your actual business branding details to deliver a completely finished, custom-branded site:
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {template.weReplace.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-subtle-border bg-background p-3 text-xs font-bold text-heading"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-secondary/15 text-accent-secondary border border-accent-secondary/20">
                      <Icon name="check" size={10} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="glass-card p-8">
              <h2 className="font-heading text-lg font-extrabold uppercase tracking-widest text-heading border-b border-subtle-border/40 pb-4">
                Template Features
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {template.features.map((feat) => (
                  <div
                    key={feat}
                    className="flex items-start gap-3 p-1"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 mt-0.5">
                      <Icon name="check-circle" size={12} className="text-emerald-500" />
                    </span>
                    <div>
                      <h4 className="text-xs font-extrabold text-heading uppercase tracking-wide">
                        {feat}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section className="glass-card p-8">
              <h2 className="font-heading text-lg font-extrabold uppercase tracking-widest text-heading border-b border-subtle-border/40 pb-4">
                What&apos;s Included In The Price
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-muted">
                Our one-time fee includes complete setup, configuration, content integration, and deployment by our engineering team:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {template.whatsIncluded.map((inc) => (
                  <div
                    key={inc}
                    className="flex items-center gap-3 p-1 text-xs font-semibold text-muted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary shrink-0" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Template Specific FAQs */}
            <section className="border-t border-subtle-border/60 pt-8">
              <h2 className="font-heading text-lg font-extrabold uppercase tracking-widest text-heading mb-6">
                Template FAQs
              </h2>
              <div className="grid gap-3">
                {template.faqs.map((faq) => (
                  <details key={faq.question} className="group glass-card p-6">
                    <summary className="flex cursor-pointer items-center justify-between text-xs sm:text-sm font-extrabold text-heading select-none font-heading uppercase tracking-wide">
                      {faq.question}
                      <span className="text-primary transition-transform group-open:rotate-180">
                        <Icon name="chevron-down" size={16} />
                      </span>
                    </summary>
                    <p className="mt-4 border-t border-subtle-border/30 pt-4 text-xs leading-relaxed text-muted font-sans font-medium">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Sticky Side Panel) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Main Pricing Box */}
            <div className="glass-card p-6 border-2 border-primary/20 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-xl pointer-events-none" />
              
              <span className="rounded bg-primary/10 border border-primary/25 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-primary">
                Ready to Launch Package
              </span>

              {/* Price Details */}
              <div className="mt-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-muted">
                  One-time customization fee
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-black text-heading font-heading">
                    USD ${template.priceUsd.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-muted font-semibold">
                  <span>or</span>
                  <span className="text-heading font-extrabold">
                    INR ₹{template.priceInr.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="mt-6 border-t border-b border-subtle-border/40 py-4 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted font-semibold">Custom Delivery:</span>
                  <span className="text-heading font-extrabold">{template.deliveryDays} Business Days</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted font-semibold">Technical Support:</span>
                  <span className="text-heading font-semibold">1 Month Included</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted font-semibold">Hosting & Setup:</span>
                  <span className="text-heading font-semibold">Free Configuration</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="mt-6 space-y-3">
                <Link
                  href={`/contact?interest=Buy-${template.slug}`}
                  className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider premium-btn justify-center text-center shadow-lg"
                >
                  Buy Now
                  <Icon name="arrow-right" size={14} />
                </Link>
                <Link
                  href={`/contact?interest=Customize-${template.slug}`}
                  className="btn-secondary w-full py-3.5 text-xs font-bold uppercase tracking-wider justify-center text-center hover:bg-background-secondary"
                >
                  Request Customization
                </Link>
                <Link
                  href={`/contact?interest=Consultation-${template.slug}`}
                  className="btn-ghost w-full text-center text-[10px] font-extrabold uppercase tracking-widest text-muted hover:text-primary transition-colors py-2 flex justify-center items-center"
                >
                  Schedule Free Consultation
                </Link>
              </div>

              {/* Guarantees list */}
              <ul className="mt-6 space-y-2 text-[10px] text-muted font-bold">
                <li className="flex items-center gap-2">
                  <Icon name="check-circle" size={12} className="text-emerald-500" />
                  Free SSL & domain linkage setup
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check-circle" size={12} className="text-emerald-500" />
                  Responsive Next.js React codebase
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="check-circle" size={12} className="text-emerald-500" />
                  100% ownership of customized code
                </li>
              </ul>
            </div>

            {/* Direct Contact Support Box */}
            <div className="rounded-xl border border-subtle-border bg-background-secondary/50 p-6 space-y-4">
              <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-heading">
                Have Scoping Questions?
              </h3>
              <p className="text-[11px] leading-relaxed text-muted font-medium">
                Want to confirm specific feature fits? Chat directly with our team to scope extra custom code modifications.
              </p>
              <div className="space-y-2 pt-2 border-t border-subtle-border/60">
                <a
                  href="mailto:contact@magnivel.com"
                  className="flex items-center gap-2 text-xs font-bold text-muted hover:text-primary transition-colors"
                >
                  <Icon name="mail" size={14} className="text-accent-secondary" />
                  contact@magnivel.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Cross-Sell Feature CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl dark-panel p-8 text-center sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <h2 className="text-xl font-extrabold text-heading sm:text-3xl">Need Additional Features?</h2>
          <p className="mt-4 text-xs sm:text-sm text-muted max-w-2xl mx-auto leading-relaxed font-semibold">
            Want online ordering, payment gateway integration, admin dashboards, custom POS sync, or complex reservation systems? Contact Magnivel Technologies and we will customize this website template according to your exact requirements.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={`/contact?interest=Customize-Features-${template.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-6 py-3 bg-white text-primary hover:bg-accent-light hover:text-primary transition-colors cursor-pointer"
            >
              Request Custom Quote
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
