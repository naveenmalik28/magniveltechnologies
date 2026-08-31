"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

interface Option {
  id: string;
  label: string;
  desc: string;
  complexityScore: number;
}

const CHATBOT_TYPES: Option[] = [
  {
    id: "faq",
    label: "FAQ & Website Assistant",
    desc: "Answers common questions based on predefined knowledge and system prompts.",
    complexityScore: 1,
  },
  {
    id: "rag",
    label: "Knowledge Base / RAG Bot",
    desc: "Retrieves context from internal PDFs, documentation, and vector databases with source citations.",
    complexityScore: 2.5,
  },
  {
    id: "leadgen",
    label: "Sales & Lead Qualification",
    desc: "Collects qualified user details, books meetings, and syncs directly into your CRM.",
    complexityScore: 2,
  },
  {
    id: "agent",
    label: "Autonomous AI Agent",
    desc: "Executes multi-step workflows, calls third-party APIs, and updates databases dynamically.",
    complexityScore: 4,
  },
];

const DATA_SOURCES: Option[] = [
  {
    id: "none",
    label: "Standard System Prompt",
    desc: "Static instructions without dynamic external document indexing.",
    complexityScore: 0,
  },
  {
    id: "docs",
    label: "PDFs & Documents (RAG)",
    desc: "Upload and vector-index corporate PDFs, manuals, and support articles.",
    complexityScore: 1.5,
  },
  {
    id: "database",
    label: "Live Database / API Sync",
    desc: "Real-time semantic sync with PostgreSQL, MySQL, or cloud inventory APIs.",
    complexityScore: 2.5,
  },
];

const INTEGRATIONS: Option[] = [
  {
    id: "website",
    label: "Website Floating Widget",
    desc: "Custom-styled embedded chat widget on your web app.",
    complexityScore: 0.5,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Business API",
    desc: "Official Meta cloud API webhook integration.",
    complexityScore: 1.5,
  },
  {
    id: "slack",
    label: "Slack / Teams Bot",
    desc: "Internal workspace bot for employees.",
    complexityScore: 1,
  },
  {
    id: "crm",
    label: "CRM (HubSpot, GoHighLevel, Salesforce)",
    desc: "Two-way contact creation, custom field mapping, and deal routing.",
    complexityScore: 1.5,
  },
];

const ADVANCED_FEATURES: Option[] = [
  {
    id: "auth",
    label: "User Authentication / Role Permissions",
    desc: "Restrict sensitive answers based on logged-in user permissions.",
    complexityScore: 1.5,
  },
  {
    id: "dashboard",
    label: "Admin Analytics & Transcript Viewer",
    desc: "Custom dashboard to review conversations, token usage, and user feedback.",
    complexityScore: 1.5,
  },
  {
    id: "multilingual",
    label: "Multilingual Support",
    desc: "Auto-language detection and localized conversational response prompts.",
    complexityScore: 0.5,
  },
  {
    id: "handoff",
    label: "Human Agent Live Handoff",
    desc: "Seamlessly transfer unresolved chats to human support team via webhook.",
    complexityScore: 1,
  },
];

