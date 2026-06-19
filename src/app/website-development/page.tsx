import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Website Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides high-performance custom website development services, headless CMS integrations, and search-optimized web platforms for businesses globally.",
  keywords: ["website development", "corporate website development", "custom CMS integration", "Next.js web developer", "responsive business website", "web engineering"],
  alternates: {
    canonical: "https://magnivel.com/website-development",
  },
};

const benefits = [
  {
    title: "Optimized Search Visibility and Performance",
    desc: "We engineer website structures designed to rank high in organic search results. By ensuring clean semantic HTML tags, dynamic sitemap creation, and optimizing Core Web Vitals to achieve near-perfect Lighthouse performance scores, we help your business gain consistent visibility. A faster loading site translates directly to lower bounce rates and higher user retention, allowing search engines to index your pages efficiently and place them in front of potential clients.",
    icon: "trending-up",
  },
  {
    title: "Tailored Content Management Options",
    desc: "We integrate flexible content management solutions to give your team direct control over web copy, blog articles, and resource libraries. Instead of locking you into rigid page templates, we configure headless CMS tools like Sanity, Strapi, or secure PostgreSQL-backed admin panels. This separation of frontend layout from database content allows your marketing division to publish new pages and edit text quickly without requiring software developers to rewrite code.",
    icon: "layers",
  },
  {
    title: "Seamless Conversion-Rate Optimization",
    desc: "Every website we deploy is built to serve as a functional lead-capture funnel. We design layout flows, touch target dimensions, and input fields to reduce user friction. Form submissions are verified client-side to prevent spam, and secure backend routing directs leads directly into your sales team's database or CRM. By focusing on accessible UI patterns and clean button placements, we turn passive site visitors into qualified business leads.",
    icon: "target",
  },
];

const features = [
  {
    title: "Semantic HTML Markup",
    desc: "We write clean, valid semantic markup using appropriate structural elements (header, nav, main, article, section, footer). This guarantees accessibility for assistive screen readers and improves crawlability for search engine indexes.",
  },
  {
    title: "Responsive Interface Engineering",
    desc: "Our frontend layouts adapt dynamically across device screens from 320px mobile viewport widths up to massive 4K desktop screens. We avoid overlapping columns and horizontal scrolling issues through careful CSS styling rules.",
  },
  {
    title: "Secure Forms & CRM Routing",
    desc: "Web forms are built with server-side field validation, spam protection keys, and dynamic API endpoints that format and route user inquiries directly into your internal databases, spreadsheets, or third-party CRM platforms.",
  },
  {
    title: "Statically Optimized Media Assets",
    desc: "We implement next-generation image formats (AVIF and WebP), responsive size attributes, and lazy loading strategies to prevent massive images from slowing down page load times or shifting layout columns.",
  },
  {
    title: "Core Web Vitals Monitoring",
    desc: "Our builds are optimized to satisfy Google's real-user metric benchmarks. We specifically target Largest Contentful Paint (LCP) speeds under 2.5 seconds and Cumulative Layout Shift (CLS) values under 0.1.",
  },
  {
    title: "Dynamic Sitemap & Robots Generation",
    desc: "We write automated scripts that rebuild your XML sitemaps and robots.txt rules whenever you add new services or publish articles, ensuring search engine bots index your new content within hours.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We study your business goals, target keywords, site structure requirements, and branding rules to draft a technical blueprint."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We create user journey mockups, wireframes, and design visual prototypes focused on clean usability and interface patterns."
  },
  {
    step: 3,
    title: "Development",
    desc: "Our developers write clean Next.js/React templates and set up your content database or headless CMS boundaries in agile sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We audit the codebase across mobile and desktop devices, running security scans and checking Core Web Vitals performance."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We configure custom domains, set up SSL security, configure CDN caching rules, and launch the website live."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We monitor server response times, patch dependency packages, and provide regular improvements as your services grow."
  }
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Prisma ORM",
  "Sanity CMS",
  "Strapi",
  "Vercel CDN",
];

const faqs = [
  {
    question: "How long does a custom website development project take?",
    answer: "A standard custom corporate website or B2B lead-capture portal takes between 3 to 6 weeks from initial scope analysis to final launch. More complex websites requiring multi-user access levels, internal database dashboard panels, or multi-lingual localization setups typically require 6 to 10 weeks. We provide a detailed project schedule with weekly milestone dates at the start of our engagement so you can track progress in real-time.",
  },
  {
    question: "Can our marketing team update text and blog posts without coding?",
    answer: "Yes. We integrate modern headless content management systems (such as Sanity or Strapi) or build secure database tables with direct web dashboard interfaces. This allows your non-technical team members to write articles, create landing pages, update team bios, and edit pricing details in a simple text editor. The changes go live instantly without modifying the underlying application code.",
  },
  {
    question: "How do you ensure our website loads fast and ranks on Google?",
    answer: "We build using Next.js with static site generation (SSG) to pre-render pages into lightweight HTML, allowing them to load immediately. We optimize images into WebP/AVIF format, enforce script deferral to keep the main browser thread free, and inject structured JSON-LD schemas. These performance techniques ensure your site meets Google's Core Web Vitals criteria, giving you a competitive edge in search rankings.",
  },
];

export default function WebsiteDevPage() {
  return (
    <ServicePageTemplate
      title="High-Performance Website Development Services"
      eyebrow="Web Engineering"
      description="We design and build fast, responsive, and search-optimized websites. Engineered with React and Next.js to load immediately and turn visitors into qualified inquiries."
      overview={`What Do We Do?
Magnivel Technologies designs and builds custom corporate websites, lead-generation portals, marketing websites, and headless CMS integrations. We avoid generic, slow website builders, opting instead to write clean, hand-coded applications built using React and Next.js. Every asset, script, and database call is optimized to load immediately.

Who Do We Help?
We work with growing businesses, professional service providers, B2B agencies, and international companies who require a credible, fast web presence. Our clients typically want to replace slow legacy systems that load poorly on mobile devices, fail to capture leads, and rank poorly on search engine results pages.

How Do We Help?
We replace slow page loads with statically generated Next.js sites that load in under a second. We integrate structured schema markup so search engine crawlers can categorize your services correctly. Finally, we implement custom content management panels so your team can publish blog posts, guides, and landing pages without editing code.

Why Should Clients Trust Us?
We prioritize engineering discipline and business value over marketing templates. We test our websites across multiple viewports, guarantee secure SSL configurations, and provide complete staging access during the build. Our focus is on delivering transparent development and long-term support to help your digital operations scale.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
