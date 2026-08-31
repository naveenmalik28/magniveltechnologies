import { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { ChatbotCostCalculator } from "./chatbot-cost-calculator";

export const metadata: Metadata = {
  title: "AI Chatbot Development Cost: 2026 Pricing Guide & Factors | Magnivel Technologies",
  description:
    "How much does an AI chatbot cost? Explore chatbot development pricing, key cost factors, integrations, RAG, AI models, and monthly operating expenses.",
  keywords: [
    "AI chatbot development cost",
    "chatbot development cost",
    "chatbot development price",
    "cost to build a chatbot",
    "chatbot development pricing",
    "cost of implementing chatbots",
    "AI chatbot development pricing",
    "how much does it cost to develop a chatbot",
    "how much does it cost to create a chatbot",
    "chatbot pricing models",
    "how much does it cost to create a chatbot in GHL",
    "how much does it cost to develop an AI chatbot",
    "cost of chatbot development",
    "AI chatbot cost",
    "chatbot implementation cost",
  ],
  alternates: {
    canonical: "https://magnivel.com/ai-chatbot-development-cost",
  },
  openGraph: {
    title: "AI Chatbot Development Cost: 2026 Pricing Guide & Factors | Magnivel Technologies",
    description:
      "A complete guide to AI chatbot development costs, pricing models, RAG database setups, API token economics, and ongoing operational budgets.",
    url: "https://magnivel.com/ai-chatbot-development-cost",
    type: "article",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://magnivel.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cost Guides",
        item: "https://magnivel.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AI Chatbot Development Cost",
        item: "https://magnivel.com/ai-chatbot-development-cost",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to develop an AI chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI chatbot development cost varies widely based on complexity. A basic FAQ chatbot with prompt constraints typically ranges from $1,000 to $3,000. A custom knowledge base (RAG) chatbot that searches proprietary PDFs and company documents typically costs $3,000 to $8,000. Complex enterprise AI chatbots with multi-channel integrations (WhatsApp, Slack, CRM), database transactions, and custom workflows range from $8,000 to $25,000+.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between initial development cost and monthly operating cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Initial development cost covers UI/UX design, prompt engineering, vector database indexing (RAG), backend architecture, CRM/API integrations, and testing. Monthly operating cost covers LLM API token consumption (OpenAI, Gemini, Claude), vector database hosting (pgvector, Pinecone), cloud server hosting, and periodic accuracy maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to create a chatbot in GoHighLevel (GHL)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creating a chatbot in GoHighLevel involves two costs: the GHL platform subscription (typically $97 to $497/month) plus third-party AI setup/customization fees if using advanced prompts or external webhook workflows. Basic GHL Conversation AI bot configuration typically costs $500 to $1,500 in developer setup fees, whereas integrating a custom external RAG assistant into GHL via API ranges from $2,000 to $5,000.",
        },
      },
      {
        "@type": "Question",
        name: "What factors increase AI chatbot development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Major cost drivers include: 1) Knowledge base complexity and document volume (RAG setup), 2) Number of integrations (CRM, WhatsApp, Slack, Stripe), 3) User authentication and role-based permissions, 4) Real-time database reading/writing (tool calling), 5) Custom admin dashboards and conversation transcript analytics, and 6) Human live agent handoff protocols.",
        },
      },
      {
        "@type": "Question",
        name: "Is AI chatbot development a one-time cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When you build a custom chatbot with Magnivel Technologies, the source code, architecture, and database logic are 100% owned by you (a one-time development fee). However, running the chatbot incurs small monthly infrastructure costs for LLM API token usage (charged by providers like OpenAI or Anthropic) and server/database hosting.",
        },
      },
      {
        "@type": "Question",
        name: "How do you keep ongoing LLM API token expenses low?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement prompt optimization, semantic caching using Redis (so repeated user queries do not invoke new LLM API calls), context window chunking, and intelligent model routing (directing simple questions to lightweight models like GPT-4o-mini or Gemini 1.5 Flash, reserving larger models for complex logic).",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a custom AI chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development timelines generally range from 1 to 2 weeks for a straightforward FAQ assistant, 2 to 4 weeks for a document-based RAG assistant, and 4 to 8 weeks for a complex multi-channel enterprise bot with custom tool-use and CRM synchronization.",
        },
      },
      {
        "@type": "Question",
        name: "Can an AI chatbot connect to our existing CRM and internal database?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Using function calling and secure REST APIs, an AI chatbot can read live product inventory, look up customer order status from your PostgreSQL or MySQL database, and push lead information directly into HubSpot, GoHighLevel, Salesforce, or custom backends.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Chatbot Development Services",
    provider: {
      "@type": "Organization",
      name: "Magnivel Technologies",
      url: "https://magnivel.com",
    },
    serviceType: "Custom AI Chatbot Development",
    description:
      "Custom AI chatbot development, Retrieval-Augmented Generation (RAG) systems, CRM integrations, and automated customer support bots.",
  },
];

