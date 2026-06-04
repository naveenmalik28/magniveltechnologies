import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AI Chatbot Development Cost Guide | Magnivel Technologies",
  description: "Understand the costs associated with AI Chatbot development. Detailed guide on model selection, token pricing, RAG databases, and support automation budgets.",
  keywords: ["ai chatbot cost", "chat bot project budget", "rag system price", "openai api cost", "gemini chatbot pricing"],
  alternates: {
    canonical: "https://magnivel.com/ai-chatbot-development-cost",
  },
};

const benefits = [
  {
    title: "Optimized Token Consumption",
    desc: "We write clean prompt templates and database caching layers to minimize LLM token usage and lower API bills.",
    icon: "zap",
  },
  {
    title: "No-License Frameworks",
    desc: "We build custom bots rather than locking you into expensive per-conversation proprietary platform fees.",
    icon: "layers",
  },
  {
    title: "Milestone-Driven Delivery",
    desc: "Evaluate chatbot accuracy weekly during sprint demo stages, maintaining full budget control.",
    icon: "target",
  },
];

const features = [
  { title: "Standard Prompting Bots", desc: "Basic system prompts, single LLM model, contact inputs collection: USD 4,000 - USD 8,000 (INR 3L - 6L)." },
  { title: "Knowledge-Base RAG Bots", desc: "Vector database indexing, manual PDFs sync, source citations: USD 8,000 - USD 15,000." },
  { title: "Agentic Tool-Use Bots", desc: "API function calling (verify order, calendar scheduling, database write): USD 15,000 - USD 30,000+." },
  { title: "LLM API Setup Support", desc: "Help registering OpenAI, Anthropic, or Gemini API keys and setting usage alerts." },
  { title: "Vector Database Hosting Setup", desc: "Pinecone, Qdrant, or PostgreSQL pgvector setup for semantic reference lookups." },
  { title: "Ongoing Accuracy Tuning", desc: "Reviewing transcript logs, prompt refinement, updating index docs starting at USD 300/month." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Identify bot workflows, data files sources, required APIs, and accuracy metrics." },
  { step: 2, title: "Data Ingestion Specs", desc: "Plan vector chunking rules, document tags, and prompt constraints." },
  { step: 3, title: "LLM & Vector Setup", desc: "Configure databases, upload files, write prompts, and verify search relevance." },
  { step: 4, title: "Chat Widget Design", desc: "Design the floating chat bubble UI, error states, and dashboard transcript grids." },
  { step: 5, title: "Beta Run & Tuning", desc: "Run batch testing queries, monitor responses, tune temperatures, and deploy." },
];

const faqs = [
  {
    question: "What are the running costs of an AI chatbot?",
    answer: "Running costs include LLM API fees (charged per million tokens by OpenAI/Anthropic), vector database hosting fees (often free-tier or $70/month for Pinecone), and regular accuracy monitoring.",
  },
  {
    question: "How do you control API usage costs?",
    answer: "We cache common questions, restrict document searches to small semantic chunks, write concise prompts, and set daily credit caps inside your OpenAI/Anthropic accounts.",
  },
  {
    question: "Which model is the most cost-effective?",
    answer: "For general support, lightweight models like GPT-4o-mini or Gemini 1.5 Flash offer fast speeds and low costs (under $0.15 per million tokens), while Claude 3.5 Sonnet is preferred for complex coding or reasoning tasks.",
  },
];

export default function AIChatbotCostPage() {
  return (
    <ServicePageTemplate
      title="AI Chatbot Development Cost Guide"
      eyebrow="Cost Guide"
      description="Estimate your AI assistant budget. Understand pricing across simple prompts bots, custom RAG vector databases, API integrations, and monthly API token bills."
      overview="Adding AI to your workflow saves hours, but understanding the billing model is key. This guide covers chatbot development rates, token pricing dynamics, vector database parameters, and support automation budgets."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
