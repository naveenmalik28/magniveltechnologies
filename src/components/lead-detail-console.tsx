"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@/components/icon";

interface Lead {
  id: number;
  full_name: string;
  email: string;
  phone_code: string;
  phone_number: string;
  company_name: string | null;
  country: string;
  service_type: string;
  budget: string;
  timeline: string;
  message: string;
  status: string;
  notes: string;
  archived: boolean;
  created_at: string | Date;
}

const STATUS_OPTIONS = [
  { value: "new", label: "New", color: "bg-teal-50 text-teal-700 border-teal-200" },
  { value: "contacted", label: "Contacted", color: "bg-blue-50 text-blue-700 border-blue-200" },
  { value: "in discussion", label: "In Discussion", color: "bg-amber-50 text-amber-700 border-amber-200" },
  { value: "proposal sent", label: "Proposal Sent", color: "bg-purple-50 text-purple-700 border-purple-200" },
  { value: "won", label: "Won", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  { value: "closed", label: "Closed", color: "bg-rose-50 text-rose-700 border-rose-200" }
];

export function LeadDetailConsole({ initialLead }: { initialLead: Lead }) {
  const router = useRouter();
  const [lead, setLead] = useState<Lead>(initialLead);
  const [notes, setNotes] = useState(initialLead.notes || "");
  const [savingNotes, setSavingNotes] = useState(false);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [archiving, setArchiving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const currentStatusObj = STATUS_OPTIONS.find((s) => s.value === lead.status) || STATUS_OPTIONS[0];

  async function updateLeadField(data: Record<string, string | boolean>) {
    setErrorMsg("");
    setSuccessMsg("");
    try {
      const response = await fetch(`/api/leads/${lead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update lead.");
      }
      const res = await response.json();
      setLead(res.lead);
      router.refresh();
      return res.lead;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An error occurred.";
      setErrorMsg(msg);
      throw err;
    }
  }

  async function handleStatusChange(nextStatus: string) {
    setUpdatingStatus(true);
    try {
      await updateLeadField({ status: nextStatus });
      setSuccessMsg(`Status updated to "${nextStatus}"`);
    } catch {}
    setUpdatingStatus(false);
  }

  async function handleSaveNotes() {
    setSavingNotes(true);
    try {
      await updateLeadField({ notes });
      setSuccessMsg("Notes saved successfully.");
    } catch {}
    setSavingNotes(false);
  }

  async function handleToggleArchive() {
    setArchiving(true);
    try {
      const updated = await updateLeadField({ archived: !lead.archived });
      setSuccessMsg(updated.archived ? "Lead archived." : "Lead unarchived.");
    } catch {}
    setArchiving(false);
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to permanently delete this lead? This action cannot be undone.")) {
      return;
    }
    setDeleting(true);
    try {
      const response = await fetch(`/api/leads/${lead.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete lead.");
      router.push("/admin/leads");
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete lead.";
      setErrorMsg(msg);
      setDeleting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Link className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-600 transition-colors" href="/admin/leads">
          ← Return to lead records
        </Link>

        {lead.archived && (
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Archived Lead
          </span>
        )}
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm font-medium">
          {errorMsg}
        </div>
      )}

      {successMsg && (
        <div className="p-4 rounded-xl border border-teal-200 bg-teal-50 text-teal-700 text-sm font-medium animate-fade-in">
          {successMsg}
        </div>
      )}

      <article className="rounded-[24px] border border-subtle-border bg-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Action Header */}
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-subtle-border/60 pb-6 mb-6">
          <div className="flex flex-col gap-2">
            <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border shadow-xs ${currentStatusObj.color}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {currentStatusObj.label}
            </span>
            <h2 className="text-3xl font-extrabold text-heading tracking-tight">{lead.full_name}</h2>
            <p className="text-xs text-dimmed font-mono">
              Submitted: {new Date(lead.created_at).toLocaleString()}
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="flex flex-wrap gap-2.5">
            {lead.status !== "contacted" && (
              <button
                disabled={updatingStatus}
                onClick={() => handleStatusChange("contacted")}
                className="inline-flex items-center gap-1.5 border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold rounded-xl text-xs sm:text-sm px-4 py-2.5 cursor-pointer disabled:opacity-50 transition-all"
              >
                <Icon name="message-circle" size={14} />
                Mark Contacted
              </button>
            )}

            <button
              disabled={archiving}
              onClick={handleToggleArchive}
              className={`inline-flex items-center gap-1.5 border font-bold rounded-xl text-xs sm:text-sm px-4 py-2.5 cursor-pointer disabled:opacity-50 transition-all ${
                lead.archived
                  ? "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon name="eye" size={14} />
              {lead.archived ? "Unarchive Lead" : "Archive Lead"}
            </button>

            <button
              disabled={deleting}
              onClick={handleDelete}
              className="inline-flex items-center gap-1.5 border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 font-bold rounded-xl text-xs sm:text-sm px-4 py-2.5 cursor-pointer disabled:opacity-50 transition-all"
            >
              <Icon name="trash" size={14} />
              Delete Lead
            </button>
          </div>
        </div>

        {/* Lead profile details */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[
            { label: "Contact Email", value: lead.email, emoji: "📧", href: `mailto:${lead.email}` },
            { label: "Phone Number", value: lead.phone_code ? `${lead.phone_code} ${lead.phone_number}` : lead.phone_number || "Not provided", emoji: "📞", href: lead.phone_number ? `tel:${lead.phone_code}${lead.phone_number}` : undefined },
            { label: "Company Name", value: lead.company_name || "Not provided", emoji: "🏢" },
            { label: "Country", value: lead.country, emoji: "🌍" },
            { label: "Required Service", value: lead.service_type, emoji: "🔧" },
            { label: "Project Budget", value: lead.budget, emoji: "💰" },
            { label: "Expected Timeline", value: lead.timeline || "Not provided", emoji: "⏱️" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-subtle-border bg-[#FCFBF8]/50 p-4 transition-all hover:bg-[#FCFBF8]">
              <span className="text-[10px] font-bold uppercase tracking-widest text-dimmed flex items-center gap-1.5">
                <span>{item.emoji}</span> {item.label}
              </span>
              <div className="mt-1.5 text-sm font-bold text-heading break-all">
                {item.href ? (
                  <a href={item.href} className="text-teal-800 hover:underline transition-all">
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="mt-6 rounded-2xl bg-teal-50/30 border border-teal-100 p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 flex items-center gap-1.5">
            📝 Project Description
          </span>
          <p className="mt-3.5 whitespace-pre-wrap text-sm leading-relaxed text-heading font-medium">
            {lead.message}
          </p>
        </div>

        <div className="border-t border-subtle-border/60 mt-6 pt-6 grid gap-6 md:grid-cols-2">
          {/* Status Changer */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-heading">Update Status</span>
            <div className="relative w-full max-w-xs">
              <select
                value={lead.status}
                disabled={updatingStatus}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white font-semibold text-sm text-heading outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 appearance-none pr-10"
              >
                {STATUS_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          {/* Internal Notes */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-heading">Internal Admin Notes</span>
              <button
                disabled={savingNotes}
                onClick={handleSaveNotes}
                className="text-xs font-bold text-teal-800 hover:text-teal-600 disabled:opacity-50 transition-colors cursor-pointer"
              >
                {savingNotes ? "Saving..." : "Save Notes"}
              </button>
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this lead (only visible to admins)..."
              rows={4}
              className="w-full p-4 rounded-xl border border-gray-200 bg-white text-sm text-heading font-medium outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10 resize-y"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
