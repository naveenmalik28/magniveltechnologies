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
  { value: "5+", label: "Years of Experience", icon: "clock" as const },
  { value: "50+", label: "Projects Delivered", icon: "rocket" as const },
  { value: "10+", label: "Industries Served", icon: "layers" as const },
  { value: "20+", label: "Technology Expertise", icon: "code" as const },
  { value: "Global", label: "Client Reach", icon: "globe" as const },
];

export const caseStudies = [
  {
    id: "healthcare-scheduler",
    title: "AI-Powered Patient Scheduler",
    industry: "Healthcare",
    challenge:
      "A regional healthcare network struggled with manual appointment scheduling, long patient wait times, and overloaded support staff handling repetitive booking requests.",
    solution:
      "We engineered a HIPAA-compliant AI scheduling agent with LangChain orchestration, Gemini API integration, and real-time practitioner availability matching across PostgreSQL.",
    tech: ["Next.js", "LangChain", "Gemini API", "PostgreSQL", "AWS"],
    impact: "75% reduction in support overhead with 99.9% scheduling accuracy.",
    metrics: [
      { label: "Support Reduction", value: "75%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Response Time", value: "<2s" },
    ],
    gradient: "from-indigo-600/60 via-violet-600/40 to-cyan-600/50",
    visual: "healthcare" as const,
  },
  {
    id: "b2b-analytics-saas",
    title: "Multi-Tenant B2B Analytics SaaS",
    industry: "SaaS / Enterprise",
    challenge:
      "A B2B startup needed a scalable analytics platform with usage-based pricing, team collaboration, and real-time metrics dashboards for enterprise clients.",
    solution:
      "Built a multi-tenant SaaS architecture with Redis caching, Stripe subscription billing, dynamic role-based dashboards, and granular usage tracking.",
    tech: ["React", "Node.js", "Redis", "Stripe API", "PostgreSQL"],
    impact: "+240% client conversion growth within six months of launch.",
    metrics: [
      { label: "Conversion Growth", value: "+240%" },
      { label: "Active Tenants", value: "120+" },
      { label: "API Latency", value: "45ms" },
    ],
    gradient: "from-violet-600/60 via-purple-600/40 to-indigo-600/50",
    visual: "saas" as const,
  },
  {
    id: "real-estate-portal",
    title: "Real Estate Portal with QR Integrations",
    industry: "Real Estate",
    challenge:
      "A property developer needed a responsive inventory platform with live location mapping, automated broker alerts, and QR-based lead capture at physical sites.",
    solution:
      "Architected a Django-powered property database with AWS S3 media storage, PDF brochure generation, QR code lead routing, and mobile-first Tailwind UI.",
    tech: ["Django", "Python", "AWS S3", "PostgreSQL", "Tailwind CSS"],
    impact: "Over 50,000 qualified leads captured with automated broker routing.",
    metrics: [
      { label: "Leads Captured", value: "50K+" },
      { label: "Page Speed", value: "98/100" },
      { label: "Mobile Traffic", value: "68%" },
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
    href: "/ai-chatbot-development",
  },
  {
    title: "Process Automation",
    description: "Intelligent workflow automation that eliminates repetitive tasks and reduces operational costs.",
    icon: "zap" as const,
    href: "/ai-automation-services",
  },
  {
    title: "Machine Learning",
    description: "Custom ML models for classification, recommendation, and pattern recognition at scale.",
    icon: "brain" as const,
    href: "/ai-development",
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
    href: "/ai-development",
  },
  {
    title: "Intelligent Workflows",
    description: "Agentic AI systems that orchestrate multi-step business processes autonomously.",
    icon: "layers" as const,
    href: "/ai-automation-services",
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
    title: "International Clients",
    description: "Delivering software solutions to startups, SMEs, and enterprises across five continents.",
    icon: "users" as const,
  },
  {
    title: "Conference Technology",
    description: "Platform solutions for global conferences, summits, and knowledge-sharing events.",
    icon: "globe" as const,
  },
  {
    title: "Publishing Solutions",
    description: "Digital publishing platforms, journal systems, and research dissemination tools.",
    icon: "book" as const,
  },
  {
    title: "Research Ecosystems",
    description: "Academic research platforms, data repositories, and scientific collaboration systems.",
    icon: "brain" as const,
  },
];
