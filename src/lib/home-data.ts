export const heroPhrases = [
  "AI Solutions",
  "Custom Software",
  "Enterprise Platforms",
  "Cloud Innovation",
  "Digital Transformation",
];

export const floatingSnippets = [
  "const agent = new AIAgent();",
  "await deploy(cloud);",
  "model.train(dataset);",
  "api.integrate(stripe);",
];

export const trustMetrics = [
  { value: "20+", label: "Technologies", icon: "code" as const },
  { value: "Global", label: "Delivery Reach", icon: "globe" as const },
  { value: "100%", label: "Code Ownership", icon: "shield" as const },
  { value: "Direct", label: "Developer Access", icon: "users" as const },
  { value: "NDA", label: "Protected Projects", icon: "lock" as const },
];

export const caseStudies = [
  {
    id: "healthcare-scheduler",
    title: "AI-Powered Patient Scheduler",
    industry: "Healthcare",
    isConceptProject: true,
    challenge:
      "A healthcare network needed to replace manual appointment scheduling that caused long patient wait times and overloaded support staff with repetitive booking requests.",
    solution:
      "We built an AI scheduling system with LangChain orchestration, Gemini API integration, and real-time practitioner availability matching across PostgreSQL.",
    tech: ["Next.js", "LangChain", "Gemini API", "PostgreSQL", "AWS"],
    impact: "Designed to significantly reduce manual scheduling overhead and improve patient experience.",
    metrics: [
      { label: "Stack", value: "AI + RAG" },
      { label: "Architecture", value: "HIPAA" },
      { label: "Response", value: "<2s" },
    ],
    gradient: "from-indigo-600/60 via-violet-600/40 to-cyan-600/50",
    visual: "healthcare" as const,
  },
  {
    id: "b2b-analytics-saas",
    title: "Multi-Tenant B2B Analytics SaaS",
    industry: "SaaS / Enterprise",
    isConceptProject: true,
    challenge:
      "A B2B startup needed a scalable analytics platform with usage-based pricing, team collaboration, and real-time metrics dashboards for enterprise clients.",
    solution:
      "Built a multi-tenant SaaS architecture with Redis caching, Stripe subscription billing, dynamic role-based dashboards, and granular usage tracking.",
    tech: ["React", "Node.js", "Redis", "Stripe API", "PostgreSQL"],
    impact: "Designed to support scalable multi-tenant workloads with automated billing and team workspaces.",
    metrics: [
      { label: "Multi-Tenant", value: "Yes" },
      { label: "Billing", value: "Stripe" },
      { label: "Latency", value: "<50ms" },
    ],
    gradient: "from-violet-600/60 via-purple-600/40 to-indigo-600/50",
    visual: "saas" as const,
  },
  {
    id: "real-estate-portal",
    title: "Real Estate Portal with QR Integrations",
    industry: "Real Estate",
    isConceptProject: true,
    challenge:
      "A property developer needed a responsive inventory platform with live location mapping, automated broker alerts, and QR-based lead capture at physical sites.",
    solution:
      "Architected a Django-powered property database with AWS S3 media storage, PDF brochure generation, QR code lead routing, and mobile-first UI.",
    tech: ["Django", "Python", "AWS S3", "PostgreSQL", "Tailwind CSS"],
    impact: "Built for high-volume lead capture with automated broker notification and mobile-first browsing.",
    metrics: [
      { label: "Backend", value: "Django" },
      { label: "Storage", value: "AWS S3" },
      { label: "Mobile", value: "First" },
    ],
    gradient: "from-cyan-600/60 via-teal-600/40 to-emerald-600/50",
    visual: "realestate" as const,
  },
];

export const aiSolutions = [
  {
    title: "AI Chatbots",
    description: "GPT, Gemini, and Claude-powered conversational agents with RAG and knowledge bases.",
    icon: "message-circle" as const,
    href: "/ai-solutions",
  },
  {
    title: "Process Automation",
    description: "Intelligent workflow automation that eliminates repetitive tasks and reduces operational costs.",
    icon: "zap" as const,
    href: "/ai-solutions",
  },
  {
    title: "Machine Learning",
    description: "Custom ML models for classification, recommendation, and pattern recognition at scale.",
    icon: "brain" as const,
    href: "/ai-solutions",
  },
  {
    title: "Predictive Analytics",
    description: "Data-driven forecasting dashboards that turn raw metrics into actionable business insights.",
    icon: "bar-chart" as const,
    href: "/custom-software-development",
  },
  {
    title: "Generative AI",
    description: "Content generation, document intelligence, and creative AI pipelines for enterprise workflows.",
    icon: "sparkles" as const,
    href: "/ai-solutions",
  },
  {
    title: "Intelligent Workflows",
    description: "Agentic AI systems that orchestrate multi-step business processes autonomously.",
    icon: "layers" as const,
    href: "/ai-solutions",
  },
];

export const techEcosystem = [
  {
    category: "Frontend",
    items: ["React", "Angular", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Node.js", "Laravel"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Docker", "Kubernetes"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

export const clientJourney = [
  { step: 1, title: "Discovery", description: "Understanding your vision, users, and business objectives.", icon: "search" as const },
  { step: 2, title: "Planning", description: "Architecture, roadmap, and milestone definition.", icon: "target" as const },
  { step: 3, title: "Design", description: "UI/UX wireframes, prototypes, and design systems.", icon: "palette" as const },
  { step: 4, title: "Development", description: "Agile sprints with clean code and regular demos.", icon: "code" as const },
  { step: 5, title: "Testing", description: "QA, security audits, and performance validation.", icon: "shield" as const },
  { step: 6, title: "Launch", description: "Production deployment with monitoring and analytics.", icon: "rocket" as const },
  { step: 7, title: "Growth", description: "Ongoing optimization, features, and scale planning.", icon: "trending-up" as const },
];

export const globalRegions = [
  { name: "India", x: 72, y: 48, label: "Development Hub" },
  { name: "United States", x: 22, y: 38, label: "Enterprise Clients" },
  { name: "UAE", x: 58, y: 44, label: "Regional Partners" },
  { name: "Europe", x: 48, y: 30, label: "SaaS Deployments" },
  { name: "Southeast Asia", x: 78, y: 52, label: "Mobile Products" },
];

export const globalCapabilities = [
  {
    title: "Remote Collaboration",
    description: "We work across time zones with clear communication, weekly demos, and shared project boards.",
    icon: "users" as const,
  },
  {
    title: "India Engineering Base",
    description: "Our development team operates from India, combining strong engineering talent with competitive rates.",
    icon: "code" as const,
  },
  {
    title: "Full Code Ownership",
    description: "You own 100% of the source code, documentation, and deployment infrastructure we build for you.",
    icon: "shield" as const,
  },
  {
    title: "Flexible Engagement",
    description: "Fixed-scope projects, monthly retainers, or dedicated team models — whatever fits your business.",
    icon: "layers" as const,
  },
];