const pricingOverviewTiers = [
  {
    name: "Basic FAQ & Website Chatbot",
    badge: "Entry Level",
    typicalCost: "Contact for Project Scope",
    timeline: "1 - 2 Weeks",
    description: "Ideal for businesses wanting to automate standard website customer inquiries without complex document indexing.",
    features: [
      "Custom system prompt & brand tone configuration",
      "Embedded website chat bubble widget",
      "Basic lead capture (Name, Email, Message)",
      "Standard LLM integration (GPT-4o-mini or Gemini Flash)",
      "Token usage safety caps & daily spend alerts",
    ],
    bestFor: "Small businesses, single-product websites, standard FAQs.",
  },
  {
    name: "Knowledge Base / RAG Assistant",
    badge: "Most Popular",
    typicalCost: "Contact for Project Scope",
    timeline: "2 - 4 Weeks",
    description: "Connects your company PDFs, manuals, and internal documentation into a vector database for hallucination-free answers.",
    features: [
      "Vector database setup (pgvector, Pinecone, or Qdrant)",
      "Automated document chunking & semantic search pipeline",
      "Exact source citation links for every answer",
      "Two-way CRM integration (HubSpot, GoHighLevel, Salesforce)",
      "Semantic caching layer (Redis) to minimize token costs",
    ],
    bestFor: "SaaS companies, customer support teams, product catalogs, agencies.",
    highlight: true,
  },
  {
    name: "Custom Enterprise AI Agent",
    badge: "Advanced Workflows",
    typicalCost: "Contact for Project Scope",
    timeline: "4 - 8+ Weeks",
    description: "Full-featured AI agents capable of multi-channel interactions, tool execution, live database read/write, and role-based permissions.",
    features: [
      "Multi-channel support (Website, WhatsApp API, Slack, Teams)",
      "Live database query & booking tool calling (APIs, SQL)",
      "User authentication & role-based data permission filters",
      "Human support agent live handoff via webhooks",
      "Custom admin analytics dashboard & transcript auditor",
    ],
    bestFor: "Enterprise operations, healthcare scheduling, multi-tier platforms.",
  },
];

const complexityComparisonRows = [
  {
    type: "FAQ & Website Chatbot",
    complexity: "Simple",
    features: "System prompt, standard knowledge rules, basic lead form",
    integrations: "Website JavaScript widget",
    bestFor: "Simple website FAQs & lead capture",
    effort: "1 - 2 Weeks",
  },
  {
    type: "Knowledge Base / RAG Bot",
    complexity: "Moderate",
    features: "Vector embeddings, document ingestion, source attribution, PII filtering",
    integrations: "Website widget, CRM webhook, email notifications",
    bestFor: "Customer support & technical documentation search",
    effort: "2 - 4 Weeks",
  },
  {
    type: "Sales & Lead Qualification Bot",
    complexity: "Moderate",
    features: "Interactive scoping, qualification scoring, calendar meeting booking",
    integrations: "HubSpot, GoHighLevel, Google Calendar, Stripe",
    bestFor: "High-volume B2B lead triage & instant booking",
    effort: "3 - 5 Weeks",
  },
  {
    type: "WhatsApp Business AI Bot",
    complexity: "Moderate to High",
    features: "Meta Cloud API webhook handler, session state management, media support",
    integrations: "WhatsApp Business API, CRM, support ticketing",
    bestFor: "E-commerce order tracking & mobile customer support",
    effort: "3 - 5 Weeks",
  },
  {
    type: "Internal Employee Knowledge Assistant",
    complexity: "High",
    features: "Role-based access control, departmental PDF search, intranet auth",
    integrations: "Slack, Microsoft Teams, Google Drive, Notion API",
    bestFor: "HR policy, internal SOPs & technical code lookup",
    effort: "4 - 6 Weeks",
  },
  {
    type: "Autonomous AI Agent with Tool-Use",
    complexity: "Enterprise",
    features: "Multi-step logic execution, SQL queries, transactional writes, error retries",
    integrations: "Core SQL/PostgreSQL databases, custom REST APIs, ERPs",
    bestFor: "Complex multi-step workflow automation & self-service operations",
    effort: "6 - 10 Weeks",
  },
];

