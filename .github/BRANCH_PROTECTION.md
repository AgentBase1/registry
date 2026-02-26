# Branch Protection Settings

Apply these settings in GitHub: Settings → Branches → Add rule for `main`

## Required settings

- **Require a pull request before merging**: ✅
  - Required approvals: 1 (you are the only approver)
  - Dismiss stale pull request approvals when new commits are pushed: ✅
- **Require status checks to pass before merging**: ✅
  - Required checks: `validate` (from validate-submission.yml)
- **Require branches to be up to date before merging**: ✅
- **Do not allow bypassing the above settings**: ✅ (applies to everyone including admins)
- **Restrict who can push to matching branches**: ✅ → Add only yourself

## Result

Nobody can push directly to main, including you.
All changes must go through PR → automated check → your manual review → merge.
When you merge a PR, the rebuild-index workflow fires automatically and updates index.json.

## Recommended additional settings

Under Settings → General:
- **Allow squash merging only** (clean history)
- **Automatically delete head branches** after merge (keeps forks tidy)
- **Disable forking** — off, you want people to fork

Under Settings → Actions:
- **Allow all actions** — the workflows need to run
- **Allow GitHub Actions to create and approve pull requests**: ✅ (for the bot comment)
