import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "UI/UX Interface Design Services | Magnivel Technologies",
  description: "Magnivel Technologies delivers custom user interface (UI) and user experience (UX) design services, interactive Figma wireframes, design systems, and usability audits.",
  keywords: ["ui ux design", "figma designer", "user interface design", "wireframes and prototypes", "design system builder", "ux audit"],
  alternates: {
    canonical: "https://magnivel.com/ui-ux-design",
  },
};

const benefits = [
  {
    title: "Reduced User Friction and Higher Retention",
    desc: "Our design process focuses heavily on user workflows. We study how users interact with dashboard menus, settings screens, and contact inputs, identifying points of friction that cause users to abandon tasks. By designing clear layout systems, visible touch targets, and consistent feedback messages, we create interfaces that feel intuitive, lowering customer support requests and raising retention rates.",
    icon: "target",
  },
  {
    title: "Reusable Design Systems for Fast Development",
    desc: "We build structured Figma design systems containing consistent color palettes, typography tokens, buttons, and form inputs. This methodology establishes a premium, unified brand identity across all screens. More importantly, it speeds up front-end coding times, as developers can map Figma tokens directly to CSS classes, preventing visual inconsistencies during code integration.",
    icon: "layers",
  },
  {
    title: "Usability Testing and Interactive Prototypes",
    desc: "We deliver interactive click-through prototypes before writing application code. This allows you to test navigation flows and gather feedback from stakeholders and actual users. Finding and addressing usability problems during the design phase is significantly faster and less expensive than refactoring compiled code later in the development cycle.",
    icon: "zap",
  },
];

const features = [
  {
    title: "User Journey Mapping",
    desc: "We outline all actions and navigation transitions required for users to complete primary goals, minimizing the number of clicks and input fields.",
  },
  {
    title: "Interactive Figma Prototypes",
    desc: "High-fidelity clickable mockups that simulate dashboard transitions, button states, and checkout steps to collect early user feedback.",
  },
  {
    title: "Custom Component Design Systems",
    desc: "Unified UI libraries containing consistent styling rules for menus, form grids, alerts, and typography, ready for developers to implement.",
  },
  {
    title: "Mobile-First Layout Adaptability",
    desc: "Designs structured to scale down to mobile dimensions, ensuring touch inputs are accessible and navigation links are readable on small screens.",
  },
  {
    title: "Accessibility Compliance Auditing",
    desc: "We verify interface contrast ratios, define focus states for keyboards, and check navigation logic to meet WCAG 2.1 accessibility criteria.",
  },
  {
    title: "Usability Friction Audits",
    desc: "We evaluate your legacy application interfaces to identify user drop-offs, slow tasks, and visual distractions that hurt conversions.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We review your product objectives, target user personas, accessibility goals, and brand assets to plan design layouts."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We create user flows, draft low-fidelity wireframes, and outline the initial information architecture."
  },
  {
    step: 3,
    title: "Development",
    desc: "We design high-fidelity screens, build the custom component library, and link interactive clickable prototypes."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We audit contrast levels, run prototype walk-through sessions with users, and gather stakeholder feedback."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We export final assets, organize layout specifications, and coordinate the developer hand-off in Figma."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We coordinate with frontend developers during coding, verify implementation details, and design supplemental screen states."
  }
];

const techStack = [
  "Figma",
  "FigJam",
  "Adobe Illustrator",
  "HTML5 / CSS3",
  "Tailwind CSS Tokens",
  "WCAG 2.1 Standards",
];

const faqs = [
  {
    question: "Do you deliver working code or design files?",
    answer: "Our design team delivers fully organized, high-fidelity Figma files, clickable prototypes, and documented asset files. If you require development services, our software engineering team implements these designs using clean frontend code (React/Next.js). We coordinate closely between design and development to ensure the final coded product matches the visual specs.",
  },
  {
    question: "What is a design system and why is it important?",
    answer: "A design system is a centralized library containing all visual components (colors, typography, buttons, inputs, navigation bars) used across your product. Building a system in Figma guarantees visual consistency across multiple pages. It allows your developers to code faster by mapping design tokens directly to reusable CSS classes, reducing styling bugs.",
  },
  {
    question: "How do you ensure the design is accessible to all users?",
    answer: "We design in compliance with WCAG 2.1 accessibility guidelines. We check color contrast ratios to ensure text is fully readable, design clear focus states for keyboard-only navigation, and structure layouts to scale cleanly for users with screen magnifier tools. This ensures your product is usable for everyone and meets legal compliance standards.",
  },
];

export default function UiUxDesignPage() {
  return (
    <ServicePageTemplate
      title="UI/UX Interface Design Services"
      eyebrow="Product Design"
      description="Design digital products that users love. We build structured Figma design systems, interactive prototypes, and custom interfaces focused on usability."
      overview={`What Do We Do?
Magnivel Technologies designs user interfaces (UI) and user experiences (UX) for web apps, SaaS dashboards, mobile apps, and marketing websites. We use Figma to build wireframes, high-fidelity mockups, design systems, and clickable prototypes. We focus on layouts that reduce user friction and match developer patterns.

Who Do We Help?
We work with SaaS founders, application product managers, and business groups who want to build a new software tool or upgrade a legacy portal. Our clients have functional software that looks outdated, or want to validate layouts and user flows in Figma before investing in development.

How Do We Help?
We map user paths to simplify complex navigation steps. We build unified Figma design systems so every button, label, and form input matches your brand. We link screens into clickable prototypes so you can review user flows, and coordinate with developers to ensure code hand-offs are smooth.

Why Should Clients Trust Us?
We prioritize usability over superficial templates. We provide clean, organized Figma files that are easy for developers to parse, check design contrasts for accessibility compliance, and coordinate directly with developers during the build phase to ensure style specifications are correctly implemented.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
