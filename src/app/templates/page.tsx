import { Metadata } from "next";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Boilerplate & RFP Templates | Magnivel Technologies",
  description: "Download free project spec templates, RFP blueprints, UI wireframes grids, and database schemas models from Magnivel Technologies.",
  keywords: ["RFP templates", "project spec templates", "wireframe grids figma", "database schema doc", "scoping blueprint"],
  alternates: {
    canonical: "https://magnivel.com/templates",
  },
};

const templates = [
  {
    title: "Software Project Specification Blueprint",
    type: "DOCX / PDF",
    desc: "A detailed spec document template covering user roles, entity actions, API needs, and security criteria.",
    size: "1.2 MB"
  },
  {
    title: "Request for Proposal (RFP) Web Template",
    type: "PDF",
    desc: "Use this questionnaire template to collect quotes from software vendors with accurate requirements lists.",
    size: "820 KB"
  },
  {
    title: "Next.js & Tailwind Coding Guidelines",
    type: "Markdown",
    desc: "Our internal styling scale rules, folder structures, naming formats, and database query recommendations.",
    size: "45 KB"
  },
  {
    title: "Relational Database Schema Layouts",
    type: "SQL / ERD",
    desc: "Standard PostgreSQL schemas boilerplate files covering multi-tenant SaaS workspaces, payment billing lines, and user permissions.",
    size: "12 KB"
  }
];

export default function TemplatesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Templates"
        title="Project Scoping Blueprints & RFP Documents"
        description="Save weeks of scoping. Download the exact Word templates, SQL schemas, and wireframing wireframes grids we use to start project scoping."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {templates.map((tpl) => (
            <div key={tpl.title} className="rounded-xl border border-subtle-border bg-surface p-6 shadow-sm glow-card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center gap-2">
                  <span className="rounded bg-accent-subtle px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-accent-dark">
                    {tpl.type}
                  </span>
                  <span className="text-[10px] text-dimmed font-bold">{tpl.size}</span>
                </div>
                <h3 className="mt-4 text-sm font-extrabold text-heading leading-snug">{tpl.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{tpl.desc}</p>
              </div>
              <div className="mt-6 border-t border-subtle-border/40 pt-4 flex justify-between items-center">
                <span className="text-[10px] text-dimmed font-semibold flex items-center gap-1">
                  <Icon name="check-circle" size={12} className="text-emerald-500" />
                  Free Download
                </span>
                {/* Visual download prompt */}
                <button className="btn-secondary py-1.5 px-3.5 text-[10px] font-bold inline-flex items-center gap-1 hover:border-accent hover:text-accent-dark transition-colors cursor-pointer">
                  Download Template
                  <Icon name="arrow-right" size={10} className="rotate-90" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
