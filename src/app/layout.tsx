import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import LoadingScreen from '@/components/ui/LoadingScreen';
import PageTransitionLoader from '@/components/ui/PageTransitionLoader';
import ChatWidget from '@/components/layout/ChatWidget';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import { localBusinessSchema, websiteSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default:  'Code Vibe | MERN Stack & Next.js Developer Sri Lanka',
    template: '%s | Code Vibe',
  },
  description:
    'Code Vibe builds scalable web apps for startups and businesses using MERN Stack & Next.js. Hire a professional full-stack developer in Sri Lanka. Get a free quote today.',
  keywords:
    'hire MERN stack developer Sri Lanka, Next.js developer for hire, freelance full-stack developer Colombo, affordable web development services Sri Lanka',
  authors:   [{ name: 'Code Vibe', url: 'https://codevibe.lk' }],
  creator:   'Code Vibe',
  publisher: 'Code Vibe',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codevibe.lk'),
  openGraph: {
    type:        'website',
    siteName:    'Code Vibe',
    locale:      'en_US',
    title:       'Code Vibe | MERN Stack & Next.js Developer Sri Lanka',
    description: 'Code Vibe builds scalable web apps for startups and businesses using MERN Stack & Next.js. Hire a professional full-stack developer in Sri Lanka. Get a free quote today.',
    url:         'https://codevibe.lk',
    images: [{
      url:    'https://codevibe.lk/og-image.png',
      width:  1200,
      height: 630,
      alt:    'Code Vibe — MERN Stack & Next.js Developer Sri Lanka',
    }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Code Vibe | MERN Stack & Next.js Developer Sri Lanka',
    description: 'Professional full-stack web development in Sri Lanka. MERN Stack, Next.js, React.',
    images:      ['https://codevibe.lk/og-image.png'],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: {
      index:                true,
      follow:               true,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body
        className="antialiased bg-[#FFFFFF] text-[#111111] selection:bg-[#111111] selection:text-white"
        style={{ overflowX: 'clip' }}
      >
        <LoadingScreen />
        <PageTransitionLoader />
        <Navbar />
        <main style={{ paddingTop: '0' }}>
          {children}
        </main>
        <Footer />
        <ErrorBoundary>
          <ChatWidget />
        </ErrorBoundary>
        <WhatsAppWidget />
      </body>
    </html>
  );
}