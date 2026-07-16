import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { TemplateGrid } from "@/components/marketplace/template-grid";

export const metadata: Metadata = {
  title: "Ready-Made Business Websites for Sale | Premium Templates | Magnivel Technologies",
  description:
    "Launch your business faster with premium pre-built website templates from Magnivel Technologies. Fully customizable, responsive, and SEO-optimized websites ready to launch in 5-7 days.",
  keywords: [
    "ready made websites",
    "business websites for sale",
    "prebuilt website templates",
    "buy website templates",
    "restaurant website template for sale",
    "ecommerce website templates",
    "custom website customization",
    "Magnivel Technologies"
  ],
  alternates: {
    canonical: "https://magnivel.com/ready-websites",
  },
  openGraph: {
    title: "Ready-Made Business Websites for Sale | Magnivel Technologies",
    description:
      "Launch your business faster with premium pre-built website templates from Magnivel Technologies. Customizable, mobile-responsive, and SEO-friendly.",
    url: "https://magnivel.com/ready-websites",
    type: "website",
  },
};

const whyChooseMarketplace = [
  {
    title: "7+ Years Experienced Team",
    desc: "Our engineering and design team has over 7 years of experience crafting enterprise-grade software and UI/UX.",
    icon: "users"
  },
  {
    title: "Premium UI/UX Design",
    desc: "Stunning, high-end, responsive designs styled to stand out, matching premium marketplaces like Webflow or Framer.",
    icon: "palette"
  },
  {
    title: "SEO Best Practices",
    desc: "Every website template is structured with SEO hierarchies, meta tags, and schema layouts for optimal Google rankings.",
    icon: "target"
  },
  {
    title: "Fast Delivery (5-7 Days)",
    desc: "We configure, customize, and deploy your pre-built website in under a week, saving you months of development time.",
    icon: "zap"
  },
  {
    title: "Affordable Pricing",
    desc: "Get an enterprise-level, premium website at a fraction of custom agency costs with transparent one-time fees.",
    icon: "sparkles"
  },
  {
    title: "Scalable Architecture",
    desc: "Built with Next.js, React, Tailwind, and TypeScript to ensure your site is secure, fast, and easily upgradable.",
    icon: "layers"
  },
  {
    title: "Clean Code",
    desc: "Strict adherence to modern coding standards, semantic elements, and efficient loading techniques.",
    icon: "code"
  },
  {
    title: "Business-Focused Solutions",
    desc: "Designed specifically to drive conversions, collect leads, capture reservations, and grow customer engagement.",
    icon: "trending-up"
  },
  {
    title: "Reliable Support",
    desc: "Includes 1 month of dedicated technical support and deployment assistance to ensure a flawless online launch.",
    icon: "shield"
  }
];

const faqsMarketplace = [
  {
    question: "Can you change the logo?",
    answer: "Yes. As part of our setup process, we will replace the placeholder logo with your custom brand logo and adjust its scaling to look crisp on all screens."
  },
  {
    question: "Can you change colors?",
    answer: "Yes. We will adjust the primary, secondary, and accent colors of the website template to align perfectly with your business branding rules."
  },
  {
    question: "Can you change content?",
    answer: "Yes. All placeholder copy, headlines, text descriptions, list items, menus, and contact information will be replaced with your actual business content."
  },
  {
    question: "Can you add more pages?",
    answer: "Yes. If you need additional subpages (e.g. customized service pages, portfolios, or event pages), we can build them for you as a custom modification request."
  },
  {
    question: "Can you integrate online ordering?",
    answer: "Yes. We can embed online food ordering widgets, custom shopping carts, or connect your site with third-party platforms like Swiggy, Zomato, Toast, or UberEats."
  },
  {
    question: "Can you connect payment gateways?",
    answer: "Yes. We can integrate payment processors like Stripe, Razorpay, or PayPal to allow online reservation deposits, orders, or service bookings."
  },
  {
    question: "Can you add an admin panel?",
    answer: "Yes. We can connect an optional, easy-to-use admin panel or Headless CMS (like Sanity, Strapi, or Decap) to let you edit menus, pricing, and images without touching code."
  },
  {
    question: "Can you redesign sections?",
    answer: "Yes. If there are specific section layouts you want modified, rearranged, or custom-coded, our design and development team will build them to meet your exact criteria."
  }
];

const schemaLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://magnivel.com/ready-websites/#webpage",
  url: "https://magnivel.com/ready-websites",
  name: "Ready-Made Business Websites for Sale | Magnivel Technologies",
  description: "Browse and purchase premium, fully customizable, responsive, and SEO-optimized website templates ready to launch in 5-7 days.",
  publisher: {
    "@type": "Organization",
    name: "Magnivel Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://magnivel.com/logo.jpg"
    }
  }
};

export default function ReadyWebsitesPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-subtle-border bg-grid gradient-mesh py-24 sm:py-32">
        {/* Glowing blur effects */}
        <div className="absolute left-1/4 top-0 h-[400px] w-[40rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[30rem] translate-x-1/2 rounded-full bg-accent-secondary/5 blur-3xl animate-pulse-glow" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="section-eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              Pre-built Marketplace
            </span>
            <h1 className="font-heading mt-6 text-4xl font-extrabold uppercase leading-[1.1] tracking-widest text-heading sm:text-5xl lg:text-6xl">
              Ready-Made Business <span className="gradient-text">Websites for Sale</span>
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base md:text-lg max-w-3xl mx-auto">
              Launch your business faster with professionally designed, fully responsive, SEO-friendly websites. 
              Save development time, bypass project scoping, and start growing your business today.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#browse" className="btn-primary premium-btn">
                Browse Templates
                <Icon name="arrow-right" size={16} />
              </a>
              <Link href="/contact" className="btn-secondary premium-btn">
                Contact Us
                <Icon name="mail" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Browsing Section */}
      <section id="browse" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              Marketplace
            </span>
            <h2 className="font-heading mt-4 text-2xl font-extrabold uppercase tracking-wide text-heading sm:text-3xl">
              Premium Ready-to-Launch Websites
            </h2>
            <p className="mt-2 text-xs text-muted max-w-xl font-medium">
              Explore our hand-crafted, production-ready website templates. Pick a design and we will customize it to fit your brand.
            </p>
          </div>

          <TemplateGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative overflow-hidden border-t border-b border-subtle-border bg-background-secondary py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-secondary/2 via-transparent to-primary/2" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              Why Magnivel
            </span>
            <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-[1.1] tracking-widest text-heading sm:text-4xl">
              Engineered for Business Conversion
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
              We combine professional visual design with clean code frameworks to deliver template solutions that drive actual business outcomes.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseMarketplace.map((item) => (
              <article key={item.title} className="glass-card p-8 hover:-translate-y-1.5 transition-all duration-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-subtle text-primary border border-primary/10">
                  <Icon name={item.icon} size={18} />
                </span>
                <h3 className="font-heading mt-6 text-sm font-extrabold uppercase tracking-wide text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="border-b border-subtle-border py-24 sm:py-32 bg-surface/30">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              FAQs
            </span>
            <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-[1.1] tracking-widest text-heading sm:text-4xl">
              Marketplace Queries
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
              Have questions about purchasing pre-built templates, customization scope, or launch assistance? Find quick answers here.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-7">
            {faqsMarketplace.map((faq) => (
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
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-b from-transparent to-background-secondary border-b border-subtle-border">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent-secondary/3 animate-pulse-glow" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="section-eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              Custom Scopes
            </span>
            <h2 className="font-heading text-3xl font-extrabold uppercase tracking-widest text-heading sm:text-4xl lg:text-5xl">
              Need Additional <span className="gradient-text font-black">Features?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm text-muted font-medium leading-relaxed">
              Want online ordering, a payment gateway, an admin dashboard, a booking system, POS integration, or custom functionality? 
              Contact Magnivel Technologies and we&apos;ll customize the website according to your exact business requirements.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact?interest=Custom-Website-Features" className="btn-primary premium-btn">
                Contact Us
                <Icon name="mail" size={16} />
              </Link>
              <Link href="/contact?interest=Request-Quote" className="btn-secondary premium-btn">
                Request Quote
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
