import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Django Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides custom Django backend development services. Robust database schemas, secure admin dashboards, and Django Rest Framework APIs.",
  keywords: ["django development services", "django developer python", "django rest framework api", "secure python backend", "django admin custom"],
  alternates: {
    canonical: "https://magnivel.com/django-development",
  },
};

const benefits = [
  {
    title: "Secure by Default",
    desc: "Django has built-in protection against SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).",
    icon: "shield",
  },
  {
    title: "Rapid Admin Setup",
    desc: "Django's automatic administration interface allows managing database models instantly without custom panels coding.",
    icon: "layers",
  },
  {
    title: "Robust Database Handling",
    desc: "Django's built-in Object-Relational Mapper (ORM) maps database queries safely, supporting PostgreSQL, MySQL, and SQLite.",
    icon: "database",
  },
];

const features = [
  { title: "Django Rest Framework (DRF)", desc: "Build secure, serialized REST APIs with built-in pagination, rate limits, and JWT auth." },
  { title: "Custom Admin Dashboards", desc: "Configure Django's admin portal with custom filters, search fields, and CSV data exporters." },
  { title: "ORM Database Management", desc: "Model relational database tables, run migration files, and write optimized queries." },
  { title: "Celery & Redis Tasks Queue", desc: "Offload long-running scripts, PDF generation, or email triggers to background queues." },
  { title: "Secure User Credentials", desc: "Django handles password hashing, credentials validation, and session trackers securely." },
  { title: "Scalable Middleware Filters", desc: "Write custom filters to intercept requests, validate authentication, and log API endpoints usage." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify relational models, user roles, API specifications, and database priorities." },
  { step: 2, title: "Database Architecture", desc: "Design entity relations (ERD) schemas and set up database constraints." },
  { step: 3, title: "Backend Coding Sprint", desc: "Build Django models, configure migrations, program Celery workers, and write API views." },
  { step: 4, title: "Admin Portal Setup", desc: "Customize Django's administrative dashboards to allow non-technical data management." },
  { step: 5, title: "QA Testing & Launch", desc: "Run database stress audits, check API speeds, deploy on AWS/Vercel, and launch." },
];

const faqs = [
  {
    question: "Why choose Django for a backend?",
    answer: "Django is a 'batteries-included' framework. It includes user authentication, database migrations, and administrative interfaces out of the box, saving weeks of coding time.",
  },
  {
    question: "Do you build headless setups with Django?",
    answer: "Yes, we build headless architectures where a Django backend serves JSON APIs using Django Rest Framework, and a Next.js/React frontend displays the UI.",
  },
  {
    question: "Can Django handle massive scale?",
    answer: "Absolutely. Tech giants like Instagram, Pinterest, and Disqus rely on Django to scale backend services to millions of active users.",
  },
];

export default function DjangoTechPage() {
  return (
    <ServicePageTemplate
      title="Custom Django Web & API Development Services"
      eyebrow="Engineering Stack"
      description="Build secure backend services. We build scalable Python Django architectures, Django Rest Framework APIs, and custom administrative portals."
      overview="A fragile backend database crashes under heavy loads and leaks data. Magnivel Technologies engineers secure Django applications featuring optimized database models, robust API points, and built-in protection against security threats."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
