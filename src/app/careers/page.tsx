import { Metadata } from "next";
import { CareersClient } from "./careers-client";

export const metadata: Metadata = {
  title: "Careers | Magnivel Technologies",
  description:
    "Explore career opportunities at Magnivel Technologies. Join our team as a Full Stack Developer, React Developer, Backend Developer, Python Developer, AI Engineer, and more.",
  keywords: [
    "Magnivel Technologies Careers",
    "Software Developer Jobs",
    "React Developer Jobs",
    "Next.js Developer Jobs",
    "Python Developer Jobs",
    "AI Engineer Jobs",
    "Remote Software Jobs",
  ],
  alternates: {
    canonical: "https://magnivel.com/careers",
  },
  openGraph: {
    title: "Careers | Magnivel Technologies",
    description:
      "Explore career opportunities at Magnivel Technologies. Join our team as a Full Stack Developer, React Developer, Backend Developer, Python Developer, AI Engineer, and more.",
    url: "https://magnivel.com/careers",
    type: "website",
    images: [
      {
        url: "https://magnivel.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Magnivel Technologies",
      },
    ],
  },
};

import { jobOpenings } from "@/lib/site";

export default function CareersPage() {
  const schemas = jobOpenings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.position,
    "description": `${job.description} Skills required: ${job.skills.join(", ")}. Experience: ${job.experience}. Location requirement: Remote or Hybrid.`,
    "datePosted": "2026-06-19",
    "validThrough": "2027-06-19",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Magnivel Technologies",
      "sameAs": "https://magnivel.com",
      "logo": "https://magnivel.com/logo.jpg"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Remote",
        "addressRegion": "India / USA / Worldwide",
        "addressCountry": "IN"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Worldwide"
    }
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <CareersClient />
    </>
  );
}
