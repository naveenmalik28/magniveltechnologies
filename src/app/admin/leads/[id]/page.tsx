import { notFound } from "next/navigation";
import { isLeadStatus, prisma } from "@/lib/db";
import { AdminFrame } from "@/components/admin-frame";
import { LeadDetailConsole } from "@/components/lead-detail-console";

export const metadata = { title: "Lead Record | Magnivel Technologies" };
export const dynamic = "force-dynamic";

export default async function LeadDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id: Number(id) } });
  if (!lead) notFound();
  if (!isLeadStatus(lead.status)) notFound();

  // Serialize date to prevent Next.js Client Component serialization warnings
  const serializedLead = {
    ...lead,
    created_at: lead.created_at.toISOString(),
  };

  return (
    <AdminFrame title="Lead Detail Record" activeTab="leads">
      <LeadDetailConsole initialLead={serializedLead} />
    </AdminFrame>
  );
}
