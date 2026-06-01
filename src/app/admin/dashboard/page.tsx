import Link from "next/link";
import { prisma } from "@/lib/db";

export const metadata = { title: "Admin Dashboard" };
export const dynamic = "force-dynamic";

type Summary = {
  total: number;
  newLeads: number;
  contacted: number;
  closed: number;
};

export default async function AdminDashboardPage() {
  const [total, newLeads, contacted, closed] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "new" } }),
    prisma.lead.count({ where: { status: "contacted" } }),
    prisma.lead.count({ where: { status: "closed" } }),
  ]);
  const summary: Summary = { total, newLeads, contacted, closed };

  return (
    <AdminFrame title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Total Leads", summary.total],
          ["New Leads", summary.newLeads],
          ["Contacted Leads", summary.contacted],
          ["Closed Leads", summary.closed],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-emerald-950/10 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-600">{label}</p>
            <p className="mt-3 text-3xl font-semibold text-emerald-950">{value}</p>
          </div>
        ))}
      </div>
    </AdminFrame>
  );
}

function AdminFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-emerald-950">{title}</h1>
          <nav className="flex gap-4 text-sm font-medium text-slate-700">
            <Link href="/admin/dashboard">Dashboard</Link>
            <Link href="/admin/leads">Leads</Link>
          </nav>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
