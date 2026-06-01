export const site = {
  name: "Magnivel Technologies",
  url: "https://magnivel.com",
  email: "contact@magnivel.com",
  phone: "+91 00000 00000",
  tagline: "Building AI-Powered Websites, Applications & SaaS Platforms",
  description:
    "We help startups, businesses and enterprises build scalable digital products that drive growth and innovation.",
};

/* ─── Services ─── */
export const services = [
  {
    title: "Website Development",
    icon: "globe" as const,
    description:
      "High-performance, SEO-optimized websites designed to convert visitors into qualified leads and establish market credibility.",
    features: [
      "SEO-ready architecture",
      "CMS-friendly structure",
      "Core Web Vitals optimization",
      "Conversion-focused design",
      "Mobile-first responsive",
    ],
    benefits:
      "Launch a credible web presence that supports paid ads, organic search, and sales outreach with measurable ROI.",
  },
  {
    title: "Web Application Development",
    icon: "code" as const,
    description:
      "Secure, scalable web applications for operations, customer portals, and complex business workflows.",
    features: [
      "Role-based access control",
      "Real-time data sync",
      "Third-party API integrations",
      "Production-grade security",
      "Automated testing",
    ],
    benefits:
      "Replace manual processes with reliable software that your team can use every day, reducing costs and errors.",
  },
  {
    title: "Mobile App Development",
    icon: "smartphone" as const,
    description:
      "Native and cross-platform mobile experiences for customer engagement, internal tools, and on-the-go productivity.",
    features: [
      "Cross-platform development",
      "Offline-first architecture",
      "Push notifications",
      "Biometric authentication",
      "App Store optimization",
    ],
    benefits:
      "Bring your service closer to users with intuitive mobile access that drives engagement and retention.",
  },
  {
    title: "SaaS Development",
    icon: "layers" as const,
    description:
      "Full-stack SaaS platforms with multi-tenancy, subscriptions, analytics dashboards, and scalable infrastructure.",
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Usage analytics",
      "Admin dashboards",
      "API-first design",
    ],
    benefits:
      "Move from idea to recurring-revenue product with a maintainable, scalable foundation built for growth.",
  },
  {
    title: "AI Solutions",
    icon: "sparkles" as const,
    description:
      "Practical AI integrations for intelligent automation, knowledge systems, conversational interfaces, and data-driven insights.",
    features: [
      "AI-powered chatbots",
      "Workflow automation",
      "Document processing",
      "Predictive analytics",
      "Custom model training",
    ],
    benefits:
      "Use AI where it saves time, improves service quality, and creates measurable competitive advantage.",
  },
  {
    title: "Custom Software Development",
    icon: "wrench" as const,
    description:
      "Bespoke software solutions tailored to your unique business processes that off-the-shelf tools cannot accommodate.",
    features: [
      "Requirements discovery",
      "Custom architecture design",
      "Legacy system integration",
      "Data migration",
      "Long-term maintenance",
    ],
    benefits:
      "Own software shaped around your actual business needs, not a generic template that forces compromise.",
  },
];

/* ─── Technologies ─── */
export const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Redis",
  "Prisma",
];

export const techCategories = [
  {
    name: "Frontend",
    icon: "monitor" as const,
    description:
      "Modern frameworks for building responsive, high-performance user interfaces.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    name: "Backend",
    icon: "server" as const,
    description:
      "Scalable server-side technologies for robust APIs and services.",
    items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  },
  {
    name: "Database",
    icon: "database" as const,
    description:
      "Reliable data storage solutions for every scale and use case.",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase"],
  },
  {
    name: "Cloud & DevOps",
    icon: "cloud" as const,
    description:
      "Enterprise-grade infrastructure for deployment and scaling.",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
  },
  {
    name: "AI & ML",
    icon: "brain" as const,
    description:
      "Cutting-edge AI technologies for intelligent automation.",
    items: ["OpenAI", "LangChain", "Pinecone", "TensorFlow", "Hugging Face"],
  },
];

/* ─── Form Options (must match validation.ts) ─── */
export const budgets = [
  "Under Rs 50,000",
  "Rs 50,000 - Rs 1,00,000",
  "Rs 1,00,000 - Rs 5,00,000",
  "Above Rs 5,00,000",
];

export const serviceOptions = [
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "SaaS Development",
  "AI Integration",
  "Custom Software Development",
];

