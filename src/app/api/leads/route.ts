import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdminFromRequest } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const admin = await requireAdminFromRequest(request);
  if (!admin) return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

  const search = request.nextUrl.searchParams.get("search") || "";
  const status = request.nextUrl.searchParams.get("status") || "";
  const showArchived = request.nextUrl.searchParams.get("archived") === "true";
  const statusFilter = ["new", "contacted", "in discussion", "proposal sent", "won", "closed"].includes(status) ? status : undefined;

  const leads = await prisma.lead.findMany({
    where: {
      archived: showArchived,
      ...(search
        ? {
            OR: [
              { full_name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
              { phone_number: { contains: search, mode: "insensitive" } },
              { company_name: { contains: search, mode: "insensitive" } },
              { country: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(statusFilter ? { status: statusFilter } : {}),
    },
    orderBy: { created_at: "desc" },
    take: 200,
  });

  return NextResponse.json({ leads });
}
