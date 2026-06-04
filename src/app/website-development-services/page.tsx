import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Website Development Services | Magnivel Technologies",
  description: "Magnivel Technologies delivers high-performance website development services. Custom CMS, enterprise web portals, corporate sites, optimized for speed & conversion.",
  keywords: ["website development services", "custom corporate website", "enterprise web portal development", "Next.js web developer", "headless CMS website"],
  alternates: {
    canonical: "https://magnivel.com/website-development-services",
  },
};

const benefits = [
  {
    title: "Core Web Vitals Optimized",
    desc: "We target perfect Lighthouse scores, ensuring immediate loads, no layout shifts, and search ranking lifts.",
    icon: "zap",
  },
  {
    title: "Conversion-Focused UI",
    desc: "Every button placement, contact form layout, and visual asset is positioned to increase qualified lead capture.",
    icon: "target",
  },
  {
    title: "Scalable Architecture",
    desc: "Built using clean React, Next.js, and lightweight Tailwind layers, making updates fast and secure.",
    icon: "layers",
  },
];

const features = [
  { title: "SEO Friendly Structure", desc: "Built with semantic HTML tags, dynamic robots configuration, and structured sitemap generation." },
  { title: "Responsive Layouts", desc: "Perfect viewing across screens from 320px smartphones up to massive 4K desktop screens." },
  { title: "Custom Content Management", desc: "Integrate Sanity, Strapi, or customized database dashboards for easy text edits without developers." },
  { title: "Secure Contact Forms", desc: "Anti-spam validation, client region filters, email triggers, and leads database storage." },
  { title: "Web Vitals Monitoring", desc: "Automated logging of Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) in production." },
  { title: "HTTPS & Secure Defaults", desc: "SSL keys configuration, strict HTTP header controls, and cloud hosting backups." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify brand goals, site architecture, page sections, integrations, and keyword goals." },
  { step: 2, title: "UI/UX Mockups", desc: "Design clean wireframes and visual UI mockups highlighting brand values." },
  { step: 3, title: "Front & Backend Build", desc: "Develop interactive screens with Next.js and plug in database/CMS systems." },
  { step: 4, title: "SEO & Speed Tuneup", desc: "Optimize images, configure canonical links, inject schemas, and test responsiveness." },
  { step: 5, title: "Deployment & Support", desc: "Configure custom domains, launch sitemaps, monitor Core Web Vitals, and support growth." },
];

const faqs = [
  {
    question: "What is your website development timeline?",
    answer: "A standard custom corporate website takes 3 to 6 weeks from initial wireframes to launch. More complex portals with user portals may take 6 to 10 weeks.",
  },
  {
    question: "Do you build custom CMS solutions?",
    answer: "Yes, we integrate modern headless CMS options like Sanity or Strapi, and build tailored database panels using Postgres and Prisma so your team can easily update content.",
  },
  {
    question: "Are your websites responsive?",
    answer: "Absolutely. We test on screens ranging from 320px mobile viewports up to large desktop screens, guaranteeing no horizontal scrollbars or overlapping text.",
  },
];

export default function WebsiteServicesPage() {
  return (
    <ServicePageTemplate
      title="High-Performance Website Development Services"
      eyebrow="Web Engineering"
      description="We design and build clean, conversion-focused websites and portals. Built using React & Next.js for lightning-fast speeds and optimized for organic search rankings."
      overview="In today's digital landscape, a slow website is a lost customer. Magnivel Technologies builds customized corporate websites, B2B portals, and marketing platforms that act as organic sales funnels. We focus on lightweight codebases, optimal SEO architectures, and secure server-side logic so your site ranks higher and loads instantly."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
