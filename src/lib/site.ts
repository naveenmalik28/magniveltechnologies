export const site = {
  name: "Magnivel Technologies",
  url: "https://magnivel.com",
  email: "contact@magnivel.com",
  phone: "+91 00000 00000",
  tagline: "Professional web, mobile app, and custom software development for businesses globally",
  description:
    "Magnivel Technologies builds scalable websites, mobile apps, SaaS platforms, cloud systems, and custom software for businesses worldwide.",
  socials: {
    linkedin: "https://www.linkedin.com/company/magnivel-technologies",
    instagram: "https://www.instagram.com/magniveltechnologies",
  },
};

export const services = [
  {
    title: "Website Development",
    icon: "globe" as const,
    description:
      "Custom business websites, corporate sites, and headless CMS integrations built for speed, SEO, and lead generation.",
    features: ["SEO-ready architecture", "Core Web Vitals optimization", "Responsive layouts", "Secure contact forms", "Content Management System (CMS)"],
    benefits:
      "Establish a credible web presence that attracts visitors organically and loads instantly on all devices.",
  },
  {
    title: "Web Application Development",
    icon: "layers" as const,
    description:
      "Interactive, database-driven web platforms, customer dashboards, and internal business systems built with React and Next.js.",
    features: ["Dynamic dashboards", "Role-based user permissions", "Real-time database sync", "Responsive interfaces", "API integrations"],
    benefits:
      "Automate business operations, manage data securely, and provide users with a smooth web interface.",
  },
  {
    title: "SaaS Development",
    icon: "layers" as const,
    description:
      "Multi-tenant subscription software platforms with workspace sharing, user invite tools, and Stripe billing integrations.",
    features: ["Multi-tenant isolation", "Stripe subscription billing", "Workspace collaboration", "Admin monitoring metrics", "Scalable cloud databases"],
    benefits:
      "Launch a subscription product quickly with secure data isolation and automated billing cycles.",
  },
  {
    title: "E-commerce Development",
    icon: "layers" as const,
    description:
      "Online stores, secure checkouts, and custom payment integrations designed to streamline digital sales.",
    features: ["Dynamic catalogs", "Secure payment gateways", "Inventory management", "Order management dashboard", "SEO optimization"],
    benefits:
      "Simplify buying for customers and manage inventory, checkout, and orders in one secure panel.",
  },
  {
    title: "Mobile App Development",
    icon: "smartphone" as const,
    description:
      "Native and cross-platform mobile apps for iOS and Android, focusing on offline support and fluid navigation.",
    features: ["Cross-platform builds", "Offline database sync", "Push notifications", "Secure biometrics auth", "App Store deployment"],
    benefits:
      "Provide clients and teams with a fast mobile tool that works smoothly even on poor network connections.",
  },
  {
    title: "AI Solutions",
    icon: "sparkles" as const,
    description:
      "Private knowledge systems, custom search engines (RAG), workflow automation, and text analysis tools using LLMs.",
    features: ["Retrieval-Augmented Generation (RAG)", "Workflow automation tools", "Natural language search", "Document processing", "Custom LLM integrations"],
    benefits:
      "Automate manual reporting, search internal documents instantly, and improve data processing speeds.",
  },
  {
    title: "UI/UX Design",
    icon: "palette" as const,
    description:
      "User research, wireframing, high-fidelity prototypes, and dedicated design systems focused on user retention.",
    features: ["User journey mapping", "Wireframes & prototypes", "High-fidelity mockups", "Custom design systems", "Usability testing"],
    benefits:
      "Reduce user confusion, improve retention rates, and establish a premium visual identity for your product.",
  },
  {
    title: "API Development",
    icon: "server" as const,
    description:
      "Secure, well-documented RESTful and GraphQL APIs to connect frontend apps, third-party services, and internal systems.",
    features: ["REST & GraphQL protocols", "OAuth2 secure login", "Rate limiting & protection", "Database ORM integrations", "Automated API documentation"],
    benefits:
      "Ensure fast, secure data communication between your mobile app, website, and database.",
  },
  {
    title: "Custom Software Development",
    icon: "code" as const,
    description:
      "Tailor-made software systems designed to match your specific business workflows, internal operations, and reporting rules.",
    features: ["Custom workflow mapping", "Role-based access controls", "Legacy data migration", "Scheduled reporting alerts", "Long-term support"],
    benefits:
      "Replace spreadsheets and fragmented software with a unified tool built for your exact business process.",
  },
];

