import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const { id } = await context.params;
  await prisma.lead.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: "Lead deleted." });
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const { id } = await context.params;
  let body: { status?: string; notes?: string; archived?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const updateData: Record<string, string | boolean> = {};
  
  if (body.status !== undefined) {
    updateData.status = body.status;
  }
  if (body.notes !== undefined) {
    updateData.notes = body.notes;
  }
  if (body.archived !== undefined) {
    updateData.archived = body.archived;
  }

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ message: "No update fields provided." }, { status: 400 });
  }

  const updated = await prisma.lead.update({
    where: { id: Number(id) },
    data: updateData,
  });

  return NextResponse.json({ message: "Lead updated successfully.", lead: updated });
}
