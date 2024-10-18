import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

const SITE_URL = 'https://freepiker.vercel.app';

const pages = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/profile', changefreq: 'weekly', priority: 0.8 },
  { url: '/signup', changefreq: 'monthly', priority: 0.5 },
  { url: '/login', changefreq: 'monthly', priority: 0.5 },
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: SITE_URL });
  
  pages.forEach(page => {
    stream.write(page);
  });
  
  stream.end();
  
  const sitemap = await streamToPromise(stream);
  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
}

generateSitemap().catch(console.error);