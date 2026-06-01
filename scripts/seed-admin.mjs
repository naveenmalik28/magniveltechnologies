import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { loadEnv, required } from "./env.mjs";

loadEnv();

const prisma = new PrismaClient();
const adminEmail = (process.env.ADMIN_EMAIL || "contact@magnivel.com").trim().toLowerCase();
const adminPassword = required("ADMIN_SEED_PASSWORD");

try {
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail },
    select: { id: true },
  });

  if (existingAdmin) {
    console.log(`Admin user already exists: ${adminEmail}`);
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    await prisma.admin.create({
      data: { email: adminEmail, password: hashedPassword },
    });

    console.log(`Admin user created: ${adminEmail}`);
  }
} finally {
  await prisma.$disconnect();
}
