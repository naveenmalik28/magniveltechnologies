# Database & Vercel Deployment Configuration

## Overview
This document explains the PostgreSQL database connection setup and how to properly deploy to Vercel.

## PostgreSQL Connection Setup

### Environment Variables
The application requires the following environment variable to be configured:
- `DATABASE_URL`: PostgreSQL connection string with SSL enabled
- `JWT_SECRET`: Random secret for admin token signing
- `SMTP_*`: Email service credentials

### Connection Format
For PostgreSQL databases (Neon, AWS RDS, etc.):
```
postgresql://username:password@host:5432/database?sslmode=require&channel_binding=require
```

**Important**: The SSL mode is **required** for Vercel deployments to ensure secure connections.

## Admin Login API (`/api/auth/login`)

### Features
- ✅ Validates credentials against PostgreSQL `admins` table
- ✅ Hashes passwords with bcryptjs
- ✅ Creates JWT tokens for session management
- ✅ Comprehensive error handling for database connection issues
- ✅ Detects missing tables and environment variables
- ✅ Returns specific Prisma error codes (P1000-P1003) for connection failures

### Database Errors Handled
- `P1000`: Authentication failed
- `P1001`: Cannot reach database server
- `P1002`: Request timeout
- `P1003`: Database does not exist
- `P2021`: Table does not exist

## Contact API (`/api/contact`)

### Features
- ✅ Saves leads to PostgreSQL `leads` table
- ✅ Validates form input (email, phone, etc.)
- ✅ Sends notification emails (with error recovery)
- ✅ **IMPROVED**: Comprehensive database connection error handling
- ✅ **IMPROVED**: Detects missing tables and environment variables
- ✅ **IMPROVED**: Handles all PostgreSQL connection error codes

### What Was Fixed
1. Added proper error handling for database connection failures
2. Added detection for missing DATABASE_URL
3. Added detection for missing `leads` table
4. Returns appropriate HTTP status codes (5xx for server errors, 4xx for client errors)

## Health Check Endpoint (`/api/health`)

### New Feature ✨
A dedicated health check endpoint for monitoring database connectivity:

**Endpoint**: `GET /api/health`

**Healthy Response** (200):
```json
{
  "status": "healthy",
  "timestamp": "2026-06-01T12:00:00Z",
  "database": "connected"
}
```

**Unhealthy Response** (503):
```json
{
  "status": "unhealthy",
  "timestamp": "2026-06-01T12:00:00Z",
  "database": "disconnected",
  "error": "Connection refused"
}
```

**Usage**: Add to Vercel cron jobs or monitoring services for regular health checks.

## Vercel Deployment Guide

### 1. Prepare Your Project
```bash
# Install dependencies
npm install

# Generate Prisma client
npm run postinstall

# Push schema to database (do this before deploying)
npm run db:push
```

### 2. Set Environment Variables in Vercel
Go to Vercel Project Settings → Environment Variables:

| Variable | Value | Note |
|----------|-------|------|
| `DATABASE_URL` | `postgresql://...` | Your PostgreSQL connection string |
| `JWT_SECRET` | Generate random secret (32+ chars) | Use `openssl rand -base64 32` |
| `SMTP_HOST` | Your email provider host | Example: smtp.hostinger.com |
| `SMTP_PORT` | SMTP port number | Usually 465 or 587 |
| `SMTP_USER` | Your email address | contact@magnivel.com |
| `SMTP_PASS` | Email password | Never share this |
| `ADMIN_EMAIL` | Admin email address | contact@magnivel.com |
| `ADMIN_SEED_PASSWORD` | Strong password (8+ chars) | Used for initial admin setup |
| `NEXT_PUBLIC_SITE_URL` | Your domain | https://magnivel.com |
| `NODE_ENV` | `production` | Automatically set by Vercel |

### 3. Deploy to Vercel
```bash
# First deployment with vercel CLI
vercel

# Or use GitHub integration for automatic deployments
```

### 4. Run Database Migrations on Vercel
After deployment, run the setup commands using Vercel CLI:

```bash
# Push schema to Vercel's database
vercel env pull
npm run db:push

# Seed admin user
npm run seed:admin
```

Alternatively, use the Vercel dashboard:
1. Go to your project → Settings → Functions
2. Create a one-time job to run migrations

### 5. Verify Deployment
```bash
# Check database health
curl https://your-app.vercel.app/api/health

# Test admin login
curl -X POST https://your-app.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"yourpassword"}'

# Test contact form (should save to database)
curl -X POST https://your-app.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "companyName": "Test Co",
    "serviceType": "consultation",
    "budget": "under-5k",
    "message": "This is a test message that is longer than twenty characters"
  }'
```

## Configuration Files

### vercel.json
Specifies Vercel deployment settings:
- Build command: `npm run build`
- Install command: Includes `npm run db:push` for auto-migrations
- API functions: 60-second timeout, 512MB memory
- Region: IAD (Northern Virginia)

### next.config.ts
Optimizations for Vercel serverless environment:
- Output file tracing for slim deployments
- ISR memory caching for static generation
- On-demand entries configuration for better cold starts

### .env.example
Documentation of all required environment variables with examples and deployment notes.

## Troubleshooting

### Error: "Database is not configured"
**Solution**: Verify `DATABASE_URL` is set in Vercel environment variables.

### Error: "Admin table is missing"
**Solution**: Run `npm run db:push && npm run seed:admin` after deployment.

### Error: "Database connection failed"
**Solution**: 
1. Check DATABASE_URL format includes `?sslmode=require`
2. Verify SSL certificate is up-to-date
3. Check database server is accessible from Vercel IP ranges
4. Use `/api/health` endpoint to diagnose

### Error: "JWT_SECRET is not configured"
**Solution**: Generate a random secret and add to Vercel environment variables:
```bash
openssl rand -base64 32
```

### Contact form submissions failing
**Solution**:
1. Check `/api/health` endpoint
2. Verify `leads` table exists (run `npm run db:push`)
3. Check SMTP credentials for email errors
4. Review Vercel function logs for detailed errors

## Security Considerations

1. **SSL/TLS**: Database connections use `sslmode=require` for encryption
2. **Password Hashing**: Admin passwords hashed with bcryptjs
3. **JWT Tokens**: Signed with strong random secret
4. **HTTP-Only Cookies**: Admin sessions stored securely
5. **CORS**: APIs use same-origin by default
6. **Input Validation**: All form inputs validated before database operations

## Monitoring & Logs

### Vercel Logs
View real-time logs in Vercel dashboard:
- Settings → Functions → Logs
- Or use Vercel CLI: `vercel logs`

### Database Errors
Check Vercel function logs for database-specific errors:
- Connection failures (P1000-P1003)
- Table not found (P2021)
- Authentication errors

### Health Monitoring
Set up cron job to monitor `/api/health`:
```bash
# Using cron job in Vercel
# Check every 5 minutes
*/5 * * * * curl https://your-app.vercel.app/api/health
```

## Next Steps

1. ✅ Update `.env.example` with all required variables (Done)
2. ✅ Add health check endpoint (Done)
3. ✅ Improve error handling in contact API (Done)
4. ✅ Create `vercel.json` configuration (Done)
5. ✅ Optimize `next.config.ts` for serverless (Done)
6. → Deploy to Vercel and run setup commands
7. → Test all endpoints using the verification commands above
8. → Set up monitoring for `/api/health` endpoint
