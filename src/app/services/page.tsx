import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { services } from "@/lib/site";

export const metadata = { title: "Services | Magnivel Technologies" };

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services Portfolio"
        title="High-performance software tailored for exact business stages."
        description="Whether you need a high-conversion agency website, a secure role-based cloud dashboard, cross-platform mobile apps, or custom AI integrations, we deliver modern solutions focused on ROI."
      />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <article 
              key={service.title} 
              className="rounded-xl border border-subtle-border bg-surface p-6 sm:p-8 flex flex-col justify-between hover:border-accent-light/30 transition-all duration-300 shadow-xl glow-card group relative"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon name={service.icon} size={22} />
                  </span>
                  <h2 className="text-2xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {service.title}
                  </h2>
                </div>
                
                <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="mt-6 border-t border-subtle-border/40 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Core Capabilities</p>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-xs font-medium text-muted">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-light">
                          ✔
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Benefits Alert */}
                <div className="mt-6 rounded-lg bg-accent-subtle/40 border border-accent/10 p-4 text-xs sm:text-sm text-accent-light">
                  <span className="font-bold">Business Outcome:</span> {service.benefits}
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-subtle-border/40 flex items-center">
                <Link 
                  href="/contact" 
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#8b5cf6] px-5 py-3 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
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
