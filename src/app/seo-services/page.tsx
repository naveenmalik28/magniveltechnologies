import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Professional SEO Services | Magnivel Technologies",
  description: "Magnivel Technologies provides technical and on-page SEO services. Core Web Vitals optimizations, structured schema markups, and content growth frameworks.",
  keywords: ["seo services company", "technical seo audit", "core web vitals optimization", "schema markup generator", "on page seo expert"],
  alternates: {
    canonical: "https://magnivel.com/seo-services",
  },
};

const benefits = [
  {
    title: "Rank Higher on Google",
    desc: "We fix site index blocks, improve crawling budgets, and optimize metadata schemas to rank for keywords.",
    icon: "trending-up",
  },
  {
    title: "Lightning-Fast Speed",
    desc: "Technical optimizations directly raise PageSpeed scores, improving user retention and Google rating signals.",
    icon: "zap",
  },
  {
    title: "Qualified Organic Traffic",
    desc: "Target commercial search queries that attract users looking to purchase your services immediately.",
    icon: "target",
  },
];

const features = [
  { title: "Core Web Vitals Remediation", desc: "Optimize LCP, FID, and CLS scores by deferring scripts, optimizing fonts, and caching assets." },
  { title: "Structured Schema Injections", desc: "Incorporate FAQ schema, LocalBusiness schema, Product schema, and Article schema for rich search results." },
  { title: "On-Page Audits & Updates", desc: "Refine headers hierarchy, optimize meta descriptions, set title tags, and adjust image alt tags." },
  { title: "Sitemap & Robots Automation", desc: "Build automated, dynamically generated sitemaps and configure custom crawl directives." },
  { title: "Canonical URL Enforcement", desc: "Prevent duplicate page indexing blocks by enforcing strict canonical link tag headers." },
  { title: "Analytics & Tracking Setup", desc: "Configure Google Search Console, Google Analytics, and monitor rankings indexes." },
];

const process = [
  { step: 1, title: "Technical SEO Audit", desc: "Audit speed benchmarks, check indexing errors, check duplicate paths, and assess site schemas." },
  { step: 2, title: "Keyword Mapping", desc: "Research search volumes, map commercial intent phrases, and identify competitors." },
  { step: 3, title: "Core Code Optimization", desc: "Improve site load times, resize layouts, compress images, and resolve HTML tag errors." },
  { step: 4, title: "Schema Integration", desc: "Inject rich JSON-LD structure scripts across blogs, product lists, and services pages." },
  { step: 5, title: "Tracking & Reporting", desc: "Setup Search Console filters, monitor ranking shifts, and refine search optimization rules." },
];

const faqs = [
  {
    question: "What is Technical SEO?",
    answer: "Technical SEO focuses on server configurations, page speed, code optimization, indexing paths, and database structure. It ensures search engine crawlers can index your website without errors.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer: "Technical SEO fixes (like page speed ups and schema integrations) can show index updates in 2 to 4 weeks. General organic ranking growth typically takes 3 to 6 months.",
  },
  {
    question: "Do you configure Google Search Console?",
    answer: "Yes, as part of our SEO service line, we configure Search Console verification, submit your sitemap.xml, check crawl blockages, and resolve mobile usability flags.",
  },
];

export default function SEOServicesPage() {
  return (
    <ServicePageTemplate
      title="Technical & On-Page SEO Services"
      eyebrow="SEO Solutions"
      description="Drive organic conversions. We audit page load speeds, configure structured JSON-LD schemas, resolve crawl errors, and optimize metadata systems."
      overview="Great code is useless if search engines cannot find it. Magnivel Technologies provides technical SEO services that match Google's latest indexing requirements. We clean duplicate paths, accelerate page loading, configure rich snippet schemas, and submit indexing maps so your brand gets noticed."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
