import { Metadata } from "next";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Blog & Insights | Magnivel Technologies",
  description:
    "Explore technical tutorials, architectural guides, SaaS lessons, and AI automation insights from the engineering team at Magnivel Technologies.",
  keywords: [
    "Software Engineering Blog",
    "Web Development Tutorials",
    "AI Integration Guides",
    "SaaS Architecture",
    "Next.js Best Practices",
  ],
  alternates: {
    canonical: "https://magnivel.com/blog",
  },
  openGraph: {
    title: "Blog & Insights | Magnivel Technologies",
    description:
      "Explore technical tutorials, architectural guides, SaaS lessons, and AI automation insights from the engineering team at Magnivel Technologies.",
    url: "https://magnivel.com/blog",
    type: "website",
  },
};

export default function BlogListPage() {
  return <BlogClient />;
}
