import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "SaaS Product Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides custom SaaS product development services, multi-tenant cloud architectures, Stripe billing integrations, and workspace collaboration panels.",
  keywords: ["SaaS development", "multi-tenant architecture", "Stripe subscription billing", "SaaS platform builder", "software as a service developer", "Next.js SaaS"],
  alternates: {
    canonical: "https://magnivel.com/saas-development",
  },
};

const benefits = [
  {
    title: "Secure Multi-Tenant Architecture",
    desc: "We prioritize tenant isolation to ensure complete data security. Whether we build a shared database with tenant-keyed logical partitioning or configure separate schemas, we write strict queries that check tenant boundaries at the server level. This design prevents data leaks, satisfies enterprise security audits, and keeps your users' private data securely separated within a single, cost-effective infrastructure.",
    icon: "shield",
  },
  {
    title: "Flexible Stripe Subscription Billing",
    desc: "We integrate comprehensive billing gateways to automate your revenue operations. Our developers implement monthly, annual, tiered, or metered (usage-based) billing structures. We configure webhook handlers that process events like payment successes, card failures, and plan changes, automatically updating account statuses and sending receipts without manual oversight.",
    icon: "layers",
  },
  {
    title: "Workspace Sharing & Team Invites",
    desc: "We build native collaboration features directly into the core user model. Account owners can create team workspaces, invite members via secure email links, and assign precise access roles (admin, editor, viewer). We build audit logs that record teammate actions, allowing your SaaS users to work together and share assets within a secure boundary.",
    icon: "users",
  },
];

const features = [
  {
    title: "Tenant Data Isolation",
    desc: "Strict database query checks enforce data boundaries, ensuring that no client account can ever query, read, or update another account's database records.",
  },
  {
    title: "Stripe & Paddle Billing Integrations",
    desc: "End-to-end subscription portals allowing customers to select tiers, update credit cards, review billing histories, and download invoices securely.",
  },
  {
    title: "Workspace Invitation Links",
    desc: "Secure email invite tokens allowing workspace administrators to add team members and configure roles (owner, admin, member, billing manager) instantly.",
  },
  {
    title: "Comprehensive Usage Metering APIs",
    desc: "Backend meters that record customer actions (such as API requests or file storage volumes) and sync them with Stripe to charge accounts based on actual usage.",
  },
  {
    title: "Admin Dashboard and Metrics",
    desc: "Centralized admin panels displaying key SaaS metrics, including active subscriber counts, monthly recurring revenue (MRR), database sizes, and error rates.",
  },
  {
    title: "Enterprise Single Sign-On (SSO)",
    desc: "SAML 2.0 and OIDC configurations supporting enterprise customer authentication through providers like Okta, Microsoft Azure AD, and Google Workspace.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We detail your SaaS pricing tiers, tenant isolation needs, workspace invite structures, and database rules to draft a clear plan."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We design multi-tenant database tables, map billing webhooks, and sketch user workspace dashboards."
  },
  {
    step: 3,
    title: "Development",
    desc: "Our team builds the database boundaries, codes billing webhooks, and creates interactive workspace screens in agile sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We perform strict data-leak tests between mockup tenants, audit billing event failures, and test payment gate sandboxes."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We configure autoscaling cloud servers, set up database replication, and launch the subscription platform live."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We monitor database performance, handle webhook errors, update security keys, and deploy new feature iterations."
  }
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "Stripe Billing",
  "Redis Caching",
  "Docker",
  "AWS (ECS/RDS)",
];

const faqs = [
  {
    question: "Do you use a shared or separate database for each tenant?",
    answer: "For most SaaS platforms, we recommend a shared database with column-level tenant partitioning (logical isolation). This approach is highly cost-effective, easy to manage, and handles scaling efficiently. However, if you serve enterprise clients with strict compliance needs, we can build separate database schemas or dedicated database instances for those accounts. Our codebase is architected to support both methods depending on your target market.",
  },
  {
    question: "How do you handle subscription billing failures and card updates?",
    answer: "We set up Stripe webhook listeners in our backend. When a payment fails, Stripe triggers an event. Our server listens to this event, updates the tenant's status to 'payment_due' in the database, and automatically sends a secure email requesting card updates. We display a card update widget inside the app, allowing users to safely update their billing details without requiring your manual intervention.",
  },
  {
    question: "Is the backend API built to support mobile apps in the future?",
    answer: "Yes, absolutely. We separate the frontend Next.js interface from the backend API. All client actions are routed through secure, documented RESTful or GraphQL endpoints. This design ensures that when you decide to launch iOS and Android apps, your mobile developers can connect directly to the same backend API, sharing database tables, billing states, and user sessions without modifications.",
  },
];

export default function SaaSDevPage() {
  return (
    <ServicePageTemplate
      title="SaaS Product Development Services"
      eyebrow="SaaS Engineering"
      description="Build a scalable subscription business. We design and develop secure multi-tenant SaaS platforms with recurring billing, team workspaces, and analytics dashboards."
      overview={`What Do We Do?
Magnivel Technologies builds custom Software-as-a-Service (SaaS) platforms, multi-tenant database systems, and subscription checkout integrations. We write clean React and Next.js interfaces backed by secure Node.js APIs to ensure fast response times. We build workspaces, team invitations, and Stripe checkouts.

Who Do We Help?
We work with software founders, startup teams, and businesses who want to launch a proprietary subscription tool. Our clients need to transition a desktop software concept, a spreadsheet workflow, or an agency service into a scalable, multi-user cloud product that automatically charges users based on subscription plans.

How Do We Help?
We architect database partitions that keep user data securely isolated. We integrate Stripe checkout checkouts, customer billing portals, and dunning workflows to manage recurring revenue automatically. We write clean workspace APIs allowing users to invite team members and collaborate within their account.

Why Should Clients Trust Us?
We focus on long-term scalability, clean coding standards, and transparent timelines. We build proprietary applications where you retain 100% codebase ownership with zero vendor lock-in. We provide detailed database designs and secure testing sandboxes, ensuring your SaaS launch is reliable and secure.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
