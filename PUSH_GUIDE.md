# Push Fix - Auth Required

Push failed with:
```
remote: Permission to lkgcoofficial-hub/lkgcoofficial-hub.git denied to shyamkumargupta411. 403
```
Cause: Windows + `gh` is logged in as `shyamkumargupta411`, but repo belongs to `lkgcoofficial-hub`. That account has no write access.

## Fix - Choose ONE Option

### Option 1: GitHub CLI - Re-login as lkgcoofficial-hub (Easiest)
```powershell
gh auth logout
# choose github.com -> yes
gh auth login
# -> GitHub.com -> HTTPS -> Yes -> Browser -> Paste token or login as lkgcoofficial-hub
# After login:
gh auth status  # should show lkgcoofficial-hub

# Then push
git push -u origin main
```

### Option 2: Use Personal Access Token (PAT) temporarily
1. Login to github.com as `lkgcoofficial-hub`
2. Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token -> `repo` scope -> Copy token `ghp_xxx`
3. Run:
```powershell
# Replace ghp_xxx with your token
git remote set-url origin https://ghp_xxx@github.com/lkgcoofficial-hub/lkgcoofficial-hub.git
git push -u origin main
# After push, remove token from URL for security:
git remote set-url origin https://github.com/lkgcoofficial-hub/lkgcoofficial-hub.git
```

### Option 3: Windows Credential Manager
1. Windows Search -> Credential Manager -> Windows Credentials
2. Find `git:https://github.com` -> Remove
3. `git push -u origin main` -> Browser will popup -> Login as lkgcoofficial-hub

## Verify Push
```powershell
git log --oneline -1
gh repo view lkgcoofficial-hub/lkgcoofficial-hub --web
```

After push succeeds, go to Vercel flow in `DEPLOY.md`.
