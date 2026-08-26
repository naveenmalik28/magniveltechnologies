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

export function ChecklistsClient() {
  const [activeTab, setActiveTab] = useState<"web" | "saas" | "seo">("web");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    "web-1": true,
  });

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

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Panel */}
        <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-lg mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-subtle-border/60 pb-5">
            {/* Tab navigation buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "web", label: "Website Launch Checklist" },
                { id: "saas", label: "SaaS MVP Checklist" },
                { id: "seo", label: "SEO Audit Checklist" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "web" | "saas" | "seo")}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-background-secondary text-muted border border-subtle-border hover:border-primary/40 hover:text-heading"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Reset button */}
            <button
              onClick={handleReset}
              className="text-xs font-bold text-muted hover:text-heading cursor-pointer inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <Icon name="x" size={14} />
              Reset List
            </button>
          </div>

          {/* Progress bar container */}
          <div className="mt-6">
            <div className="flex justify-between items-center text-xs font-bold text-heading mb-2.5">
              <span className="flex items-center gap-1.5">
                <Icon name="check-circle" size={15} className="text-primary" />
                Task Completion Progress
              </span>
              <span className={`font-mono text-sm ${progressPercent === 100 ? "text-emerald-600 font-extrabold" : "text-primary"}`}>
                {completedTasks} / {totalTasks} Completed ({progressPercent}%)
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-200 overflow-hidden p-0.5 shadow-inner">
              <div
                className={`h-full transition-all duration-500 ease-out rounded-full ${
                  progressPercent === 100
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm"
                    : "bg-gradient-to-r from-primary to-accent-secondary shadow-sm"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Tasks Checklist Cards */}
        <div className="grid gap-3.5">
          {activeChecklist.map((item, index) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`rounded-2xl border p-5 flex gap-4 cursor-pointer transition-all duration-200 select-none shadow-sm ${
                  isChecked
                    ? "bg-emerald-50/70 border-emerald-300/80 shadow-emerald-900/5"
                    : "bg-surface border-subtle-border hover:border-primary/40 hover:bg-slate-50/80 hover:shadow-md"
                }`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {/* Visible high-contrast Checkbox */}
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 transition-all duration-200 ${
                    isChecked
                      ? "bg-emerald-600 border-emerald-600 shadow-md shadow-emerald-600/30 text-white"
                      : "border-slate-300 bg-white hover:border-primary hover:bg-slate-50"
                  }`}
                >
                  {isChecked && (
                    <Icon name="check" size={14} className="text-white font-extrabold" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-sm font-extrabold transition-colors duration-200 ${
                        isChecked
                          ? "line-through text-slate-500"
                          : "text-heading"
                      }`}
                    >
                      {item.task}
                    </h3>
                    {isChecked && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700 uppercase tracking-wider shrink-0">
                        <Icon name="check" size={10} /> Completed
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-1 text-xs leading-relaxed transition-colors duration-200 ${
                      isChecked ? "text-slate-500" : "text-muted font-medium"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