export function ChatbotCostCalculator() {
  const [selectedType, setSelectedType] = useState<string>("rag");
  const [selectedData, setSelectedData] = useState<string>("docs");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>(["website", "crm"]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["dashboard"]);

  const toggleIntegration = (id: string) => {
    setSelectedIntegrations((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate overall complexity score
  const typeScore = CHATBOT_TYPES.find((t) => t.id === selectedType)?.complexityScore || 1;
  const dataScore = DATA_SOURCES.find((d) => d.id === selectedData)?.complexityScore || 0;
  const integrationsScore = selectedIntegrations.reduce((sum, id) => {
    const item = INTEGRATIONS.find((i) => i.id === id);
    return sum + (item?.complexityScore || 0);
  }, 0);
  const featuresScore = selectedFeatures.reduce((sum, id) => {
    const item = ADVANCED_FEATURES.find((f) => f.id === id);
    return sum + (item?.complexityScore || 0);
  }, 0);

  const totalScore = typeScore + dataScore + integrationsScore + featuresScore;

  let tierName = "Starter FAQ / Website Bot";
  let tierBadge = "Low Complexity";
  let tierDesc = "Straightforward chatbot setup suitable for standard customer FAQs and inquiry capture.";
  let timeline = "1 - 2 Weeks";
  let architecture = "Single LLM API + Web Widget";

  if (totalScore >= 3.5 && totalScore < 6) {
    tierName = "Knowledge-Base (RAG) Assistant";
    tierBadge = "Moderate Complexity";
    tierDesc = "Vector-indexed document retrieval with source attribution, CRM sync, and custom UI styling.";
    timeline = "2 - 4 Weeks";
    architecture = "Vector DB (pgvector/Pinecone) + LLM Caching + CRM Webhooks";
  } else if (totalScore >= 6 && totalScore < 8.5) {
    tierName = "Multi-Channel AI Workflow Bot";
    tierBadge = "High Complexity";
    tierDesc = "Multi-platform presence (Web + WhatsApp/Slack), role-based data access, transcript analytics, and CRM integration.";
    timeline = "4 - 6 Weeks";
    architecture = "RAG Engine + Multi-Channel Handlers + Admin Dashboard + Token Caching";
  } else if (totalScore >= 8.5) {
    tierName = "Enterprise AI Agent System";
    tierBadge = "Enterprise Complexity";
    tierDesc = "Autonomous tool calling, live database transactions, authenticated customer workflows, and enterprise logging.";
    timeline = "6 - 10 Weeks";
    architecture = "Custom LangChain/Python Backend + Vector Cluster + Full Tool-Use APIs";
  }

  return (
    <div className="glass-card overflow-hidden border border-subtle-border bg-surface p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-subtle-border pb-6">
        <div>
          <span className="section-eyebrow">Interactive Estimator</span>
          <h3 className="mt-2 text-xl font-extrabold text-heading sm:text-2xl">
            Estimate Your AI Chatbot Development Scope
          </h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">
          <Icon name="zap" size={14} />
          Instant Architecture Estimate
        </span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Input Configuration Form */}
        <div className="space-y-6 lg:col-span-7">
          {/* Step 1: Chatbot Purpose */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-heading">
              1. Select Chatbot Type & Purpose
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {CHATBOT_TYPES.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`rounded-xl border p-3.5 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                        : "border-subtle-border bg-background hover:border-accent/30"
                    }`}
                  >
                    <p className="text-xs font-bold text-heading">{type.label}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted">{type.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Knowledge Source */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-heading">
              2. Knowledge Base & Document Indexing
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
              {DATA_SOURCES.map((source) => {
                const isSelected = selectedData === source.id;
                return (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => setSelectedData(source.id)}
                    className={`rounded-xl border p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5 ring-1 ring-accent"
                        : "border-subtle-border bg-background hover:border-accent/30"
                    }`}
                  >
                    <p className="text-xs font-bold text-heading">{source.label}</p>
                    <p className="mt-1 text-[10px] leading-relaxed text-muted">{source.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Platform Integrations */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-heading">
              3. Communication Channels & Integrations (Select All That Apply)
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {INTEGRATIONS.map((intg) => {
                const isSelected = selectedIntegrations.includes(intg.id);
                return (
                  <button
                    key={intg.id}
                    type="button"
                    onClick={() => toggleIntegration(intg.id)}
                    className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5"
                        : "border-subtle-border bg-background hover:border-accent/30"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        isSelected ? "border-accent bg-accent text-white" : "border-subtle-border bg-surface"
                      }`}
                    >
                      {isSelected && <Icon name="check" size={10} />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-heading">{intg.label}</p>
                      <p className="mt-0.5 text-[10px] text-muted">{intg.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 4: Advanced Features */}
          <div>
            <label className="text-xs font-extrabold uppercase tracking-wider text-heading">
              4. Advanced Capabilities & Control
            </label>
            <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {ADVANCED_FEATURES.map((feat) => {
                const isSelected = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-start gap-2.5 rounded-xl border p-3 text-left transition-all ${
                      isSelected
                        ? "border-accent bg-accent/5"
                        : "border-subtle-border bg-background hover:border-accent/30"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        isSelected ? "border-accent bg-accent text-white" : "border-subtle-border bg-surface"
                      }`}
                    >
                      {isSelected && <Icon name="check" size={10} />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-heading">{feat.label}</p>
                      <p className="mt-0.5 text-[10px] text-muted">{feat.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Estimate Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-accent/20 bg-gradient-to-b from-accent/5 to-surface p-6 sm:p-7 lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent-secondary">
                Calculated Scope
              </span>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-extrabold text-accent">
                {tierBadge}
              </span>
            </div>

            <h4 className="mt-3 text-lg font-extrabold text-heading sm:text-xl">{tierName}</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted">{tierDesc}</p>

            <div className="mt-6 space-y-3.5 border-y border-subtle-border py-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted">Estimated Build Timeline:</span>
                <span className="font-bold text-heading">{timeline}</span>
              </div>
              <div className="flex items-start justify-between text-xs">
                <span className="font-medium text-muted">Recommended Stack:</span>
                <span className="max-w-[180px] text-right font-bold text-heading text-[11px]">
                  {architecture}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted">Selected Integrations:</span>
                <span className="font-bold text-heading">
                  {selectedIntegrations.length === 0 ? "None" : `${selectedIntegrations.length} Active`}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-muted">Data Ownership:</span>
                <span className="font-bold text-primary">100% Client Owned</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-subtle-border bg-background p-3.5">
              <p className="text-[11px] font-semibold text-heading flex items-center gap-1.5">
                <Icon name="shield" size={13} className="text-accent" />
                Transparent Engineering Pricing
              </p>
              <p className="mt-1 text-[10px] text-muted leading-relaxed">
                Development pricing varies by your exact vector index volume, token throughput, and custom backend API logic. We provide milestone-locked quotes before any work begins.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2.5">
            <Link
              href="/contact"
              className="btn-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Request Custom Project Estimate
              <Icon name="arrow-right" size={14} />
            </Link>
            <p className="text-center text-[10px] text-muted">
              Receive a detailed architectural scope & milestone breakdown within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
