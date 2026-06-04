import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Healthcare Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies develops secure, custom healthcare software. Portals for patient scheduling, EHR integrations, HIPAA-compliant messaging, and billing.",
  keywords: ["healthcare software solutions", "ehr integration service", "patient portal developer", "hipaa compliant database", "telemedicine software"],
  alternates: {
    canonical: "https://magnivel.com/software-for-healthcare",
  },
};

const benefits = [
  {
    title: "Secure Data Practices",
    desc: "We write secure codebases following HIPAA guidelines, encrypting medical records and audit logs.",
    icon: "shield",
  },
  {
    title: "Frictionless Scheduling",
    desc: "Patients select doctor availability slots, request reminders, and coordinate consultations online.",
    icon: "clock",
  },
  {
    title: "Integrated Care Flow",
    desc: "Connect patient records, billing cycles, prescriptions, and follow-up schedules in one cohesive database.",
    icon: "layers",
  },
];

const features = [
  { title: "Patient Records System", desc: "Access secure medical histories, laboratory results, allergy tables, and past checkups." },
  { title: "Smart Scheduling Grid", desc: "Interactive calendar system for staff scheduling, appointment triggers, and SMS updates." },
  { title: "Secure Telemedicine Video", desc: "Integrate peer-to-peer WebRTC video screens for secure online consultations." },
  { title: "Medical Billing & Insurance", desc: "Track patient checkouts, format billing codes, and process payments securely." },
  { title: "Prescription Builder", desc: "Allows verified doctors to draft digital prescription lists and email them to patients automatically." },
  { title: "Granular Audit Trail", desc: "Record every user read, write, and change request across patient data rows to maintain compliance." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Analyze compliance needs, EHR APIs, user workflows, and secure storage goals." },
  { step: 2, title: "Database & UI Design", desc: "Design entity relations (Patients, Appointments, Prescriptions) and draft clean screens." },
  { step: 3, title: "Backend Security Coding", desc: "Set up encrypted storage bucket slots, write access controls, and code core APIs." },
  { step: 4, title: "Dashboard Integration", desc: "Assemble responsive doctor pages, patient grids, and video widget screens." },
  { step: 5, title: "Compliance Check & Deploy", desc: "Perform data breach audits, encrypt tables, test workflows, deploy, and support." },
];

const faqs = [
  {
    question: "Do you sign Business Associate Agreements (BAAs)?",
    answer: "Yes, for healthcare entities subject to HIPAA rules, we review and execute BAAs to guarantee compliant technical services.",
  },
  {
    question: "Can this integrate with existing EHRs like Epic or Cerner?",
    answer: "Yes, we integrate using standard FHIR (Fast Healthcare Interoperability Resources) APIs or specific developer endpoints to sync patient data.",
  },
  {
    question: "Is video consultation history recorded?",
    answer: "We support peer-to-peer streaming where video feed is not stored on servers by default, or build encrypted recording storage depending on audit rules.",
  },
];

export default function HealthcareSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Secure Healthcare Software & EHR Solutions"
      eyebrow="Industry Solutions"
      description="Manage patient appointments, secure medical records, and host encrypted telemedicine consultations with HIPAA-compliant software."
      overview="Patient care demands secure, reliable software interfaces. Magnivel Technologies builds customized clinic management portals, patient booking widgets, and database interfaces that protect personal records and improve coordination."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
