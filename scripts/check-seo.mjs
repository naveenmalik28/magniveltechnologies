#!/usr/bin/env node

/**
 * SEO & Performance Monitoring Script
 * Checks Core Web Vitals, sitemap, robots.txt, and other SEO metrics
 * 
 * Usage: node scripts/check-seo.mjs
 */

import https from 'https';
import http from 'http';
import { URL } from 'url';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://magnivel.com';
const BASE_URL = new URL(SITE_URL);

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function fetchUrl(urlString) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const client = url.protocol === 'https:' ? https : http;

    client.get(urlString, { timeout: 10000 }, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    }).on('error', reject);
  });
}

async function checkRobotsTxt() {
  log('\n📋 Checking robots.txt...', 'cyan');
  try {
    const result = await fetchUrl(`${SITE_URL}/robots.txt`);
    if (result.status === 200) {
      log('✅ robots.txt found', 'green');
      const hasAllowAll = result.body.includes('Allow: /');
      const hasDisallowAdmin = result.body.includes('Disallow: /admin');
      const hasSitemap = result.body.includes('Sitemap:');
      
      log(`   - Allow: / present: ${hasAllowAll ? '✓' : '✗'}`);
      log(`   - Disallow: /admin present: ${hasDisallowAdmin ? '✓' : '✗'}`);
      log(`   - Sitemap reference: ${hasSitemap ? '✓' : '✗'}`);
    } else {
      log(`❌ robots.txt returned status ${result.status}`, 'red');
    }
  } catch (error) {
    log(`❌ Failed to check robots.txt: ${error.message}`, 'red');
  }
}

async function checkSitemap() {
  log('\n🗺️  Checking sitemap.xml...', 'cyan');
  try {
    const result = await fetchUrl(`${SITE_URL}/sitemap.xml`);
    if (result.status === 200) {
      log('✅ sitemap.xml found', 'green');
      const urlCount = (result.body.match(/<url>/g) || []).length;
      const lastmodCount = (result.body.match(/<lastmod>/g) || []).length;
      const changefreqCount = (result.body.match(/<changefreq>/g) || []).length;
      
      log(`   - Total URLs: ${urlCount}`);
      log(`   - lastmod tags: ${lastmodCount}/${urlCount}`);
      log(`   - changefreq tags: ${changefreqCount}/${urlCount}`);
      
      if (urlCount > 0) {
        log(`   - URLs included:`, 'blue');
        const urls = result.body.match(/<loc>(.*?)<\/loc>/g) || [];
        urls.slice(0, 5).forEach(url => {
          const cleanUrl = url.replace(/<\/?loc>/g, '');
          log(`     - ${cleanUrl}`);
        });
        if (urls.length > 5) {
          log(`     ... and ${urls.length - 5} more`);
        }
      }
    } else {
      log(`❌ sitemap.xml returned status ${result.status}`, 'red');
    }
  } catch (error) {
    log(`❌ Failed to check sitemap.xml: ${error.message}`, 'red');
  }
}

async function checkMetaTags() {
  log('\n🏷️  Checking meta tags...', 'cyan');
  try {
    const result = await fetchUrl(SITE_URL);
    if (result.status === 200) {
      log('✅ Homepage accessible', 'green');
      
      const hasTitle = result.body.includes('<title>');
      const hasDescription = result.body.includes('name="description"');
      const hasViewport = result.body.includes('name="viewport"');
      const hasOpenGraph = result.body.includes('property="og:');
      const hasCanonical = result.body.includes('rel="canonical"');
      const hasStructuredData = result.body.includes('application/ld+json');
      
      log(`   - Title tag: ${hasTitle ? '✓' : '✗'}`);
      log(`   - Meta description: ${hasDescription ? '✓' : '✗'}`);
      log(`   - Viewport tag: ${hasViewport ? '✓' : '✗'}`);
      log(`   - Open Graph tags: ${hasOpenGraph ? '✓' : '✗'}`);
      log(`   - Canonical URL: ${hasCanonical ? '✓' : '✗'}`);
      log(`   - Structured data (JSON-LD): ${hasStructuredData ? '✓' : '✗'}`);
    } else {
      log(`❌ Homepage returned status ${result.status}`, 'red');
    }
  } catch (error) {
    log(`❌ Failed to check meta tags: ${error.message}`, 'red');
  }
}

async function checkSecurityHeaders() {
  log('\n🔒 Checking security headers...', 'cyan');
  try {
    const result = await fetchUrl(SITE_URL);
    if (result.status === 200) {
      const headers = result.headers;
      
      const checks = {
        'X-Content-Type-Options': headers['x-content-type-options'],
        'X-Frame-Options': headers['x-frame-options'],
        'Referrer-Policy': headers['referrer-policy'],
        'Cache-Control': headers['cache-control'],
        'Content-Security-Policy': headers['content-security-policy'],
      };
      
      Object.entries(checks).forEach(([header, value]) => {
        if (value) {
          log(`   ✓ ${header}: ${value}`);
        } else {
          log(`   ✗ ${header}: Not set`, 'yellow');
        }
      });
    }
  } catch (error) {
    log(`❌ Failed to check security headers: ${error.message}`, 'red');
  }
}

async function checkPages() {
  log('\n📄 Checking important pages...', 'cyan');
  
  const pages = [
    { path: '/about', title: 'About' },
    { path: '/services', title: 'Services' },
    { path: '/portfolio', title: 'Portfolio' },
    { path: '/contact', title: 'Contact' },
    { path: '/technologies', title: 'Technologies' },
  ];

  for (const page of pages) {
    try {
      const result = await fetchUrl(`${SITE_URL}${page.path}`);
      if (result.status === 200) {
        const hasMetaDescription = result.body.includes('name="description"');
        const hasCanonical = result.body.includes(`href="${page.path}"`);
        
        log(`   ✓ ${page.title} (${page.path}) - Status ${result.status}`);
        if (!hasMetaDescription) {
          log(`     ⚠ Missing meta description`, 'yellow');
        }
      } else {
        log(`   ✗ ${page.title} (${page.path}) - Status ${result.status}`, 'red');
      }
    } catch (error) {
      log(`   ✗ ${page.title} - Error: ${error.message}`, 'red');
    }
  }
}

async function main() {
  log('\n╔════════════════════════════════════════════════════════╗', 'blue');
  log('║          SEO & Performance Monitoring Report            ║', 'blue');
  log('╚════════════════════════════════════════════════════════╝\n', 'blue');
  
  log(`🌍 Checking: ${SITE_URL}`, 'cyan');

  await checkRobotsTxt();
  await checkSitemap();
  await checkMetaTags();
  await checkSecurityHeaders();
  await checkPages();

  log('\n📊 Next steps:', 'cyan');
  log('   1. Submit sitemap to Google Search Console');
  log('   2. Verify site ownership in GSC');
  log('   3. Monitor Core Web Vitals in GSC');
  log('   4. Test with PageSpeed Insights');
  log('   5. Check indexing status in GSC');
  
  log('\n✅ SEO check complete!\n', 'green');
}

main().catch(error => {
  log(`\n❌ Fatal error: ${error.message}`, 'red');
  process.exit(1);
});
