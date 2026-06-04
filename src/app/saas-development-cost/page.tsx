import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "SaaS Development Cost Guide | Magnivel Technologies",
  description: "Learn what it costs to build a multi-tenant SaaS platform. Detailed guide on database isolation, Stripe payment splits, user analytics, and MVP budget ranges.",
  keywords: ["saas development cost", "saas mvp price", "saas platform budget", "subscription system pricing", "stripe software cost"],
  alternates: {
    canonical: "https://magnivel.com/saas-development-cost",
  },
};

const benefits = [
  {
    title: "Capital-Efficient MVP Scope",
    desc: "We focus on key SaaS validation workflows (signup, dashboard, core feature, payments), launching in weeks to verify customers.",
    icon: "zap",
  },
  {
    title: "No-Vendor-Lock Systems",
    desc: "Build using customizable open-source backend languages (Node.js, Postgres, Prisma), avoiding expensive proprietary backends.",
    icon: "layers",
  },
  {
    title: "Direct Stripe Pricing Sync",
    desc: "Utilize Stripe's native portals to handle card updates, invoice pdfs, and coupon codes, reducing coding hours.",
    icon: "target",
  },
];

const features = [
  { title: "Standard SaaS MVPs", desc: "User workspaces, core logic page, single Stripe pricing tier: USD 8,000 - USD 15,000 (INR 6L - 12L)." },
  { title: "Professional Multi-Role SaaS", desc: "Team roles, usage graphs, multi-tier plans, invoice triggers: USD 15,000 - USD 30,000." },
  { title: "Enterprise compliance SaaS", desc: "SSO (SAML), activity audits, database replication, SLA terms: USD 30,000 - USD 60,000+." },
  { title: "Stripe Webhook Listeners", desc: "Automate account upgrades, block failed card accounts, and log invoice collections." },
  { title: "Database Tenant Partitioning", desc: "Safe Postgres indexes and query optimization to keep user data private and queries fast." },
  { title: "Ongoing Cloud Support", desc: "SLA agreements covering server scaling, database backups, security scans starting at USD 400/month." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify SaaS tenant access rules, pricing model, core features, and APIs." },
  { step: 2, title: "UI Mockup Drafting", desc: "Design high-fidelity mockups of the user dashboard, billing, and settings page." },
  { step: 3, title: "Auth & Core Coding", desc: "Code the database schema, user signups, workspaces, and primary features." },
  { step: 4, title: "Stripe & Subscriptions", desc: "Connect checkout flows, write webhook hooks, and build the billing dashboard." },
  { step: 5, title: "QA stress & Launch", desc: "Audit tenant data isolation, run billing scenarios, deploy to AWS, and support growth." },
];

const faqs = [
  {
    question: "How much does a SaaS Minimum Viable Product (MVP) cost?",
    answer: "A standard SaaS MVP ranges from USD 8,000 to USD 15,000. It includes user registration, organization workspaces, subscription checkout, and the core functional tool.",
  },
  {
    question: "Does custom SaaS require expensive cloud hosting?",
    answer: "No. For early startups, hosting can run on Vercel's free/pro tiers ($20/month) and serverless database plans (like Supabase or Neon starting at $0-$25/month), keeping overhead minimal.",
  },
  {
    question: "How long does it take to build a custom SaaS?",
    answer: "A simple MVP takes 4 to 8 weeks. A feature-rich SaaS platform with team scopes, analytics, and custom integrations takes 8 to 12 weeks.",
  },
];

export default function SaaSCostPage() {
  return (
    <ServicePageTemplate
      title="Multi-Tenant SaaS Development Cost Guide"
      eyebrow="Cost Guide"
      description="Estimate your software product budget. Understand cost variables across logical database partitioning, Stripe subscription integrations, user dashboards, and cloud scaling."
      overview="Launching a software product involves strategic planning. This guide details typical SaaS pricing structures, maps features from entry-level MVPs to enterprise portals, and evaluates subscription configuration times."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
