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

Optional Telegram payment alerts:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `CRON_SECRET`
- `TELEGRAM_WORKSPACE_ID`

In production, the cron route fails closed unless `CRON_SECRET` and `TELEGRAM_WORKSPACE_ID` are set. This prevents global financial alerts from reading every workspace.

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
