import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Startup Software & MVP Solutions | Magnivel Technologies",
  description: "Magnivel Technologies partners with startups to build high-performance MVPs. Next.js SaaS builds, Stripe payments integration, and AWS cloud configurations.",
  keywords: ["startup software developer", "mvp development agency", "saas startup builder", "rapid prototyping software", "tech partner startups"],
  alternates: {
    canonical: "https://magnivel.com/software-for-startups",
  },
};

const benefits = [
  {
    title: "Accelerated Time to Market",
    desc: "We focus on key product validation workflows, launching clean software platforms in weeks instead of months.",
    icon: "zap",
  },
  {
    title: "Capital Efficient Development",
    desc: "Avoid expensive backend licensing. We use robust open-source stacks (Next.js, Node.js, Postgres) to keep startup costs low.",
    icon: "layers",
  },
  {
    title: "Scale-Ready Architectures",
    desc: "We structure databases, clean code modules, and use API layers so the system is ready for investor due diligence.",
    icon: "shield",
  },
];

const features = [
  { title: "Minimum Viable Product (MVP)", desc: "Build core feature flows, custom landing pages, and user registration grids quickly." },
  { title: "Stripe Recurring Checkout", desc: "Integrate billing, checkout gateways, invoices, subscription toggles, and payment methods." },
  { title: "Product Analytics Sync", desc: "Set up analytics triggers, conversion tags, and event logging dashboards." },
  { title: "Custom User Authentication", desc: "Configure JWT tokens, email login, and Google/social logins." },
  { title: "Dynamic Webhook Framework", desc: "Connect email templates, push notifications, and database actions to key user events." },
  { title: "Vercel & AWS Deployments", desc: "Deploy with automatic SSL configs, custom domain settings, and cloud database nodes." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify startup user journeys, MVP scope, core payment features, and timelines." },
  { step: 2, title: "Figma UI Prototyping", desc: "Design interactive wireframes of customer and admin screens before coding." },
  { step: 3, title: "Core Coding Sprint", desc: "Develop backend databases, write APIs, and program the functional application pages." },
  { step: 4, title: "Payment & Email Sync", desc: "Connect checkout gateways, set up webhook triggers, and test emails." },
  { step: 5, title: "QA Testing & Launch", desc: "Conduct cross-tenant audits, verify speed scores, deploy, and support growth." },
];

const faqs = [
  {
    question: "Do you sign NDAs before discovery calls?",
    answer: "Yes, we execute Non-Disclosure Agreements (NDAs) promptly before you share any mockups, business models, or specifications.",
  },
  {
    question: "How long does a startup MVP take to build?",
    answer: "A standard SaaS or database MVP takes 4 to 8 weeks from design to launch. Complex products with geo-tracking or AI RAG loops take 8 to 12 weeks.",
  },
  {
    question: "Can we modify the code after launch?",
    answer: "Absolutely. We write clean, commented TypeScript following modular patterns, allowing your in-house developers to easily take over the codebase.",
  },
];

export default function StartupsSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Bespoke Software & MVP Solutions for Startups"
      eyebrow="Industry Solutions"
      description="Design, build, and deploy your product. We specialize in fast-loading MVPs, SaaS database frameworks, and Stripe checkout checkouts."
      overview="Startups need speed and clean execution. Magnivel Technologies serves as your fractional engineering team, translating ideas into premium, investor-ready web platforms. We handle database schema planning, subscription flows, and cloud integrations."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
