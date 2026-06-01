import { PrismaClient } from "@prisma/client";
import { loadEnv } from "./env.mjs";

loadEnv();

const prisma = new PrismaClient();

try {
  const databaseRows = await prisma.$queryRaw`SELECT current_database() AS db, 1 AS ok`;
  const admin = await prisma.admin.findUnique({
    where: { email: (process.env.ADMIN_EMAIL || "contact@magnivel.com").trim().toLowerCase() },
    select: { id: true, email: true, createdAt: true },
  });

  console.log("PostgreSQL connection OK:", databaseRows[0]);
  console.log(admin ? "Admin seed user exists." : "Admin seed user is missing.");
} finally {
  await prisma.$disconnect();
}
