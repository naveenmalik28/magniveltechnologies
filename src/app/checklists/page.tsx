"use client";

import { useState } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

interface ChecklistItem {
  id: string;
  task: string;
  desc: string;
}

const websiteLaunchChecklist: ChecklistItem[] = [
  { id: "web-1", task: "Configure Canonical URLs", desc: "Ensure every page has a matching rel='canonical' tag to prevent indexing conflicts." },
  { id: "web-2", task: "Compress Visual Assets", desc: "Run images through webp compression pipeline to guarantee swift load times." },
  { id: "web-3", task: "Verify Form Integrations", desc: "Submit mock contact entries to ensure they write to PostgreSQL and trigger emails." },
  { id: "web-4", task: "Generate Sitemap & Robots.txt", desc: "Build dynamic sitemap.xml listing all page paths and register in Search Console." },
  { id: "web-5", task: "Enforce HTTPS Redirects", desc: "Set up SSL encryption keys and configure HTTPS rewrite parameters in hosting." },
  { id: "web-6", task: "Audit Mobile Sizing Overflows", desc: "Resize screens to 320px width and check for overlapping text boxes or margins cuts." },
];

const saasMvpChecklist: ChecklistItem[] = [
  { id: "saas-1", task: "Isolate Tenant Queries", desc: "Double check query parameters (where tenant_id = x) to block multi-tenant data leaks." },
  { id: "saas-2", task: "Verify Stripe Webhook Verification", desc: "Ensure webhook endpoints check Stripe's signature header before logging checkout lines." },
  { id: "saas-3", task: "Implement User Invite Logic", desc: "Allow team owners to send email links and map invitations to workspace memberships." },
  { id: "saas-4", task: "Configure Session Limits", desc: "Enforce JSON Web Token validation boundaries and set secure HTTP-only cookies keys." },
  { id: "saas-5", task: "Setup Error Watch Alerts", desc: "Plug in logging dashboards like Sentry or CloudWatch to capture production crash details." },
];

const seoAuditChecklist: ChecklistItem[] = [
  { id: "seo-1", task: "Inject Schema Structured Data", desc: "Configure FAQ, Article, or Product JSON-LD block scripts inside pages HTML." },
  { id: "seo-2", task: "Optimize Page Headings Structure", desc: "Enforce a single h1 tag per page, followed by logical h2 and h3 sections." },
  { id: "seo-3", task: "Audit Core Web Vitals Performance", desc: "Target 95+ PageSpeed scores by deferring unused scripts and preloading fonts." },
  { id: "seo-4", task: "Add Alt Tags to All Images", desc: "Ensure descriptive alternative text exists for screen readers and crawler indexings." },
  { id: "seo-5", task: "Configure OpenGraph Metadata", desc: "Set og:title, og:description, and summary og:image cards for social sharing platforms." },
];

export default function ChecklistsPage() {
  const [activeTab, setActiveTab] = useState<"web" | "saas" | "seo">("web");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const activeChecklist =
    activeTab === "web"
      ? websiteLaunchChecklist
      : activeTab === "saas"
      ? saasMvpChecklist
      : seoAuditChecklist;

  const totalTasks = activeChecklist.length;
  const completedTasks = activeChecklist.filter((item) => checkedItems[item.id]).length;
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  const handleToggle = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReset = () => {
    const activeIds = activeChecklist.map((item) => item.id);
    setCheckedItems((prev) => {
      const updated = { ...prev };
      activeIds.forEach((id) => {
        updated[id] = false;
      });
      return updated;
    });
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Checklists"
        title="Engineering Checklists & Validation Boards"
        description="Verify your application is production-ready. Tick items off in real-time, view your completion progress, and follow detailed audit steps."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Tabs and Progress Bar Panel */}
        <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md mb-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-subtle-border/50 pb-5">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab("web")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "web"
                    ? "bg-accent text-white shadow-sm"
                    : "bg-slate-100 text-muted hover:bg-slate-200"
                }`}
              >
                Website Launch Checklist
              </button>
              <button
                onClick={() => setActiveTab("saas")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "saas"
                    ? "bg-accent text-white shadow-sm"
                    : "bg-slate-100 text-muted hover:bg-slate-200"
                }`}
              >
                SaaS MVP Checklist
              </button>
              <button
                onClick={() => setActiveTab("seo")}
                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "seo"
                    ? "bg-accent text-white shadow-sm"
                    : "bg-slate-100 text-muted hover:bg-slate-200"
                }`}
              >
                SEO Audit Checklist
              </button>
            </div>

            {/* Reset button */}
            <button
              onClick={handleReset}
              className="text-xs font-bold text-dimmed hover:text-heading cursor-pointer inline-flex items-center gap-1"
            >
              Reset Current List
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center text-xs font-bold text-heading mb-2">
              <span>Task Progress</span>
              <span>{completedTasks} / {totalTasks} Completed ({progressPercent}%)</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent-light transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tasks Checklist Grid */}
        <div className="grid gap-4">
          {activeChecklist.map((item) => (
            <label
              key={item.id}
              onClick={() => handleToggle(item.id)}
              className={`rounded-xl border p-5 flex gap-4 cursor-pointer transition-all select-none ${
                checkedItems[item.id]
                  ? "bg-emerald-50/20 border-emerald-500/30"
                  : "bg-white border-subtle-border hover:border-accent-light/30"
              }`}
            >
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-subtle-border bg-white transition-all">
                {checkedItems[item.id] && (
                  <Icon name="check" size={13} className="text-emerald-600 font-bold" />
                )}
              </div>
              <div>
                <h3 className={`text-sm font-extrabold text-heading ${checkedItems[item.id] ? "line-through text-dimmed" : ""}`}>
                  {item.task}
                </h3>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
