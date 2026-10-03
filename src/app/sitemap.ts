import { MetadataRoute } from 'next';
import { blogPosts, blogCategories } from '@/lib/blog';
import { TEMPLATES } from '@/lib/ready-websites-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.magnivel.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const coreRoutes = [
    '',
    '/about',
    '/services',
    '/technologies',
    '/contact',
    '/careers',

    // Core SEO Services Pages
    '/website-development',
    '/website-development-services',
    '/web-application-development',
    '/saas-development',
    '/ecommerce-development',
    '/mobile-app-development',
    '/ai-solutions',
    '/ai-development',
    '/ai-automation-services',
    '/ai-chatbot-development',
    '/ui-ux-design',
    '/ui-ux-design-services',
    '/api-development',
    '/custom-software-development',
    '/seo-services',

    // Pricing Pages
    '/website-development-cost-india',
    '/mobile-app-development-cost',
    '/custom-software-cost',
    '/ai-chatbot-development-cost',
    '/saas-development-cost',

    // Industry Verticals
    '/software-for-schools',
    '/software-for-colleges',
    '/software-for-healthcare',
    '/software-for-real-estate',
    '/software-for-restaurants',
    '/software-for-manufacturing',
    '/software-for-startups',

    // Technology Specializations
    '/python-development',
    '/react-development',
    '/django-development',
    '/nodejs-development',
    '/aws-development',

    // Ready-Made Websites Hub
    '/ready-websites',

    // Resources & Interactive Tools
    '/resources',
    '/templates',
    '/checklists',
    '/guides',
    '/resources/website-cost-calculator',
    '/resources/ai-prompt-generator',
    '/resources/seo-meta-generator',
    '/resources/qr-code-generator',
    '/resources/roi-calculator',

    // Blog Hub
    '/blog',
  ];

  const coreEntries: MetadataRoute.Sitemap = coreRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'weekly';
    } else if (
      route === '/services' ||
      route.includes('-development') ||
      route.includes('-services') ||
      route === '/ready-websites'
    ) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.includes('-cost')) {
      priority = 0.85;
      changeFrequency = 'monthly';
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  const categoryEntries: MetadataRoute.Sitemap = blogCategories.map((cat) => ({
    url: `${BASE_URL}/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const templateEntries: MetadataRoute.Sitemap = TEMPLATES.map((tmpl) => ({
    url: `${BASE_URL}/ready-websites/${tmpl.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...coreEntries, ...categoryEntries, ...blogEntries, ...templateEntries];
}
