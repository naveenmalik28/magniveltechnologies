import { SignJWT, jwtVerify } from "jose";

export const adminCookieName = "magnivel_admin";

function secret() {
  const value = process.env.JWT_SECRET;
  if (!value) throw new Error("JWT_SECRET is not configured.");
  return new TextEncoder().encode(value);
}

export async function createAdminToken(email: string) {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret());
}

export async function verifyToken(token?: string) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    return typeof payload.email === "string" ? { email: payload.email } : null;
  } catch {
    return null;
  }
}
