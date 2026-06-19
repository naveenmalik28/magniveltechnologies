import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional iOS and Android mobile app development services using React Native to deliver fast, offline-ready mobile applications.",
  keywords: ["mobile app development", "React Native developer", "iOS and Android app builder", "hybrid mobile app", "offline-ready mobile app", "app store launch"],
  alternates: {
    canonical: "https://magnivel.com/mobile-app-development",
  },
};

const benefits = [
  {
    title: "Unified Cross-Platform Codebase",
    desc: "We write cross-platform mobile apps using React Native, allowing a single codebase to run smoothly on both iOS and Android. This unified codebase significantly reduces your development costs and speeds up your release schedule. When you want to update product features or adjust backend connections, our developers deploy the changes across both stores simultaneously, saving you maintenance hours.",
    icon: "zap",
  },
  {
    title: "Offline-Ready Architecture",
    desc: "A reliable mobile application must function when user connectivity drops. We design mobile applications with offline database synchronization. By caching data locally using SQLite or WatermelonDB and queueing API sync requests, users can view records, edit details, and perform actions without active internet. The application automatically syncs updates with your database once a connection is re-established.",
    icon: "shield",
  },
  {
    title: "Native Performance & Device Integrations",
    desc: "We build applications that access native mobile hardware and features. We integrate push notifications, camera permissions, face recognition logins, and location tracking widgets. Our developers tune rendering loops and manage background tasks to ensure animations feel fluid, transitions are clean, and battery consumption remains low.",
    icon: "layers",
  },
];

const features = [
  {
    title: "Cross-Platform React Native Builds",
    desc: "Native-quality app execution compiled from a single JavaScript/TypeScript codebase, ensuring consistent layout behaviors on both iPhone and Android devices.",
  },
  {
    title: "Local Database Caching",
    desc: "Local SQLite storage sync workflows that store app states, product data, or profile records to allow uninterrupted use when offline.",
  },
  {
    title: "Secure Biometric Login",
    desc: "Integration with native FaceID and fingerprint reader interfaces to allow users to authenticate safely without entering passwords repeatedly.",
  },
  {
    title: "Automated Push Notifications",
    desc: "Configuration of Firebase Cloud Messaging (FCM) to trigger targeted push alerts, transactional updates, and promotional reminders directly to devices.",
  },
  {
    title: "Geofencing & Location APIs",
    desc: "Access to device GPS coordinate streams to build maps, calculate shipping distances, or trigger location-specific app operations.",
  },
  {
    title: "App Store Deployment Prep",
    desc: "End-to-end management of app listing credentials, compiling release files, configuring privacy policy screens, and submitting apps to Apple & Google Play stores.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We review mobile feature needs, device permissions, backend API structures, and launch requirements to plan the build."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We design mobile screen wireframes, map user touch targets, design layout systems, and plan data syncing boundaries."
  },
  {
    step: 3,
    title: "Development",
    desc: "We code mobile views, configure local databases, connect APIs, and set up push notification systems in agile sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We run app tests across virtual and physical devices, checking offline states, push alerts, and battery usages."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We compile build bundles, upload files to developer consoles, complete privacy checks, and submit apps for store approvals."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We handle OS update compatibility checks, patch package dependencies, monitor crash reports, and prepare new feature releases."
  }
];

const techStack = [
  "React Native",
  "TypeScript",
  "Node.js",
  "Express.js",
  "SQLite",
  "Firebase / Push Notifications",
  "REST / GraphQL APIs",
  "App Store Connect",
  "Google Play Console",
];

const faqs = [
  {
    question: "Do you build native apps or hybrid cross-platform apps?",
    answer: "We specialize in cross-platform mobile app development using React Native. This framework allows us to compile a single TypeScript codebase into native iOS and Android application binaries. This approach gives you native-like performance, animations, and hardware access while reducing your initial development and long-term maintenance costs by nearly 50% compared to writing separate Swift and Kotlin codebases.",
  },
  {
    question: "How does the offline mode work in your mobile applications?",
    answer: "We structure the app's data model to write to a secure local database (like SQLite) on the user's device first. The app displays content from this local database immediately, ensuring it works without internet. When an internet connection is available, a sync manager synchronizes any updates, offline forms, or transaction records with your central cloud database in the background.",
  },
  {
    question: "Do you manage the process of submitting the app to the app stores?",
    answer: "Yes, we manage the entire submission process. We compile the final iOS (.ipa) and Android (.aab) release bundles, set up the listings in App Store Connect and Google Play Console, write the required store metadata, upload screenshots, and complete privacy declarations. We support you through the review phase until your app is approved and live for download.",
  },
];

export default function MobileAppDevPage() {
  return (
    <ServicePageTemplate
      title="Professional Mobile App Development Services"
      eyebrow="Mobile Engineering"
      description="We design and build fast, offline-ready mobile applications for iOS and Android. Engineered with React Native for native performance and structured deployments."
      overview={`What Do We Do?
Magnivel Technologies designs, builds, and deploys custom iOS and Android mobile applications. We use React Native to build fast, cross-platform apps with smooth navigations. We handle offline syncing, push notifications, local databases, biometric logins, and native hardware integrations.

Who Do We Help?
We partner with business teams, service providers, and startup founders who need to launch a dedicated mobile app. Our clients need a mobile solution for customer engagement, mobile ecommerce sales, or internal employee workflows, requiring the application to launch on both Apple and Google Play stores.

How Do We Help?
We write clean, unified code that runs on both platforms, saving you development time and costs. We build offline database states so the application continues to run without network access. We handle the process of store submissions, and configure secure APIs to link the app to your databases.

Why Should Clients Trust Us?
We focus on clean coding guidelines, transparent developer updates, and long-term support. We deliver fully documented applications where you retain 100% codebase ownership. We build secure database endpoints, monitor crash logs, and coordinate store uploads, ensuring your mobile app launch runs smoothly.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
