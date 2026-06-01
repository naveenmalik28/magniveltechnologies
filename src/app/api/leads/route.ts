import { NextRequest, NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const search = request.nextUrl.searchParams.get("search") || "";
  const status = request.nextUrl.searchParams.get("status") || "";
  const values = {
    search: `%${search}%`,
    status,
  };
  const where = [
    search ? "(full_name LIKE :search OR email LIKE :search OR phone LIKE :search OR company_name LIKE :search)" : "",
    ["new", "contacted", "closed"].includes(status) ? "status = :status" : "",
  ].filter(Boolean);

  const [rows] = await getPool().execute(
    `SELECT * FROM leads ${where.length ? `WHERE ${where.join(" AND ")}` : ""} ORDER BY created_at DESC LIMIT 100`,
    values,
  );

  return NextResponse.json({ leads: rows });
}
