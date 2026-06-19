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

export default function CareersPage() {
  return <CareersClient />;
}
