import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AI & Machine Learning Solutions | Magnivel Technologies",
  description: "Magnivel Technologies delivers custom AI solutions, secure private knowledge bases (RAG), automated document analysis tools, and LLM API integrations.",
  keywords: ["AI solutions", "machine learning integration", "custom LLM developer", "RAG vector search", "workflow automation developer", "AI chatbot builder"],
  alternates: {
    canonical: "https://magnivel.com/ai-solutions",
  },
};

const benefits = [
  {
    title: "Secure Knowledge Bases (RAG)",
    desc: "We build private knowledge engines utilizing Retrieval-Augmented Generation (RAG). By converting your internal PDF guides, spreadsheets, and technical docs into secure vector coordinates stored in PostgreSQL (pgvector), we allow team members to search company data instantly. The AI system extracts context locally and answers questions without exposing your private database contents to public model training sets.",
    icon: "shield",
  },
  {
    title: "Automated Document Processing & Workflows",
    desc: "We implement AI tools that automate manual document checking. Whether you process client invoices, scan user contracts, or categorize email requests, our solutions extract structured database entities automatically. By automating layout checks and formatting data pipelines, we help reduce manual verification work and improve operational speeds.",
    icon: "zap",
  },
  {
    title: "Seamless API & Model Integrations",
    desc: "We connect proven open-source and commercial LLM APIs (like Gemini, Claude, or GPT) into your existing application dashboards. We configure strict API rate limiting, cache recurring queries using Redis to manage API expenses, and build auditing logs to monitor model accuracies, ensuring your AI integrations are stable and cost-effective.",
    icon: "layers",
  },
];

const features = [
  {
    title: "Secure Vector Search (RAG)",
    desc: "We convert text into vector embeddings and perform fast similarity queries inside pgvector databases, retrieving private context for LLM prompts securely.",
  },
  {
    title: "Automated Entity Extraction",
    desc: "Parse client PDFs, text logs, and emails to extract structured JSON data variables (such as prices, dates, or names) and write them directly to your database.",
  },
  {
    title: "Intelligent Ticket Classification",
    desc: "Automate incoming message sentiment analysis and keyword checks to route customer inquiries to matching staff divisions instantly.",
  },
  {
    title: "Structured API Caching",
    desc: "Implement Redis database layers that cache common AI query responses, reducing external LLM API costs and improving app response times.",
  },
  {
    title: "Compliance & Data Redaction",
    desc: "Build pre-processing scripts that redact sensitive personally identifiable information (PII) before sending prompts to external APIs, keeping data compliant.",
  },
  {
    title: "Custom LLM Fine-Tuning Prep",
    desc: "Format and clean your historical business data arrays to prepare training sets, ensuring models capture custom terminology correctly.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We review your data sources, privacy policies, model preferences, and task criteria to plan the AI architecture."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We structure text chunking models, choose vector database settings, plan API flows, and draft dashboard interfaces."
  },
  {
    step: 3,
    title: "Development",
    desc: "Our team builds data ingestion flows, codes RAG search queries, and integrates LLM APIs in agile development sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We audit system responses for accuracy, check PII redaction compliance, and test API rate limits and failures."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We configure vector databases on cloud servers, set up API security keys, and publish the AI services live."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We monitor model query costs, update system prompt logic, retrain vector indexes, and update API endpoints."
  }
];

const techStack = [
  "Python",
  "LangChain",
  "PostgreSQL (pgvector)",
  "OpenAI API",
  "Gemini API",
  "LlamaIndex",
  "Node.js",
  "Next.js",
  "Redis",
  "AWS (ECS/RDS)",
];

const faqs = [
  {
    question: "How do you protect our private company data from being leaked?",
    answer: "We enforce strict security boundaries. We redact sensitive customer information (like credit cards or PII) from payloads before they are processed by models. We use enterprise API endpoints where providers contractually agree not to use incoming data for model training. Where complete local control is required, we deploy open-source models (like Llama 3) on your private cloud infrastructure, keeping data inside your servers.",
  },
  {
    question: "What is RAG and why is it better than training a model?",
    answer: "Retrieval-Augmented Generation (RAG) is a technique that searches your private documents for matching paragraphs whenever a user asks a question, and feeds those paragraphs to the AI model as context. This is highly cost-effective and accurate compared to training or fine-tuning models. It prevents AI hallucinations and allows you to update your knowledge database instantly simply by adding or removing PDFs.",
  },
  {
    question: "How do you keep LLM API token expenses under control?",
    answer: "We implement caching layers using Redis to store common query results, preventing duplicate calls to external APIs. We also select models efficiently, routing simpler classification tasks to lightweight models (like Gemini Flash) and reserving complex analysis queries for larger models (like Claude Opus). We configure strict usage limits and alerts to prevent billing spikes.",
  },
];

export default function AiSolutionsPage() {
  return (
    <ServicePageTemplate
      title="Custom AI & Machine Learning Solutions"
      eyebrow="Artificial Intelligence"
      description="Apply AI where it saves operational hours. We design and build secure private knowledge bases, automated document ingestion tools, and custom LLM integrations."
      overview={`What Do We Do?
Magnivel Technologies develops custom AI applications, private knowledge retrieval systems (RAG), text extraction pipelines, and API integrations. We use Python, LangChain, and PostgreSQL (pgvector) to build secure data processors. We focus on building tools that automate repetitive document and data workflows.

Who Do We Help?
We work with business operations managers, customer support heads, and software product teams who want to implement AI features safely. Our clients need to index thousands of internal documents, automate client contract categorization, or assist support teams without risk of data leaks or hallucinations.

How Do We Help?
We chunk and embed your internal manuals, storing them inside secure vector databases for fast similarity lookups. We build pre-processing code that filters out private user data before model calls. We design data dashboards that show extraction inputs and outputs, and build caching layers to control API costs.

Why Should Clients Trust Us?
We prioritize security compliance and cost efficiency. We provide clean, documented Python code and build proprietary architectures where you retain 100% database ownership. We staging-test system responses, audit query latency rates, and offer ongoing support to keep your AI pipelines reliable.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
