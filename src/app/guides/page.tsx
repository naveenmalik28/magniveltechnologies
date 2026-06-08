import { Metadata } from "next";
import { Icon } from "@/components/icon";
import { PageCta } from "@/components/page-cta";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Engineering Guides & Manuals | Magnivel Technologies",
  description:
    "Download detailed tech manuals from Magnivel Technologies. Learn about AI implementation, cloud systems setup, and technical search optimizations.",
  keywords: [
    "AI implementation guide",
    "SEO technical manual",
    "cloud migration guide",
    "software scoping guidelines",
  ],
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
    pages: "18 pages",
    icon: "brain",
  },
  {
    title: "SEO Technical Audit & Web Vitals Scale",
    category: "SEO & Speed",
    desc: "How to audit cumulative layout shifts, implement static rendering configurations, and configure micro-schemas scripts.",
    time: "15 min read",
    pages: "12 pages",
    icon: "trending-up",
  },
  {
    title: "Cloud Infrastructure Setup on AWS",
    category: "DevOps & Cloud",
    desc: "Learn to configure VPC zones, secure RDS database instances, write IAM permission schemas, and deploy container images.",
    time: "25 min read",
    pages: "22 pages",
    icon: "cloud",
  },
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
        <SectionTitle
          eyebrow="Manuals"
          title="Expert-written engineering guides"
          description="Practical, actionable documentation covering AI, SEO, cloud infrastructure, and more."
          centered
          className="mx-auto"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.title} className="glass-card flex flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent-dark">
                  <Icon name={guide.icon} size={18} />
                </span>
                <span className="text-[10px] font-bold text-dimmed">{guide.pages}</span>
              </div>
              <span className="mt-4 inline-flex w-fit rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-accent-dark">
                {guide.category}
              </span>
              <h3 className="mt-3 text-base font-extrabold text-heading leading-snug">{guide.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted leading-relaxed">{guide.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-subtle-border pt-4">
                <span className="flex items-center gap-1 text-[10px] font-semibold text-dimmed">
                  <Icon name="clock" size={11} />
                  {guide.time}
                </span>
                <button className="btn-secondary py-1.5 px-3.5 text-[10px] font-bold inline-flex items-center gap-1 cursor-pointer">
                  Download Guide
                  <Icon name="arrow-right" size={10} className="rotate-90" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta
        title="Need Hands-On Implementation?"
        description="Our team can implement these guides for your business — from AI systems to cloud infrastructure."
        primaryLabel="Talk to Our Team"
      />
    </PageShell>
  );
}
