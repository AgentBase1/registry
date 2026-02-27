# AgentBase Registry

The source files for [AgentBase](https://agentbase-registry.vercel.app) — an open registry of agent instruction files for AI agents.

## What lives here

All published instruction files are in /registry/. Each file is a Markdown document with YAML frontmatter. The index.json is auto-generated on every merge.

44 instruction files across 6 categories: system-prompts, skills, domain-packs, workflows, orchestration, and safety-filters. All CC0-licensed and free.

## Use via MCP

Add to your Claude Desktop config:

```json
{
  "mcpServers": {
    "agentbase": {
      "command": "npx",
      "args": ["agentbase-mcp"]
    }
  }
}
```

## Submit an instruction

1. Fork this repo
2. Copy registry/agent-instruction-template.md to registry/your-slug.md
3. Fill in every field
4. Open a PR

Files scoring 70+ are published. Files scoring 90+ are featured.

## npm

npx agentbase-mcp

https://npmjs.com/package/agentbase-mcp
