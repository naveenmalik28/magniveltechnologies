import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Python Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional Python development services. Custom data extraction scripts, Django backend APIs, and machine learning models integrations.",
  keywords: ["python development services", "django backend developer", "python web scraping scripts", "machine learning integration python", "custom python scripts"],
  alternates: {
    canonical: "https://magnivel.com/python-development",
  },
};

const benefits = [
  {
    title: "Unrivalled AI Ecosystem",
    desc: "Python is the industry standard for LLM integration, data analysis, and script orchestration libraries.",
    icon: "brain",
  },
  {
    title: "Rapid Execution Speed",
    desc: "Python's concise syntax accelerates writing data extraction pipelines and backend calculations scripts.",
    icon: "zap",
  },
  {
    title: "Highly Scalable Frameworks",
    desc: "With Django, FastAPI, and Flask, we write stable server backends that sync records across millions of users.",
    icon: "layers",
  },
];

const features = [
  { title: "Django & FastAPI Backends", desc: "Build secure RESTful APIs, authenticate tokens, configure Postgres relationships." },
  { title: "Automated Data Scraping", desc: "Extract competitor catalog pricing, property listings, or news feeds using Scrapy or BeautifulSoup." },
  { title: "LLM Orchestration Systems", desc: "Connect Anthropic/OpenAI APIs, process prompts, configure RAG databases (Pinecone/pgvector)." },
  { title: "PDF & Document Parsers", desc: "Read and extract structured fields from raw files using PDFMiner or OpenCV libraries." },
  { title: "Custom CRON Automation", desc: "Write background scripts to clean data, log server status, and email dashboard metrics." },
  { title: "Secure Data Encrypting", desc: "Enforce cryptographical filters to protect user information at the database column level." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Analyze script requirements, data endpoints, libraries dependencies, and hosting goals." },
  { step: 2, title: "Data Flow Mapping", desc: "Chart database structures, API routes, scripting stages, and error checks." },
  { step: 3, title: "Backend Coding Sprint", desc: "Write clean Python scripts, configure virtual environments, and construct database models." },
  { step: 4, title: "API Integrations", desc: "Expose endpoints, connect API credentials, and sync with frontend React dashboard." },
  { step: 5, title: "QA Testing & Launch", desc: "Conduct stress runs, check parsing logs, deploy on AWS/Vercel, and support." },
];

const faqs = [
  {
    question: "Why is Python preferred for AI projects?",
    answer: "Python has the largest selection of AI, numerical processing, and data parsing packages (like NumPy, PyTorch, LangChain, and Pandas), making LLM integration straightforward.",
  },
  {
    question: "FastAPI vs Django: Which is better?",
    answer: "FastAPI is preferred for lightweight, highly-performant microservices and JSON APIs, while Django is ideal for large-scale enterprise platforms requiring built-in administrative portals.",
  },
  {
    question: "Do you maintain Python scripts after launching?",
    answer: "Yes, we support our custom Python scripts, update API keys, manage server dependencies (pip logs), and check error logs regularly.",
  },
];

export default function PythonTechPage() {
  return (
    <ServicePageTemplate
      title="Bespoke Python Development Services"
      eyebrow="Engineering Stack"
      description="Leverage Python for backends. We build custom data parsing scripts, Django/FastAPI dashboards, and machine learning pipelines."
      overview="From backend web APIs to data engineering pipelines, Python is a highly versatile programming language. Magnivel Technologies engineers clean, maintainable Python backends and scripts that automate manual processes and process data securely."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
