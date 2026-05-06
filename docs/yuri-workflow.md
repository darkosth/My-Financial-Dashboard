# Yuri workflow

Production is protected by keeping `main` as the only production branch.

## Branches

- `main`: production. Vercel deploys this branch to the production domain.
- `yuri/*`: Yuri work branches. These are safe for experiments, fixes, and review.
- `yuri/preview`: optional stable preview branch. This branch can be connected to `finance-dashboard-preview.darkosth.com` in Vercel.

## Local verification

Use a clean checkout from GitHub and install dependencies on the current machine:

```bash
npm ci
npm run verify
```

Do not copy `node_modules` from Windows into Linux. Native packages are platform-specific.

## Deployment flow

1. Create a branch from `main`.
2. Make changes.
3. Run `npm run verify`.
4. Push the branch to GitHub.
5. Review the Vercel Preview Deployment.
6. Merge to `main` only after the preview is accepted.

## Preview domain

Preferred stable preview URL:

```text
finance-dashboard-preview.darkosth.com
```

The cleanest setup is a Vercel branch domain pointing that hostname to `yuri/preview`.
Feature branches still receive their own Vercel preview URLs.
