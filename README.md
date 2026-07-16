# My Financial Dashboard

## Getting Started

Install dependencies and run the local server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment

Required:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_GOOGLE_ID`
- `AUTH_GOOGLE_SECRET`

Premium feature administration:

- `SUPER_ADMIN_EMAILS` (comma-separated Google emails; super administrators always have Plaid access)

Plaid is available only to super administrators and users granted the `PLAID` premium feature from `/admin/access`.

Free Telegram payment alerts:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_BOT_USERNAME`
- `TELEGRAM_WEBHOOK_SECRET`
- `CRON_SECRET`

Each user connects a private Telegram chat from `/settings` and enables alerts per workspace. The webhook rejects unsigned updates, and the cron derives every financial query from the stored workspace membership. `TELEGRAM_CHAT_ID` and `TELEGRAM_WORKSPACE_ID` are supported only by the one-time `telegram:bootstrap` migration script; it is a dry run unless `--apply` is provided. Webhook replacement requires `telegram:webhook -- --replace`.

Optional Plaid bank sync:

- `PLAID_CLIENT_ID`
- `PLAID_SECRET`
- `PLAID_ENV` (`sandbox`, `development`, or `production`)
- `PLAID_ENCRYPTION_KEY` (recommended; falls back to `AUTH_SECRET` if omitted)
- `PLAID_WEBHOOK_URL` (optional)

## Verification

```bash
npm run verify
```
