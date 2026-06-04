import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "React Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional React & Next.js frontend development services. High-performance dashboards, responsive interfaces, and custom visual assets.",
  keywords: ["react development services", "next.js frontend developer", "responsive ui component", "react state management", "tailwind css developer"],
  alternates: {
    canonical: "https://magnivel.com/react-development",
  },
};

const benefits = [
  {
    title: "Highly Interactive UIs",
    desc: "We write clean, state-driven React components that update instantly without reloading the entire page.",
    icon: "zap",
  },
  {
    title: "Optimal Rendering Speeds",
    desc: "By separating client states and utilizing Next.js Server Components, we keep load times ultra-fast.",
    icon: "trending-up",
  },
  {
    title: "Reusable Design Tokens",
    desc: "We build modular button sets, form inputs, and modal elements to enable fast interface additions.",
    icon: "layers",
  },
];

const features = [
  { title: "Next.js App Router Integration", desc: "Build layouts, handle parallel routes, configure dynamic sitemaps, and optimize indexing." },
  { title: "State Management Setup", desc: "Maintain frontend data parameters using React Context, Redux, or lightweight Zustand packages." },
  { title: "Tailwind CSS Layout Grids", desc: "Create responsive grids and premium animations that display correctly on all devices." },
  { title: "Frictionless API Integrations", desc: "Connect web interfaces to REST or GraphQL backends with loading states and retry protocols." },
  { title: "Web Accessibility (WCAG)", desc: "Build pages with appropriate ARIA tags, color contrasts, and keyboard navigation support." },
  { title: "Performance Benchmarking", desc: "Monitor Web Vitals metrics dynamically to prevent layout shifts or load delays." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Understand dashboard design mockups, API interfaces, user roles, and style guides." },
  { step: 2, title: "Component Planning", desc: "Map reusable buttons, card elements, input layouts, and state structures." },
  { step: 3, title: "UI Coding Sprint", desc: "Write responsive React views using TypeScript and optimize Tailwind classes." },
  { step: 4, title: "API Integration", desc: "Hook up backend services, configure data queries, and handle form states." },
  { step: 5, title: "QA Speed Audit & Deploy", desc: "Audit visual sizing, optimize images, verify Lighthouse ratings, and launch." },
];

const faqs = [
  {
    question: "Do you use React or Next.js?",
    answer: "We use Next.js for most web projects. Next.js is a framework built on top of React that supports server-side rendering (SSR), improving SEO indexing and initial load times.",
  },
  {
    question: "Can you convert Figma files into React code?",
    answer: "Yes, we specialize in converting Figma designs into pixel-perfect, responsive React components using TypeScript and Tailwind CSS.",
  },
  {
    question: "Do you support React Native for mobile?",
    answer: "Yes. We use React Native to compile React-style codebases into native iOS and Android mobile apps, reducing dual app development costs.",
  },
];

export default function ReactTechPage() {
  return (
    <ServicePageTemplate
      title="Bespoke React & Next.js Development Services"
      eyebrow="Engineering Stack"
      description="Build dynamic user experiences. We engineer high-performance frontend interfaces, interactive dashboards, and SaaS templates in React."
      overview="A slow, sluggish dashboard frustrates users and lowers conversion rates. Magnivel Technologies builds optimized React and Next.js applications featuring responsive designs, clean component files, and fast load times."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
