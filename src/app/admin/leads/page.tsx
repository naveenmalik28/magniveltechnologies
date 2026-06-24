import { prisma } from "@/lib/db";
import { AdminFrame } from "@/components/admin-frame";
import { LeadsListConsole } from "@/components/leads-list-console";

export const metadata = { title: "Inquiries Console | Magnivel Technologies" };
export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { created_at: "desc" },
    take: 500,
  });

  // Serialize dates to prevent Next.js Client Component serialization warnings
  const serializedLeads = leads.map((lead) => ({
    ...lead,
    created_at: lead.created_at.toISOString(),
  }));

  return (
    <AdminFrame title="Client Inquiries File" activeTab="leads">
      <LeadsListConsole initialLeads={serializedLeads} />
    </AdminFrame>
  );
}
