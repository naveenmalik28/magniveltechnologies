"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LeadStatus } from "@/lib/db";
import { Icon } from "@/components/icon";

export function LeadActions({ id, status }: { id: number; status: LeadStatus }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function update(nextStatus?: LeadStatus, remove = false) {
    if (remove && !confirm("Are you sure you want to permanently delete this lead?")) {
      return;
    }
    
    setLoading(true);
    await fetch(remove ? `/api/leads/${id}` : `/api/leads/${id}/status`, {
      method: remove ? "DELETE" : "PATCH",
      headers: { "Content-Type": "application/json" },
      body: remove ? undefined : JSON.stringify({ status: nextStatus }),
    });
    router.refresh();
    if (remove) router.push("/admin/leads");
    setLoading(false);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {status !== "contacted" ? (
        <button 
          disabled={loading} 
          onClick={() => update("contacted")} 
          className="inline-flex items-center gap-1.5 border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400 transition-all font-semibold rounded-lg text-xs sm:text-sm px-3.5 py-2 cursor-pointer disabled:opacity-50"
        >
          <Icon name="message-circle" size={14} />
          Mark Contacted
        </button>
      ) : null}
      
      {status !== "closed" ? (
        <button 
          disabled={loading} 
          onClick={() => update("closed")} 
          className="inline-flex items-center gap-1.5 border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all font-semibold rounded-lg text-xs sm:text-sm px-3.5 py-2 cursor-pointer disabled:opacity-50"
        >
          <Icon name="check-circle" size={14} />
          Mark Closed
        </button>
      ) : null}
      
      <button 
        disabled={loading} 
        onClick={() => update(undefined, true)} 
        className="inline-flex items-center gap-1.5 border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-400 transition-all font-semibold rounded-lg text-xs sm:text-sm px-3.5 py-2 cursor-pointer disabled:opacity-50"
      >
        <Icon name="trash" size={14} />
        Delete Record
      </button>
    </div>
  );
}
