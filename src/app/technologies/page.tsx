import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { techCategories } from "@/lib/site";

export const metadata = { title: "Technology Stack | Magnivel Technologies" };

export default function TechnologiesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Engineering Stack"
        title="Modern, reliable tools chosen for scale and stability."
        description="We don't chase every passing framework. Magnivel Technologies relies on industry-proven stacks that guarantee optimal performance, server-side security, and developer efficiency."
      />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <article 
              key={category.name} 
              className="rounded-xl border border-subtle-border bg-surface p-6 flex flex-col justify-between hover:border-accent-light/30 transition-all duration-300 shadow-xl glow-card group relative"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon name={category.icon} size={18} />
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {category.name}
                  </h2>
                </div>
                
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                  {category.description}
                </p>
              </div>
              
              <div className="mt-6 border-t border-subtle-border/40 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-dimmed mb-2">Primary Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span 
                      key={item} 
                      className="rounded-md bg-background border border-subtle-border px-2.5 py-1 text-xs text-white font-medium hover:border-accent-light/40 transition-all duration-200"
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
