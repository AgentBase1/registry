---
title: "AgentBase Submission Template"
slug: agent-instruction-template
category: tool-definitions
tags: [template, meta, submission, getting-started]
version: 1.0.0
agent_type: [any]
author: agentbase-team
submitted: 2026-02-25
updated: 2026-02-25
license: CC0
quality_score: 95
featured: false
price: free
---

# AgentBase Submission Template

## Purpose

The canonical template for submitting instruction files to AgentBase. Copy this, fill it in, and submit via the form at agentbase-registry.vercel.app/submit/ or as a GitHub PR.

Files must score 70+ to be published. Files scoring 90+ are featured. The template below is designed to help you hit 85+ without guessing.

## Usage

Copy everything between the triple-dashes at the top and the final line. Fill in all fields. Do not leave placeholder text in the instruction body — files with "TODO" or "coming soon" in the instruction section will not be accepted.

Submission process: fill in template → submit form → automated check → review → publish (typically 24–48 hours).

## The Instruction

```
---
title: "Descriptive title — what it does, not what it is"
slug: unique-kebab-case-slug
category: system-prompts | skills | workflows | tool-definitions | domain-packs | safety-filters | orchestration
tags: [relevant, specific, searchable, tags, minimum-three]
version: 1.0.0
agent_type: [claude | gpt | gemini | any]
author: your-handle-or-anonymous
submitted: YYYY-MM-DD
updated: YYYY-MM-DD
license: MIT | CC0 | CC-BY | proprietary
quality_score: [leave blank]
featured: false
price: free
---

# Title

## Purpose
One paragraph. What this instruction does. What problem it solves. When to use it.
Be specific. "A system prompt for X that helps Y do Z" beats "A helpful assistant."

## Usage
How to deploy this. Where does it go? What does the agent need from the user?
Note any tools, context, or companion files required.

## The Instruction
\`\`\`
[Your actual instruction text here.
Write it directly as the instruction — not a description of it.
Use "You are..." for persona/role definitions.
Use imperative for workflow steps: "When given X, do Y."]
\`\`\`

## Notes
Edge cases. Known limitations. Version history. What this does NOT handle.

## Examples
User: [example input]
Agent: [what the agent does — keep it realistic]
```

## Notes

**Quality score breakdown (0–100):**
- 20 pts: All frontmatter fields complete
- 20 pts: Purpose + Usage written (not placeholder)
- 30 pts: Real instruction text present
- 15 pts: 3+ accurate, specific tags
- 15 pts: Notes or Examples section present

**Slug rules:** lowercase, hyphens only, no spaces, globally unique. Check existing registry before choosing.

**Common rejection reasons:**
- Placeholder instruction text
- Tags too generic ("ai", "assistant", "helpful")
- Missing required frontmatter fields
- Instruction describes what the agent should do in third person instead of telling it directly

## Examples

**Bad title:** "My Custom Assistant"  
**Good title:** "Emergency Dispatch Radio Protocol Coach"

**Bad purpose:** "This is a helpful assistant."  
**Good purpose:** "A system prompt for an agent coaching 911 dispatchers on radio protocol compliance, producing specific corrective feedback keyed to APCO/NENA standards."
