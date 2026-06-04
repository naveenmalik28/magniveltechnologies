import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services | Magnivel Technologies",
  description: "Magnivel Technologies builds custom AI Chatbots & RAG systems. Integrate GPT-4o, Claude 3.5 Sonnet, and Gemini API to automate customer support and support workflows.",
  keywords: ["AI chatbot development services", "custom GPT integration", "RAG systems development", "AI customer support bot", "LLM chatbot developer"],
  alternates: {
    canonical: "https://magnivel.com/ai-chatbot-development",
  },
};

const benefits = [
  {
    title: "Cut Support Costs by 60%",
    desc: "AI chatbots handle up to 80% of repetitive customer inquiries instantly, freeing your support team for complex tickets.",
    icon: "zap",
  },
  {
    title: "No-Hallucination Retrieval",
    desc: "We use Retrieval-Augmented Generation (RAG) to restrict responses to your approved PDF databases and docs.",
    icon: "shield",
  },
  {
    title: "Multilingual Support 24/7",
    desc: "Respond to global customers instantly in English, Hindi, Spanish, French, Arabic, and 80+ other languages.",
    icon: "globe",
  },
];

const features = [
  { title: "Retrieval-Augmented Generation (RAG)", desc: "Sync chatbots with internal manuals, wikis, and PDFs using vector databases for accurate answers." },
  { title: "Intelligent Lead Qualification", desc: "Chatbots collect emails, screen budgets, and sync prospects directly with your CRM databases." },
  { title: "Omnichannel Integrations", desc: "Deploy AI assistants across WhatsApp Business, Telegram, Slack, Web widgets, and custom mobile apps." },
  { title: "Seamless Human Escalation", desc: "Detect high frustration, and transition the conversation history to a live agent dynamically." },
  { title: "Granular Analytics Logs", desc: "Review user query topics, bot resolution ratios, popular features, and user ratings." },
  { title: "Data Privacy Compliance", desc: "PII masking filters, secure vector databases (Pinecone/pgvector), and data storage guidelines." },
];

const process = [
  { step: 1, title: "Knowledge Auditing", desc: "Collect document PDFs, wiki links, chat transcripts, and set chatbot personality parameters." },
  { step: 2, title: "Vector Database Setup", desc: "Chunk texts, generate vectors, and configure safe semantic search indexes." },
  { step: 3, title: "LLM API Connections", desc: "Connect OpenAI, Anthropic, or Gemini APIs with optimized prompts and constraints." },
  { step: 4, title: "UI Chat Widget Build", desc: "Develop the floating web chatbot bubble, message states, and live agent integrations." },
  { step: 5, title: "Prompt Testing & Launch", desc: "Run test scenarios to check accuracy, verify safety blocks, publish, and monitor metrics." },
];

const faqs = [
  {
    question: "How do you prevent the AI from making up information?",
    answer: "We employ Retrieval-Augmented Generation (RAG). Before answering, the LLM searches a database of your approved files. It is strictly instructed to say 'I do not know' if it cannot find the answer in the provided documents.",
  },
  {
    question: "Which LLMs do you support?",
    answer: "We support industry-leading models including OpenAI (GPT-4o), Anthropic (Claude 3.5 Sonnet), and Google (Gemini 1.5 Pro). We select the model that best matches your budget and processing needs.",
  },
  {
    question: "Can the chatbot write database records?",
    answer: "Yes. Using function calling (tool use), our chatbots can verify order numbers, schedule database calendar events, and check shipping status safely via APIs.",
  },
];

export default function AIChatbotServicesPage() {
  return (
    <ServicePageTemplate
      title="Custom AI Chatbot Development Services"
      eyebrow="AI Engineering"
      description="Automate customer inquiries and team operations. We design and build secure, RAG-integrated AI chatbots that answer accurately without hallucinating."
      overview="Customers expect instant support. Our AI Chatbot Development Services allow you to deploy smart, conversational agents that know your business inside out. We combine state-of-the-art LLMs with secure Vector Database clusters so your chatbot answers inquiries, qualifies leads, and schedules appointments safely."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
