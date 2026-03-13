# Vercel Auto Deploy Design

## Goal

Set up `chorus-marketing` on Vercel so production deployments come from `main`, preview deployments are generated for non-`main` branch pushes, and the live site resolves on `chorus.app`.

## Current State

- The repository is a standard Next.js application with GitHub as the origin remote.
- The Vercel team already exists as `chorus-app`.
- `chorus.app` nameservers have been delegated to Vercel.
- Native Vercel Git integration is blocked because the Vercel account does not have a GitHub Login Connection configured.

## Options Considered

### 1. Recommended: Vercel project plus GitHub Actions deployments

Create a Vercel project, attach the custom domain, and let GitHub Actions build and deploy preview and production artifacts through the Vercel CLI.

Pros:
- Delivers the required deployment behavior immediately
- Does not depend on Vercel account-level GitHub connection setup
- Uses Vercel's documented `vercel build` plus `vercel deploy --prebuilt` flow

Cons:
- Requires a GitHub repository secret for the Vercel token

### 2. Native Vercel Git integration

Connect the GitHub repository directly in Vercel and let Vercel create deployments from branch pushes.

Pros:
- Simplest steady-state setup
- First-class preview deployment experience

Cons:
- Blocked until the Vercel account adds a GitHub Login Connection

### 3. Manual CLI deployments only

Link the repo locally and deploy by hand from the terminal.

Pros:
- Quickest one-time publish path

Cons:
- Does not satisfy automatic production and preview deployments

## Chosen Design

Use option 1.

Implementation will:

- create the Vercel project `chorus-marketing` in the `chorus-app` scope
- attach `chorus.app` to that project
- store `VERCEL_TOKEN`, `VERCEL_ORG_ID`, and `VERCEL_PROJECT_ID` in GitHub repository secrets
- add two GitHub Actions workflows:
  - preview deployments for non-`main` pushes
  - production deployments for `main`
- perform an initial production deployment from a clean snapshot so the custom domain has a live target immediately

## Error Handling

- Fail fast if the Vercel token is invalid or lacks access to the project scope
- Fail fast if GitHub secret creation is unavailable
- Fail fast if Vercel build or deploy commands return non-zero status
- Treat the missing Vercel GitHub Login Connection as a hard blocker for native Git integration and use the documented GitHub Actions fallback instead of trying to work around it

## Verification

Success means:

- Vercel project `chorus-marketing` exists in `chorus-app`
- `chorus.app` is attached to the project and verified
- GitHub repository secrets are present
- workflow files are committed to the repository
- a fresh production deployment succeeds
- `chorus.app` resolves to the production deployment once DNS propagation completes
