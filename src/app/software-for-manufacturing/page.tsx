import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Manufacturing Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies develops custom manufacturing and ERP software. SKU databases, inventory tracking, quality inspection logs, and shop-floor dashboards.",
  keywords: ["manufacturing ERP software", "custom inventory tracking", "sku database developer", "shop floor management dashboard", "work order scheduler"],
  alternates: {
    canonical: "https://magnivel.com/software-for-manufacturing",
  },
};

const benefits = [
  {
    title: "Real-Time SKU Tracking",
    desc: "Monitor raw materials, work-in-progress components, and finished goods across warehouse locations instantly.",
    icon: "layers",
  },
  {
    title: "Optimized Work Orders",
    desc: "Schedule assembly stages, track operator workloads, and log shift outputs in real-time, reducing downtime.",
    icon: "clock",
  },
  {
    title: "Automated Reorder Alerts",
    desc: "Receive immediate notifications when raw material stocks drop below set levels, avoiding supply delays.",
    icon: "zap",
  },
];

const features = [
  { title: "SKU Catalog Database", desc: "Access comprehensive records for raw materials, variants, weight metrics, and storage nodes." },
  { title: "Work Order Management", desc: "Assign production batches, define checklist operations, and assign team supervisors." },
  { title: "Inventory Movement History", desc: "Track every check-in, check-out, storage transfer, and quality audit with timestamps." },
  { title: "Barcode Scanner Sync", desc: "Scan labels using web cameras or USB scanners to adjust stock levels automatically." },
  { title: "Quality Inspection Logs", desc: "Digitize quality inspection sheets, log defects counts, and upload inspection photos." },
  { title: "Production Reporting Charts", desc: "Review daily yield statistics, machine downtime factors, and finished SKU trends." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Analyze raw material workflows, warehouse locations, barcode formats, and reporting needs." },
  { step: 2, title: "Database Modeling", desc: "Structure relations (SKUs, Batches, Inventory, Actions) and draft screen mocks." },
  { step: 3, title: "Core Backend Coding", desc: "Build secure databases, write API endpoints, and program inventory logic." },
  { step: 4, title: "Frictionless Scanning Integrations", desc: "Integrate barcode scanners, configure email alerts, and render dashboards." },
  { step: 5, title: "Shop Floor Review & Deploy", desc: "Test scanners on-site, train operators, publish, and provide ongoing support." },
];

const faqs = [
  {
    question: "Do you integrate with hand-held barcode scanners?",
    answer: "Yes, our web interfaces support standard USB keyboard-emulation scanners, allowing operators to scan SKU tags into input fields instantly.",
  },
  {
    question: "Can we track inventory across multiple warehouses?",
    answer: "Yes, our databases support multiple location fields, allowing you to view and transfer stock counts between specific warehouse coordinates.",
  },
  {
    question: "Do you support automated PDF work order generation?",
    answer: "Yes, admins can download or email formatted work orders containing production steps, safety alerts, and barcodes automatically.",
  },
];

export default function ManufacturingSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Manufacturing ERP & Inventory Software"
      eyebrow="Industry Solutions"
      description="Track warehouse inventory, manage manufacturing SKU catalogs, allocate work orders, and log inspection files with a custom ERP platform."
      overview="Manual inventory logs and complex spreadsheets lead to manufacturing delays. Magnivel Technologies engineers customized ERP databases and shop-floor dashboards that streamline stock tracking and optimize production cycles."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
