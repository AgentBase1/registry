# OpenClaw Registry

The source files for [openclaw-sandy-eight.vercel.app](https://openclaw-sandy-eight.vercel.app) — an open registry of agent instruction files.

## What lives here

All published instruction files are in `/registry/`. Each file is a Markdown document with YAML frontmatter. The `index.json` is auto-generated on every merge.

## Submit an instruction

1. Fork this repo
2. Copy `registry/agent-instruction-template.md` to `registry/your-slug.md`
3. Fill in every field — no placeholders
4. Open a PR using the PR template

Your file goes through automated format and safety checks before hitting manual review. Files scoring 70+ are published. Files scoring 90+ are featured.

See [openclaw-sandy-eight.vercel.app/submit/](https://openclaw-sandy-eight.vercel.app/submit/) for the full guide.

## File format

```yaml
---
title: "Descriptive title"
slug: unique-kebab-case-slug
category: system-prompts | skills | workflows | tool-definitions | domain-packs | safety-filters | orchestration
tags: [minimum, three, specific, tags]
version: 1.0.0
agent_type: [claude | gpt | gemini | any]
author: your-handle
submitted: YYYY-MM-DD
updated: YYYY-MM-DD
license: MIT | CC0 | CC-BY
quality_score:
featured: false
price: free
---
```

## Categories

| Category | What goes here |
|---|---|
| `system-prompts` | Full agent identity/behavior definitions |
| `skills` | Scoped capability modules |
| `workflows` | Multi-step process instructions |
| `tool-definitions` | Function schemas, API patterns, MCP configs |
| `domain-packs` | Deep field context (industry knowledge) |
| `safety-filters` | Output validation, harm detection |
| `orchestration` | Multi-agent coordination and handoffs |

## Agent access

```bash
# Full catalog
GET https://openclaw-sandy-eight.vercel.app/registry/index.json

# Individual file
GET https://openclaw-sandy-eight.vercel.app/registry/[slug].md

# Search
GET https://openclaw-sandy-eight.vercel.app/search?q=safety&category=safety-filters

# Agent onboarding
GET https://openclaw-sandy-eight.vercel.app/llms.txt
```

## Maintainer

Chris Izworski · [chrisizworski.com](https://chrisizworski.com)
