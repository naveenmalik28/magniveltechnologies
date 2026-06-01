import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadActions } from "@/components/lead-actions";
import { isLeadStatus, prisma } from "@/lib/db";

export const metadata = { title: "Lead Details" };
export const dynamic = "force-dynamic";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id: Number(id) } });
  if (!lead) notFound();
  if (!isLeadStatus(lead.status)) notFound();

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-semibold text-emerald-950">Lead Details</h1>
          <Link className="text-sm font-medium text-emerald-700" href="/admin/leads">
            Back to leads
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">{lead.status}</p>
              <h2 className="mt-2 text-3xl font-semibold text-emerald-950">{lead.full_name}</h2>
              <p className="mt-2 text-slate-600">{new Date(lead.created_at).toLocaleString()}</p>
            </div>
            <LeadActions id={lead.id} status={lead.status} />
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Email", lead.email],
              ["Phone", lead.phone],
              ["Company", lead.company_name || "Not provided"],
              ["Service", lead.service_type],
              ["Budget", lead.budget],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md bg-slate-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</dt>
                <dd className="mt-2 text-sm font-medium text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 rounded-md bg-emerald-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Project Details</p>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-800">{lead.message}</p>
          </div>
        </article>
      </div>
    </main>
  );
}
