"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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
  created_at: string; // ISO string from server
}

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  "new": { label: "New", color: "bg-teal-50 text-teal-700 border-teal-200" },
  "contacted": { label: "Contacted", color: "bg-blue-50 text-blue-700 border-blue-200" },
  "in discussion": { label: "In Discussion", color: "bg-amber-50 text-amber-700 border-amber-200" },
  "proposal sent": { label: "Proposal Sent", color: "bg-purple-50 text-purple-700 border-purple-200" },
  "won": { label: "Won", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "closed": { label: "Closed", color: "bg-rose-50 text-rose-700 border-rose-200" }
};

export function LeadsListConsole({ initialLeads }: { initialLeads: Lead[] }) {
  const leads = initialLeads;
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState(""); // "", "today", "7days", "30days"
  const [showArchived, setShowArchived] = useState(false);

  // Dynamic values for select dropdown filters
  const uniqueCountries = useMemo(() => {
    const set = new Set(leads.map(l => l.country).filter(Boolean));
    return Array.from(set).sort();
  }, [leads]);

  const uniqueServices = useMemo(() => {
    const set = new Set(leads.map(l => l.service_type).filter(Boolean));
    return Array.from(set).sort();
  }, [leads]);

  // Filter and Search logic
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // Archived filter
      if (lead.archived !== showArchived) return false;

      // Status filter
      if (statusFilter && lead.status !== statusFilter) return false;

      // Service filter
      if (serviceFilter && lead.service_type !== serviceFilter) return false;

      // Country filter
      if (countryFilter && lead.country !== countryFilter) return false;

      // Date filter
      if (dateFilter) {
        const leadDate = new Date(lead.created_at);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - leadDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (dateFilter === "today") {
          const today = new Date();
          if (leadDate.toDateString() !== today.toDateString()) return false;
        } else if (dateFilter === "7days" && diffDays > 7) {
          return false;
        } else if (dateFilter === "30days" && diffDays > 30) {
          return false;
        }
      }

      // Search (Name, Email, Phone, Company)
      if (search.trim()) {
        const query = search.toLowerCase();
        const nameMatch = lead.full_name.toLowerCase().includes(query);
        const emailMatch = lead.email.toLowerCase().includes(query);
        const companyMatch = (lead.company_name || "").toLowerCase().includes(query);
        const phoneMatch = `${lead.phone_code}${lead.phone_number}`.includes(query);
        
        if (!nameMatch && !emailMatch && !companyMatch && !phoneMatch) {
          return false;
        }
      }

      return true;
    });
  }, [leads, search, statusFilter, serviceFilter, countryFilter, dateFilter, showArchived]);

  // CSV Export
  function exportCSV() {
    const headers = ["Name", "Email", "Phone", "Company", "Country", "Service", "Budget", "Timeline", "Date", "Status", "Archived", "Notes"];
    const rows = filteredLeads.map((l) => [
      l.full_name,
      l.email,
      `${l.phone_code}${l.phone_number}`,
      l.company_name || "N/A",
      l.country,
      l.service_type,
      l.budget,
      l.timeline || "N/A",
      new Date(l.created_at).toLocaleDateString(),
      l.status,
      l.archived ? "Yes" : "No",
      (l.notes || "").replace(/\n/g, " ")
    ]);

    const BOM = "\uFEFF"; // Byte Order Mark for Excel UTF-8 support
    const csvContent = BOM + [headers.join(","), ...rows.map(r => r.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `leads_export_${showArchived ? "archived_" : ""}${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Excel Export (Tab-separated XLS file format for native Excel integration)
  function exportExcel() {
    const headers = ["Name", "Email", "Phone", "Company", "Country", "Service", "Budget", "Timeline", "Date", "Status", "Archived", "Notes"];
    const rows = filteredLeads.map((l) => [
      l.full_name,
      l.email,
      `${l.phone_code}${l.phone_number}`,
      l.company_name || "N/A",
      l.country,
      l.service_type,
      l.budget,
      l.timeline || "N/A",
      new Date(l.created_at).toLocaleDateString(),
      l.status,
      l.archived ? "Yes" : "No",
      (l.notes || "").replace(/\n/g, " ")
    ]);

    const BOM = "\uFEFF";
    const tsvContent = BOM + [headers.join("\t"), ...rows.map(r => r.map(val => `"${String(val).replace(/"/g, '""')}"`).join("\t"))].join("\n");
    const blob = new Blob([tsvContent], { type: "application/vnd.ms-excel;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `leads_export_${showArchived ? "archived_" : ""}${new Date().toISOString().split("T")[0]}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Reset Filters
  function resetFilters() {
    setSearch("");
    setStatusFilter("");
    setServiceFilter("");
    setCountryFilter("");
    setDateFilter("");
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Search and Filters Console */}
      <div className="grid gap-4 rounded-[20px] border border-subtle-border bg-white p-5 shadow-md">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-end">
          {/* Text Search */}
          <label className="flex flex-col gap-1.5 text-xs font-bold text-gray-500">
            <span>Search Query</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, company, email, phone..."
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-white text-heading text-sm outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/10"
            />
          </label>

          {/* Status Filter */}
          <label className="flex flex-col gap-1.5 text-xs font-bold text-gray-500">
            <span>Filter Status</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-white text-heading text-sm outline-none focus:border-[#0F766E]"
            >
              <option value="">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="in discussion">In Discussion</option>
              <option value="proposal sent">Proposal Sent</option>
              <option value="won">Won</option>
              <option value="closed">Closed</option>
            </select>
          </label>

          {/* Service Filter */}
          <label className="flex flex-col gap-1.5 text-xs font-bold text-gray-500">
            <span>Filter Service</span>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-white text-heading text-sm outline-none focus:border-[#0F766E]"
            >
              <option value="">All Services</option>
              {uniqueServices.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          {/* Country Filter */}
          <label className="flex flex-col gap-1.5 text-xs font-bold text-gray-500">
            <span>Filter Country</span>
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-white text-heading text-sm outline-none focus:border-[#0F766E]"
            >
              <option value="">All Countries</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          {/* Date Filter */}
          <label className="flex flex-col gap-1.5 text-xs font-bold text-gray-500">
            <span>Submission Date</span>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full h-11 px-3.5 rounded-xl border border-gray-200 bg-white text-heading text-sm outline-none focus:border-[#0F766E]"
            >
              <option value="">All Time</option>
              <option value="today">Today</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
            </select>
          </label>
        </div>

        {/* Action button row */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-4 mt-2">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowArchived(!showArchived)}
              className={`h-10 px-4 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                showArchived
                  ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {showArchived ? "Show Active Leads" : "Show Archived Leads"}
            </button>
            
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              disabled={filteredLeads.length === 0}
              className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 disabled:opacity-50 cursor-pointer transition-colors"
            >
              📥 Export CSV
            </button>
            <button
              onClick={exportExcel}
              disabled={filteredLeads.length === 0}
              className="inline-flex items-center gap-1.5 h-10 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-bold text-gray-700 disabled:opacity-50 cursor-pointer transition-colors"
            >
              📊 Export Excel
            </button>
          </div>
        </div>
      </div>

      {/* Leads Table Card */}
      <div className="overflow-hidden rounded-[24px] border border-subtle-border bg-white shadow-xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 text-sm">
            <thead className="bg-[#FCFBF8] text-left text-xs font-bold uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-6 py-4.5">Client</th>
                <th className="px-6 py-4.5">Service Required</th>
                <th className="px-6 py-4.5">Region</th>
                <th className="px-6 py-4.5">Budget & Timeline</th>
                <th className="px-6 py-4.5">Status</th>
                <th className="px-6 py-4.5 text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {filteredLeads.map((lead) => {
                const statusObj = STATUS_LABELS[lead.status] || STATUS_LABELS["new"];
                return (
                  <tr key={lead.id} className="hover:bg-[#FCFBF8]/50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <Link className="font-extrabold text-teal-800 hover:text-teal-600 transition-colors text-base" href={`/admin/leads/${lead.id}`}>
                        {lead.full_name}
                      </Link>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">{lead.email}</p>
                      <p className="text-xs text-gray-400 font-mono mt-0.5">{lead.phone_code}{lead.phone_number}</p>
                      {lead.company_name ? (
                        <span className="inline-flex items-center gap-1 rounded bg-gray-50 border border-gray-200/60 px-2 py-0.5 text-[10px] text-gray-500 font-bold mt-1.5">
                          🏢 {lead.company_name}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-heading text-sm">{lead.service_type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-lg border border-teal-100 bg-teal-50/50 px-2.5 py-1 text-xs font-bold text-teal-800">
                        {lead.country}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-heading text-xs">💰 {lead.budget}</span>
                        <span className="text-gray-500 text-xs">⏱️ {lead.timeline || "N/A"}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wider border shadow-xs ${statusObj.color}`}>
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {statusObj.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-xs text-gray-400">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}

              {filteredLeads.length === 0 && (
                <tr>
                  <td className="px-6 py-16 text-center text-gray-400" colSpan={6}>
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-3xl">📁</span>
                      <p className="font-bold text-heading text-base">No Inquiries Found</p>
                      <p className="text-xs text-gray-400 max-w-xs">
                        Try resetting your search query, status, service filters, or archived toggles.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