export const technologies = [
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Python",
  "Django",
  "Laravel",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "Docker",
  "OpenAI",
  "LangChain",
  "RAG Systems",
];

export const techCategories = [
  {
    name: "Frontend",
    icon: "monitor" as const,
    description: "Modern frameworks for responsive, high-performance user interfaces.",
    items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "server" as const,
    description: "Scalable server-side technologies for robust APIs and services.",
    items: ["Node.js", "Express.js", "Python", "Django", "Laravel", "GraphQL"],
  },
  {
    name: "Databases",
    icon: "database" as const,
    description: "Reliable data storage for transactional, analytical, and document-based systems.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM", "Supabase"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud" as const,
    description: "Infrastructure, deployment, and observability tooling for production applications.",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    name: "AI",
    icon: "brain" as const,
    description: "Applied AI tools for automation, agents, knowledge systems, and analytics.",
    items: ["OpenAI", "LangChain", "RAG Systems", "Vector Search", "Hugging Face"],
  },
];

export const clientRegions = ["India", "International"];

export const budgets = [
  "Under INR 25,000",
  "INR 25,000 - INR 50,000",
  "INR 50,000 - INR 1,00,000",
  "INR 1,00,000 - INR 3,00,000",
  "INR 3,00,000 - INR 5,00,000",
  "INR 5,00,000 - INR 10,00,000",
  "Above INR 10,00,000",
  "Let's Discuss",
];

export const internationalBudgets = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Let's Discuss",
];

export const serviceOptions = [
  "Website Development",
  "Web Application Development",
  "SaaS Development",
  "E-commerce Development",
  "Mobile App Development",
  "AI Solutions",
  "UI/UX Design",
  "API Development",
  "Custom Software Development",
];

