# Vercel Auto Deploy Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Configure Vercel-backed production deployments from `main`, preview deployments for non-`main` branches, and bind the live site to `chorus.app`.

**Architecture:** Create and link a Vercel project for this repository, attach the production domain, and use GitHub Actions with the Vercel CLI as the deployment mechanism because the Vercel account does not currently support native GitHub repository connection.

**Tech Stack:** Next.js 16, GitHub Actions, Vercel CLI, Vercel Projects API

---

### Task 1: Create and link the Vercel project

**Files:**
- Modify: `.vercel/project.json` (generated locally, gitignored)

**Step 1: Create or link the Vercel project**

Run:

```bash
vercel link --yes --project chorus-marketing --scope chorus-app --token "$VERCEL_TOKEN"
```

Expected: `.vercel/project.json` contains the Vercel `projectId` and `orgId`.

**Step 2: Verify project metadata**

Run:

```bash
vercel project inspect chorus-marketing --scope chorus-app --token "$VERCEL_TOKEN"
```

Expected: project exists with the Next.js framework preset.

### Task 2: Attach the production domain

**Files:**
- None

**Step 1: Add the custom domain to the project**

Run:

```bash
curl -X POST \
  "https://api.vercel.com/v10/projects/chorus-marketing/domains?teamId=$VERCEL_TEAM_ID" \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"name":"chorus.app"}'
```

Expected: response reports `verified: true` for `chorus.app`.

**Step 2: Verify the domain**

Run:

```bash
vercel domains inspect chorus.app --scope chorus-app --token "$VERCEL_TOKEN"
```

Expected: the domain is attached to `chorus-marketing`.

### Task 3: Add GitHub Actions deployment workflows

**Files:**
- Create: `.github/workflows/vercel-preview.yml`
- Create: `.github/workflows/vercel-production.yml`

**Step 1: Add the preview workflow**

Create a workflow that runs on non-`main` pushes and executes:

```bash
vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
vercel build --token=${{ secrets.VERCEL_TOKEN }}
vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```

**Step 2: Add the production workflow**

Create a workflow that runs on `main` pushes and executes:

```bash
vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}
vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}
vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}
```

**Step 3: Validate workflow syntax**

Run:

```bash
ruby -e "require 'yaml'; YAML.load_file('.github/workflows/vercel-preview.yml'); YAML.load_file('.github/workflows/vercel-production.yml')"
```

Expected: exit code 0.

### Task 4: Configure GitHub repository secrets

**Files:**
- None

**Step 1: Save the Vercel token as a GitHub secret**

Run:

```bash
gh secret set VERCEL_TOKEN --repo DamonGuzman/chorus-marketing
```

Expected: GitHub stores the secret without echoing it back.

**Step 2: Save the project identifiers as GitHub secrets**

Run:

```bash
gh secret set VERCEL_ORG_ID --repo DamonGuzman/chorus-marketing --body "$VERCEL_ORG_ID"
gh secret set VERCEL_PROJECT_ID --repo DamonGuzman/chorus-marketing --body "$VERCEL_PROJECT_ID"
```

Expected: both secrets are available to workflow runs.

### Task 5: Publish and verify

**Files:**
- Modify: `docs/plans/2026-03-13-vercel-auto-deploy-design.md`
- Modify: `docs/plans/2026-03-13-vercel-auto-deploy-implementation.md`

**Step 1: Commit the workflow and plan files**

Run:

```bash
git add .github/workflows/vercel-preview.yml \
  .github/workflows/vercel-production.yml \
  docs/plans/2026-03-13-vercel-auto-deploy-design.md \
  docs/plans/2026-03-13-vercel-auto-deploy-implementation.md
git commit -m "ci: add vercel auto deploy"
```

Expected: commit succeeds without including unrelated workspace changes.

**Step 2: Push to `main`**

Run:

```bash
git push origin main
```

Expected: GitHub Actions starts the production workflow.

**Step 3: Create the first production deployment from a clean snapshot**

Run from a clean clone of `HEAD`:

```bash
vercel pull --yes --environment=production --token "$VERCEL_TOKEN"
vercel build --prod --token "$VERCEL_TOKEN"
vercel deploy --prebuilt --prod --token "$VERCEL_TOKEN"
```

Expected: Vercel returns a production deployment URL for `chorus-marketing`.

**Step 4: Verify the live endpoint**

Run:

```bash
curl -I https://chorus.app
```

Expected: HTTP 200 or a valid redirect to the production hostname after DNS propagation.
