"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LeadStatus } from "@/lib/db";

export function LeadActions({ id, status }: { id: number; status: LeadStatus }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function update(nextStatus?: LeadStatus, remove = false) {
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
        <button disabled={loading} onClick={() => update("contacted")} className="rounded-md border px-3 py-2 text-sm">
          Mark Contacted
        </button>
      ) : null}
      {status !== "closed" ? (
        <button disabled={loading} onClick={() => update("closed")} className="rounded-md border px-3 py-2 text-sm">
          Mark Closed
        </button>
      ) : null}
      <button disabled={loading} onClick={() => update(undefined, true)} className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-700">
        Delete
      </button>
    </div>
  );
}
