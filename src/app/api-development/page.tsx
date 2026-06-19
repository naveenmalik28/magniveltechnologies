import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "API Development & System Integration Services | Magnivel Technologies",
  description: "Magnivel Technologies provides custom API development services, RESTful and GraphQL endpoints, secure OAuth2 credentials, and third-party SaaS integrations.",
  keywords: ["API development", "RESTful API developer", "GraphQL development", "system integration", "secure backend api", "microservices integration"],
  alternates: {
    canonical: "https://magnivel.com/api-development",
  },
};

const benefits = [
  {
    title: "Secure and Standardized Data Pipelines",
    desc: "We build APIs utilizing standardized RESTful or GraphQL protocols to guarantee secure data communication. By implementing rate limiting to prevent denial-of-service attempts, validating input fields on the server to prevent injections, and securing endpoints with JSON Web Tokens (JWT) or OAuth2 credentials, we ensure your business data is transferred safely between frontend applications, databases, and third-party SaaS platforms.",
    icon: "shield",
  },
  {
    title: "Seamless Third-Party SaaS Integrations",
    desc: "We connect your internal applications to external business platforms. Whether you need to process checkout payments through Stripe, calculate shipping taxes through Avalara, sync customer logs with Salesforce, or query inventory databases inside SAP, we develop secure API connectors. We write background sync queues that handle connection errors gracefully, keeping your data synchronized without system failures.",
    icon: "layers",
  },
  {
    title: "Scalable Microservices and Orchestration",
    desc: "We design backend architectures using modular service patterns. As your traffic grows, we containerize backend modules using Docker and deploy them on scalable cloud servers. This approach ensures that high-volume operations (like background reporting or media processing) run on dedicated resources, preventing your core user database queries from slowing down.",
    icon: "zap",
  },
];

const features = [
  {
    title: "REST & GraphQL Protocol Design",
    desc: "Custom REST endpoints and GraphQL schemas featuring clear resource routing, standard HTTP status codes, and optimized JSON payloads.",
  },
  {
    title: "Secure Token Authentication",
    desc: "Authentication systems utilizing JSON Web Tokens (JWT) or OAuth2 protocols, ensuring only authorized user sessions can access secure database coordinates.",
  },
  {
    title: "Input Validation and Sanitization",
    desc: "Server-side data check loops that validate and sanitize incoming payloads before writing variables to database tables, preventing SQL injection.",
  },
  {
    title: "API Rate Limiting & Protection",
    desc: "Request throttling layers that limit API calls per token or IP address, protecting backend servers from scrapers and brute-force attempts.",
  },
  {
    title: "Automated OpenAPI Documentation",
    desc: "Generation of interactive Swagger/OpenAPI documentation, allowing frontend teams and external partners to test endpoints easily.",
  },
  {
    title: "Webhook Callback Framework",
    desc: "Webhook routing systems that broadcast real-time database event changes to registered client URLs, allowing external apps to sync data automatically.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We review data entities, authentication rules, integration systems, and performance criteria to plan API scopes."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We design database schemas, map out API endpoints, sketch data routing flows, and write documentation drafts."
  },
  {
    step: 3,
    title: "Development",
    desc: "Our developers write backend controller logic, build authentication layers, and connect databases in agile sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We run integration verification scripts, check security credentials, and load-test API endpoints for response times."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We host APIs on secure cloud environments, set up SSL, configure environment variables, and open endpoints."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We monitor error rates, patch security libraries, update API versions, and manage database connection pools."
  }
];

const techStack = [
  "Node.js",
  "Express.js",
  "TypeScript",
  "PostgreSQL",
  "Prisma ORM",
  "GraphQL / Apollo Server",
  "Redis Caching",
  "Docker",
  "OpenAPI / Swagger",
  "AWS (API Gateway/ECS)",
];

const faqs = [
  {
    question: "What is the difference between REST and GraphQL APIs?",
    answer: "REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to fetch or modify data on specific URLs, returning pre-defined JSON payloads. GraphQL is a query language where clients send a single request describing the exact fields they need, and the server returns only those fields. We build REST APIs for standard CRUD tasks and integrations, and GraphQL for complex dashboard frontends to reduce payload size and speed up page loads.",
  },
  {
    question: "How do you secure APIs from unauthorized access and bots?",
    answer: "We secure endpoints using JSON Web Tokens (JWT) or secure API keys, requiring valid credentials in request headers. We implement rate-limiting middleware (using Redis) to limit requests per minute from specific IP addresses. We also validate and sanitize all inputs at the server level to prevent SQL injection and cross-site scripting (XSS) attacks.",
  },
  {
    question: "Do you write documentation so our in-house team can use the API?",
    answer: "Yes, absolutely. We write interactive documentation using OpenAPI (Swagger) standards. This documentation lists all endpoints, required request headers, payload parameters, and example JSON responses. It includes a sandboxed test interface where your team members can run test queries and see real-time database responses, making integration straightforward.",
  },
];

export default function ApiDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="API Development & System Integration Services"
      eyebrow="Backend Engineering"
      description="We design and build secure, fast, and well-documented APIs. Engineered with Node.js and TypeScript to connect your mobile apps, websites, and database platforms."
      overview={`What Do We Do?
Magnivel Technologies designs and builds custom APIs, backend services, database connectors, and third-party SaaS integrations. We write structured, performant code using Node.js, Express, and TypeScript. We handle API authentication (OAuth2/JWT), rate limiting, and database queries.

Who Do We Help?
We partner with product teams, system managers, and businesses who want to connect separate software modules. Our clients need a secure API to sync data between mobile apps and database tables, replace legacy backend code, or integrate their databases with payment gateways or CRM systems.

How Do We Help?
We write clean, documented endpoints that handle high data volumes. We build secure authentication layers that block unauthorized bots, and write database optimization scripts to speed up response times. We compile interactive Swagger manuals so frontend teams can test API paths easily.

Why Should Clients Trust Us?
We focus on backend engineering discipline, API security compliance, and clear documentation. We build custom, proprietary software that you own 100%, avoiding vendor lock-in. We run integration checks on staging environments and offer ongoing support to keep your backend systems online and running fast.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
