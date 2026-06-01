import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { services } from "@/lib/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Digital product services from landing pages to SaaS platforms."
        description="Choose focused delivery for the exact stage of your business: visibility, automation, internal systems, customer apps or AI."
      />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        {services.map((service) => (
          <article key={service.title} className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-emerald-950">{service.title}</h2>
            <p className="mt-3 leading-7 text-slate-700">{service.description}</p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700">
              {service.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <p className="mt-5 rounded-md bg-emerald-50 p-4 text-sm text-emerald-950">{service.benefits}</p>
            <Link href="/contact" className="mt-5 inline-flex rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">
              Start a Project
            </Link>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
