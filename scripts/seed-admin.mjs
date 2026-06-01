import process from "node:process";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import { loadEnv, required } from "./env.mjs";

loadEnv();

const adminEmail = (process.env.ADMIN_EMAIL || "contact@magnivel.com").trim().toLowerCase();
const adminPassword = required("ADMIN_SEED_PASSWORD");
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
  await connection.execute(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const [existingRows] = await connection.execute(
    "SELECT id FROM admins WHERE email = :email LIMIT 1",
    { email: adminEmail },
  );

  if (existingRows.length > 0) {
    console.log(`Admin user already exists: ${adminEmail}`);
  } else {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);
    await connection.execute(
      "INSERT INTO admins (email, password) VALUES (:email, :password)",
      { email: adminEmail, password: hashedPassword },
    );

    console.log(`Admin user created: ${adminEmail}`);
  }
} finally {
  await connection.end();
}
