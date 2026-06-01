import Link from "next/link";
import { prisma } from "@/lib/db";

export const metadata = { title: "Leads" };
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
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-emerald-950">Leads</h1>
          <Link className="text-sm font-medium text-emerald-700" href="/admin/dashboard">
            Dashboard
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <form className="grid gap-3 rounded-lg border border-emerald-950/10 bg-white p-4 shadow-sm sm:grid-cols-[1fr_180px_auto]">
          <input name="search" defaultValue={search} placeholder="Search leads" className="rounded-md border border-slate-300 px-3 py-2" />
          <select name="status" defaultValue={status} className="rounded-md border border-slate-300 px-3 py-2">
            <option value="">All statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
          </select>
          <button className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white">Filter</button>
        </form>
        <div className="mt-6 overflow-hidden rounded-lg border border-emerald-950/10 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-slate-600">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Budget</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-4 py-3">
                      <Link className="font-semibold text-emerald-800" href={`/admin/leads/${lead.id}`}>
                        {lead.full_name}
                      </Link>
                      <p className="text-slate-500">{lead.email}</p>
                    </td>
                    <td className="px-4 py-3">{lead.service_type}</td>
                    <td className="px-4 py-3">{lead.budget}</td>
                    <td className="px-4 py-3 capitalize">{lead.status}</td>
                    <td className="px-4 py-3">{new Date(lead.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
                {!leads.length ? (
                  <tr>
                    <td className="px-4 py-8 text-center text-slate-500" colSpan={5}>
                      No leads found.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
