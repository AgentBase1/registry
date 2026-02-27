// api/submit.js — Handles web form submissions by creating a GitHub issue
export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { title, category, tags, agent_type, license, author, description, instruction } = body;

  // Basic validation
  if (!title || !category || !instruction || instruction.length < 100) {
    return new Response(JSON.stringify({ error: 'Missing required fields or instruction too short' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  // Generate slug from title
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  const today = new Date().toISOString().split('T')[0];

  const fileContent = `---
title: "${title}"
slug: ${slug}
category: ${category}
tags: [${(tags || '').split(',').map(t => t.trim()).filter(Boolean).join(', ')}]
version: 1.0.0
agent_type: [${agent_type || 'any'}]
author: ${author || 'community'}
submitted: ${today}
updated: ${today}
license: ${license || 'CC0'}
quality_score: 0
featured: false
price: free
---

# ${title}

## Purpose

${description || ''}

## The Instruction

\`\`\`
${instruction}
\`\`\`
`;

  const issueBody = `## New Instruction Submission

**Title:** ${title}
**Category:** ${category}
**Tags:** ${tags || 'none'}
**License:** ${license || 'CC0'}
**Submitted by:** ${author || 'anonymous'}

### Proposed filename
\`${slug}.md\`

### File content

\`\`\`markdown
${fileContent}
\`\`\`

---
*Submitted via web form at openclaw-sandy-eight.vercel.app/submit/*`;

  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const response = await fetch('https://api.github.com/repos/AgentBase1/registry/issues', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${githubToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'AgentBase-Registry'
    },
    body: JSON.stringify({
      title: `[SUBMISSION] ${title}`,
      body: issueBody,
      labels: ['submission', category]
    })
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('GitHub API error:', err);
    return new Response(JSON.stringify({ error: 'Failed to submit' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  const issue = await response.json();

  return new Response(JSON.stringify({
    success: true,
    issue_url: issue.html_url,
    issue_number: issue.number,
    message: 'Submission received! We\'ll review it and add it to the registry.'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
