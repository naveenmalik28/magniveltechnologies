import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Node.js Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional Node.js backend development services. Fast, event-driven APIs, Express/NestJS frameworks, and database integrations.",
  keywords: ["nodejs development services", "expressjs developer node", "nestjs backend developer", "real time database api", "node backend engineer"],
  alternates: {
    canonical: "https://magnivel.com/nodejs-development",
  },
};

const benefits = [
  {
    title: "Event-Driven Speed",
    desc: "Node.js uses non-blocking I/O, making it exceptionally fast for handling concurrent connections and APIs.",
    icon: "zap",
  },
  {
    title: "Single-Language Stack",
    desc: "By writing JavaScript on both frontend (React) and backend (Node.js), development is fast and code sharing is simple.",
    icon: "layers",
  },
  {
    title: "Rich NPM Ecosystem",
    desc: "Access thousands of pre-tested packages for authentication, database mapping (Prisma/Mongoose), and payments.",
    icon: "database",
  },
];

const features = [
  { title: "Express & NestJS Web APIs", desc: "Build secure RESTful routes, map controllers, configure middleware filters, and validate inputs." },
  { title: "Prisma & Mongoose Integrations", desc: "Connect PostgreSQL, MySQL, or MongoDB databases with type-safe object schemas." },
  { title: "Real-Time WebSocket Sync", desc: "Enable live chat, system notifications, or dashboard charts updates using Socket.io." },
  { title: "Secure User Auth (Jose/JWT)", desc: "Build encrypted user token parameters, cookie sessions, and role checks." },
  { title: "Nodemailer Email Workflows", desc: "Configure secure SMTP triggers, HTML email templates, and automated pdf receipt attachments." },
  { title: "PM2 & Production Clustering", desc: "Ensure zero-downtime server operations and automatic crash restarts in production." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify system features, real-time sync needs, DB choice, and API models." },
  { step: 2, title: "Database & Route Design", desc: "Draft entity relation diagrams (ERDs) and plan Express/Nest API path models." },
  { step: 3, title: "Core Backend Coding", desc: "Write database schemas (Prisma ORM), write middlewares, and program controllers." },
  { step: 4, title: "Integration & Sync", desc: "Connect web interfaces to the Node backend and configure WebSocket loops." },
  { step: 5, title: "QA Stress & Deploy", desc: "Verify data sync logs under traffic load, set up PM2 configs, publish, and support." },
];

const faqs = [
  {
    question: "What is Node.js used for?",
    answer: "Node.js is used to build fast backend servers, REST/GraphQL APIs, microservices, real-time chat servers, and database integration layers.",
  },
  {
    question: "Which databases do you use with Node.js?",
    answer: "We commonly use PostgreSQL or MySQL with Prisma ORM for relational data, and MongoDB with Mongoose for document-based logs storage.",
  },
  {
    question: "Can Node.js handle real-time sync?",
    answer: "Yes, Node.js's event loop architecture is ideal for real-time WebSocket communication, powering live chat and updates dashboards.",
  },
];

export default function NodeJSTechPage() {
  return (
    <ServicePageTemplate
      title="Custom Node.js Web & API Development Services"
      eyebrow="Engineering Stack"
      description="Build fast, event-driven backends. We build scalable Node.js architectures, Express/NestJS APIs, and real-time database interfaces."
      overview="Slow API responses delay dashboard actions and lower conversion rates. Magnivel Technologies engineers high-throughput Node.js backends featuring secure database integrations, type-safe API schemas, and real-time data synchronization."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
