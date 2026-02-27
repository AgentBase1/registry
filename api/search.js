const INDEX_URL = 'https://openclaw-sandy-eight.vercel.app/registry/index.json';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  const q = (url.searchParams.get('q') || '').toLowerCase().trim();
  const category = (url.searchParams.get('category') || '').toLowerCase().trim();
  const agent = (url.searchParams.get('agent') || '').toLowerCase().trim();
  const minQuality = parseInt(url.searchParams.get('min_quality') || '0', 10);
  const featured = url.searchParams.get('featured');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20', 10), 100);

  let index;
  try {
    const res = await fetch(INDEX_URL, { next: { revalidate: 60 } });
    index = await res.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Registry unavailable', status: 503 }), {
      status: 503,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }

  let results = index.entries || [];

  if (q) {
    results = results.filter(e =>
      e.title.toLowerCase().includes(q) ||
      (e.tags || []).some(t => t.toLowerCase().includes(q)) ||
      e.category.toLowerCase().includes(q) ||
      (e.slug || '').toLowerCase().includes(q)
    );
  }
  if (category) results = results.filter(e => e.category === category);
  if (agent) results = results.filter(e => (e.agent_type || []).includes(agent) || (e.agent_type || []).includes('any'));
  if (minQuality > 0) results = results.filter(e => (e.quality_score || 0) >= minQuality);
  if (featured === 'true') results = results.filter(e => e.featured);

  results = results.slice(0, limit);

  const response = {
    query: { q, category, agent, min_quality: minQuality, featured, limit },
    count: results.length,
    registry_version: index.version,
    updated: index.updated,
    results
  };

  return new Response(JSON.stringify(response, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, s-maxage=60'
    }
  });
}
