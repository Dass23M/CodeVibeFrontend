import type { Metadata } from 'next';

const SITE_NAME = 'Code Vibe';
const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codevibe.lk';
const SITE_DESC =
  'Code Vibe builds scalable web apps for startups and businesses using MERN Stack & Next.js. Hire a professional full-stack developer in Sri Lanka.';

interface PageSEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description = SITE_DESC,
  path = '',
  image = '/og-image.png',
  keywords = [],
}: PageSEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | MERN Stack & Next.js Developer Sri Lanka`;
  const canonical = `${SITE_URL}${path}`;
  const ogImage   = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  const defaultKeywords = [
    'hire MERN stack developer Sri Lanka',
    'Next.js developer for hire',
    'freelance full-stack developer Colombo',
    'freelance full-stack developer Gampaha',
    'affordable web development services Sri Lanka',
    'React developer Sri Lanka',
    'Node.js developer Sri Lanka',
    'MERN stack developer',
    'web app development Sri Lanka',
    'Code Vibe',
  ];

  return {
    title: pageTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ===========================
//  JSON-LD Schemas
// ===========================

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Code Vibe',
    description: SITE_DESC,
    url: SITE_URL,
    email: 'hello@codevibe.lk',
    telephone: '+94701234567',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gampaha',
      addressRegion: 'Western Province',
      addressCountry: 'LK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '7.0840',
      longitude: '80.0098',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sri Lanka',
    },
    priceRange: 'LKR 15,000 - LKR 500,000',
    openingHours: 'Mo-Fr 09:00-18:00',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page Development',
            description: 'Professional landing page from LKR 15,000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Web App Development',
            description: 'MERN Stack & Next.js web applications from LKR 80,000',
          },
        },
      ],
    },
    sameAs: [
      'https://github.com/codevibe-lk',
      'https://fiverr.com/codevibe',
      'https://upwork.com/freelancers/codevibe',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESC,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
