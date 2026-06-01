import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const [rows] = await getPool().execute(
    `SELECT
      COUNT(*) AS total,
      SUM(status = 'new') AS newLeads,
      SUM(status = 'contacted') AS contacted,
      SUM(status = 'closed') AS closed
     FROM leads`,
  );

  return NextResponse.json({ summary: (rows as unknown[])[0] });
}
