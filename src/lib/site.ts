export const site = {
  name: "Magnivel Technologies",
  url: "https://magnivel.com",
  email: "contact@magnivel.com",
  phone: "+91 00000 00000",
  tagline: "Transforming ideas into powerful digital solutions",
  description:
    "Magnivel Technologies builds scalable websites, mobile apps, AI-powered platforms, cloud systems, and custom software for businesses worldwide.",
  socials: {
    linkedin: "https://www.linkedin.com/company/magnivel-technologies",
    instagram: "https://www.instagram.com/magniveltechnologies",
  },
};

export const services = [
  {
    title: "Web Development",
    icon: "globe" as const,
    description:
      "Custom business websites, portals, and enterprise applications built for performance, SEO, and qualified lead generation.",
    features: ["SEO-ready architecture", "Core Web Vitals optimization", "Responsive UI", "Lead capture flows", "CMS-friendly structure"],
    benefits:
      "Launch a credible web presence that supports organic search, paid campaigns, and sales outreach with measurable ROI.",
  },
  {
    title: "Mobile App Development",
    icon: "smartphone" as const,
    description:
      "Android, iOS, and cross-platform applications for customer engagement, internal tools, and mobile-first workflows.",
    features: ["Cross-platform builds", "Offline-ready flows", "Push notifications", "Secure authentication", "App Store support"],
    benefits:
      "Bring your service closer to users with intuitive mobile access that improves engagement and retention.",
  },
  {
    title: "AI & Automation",
    icon: "sparkles" as const,
    description:
      "AI agents, chatbots, workflow automation, RAG systems, document intelligence, and business insight tools.",
    features: ["AI chatbots", "Workflow automation", "Document processing", "Business intelligence", "RAG systems"],
    benefits:
      "Apply AI where it saves time, improves service quality, and creates practical competitive advantage.",
  },
  {
    title: "Custom Software Development",
    icon: "code" as const,
    description:
      "Tailor-made software solutions for unique business processes, internal operations, and enterprise workflows.",
    features: ["Requirements discovery", "Role-based access", "API integrations", "Data migration", "Long-term maintenance"],
    benefits:
      "Replace manual work with reliable software that matches your actual business process instead of forcing compromise.",
  },
  {
    title: "E-Commerce Solutions",
    icon: "layers" as const,
    description:
      "Online stores, marketplaces, checkout systems, and secure payment integrations designed to convert.",
    features: ["Product catalogs", "Secure payments", "Inventory workflows", "Order dashboards", "Performance tuning"],
    benefits:
      "Launch a reliable commerce experience that makes buying simple and operations manageable.",
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud" as const,
    description:
      "Scalable cloud infrastructure, CI/CD pipelines, monitoring, and deployment systems for growing products.",
    features: ["Cloud deployment", "CI/CD automation", "Docker environments", "Monitoring setup", "Scalable architecture"],
    benefits:
      "Keep your application fast, secure, observable, and ready for traffic growth.",
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
  "Under $350",
  "$350 - $750",
  "$750 - $1,500",
  "$1,500 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Let's Discuss",
];

export const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "Custom Software Development",
  "E-Commerce Solutions",
  "Cloud & DevOps",
];

