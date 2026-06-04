import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "School Management Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies develops custom school management software. Portals for student tracking, fee collection, staff logs, and parent communication.",
  keywords: ["school management software", "student information system", "online school fee portal", "parent portal developer", "school administration tools"],
  alternates: {
    canonical: "https://magnivel.com/software-for-schools",
  },
};

const benefits = [
  {
    title: "Streamlined Administration",
    desc: "Unify student records, report cards, class schedules, and staff attendance inside one centralized database dashboard.",
    icon: "layers",
  },
  {
    title: "Secure Fee Collection",
    desc: "Accept cards and net-banking with dynamic receipt pdf generators and automated low-balance email alerts.",
    icon: "shield",
  },
  {
    title: "Improved Parent Contact",
    desc: "Send instant notifications for attendance warnings, exam schedules, and holiday announcements automatically.",
    icon: "zap",
  },
];

const features = [
  { title: "Student Directory", desc: "Access contact details, family details, grading logs, and attendance records on a secure grid." },
  { title: "Online Fee Collection", desc: "Integrate billing gateways (UPI, net-banking) with automated invoice downloads." },
  { title: "Staff Directory & Logs", desc: "Track teacher assignments, calculate monthly payouts, and track teaching schedule grids." },
  { title: "Exam & Grading Dashboard", desc: "Input semester marks, calculate GPA rankings, and print beautiful student PDF card summaries." },
  { title: "Parent-Teacher Portals", desc: "Private dashboard portals where parents review marks, view homework, and contact teachers safely." },
  { title: "Dynamic Class Scheduler", desc: "Configure weekly slots, classroom allocations, and prevent teacher schedule overlaps." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Understand student counts, staff workflows, branding style, and fee parameters." },
  { step: 2, title: "Database Architecture", desc: "Structure relational tables (Students, Classes, Grades, Fees) and wireframe dashboards." },
  { step: 3, title: "Backend Systems Code", desc: "Configure server scopes, write secure APIs, and code student data columns." },
  { step: 4, title: "Payment Integration", desc: "Connect net-banking payment widgets and verify automated receipt pdf triggers." },
  { step: 5, title: "Beta Run & Launch", desc: "Import existing student spreadsheets, test parent logins, deploy on cloud, and launch." },
];

const faqs = [
  {
    question: "Can we import existing student spreadsheets into the new database?",
    answer: "Yes, we construct custom data parsing scripts to clean, map, and import your existing Excel files and CSVs safely into the secure PostgreSQL database.",
  },
  {
    question: "Is student data protected?",
    answer: "Yes, we encrypt data columns, restrict page authorization using token parameters, and write strict role blocks so students cannot edit marks.",
  },
  {
    question: "Do parents get automated email receipts?",
    answer: "Yes, once a fee transaction completes, our server triggers an HTML invoice email containing a downloadable PDF receipt automatically.",
  },
];

export default function SchoolsSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom School Management Software Solutions"
      eyebrow="Industry Solutions"
      description="Manage admissions, student grading cards, parent-teacher updates, and secure online fee collection with a bespoke school management dashboard."
      overview="Managing school administration using spreadsheets is slow and error-prone. Magnivel Technologies designs and builds custom school administration systems that automate admissions, organize class lists, track fee payments, and improve communication between schools and parents."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
