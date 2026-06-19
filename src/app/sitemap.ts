import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://magnivel.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publicRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/technologies',
    '/contact',
    
    // SEO Services Pages
    '/website-development',
    '/web-application-development',
    '/saas-development',
    '/ecommerce-development',
    '/mobile-app-development',
    '/ai-solutions',
    '/ui-ux-design',
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
    '/ai-development',
    
    // Resources & Tools
    '/resources',
    '/templates',
    '/checklists',
    '/guides',
    '/resources/website-cost-calculator',
    '/resources/ai-prompt-generator',
    '/resources/seo-meta-generator',
    '/resources/qr-code-generator',
    '/resources/roi-calculator',
    
    // Blog categories & static posts
    '/blog',
    '/blog/category/ai',
    '/blog/category/web-development',
    '/blog/category/mobile-apps',
    '/blog/category/software-development',
    '/blog/category/saas',
    '/blog/category/startups',
    '/blog/building-secure-rag-chatbot-gemini',
    '/blog/optimizing-nextjs-core-web-vitals',
    '/blog/reducing-stripe-churn-saas-webhooks',
    '/blog/react-native-vs-flutter-in-2026',
  ];

  const baseRoutes: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return baseRoutes;
}
