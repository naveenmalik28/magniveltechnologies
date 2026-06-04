export interface BlogPost {
  slug: string;
  title: string;
  category: "ai" | "web-development" | "mobile-apps" | "software-development" | "saas" | "startups";
  categoryLabel: string;
  tags: string[];
  publishedAt: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  readTime: string;
}

export const blogCategories = [
  { slug: "ai", label: "Artificial Intelligence" },
  { slug: "web-development", label: "Web Development" },
  { slug: "mobile-apps", label: "Mobile Apps" },
  { slug: "software-development", label: "Software Development" },
  { slug: "saas", label: "SaaS Platforms" },
  { slug: "startups", label: "Startups & MVPs" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-secure-rag-chatbot-gemini",
    title: "Building a Secure RAG Chatbot with Gemini 1.5 &pgvector",
    category: "ai",
    categoryLabel: "Artificial Intelligence",
    tags: ["Gemini API", "Vector Databases", "pgvector", "RAG", "Python"],
    publishedAt: "June 02, 2026",
    excerpt: "Learn how to build a Retrieval-Augmented Generation (RAG) chatbot using the Gemini API and pgvector that securely indexes and queries private PDFs without data leaks.",
    readTime: "6 min read",
    author: {
      name: "Naveen Malik",
      role: "Engineering Lead",
      avatar: "NM",
    },
    content: `
      <h2>The Problem with Standard Large Language Models</h2>
      <p>Standard LLM models are trained on public datasets and lack context about your specific business operations. If you ask them private questions, they might hallucinate answers. Retrieval-Augmented Generation (RAG) fixes this by supplying matching context from a secure private database before generating replies.</p>
      
      <h2>Step 1: Chunking the Knowledge Base</h2>
      <p>Large documents must be divided into smaller paragraphs or 'chunks' of text. We recommend chunk sizes of 500 to 1000 characters with a 10% overlap to preserve semantic context across chunk boundaries.</p>
      
      <h2>Step 2: Creating Embeddings</h2>
      <p>We convert each text chunk into a high-dimensional vector (embedding) using Google's embedding-001 model or OpenAI's text-embedding-3-small. These embeddings are stored inside a PostgreSQL database with the pgvector extension activated.</p>
      
      <h2>Step 3: Query Routing & LLM Call</h2>
      <p>When a user asks a question, we convert their query into an embedding, perform a cosine similarity search in the vector database to retrieve the top 3 matching chunks, and pass those chunks as context along with the user's prompt to Gemini 1.5 Flash.</p>
      
      <h2>Summary and Security Best Practices</h2>
      <p>Ensure you encrypt your PostgreSQL database at rest, enforce rate limits on your API endpoints, and establish user authentication token blocks to protect knowledge vectors from public reads.</p>
    `,
  },
  {
    slug: "optimizing-nextjs-core-web-vitals",
    title: "Optimizing Next.js for Perfect Lighthouse Web Vitals",
    category: "web-development",
    categoryLabel: "Web Development",
    tags: ["Next.js", "Core Web Vitals", "Lighthouse", "SEO", "Image Optimization"],
    publishedAt: "May 28, 2026",
    excerpt: "A step-by-step checklist to optimize Largest Contentful Paint (LCP) and eliminate Cumulative Layout Shift (CLS) on Next.js marketing and corporate websites.",
    readTime: "5 min read",
    author: {
      name: "Amit Patel",
      role: "Frontend Lead",
      avatar: "AP",
    },
    content: `
      <h2>Why Web Vitals Matter for SEO</h2>
      <p>Google prioritizes user experience. If your website takes longer than 2.5 seconds to render the main header (LCP) or shifts layout columns during loading (CLS), search engine crawlers will lower your organic ranking scores.</p>
      
      <h2>1. Enforce Image Dimensions</h2>
      <p>Never render images without explicit width and height tags. Next.js provides the <code>&lt;Image /&gt;</code> component which automatically calculates dimensions and prevents Cumulative Layout Shift.</p>
      
      <h2>2. Optimize Google Fonts Loading</h2>
      <p>Configure Next.js Google Fonts setup inside your <code>layout.tsx</code>. This preloads fonts and matches fallback sans-serif variables, eliminating FOIT (Flash of Unstyled Text) shifts.</p>
      
      <h2>3. Defer Script Loading</h2>
      <p>Move third-party scripts (like analytics trackers or chat widgets) into Next.js <code>&lt;Script /&gt;</code> with the strategy set to <code>lazyOnload</code>. This frees the main execution thread to render the UI instantly.</p>
    `,
  },
  {
    slug: "reducing-stripe-churn-saas-webhooks",
    title: "Reducing SaaS Churn with Stripe Payment Webhooks",
    category: "saas",
    categoryLabel: "SaaS Platforms",
    tags: ["Stripe API", "Webhooks", "SaaS Billing", "Node.js", "Prisma"],
    publishedAt: "May 22, 2026",
    excerpt: "Learn how to implement Stripe webhook listeners in Node.js to capture card failures, send automated email alerts, and reduce SaaS churn automatically.",
    readTime: "7 min read",
    author: {
      name: "Sarah Mitchell",
      role: "Product Owner",
      avatar: "SM",
    },
    content: `
      <h2>The Danger of Silent Card Failures</h2>
      <p>Passive churn occurs when user subscriptions expire due to expired credit cards, failed payments, or insufficient funds. Setting up robust Stripe Webhook listeners allows you to detect these failures instantly and trigger recovery workflows.</p>
      
      <h2>1. Registering the Webhook Endpoint</h2>
      <p>Configure an API endpoint in your backend, e.g., <code>/api/webhooks/stripe</code>. Register this URL in your Stripe developer dashboard, selecting events like <code>invoice.payment_failed</code> and <code>customer.subscription.deleted</code>.</p>
      
      <h2>2. Verifying the Signature</h2>
      <p>Always verify the Stripe signature header using your webhook signing secret. This ensures incoming requests actually originate from Stripe and prevents malicious database updates.</p>
      
      <h2>3. Triggering Automated Dunning Emails</h2>
      <p>When <code>invoice.payment_failed</code> is received, check the database for the matching workspace ID, flag the account status as 'payment_due', and send a direct link to update credit card details safely.</p>
    `,
  },
  {
    slug: "react-native-vs-flutter-in-2026",
    title: "React Native vs Flutter: Which is Better for Startup MVPs?",
    category: "mobile-apps",
    categoryLabel: "Mobile Apps",
    tags: ["React Native", "Flutter", "Startup MVP", "Cross-Platform", "Mobile App"],
    publishedAt: "May 15, 2026",
    excerpt: "Evaluate developer speed, styling flexibility, performance benchmarks, and library ecosystems to choose the best hybrid mobile framework in 2026.",
    readTime: "5 min read",
    author: {
      name: "Rajesh Kumar",
      role: "Mobile Specialist",
      avatar: "RK",
    },
    content: `
      <h2>The Battle of Hybrid Frameworks</h2>
      <p>Startups need to build iOS and Android apps fast. Rather than managing separate Swift and Kotlin codebases, React Native and Flutter compile single codebases into native packages. Here is how they compare:</p>
      
      <h2>1. Development Speed & Ecosystem</h2>
      <p>React Native is built on React, allowing web developers to transition to mobile coding instantly. Flutter uses Dart, which has a steeper learning curve but offers complete UI customization widgets built-in.</p>
      
      <h2>2. Performance & Access to APIs</h2>
      <p>Flutter compiles directly to native ARM code, making animations slightly smoother. React Native leverages native platform threads, offering better integration with third-party libraries and native operating components.</p>
      
      <h2>Our Recommendation</h2>
      <p>If your team already knows React and Next.js, select React Native to share styling structures and utilities. If you are building graphic-heavy interfaces requiring custom canvas drawings, Flutter is an excellent alternative.</p>
    `,
  },
];
