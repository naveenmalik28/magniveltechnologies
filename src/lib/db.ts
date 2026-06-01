import "server-only";

import { PrismaClient, type Lead as PrismaLead } from "@prisma/client";

const globalForDb = globalThis as unknown as {
  magnivelPrisma?: PrismaClient;
};

export const prisma =
  globalForDb.magnivelPrisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.magnivelPrisma = prisma;
}

export type LeadStatus = "new" | "contacted" | "closed";
export type Lead = PrismaLead & { status: LeadStatus };

export function isLeadStatus(status: string): status is LeadStatus {
  return ["new", "contacted", "closed"].includes(status);
}

export async function assertDatabaseConnection() {
  return prisma.$queryRaw`SELECT 1 AS ok`;
}