export const projects = [
  {
    title: "B2B Lead Generation Platform",
    category: "Web Development",
    description:
      "A conversion-focused agency website with SEO landing pages, intelligent lead capture, and analytics. Qualified inquiries increased by 3x.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Enterprise Operations Dashboard",
    category: "Custom Software",
    description:
      "Role-based operations platform for tracking customers, workflows, and team performance with automated reporting. Manual work dropped by 60%.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "AI-Powered Support System",
    category: "AI & Automation",
    description:
      "Knowledge-assisted support platform with AI routing, response drafting, and sentiment analysis. Response times dropped by 75%.",
    stack: ["Next.js", "OpenAI", "Python", "AWS"],
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS",
    description:
      "Subscription-based collaboration platform with billing, dashboards, analytics, and scalable tenant architecture.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Healthcare Appointment System",
    category: "Custom Software",
    description:
      "Secure appointment scheduling and telemedicine workflow with patient portals, reminders, and admin controls.",
    stack: ["React", "Node.js", "WebRTC", "MongoDB"],
  },
  {
    title: "E-Commerce Mobile App",
    category: "Mobile App Development",
    description:
      "Cross-platform shopping app with recommendations, real-time inventory, push notifications, and streamlined checkout.",
    stack: ["React Native", "Node.js", "Stripe", "Firebase"],
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
    title: "Discovery",
    description: "Deep-dive into your business goals, users, technical requirements, and success metrics.",
    icon: "search" as const,
  },
  {
    step: 2,
    title: "Strategy",
    description: "Define architecture, technology stack, roadmap, and delivery milestones.",
    icon: "target" as const,
  },
  {
    step: 3,
    title: "Design",
    description: "Craft intuitive UI/UX with wireframes, prototypes, and polished visual systems.",
    icon: "palette" as const,
  },
  {
    step: 4,
    title: "Development",
    description: "Build in agile sprints with clean code, scalable architecture, and regular demos.",
    icon: "code" as const,
  },
  {
    step: 5,
    title: "Testing",
    description: "Rigorous QA across performance, security, responsiveness, and cross-device behavior.",
    icon: "shield" as const,
  },
  {
    step: 6,
    title: "Deployment",
    description: "Launch with CI/CD pipelines, monitoring, analytics, and production hardening.",
    icon: "rocket" as const,
  },
  {
    step: 7,
    title: "Support",
    description: "Ongoing maintenance, feature enhancements, and proactive scalability planning.",
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
    title: "AI & Machine Learning Solutions",
    href: "/ai-chatbot-development",
    icon: "brain" as const,
    description: "Intelligent agents, RAG systems, predictive models, and workflow automation powered by AI.",
  },
  {
    title: "Web Application Development",
    href: "/website-development-services",
    icon: "globe" as const,
    description: "High-performance web platforms, portals, and SaaS interfaces built for growth.",
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app-development",
    icon: "smartphone" as const,
    description: "Native and cross-platform iOS & Android apps with seamless user experiences.",
  },
  {
    title: "SaaS Product Development",
    href: "/saas-development",
    icon: "layers" as const,
    description: "Multi-tenant cloud platforms with subscription billing and team collaboration.",
  },
  {
    title: "Cloud & DevOps Services",
    href: "/aws-development",
    icon: "cloud" as const,
    description: "AWS infrastructure, CI/CD pipelines, containerization, and production monitoring.",
  },
  {
    title: "UI/UX Design",
    href: "/ui-ux-design-services",
    icon: "palette" as const,
    description: "Premium interface design, design systems, and conversion-focused user experiences.",
  },
  {
    title: "API Development & Integration",
    href: "/nodejs-development",
    icon: "server" as const,
    description: "RESTful APIs, GraphQL endpoints, third-party integrations, and microservices.",
  },
];

export const whyChoose = [
  { title: "Fast Development", emoji: "⚡", description: "Agile sprints and rapid prototyping get your product to market faster without sacrificing quality.", icon: "zap" as const },
  { title: "AI-Powered Innovation", emoji: "🤖", description: "Cutting-edge LLMs, agents, and automation woven into every solution we build.", icon: "brain" as const },
  { title: "Enterprise Security", emoji: "🔒", description: "Encrypted data, secure auth, compliance-ready architecture, and NDA protection.", icon: "shield" as const },
  { title: "Cloud-Native Architecture", emoji: "☁️", description: "Scalable, resilient infrastructure designed for global traffic and zero-downtime deploys.", icon: "cloud" as const },
  { title: "Scalable Solutions", emoji: "📈", description: "Architecture that grows with your business from MVP to enterprise scale.", icon: "trending-up" as const },
  { title: "Global Support", emoji: "🌍", description: "Serving clients across India, North America, Europe, UAE, and Southeast Asia.", icon: "globe" as const },
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
