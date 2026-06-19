import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Web Application Development Services | Magnivel Technologies",
  description: "Magnivel Technologies delivers dynamic web application development services, custom customer dashboards, database integrations, and scalable admin portals built with Next.js and React.",
  keywords: ["web application development", "custom web app", "React developer", "Next.js dashboard", "customer portal builder", "software engineering"],
  alternates: {
    canonical: "https://magnivel.com/web-application-development",
  },
};

const benefits = [
  {
    title: "Streamlined Business Workflows and Automation",
    desc: "Our web applications are custom-built to model your exact business processes. By replacing paper-based tasks, complex spreadsheets, and disconnected software tools with a unified web panel, we help reduce administrative overhead. Automated emails, scheduled report notifications, and task assignments are built directly into the server logic, allowing your team to complete operations faster and with fewer manual errors.",
    icon: "zap",
  },
  {
    title: "Granular Security and Access Control",
    desc: "We enforce strict role-based access control (RBAC) to ensure that users only see the data they are authorized to access. Whether you need an admin, manager, staff, or client view, our database queries filter rows at the server level. We use encrypted session tokens, strict HTTP headers, and industry-standard security patterns to safeguard your company and user data from unauthorized access.",
    icon: "shield",
  },
  {
    title: "Scalable Databases and API Connectivity",
    desc: "We design relational and document-based databases using schemas designed to handle high transaction volumes. By index-optimizing PostgreSQL or MongoDB setups and utilizing Prisma ORM, we guarantee fast query response times. This robust backend structure is built to expose secure RESTful or GraphQL API endpoints, making it simple to connect external SaaS tools, billing gateways, or future mobile apps.",
    icon: "layers",
  },
];

const features = [
  {
    title: "Role-Based Access Control",
    desc: "Secure user login systems featuring granular user permissions. Access levels determine which dashboard views, data records, and administrative controls are visible and actionable.",
  },
  {
    title: "Interactive Data Visualizations",
    desc: "Real-time interactive charts, summary metrics grids, and performance tables built with lightweight libraries (like Recharts) to help users make sense of complex business records.",
  },
  {
    title: "Automated Background Workers",
    desc: "Server-side workers configured to run repetitive tasks like sending customer invoices, checking database queue states, and updating search indexes in the background.",
  },
  {
    title: "Advanced Data Filters and CSV Export",
    desc: "Users can sort, search, and filter complex tables by date, status, or keyword, and export filtered data arrays instantly as structured CSV sheets or PDF summaries.",
  },
  {
    title: "Secure API Integrations",
    desc: "Custom hooks and endpoints designed to safely pass authentication credentials and exchange structured JSON payloads with third-party payment, shipping, or accounting software.",
  },
  {
    title: "Responsive Management Dashboards",
    desc: "Dashboard interfaces styled with clean, fluid grids that wrap columns naturally, ensuring that management panels are fully readable and functional on mobile tablet screens.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We detail all user stories, operational roles, database fields, and required third-party APIs to write a clear technical brief."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We draft entity-relationship database diagrams, sketch dashboard layouts, and map out navigation transitions."
  },
  {
    step: 3,
    title: "Development",
    desc: "We build backend schemas, code REST/GraphQL APIs, and assemble interactive React frontend dashboards in agile sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We test authentication sessions, audit database load times, and run complete validation scripts on form inputs."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We deploy the application on secure cloud servers, configure environment variables, and establish SSL and custom domains."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We run daily database backups, monitor system logs for errors, and deploy incremental features as your needs evolve."
  }
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma ORM",
  "Redis Caching",
  "Tailwind CSS",
  "AWS Cloud",
];

const faqs = [
  {
    question: "What is the difference between a website and a web application?",
    answer: "A website is primarily informational, designed to display text, images, and marketing content to general visitors, and is highly optimized for search engine crawlability. A web application is an interactive system where users log in to perform specific tasks, manage private database records, configure workflows, view personalized dashboard metrics, and trigger integrations. Web apps require strict user session controls, server-side data validation, and complex database schemas.",
  },
  {
    question: "How do you secure user data in your web applications?",
    answer: "We prioritize security at every layer of development. We hash user passwords using bcrypt, use JSON Web Tokens (JWT) or secure HTTP-only cookies for session authentication, and enforce HTTPS for all data transfers. In our database, we implement row-level security and sanitize all inputs to prevent SQL injection. We also configure strict Content Security Policies (CSP) and run automated security vulnerability audits on our dependencies.",
  },
  {
    question: "Can you integrate the application with our existing legacy systems?",
    answer: "Yes. We build custom API wrappers and data sync workers that connect your new web application to existing legacy databases, local ERP software, or third-party web services. During our requirements discovery phase, we review your legacy system's capabilities, data formats (SQL, XML, CSV, etc.), and authentication methods to plan a safe migration and live integration strategy.",
  },
];

export default function WebAppDevPage() {
  return (
    <ServicePageTemplate
      title="Custom Web Application Development Services"
      eyebrow="Application Engineering"
      description="We build fast, secure, and highly interactive custom web applications. Engineered with Next.js and robust databases to automate operations and manage client data safely."
      overview={`What Do We Do?
Magnivel Technologies engineers custom web applications, customer portals, management dashboards, and internal business platforms. We write modern, modular code using React, Next.js, and Node.js to deliver fast, interactive tools. We handle user login systems, relational database architectures, and third-party integrations.

Who Do We Help?
We partner with growing startups, operational managers, and established service providers who need custom digital solutions. Our clients have outgrown spreadsheet-based workflows and require a secure, multi-user web application to manage client interactions, schedule tasks, and view real-time business reports.

How Do We Help?
We design relational database structures that capture your business entities accurately and run fast queries. We build clean, responsive dashboards that display tables, charts, and filters clearly on all screen sizes. We set up automated email notifications, payment flows, and data import/export workers to eliminate manual administrative tasks.

Why Should Clients Trust Us?
We focus on robust technical design, transparent communication, and clean code documentation. We avoid complex licensing fees by building custom, proprietary software that you fully own. Every milestone is presented on a staging environment for your review, ensuring the final application matches your operational workflows.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
