import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AI & Machine Learning Development | Magnivel Technologies",
  description: "Magnivel Technologies provides custom AI & machine learning development services. Integrate LLMs, build RAG engines, customize GPT/Claude agents, and automate workflows.",
  keywords: ["ai development services", "custom llm developer", "rag architecture engine", "gemini claude integration", "machine learning development"],
  alternates: {
    canonical: "https://magnivel.com/ai-development",
  },
};

const benefits = [
  {
    title: "Proprietary Knowledge Bases",
    desc: "Build secure databases containing internal manuals, code documents, and wikis, allowing AI agents to answer with precision.",
    icon: "database",
  },
  {
    title: "State-of-the-Art Models",
    desc: "Connect GPT-4o, Claude 3.5 Sonnet, and Gemini 1.5 Pro to process text, image inputs, and code files seamlessly.",
    icon: "brain",
  },
  {
    title: "Automation at Scale",
    desc: "Replace manual text categorization, invoice sorting, and copy-pasting tasks with secure API loops.",
    icon: "zap",
  },
];

const features = [
  { title: "Retrieval-Augmented Generation (RAG)", desc: "Build secure search loops connecting documents (PDFs, docx) to vector indexes for chatbot citation." },
  { title: "Custom Agent Frameworks", desc: "Build autonomous loops where AI agents plan tasks, check outputs, and read databases via APIs." },
  { title: "LLM Fine-Tuning Setup", desc: "Prepare custom dataset records, clean tokens, and fine-tune models to match specialized corporate voices." },
  { title: "Data Parsing & OCR Pipelines", desc: "Scan invoices, bank logs, and scanned tables using vision-capable model endpoints." },
  { title: "Pinecone & Vector DB Setup", desc: "Configure Pinecone, Qdrant, or PostgreSQL pgvector instances for semantic embedding checks." },
  { title: "Compliance Filters Setup", desc: "Build input safeguards to mask PII (personally identifiable information) and verify output safety." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Audit business datasets, specify AI agent responsibilities, and select target models." },
  { step: 2, title: "Data Vectorization", desc: "Clean text documents, split paragraphs, configure embedding models, and index vector tables." },
  { step: 3, title: "Agent System Build", desc: "Program prompts chains, tool bindings, and function-calling endpoints using Python." },
  { step: 4, title: "UI & API Integrations", desc: "Connect backend AI endpoints to React web pages, chat bubbles, and CRM pipelines." },
  { step: 5, title: "QA Accuracy Audits", desc: "Verify agent outputs, adjust temperatures parameters, verify safety blocks, and deploy." },
];

const faqs = [
  {
    question: "What is Retrieval-Augmented Generation (RAG)?",
    answer: "RAG is a technique that retrieves reference files matching a user's prompt first, then passes them to the LLM. This prevents model hallucination by limiting answers to approved facts.",
  },
  {
    question: "Do you train custom AI models from scratch?",
    answer: "Training models from scratch is rarely cost-effective. We recommend fine-tuning or prompt-engineering existing foundation models (like Llama 3 or GPT-4o), which yields excellent results at a fraction of the cost.",
  },
  {
    question: "How do you protect corporate confidentiality?",
    answer: "We use enterprise cloud endpoints where inputs are not logged or used for model training, and can host open-source models inside private VPC networks.",
  },
];

export default function AITechPage() {
  return (
    <ServicePageTemplate
      title="Bespoke Artificial Intelligence & RAG Solutions"
      eyebrow="Engineering Stack"
      description="Leverage state-of-the-art LLMs. We build Retrieval-Augmented Generation (RAG) databases, autonomous AI agents, and custom workflow automations."
      overview="Off-the-shelf AI tools lack your business context and hallucinate facts. Magnivel Technologies designs, builds, and deploys secure AI systems that connect to your proprietary databases and execute business operations safely."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