const costDrivers = [
  {
    factor: "Chatbot Architecture & Purpose",
    impact: "High Impact",
    desc: "A rule-based or single-prompt FAQ bot is straightforward. An autonomous AI agent with tool-use, multi-step validation, and database transactions requires dedicated backend engineering.",
  },
  {
    factor: "Knowledge Base Size & RAG Complexity",
    impact: "High Impact",
    desc: "Vectorizing a 10-page guide is simple. Managing thousands of evolving PDFs, tables, dynamic database records, and hybrid keyword+semantic reranking requires advanced data engineering.",
  },
  {
    factor: "Third-Party API & CRM Integrations",
    impact: "Medium to High Impact",
    desc: "Connecting to platforms like WhatsApp Business API, HubSpot, GoHighLevel, custom ERPs, or payment gateways increases testing scope and webhook reliability engineering.",
  },
  {
    factor: "User Authentication & Permissions",
    impact: "Medium Impact",
    desc: "Restricting answers based on user authorization levels (e.g. employee vs. client vs. executive) requires metadata filtering within the vector database and token security validation.",
  },
  {
    factor: "Custom Admin Dashboard & Telemetry",
    impact: "Medium Impact",
    desc: "A custom web dashboard to view live transcripts, audit AI hallucination rates, manage indexed documents, and monitor token spend adds dedicated frontend and backend surface area.",
  },
  {
    factor: "Human Live Agent Handoff",
    impact: "Low to Medium Impact",
    desc: "Allowing a conversation to transition smoothly to a live support team member (via Crisp, Zendesk, or Slack notifications) when the AI reaches low confidence thresholds.",
  },
];

const pricingModels = [
  {
    title: "1. One-Time Custom Development",
    desc: "You pay a fixed milestone fee for the complete software build. You own 100% of the source code, database architecture, and prompt engineering with zero recurring developer vendor lock-in.",
    pros: "Complete intellectual property ownership, zero per-user or platform subscription markups, unlimited customization.",
    bestFor: "Businesses wanting tailored workflows, data privacy, and full control over their technology stack.",
  },
  {
    title: "2. Monthly SaaS Platform Model",
    desc: "You pay a recurring monthly fee (e.g., $50 - $500+/month) to a third-party platform (such as Intercom, Chatbase, or Botsonic) to host and run your chatbot.",
    pros: "Fast self-service setup for simple use cases.",
    bestFor: "Simple websites that do not require custom database integrations, proprietary backend logic, or data residency guarantees.",
  },
  {
    title: "3. Direct Usage-Based API Cost",
    desc: "You pay model providers (OpenAI, Anthropic, Google) directly for the exact tokens (words) processed by your bot. There are no middlemen markups on API usage.",
    pros: "Extremely cost-effective at low to medium volumes (often just $10 - $100/month for thousands of conversations).",
    bestFor: "Companies running custom builds where token efficiency and transparent billing are paramount.",
  },
  {
    title: "4. Development + Maintenance Retainer",
    desc: "An initial development phase to build the system, followed by an optional monthly maintenance retainer covering prompt fine-tuning, document index updates, and uptime monitoring.",
    pros: "Continuous accuracy optimization as your company documentation and customer inquiry patterns evolve.",
    bestFor: "Growing enterprises that need dedicated engineering support without hiring full-time AI engineers.",
  },
];

const useCases = [
  {
    title: "Customer Support Deflection",
    desc: "Resolve 60–80% of repetitive customer inquiries (order tracking, refund policies, product specs) instantly, 24/7.",
    icon: "headphones",
  },
  {
    title: "Sales & Inbound Lead Triage",
    desc: "Qualify inbound prospects by asking targeted budget and timeline questions, booking meetings directly to sales calendars.",
    icon: "target",
  },
  {
    title: "Internal SOP & HR Assistant",
    desc: "Enable staff to query thousands of internal company PDFs, HR policies, technical documentation, and SOPs in seconds.",
    icon: "book",
  },
  {
    title: "Real Estate Property Inquiries",
    desc: "Provide instant property specs, floor plans, pricing estimates, and schedule agent site visits automatically.",
    icon: "map-pin",
  },
  {
    title: "Healthcare Appointment Triage",
    desc: "Guide patients through clinic hours, doctor specialties, pre-consultation questionnaires, and appointment bookings.",
    icon: "shield",
  },
  {
    title: "Education & Course Companion",
    desc: "Provide students with 24/7 answers from course syllabi, lecture notes, and study materials with source citations.",
    icon: "brain",
  },
];

