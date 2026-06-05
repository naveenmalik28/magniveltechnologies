import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadActions } from "@/components/lead-actions";
import { isLeadStatus, prisma } from "@/lib/db";
import { AdminFrame } from "@/components/admin-frame";

export const metadata = { title: "Lead Record | Magnivel Technologies" };
export const dynamic = "force-dynamic";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id: Number(id) } });
  if (!lead) notFound();
  if (!isLeadStatus(lead.status)) notFound();

  return (
    <AdminFrame title="Lead Detail Record" activeTab="leads">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="mb-4">
          <Link className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-dark hover:underline" href="/admin/leads">
            ← Return to lead records
          </Link>
        </div>

        <article className="rounded-xl border border-subtle-border bg-surface p-6 sm:p-8 shadow-2xl relative glow-card overflow-hidden">
          {/* Action header */}
          <div className="flex flex-wrap items-start justify-between gap-6 border-b border-subtle-border/60 pb-6 mb-6">
            <div className="flex flex-col gap-2">
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border shadow-sm ${
                lead.status === "new" 
                  ? "bg-accent-subtle text-accent-dark border-accent/15"
                  : lead.status === "contacted"
                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
              }`}>
                <span className={`h-1.5 w-1.5 rounded-full ${
                  lead.status === "new"
                    ? "bg-accent animate-pulse-glow"
                    : lead.status === "contacted"
                    ? "bg-yellow-500"
                    : "bg-emerald-500"
                }`} />
                {lead.status} Request
              </span>
              
              <h2 className="text-3xl font-extrabold text-heading tracking-tight">{lead.full_name}</h2>
              <p className="text-xs text-dimmed font-mono mt-0.5">
                Received: {new Date(lead.created_at).toLocaleString()}
              </p>
            </div>
            
            <LeadActions id={lead.id} status={lead.status} />
          </div>

          {/* Profile fields grid */}
          <dl className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Contact Email", lead.email, "📧"],
              ["Company Group", lead.company_name || "Not provided", "🏢"],
              ["Country", lead.country, "🌍"],
              ["Required Service", lead.service_type, "🔧"],
            ].map(([label, value, emoji]) => (
              <div key={label} className="rounded-lg border border-subtle-border bg-background/30 p-4 hover:bg-slate-50 transition-colors">
                <dt className="text-[10px] font-semibold uppercase tracking-widest text-dimmed flex items-center gap-1.5">
                  <span>{emoji}</span> {label}
                </dt>
                <dd className="mt-2 text-sm font-bold text-heading leading-relaxed whitespace-nowrap overflow-ellipsis overflow-hidden">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Message section */}
          <div className="mt-6 rounded-lg bg-accent-subtle/30 border border-accent/15 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-accent-dark flex items-center gap-1.5">
              📝 Project Description / Client Requirements
            </p>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-heading font-medium">
              {lead.message}
            </p>
          </div>
        </article>
      </div>
    </AdminFrame>
  );
}
