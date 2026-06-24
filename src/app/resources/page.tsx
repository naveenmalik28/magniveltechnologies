import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { PageCta } from "@/components/page-cta";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Resource Center & Free Tools | Magnivel Technologies",
  description:
    "Access Magnivel Technologies' free resource center. Free templates, interactive checklists, detailed engineering guides, and business calculators.",
  keywords: [
    "free resource center",
    "website launch checklist",
    "saas mvp checklist",
    "ai prompt generator",
    "roi calculator tools",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources",
  },
};

const resourceCards = [
  {
    title: "Boilerplate Templates",
    href: "/templates",
    icon: "layers",
    description:
      "Download spec templates, wireframe grids, RFPs, and scoping blueprints to plan your next build.",
  },
  {
    title: "Interactive Checklists",
    href: "/checklists",
    icon: "check-circle",
    description:
      "Interactive tools including Website Launch Checklist, SaaS MVP Checklist, and SEO Audits checklists.",
  },
  {
    title: "Expert Guides & Manuals",
    href: "/guides",
    icon: "book",
    description:
      "Detailed PDF and web manuals on AI prompt design, cloud migration structures, and web optimization.",
  },
];

const freeTools = [
  {
    title: "Website Cost Calculator",
    href: "/resources/website-cost-calculator",
    desc: "Calculate website designs and features budgets in real-time.",
    icon: "globe",
  },
  {
    title: "AI Prompt Generator",
    href: "/resources/ai-prompt-generator",
    desc: "Generate professional prompts for ChatGPT, Gemini, or Claude.",
    icon: "brain",
  },
  {
    title: "SEO Meta Generator",
    href: "/resources/seo-meta-generator",
    desc: "Create and preview Google and social media preview cards.",
    icon: "search",
  },
  {
    title: "QR Code Generator",
    href: "/resources/qr-code-generator",
    desc: "Generate custom, downloadable QR codes for URLs and text.",
    icon: "smartphone",
  },
  {
    title: "ROI Automation Calculator",
    href: "/resources/roi-calculator",
    desc: "Analyze financial savings from custom AI & software automations.",
    icon: "trending-up",
  },
];

export default function ResourceCenterPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resource Library"
        title="Engineering Blueprints, Manuals, & Interactive Tools"
        description="We share our internal guidelines and calculators for free. Access blueprints, dynamic launch checklists, and client-scoping calculators."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Categories"
          title="Resource Categories"
          description="Templates, checklists, and guides to help you plan and launch your next digital product."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resourceCards.map((res) => (
            <article key={res.title} className="glass-card flex flex-col p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark">
                <Icon name={res.icon} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-heading">{res.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{res.description}</p>
              <Link
                href={res.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-accent-dark transition hover:text-accent-light group"
              >
                Browse Category
                <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-subtle-border bg-surface/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Free Utilities"
            title="Interactive Web Calculators & AI Generators"
            description="No forms or sign-ups required. Test pricing scopes, generate prompts, and audit SEO layouts instantly in your browser."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <div key={tool.title} className="glass-card flex flex-col p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent-subtle text-accent">
                    <Icon name={tool.icon} size={16} />
                  </span>
                  <h4 className="text-sm font-extrabold text-heading">{tool.title}</h4>
                </div>
                <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{tool.desc}</p>
                <Link
                  href={tool.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-accent-dark transition hover:text-accent-light group"
                >
                  Open Tool
                  <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Need a Custom Solution?"
        description="Our engineering team can build the software behind these tools — tailored to your business."
        primaryLabel="Get Free Consultation"
      />
    </PageShell>
  );
}
