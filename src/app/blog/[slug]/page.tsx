import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  return generatePageMetadata({ title, path: `/blog/${slug}` });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <section style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <Link href="/blog" className="back-link">← Back to Blog</Link>

        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            border:          '1px dashed var(--color-border)',
            borderRadius:    '1rem',
            padding:         '4rem 2rem',
            textAlign:       'center',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✍️</div>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.75rem',
              fontWeight:    700,
              color:         'var(--color-foreground)',
              margin:        '0 0 0.75rem',
              letterSpacing: '-0.02em',
            }}
          >
            Article Coming Soon
          </h1>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2rem' }}>
            This article is being written. Subscribe on the blog page to get notified when it&apos;s published.
          </p>
          <Link href="/blog" className="btn-primary">
            Browse All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
