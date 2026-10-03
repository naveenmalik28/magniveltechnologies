import { Metadata } from "next";
import { CareersClient } from "./careers-client";

export const metadata: Metadata = {
  title: "Careers | Magnivel Technologies",
  description:
    "Explore career opportunities at Magnivel Technologies. Join our engineering team to build innovative software, web applications, mobile apps, and AI solutions.",
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
      "Explore career opportunities at Magnivel Technologies. Join our engineering team to build innovative software, web applications, mobile apps, and AI solutions.",
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