/* ─── Portfolio Projects ─── */
export const projects = [
  {
    title: "B2B Lead Generation Platform",
    category: "Website Development",
    description:
      "A high-conversion agency website with SEO-optimized landing pages, intelligent lead capture, and real-time analytics dashboard. Achieved 3x increase in qualified leads.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Enterprise Operations Dashboard",
    category: "Web Application",
    description:
      "Role-based operations platform for tracking customers, workflows, and team performance with automated reporting. Reduced manual work by 60%.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "AI-Powered Support System",
    category: "AI Solutions",
    description:
      "Knowledge-assisted support platform with AI routing, automated response drafting, and sentiment analysis. Cut response times by 75%.",
    stack: ["Next.js", "OpenAI", "Python", "AWS"],
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS Development",
    description:
      "Subscription-based project management SaaS with real-time collaboration, billing integration, and analytics. Scaled to 500+ active teams.",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Healthcare Appointment System",
    category: "Custom Software",
    description:
      "HIPAA-compliant appointment scheduling and telemedicine platform with patient portals, video consultations, and automated reminders.",
    stack: ["React", "Node.js", "WebRTC", "MongoDB"],
  },
  {
    title: "E-Commerce Mobile App",
    category: "Mobile App Development",
    description:
      "Cross-platform shopping app with personalized recommendations, real-time inventory, push notifications, and seamless checkout flow.",
    stack: ["React Native", "Node.js", "Stripe", "Firebase"],
  },
];

/* ─── Testimonials ─── */
export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    company: "TechVentures India",
    text: "Magnivel Technologies transformed our digital presence completely. Their team delivered a stunning SaaS platform that exceeded our expectations in both design and performance. The attention to detail was remarkable.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Product",
    company: "DataFlow Systems",
    text: "Working with Magnivel was a game-changer. They built our operations dashboard in record time with exceptional quality. The AI integration they implemented saved our team 20+ hours per week.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "CTO",
    company: "CloudNine Labs",
    text: "The technical expertise at Magnivel is outstanding. They architected our multi-tenant SaaS from scratch and it scaled beautifully. Their code quality and documentation set a new standard for our team.",
    rating: 5,
  },
];

/* ─── FAQ ─── */
export const faqs = [
  {
    question: "How long does it take to build a website or application?",
    answer:
      "Project timelines depend on scope and complexity. A standard business website takes 2-4 weeks, web applications 4-8 weeks, and full SaaS platforms 8-16 weeks. We provide a detailed timeline and milestones during the discovery phase so you always know what to expect.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with five key phases: Discovery (requirements gathering), Design (UI/UX prototyping), Development (iterative coding sprints), Testing (QA and performance optimization), and Launch (deployment and monitoring). You receive regular updates and demos throughout.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer flexible maintenance and support plans that include bug fixes, security updates, performance monitoring, feature enhancements, and 24/7 emergency support. We treat every project as a long-term partnership.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, and AWS. We also work with MongoDB, Redis, Docker, and AI technologies like OpenAI and LangChain. We choose the best tools for each project\u2019s specific requirements.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs vary based on scope, features, and complexity. Business websites start from \u20B950,000, web applications from \u20B91,00,000, and SaaS platforms from \u20B95,00,000. We provide detailed, transparent quotes after understanding your requirements during a free consultation.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "Yes, we offer flexible engagement models. We can work as your dedicated development team, augment your existing team with specialized skills, or handle specific project phases. We adapt to your workflow and communication preferences.",
  },
  {
    question: "Do you sign NDAs and ensure data security?",
    answer:
      "Yes, we sign NDAs before every engagement and follow industry-standard security practices. All code is developed in private repositories, sensitive data is encrypted, and we follow OWASP security guidelines. Your intellectual property is always protected.",
  },
];

/* ─── Development Process ─── */
export const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Deep dive into your business goals, target audience, and technical requirements through structured consultations.",
    icon: "search" as const,
  },
  {
    step: 2,
    title: "Design",
    description:
      "Create wireframes, prototypes, and high-fidelity designs that align with your brand and optimize user experience.",
    icon: "palette" as const,
  },
  {
    step: 3,
    title: "Develop",
    description:
      "Build your product using modern technologies with clean architecture, automated testing, and iterative reviews.",
    icon: "code" as const,
  },
  {
    step: 4,
    title: "Test & Optimize",
    description:
      "Rigorous quality assurance, performance optimization, security audits, and cross-device compatibility testing.",
    icon: "shield" as const,
  },
  {
    step: 5,
    title: "Launch & Scale",
    description:
      "Deploy to production with monitoring, analytics, and ongoing support to ensure continuous growth and stability.",
    icon: "rocket" as const,
  },
];

/* ─── Stats ─── */
export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
];

/* ─── Trusted By ─── */
export const trustedBy = [
  "TechVentures",
  "DataFlow Systems",
  "CloudNine Labs",
  "Artisan Digital",
  "ScaleUp AI",
  "NovaByte",
];
