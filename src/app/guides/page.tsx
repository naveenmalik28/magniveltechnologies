import { Metadata } from "next";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Engineering Guides & Manuals | Magnivel Technologies",
  description: "Download detailed tech manuals from Magnivel Technologies. Learn about AI implementation, cloud systems setup, and technical search optimizations.",
  keywords: ["AI implementation guide", "SEO technical manual", "cloud migration guide", "software scoping guidelines"],
  alternates: {
    canonical: "https://magnivel.com/guides",
  },
};

const guides = [
  {
    title: "AI Implementation Blueprint",
    category: "Artificial Intelligence",
    desc: "A manual explaining vector database options, data privacy compliance, LLM API key controls, and prompts writing.",
    time: "20 min read",
    pages: "18 pages"
  },
  {
    title: "SEO Technical Audit & Web Vitals Scale",
    category: "SEO & Speed",
    desc: "How to audit cumulative layout shifts, implement static rendering configurations, and configure micro-schemas scripts.",
    time: "15 min read",
    pages: "12 pages"
  },
  {
    title: "Cloud Infrastructure Setup on AWS",
    category: "DevOps & Cloud",
    desc: "Learn to configure VPC zones, secure RDS database instances, write IAM permission schemas, and deploy container images.",
    time: "25 min read",
    pages: "22 pages"
  }
];

export default function GuidesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Guides"
        title="Comprehensive Tech Manuals & PDF Guides"
        description="Learn software engineering best practices. Access deep manuals written by our engineering team to plan, build, and deploy custom software successfully."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.title} className="glow-card flex flex-col justify-between p-6">
              <div>
                <div className="flex justify-between items-center gap-2">
                  <span className="rounded bg-accent-subtle px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-accent-dark">
                    {guide.category}
                  </span>
                  <span className="text-[10px] text-dimmed font-bold">{guide.pages}</span>
                </div>
                <h3 className="mt-4 text-base font-extrabold text-heading leading-snug">{guide.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{guide.desc}</p>
              </div>
              <div className="mt-6 border-t border-subtle-border/40 pt-4 flex justify-between items-center">
                <span className="text-[10px] text-dimmed font-semibold flex items-center gap-1">
                  <Icon name="clock" size={11} />
                  {guide.time}
                </span>
                <button className="btn-secondary py-1.5 px-3.5 text-[10px] font-bold inline-flex items-center gap-1 hover:border-accent hover:text-accent-dark transition-colors cursor-pointer">
                  Download Guide
                  <Icon name="arrow-right" size={10} className="rotate-90" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