export default function AIChatbotCostPage() {
  return (
    <PageShell>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section with Integrated Breadcrumbs */}
      <section className="relative overflow-hidden border-b border-subtle-border bg-grid gradient-mesh pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute left-1/2 top-0 h-96 w-[50rem] -translate-x-1/2 rounded-full bg-accent-secondary/5 blur-3xl animate-pulse-glow pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-dimmed">/</span>
            <Link href="/services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <span className="text-dimmed">/</span>
            <span className="text-heading font-semibold">AI Chatbot Development Cost</span>
          </nav>

          <div className="max-w-3xl">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              2026 Pricing & Engineering Guide
            </span>
            <h1 className="font-heading mt-6 text-3xl font-extrabold tracking-tight text-heading sm:text-4xl lg:text-5xl leading-[1.12]">
              AI Chatbot Development Cost: What You Can Expect to Pay
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              AI chatbot development can range from a simple business assistant to a custom AI system connected to your data, CRM, website, or internal tools. The final cost depends mainly on features, integrations, AI model usage, and development complexity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary premium-btn">
                Get a Chatbot Development Estimate
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link href="/ai-solutions" className="btn-secondary premium-btn">
                Explore AI Solutions
                <Icon name="brain" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cost Overview Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Quick Cost Summary</span>
          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
            Chatbot Development Tiers at a Glance
          </h2>
          <p className="mt-3 text-sm text-muted">
            Typical project scopes based on architecture, document indexing depth, and third-party integrations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricingOverviewTiers.map((tier) => (
            <div
              key={tier.name}
              className={`glass-card relative flex flex-col justify-between p-6 sm:p-8 ${
                tier.highlight ? "border-accent ring-1 ring-accent/30 shadow-xl" : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  Most Requested Architecture
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-secondary">
                    {tier.badge}
                  </span>
                  <span className="text-xs font-semibold text-muted">{tier.timeline}</span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold text-heading sm:text-xl">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {tier.description}
                </p>

                <div className="mt-5 border-t border-subtle-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-dimmed">
                    Key Deliverables Included:
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-foreground">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Icon name="check" size={10} />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-subtle-border pt-5">
                <p className="text-[11px] text-muted italic">
                  Best for: <span className="font-semibold text-heading not-italic">{tier.bestFor}</span>
                </p>
                <Link
                  href="/contact"
                  className={`mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition ${
                    tier.highlight
                      ? "bg-accent text-white hover:bg-accent-hover shadow-md"
                      : "border border-subtle-border bg-background hover:border-accent text-heading"
                  }`}
                >
                  Discuss This Tier
                  <Icon name="arrow-right" size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Answer the Main Question Early */}
      <section className="border-y border-subtle-border bg-surface/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="section-eyebrow">Direct Answer</span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
                How Much Does It Cost to Develop an AI Chatbot?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                The total investment for developing an AI chatbot depends on whether you need a straightforward FAQ assistant, an intelligent knowledge retrieval (RAG) assistant connected to company files, or an autonomous AI agent capable of executing actions inside your CRM and databases.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Unlike off-the-shelf SaaS chatbot tools that charge recurring per-agent and per-conversation fees indefinitely, a custom AI chatbot built with modern engineering frameworks gives your business complete source code ownership and direct model pricing.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 lg:col-span-6">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-heading">
                Key Factors That Determine Total Cost:
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
                {[
                  { title: "Chatbot Type & Goals", desc: "FAQ vs RAG vs Multi-step Agent" },
                  { title: "Knowledge Base Size", desc: "Number and format of PDFs, docs & pages" },
                  { title: "AI Model Selection", desc: "OpenAI, Anthropic, Gemini, or Open Source" },
                  { title: "Integrations", desc: "WhatsApp, CRM, Slack, databases, APIs" },
                  { title: "Authentication", desc: "Public widget vs secure logged-in access" },
                  { title: "Admin Analytics", desc: "Custom transcript logs & spend tracking" },
                  { title: "Live Handoff", desc: "Transferring chats to human support reps" },
                  { title: "Monthly Operating Budget", desc: "Token fees & cloud server hosting" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-subtle-border bg-background p-3">
                    <p className="font-bold text-heading">{item.title}</p>
                    <p className="mt-1 text-[11px] text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chatbot Cost Estimator */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ChatbotCostCalculator />
      </section>

      {/* Detailed Chatbot Cost Breakdown */}
      <section className="border-t border-subtle-border bg-surface/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Technical Architecture</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl lg:text-4xl">
              The 4 Core Components of Chatbot Development Cost
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Understanding where engineering effort is spent helps you budget accurately and prioritize features that deliver measurable ROI.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* 1. Chatbot Type */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm">
                01
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-heading">1. Chatbot Type & Intelligence Level</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                The architecture complexity changes dramatically based on intelligence requirements:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Rule-Based / FAQ Bots:</span> Follow fixed decision trees. Fast to build, but cannot handle nuanced human language.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">LLM-Powered Chatbots:</span> Use models like GPT-4o or Gemini to understand conversational context and natural dialogue.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">RAG Knowledge Bots:</span> Dynamically search vector databases to reference private company facts and cite exact source passages.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Autonomous AI Agents:</span> Execute API calls, query SQL databases, verify user identities, and trigger automated business workflows.
                </li>
              </ul>
            </div>

            {/* 2. AI Model Selection & Token Economics */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm">
                02
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-heading">2. AI Model Selection & Token Economics</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                Selecting the right model architecture prevents unnecessary API bills:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Lightweight Models (GPT-4o-mini, Gemini 1.5 Flash):</span> Ultra-fast responses and minimal token expenses (ideal for customer service).
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">High-Reasoning Models (Claude 3.5 Sonnet, GPT-4o):</span> Best for complex multi-step reasoning, coding, and mathematical calculations.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Self-Hosted Open Source (Llama 3.3, Mistral):</span> Deployed on your private cloud (AWS/GCP) when strict data sovereignty and zero external API transmission are mandatory.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Semantic Caching:</span> We configure Redis caching layers so identical questions never consume duplicate model tokens.
                </li>
              </ul>
            </div>

            {/* 3. Knowledge Base & RAG Pipeline */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm">
                03
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-heading">3. Knowledge Base & Retrieval-Augmented Generation (RAG)</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                Building a reliable RAG pipeline requires specialized data engineering to prevent hallucinations:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Document Parsing & Chunking:</span> Cleaning messy PDF tables, word docs, and website pages into structured semantic chunks.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Vector Database Indexing:</span> Setting up pgvector (PostgreSQL), Pinecone, or Qdrant for millisecond similarity retrieval.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Hybrid Search & Reranking:</span> Combining keyword matching with dense vector search to guarantee accurate context retrieval.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Source Attribution:</span> Providing clickable citations so users can verify the exact document and page where answers originate.
                </li>
              </ul>
            </div>

            {/* 4. Integrations & Tool Calling */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-sm">
                04
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-heading">4. Multi-Channel & System Integrations</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                A chatbot delivers maximum value when connected to the business tools your team uses daily:
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">CRM Systems:</span> Automated two-way synchronization with HubSpot, GoHighLevel, Salesforce, and Zoho.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Messaging Channels:</span> WhatsApp Cloud API, Slack bots, Microsoft Teams, and custom mobile apps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Calendar & Scheduling:</span> Dynamic availability lookup and booking via Google Calendar, Calendly, or Cal.com.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-heading">Transactional Tool-Use:</span> Secure API authentication to read live order statuses, update inventory, or process invoice lookups.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Chatbot Pricing Models */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Pricing Structures</span>
          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
            Common Chatbot Pricing Models
          </h2>
          <p className="mt-3 text-sm text-muted">
            Compare how different development and hosting billing models impact your total cost of ownership.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pricingModels.map((model) => (
            <div key={model.title} className="glass-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-heading sm:text-lg">{model.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">{model.desc}</p>
                <div className="mt-4 rounded-xl border border-subtle-border bg-background/60 p-3.5 text-xs">
                  <span className="font-bold text-heading">Advantage: </span>
                  <span className="text-muted">{model.pros}</span>
                </div>
              </div>
              <div className="mt-5 border-t border-subtle-border pt-3.5 text-xs text-dimmed">
                Ideal for: <span className="font-semibold text-foreground">{model.bestFor}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Cost vs Operating Cost */}
      <section className="border-y border-subtle-border bg-surface/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Cost Transparency</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl lg:text-4xl">
              AI Chatbot Development Cost vs. Monthly Operating Cost
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              A clear separation between one-time software engineering and ongoing third-party infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* One-Time Development */}
            <div className="glass-card p-6 sm:p-8 border-t-4 border-t-accent">
              <div className="flex items-center justify-between border-b border-subtle-border pb-4">
                <h3 className="text-lg font-extrabold text-heading">Initial Development Scope</h3>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">One-Time Fee</span>
              </div>
              <p className="mt-4 text-xs text-muted leading-relaxed sm:text-sm">
                Covers all custom engineering, data pipelines, integrations, and deployment:
              </p>
              <div className="mt-5 space-y-3 text-xs text-foreground">
                {[
                  { label: "UI/UX Chat Widget Design", desc: "Floating web bubble, responsive mobile view, and brand styling" },
                  { label: "Prompt Engineering & System Constraints", desc: "Safety guardrails, brand voice rules, and negative prompt filtering" },
                  { label: "RAG Vector Pipeline & Indexing", desc: "Document ingestion, embeddings creation, and pgvector/Pinecone setup" },
                  { label: "CRM & API Webhooks", desc: "HubSpot, GoHighLevel, WhatsApp, and database query integrations" },
                  { label: "Authentication & Role Security", desc: "PII redaction, user permissions, and API key encryption" },
                  { label: "Testing & Accuracy Audits", desc: "Batch evaluation test queries, temperature tuning, and QA verification" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-subtle-border bg-background p-3">
                    <p className="font-bold text-heading">{item.label}</p>
                    <p className="mt-1 text-[11px] text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Operating Expenses */}
            <div className="glass-card p-6 sm:p-8 border-t-4 border-t-accent-secondary">
              <div className="flex items-center justify-between border-b border-subtle-border pb-4">
                <h3 className="text-lg font-extrabold text-heading">Monthly Operating Expenses</h3>
                <span className="rounded-full bg-accent-secondary/10 px-3 py-1 text-xs font-bold text-accent-secondary">Ongoing / Usage</span>
              </div>
              <p className="mt-4 text-xs text-muted leading-relaxed sm:text-sm">
                Direct infrastructure fees paid directly to cloud and model providers:
              </p>
              <div className="mt-5 space-y-3 text-xs text-foreground">
                {[
                  {
                    label: "LLM API Token Usage",
                    desc: "Paid to OpenAI/Google/Anthropic. For typical websites with 1,000–5,000 chats/month, token costs using optimized models like GPT-4o-mini or Gemini Flash are typically only $5 - $30/month.",
                  },
                  {
                    label: "Vector Database Hosting",
                    desc: "Free-tier for starter databases, or $20 - $70/month for dedicated Pinecone or AWS RDS PostgreSQL pgvector clusters as data grows.",
                  },
                  {
                    label: "Cloud Server & Hosting",
                    desc: "Next.js / Node.js backend server hosting on Vercel or AWS ($20 - $50/month).",
                  },
                  {
                    label: "Optional Maintenance & Support Retainer",
                    desc: "Optional ongoing engineering support for document re-indexing, prompt accuracy tuning, and telemetry log reviews.",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-subtle-border bg-background p-3">
                    <p className="font-bold text-heading">{item.label}</p>
                    <p className="mt-1 text-[11px] text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GoHighLevel (GHL) Chatbot Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-surface p-6 sm:p-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Platform-Specific Guide</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
              How Much Does It Cost to Create a Chatbot in GoHighLevel (GHL)?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              If your agency or business runs on GoHighLevel (GHL), building an AI chatbot involves two distinct components: the platform subscription fee and the custom workflow configuration.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-card p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-accent">1. GHL Platform Cost</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                GoHighLevel plans range from $97/mo to $497/mo. GHL Conversation AI also incurs small per-message rebilling charges if you use their native OpenAI sub-account integration.
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-accent">2. Native GHL Setup Fee</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Configuring native GHL Conversation AI prompts, appointment booking intents, and workflow automation actions typically costs between $500 and $1,500 in one-time setup.
              </p>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-accent">3. Custom External RAG Sync</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                When GHL native bots cannot handle deep PDF document search or multi-database logic, connecting a custom external RAG assistant via GHL Webhooks/API ranges from $2,000 to $5,000.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between flex-wrap gap-4 border-t border-subtle-border pt-5">
            <p className="text-xs text-muted">
              Need a custom AI assistant synced with your GoHighLevel CRM workflows and calendar?
            </p>
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
              Discuss GHL Integration
              <Icon name="arrow-right" size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Cost by Project Complexity Table */}
      <section className="border-t border-subtle-border bg-surface/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Project Matrix</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
              Chatbot Complexity & Development Comparison
            </h2>
            <p className="mt-3 text-sm text-muted">
              A comprehensive breakdown of features, integrations, and typical development timelines by chatbot tier.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="mt-12 hidden md:block overflow-hidden rounded-2xl border border-subtle-border bg-surface shadow-md">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-subtle-border bg-background text-[11px] font-bold uppercase tracking-wider text-heading">
                <tr>
                  <th className="p-4">Chatbot Type</th>
                  <th className="p-4">Complexity</th>
                  <th className="p-4">Core Features</th>
                  <th className="p-4">Integrations</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4">Timeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle-border">
                {complexityComparisonRows.map((row) => (
                  <tr key={row.type} className="hover:bg-accent/5 transition-colors">
                    <td className="p-4 font-bold text-heading">{row.type}</td>
                    <td className="p-4">
                      <span className="inline-flex rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-extrabold text-accent">
                        {row.complexity}
                      </span>
                    </td>
                    <td className="p-4 text-muted max-w-[200px] leading-relaxed">{row.features}</td>
                    <td className="p-4 text-muted max-w-[150px] leading-relaxed">{row.integrations}</td>
                    <td className="p-4 text-muted max-w-[160px] leading-relaxed">{row.bestFor}</td>
                    <td className="p-4 font-bold text-heading whitespace-nowrap">{row.effort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="mt-8 grid gap-4 md:hidden">
            {complexityComparisonRows.map((row) => (
              <div key={row.type} className="glass-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-heading text-sm">{row.type}</h3>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-extrabold text-accent">
                    {row.complexity}
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-xs border-t border-subtle-border pt-3">
                  <div>
                    <span className="font-semibold text-dimmed">Features: </span>
                    <span className="text-muted">{row.features}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dimmed">Integrations: </span>
                    <span className="text-muted">{row.integrations}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-dimmed">Best For: </span>
                    <span className="text-muted">{row.bestFor}</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-semibold text-dimmed">Timeline: </span>
                    <span className="font-bold text-primary">{row.effort}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature-Based Cost Drivers Table */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Cost Factors</span>
          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
            What Increases Chatbot Development Cost?
          </h2>
          <p className="mt-3 text-sm text-muted">
            Specific capabilities that add engineering hours and infrastructure requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {costDrivers.map((item) => (
            <div key={item.factor} className="glass-card p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-secondary">
                    {item.impact}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-extrabold text-heading">{item.factor}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Build an AI Chatbot */}
      <section className="border-t border-subtle-border bg-surface/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="section-eyebrow">Our Process</span>
            <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
              How We Build an AI Chatbot
            </h2>
            <p className="mt-3 text-sm text-muted">
              A transparent, sprint-driven engineering process from architecture planning to live production rollout.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Requirements & Use-Case Mapping",
                desc: "We analyze your business goals, target inquiry volume, knowledge documents, and necessary CRM/API integrations.",
              },
              {
                step: "02",
                title: "Knowledge Ingestion & Vector Setup",
                desc: "We parse, clean, and chunk your PDF files, technical documentation, and web data into secure vector databases (pgvector/Pinecone).",
              },
              {
                step: "03",
                title: "Model Selection & Prompt Architecture",
                desc: "We configure safety boundaries, tone of voice, source citation logic, and token caching layers to keep operational costs low.",
              },
              {
                step: "04",
                title: "UI Widget & Channel Integration",
                desc: "We build the chat frontend widget, WhatsApp webhook handlers, CRM data synchronization, and calendar booking actions.",
              },
              {
                step: "05",
                title: "Accuracy Benchmarking & QA Testing",
                desc: "We run automated test query suites, tune retrieval temperatures, check PII redaction compliance, and eliminate hallucinations.",
              },
              {
                step: "06",
                title: "Deployment & Telemetry Monitoring",
                desc: "We launch the chatbot live on your domain with real-time error logging, transcript dashboards, and token spend telemetry.",
              },
            ].map((st) => (
              <div key={st.step} className="glass-card p-6 relative">
                <span className="text-2xl font-extrabold text-accent/20 font-mono absolute top-4 right-4">
                  {st.step}
                </span>
                <h3 className="mt-2 text-base font-extrabold text-heading">{st.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Practical Applications</span>
          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
            High-Impact Use Cases for AI Chatbots
          </h2>
          <p className="mt-3 text-sm text-muted">
            Where custom AI chatbots generate measurable operational savings and lead conversion growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div key={uc.title} className="glass-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent border border-accent/20">
                <Icon name={uc.icon} size={18} />
              </span>
              <h3 className="mt-4 text-base font-bold text-heading">{uc.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Build vs Buy */}
      <section className="border-t border-subtle-border bg-surface/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="section-eyebrow">Decision Framework</span>
              <h2 className="mt-4 text-2xl font-extrabold text-heading sm:text-3xl">
                Should You Build a Custom AI Chatbot or Buy a Pre-Built SaaS Tool?
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                Off-the-shelf chatbot platforms are great for quick, basic FAQ widgets. However, as your business grows, recurring per-user and per-conversation fees quickly exceed the cost of building a proprietary custom chatbot that you own forever.
              </p>
              <div className="mt-6">
                <Link href="/contact" className="btn-primary text-xs py-3 px-6">
                  Consult With an AI Architect
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="glass-card p-6 border-t-2 border-t-accent">
                <h3 className="font-extrabold text-heading text-sm sm:text-base">When to Build Custom:</h3>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span> You need full ownership of code and data
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span> You require direct integrations with custom SQL/APIs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span> High chat volume makes SaaS per-message pricing costly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span> You require strict HIPAA, GDPR, or enterprise PII privacy
                  </li>
                </ul>
              </div>

              <div className="glass-card p-6 border-t-2 border-t-dimmed">
                <h3 className="font-extrabold text-heading text-sm sm:text-base">When to Buy SaaS:</h3>
                <ul className="mt-4 space-y-2 text-xs text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">•</span> You need a bot live in 15 minutes with zero coding
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">•</span> You only have a simple 5-page public FAQ website
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">•</span> No custom CRM, database, or backend actions needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted font-bold">•</span> You are comfortable paying monthly recurring platform fees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-eyebrow">Common Questions</span>
          <h2 className="mt-3 text-2xl font-extrabold text-heading sm:text-3xl">
            Frequently Asked Questions About AI Chatbot Costs
          </h2>
          <p className="mt-3 text-sm text-muted">
            Clear answers to common questions about chatbot development pricing, hosting budgets, and timelines.
          </p>
        </div>

        <div className="mt-12 grid gap-4 max-w-4xl mx-auto">
          {[
            {
              q: "How much does it cost to develop an AI chatbot?",
              a: "AI chatbot development cost typically ranges from $1,000 to $3,000 for a basic FAQ bot, $3,000 to $8,000 for a document-based RAG assistant, and $8,000 to $25,000+ for an enterprise multi-channel AI system with database tool execution.",
            },
            {
              q: "What are the monthly running costs of an AI chatbot?",
              a: "Monthly running costs consist of model API tokens (typically $10 - $50/month for moderate volumes using models like GPT-4o-mini or Gemini Flash), vector database hosting ($0 - $70/month), and cloud server hosting ($20 - $50/month).",
            },
            {
              q: "How much does it cost to create a chatbot in GoHighLevel (GHL)?",
              a: "Setting up a native GHL Conversation AI bot typically costs $500 to $1,500 in one-time developer configuration. Integrating an external custom RAG chatbot with GHL via API ranges from $2,000 to $5,000, plus your standard monthly GHL subscription.",
            },
            {
              q: "How do you control and reduce LLM API usage costs?",
              a: "We implement Redis semantic query caching, restrict context retrieval to relevant vector chunks, write concise system prompts, and route simpler requests to cost-efficient models like GPT-4o-mini and Gemini Flash.",
            },
            {
              q: "Is AI chatbot development a one-time cost?",
              a: "Yes. When building a custom chatbot with Magnivel Technologies, the initial development fee is one-time and you retain 100% ownership of the code, vector database, and prompt logic.",
            },
            {
              q: "How long does chatbot development take?",
              a: "Timelines range from 1 to 2 weeks for a simple FAQ assistant, 2 to 4 weeks for a document RAG bot, and 4 to 8 weeks for complex multi-channel enterprise integrations.",
            },
            {
              q: "Can an AI chatbot connect to my CRM, WhatsApp, or internal database?",
              a: "Yes. We engineer secure API integrations with WhatsApp Business API, HubSpot, GoHighLevel, Salesforce, Slack, and PostgreSQL/MySQL databases for real-time lead capture and data lookup.",
            },
          ].map((faq) => (
            <details key={faq.q} className="group glass-card p-5">
              <summary className="cursor-pointer font-bold text-heading text-sm flex justify-between items-center select-none">
                {faq.q}
                <span className="transition-transform group-open:rotate-180 text-accent">
                  <Icon name="chevron-down" size={16} />
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-muted border-t border-subtle-border pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contextual Internal Links Section */}
      <section className="border-t border-subtle-border bg-surface/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-wider text-accent-secondary">
            Related Services & Development Guides
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { href: "/ai-solutions", label: "Custom AI Solutions" },
              { href: "/custom-software-development", label: "Custom Software Development" },
              { href: "/web-application-development", label: "Web Application Development" },
              { href: "/api-development", label: "API & Backend Development" },
              { href: "/saas-development", label: "SaaS Platform Development" },
              { href: "/portfolio", label: "View Portfolio Projects" },
              { href: "/contact", label: "Contact Engineering Team" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-subtle-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted hover:border-accent hover:text-heading transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mb-8">
        <div className="rounded-2xl dark-panel p-8 text-center sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl leading-tight">
            Ready to Build an AI Chatbot for Your Business?
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project requirements, data sources, and desired integrations. We&apos;ll provide a clear architectural scope and milestone-driven cost estimate within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-8 py-4 bg-white text-primary hover:bg-accent-light hover:text-primary transition-colors cursor-pointer shadow-lg"
            >
              Get Your Chatbot Estimate
              <Icon name="arrow-right" size={14} />
            </Link>
            <a
              href="mailto:contact@magnivel.com"
              className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-8 py-4 border border-white/30 text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Email Engineering Team
              <Icon name="mail" size={14} />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
