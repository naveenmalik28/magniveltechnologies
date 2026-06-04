import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AI Automation Services | Magnivel Technologies",
  description: "Magnivel Technologies provides AI automation services. Streamline operations with LangChain pipelines, automated PDF data extraction, and AI agents.",
  keywords: ["AI automation services", "workflow automation agency", "automated PDF parser AI", "LangChain developer", "AI agent solutions"],
  alternates: {
    canonical: "https://magnivel.com/ai-automation-services",
  },
};

const benefits = [
  {
    title: "Minimize Manual Workloads",
    desc: "Automate repetitive document reading, email sorting, and copy-pasting tasks using AI agents.",
    icon: "zap",
  },
  {
    title: "10x Processing Speeds",
    desc: "Parse structured fields from hundreds of invoice PDFs, emails, and reports in seconds instead of hours.",
    icon: "trending-up",
  },
  {
    title: "Eradicate Human Mistakes",
    desc: "AI pipelines extract fields and validate metrics against backend databases with consistent precision.",
    icon: "shield",
  },
];

const features = [
  { title: "Automated Document Parsing", desc: "Extract invoices, resumes, shipping orders, and bank statements into clean JSON columns automatically." },
  { title: "AI-Powered Email Routing", desc: "Analyze incoming support emails, assign categories, draft matching replies, and notify team channels." },
  { title: "Agentic Task Orchestration", desc: "Configure multi-agent setups where bots evaluate results, double-check errors, and log outputs." },
  { title: "LangChain Pipeline Build", desc: "Build robust LLM chains that connect web search tools, internal databases, and calculations APIs." },
  { title: "Legacy System Sync", desc: "We integrate custom API hooks to feed extracted information directly into your legacy ERP/CRMs." },
  { title: "Detailed Audits Logs", desc: "Track every pipeline run, check token consumption, check prompts history, and verify agent outputs." },
];

const process = [
  { step: 1, title: "Process Discovery", desc: "Audit manual workflows, identify data bottlenecks, and collect document test samples." },
  { step: 2, title: "Pipeline Architecture", desc: "Design the LLM prompting chains, parser rules, database columns, and fail-safes." },
  { step: 3, title: "AI Agent Development", desc: "Code the parsing pipelines using Python, Node.js, and frameworks like LangChain." },
  { step: 4, title: "Integration & Sync", desc: "Connect the pipelines to emails, file folders (AWS S3), and target databases." },
  { step: 5, title: "Evaluation & Support", desc: "Review processing accuracy metrics, optimize prompts, launch, and provide support." },
];

const faqs = [
  {
    question: "Can AI automation handle scanned images or PDFs?",
    answer: "Yes, we integrate OCR (Optical Character Recognition) with vision-capable models like GPT-4o and Gemini Flash to read text from low-quality scans and images.",
  },
  {
    question: "What is your fallback for uncertain AI extractions?",
    answer: "We build human-in-the-loop (HITL) dashboards. If the AI confidence falls below a set threshold, it flags the record for manual review by your team.",
  },
  {
    question: "Is my corporate data shared with public models?",
    answer: "No. We utilize enterprise API contracts where data inputs are not used for model training, or deploy open-source models (like Llama 3) inside private AWS instances.",
  },
];

export default function AIAutomationServicesPage() {
  return (
    <ServicePageTemplate
      title="Enterprise AI Automation Services"
      eyebrow="AI Engineering"
      description="Supercharge your operations. We build intelligent workflows and AI agents that extract text, classify emails, and automate database administration."
      overview="Manual data entry slows growth and increases errors. Magnivel Technologies builds customized AI automation pipelines that read, process, and write records across platforms automatically. By combining LangChain pipelines with secure database syncs, we turn slow manual work into fast automated pipelines."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
