import { Metadata } from "next";
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase";
import { PageCta } from "@/components/page-cta";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Portfolio | Magnivel Technologies",
  description:
    "Explore our portfolio of high-performance web applications, mobile apps, SaaS platforms, and custom software solutions built for leading companies.",
  keywords: ["portfolio", "case studies", "web applications", "SaaS products", "mobile apps"],
  openGraph: {
    title: "Portfolio | Magnivel Technologies",
    description:
      "High-performance products we've brought to production. Custom enterprise portals, lead-generation platforms, mobile apps, and SaaS dashboards.",
    url: "https://magnivel.com/portfolio",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Work"
        title="High-performance products we've brought to production."
        description="Explore the snapshot of digital systems we build: custom enterprise web portals, responsive lead-generation platforms, cross-platform mobile apps, secure multi-tenant SaaS dashboards, and automated AI software pipelines."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Case Studies"
          title="Projects that deliver measurable impact"
          description="Each engagement is engineered for performance, security, and long-term scalability."
          centered
          className="mx-auto"
        />

        <PortfolioShowcase />
      </section>

      <PageCta
        title="Have a Project in Mind?"
        description="Tell us about your goals and we'll craft a tailored solution that delivers real business results."
        primaryLabel="Discuss Your Project"
      />
    </PageShell>
  );
}
