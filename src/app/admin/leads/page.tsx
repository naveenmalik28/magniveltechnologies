import Link from "next/link";
import { prisma } from "@/lib/db";
import { AdminFrame } from "../dashboard/page";
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
              { phone: { contains: search, mode: "insensitive" } },
              { company_name: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(statusFilter ? { status: statusFilter } : {}),
    },
    orderBy: { created_at: "desc" },
    take: 100,
  });

  return (
    <AdminFrame title="Client Inquiries File">
      {/* Filtering forms */}
      <form className="grid gap-4 rounded-xl border border-subtle-border bg-surface/60 p-5 shadow-lg sm:grid-cols-[1fr_200px_auto] backdrop-blur-md items-center mb-6">
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          <span>Search text</span>
          <input 
            name="search" 
            defaultValue={search} 
            placeholder="Search name, company or email..." 
            className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all text-sm" 
          />
        </label>
        
        <label className="grid gap-1.5 text-xs font-semibold text-muted">
          <span>Filter Status</span>
          <select 
            name="status" 
            defaultValue={status} 
            className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 text-sm"
          >
            <option value="" className="bg-surface text-muted">All statuses</option>
            <option value="new" className="bg-surface text-white">New Request</option>
            <option value="contacted" className="bg-surface text-white">Contacted</option>
            <option value="closed" className="bg-surface text-white">Closed</option>
          </select>
        </label>
        
        <div className="pt-5 w-full">
          <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#8b5cf6] px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
            <Icon name="filter" size={14} />
            Filter Database
          </button>
        </div>
      </form>

      {/* Table listings */}
      <div className="overflow-hidden rounded-xl border border-subtle-border bg-surface/50 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-subtle-border/50 text-sm">
            <thead className="bg-surface text-left text-xs font-bold uppercase tracking-wider text-muted">
              <tr>
                <th className="px-6 py-4">Client Name</th>
                <th className="px-6 py-4">Required Service</th>
                <th className="px-6 py-4">Project Budget</th>
                <th className="px-6 py-4">Status Status</th>
                <th className="px-6 py-4 text-right">Inquiry Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-subtle-border/30 bg-background/20">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-surface/40 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <Link className="font-bold text-accent-light hover:text-accent transition-colors text-base" href={`/admin/leads/${lead.id}`}>
                      {lead.full_name}
                    </Link>
                    <p className="text-xs text-muted mt-0.5 font-medium">{lead.email}</p>
                    {lead.company_name ? (
                      <span className="inline-flex items-center gap-1 rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[10px] text-dimmed font-medium mt-1">
                        🏢 {lead.company_name}
                      </span>
                    ) : null}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-white">{lead.service_type}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted">{lead.budget}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wider border shadow-sm ${
                      lead.status === "new" 
                        ? "bg-accent-subtle/80 text-accent-light border-accent/15"
                        : lead.status === "contacted"
                        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        lead.status === "new"
                          ? "bg-accent animate-pulse-glow"
                          : lead.status === "contacted"
                          ? "bg-yellow-400"
                          : "bg-emerald-400"
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
                      <p className="font-bold">No Inquiries Found</p>
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
