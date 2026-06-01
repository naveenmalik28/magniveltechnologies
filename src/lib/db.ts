import mysql from "mysql2/promise";

const globalForDb = globalThis as unknown as {
  magnivelPool?: mysql.Pool;
};

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured.`);
  return value;
}

export function getPool() {
  if (!globalForDb.magnivelPool) {
    const sslEnabled = process.env.DB_SSL === "true";
    const rejectUnauthorized = process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false";

    globalForDb.magnivelPool = mysql.createPool({
      host: required("DB_HOST"),
      port: Number(process.env.DB_PORT || 3306),
      database: required("DB_DATABASE"),
      user: required("DB_USER"),
      password: required("DB_PASSWORD"),
      connectionLimit: 10,
      connectTimeout: 10000,
      namedPlaceholders: true,
      ssl: sslEnabled ? { rejectUnauthorized } : undefined,
    });
  }

  return globalForDb.magnivelPool;
}

export async function assertDatabaseConnection() {
  const [rows] = await getPool().query("SELECT 1 AS ok");
  return rows;
}

export type LeadStatus = "new" | "contacted" | "closed";

export type Lead = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  company_name: string | null;
  service_type: string;
  budget: string;
  message: string;
  status: LeadStatus;
  created_at: Date;
};
