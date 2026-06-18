import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codevibe.lk';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow:     '/',
        disallow:  ['/api/', '/_next/'],
      },
    ],
    sitemap:    `${SITE_URL}/sitemap.xml`,
    host:       SITE_URL,
  };
}
