# Civitas BioTech - SQL migrations

These migrations create the MySQL schema used by the PHP bridge in
`public/php`. They are written for Afrihost's phpMyAdmin / cPanel MySQL
environment.

## Before you run anything

1. **Back up first.** Export a full backup of the target database from
   phpMyAdmin before running any migration, even on a fresh database.
2. **Select the correct database** in phpMyAdmin before importing a file.
   Never run these against `information_schema`, `mysql`, `performance_schema`,
   or `sys`.
3. Run the files **strictly in numeric order** - each file assumes the
   previous ones already ran.

## Run order

| File | Purpose |
| --- | --- |
| `001_leads_schema.sql` | `contact_messages`, `partner_applications`, `investor_requests`, `career_applications`. |
| `002_rate_limit_schema.sql` | `rate_limit_log`, used by `public/php/shared/rate_limit.php`. |
| `003_submission_metadata.sql` | Consent receipts, campaign attribution, request IDs, and privacy-preserving request fingerprints for every lead form. |

## How to run (phpMyAdmin)

1. Log in to Afrihost cPanel → phpMyAdmin.
2. Select the Civitas BioTech application database from the left sidebar.
3. Go to the **Import** tab.
4. Choose the next file in order (starting with `001_leads_schema.sql`) and click **Go**.
5. Repeat for each file in order.

## After running the migrations

1. Copy `public/php/config.example.php` to `public/php/config.php` on the
   Afrihost server (same directory) and fill in the real database
   credentials, `allowed_origins`, a generated `api_key`, and a separate
   generated `privacy_salt`.
2. Set `BIOTECH_BRIDGE_URL` and `BIOTECH_API_KEY` in the Next.js deployment
   (Vercel) to point at the deployed `public/php` bridge and match the
   `api_key` in `config.php`.
3. Once both are set, the contact, investor pack, pilot proposal, and careers
   forms automatically switch from the graceful "not connected yet" fallback
   to live Afrihost delivery - no frontend code changes required.
4. Verify the protected bridge health check:
   `GET /php/health.php` with the same `X-API-Key` header used by Next.js.

## Operational notes

- Form submissions require an explicit privacy-consent value and write a
  separate audit record to `lead_submission_meta`.
- Raw visitor IP addresses are not stored. The rate limiter and submission
  metadata use salted SHA-256 fingerprints.
- Rate-limit rows older than two days are cleaned up probabilistically during
  normal traffic. For very high-volume deployments, replace this with a daily
  cron task.
- The database session is pinned to UTC (`public/php/shared/db.php`) so
  `created_at` timestamps are comparable regardless of the Afrihost server's
  local timezone setting.
