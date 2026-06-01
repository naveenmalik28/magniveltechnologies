import { PageHeader, PageShell } from "@/components/page-shell";
import { projects } from "@/lib/site";

export const metadata = { title: "Portfolio" };

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Portfolio"
        title="Featured projects and case-study patterns."
        description="A snapshot of the kinds of digital systems Magnivel Technologies builds for lead generation, operations and AI-enabled workflows."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {projects.map((project) => (
          <article key={project.title} className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">{project.category}</p>
            <h2 className="mt-3 text-xl font-semibold text-emerald-950">{project.title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
