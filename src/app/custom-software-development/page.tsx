import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Magnivel Technologies",
  description: "Magnivel Technologies designs and builds custom software solutions. Scalable backend databases, API integrations, operations dashboards, & enterprise web platforms.",
  keywords: ["custom software development services", "enterprise software solutions", "custom operations portal", "business workflow database", "custom software engineer"],
  alternates: {
    canonical: "https://magnivel.com/custom-software-development",
  },
};

const benefits = [
  {
    title: "Tailored to Your Workflow",
    desc: "No forced SaaS compromises. We engineer custom panels that map precisely to your internal processes.",
    icon: "target",
  },
  {
    title: "No Monthly Licensing Fees",
    desc: "Own your intellectual property. Our custom builds eliminate costly recurring per-user seats software fees.",
    icon: "layers",
  },
  {
    title: "Enterprise Grade Security",
    desc: "Built with role-based access control (RBAC), data encryption at rest, secure hosting, and regular backups.",
    icon: "shield",
  },
];

const features = [
  { title: "Role-Based Access Control", desc: "Define granular permissions for managers, staff, clients, and admins to protect sensitive data." },
  { title: "Legacy System Integrations", desc: "Connect modern database clusters to legacy mainframes, ERPs, CRM databases, or external APIs." },
  { title: "Automated CSV/PDF Reporting", desc: "Generate financial statements, team performance summaries, or inventory logs automatically." },
  { title: "Real-Time Databases Sync", desc: "Utilize PostgreSQL, Redis, or WebSockets to reflect status changes across user dashboards instantly." },
  { title: "Secure API Architecture", desc: "Clean REST/GraphQL interfaces with rate limits, token auth (JWT), and API endpoint docs." },
  { title: "Custom Workflow Builders", desc: "Allow admins to build custom steps, notification alerts, status states, and user assignments." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Analyze business processes, user personas, data flow charts, integrations, and compliance goals." },
  { step: 2, title: "Database & UI Design", desc: "Draft database schema relationships, page mockups, and client approval steps." },
  { step: 3, title: "Backend Coding", desc: "Set up the server infrastructure, database models, secure APIs, and core workflows." },
  { step: 4, title: "Frontend Integration", desc: "Assemble responsive customer portals, admin grids, and interactive dashboards." },
  { step: 5, title: "QA & Cloud Launch", desc: "Conduct stress testing, load tests, encrypt data rows, deploy on AWS/Vercel, and provide support." },
];

const faqs = [
  {
    question: "Do I own the source code of the custom software?",
    answer: "Yes. Once the project is completed and invoice items are cleared, the full intellectual property (IP) and source code repository belong to you.",
  },
  {
    question: "How do you ensure the system is secure?",
    answer: "We follow industry-leading secure coding practices, enforce HTTPS, encrypt passwords with bcrypt, support JSON Web Tokens, and apply database access limits.",
  },
  {
    question: "Can this system scale as my company grows?",
    answer: "Absolutely. We build using microservices or modular monolothic architectures on AWS, allowing database rows and server limits to scale dynamically with user traffic.",
  },
];

export default function CustomSoftwareServicesPage() {
  return (
    <ServicePageTemplate
      title="Custom Software Development Services"
      eyebrow="Custom Engineering"
      description="Replace manual Excel spreadsheets and disjointed SaaS platforms. We build secure, bespoke software solutions that automate your business workflows."
      overview="Off-the-shelf software often forces you to compromise on your unique business processes. Magnivel Technologies designs, codes, and launches custom operations dashboards, portal systems, and databases that match your operations precisely. We build for performance, security, and absolute maintainability."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
