import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Mobile App Development Cost Guide | Magnivel Technologies",
  description: "Understand the factors driving mobile app development costs. Learn about platform differences, custom UI, developer rates, and budgeting for iOS & Android apps.",
  keywords: ["mobile app development cost", "app design price", "iOS app budget", "Android development cost", "React Native app pricing"],
  alternates: {
    canonical: "https://magnivel.com/mobile-app-development-cost",
  },
};

const benefits = [
  {
    title: "Avoid Over-Engineering Costs",
    desc: "We help you select between hybrid (React Native) or native frameworks, saving up to 40% in dual app builds.",
    icon: "zap",
  },
  {
    title: "Granular Phase 1 scoping",
    desc: "Define a clean Minimum Viable Product (MVP) containing core user flows to test market traction before scaling.",
    icon: "target",
  },
  {
    title: "Predictable Timelines",
    desc: "Avoid timeline creep. We associate milestones with exact sprint completions and prototype reviews.",
    icon: "clock",
  },
];

const features = [
  { title: "Standard MVP Apps", desc: "User login, profile fields, basic database, list views: USD 5,000 - USD 10,000 (INR 3.5L - 7.5L)." },
  { title: "E-Commerce App Budgets", desc: "Product grids, shopping cart, Stripe payment integration, notifications: USD 8,000 - USD 15,000." },
  { title: "Custom Portal Apps", desc: "Multi-role operations, offline workflows, geo-tracking: USD 12,000 - USD 25,000+." },
  { title: "App Store Publishing Setup", desc: "Apple Developer and Google Play Console setup, assets compilation, review submissions." },
  { title: "API Integration Costs", desc: "Connect databases, email gateways, custom CRM software, and social logs." },
  { title: "Ongoing Mobile Maintenance", desc: "Support plans covering OS upgrades (iOS & Android version patches), bug fixes, starting at USD 350/month." },
];

const process = [
  { step: 1, title: "Feature Scoping", desc: "Clarify user stories, GPS needs, payment endpoints, and target platforms." },
  { step: 2, title: "UI Mockups Handoff", desc: "Design interactive Figma wireframes showing screens and button clicks." },
  { step: 3, title: "Database & API Build", desc: "Code secure backend schemas and hook up JSON endpoints for mobile communication." },
  { step: 4, title: "App Shell Integration", desc: "Develop the hybrid mobile UI, handle offline storage rules, and sync APIs." },
  { step: 5, title: "TestFlight & Publish", desc: "Conduct beta runs with internal users, refine code, and publish on target stores." },
];

const faqs = [
  {
    question: "How much does it cost to build a mobile app?",
    answer: "A standard MVP app ranges from USD 5,000 to USD 10,000. Complex apps with geo-tracking, multi-user portals, or AI integrations typically range from USD 12,000 to USD 25,000+.",
  },
  {
    question: "Is it cheaper to build for iOS or Android first?",
    answer: "Building both using React Native or Flutter is the most cost-effective path, as a single codebase compiles onto both stores, saving up to 40% compared to native Swift and Kotlin coding.",
  },
  {
    question: "What are the ongoing costs of running a mobile app?",
    answer: "Ongoing costs include developer account fees (Apple: $99/year, Google: $25 one-time), cloud hosting/API charges, and technical updates to support new OS versions.",
  },
];

export default function MobileCostPage() {
  return (
    <ServicePageTemplate
      title="Mobile App Development Cost Guide"
      eyebrow="Cost Guide"
      description="Calculate your app budget. Understand price variables across native vs. hybrid frameworks, custom UI designs, database integrations, and store submissions."
      overview="Developing a mobile app is a major business investment. This guide breaks down typical pricing scales for hybrid and native apps, explains backend and API costs, and outlines maintenance requirements to ensure your mobile launch succeeds."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
