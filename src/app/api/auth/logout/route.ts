import { NextResponse } from "next/server";
import { adminCookieOptions } from "@/lib/auth";

export async function POST() {
  const response = NextResponse.json({ message: "Signed out." });
  response.cookies.set({ ...adminCookieOptions(), value: "", maxAge: 0 });
  return response;
}
