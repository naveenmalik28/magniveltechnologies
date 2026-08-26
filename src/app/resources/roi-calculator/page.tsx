import { Metadata } from "next";
import { RoiCalculatorClient } from "./roi-calculator-client";

export const metadata: Metadata = {
  title: "AI & Software Automation ROI Calculator | Magnivel Technologies",
  description:
    "Calculate manual task costs and annual financial savings from implementing custom AI automation and software workflows.",
  keywords: [
    "ROI Automation Calculator",
    "Software Cost Savings Calculator",
    "AI ROI Estimator",
    "Workflow Automation Calculator",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources/roi-calculator",
  },
  openGraph: {
    title: "AI & Software Automation ROI Calculator | Magnivel Technologies",
    description:
      "Calculate manual task costs and annual financial savings from implementing custom AI automation and software workflows.",
    url: "https://magnivel.com/resources/roi-calculator",
    type: "website",
  },
};

export default function ROICalculator() {
  return <RoiCalculatorClient />;
}
