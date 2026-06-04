import { Metadata } from "next";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Magnivel Technologies",
  description: "Learn about Magnivel Technologies - a digital agency specializing in AI-powered websites, web apps, SaaS platforms, and custom software development for startups and enterprises.",
  keywords: ["about magnivel", "software development company", "digital agency", "SaaS development"],
  openGraph: {
    title: "About Magnivel Technologies",
    description: "We engineer secure, scalable software systems built to grow. Learn about our mission, vision, and approach to building high-performance digital products.",
    url: "https://magnivel.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Magnivel Technologies"
        title="We engineer secure, scalable software systems built to grow."
        description="Magnivel Technologies is a modern digital agency partnering with startups and enterprises to design, develop, and deploy production-grade websites, web portals, SaaS products, mobile apps, and custom AI systems."
      />
      
      {/* ─── Pillars Section ─── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "Company Overview", 
              "We combine engineering discipline, business intelligence, and high-fidelity user experiences. Every script and schema we build is structured to withstand massive organic growth.",
              "monitor"
            ],
            [
              "Our Mission", 
              "To empower growing businesses by delivering robust, clean-coded, and highly performant digital products. We replace manual bottlenecks with secure, automated software pipelines.",
              "shield"
            ],
            [
              "Our Vision", 
              "To be the premier global technology partner for ambitious companies. We aim to establish high standards in code clarity, conversion optimization, and stable SaaS architectures.",
              "rocket"
            ],
          ].map(([title, text, icon]) => (
            <article 
              key={title} 
              className="rounded-xl border border-subtle-border bg-surface p-6 shadow-sm hover:border-accent-light/30 transition-all glow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/15">
                <Icon name={icon} size={18} />
              </span>
              <h2 className="mt-5 text-xl font-bold text-heading">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── Approach/Process Section ─── */}
      <section className="bg-surface/30 border-t border-subtle-border py-20 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 h-[300px] w-[500px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            eyebrow="Our Approach" 
            title="A structured, collaborative development model." 
            description="From discovery workshops to product launch reviews, we operate with absolute transparency and meticulous code reviews."
          />
          
          <div className="mt-16 grid gap-6 md:grid-cols-5 relative">
            {processSteps.map((step) => (
              <div 
                key={step.step} 
                className="rounded-xl border border-subtle-border bg-surface/60 p-6 flex flex-col justify-between hover:border-accent-light/30 transition-all duration-300 relative group"
              >
                <div className="absolute top-4 right-4 text-3xl font-extrabold text-accent/10 group-hover:text-accent/20 transition-colors">
                  0{step.step}
                </div>
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/15">
                    <Icon name={step.icon} size={18} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-heading group-hover:text-accent-dark transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
