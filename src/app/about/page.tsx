import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Magnivel"
        title="A software company focused on practical, growth-ready digital products."
        description="Magnivel Technologies partners with businesses to plan, design and build websites, applications, SaaS platforms and AI-enabled workflows."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["Company Overview", "We combine product thinking, clean engineering and business-focused design to deliver reliable digital systems."],
          ["Mission", "Help businesses grow with software that is clear, fast, secure and easy to operate."],
          ["Vision", "Become a trusted technology partner for companies building modern products and scalable SaaS platforms."],
        ].map(([title, text]) => (
          <article key={title} className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-950">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Approach" title="Discovery, design, development and production support." />
        </div>
      </section>
    </PageShell>
  );
}
