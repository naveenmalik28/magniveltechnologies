import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Custom Software Development Cost Guide | Magnivel Technologies",
  description: "Learn how custom software development costs are estimated. Guide to team sizing, database structures, legacy integration, and budget ranges for enterprise tools.",
  keywords: ["custom software cost", "software development price", "enterprise system cost", "database project budget", "custom portal cost"],
  alternates: {
    canonical: "https://magnivel.com/custom-software-cost",
  },
};

const benefits = [
  {
    title: "Accurate Milestones Pricing",
    desc: "We define precise modules (auth, dashboard, databases) to ensure you pay only for completed feature sets.",
    icon: "target",
  },
  {
    title: "Zero Licensing Cost Offset",
    desc: "Unlike off-the-shelf SaaS, our custom builds require no per-user monthly seats fees, lowering long-term operating costs.",
    icon: "layers",
  },
  {
    title: "Phased MVP Roadmap",
    desc: "Deploy core features first (Phase 1) and expand functionality using data feedback, optimizing capital allocation.",
    icon: "zap",
  },
];

const features = [
  { title: "Standard Operations Portals", desc: "User logs, database, list pages, simple reporting: USD 8,000 - USD 15,000 (INR 5L - 10L)." },
  { title: "Enterprise Database Systems", desc: "Multi-role flows, custom API sync, CSV tools, dashboards: USD 15,000 - USD 30,000." },
  { title: "Complex Microservices Platforms", desc: "High concurrency clusters, real-time message sync, advanced security: USD 30,000 - USD 60,000+." },
  { title: "Role-Based Security Configurations", desc: "Granular access matrices, activity logs tracking, and password encryption." },
  { title: "Data Migration Pipelines", desc: "Clean and transfer existing Excel files or legacy database tables safely." },
  { title: "Long-Term SLA Maintenance", desc: "Cloud monitoring, database backups, security patches starting at USD 400/month." },
];

const process = [
  { step: 1, title: "Functional Scoping", desc: "Analyze business rules, inputs/outputs, roles, and legacy tools." },
  { step: 2, title: "Database Architecture", desc: "Design entity relation diagrams (ERDs), API specs, and wireframe pages." },
  { step: 3, title: "Backend Infrastructure", desc: "Set up target servers, set up database tables, and code API endpoints." },
  { step: 4, title: "Dashboard Integration", desc: "Assemble the frontend portal pages, hook up APIs, and optimize speeds." },
  { step: 5, title: "QA Testing & Deploy", desc: "Verify data syncs, run load testing, publish to AWS, and provide support." },
];

const faqs = [
  {
    question: "What drives custom software development costs?",
    answer: "The primary drivers are the complexity of business logic, database size, number of user roles, legacy integration needs, and real-time syncing demands.",
  },
  {
    question: "Is custom software cheaper than off-the-shelf SaaS in the long run?",
    answer: "Yes. For teams with 30+ users, monthly SaaS seats fees mount quickly. Custom software has a higher upfront cost but zero monthly user licensing fees, paying for itself in 12 to 18 months.",
  },
  {
    question: "Do you sign NDAs before cost discovery?",
    answer: "Absolutely. We sign strict Non-Disclosure Agreements (NDAs) before you share any database schemas, internal workflows, or proprietary concepts.",
  },
];

export default function CustomSoftwareCostPage() {
  return (
    <ServicePageTemplate
      title="Custom Software Development Cost Guide"
      eyebrow="Cost Guide"
      description="Estimate your enterprise software budget. Learn about typical pricing for custom database tools, operations dashboards, API sync pipelines, and cloud hosting."
      overview="Bespoke software is a strategic business asset. This guide covers how custom software builds are priced, breaks down features across entry-level to enterprise budgets, and evaluates legacy database migrations."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
