import { NextResponse } from "next/server";
import { adminCookieOptions, createAdminToken, verifyAdminCredentials } from "@/lib/auth";
import { validateLogin } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const validation = validateLogin(await request.json());
    if (!validation.data) return NextResponse.json({ message: validation.error }, { status: 400 });

    const ok = await verifyAdminCredentials(validation.data.email, validation.data.password);
    if (!ok) return NextResponse.json({ message: "Invalid admin credentials." }, { status: 401 });

    const token = await createAdminToken(validation.data.email);
    const response = NextResponse.json({ message: "Signed in." });
    response.cookies.set({ ...adminCookieOptions(), value: token });
    return response;
  } catch (error) {
    console.error("Admin login failed", error);
    return NextResponse.json({ message: "Unable to sign in right now." }, { status: 500 });
  }
}
