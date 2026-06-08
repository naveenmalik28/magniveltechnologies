import { Metadata } from "next";
import { PageCta } from "@/components/page-cta";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio | Magnivel Technologies",
  description:
    "Explore our portfolio of high-performance web applications, mobile apps, SaaS platforms, and custom software solutions built for leading companies.",
  keywords: ["portfolio", "case studies", "web applications", "SaaS products", "mobile apps"],
  openGraph: {
    title: "Portfolio | Magnivel Technologies",
    description:
      "High-performance products we've brought to production. Custom enterprise portals, lead-generation platforms, mobile apps, and SaaS dashboards.",
    url: "https://magnivel.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/portfolio",
  },
};

const gradients = [
  "from-indigo-600/50 via-violet-600/30 to-cyan-600/40",
  "from-violet-600/50 via-purple-600/30 to-indigo-600/40",
  "from-cyan-600/50 via-teal-600/30 to-emerald-600/40",
  "from-blue-600/50 via-indigo-600/30 to-violet-600/40",
  "from-emerald-600/50 via-cyan-600/30 to-blue-600/40",
  "from-rose-600/50 via-violet-600/30 to-indigo-600/40",
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Work"
        title="High-performance products we've brought to production."
        description="Explore the snapshot of digital systems we build: custom enterprise web portals, responsive lead-generation platforms, cross-platform mobile apps, secure multi-tenant SaaS dashboards, and automated AI software pipelines."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Case Studies"
          title="Projects that deliver measurable impact"
          description="Each engagement is engineered for performance, security, and long-term scalability."
          centered
          className="mx-auto"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="glass-card group flex flex-col overflow-hidden">
              <div
                className={`relative aspect-[16/9] bg-gradient-to-br ${gradients[index % gradients.length]} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 bg-[#0b1020]/30 transition group-hover:bg-[#0b1020]/10" />
                <div className="relative flex h-full items-end p-5">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-extrabold text-heading leading-tight group-hover:text-accent-dark transition-colors">
                  {project.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 border-t border-subtle-border pt-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-dimmed mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/8 bg-surface-elevated px-2.5 py-1 text-xs font-semibold text-muted transition hover:border-accent/30 hover:text-accent-dark"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        title="Have a Project in Mind?"
        description="Tell us about your goals and we'll craft a tailored solution that delivers real business results."
        primaryLabel="Discuss Your Project"
      />
    </PageShell>
  );
}
