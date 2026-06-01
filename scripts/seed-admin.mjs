import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";

const envFiles = [".env.local", ".env"];

for (const file of envFiles) {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) continue;

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim().replace(/^['"]|['"]$/g, "");
    if (!(key in process.env)) process.env[key] = value;
  }
}

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured.`);
  return value;
}

const adminEmail = (process.env.ADMIN_EMAIL || "contact@magnivel.com").trim().toLowerCase();
const adminPassword = required("ADMIN_SEED_PASSWORD");

const connection = await mysql.createConnection({
  host: required("DB_HOST"),
  port: Number(process.env.DB_PORT || 3306),
  database: required("DB_DATABASE"),
  user: required("DB_USER"),
  password: required("DB_PASSWORD"),
  namedPlaceholders: true,
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
