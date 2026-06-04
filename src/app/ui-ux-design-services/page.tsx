import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "UI/UX Design Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional UI/UX design services. Premium Figma prototypes, user flow wireframes, responsive interfaces, and custom design systems.",
  keywords: ["ui/ux design services", "Figma prototype agency", "wireframing service", "responsive design system", "app UI designer"],
  alternates: {
    canonical: "https://magnivel.com/ui-ux-design-services",
  },
};

const benefits = [
  {
    title: "High-Fidelity Figma files",
    desc: "We provide clean, structured Figma files with reusable auto-layout components and design tokens.",
    icon: "palette",
  },
  {
    title: "Optimized Conversions",
    desc: "We structure interfaces based on heatmaps, user behavior analysis, and touch-target standards to drive clicks.",
    icon: "target",
  },
  {
    title: "Frictionless Dev Handoff",
    desc: "Every color, spacing token, font size, and component variation is defined to make frontend translation fast.",
    icon: "zap",
  },
];

const features = [
  { title: "User Persona Research", desc: "Define target profiles, outline typical paths, and identify operational user bottlenecks." },
  { title: "Low-Fidelity Wireframes", desc: "Build grayscale layout drafts to align on screen structures, elements, and page grids." },
  { title: "Interactive Prototypes", desc: "Create clickable Figma flows to simulate actual app actions and review interactions." },
  { title: "Custom Design Systems", desc: "Construct cohesive color boards, fonts scale, button styles, card shapes, and input designs." },
  { title: "Mobile-First Responsiveness", desc: "Design interfaces optimized for 320px screens up to large responsive desktop layouts." },
  { title: "Accessibility Testing", desc: "Audit visual designs against WCAG AA standards, checking contrast ratios and tap boundaries." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Understand platform goals, analyze competitor layouts, and determine layout guidelines." },
  { step: 2, title: "Wireframing", desc: "Map page layouts, button pathways, content blocks, and screen flows." },
  { step: 3, title: "Visual UI Design", desc: "Apply colors, gradients, typography scales, glassmorphism layers, and assets." },
  { step: 4, title: "Clickable Prototyping", desc: "Link screens in Figma to showcase hover states, transitions, and user journeys." },
  { step: 5, title: "Developer Handoff", desc: "Package style parameters, export SVG icons, inspect components, and verify implementation." },
];

const faqs = [
  {
    question: "Do you design websites, mobile apps, or both?",
    answer: "We design both. We build responsive web layouts, SaaS administrator dashboards, custom portals, and mobile app UI systems for iOS and Android.",
  },
  {
    question: "What design tools do you use?",
    answer: "We use Figma as our primary tool. This allows you to view wireframes in real-time, leave comments, and interact with clickable prototypes.",
  },
  {
    question: "Do you provide development after designing?",
    answer: "Yes, Magnivel Technologies is a full-service agency. We seamlessly translate Figma designs into pixel-perfect Next.js, React, and Tailwind codebases.",
  },
];

export default function UIUXServicesPage() {
  return (
    <ServicePageTemplate
      title="Premium UI/UX Design & Prototyping Services"
      eyebrow="UI/UX Design"
      description="Design interfaces that engage. We design high-fidelity Figma mockups, interactive prototypes, and custom style frameworks centered on user experience."
      overview="A premium design establishes immediate credibility. Magnivel Technologies creates clean, modern, and accessible user interfaces. We balance aesthetic elegance with conversion-oriented layouts, delivering design files that are easy for developer teams to code."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
