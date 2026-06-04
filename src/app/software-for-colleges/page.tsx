import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "College & University Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies designs enterprise software for colleges and universities. Admission portals, department dashboards, student credit trackers, and LMS systems.",
  keywords: ["college management system", "university software developer", "student credit tracker", "online admission portal", "lms developer"],
  alternates: {
    canonical: "https://magnivel.com/software-for-colleges",
  },
};

const benefits = [
  {
    title: "Centralized Department Data",
    desc: "Unify student records, professor directory logs, course schedules, and research databases across all departments.",
    icon: "layers",
  },
  {
    title: "Dynamic Admission Portals",
    desc: "Allow candidates to submit documents, pay application fees, and review application statuses online.",
    icon: "zap",
  },
  {
    title: "Automated Credit Tracking",
    desc: "Track academic credit benchmarks, calculate GPA scores, and generate official student records automatically.",
    icon: "shield",
  },
];

const features = [
  { title: "Course Catalog Setup", desc: "List course credits, prerequisites, instructor assignments, and available seat limits." },
  { title: "Online Admission Portals", desc: "Digital applications submission, document attachments uploads, and secure processing flows." },
  { title: "Professor Dashboards", desc: "Log class attendance, input exam ratings, manage homework templates, and track research logs." },
  { title: "LMS Integrations", desc: "Integrate video meeting endpoints (WebRTC/Zoom), file shares (S3), and lecture slides." },
  { title: "Fee Instalment Tracking", desc: "Manage semester invoice dates, record partial payments, and track outstanding balances." },
  { title: "Alumni Directory", desc: "Keep touch with alumni members, record donations records, and coordinate career events." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Audit department guidelines, credit scoring systems, and admission rules." },
  { step: 2, title: "Relational Modeling", desc: "Design database structures (Students, Courses, Majors, Payments) and wireframe pages." },
  { step: 3, title: "API & Backend Coding", desc: "Write secure backend APIs, establish authorization rules, and hook up servers." },
  { step: 4, title: "Portal Customization", desc: "Assemble distinct dashboards for students, professors, and administration heads." },
  { step: 5, title: "QA Stress & Deploy", desc: "Verify security rules, test registration flows under load, publish, and support." },
];

const faqs = [
  {
    question: "Do you integrate with university learning tools like Moodle or Canvas?",
    answer: "Yes, we integrate with legacy LMS options using standard LTI (Learning Tools Interoperability) APIs or build bespoke portals tailored to your staff's needs.",
  },
  {
    question: "Can candidate documents be scanned for malware?",
    answer: "Yes, we integrate virus scanning endpoints to screen candidate document uploads (PDFs, JPGs) before writing them to secure cloud storage.",
  },
  {
    question: "How do students register for courses?",
    answer: "We build intuitive student portals where they can select courses, verify credit limit requirements, and enroll with real-time seat availability updates.",
  },
];

export default function CollegesSoftwarePage() {
  return (
    <ServicePageTemplate
      title="College & University Software Solutions"
      eyebrow="Industry Solutions"
      description="Manage candidate admissions, college credit tracking, class registrations, and department resources with custom university software systems."
      overview="Colleges require robust database architectures to coordinate multiple departments, courses, and fee schedules. Magnivel Technologies builds customized university management systems featuring candidate portals, grading engines, and secure payment setups."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
