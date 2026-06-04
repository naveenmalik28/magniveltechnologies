import { Metadata } from "next";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Resource Center & Free Tools | Magnivel Technologies",
  description: "Access Magnivel Technologies' free resource center. Free templates, interactive checklists, detailed engineering guides, and business calculators.",
  keywords: ["free resource center", "website launch checklist", "saas mvp checklist", "ai prompt generator", "roi calculator tools"],
  alternates: {
    canonical: "https://magnivel.com/resources",
  },
};

const resourceCards = [
  {
    title: "Boilerplate Templates",
    href: "/templates",
    icon: "layers",
    description: "Download spec templates, wireframe grids, RFPs, and scoping blueprints to plan your next build."
  },
  {
    title: "Interactive Checklists",
    href: "/checklists",
    icon: "check-circle",
    description: "Interactive tools including Website Launch Checklist, SaaS MVP Checklist, and SEO Audits checklists."
  },
  {
    title: "Expert Guides & Manuals",
    href: "/guides",
    icon: "palette",
    description: "Detailed PDF and web manuals on AI prompt design, cloud migration structures, and web optimization."
  }
];

const freeTools = [
  {
    title: "Website Cost Calculator",
    href: "/resources/website-cost-calculator",
    desc: "Calculate website designs and features budgets in real-time."
  },
  {
    title: "AI Prompt Generator",
    href: "/resources/ai-prompt-generator",
    desc: "Generate professional prompts for ChatGPT, Gemini, or Claude."
  },
  {
    title: "SEO Meta Generator",
    href: "/resources/seo-meta-generator",
    desc: "Create and preview Google and social media preview cards."
  },
  {
    title: "QR Code Generator",
    href: "/resources/qr-code-generator",
    desc: "Generate custom, downloadable QR codes for URLs and text."
  },
  {
    title: "ROI Automation Calculator",
    href: "/resources/roi-calculator",
    desc: "Analyze financial savings from custom AI & software automations."
  }
];

export default function ResourceCenterPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Resource Library"
        title="Engineering Blueprints, Manuals, & Interactive Tools"
        description="We share our internal guidelines and calculators for free. Access blueprints, dynamic launch checklists, and client-scoping calculators."
      />

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-accent-dark mb-6">Resource Categories</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {resourceCards.map((res) => (
            <article key={res.title} className="glow-card flex flex-col justify-between p-6 hover:border-accent/40">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/10">
                  <Icon name={res.icon === "palette" ? "monitor" : res.icon} size={18} />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-heading">{res.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">{res.description}</p>
              </div>
              <Link href={res.href} className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark hover:text-accent-light transition-colors group">
                Browse Category
                <Icon name="arrow-right" size={12} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Free Interactive Tools Panel */}
      <section className="bg-surface/30 border-y border-subtle-border py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex rounded-full border border-accent/15 bg-accent-subtle px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-dark">
              Free Utilities
            </span>
            <h2 className="mt-4 text-2xl font-extrabold text-heading sm:text-3xl">
              Interactive Web Calculators & AI Generators
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
              No forms or sign-ups required. Test pricing scopes, generate prompts, and audit SEO layouts instantly in your browser.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freeTools.map((tool) => (
              <div key={tool.title} className="rounded-xl border border-subtle-border bg-white p-5 shadow-sm glow-card flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-heading flex items-center gap-1.5">
                    <Icon name="zap" size={14} className="text-amber-500" />
                    {tool.title}
                  </h4>
                  <p className="mt-2 text-xs text-muted leading-relaxed">{tool.desc}</p>
                </div>
                <Link href={tool.href} className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-accent-dark hover:text-accent-light transition-colors group">
                  Open Tool
                  <Icon name="arrow-right" size={12} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
