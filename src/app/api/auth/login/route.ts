import { NextResponse } from "next/server";
import { adminCookieOptions, createAdminToken, verifyAdminCredentials } from "@/lib/auth";
import { validateLogin } from "@/lib/validation";

export const dynamic = "force-dynamic";

function getErrorCode(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error
    ? String((error as { code?: unknown }).code)
    : "";
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function loginFailureResponse(error: unknown) {
  const code = getErrorCode(error);
  const message = getErrorMessage(error);

  if (message.includes("JWT_SECRET is not configured")) {
    console.error("Admin login configuration error: JWT_SECRET is missing");
    return NextResponse.json(
      { message: "Server authentication is not configured. Please set JWT_SECRET in Vercel." },
      { status: 500 },
    );
  }

  if (message.includes("is not configured")) {
    console.error("Admin login configuration error:", message);
    return NextResponse.json(
      { message: "Database is not configured. Please check Vercel environment variables." },
      { status: 500 },
    );
  }

  if (code === "P2021") {
    console.error("Admin login database error: admins table is missing");
    return NextResponse.json(
      { message: "Admin table is missing. Please run npm run db:push and seed the admin user." },
      { status: 500 },
    );
  }

  if (["P1000", "P1001", "P1002", "P1003"].includes(code)) {
    console.error("Admin login database connection error:", code, message);
    return NextResponse.json(
      { message: "Database connection failed. Please check DATABASE_URL and Neon access." },
      { status: 503 },
    );
  }

  console.error("Admin login failed", error);
  return NextResponse.json({ message: "Unable to sign in right now." }, { status: 500 });
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const validation = validateLogin(body);
    if (!validation.data) return NextResponse.json({ message: validation.error }, { status: 400 });

    const ok = await verifyAdminCredentials(validation.data.email, validation.data.password);
    if (!ok) return NextResponse.json({ message: "Invalid admin credentials." }, { status: 401 });

    const token = await createAdminToken(validation.data.email);
    const response = NextResponse.json({ message: "Signed in." });
    response.cookies.set({ ...adminCookieOptions(), value: token });
    return response;
  } catch (error) {
    return loginFailureResponse(error);
  }
}
