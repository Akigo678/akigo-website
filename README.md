# AkiGO Website

Public Next.js website for AkiGO rides, deliveries, driver interest, partners,
support, company information, and legal disclosures. This project is separate
from the Rider and Driver apps and the operations/admin application.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- Firebase Admin (server-side Firestore) and Firebase client integration
- Resend for transactional inquiry and launch-list messages

## Local setup

Use Node.js 24 or another version compatible with the lockfile and Next.js 16.

```bash
npm ci
npm run dev
```

The development server normally starts on port 3000. Open the URL printed in
the terminal. Environment values belong in a private `.env.local`; never
commit service-account secrets.

## Environment configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | **Required in production:** `https://akigo.org` (used for confirmation email links). |
| `FIREBASE_ADMIN_PROJECT_ID` | Required Firebase project ID: `akigo-9ad3b`. |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | Firebase service account email when using key-based credentials. |
| `FIREBASE_ADMIN_PRIVATE_KEY` | Firebase service account private key when using key-based credentials. |
| `RESEND_API_KEY` | Resend API key for outgoing mail. |
| `CONTACT_FROM_EMAIL` | Verified sender address for outgoing mail. |
| `CONTACT_ADMIN_EMAIL` | Default destination for website inquiries. |
| `CAREERS_ADMIN_EMAIL` | Optional destination for career interest notifications. |
| `DRIVER_ADMIN_EMAIL` | Optional destination for driver interest notifications. |
| `NEWSLETTER_ADMIN_EMAIL` | Optional destination for launch-list notifications. |

The Firebase Admin module can use application-default credentials if configured
for the hosting environment. The client Firebase configuration and any other
variables used by specific routes should also be supplied in hosting settings.
Check the source before configuring a new environment.

The production URL helper deliberately fails if `NEXT_PUBLIC_SITE_URL` is
missing or differs from `https://akigo.org`; localhost is only a development
fallback. Set the variable before rolling out.

## Quality checks

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

The test command currently covers site URL validation. It is a baseline,
**not** an end-to-end test suite. Before public launch, manually verify forms,
email confirmation, admin notifications, app download links, mobile layout,
accessibility, and real integrations in a staging environment.

## Website routes

- Main pages: `/`, `/ride`, `/drive`, `/deliver`, `/business`,
  `/partners`, `/download`
- Company and support: `/about`, `/careers`, `/press`, `/newsroom`,
  `/help`, `/contact`, `/safety`
- Public SEO: `/sitemap.xml`, `/robots.txt`
- Career interest: `POST /api/career-interest`; records are stored in
  `websiteCareerInterest` with a corresponding `adminNotifications` event.

Career interest is not a live job board and must not be described as an
application to a specific open job. Forms request consent and discourage
submission of sensitive identity or banking documents.

## Deployment checklist

1. Configure the project on its intended Firebase/Next.js-compatible hosting
   service. Verify that server-side Node routes and runtime environment
   variables are supported.
2. Configure the production domain `akigo.org`, HTTPS, DNS, and any redirect
   from `www.akigo.org` to the canonical domain (or vice versa).
3. Set all required secrets and `NEXT_PUBLIC_SITE_URL=https://akigo.org`.
4. Run quality checks, deploy to a staging environment, and submit test forms.
5. Verify Firestore writes, staff notifications, Resend delivery, confirmation
   links, and access to private submissions by authorized operators only.
6. Verify `/robots.txt` and `/sitemap.xml`; submit the sitemap to Google
   Search Console after the site is live.
7. Deploy to production, check that all primary pages, mobile navigation,
   downloads, and support features work, and monitor server logs.

**This README is a deployment checklist, not evidence of a completed deployment.**
