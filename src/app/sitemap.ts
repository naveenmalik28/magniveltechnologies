import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://magnivel.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Public routes that should be in sitemap
  const publicRoutes = [
    '',                // Home
    '/about',
    '/services',
    '/portfolio',
    '/technologies',
    '/contact',
  ];

  const baseRoutes: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return baseRoutes;
}
