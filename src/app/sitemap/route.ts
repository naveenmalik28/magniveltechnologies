import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://magnivel.com';

// Define all public routes
const PUBLIC_ROUTES = [
  {
    path: '',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    path: 'about',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    path: 'services',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    path: 'portfolio',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: 'technologies',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'quarterly' as const,
    priority: 0.7,
  },
  {
    path: 'contact',
    lastModified: new Date('2026-06-01'),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  },
];

export async function GET() {
  try {
    // Generate XML sitemap
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${PUBLIC_ROUTES.map(
  (route) => `  <url>
    <loc>${BASE_URL}${route.path ? '/' + route.path : ''}</loc>
    <lastmod>${route.lastModified.toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
).join('\n')}
</urlset>`;

    return new NextResponse(xmlContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
