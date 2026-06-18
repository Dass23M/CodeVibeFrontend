import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/layout/WhatsAppWidget';
import LoadingScreen from '@/components/ui/LoadingScreen';
import PageTransitionLoader from '@/components/ui/PageTransitionLoader';
import ChatWidget from '@/components/layout/ChatWidget';
import { localBusinessSchema, websiteSchema } from '@/lib/seo';

// Display font — headings, hero text
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  display:  'swap',
});

// Body font — paragraphs, general UI text
const inter = Inter({
  variable: '--font-inter',
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  display:  'swap',
});

// Mono font — code snippets, eyebrow labels, badges
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets:  ['latin'],
  weight:   ['400', '500', '600'],
  display:  'swap',
});

export const metadata: Metadata = {
  title: {
    default:  'Code Vibe | MERN Stack & Next.js Developer Sri Lanka',
    template: '%s | Code Vibe',
  },
  description:
    'Code Vibe builds scalable web apps for startups and businesses using MERN Stack & Next.js. Hire a professional full-stack developer in Sri Lanka. Get a free quote today.',
  keywords:
    'hire MERN stack developer Sri Lanka, Next.js developer for hire, freelance full-stack developer Colombo, freelance full-stack developer Gampaha, affordable web development services Sri Lanka',
  authors:   [{ name: 'Code Vibe', url: 'https://codevibe.lk' }],
  creator:   'Code Vibe',
  publisher: 'Code Vibe',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://codevibe.lk'),
  openGraph: {
    type:      'website',
    siteName:  'Code Vibe',
    locale:    'en_US',
  },
  twitter: {
    card: 'summary_large_image',
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
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ overflowX: 'hidden' }}
      >
        <LoadingScreen />
        <PageTransitionLoader />
        <Navbar />
        <main style={{ paddingTop: '0' }}>
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <WhatsAppWidget />
      </body>
    </html>
  );
}