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
    globalForDb.magnivelPool = mysql.createPool({
      host: required("DB_HOST"),
      port: Number(process.env.DB_PORT || 3306),
      database: required("DB_DATABASE"),
      user: required("DB_USER"),
      password: required("DB_PASSWORD"),
      connectionLimit: 10,
      namedPlaceholders: true,
    });
  }

  return globalForDb.magnivelPool;
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
