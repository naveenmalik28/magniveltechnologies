import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides premium mobile app development services for iOS and Android. Cross-platform React Native, Flutter, and native mobile software builds.",
  keywords: ["mobile app development services", "iOS app development", "Android app engineering", "React Native developer", "cross-platform app solutions"],
  alternates: {
    canonical: "https://magnivel.com/mobile-app-development",
  },
};

const benefits = [
  {
    title: "Native-Grade Performance",
    desc: "We write clean, lightweight native and hybrid codes, ensuring fluid UI animations and quick load times.",
    icon: "zap",
  },
  {
    title: "Cross-Platform Efficiency",
    desc: "Build single-codebase React Native or Flutter apps to target both iOS and Android simultaneously, saving costs.",
    icon: "layers",
  },
  {
    title: "Store Compliance Ready",
    desc: "We handle Apple App Store and Google Play Store submission guidelines, review queues, and publishing updates.",
    icon: "shield",
  },
];

const features = [
  { title: "Push Notification Systems", desc: "Keep customers engaged with timed and targeted custom pushes via Firebase (FCM) or OneSignal." },
  { title: "Offline Storage Support", desc: "Enable data saving offline using SQLite or secure local caching, sync values on connection restore." },
  { title: "Secure Authentication", desc: "Integrate Apple Login, Google Login, multi-factor token credentials, and biometrics (FaceID/TouchID)." },
  { title: "Live GPS Tracking", desc: "Build geo-location, navigation maps, delivery routes, and proximity-based push triggers." },
  { title: "In-App Stripe Payments", desc: "Safe gateways setup, Google Pay, Apple Pay integrations, subscription cards setup." },
  { title: "Crashlytics Logging", desc: "Real-time automated logging of crashes, database errors, and responsiveness parameters." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Define target audience, platform choices (iOS/Android), API needs, and timeline." },
  { step: 2, title: "Figma UI Prototype", desc: "Design intuitive visual screens, touch target optimizations, and navigation flows." },
  { step: 3, title: "Frontend & API Build", desc: "Code the screens using React Native and plug in secure backend databases." },
  { step: 4, title: "Beta App Testing", desc: "Distribute via TestFlight and Google Internal Testing to identify and fix cross-device issues." },
  { step: 5, title: "Store Submission", desc: "Compile production bundles, configure assets, submit for review, and support updates." },
];

const faqs = [
  {
    question: "Do you build iOS and Android apps separately?",
    answer: "We specialize in React Native and Flutter. This allows us to build one codebase that compiles into native iOS and Android apps, reducing development time by up to 40%.",
  },
  {
    question: "Do you assist with publishing to the App Store?",
    answer: "Yes, we guide you through setting up Apple and Google developer accounts, compile the bundles, handle review protocols, and address any developer questions.",
  },
  {
    question: "Can the app connect to my existing database?",
    answer: "Absolutely. We build secure REST APIs or GraphQL endpoints to connect your mobile application to legacy platforms, databases, and third-party tools.",
  },
];

export default function MobileServicesPage() {
  return (
    <ServicePageTemplate
      title="iOS & Android Mobile App Development Services"
      eyebrow="Mobile Engineering"
      description="Bring your business closer to users. We build intuitive, responsive, and secure native and cross-platform mobile apps for iOS and Android devices."
      overview="A powerful mobile app increases user engagement, streamlines operations, and unlocks new revenue streams. Magnivel Technologies builds production-ready mobile apps with high visual fidelity, seamless API connections, and offline functionality. We design for the App Store and Google Play from day one, helping your business deploy safely."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
