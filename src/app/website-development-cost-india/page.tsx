import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Website Development Cost in India | Magnivel Technologies",
  description: "Find website development costs in India. Educational guide on pricing factors, CMS choices, e-commerce integration, and budget ranges for startups & enterprises.",
  keywords: ["website development cost india", "web design price india", "corporate website budget", "ecommerce store cost", "custom website pricing"],
  alternates: {
    canonical: "https://magnivel.com/website-development-cost-india",
  },
};

const benefits = [
  {
    title: "Transparent Cost Breakdown",
    desc: "We detail design rates, development hours, domain/hosting variables, and ongoing support parameters explicitly.",
    icon: "zap",
  },
  {
    title: "Custom vs Template ROI",
    desc: "Understand when templates are sufficient and when custom Next.js builds are necessary to capture organic leads.",
    icon: "target",
  },
  {
    title: "Flexible Budget Tiers",
    desc: "From startup landing pages to extensive enterprise portals, we scale our delivery phases to match budgets.",
    icon: "layers",
  },
];

const features = [
  { title: "Landing Page Budgets", desc: "For single-product launches or campaign pages. Typical budgets: INR 15,000 - INR 35,000." },
  { title: "Corporate Website Tiers", desc: "5-15 pages with clean design, database setup, and contact widgets: INR 45,000 - INR 1,20,000." },
  { title: "E-Commerce Store Budgets", desc: "Catalog integration, secure payments setup, cart flows: INR 75,000 - INR 2,50,000." },
  { title: "Custom Web Portals", desc: "Bespoke user portals, dashboards, APIs, role-based workflows: INR 2,00,000 - INR 5,00,000+." },
  { title: "Hosting & SSL Scope", desc: "Secure hosting recommendations, free SSL installation, and Cloudflare config support." },
  { title: "Ongoing Maintenance Costs", desc: "Support plans covering bug fixes, speed checkups, and copy updates starting at INR 5,000/month." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Identify number of pages, CMS preferences, integrations, and branding goals." },
  { step: 2, title: "Quote Proposal", desc: "Provide a detailed commercial quote detailing modules, timelines, and payment stages." },
  { step: 3, title: "Wireframe Drafting", desc: "Figma wireframe creation to align on visual sections before coding begins." },
  { step: 4, title: "Beta Review", desc: "Publish to a private staging domain for client review, speed testing, and final modifications." },
  { step: 5, title: "Launch & SEO Hand", desc: "Go live, register the sitemap in Search Console, and verify Core Web Vitals parameters." },
];

const faqs = [
  {
    question: "Why do website costs vary so much in India?",
    answer: "Costs depend on whether you use basic pre-made WordPress templates or custom React/Next.js codebases. Templates are cheaper but slower, while custom builds offer fast speeds, clean code, and custom workflows.",
  },
  {
    question: "Are there hidden costs after launching the site?",
    answer: "No hidden costs. Standard ongoing costs include annual domain name registration, cloud hosting fees, and optional technical support contracts.",
  },
  {
    question: "Do you offer a payment installment plan?",
    answer: "Yes, our standard payment terms are structured into milestones: 40% upfront deposit, 40% upon beta staging completion, and 20% upon final go-live approval.",
  },
];

export default function WebsiteCostIndiaPage() {
  return (
    <ServicePageTemplate
      title="Website Development Cost in India"
      eyebrow="Cost Guide"
      description="Estimate your web design budget. Explore typical pricing for landing pages, corporate portals, e-commerce stores, and custom software integrations in India."
      overview="Understanding the costs involved in web development ensures project success. This guide covers typical Indian market budgets, design parameters, database integrations, and support models, helping you plan your launch budget with complete clarity."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
      ctaTitle="Want an exact price estimate?"
      ctaDesc="Use our interactive Website Cost Calculator tool to estimate prices in real-time or get a free custom quote."
    />
  );
}
