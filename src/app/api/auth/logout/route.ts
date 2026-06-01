import { NextResponse } from "next/server";
import { adminCookieName } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ message: "Signed out." });
  response.cookies.set(adminCookieName, "", { path: "/", maxAge: 0 });
  return response;
}
