import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@/components/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Magnivel Technologies",
  description:
    "Explore Magnivel Technologies services: web development, mobile app development, AI automation, custom software, e-commerce, cloud, and DevOps.",
  keywords: ["web development services", "mobile app development", "AI automation", "custom software development", "cloud DevOps"],
  openGraph: {
    title: "Services | Magnivel Technologies",
    description: "Scalable software services for startups, SMBs, enterprises, and international clients.",
    url: "https://magnivel.com/services",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Software services built around growth, reliability, and clean execution."
        description="Whether you need a high-conversion website, mobile app, AI workflow, custom platform, commerce system, or cloud deployment, Magnivel delivers practical solutions focused on measurable business outcomes."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="glow-card flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h2 className="text-2xl font-extrabold text-heading">{service.title}</h2>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-subtle-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-dimmed">Core Capabilities</p>
                  <ul className="mt-4 grid gap-2.5 text-xs font-semibold text-muted sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-dark">
                          <Icon name="check" size={11} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-lg border border-accent/10 bg-accent-subtle p-4 text-xs text-accent-dark sm:text-sm">
                  <span className="font-bold">Business Outcome:</span> {service.benefits}
                </div>
              </div>

              <div className="mt-8 flex items-center border-t border-subtle-border pt-4">
                <Link href="/contact" className="btn-primary w-full py-3">
                  Start {service.title} Project
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
