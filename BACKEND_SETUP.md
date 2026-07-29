# Backend setup - Afrihost PHP/MySQL + Vercel

This walks through taking the site from local fallback mode to a fully live
Afrihost-backed deployment.

## 1. Provision the Afrihost database

1. In cPanel, create a MySQL database and a database user with full
   privileges on it. Note the host (usually `localhost`), database name,
   username and password.
2. Open phpMyAdmin, select the new database, and import the migrations in
   `public/sql` **in numeric order**: `001_leads_schema.sql`,
   `002_rate_limit_schema.sql`, `003_submission_metadata.sql`. Full details
   and rollback notes are in [`public/sql/README.md`](./public/sql/README.md).

## 2. Deploy the PHP bridge

1. Upload the entire contents of `public/php` to a directory on the Afrihost
   PHP host (for example `biotech.civitasholdings.co.za/php/`). PHP 8.1+ is
   required (typed properties, `never` return type).
2. Copy `public/php/config.example.php` to `public/php/config.php` on the
   server (same directory) and fill in:
   - `allowed_origins`: the production site origin(s) that call this bridge
     directly from a browser (the Next.js server itself is not affected by
     CORS).
   - `api_key`: a long random value, e.g. `php -r "echo bin2hex(random_bytes(32));"`.
   - `privacy_salt`: a **different** long random value, generated the same way.
   - `database`: the host/port/name/user/password from step 1.
3. `config.php` must never be committed to git - it is already listed in
   `.gitignore`.
4. Verify the deployment:

   ```bash
   curl -H "X-API-Key: <api_key>" https://biotech.civitasholdings.co.za/php/health.php
   ```

   A healthy response looks like:

   ```json
   {"success":true,"data":{"service":"civitas-biotech-bridge","status":"healthy","database":"connected","database_time_utc":"..."},"message":"Service is healthy."}
   ```

## 3. Configure the Next.js deployment (Vercel)

Set these environment variables in the Vercel project settings (Production
and Preview):

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://biotech.civitasholdings.co.za` |
| `BIOTECH_BRIDGE_URL` | `https://biotech.civitasholdings.co.za/php/` |
| `BIOTECH_API_KEY` | the same `api_key` set in `config.php` |
| `BIOTECH_API_TIMEOUT_MS` | `10000` (optional, defaults to 10s) |

Redeploy after setting these. Once both sides are configured, `GET /api/health`
reports `"mode":"live"` and every lead-capture form (`/contact`, `/investors`,
`/partners/apply`, and the careers form on `/team`) delivers directly into
MySQL instead of showing the fallback notice.

## 4. Verify end-to-end

1. Visit `/api/health` on the deployed Next.js site - confirm `mode: "live"`.
2. Submit a real test lead through each of the four forms.
3. In phpMyAdmin, confirm a row landed in the matching table
   (`contact_messages`, `investor_requests`, `partner_applications`, or
   `career_applications`) **and** a matching row in `lead_submission_meta`.
4. Delete the test rows once verified.

## Operational notes

- There is no in-app admin dashboard by design - review and action leads
  directly in phpMyAdmin, or connect a BI/notification tool to the database
  later if volume warrants it.
- The rate limiter (`rate_limit_log`) self-cleans probabilistically during
  normal traffic; no cron job is required for typical lead-form volume.
- Rotate `api_key` and `privacy_salt` if they are ever exposed, updating both
  `config.php` and the Vercel `BIOTECH_API_KEY` value together.
