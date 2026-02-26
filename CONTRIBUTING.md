# Contributing to OpenClaw

## Who can submit

Anyone. If you built an agent instruction that works, it belongs here. All licenses (CC0, MIT, CC-BY, proprietary) are accepted. If it's proprietary, you must own it.

## What gets accepted

- Complete files — all frontmatter fields filled, real instruction text, not placeholders
- Instructions that actually work — test before submitting
- Legal content — no instructions facilitating illegal acts
- Safe content — nothing designed to harm, deceive, manipulate, or exploit

## What gets rejected

- Stub files ("coming soon", "TODO", placeholder instruction text)
- Tags that are too generic ("ai", "assistant", "helpful")
- Instructions that enable harm, bypass safety systems, or facilitate illegal activity
- Content you don't own or have rights to publish
- Malicious content disguised as legitimate instruction files

## How to submit

1. **Fork** this repo to your account
2. **Copy** `registry/agent-instruction-template.md` to `registry/your-unique-slug.md`
3. **Fill everything in** — see the template for what's required
4. **Open a PR** — use the provided PR template, answer all questions

## PR checks

When you open a PR, automated checks run immediately:

- Frontmatter validation (all required fields present)
- Slug uniqueness check
- Safety keyword scan
- Minimum tag count

Files failing automated checks are returned immediately with specific feedback. Files passing go to manual review within 24–48 hours.

## Quality scores

Every published file gets a quality score (0–100):

| Points | Criteria |
|---|---|
| 20 | All required frontmatter fields complete |
| 20 | Purpose and Usage written (not placeholder) |
| 30 | Real instruction text in fenced code block |
| 15 | 3+ specific, accurate tags |
| 15 | Notes or Examples section present |

- **90+**: Featured on homepage
- **70–89**: Published as standard
- **Below 70**: Returned for revision with feedback

## One thing that matters

The instruction text should be written directly to the agent — "You are...", "When given X, do Y." Not a description of what the agent should do. The instruction itself.

## Questions

Open a GitHub Discussion or reach out via [chrisizworski.com](https://chrisizworski.com).
