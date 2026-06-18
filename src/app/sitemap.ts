import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codevibe.lk';

const STATIC_ROUTES = [
  { url: '/',              priority: 1.0,  changeFrequency: 'weekly'  as const },
  { url: '/services',     priority: 0.9,  changeFrequency: 'monthly' as const },
  { url: '/portfolio',    priority: 0.9,  changeFrequency: 'weekly'  as const },
  { url: '/quote',        priority: 0.9,  changeFrequency: 'monthly' as const },
  { url: '/process',      priority: 0.7,  changeFrequency: 'monthly' as const },
  { url: '/contact',      priority: 0.8,  changeFrequency: 'monthly' as const },
  { url: '/testimonials', priority: 0.7,  changeFrequency: 'weekly'  as const },
  { url: '/blog',         priority: 0.8,  changeFrequency: 'weekly'  as const },
  { url: '/about',        priority: 0.6,  changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return STATIC_ROUTES.map(({ url, priority, changeFrequency }) => ({
    url:              `${SITE_URL}${url}`,
    lastModified:     now,
    changeFrequency,
    priority,
  }));
}
