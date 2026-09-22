# Deploy to Vercel - LKG CO

> GitHub: https://github.com/lkgcoofficial-hub/lkgcoofficial-hub.git  
> Email: lkgco.official@gmail.com  
> Framework: Next.js 15.1.11

## 1. Prerequisites

- Node.js 18+ (Vercel uses Node 20 by default)
- Git configured with `lkgco.official@gmail.com`
- Vercel account (login with GitHub)

## 2. Push Updates to GitHub (Run Every Time You Change Code)

From project root `D:\Ankur\lkg_co (1)\lkg_co`:

```powershell
git add .
git commit -m "your message"
git push origin main
```

First time setup (already done):
```powershell
git init
git config user.email "lkgco.official@gmail.com"
git config user.name "lkgcoofficial-hub"
git remote add origin https://github.com/lkgcoofficial-hub/lkgcoofficial-hub.git
git branch -M main
git push -u origin main
```

If push asks for auth: use GitHub `Personal Access Token (PAT)` as password.
Create at: GitHub > Settings > Developer settings > Tokens (classic) > repo scope.

## 3. Deploy on Vercel (One-Time Setup)

### Option A - Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click `Import Git Repository` -> select `lkgcoofficial-hub/lkgcoofficial-hub`
3. Configure Project:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build` (from `vercel.json`)
   - Install Command: `npm install`
   - Output Directory: `.next`
   - Node Version: `20.x`
4. Add Environment Variables (IMPORTANT):
   - Copy keys from `.env` - DO NOT commit `.env` to GitHub
   - In Vercel: Project > Settings > Environment Variables -> Add each:
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     OPENAI_API_KEY
     GEMINI_API_KEY
     ANTHROPIC_API_KEY
     NEXT_PUBLIC_GA_MEASUREMENT_ID
     NEXT_PUBLIC_ADSENSE_ID
     PERPLEXITY_API_KEY
     NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
     NEXT_PUBLIC_SITE_URL
     ```
5. Click `Deploy` -> Vercel builds and gives you URL like `lkgcoofficial-hub.vercel.app`

### Option B - Vercel CLI

```powershell
npm i -g vercel
vercel login   # login with lkgco.official@gmail.com

# From project root
vercel         # first deploy (preview)
vercel --prod  # production deploy

# Or link to existing project and enable auto-deploy
vercel link
```

### Auto Deploy Flow

Once linked: Every `git push origin main` -> Vercel auto-builds & deploys production.

Check at: https://vercel.com/dashboard -> Project -> Deployments

## 4. Environment Variables Notes

- `.env` is gitignored via `.gitignore` - never push real keys.
- Create `.env.local` locally for dev.
- On Vercel, set vars for `Production`, `Preview`, `Development`.
- After changing env vars on Vercel, Redeploy required.

## 5. Build Verification Locally

```powershell
npm install
npm run build
npm run serve  # or npm start (currently dev)
```

`next.config.mjs` already has `ignoreBuildErrors:true` and `ignoreDuringBuilds:true` for smooth Vercel build.

## 6. Custom Domain (Optional)

Vercel > Project > Settings > Domains -> Add `lkgco.com` (or your domain) -> Add DNS records shown.

## 7. Files Added for Vercel

- `vercel.json` - Build config (regions: bom1 = Mumbai for India low latency)
- `.gitignore` fixed - removed `package-lock.json` ignore, added `.env*` ignore
- `DEPLOY.md` - this file

## 8. Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails: Module not found | `npm install` locally, ensure import case matches |
| Env missing | Check Vercel > Settings > Env Vars, Redeploy |
| Push rejected (auth) | Use PAT, or `gh auth login`, or use `git remote set-url origin https://<PAT>@github.com/lkgcoofficial-hub/lkgcoofficial-hub.git` |
| 404 on refresh | Ensure Next.js framework preset, not Other |

## 9. Future Deploys

Just:
```powershell
git add .
git commit -m "update"
git push
```
No manual Vercel action needed.
