import { Metadata } from "next";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Icon } from "@/components/icon";
import { AnimatedCounter } from "@/components/motion";
import { PageCta } from "@/components/page-cta";
import { PageHeader, PageShell, SectionTitle } from "@/components/page-shell";
import { processSteps, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Magnivel Technologies",
  description:
    "Learn about Magnivel Technologies — a premium software development company specializing in AI-powered websites, web apps, SaaS platforms, and custom software for startups and enterprises.",
  keywords: ["about magnivel", "software development company", "digital agency", "SaaS development"],
  openGraph: {
    title: "About Magnivel Technologies",
    description:
      "We engineer secure, scalable software systems built to grow. Learn about our mission, vision, and approach to building high-performance digital products.",
    url: "https://magnivel.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/about",
  },
};

const pillars = [
  {
    title: "Company Overview",
    text: "We combine engineering discipline, business intelligence, and high-fidelity user experiences. Every script and schema we build is structured to withstand massive organic growth.",
    icon: "monitor",
  },
  {
    title: "Our Mission",
    text: "To empower growing businesses by delivering robust, clean-coded, and highly performant digital products. We replace manual bottlenecks with secure, automated software pipelines.",
    icon: "shield",
  },
  {
    title: "Our Vision",
    text: "To be the premier global technology partner for ambitious companies. We aim to establish high standards in code clarity, conversion optimization, and stable SaaS architectures.",
    icon: "rocket",
  },
];

const values = [
  { title: "Engineering Excellence", desc: "Clean architecture, rigorous code reviews, and production-grade deployments.", icon: "code" },
  { title: "Client Partnership", desc: "Transparent communication, weekly demos, and collaborative decision-making.", icon: "users" },
  { title: "Innovation First", desc: "AI, cloud-native systems, and modern frameworks at the core of every build.", icon: "sparkles" },
  { title: "Global Delivery", desc: "Serving clients across India, North America, Europe, UAE, and Southeast Asia.", icon: "globe" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Magnivel Technologies"
        title="We engineer secure, scalable software systems built to grow."
        description="Magnivel Technologies is a modern digital agency partnering with startups and enterprises to design, develop, and deploy production-grade websites, web portals, SaaS products, mobile apps, and custom AI systems."
      />

      {/* Stats */}
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Who We Are"
          title="Built on purpose, driven by innovation"
          description="A team of engineers, designers, and strategists committed to delivering software that creates lasting business value."
          centered
          className="mx-auto"
        />
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="glass-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary">
                <Icon name={pillar.icon} size={22} />
              </span>
              <h2 className="font-heading mt-6 text-base font-extrabold uppercase tracking-wide text-heading">{pillar.title}</h2>
              <p className="mt-4 text-xs leading-relaxed text-muted font-sans">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-subtle-border bg-surface/10 py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Our Values"
            title="What drives every project we deliver"
            centered
            className="mx-auto"
          />
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="glass-card p-6 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary">
                  <Icon name={value.icon} size={18} />
                </span>
                <h3 className="font-heading mt-6 text-sm font-extrabold uppercase tracking-wide text-heading">{value.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted font-sans">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline steps={processSteps} />

      <PageCta
        title="Let's Build Your Next Product"
        description="Partner with Magnivel Technologies to turn your vision into production-grade software."
        primaryLabel="Start Your Project"
      />
    </PageShell>
  );
}
