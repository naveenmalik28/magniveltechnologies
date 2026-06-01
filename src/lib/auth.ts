import "server-only";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getPool } from "./db";
import { adminCookieName, createAdminToken, verifyToken } from "./session";

export { adminCookieName, createAdminToken, verifyToken };

export async function requireAdminFromCookies() {
  const store = await cookies();
  return verifyToken(store.get(adminCookieName)?.value);
}

export async function requireAdminFromRequest(request: NextRequest) {
  return verifyToken(request.cookies.get(adminCookieName)?.value);
}

export function adminCookieOptions() {
  return {
    name: adminCookieName,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  };
}

export async function verifyAdminCredentials(email: string, password: string) {
  const [rows] = await getPool().execute(
    "SELECT email, password FROM admins WHERE email = :email LIMIT 1",
    { email },
  );
  const admin = (rows as { email: string; password: string }[])[0];
  if (!admin) return false;
  return bcrypt.compare(password, admin.password);
}
