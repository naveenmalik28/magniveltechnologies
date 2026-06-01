import process from "node:process";
import mysql from "mysql2/promise";
import { loadEnv, required } from "./env.mjs";

loadEnv();

const sslEnabled = process.env.DB_SSL === "true";
const rejectUnauthorized = process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false";

const connection = await mysql.createConnection({
  host: required("DB_HOST"),
  port: Number(process.env.DB_PORT || 3306),
  database: required("DB_DATABASE"),
  user: required("DB_USER"),
  password: required("DB_PASSWORD"),
  connectTimeout: 10000,
  namedPlaceholders: true,
  ssl: sslEnabled ? { rejectUnauthorized } : undefined,
});

try {
  const [dbRows] = await connection.execute("SELECT DATABASE() AS db, 1 AS ok");
  const [adminRows] = await connection.execute(
    "SELECT id, email, created_at FROM admins WHERE email = :email LIMIT 1",
    { email: (process.env.ADMIN_EMAIL || "contact@magnivel.com").trim().toLowerCase() },
  );

  console.log("Database connection OK:", dbRows[0]);
  console.log(adminRows.length ? "Admin seed user exists." : "Admin seed user is missing.");
} finally {
  await connection.end();
}
