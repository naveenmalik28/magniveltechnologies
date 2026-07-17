import { NextResponse } from 'next/server';
import sitemap from '../sitemap';

export async function GET() {
  try {
    const sitemapData = await sitemap();
    
    // Generate XML sitemap
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${sitemapData.map(
  (route) => {
    const dateStr = route.lastModified instanceof Date 
      ? route.lastModified.toISOString().split('T')[0] 
      : (typeof route.lastModified === 'string' 
          ? route.lastModified.split('T')[0] 
          : new Date().toISOString().split('T')[0]);
    return `  <url>
    <loc>${route.url}</loc>
    <lastmod>${dateStr}</lastmod>
    <changefreq>${route.changeFrequency || 'monthly'}</changefreq>
    <priority>${route.priority || 0.8}</priority>
  </url>`;
  }
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
