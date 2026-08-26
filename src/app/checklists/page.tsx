import { Metadata } from "next";
import { ChecklistsClient } from "./checklists-client";

export const metadata: Metadata = {
  title: "Engineering Checklists & Audits | Magnivel Technologies",
  description:
    "Verify your web application, SaaS MVP, and SEO readiness with interactive launch checklists from Magnivel Technologies.",
  keywords: [
    "Website Launch Checklist",
    "SaaS MVP Checklist",
    "SEO Audit Checklist",
    "Production Readiness",
  ],
  alternates: {
    canonical: "https://magnivel.com/checklists",
  },
  openGraph: {
    title: "Engineering Checklists & Audits | Magnivel Technologies",
    description:
      "Verify your web application, SaaS MVP, and SEO readiness with interactive launch checklists from Magnivel Technologies.",
    url: "https://magnivel.com/checklists",
    type: "website",
  },
};

export default function ChecklistsPage() {
  return <ChecklistsClient />;
}
