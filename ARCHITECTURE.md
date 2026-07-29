# Civitas BioTech architecture

## 1. Experience architecture

The site is organised around four decision journeys instead of a flat list of
marketing pages.

| Audience | Entry points | Conversion |
| --- | --- | --- |
| Industrial partners | `/partners`, `/markets`, `/products` | Propose a pilot site |
| Investors | `/investors`, `/platform`, `/roadmap` | Request investor pack |
| Researchers | `/research`, `/platform`, `/team` | Apply / collaborate |
| Future team members | `/team`, `/about` | Submit application |

The shared header groups secondary material under **Products**, **Company**,
and **Invest & Partner** while keeping **Platform**, **Markets** and
**Contact** immediately visible. Mobile navigation uses the same hierarchy
and includes focus trapping, Escape-to-close, and scroll locking.

## 2. Frontend runtime

- Next.js App Router with Server Components by default.
- Static rendering for every marketing, product, and legal route.
- Dynamic rendering only for API route handlers.
- `next/image` for all product, banner and hero photography (stored locally
  under `public/images`, not hot-linked to an external host).
- Geist variable fonts self-hosted by `next/font`.
- Shared design tokens in `src/app/globals.css` - a dark neurotechnology
  theme (navy/blue/cyan/violet) built from hand-rolled CSS, not a utility
  framework.
- Small client boundaries only for forms, mobile navigation, and reveal
  animations.

## 3. Data flow

```text
Browser form
  -> same-origin Next.js Route Handler
  -> validation + request ID + size/content-type checks
  -> authenticated PHP bridge request
  -> PHP validation + salted rate limit
  -> MySQL lead table + consent/attribution audit record
```

The API key is server-only. Browser code never receives PHP or database
credentials. If bridge configuration is absent or temporarily unavailable,
every form preserves the visitor's input and shows a human-readable
fallback state instead of failing silently.

## 4. Backend assets

- `public/php/shared` and `public/php/_shared`: authentication, CORS,
  database, validation, response, rate-limit, and lead-metadata primitives.
- `public/php/{contact,investors,partners,careers}`: narrow, single-purpose
  write endpoints.
- `public/php/health.php`: protected service and database health check.
- `public/sql`: ordered MySQL schema, rate-limit, and consent metadata
  migrations.

## 5. Lead-capture surfaces

| Form | Route | PHP endpoint | Table |
| --- | --- | --- | --- |
| General contact | `/contact` | `contact/submit.php` | `contact_messages` |
| Investor pack request | `/investors` | `investors/request-pack.php` | `investor_requests` |
| Pilot site proposal | `/partners/apply` | `partners/apply.php` | `partner_applications` |
| Careers application | `/team` | `careers/apply.php` | `career_applications` |

## 6. Security and compliance

- Framework security headers are configured in `next.config.ts`.
- Next.js validates JSON content type, body size, and all required values.
- PHP endpoints repeat validation at the trust boundary.
- Every lead requires explicit privacy consent.
- Campaign attribution and consent receipts are stored separately from
  operational lead tables (`lead_submission_meta`).
- Raw visitor IPs are not stored; rate limits and audit records use salted
  hashes.
- The `/terms` page carries an explicit forward-looking-statements and
  not-an-offer-of-securities disclaimer for all investor-facing content, and
  the `/privacy` page separates general form data from research-consent
  biological signal data.

## 7. Deployment contract

1. Build and deploy the Next.js application (Vercel).
2. Import SQL migrations in numeric order.
3. Deploy the PHP bridge and create an uncommitted `config.php`.
4. Add matching `BIOTECH_BRIDGE_URL` and `BIOTECH_API_KEY` values to the
   Next.js host.
5. Verify `/api/health`, then submit a non-production test lead and confirm
   both the lead row and `lead_submission_meta` audit row.
