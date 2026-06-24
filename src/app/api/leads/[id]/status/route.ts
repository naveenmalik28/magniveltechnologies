import { NextRequest, NextResponse } from "next/server";
import { prisma, LeadStatus } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const body = (await request.json()) as { status?: LeadStatus };
  if (!body.status || !["new", "contacted", "in discussion", "proposal sent", "won", "closed"].includes(body.status)) {
    return NextResponse.json({ message: "Invalid status." }, { status: 400 });
  }

  const { id } = await context.params;
  await prisma.lead.update({
    where: { id: Number(id) },
    data: { status: body.status },
  });
  return NextResponse.json({ message: "Lead updated." });
}
