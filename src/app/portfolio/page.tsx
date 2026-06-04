import { Metadata } from "next";
import { PageHeader, PageShell } from "@/components/page-shell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio | Magnivel Technologies",
  description: "Explore our portfolio of high-performance web applications, mobile apps, SaaS platforms, and custom software solutions built for leading companies.",
  keywords: ["portfolio", "case studies", "web applications", "SaaS products", "mobile apps"],
  openGraph: {
    title: "Portfolio | Magnivel Technologies",
    description: "High-performance products we've brought to production. Custom enterprise portals, lead-generation platforms, mobile apps, and SaaS dashboards.",
    url: "https://magnivel.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Representative Cases"
        title="High-performance products we've brought to production."
        description="Explore the snapshot of digital systems we build: custom enterprise web portals, responsive lead-generation agency platforms, cross-platform mobile apps, secure multi-tenant SaaS dashboards, and automated AI software pipelines."
      />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article 
              key={project.title} 
              className="rounded-xl border border-subtle-border bg-surface p-6 flex flex-col justify-between hover:border-accent-light/30 transition-all duration-300 shadow-xl glow-card relative"
            >
              <div>
                <span className="inline-flex rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent-dark border border-accent/10">
                  {project.category}
                </span>
                
                <h2 className="mt-4 text-xl font-bold text-heading leading-tight">
                  {project.title}
                </h2>
                
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-8 border-t border-subtle-border/40 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-dimmed mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span 
                      key={item} 
                      className="rounded-md bg-background border border-subtle-border px-2.5 py-1 text-xs text-muted font-semibold hover:text-accent-dark hover:border-accent/40 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
