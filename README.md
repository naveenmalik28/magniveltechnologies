# Magnivel Technologies

Production-ready Next.js App Router website for Magnivel Technologies.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Neon PostgreSQL via Prisma
- JWT admin auth with `jose`
- Password hashing with `bcryptjs`
- Email via Nodemailer and Hostinger SMTP

## Setup

Create a `.env.local` file from `.env.example`, then install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Database

Set `DATABASE_URL` to the Neon PostgreSQL connection string, then apply the migration:

```bash
npm run db:migrate
```

For local development without migration history, `npm run db:push` can also sync the schema.

Admin passwords must be stored as bcrypt hashes in the `admins.password` column.

Create the default admin after configuring `.env.local`:

```bash
ADMIN_SEED_PASSWORD="your-admin-password" npm run seed:admin
```

The seed script hashes the password with bcrypt cost 12 and skips creation when `ADMIN_EMAIL` already exists.

Verify PostgreSQL connectivity and the admin seed row:

```bash
npm run check:db
```

## Production

```bash
npm run build
npm run start
```
