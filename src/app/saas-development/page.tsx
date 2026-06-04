import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "SaaS Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides premium SaaS product development services. Multi-tenant cloud databases, Stripe recurring billing, user analytics dashboards.",
  keywords: ["SaaS development services", "multi-tenant architecture build", "Stripe subscription integration", "SaaS MVP developer", "cloud platform developer"],
  alternates: {
    canonical: "https://magnivel.com/saas-development",
  },
};

const benefits = [
  {
    title: "Secure Multi-Tenancy",
    desc: "Every tenant's customer data is isolated safely at the database row or schema level, ensuring absolute privacy.",
    icon: "shield",
  },
  {
    title: "Stripe Recurring Billing",
    desc: "Configure monthly, annual, usage-based, or tiered pricing models with automated receipts and invoice collection.",
    icon: "layers",
  },
  {
    title: "Fast MVP to Scale",
    desc: "We build clean Next.js/React frontend templates and robust APIs to launch your platform quickly and scale modularly.",
    icon: "zap",
  },
];

const features = [
  { title: "Granular Subscriptions Management", desc: "Integrate Stripe or Paddle for checkout, subscription portals, upgrade/downgrade logic, and cards sync." },
  { title: "Workspace & Team Invites", desc: "Enable account owners to invite collaborators with granular roles (admin, editor, viewer) and track actions." },
  { title: "Granular Metrics Charts", desc: "Render usage reports, financial charts, customer growth counters, and data summaries in real-time." },
  { title: "Single Sign-On (SSO)", desc: "Support SAML, Okta, Google Workspace, and Microsoft Azure logins for enterprise tier clients." },
  { title: "Dynamic Webhook Framework", desc: "Allow your users to set webhook endpoints, triggering automated alerts on key platform events." },
  { title: "Scalable Postgres Setup", desc: "We optimize database indexes, cache queries with Redis, and structure schemas to handle millions of rows." },
];

const process = [
  { step: 1, title: "Architecture Discovery", desc: "Define database isolation models, pricing strategies, user flows, and integrations." },
  { step: 2, title: "Database & UI Design", desc: "Plan relational tables, draft billing screens, user portals, and dashboard charts." },
  { step: 3, title: "Core Platform Build", desc: "Set up multi-tenant schemas, implement user auth, and establish database logic." },
  { step: 4, title: "Billing & Integrations", desc: "Connect Stripe checkouts, configure webhook listeners, and build settings panels." },
  { step: 5, title: "QA Audit & Launch", desc: "Conduct cross-tenant data leak audits, test payment gateways, deploy on AWS, and support growth." },
];

const faqs = [
  {
    question: "Do you use a shared or separate database for each tenant?",
    answer: "We typically recommend a shared database with tenant column partitioning (logical isolation) for cost efficiency, but can build separate database schemas for enterprise compliance.",
  },
  {
    question: "Can you build usage-based or metered billing?",
    answer: "Yes, we integrate Stripe's metered billing APIs to track feature actions (like API calls or downloads) and report them to calculate billing cycles automatically.",
  },
  {
    question: "Is the platform ready to handle mobile app extensions later?",
    answer: "Yes. We build clean API layers (REST/GraphQL), allowing you to easily hook up iOS and Android mobile apps to the same database later without rewriting the backend.",
  },
];

export default function SaaSDevelopmentServicesPage() {
  return (
    <ServicePageTemplate
      title="Multi-Tenant SaaS Development Services"
      eyebrow="SaaS Engineering"
      description="Build a scalable subscription business. We design and develop secure multi-tenant SaaS platforms with recurring billing, workspaces, and analytics."
      overview="Launching a successful Software-as-a-Service product requires high speed, a robust database, and a reliable payment setup. Magnivel Technologies engineers premium SaaS platforms using modern Next.js/React UI wrappers and secure cloud databases. We handle subscriptions, team scopes, and analytics charts, allowing you to focus on marketing."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
