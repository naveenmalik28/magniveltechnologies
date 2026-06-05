import Link from "next/link";
import { prisma } from "@/lib/db";
import { AdminFrame } from "@/components/admin-frame";
import { Icon } from "@/components/icon";

export const metadata = { title: "Inquiries Console | Magnivel Technologies" };
export const dynamic = "force-dynamic";

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || "";
  const status = params.status || "";
  const statusFilter = ["new", "contacted", "closed"].includes(status) ? status : undefined;
  const leads = await prisma.lead.findMany({
    where: {
      ...(search
        ? {
            OR: [
              { full_name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
              { phone_number: { contains: search, mode: "insensitive" } },
              { company_name: { contains: search, mode: "insensitive" } },
              { country: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(statusFilter ? { status: statusFilter } : {}),
    },
    orderBy: { created_at: "desc" },
    take: 100,
  });

  return (
    <AdminFrame title="Client Inquiries File" activeTab="leads">
      {/* Filtering forms */}
      <form className="grid gap-4 rounded-xl border border-subtle-border bg-surface p-5 shadow-lg sm:grid-cols-[1fr_200px_auto] items-center mb-6">
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          <span>Search text</span>
          <input 
            name="search" 
            defaultValue={search} 
            placeholder="Search name, company or email..." 
            className="rounded-lg border border-subtle-border bg-background px-3.5 py-2 text-heading outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all text-sm" 
          />
        </label>
        
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          <span>Filter Status</span>
          <select 
            name="status" 
            defaultValue={status} 
            className="rounded-lg border border-subtle-border bg-background px-3.5 py-2 text-heading outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 text-sm"
          >
            <option value="" className="bg-surface text-muted">All statuses</option>
            <option value="new" className="bg-surface text-heading">New Request</option>
            <option value="contacted" className="bg-surface text-heading">Contacted</option>
            <option value="closed" className="bg-surface text-heading">Closed</option>
          </select>
        </label>
        
        <div className="pt-5 w-full">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-accent to-accent-light px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
            <Icon name="filter" size={14} />
            Filter Database
          </button>
        </div>
      </form>

      {/* Table listings */}
      <div className="overflow-hidden rounded-xl border border-subtle-border bg-surface shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-subtle-border/50 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-bold uppercase tracking-wider text-muted">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Required Service</th>
                <th className="px-6 py-4">Country</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Inquiry Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-subtle-border/30 bg-white/20">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-accent-subtle/30 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <Link className="font-bold text-accent-dark hover:text-accent transition-colors text-base" href={`/admin/leads/${lead.id}`}>
                      {lead.full_name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5 font-medium">{lead.email}</p>
                    {lead.company_name ? (
                      <span className="inline-flex items-center gap-1 rounded bg-slate-100 border border-slate-200 px-1.5 py-0.5 text-[10px] text-muted font-medium mt-1">
                        🏢 {lead.company_name}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-heading">{lead.service_type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-lg border border-accent/15 bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent-dark">
                      {lead.country}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border shadow-sm ${
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
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-mono text-xs text-dimmed">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {!leads.length ? (
                <tr>
                  <td className="px-6 py-12 text-center text-muted" colSpan={5}>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">📁</span>
                      <p className="font-bold text-heading">No Inquiries Found</p>
                      <p className="text-xs text-dimmed">Try resetting your filters or search keys.</p>
                    </div>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </AdminFrame>
  );
}
