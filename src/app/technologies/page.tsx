import { PageHeader, PageShell } from "@/components/page-shell";
import { technologies } from "@/lib/site";

export const metadata = { title: "Technologies" };

export default function TechnologiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Technology stack"
        title="Reliable tools for modern software delivery."
        description="Magnivel uses proven technologies that balance developer speed, production stability and long-term scalability."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {technologies.map((tech) => (
          <div key={tech} className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-950">{tech}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Used to build secure, scalable and maintainable digital products.
            </p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