export const projects = [
  {
    id: "b2b-lead-platform",
    title: "B2B Lead Generation Platform",
    category: "Website Development",
    industry: "Marketing & Agencies",
    description:
      "A conversion-focused marketing website with optimized page speeds, semantic SEO structure, and automated CRM lead routing.",
    challenge:
      "The client was losing prospective clients due to slow page load times over 5 seconds on their legacy system and struggled to rank for search terms.",
    solution:
      "Built a statically optimized website utilizing Next.js, customized headless CMS fields for content updates, and direct API endpoints for CRM integration.",
    businessGoal: "Build a high-performance marketing site to increase organic visitor inquiries and automate lead routing workflows.",
    keyFeatures: [
      "Statically generated pages for fast loading",
      "Headless CMS integration for content management",
      "Automated lead capture form and CRM routing",
      "Comprehensive Core Web Vitals performance tuning"
    ],
    impact: "Qualified business inquiries grew by 3x within four months of launching.",
    metrics: [
      { label: "Lead Growth", value: "3x" },
      { label: "Page Speed", value: "97/100" },
      { label: "Conversion Rate", value: "+42%" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-indigo-600/60 via-violet-600/40 to-cyan-600/50",
    visual: "analytics" as const,
  },
  {
    id: "enterprise-ops-dashboard",
    title: "Enterprise Operations Dashboard",
    category: "Custom Software Development",
    industry: "Enterprise / Operations",
    description:
      "A unified role-based operations console for tracking client onboarding, operational queues, and daily reporting metrics.",
    challenge:
      "Operations teams were managing workflows using disconnected spreadsheets, causing delayed reporting and client onboarding errors.",
    solution:
      "Developed a custom dashboard system with secure role-based access, automated queue processing, and automated reporting logs.",
    businessGoal: "Consolidate fragmented spreadsheet tracking into a unified web console to reduce human error and speed up onboarding.",
    keyFeatures: [
      "Role-based access controls (RBAC)",
      "Automated operational task queues",
      "Real-time data visualization charts",
      "Scheduled PDF report generators"
    ],
    impact: "Saved 60% of manual tracking and report compiling hours across operations teams.",
    metrics: [
      { label: "Manual Work Saved", value: "60%" },
      { label: "Active Users", value: "200+" },
      { label: "Report Time", value: "-80%" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    gradient: "from-violet-600/60 via-purple-600/40 to-indigo-600/50",
    visual: "dashboard" as const,
  },
  {
    id: "ai-support-system",
    title: "AI-Powered Customer Support System",
    category: "AI Solutions",
    industry: "Customer Support",
    description:
      "A private knowledge base search and ticket routing system assisting support staff with drafting client replies.",
    challenge:
      "The client faced high customer inquiry volumes, slow first-response times, and struggled to surface information from old technical documents.",
    solution:
      "Implemented a secure Retrieval-Augmented Generation (RAG) tool indexing internal guides to assist team members with draft generations.",
    businessGoal: "Accelerate support ticket resolution times and improve response accuracy using indexed technical guides.",
    keyFeatures: [
      "Retrieval-Augmented Generation (RAG) query search",
      "Automated draft response generation for staff",
      "Intelligent classification and routing logic",
      "Administrative compliance and audit logs"
    ],
    impact: "Reduced average client response times by 75% while raising customer satisfaction scores.",
    metrics: [
      { label: "Response Time", value: "-75%" },
      { label: "CSAT Score", value: "4.8/5" },
      { label: "Tickets Auto-Routed", value: "85%" },
    ],
    stack: ["Next.js", "OpenAI", "Python", "AWS"],
    gradient: "from-cyan-600/60 via-teal-600/40 to-emerald-600/50",
    visual: "ai" as const,
  },
  {
    id: "multi-tenant-saas",
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS Development",
    industry: "B2B SaaS",
    description:
      "A subscription-based collaboration platform featuring client workspace isolation, member invites, and metered usage billing.",
    challenge:
      "A startup client needed to build and scale a subscription platform requiring robust user boundaries and flexible pricing logic.",
    solution:
      "Designed a database with tenant-level column isolation, team management roles, Stripe API integrations, and usage metering.",
    businessGoal: "Launch a secure subscription platform with collaborative workspace tools and automated usage-based billing.",
    keyFeatures: [
      "Secure logical data partitioning per tenant",
      "Stripe payment gateway and billing webhook sync",
      "Collaborative team workspaces and invitation links",
      "Usage-based API metering checks"
    ],
    impact: "Platform launched in 12 weeks; expanded to over 120 paying customer accounts in year one.",
    metrics: [
      { label: "Time to Launch", value: "12 wks" },
      { label: "Paying Tenants", value: "120+" },
      { label: "MRR Growth", value: "+180%" },
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    gradient: "from-blue-600/60 via-indigo-600/40 to-violet-600/50",
    visual: "saas" as const,
  },
  {
    id: "healthcare-appointments",
    title: "Healthcare Appointment System",
    category: "Custom Software Development",
    industry: "Healthcare",
    description:
      "A patient scheduling portal and automated reminder queue to organize clinic hours and appointments.",
    challenge:
      "A multi-site healthcare clinic suffered from high appointment no-show rates and manual scheduling errors by reception staff.",
    solution:
      "Built a clinic workflow tool featuring a patient portal, live calendar booking, and automated email and SMS notification campaigns.",
    businessGoal: "Reduce appointment no-shows and automate calendar booking tasks for medical staff.",
    keyFeatures: [
      "Clinic appointment calendar with live slots sync",
      "Patient scheduling and billing histories portal",
      "SMS and email notification queues",
      "Administrative operations dashboard for clinic managers"
    ],
    impact: "Reduced patient no-shows by 45% via automated reminder triggers.",
    metrics: [
      { label: "No-Shows Reduced", value: "45%" },
      { label: "Appointments/mo", value: "8K+" },
      { label: "Patient Satisfaction", value: "94%" },
    ],
    stack: ["React", "Node.js", "WebRTC", "MongoDB"],
    gradient: "from-emerald-600/60 via-cyan-600/40 to-blue-600/50",
    visual: "healthcare" as const,
  },
  {
    id: "ecommerce-mobile-app",
    title: "E-Commerce Mobile Application",
    category: "Mobile App Development",
    industry: "E-Commerce / Retail",
    description:
      "A cross-platform mobile application supporting rapid product browsing, live inventory indicators, and mobile checkouts.",
    challenge:
      "A retail merchant required a mobile shopping app with fast product indexing and one-tap checkout to drive customer sales.",
    solution:
      "Built a mobile application in React Native, integrated their catalog API, and implemented native mobile payment methods.",
    businessGoal: "Create a fast mobile shopping app to increase checkout conversion rates and product sales.",
    keyFeatures: [
      "Cross-platform iOS and Android mobile app code",
      "Offline catalog browsing and search options",
      "Fast checkout flow with credit card tokens",
      "Targeted push notifications for seasonal sales"
    ],
    impact: "Mobile channel revenue expanded 2.5x in the first quarter after store launch.",
    metrics: [
      { label: "Mobile Revenue", value: "2.5x" },
      { label: "App Downloads", value: "25K+" },
      { label: "Checkout Time", value: "-50%" },
    ],
    stack: ["React Native", "Node.js", "Stripe", "Firebase"],
    gradient: "from-rose-600/60 via-violet-600/40 to-indigo-600/50",
    visual: "mobile" as const,
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    company: "TechVentures India",
    text: "Magnivel Technologies transformed our digital presence. Their team delivered a strong platform with impressive design, speed, and attention to detail.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Product",
    company: "DataFlow Systems",
    text: "Working with Magnivel was excellent. They built our operations dashboard quickly, and the AI automation saved our team many hours each week.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CTO",
    company: "CloudNine Labs",
    text: "Their technical execution is outstanding. Magnivel architected our SaaS platform from scratch and gave us a clean foundation for scale.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "Why choose Magnivel Technologies?",
    answer:
      "Magnivel Technologies combines product strategy, UI/UX design, clean engineering, and transparent communication to deliver scalable digital products with long-term support.",
  },
  {
    question: "How much does web development cost?",
    answer:
      "Project cost depends on scope, features, integrations, and timeline. We provide a clear quote after a free consultation and discovery discussion.",
  },
  {
    question: "Do you provide mobile app development?",
    answer:
      "Yes. We build Android, iOS, and cross-platform mobile applications for customer-facing products and internal business tools.",
  },
  {
    question: "Can you build AI-powered applications?",
    answer:
      "Yes. We build AI agents, chatbots, RAG systems, workflow automation, document processing tools, and analytics solutions.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing support, maintenance, monitoring, bug fixes, security updates, and growth-focused feature improvements.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Requirement Analysis",
    description: "We collaborate to understand your business objectives, technical requirements, and define a clear scope of work.",
    icon: "search" as const,
  },
  {
    step: 2,
    title: "Planning & Design",
    description: "We draft technical architecture, database schemas, and create intuitive UI/UX wireframes and prototypes.",
    icon: "target" as const,
  },
  {
    step: 3,
    title: "Development",
    description: "Our developers write clean, modular code in agile sprints, providing regular staging demos to gather early feedback.",
    icon: "code" as const,
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description: "We conduct rigorous testing across all devices, auditing performance, responsiveness, and security compliance.",
    icon: "shield" as const,
  },
  {
    step: 5,
    title: "Deployment",
    description: "We launch your application with automated pipelines, cloud monitoring, and performance optimizations.",
    icon: "rocket" as const,
  },
  {
    step: 6,
    title: "Ongoing Support",
    description: "We provide continuous maintenance, security updates, and feature additions to support your business growth.",
    icon: "headphones" as const,
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Focused" },
  { value: "20+", label: "Technologies" },
  { value: "Global", label: "Service Reach" },
];

export const homeServices = [
  {
    title: "Custom Software Development",
    href: "/custom-software-development",
    icon: "code" as const,
    description: "Tailored enterprise systems, operations dashboards, and scalable backend architectures.",
  },
  {
    title: "AI Solutions",
    href: "/ai-solutions",
    icon: "brain" as const,
    description: "Private knowledge systems, RAG query systems, workflow automation, and custom LLM integrations.",
  },
  {
    title: "Web Application Development",
    href: "/web-application-development",
    icon: "globe" as const,
    description: "High-performance dynamic web platforms, customer portals, and internal dashboards.",
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app-development",
    icon: "smartphone" as const,
    description: "Native and cross-platform iOS & Android apps with seamless offline capabilities.",
  },
  {
    title: "SaaS Development",
    href: "/saas-development",
    icon: "layers" as const,
    description: "Multi-tenant cloud platforms with user workspace sharing and Stripe billing.",
  },
  {
    title: "Website Development",
    href: "/website-development",
    icon: "globe" as const,
    description: "Corporate websites and headless CMS integrations built for speed and search ranking.",
  },
  {
    title: "E-commerce Development",
    href: "/ecommerce-development",
    icon: "layers" as const,
    description: "Premium digital stores, shopping cart engines, and secure payment gate integrations.",
  },
  {
    title: "UI/UX Design",
    href: "/ui-ux-design",
    icon: "palette" as const,
    description: "Interface wireframes, user flow layouts, high-fidelity prototypes, and design systems.",
  },
  {
    title: "API Development",
    href: "/api-development",
    icon: "server" as const,
    description: "RESTful and GraphQL server endpoints, microservice routing, and third-party API syncs.",
  },
];

export const whyChoose = [
  { title: "Custom Development", emoji: "💻", description: "We build custom software tailored exactly to your business workflows and processes, avoiding the limitations of templates.", icon: "code" as const },
  { title: "Transparent Communication", emoji: "💬", description: "We maintain open lines of communication, providing regular updates, staging links, and direct developer access.", icon: "zap" as const },
  { title: "Dedicated Support", emoji: "🛠️", description: "Our team provides consistent post-launch support, monitoring system health, addressing bugs, and keeping packages updated.", icon: "shield" as const },
  { title: "Scalable Solutions", emoji: "📈", description: "We design architectures that scale horizontally, prepared to handle growth in users, transactions, and data.", icon: "trending-up" as const },
  { title: "Modern Technology Stack", emoji: "⚙️", description: "We build with proven modern frameworks like React, Next.js, Node.js, and Python, ensuring long-term viability.", icon: "layers" as const },
  { title: "Long-Term Partnership", emoji: "🤝", description: "We work as your technology partner, supporting your business as it evolves, helping plan and execute future phases.", icon: "globe" as const },
];

export const industries = [
  "Healthcare",
  "Education",
  "Publishing",
  "Finance",
  "Real Estate",
  "Logistics",
  "Manufacturing",
  "SaaS",
  "E-Commerce",
  "Startups",
];

export const trustedBy = [
  "Govixa India",
  "TechVentures",
  "DataFlow Systems",
  "CloudNine Labs",
  "Artisan Digital",
  "ScaleUp AI",
  "NovaByte",
];

export const careersBenefits = [
  {
    title: "Innovative Projects",
    description: "Work on real-world software solutions and modern technologies.",
    icon: "code" as const,
  },
  {
    title: "Growth Opportunities",
    description: "Learn, grow, and advance your career with challenging projects.",
    icon: "trending-up" as const,
  },
  {
    title: "Flexible Work Environment",
    description: "Remote-friendly and collaborative culture.",
    icon: "globe" as const,
  },
  {
    title: "Latest Technologies",
    description: "React, Next.js, Node.js, Python, AI, Cloud, and more.",
    icon: "layers" as const,
  },
  {
    title: "Supportive Team",
    description: "Work with experienced developers and professionals.",
    icon: "users" as const,
  },
  {
    title: "Career Development",
    description: "Continuous learning and skill enhancement opportunities.",
    icon: "rocket" as const,
  },
];

export const jobOpenings = [
  {
    id: "full-stack-developer",
    position: "Full Stack Developer",
    experience: "2+ Years",
    location: "Remote / Hybrid",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Git"],
    description: "Develop and maintain scalable web applications, APIs, and enterprise software solutions.",
  },
  {
    id: "react-next-developer",
    position: "React & Next.js Developer",
    experience: "1+ Years",
    location: "Remote / Hybrid",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    description: "Build modern, responsive, and high-performance user interfaces and web applications.",
  },
  {
    id: "frontend-developer",
    position: "Frontend Developer",
    experience: "1+ Years",
    location: "Remote / Hybrid",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    description: "Create beautiful user experiences and responsive frontend applications.",
  },
  {
    id: "backend-developer",
    position: "Backend Developer",
    experience: "2+ Years",
    location: "Remote / Hybrid",
    skills: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "REST APIs"],
    description: "Design and develop secure, scalable backend systems and APIs.",
  },
  {
    id: "python-developer",
    position: "Python Developer",
    experience: "2+ Years",
    location: "Remote / Hybrid",
    skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "API Development"],
    description: "Build backend services, APIs, automation tools, and scalable applications.",
  },
  {
    id: "ai-engineer",
    position: "AI Engineer",
    experience: "1+ Years",
    location: "Remote / Hybrid",
    skills: ["Python", "LLMs", "OpenAI APIs", "LangChain", "Vector Databases", "Machine Learning"],
    description: "Develop AI-powered applications, automation systems, chatbots, and intelligent solutions.",
  },
];

export const applicationSteps = [
  {
    step: "01",
    title: "Select Position",
    description: "Choose a suitable position from our open list.",
  },
  {
    step: "02",
    title: "Prepare Assets",
    description: "Prepare your updated resume and portfolio links.",
  },
  {
    step: "03",
    title: "Send Application",
    description: "Send your resume with the job title in the subject line to contact@magnivel.com.",
  },
  {
    step: "04",
    title: "Evaluation",
    description: "Our team will review your application and contact shortlisted candidates for interviews.",
  },
];

