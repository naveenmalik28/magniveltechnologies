import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional custom software development services, enterprise operations panels, dashboard builds, and backend system engineering.",
  keywords: ["custom software development", "custom software engineer", "enterprise software systems", "database development", "software dashboard builder", "backend developer"],
  alternates: {
    canonical: "https://magnivel.com/custom-software-development",
  },
};

const benefits = [
  {
    title: "Tailored to Your Exact Business Workflows",
    desc: "We build custom software systems designed to match your specific business workflows. Instead of forcing your team to adapt to the limitations and licensing fees of off-the-shelf software, we code custom solutions from scratch. This ensures that every database table, workflow state, user role, and reporting filter matches your exact business process, increasing employee efficiency and reducing manual work.",
    icon: "code",
  },
  {
    title: "Complete Code Ownership and Independence",
    desc: "When you partner with us, you retain 100% ownership of the custom application codebase. We build using open-source, industry-standard languages (React, Node.js, Python, PostgreSQL) to ensure there is zero vendor lock-in. You own the software licenses, databases, and assets, giving you complete independence and allowing you to adapt or host the application as your business grows.",
    icon: "shield",
  },
  {
    title: "Seamless Scaling and Long-Term Viability",
    desc: "We design software architectures built to support long-term growth. By keeping frontend views separate from backend APIs, optimizing database queries, and utilizing containerized deployments, your application is prepared to scale. We target stable dependencies and write structured code documentation, ensuring your custom system remains maintainable for years to come.",
    icon: "layers",
  },
];

const features = [
  {
    title: "Custom Workflow Mapping",
    desc: "We map your offline business procedures into clean, digital interfaces, automating task hand-offs between team divisions.",
  },
  {
    title: "Relational Database Design",
    desc: "Database design utilizing PostgreSQL or MySQL, optimized to store complex transaction records and run queries quickly.",
  },
  {
    title: "Granular Role Permissions",
    desc: "Role-based access control (RBAC) ensuring users only see relevant menu panels, data records, and edit actions.",
  },
  {
    title: "Automated Data Migration",
    desc: "Safe migration scripts that parse, validate, and write your legacy Excel or database files into your new clean software database.",
  },
  {
    title: "Scheduled Reporting Systems",
    desc: "Automated report scripts that compile weekly operational data, format tables, and send summaries to administrators.",
  },
  {
    title: "Observability & Error Audits",
    desc: "Deployment of monitoring tools (like Sentry) that record client errors in real-time, alerting developers to patch issues before users complain.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We analyze your business workflows, team roles, database fields, and reporting objectives to plan the system architecture."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We design database schemas, map interface layouts, draft user roles, and outline the technical plan."
  },
  {
    step: 3,
    title: "Development",
    desc: "We build backend APIs, configure database structures, and code frontend user views in agile development sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We audit system workflows, run security checks, test data migrations, and verify interface responsiveness."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We configure cloud environments, set up production databases, connect domains, and launch the custom application live."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We monitor database metrics, run backups, update security library dependencies, and deploy supplemental features."
  }
];

const techStack = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma ORM",
  "Express.js",
  "Docker Containers",
  "Sentry Monitoring",
  "AWS (EC2/RDS)",
];

const faqs = [
  {
    question: "Do we own the software code after the project is completed?",
    answer: "Yes, you own 100% of the custom software code, database designs, and assets. Upon project completion, we deliver the complete Git repository files. There are no licensing fees, and you can host the application on your private cloud servers, giving you complete independence and control over your intellectual property.",
  },
  {
    question: "How do you migrate our existing business data into the new system?",
    answer: "We review your existing data files (Excel, CSV, SQL databases) to identify formatting discrepancies and check data integrity. We then write automated migration scripts that clean, map, and write this data into the new database structure. We run verification passes on a staging environment to ensure all historical records match correctly before going live.",
  },
  {
    question: "What kind of support do you provide after the software is launched?",
    answer: "We provide comprehensive post-launch support. We set up automated database backups, configure system monitoring tools to log errors, and provide a dedicated warranty period to fix any bugs. We also offer ongoing maintenance agreements to handle server updates, security patches, and incremental feature updates as your business grows.",
  },
];

export default function CustomSoftwareDevPage() {
  return (
    <ServicePageTemplate
      title="Custom Software Development Services"
      eyebrow="Software Engineering"
      description="Software built for your unique business workflows. We design, build, and support secure, scalable custom software solutions with complete code ownership."
      overview={`What Do We Do?
Magnivel Technologies engineers custom software solutions, enterprise operations dashboards, reporting portals, and secure backend systems. We write clean, hand-coded applications using React, Node.js, and PostgreSQL. We handle database design, role-based access controls, and legacy data migrations.

Who Do We Help?
We partner with business teams, operations managers, and software directors who want to replace off-the-shelf software templates. Our clients need custom software to automate workflows, consolidate data from multiple spreadsheets, or build a secure application that matches their specific business workflows.

How Do We Help?
We analyze your manual processes and translate them into a secure web application. We design relational database schemas that organize your business entities and run queries quickly. We configure user dashboards with granular filters and access levels, and build background workers to automate reporting tasks.

Why Should Clients Trust Us?
We focus on robust technical design, transparent communication, and long-term codebase health. We build proprietary systems where you retain 100% code ownership with zero vendor lock-in. We provide staging access throughout development and offer ongoing support to keep your software running smoothly.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
