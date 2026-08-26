import { Metadata } from "next";
import { PromptGeneratorClient } from "./prompt-generator-client";

export const metadata: Metadata = {
  title: "AI Prompt Generator | Magnivel Technologies",
  description:
    "Generate structured, high-quality system prompts for LLMs instantly with role, tone, and format parameters.",
  keywords: [
    "AI Prompt Generator",
    "LLM System Prompt Creator",
    "Prompt Engineering Tool",
    "GPT Prompt Builder",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources/ai-prompt-generator",
  },
  openGraph: {
    title: "AI Prompt Generator | Magnivel Technologies",
    description:
      "Generate structured, high-quality system prompts for LLMs instantly with role, tone, and format parameters.",
    url: "https://magnivel.com/resources/ai-prompt-generator",
    type: "website",
  },
};

export default function AIPromptGenerator() {
  return <PromptGeneratorClient />;
}
