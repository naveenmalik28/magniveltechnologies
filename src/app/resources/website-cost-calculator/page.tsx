import { Metadata } from "next";
import { CalculatorClient } from "./calculator-client";

export const metadata: Metadata = {
  title: "Website Cost Calculator | Magnivel Technologies",
  description:
    "Estimate website development cost instantly. Calculate budget based on page count, design tier, e-commerce, CMS, and custom feature requirements.",
  keywords: [
    "Website Cost Calculator",
    "Web Development Estimator",
    "Website Budget Calculator",
    "Custom Software Pricing",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources/website-cost-calculator",
  },
  openGraph: {
    title: "Website Cost Calculator | Magnivel Technologies",
    description:
      "Estimate website development cost instantly. Calculate budget based on page count, design tier, e-commerce, CMS, and custom feature requirements.",
    url: "https://magnivel.com/resources/website-cost-calculator",
    type: "website",
  },
};

export default function WebsiteCostCalculator() {
  return <CalculatorClient />;
}
