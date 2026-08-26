import { Metadata } from "next";
import { SeoGeneratorClient } from "./seo-generator-client";

export const metadata: Metadata = {
  title: "SEO Meta Generator & SERP Preview | Magnivel Technologies",
  description:
    "Preview and build optimal meta titles and description tags for Google Search. Real-time character counts and SERP snippet preview.",
  keywords: [
    "SEO Meta Generator",
    "SERP Snippet Preview",
    "Meta Title Length Checker",
    "Meta Description Generator",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources/seo-meta-generator",
  },
  openGraph: {
    title: "SEO Meta Generator & SERP Preview | Magnivel Technologies",
    description:
      "Preview and build optimal meta titles and description tags for Google Search. Real-time character counts and SERP snippet preview.",
    url: "https://magnivel.com/resources/seo-meta-generator",
    type: "website",
  },
};

export default function SEOMetaGenerator() {
  return <SeoGeneratorClient />;
}
