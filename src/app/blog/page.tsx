import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import Badge from '@/components/ui/Badge';
import NewsletterForm from '@/components/blog/NewsletterForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog — Web Development Insights',
  description:
    'Web development tips, tutorials, and insights for businesses in Sri Lanka. Topics: MERN Stack, Next.js, SEO, and freelancing.',
  path: '/blog',
  keywords: [
    'hire MERN stack developer Sri Lanka blog',
    'Next.js tutorial Sri Lanka',
    'web development tips Sri Lanka',
  ],
});

// Static blog posts — replace with API data once blog posts exist
const BLOG_POSTS = [
  {
    slug: 'hire-mern-stack-developer-sri-lanka',
    title: 'How to Hire a MERN Stack Developer in Sri Lanka (2025 Guide)',
    excerpt: 'A complete guide to hiring a reliable full-stack developer in Sri Lanka — what to look for, where to find them, and what to pay.',
    tags: ['Hiring', 'MERN Stack', 'Sri Lanka'],
    date: '2025-01-15',
    readTime: '5 min read',
    emoji: '🔍',
  },
  {
    slug: 'nextjs-vs-react-for-small-business',
    title: 'Next.js vs React for Small Business Websites: Which Should You Choose?',
    excerpt: 'Comparing Next.js and React for small business use cases — SEO, performance, developer experience, and cost.',
    tags: ['Next.js', 'React', 'Comparison'],
    date: '2025-01-10',
    readTime: '7 min read',
    emoji: '⚖️',
  },
  {
    slug: 'web-development-cost-sri-lanka-2025',
    title: 'Web Development Cost in Sri Lanka (2025): A Transparent Breakdown',
    excerpt: 'Honest pricing guide for websites and web apps in Sri Lanka — from landing pages (LKR 15k) to enterprise platforms.',
    tags: ['Pricing', 'Sri Lanka', 'Guide'],
    date: '2025-01-05',
    readTime: '6 min read',
    emoji: '💰',
  },
  {
    slug: 'seo-for-sri-lankan-businesses',
    title: 'SEO for Sri Lankan Businesses: A 2025 Starter Guide',
    excerpt: 'How to rank your business on Google in Sri Lanka — keyword research, local SEO, Google My Business, and schema markup.',
    tags: ['SEO', 'Sri Lanka', 'Marketing'],
    date: '2024-12-28',
    readTime: '8 min read',
    emoji: '📈',
  },
  {
    slug: 'mongodb-vs-postgresql-when-to-use',
    title: 'MongoDB vs PostgreSQL: When to Use Which for Your Project',
    excerpt: 'A developer\'s practical guide to choosing the right database for your web application — real use cases, not theory.',
    tags: ['MongoDB', 'PostgreSQL', 'Database'],
    date: '2024-12-20',
    readTime: '6 min read',
    emoji: '🗄️',
  },
  {
    slug: 'fiverr-upwork-freelancer-tips-sri-lanka',
    title: 'Fiverr vs Upwork for Sri Lankan Freelancers: My Experience',
    excerpt: 'Having worked on both platforms, here\'s my honest comparison for Sri Lankan web developers — fees, clients, and strategy.',
    tags: ['Freelancing', 'Fiverr', 'Upwork'],
    date: '2024-12-15',
    readTime: '9 min read',
    emoji: '💼',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop:    '8rem',
          paddingBottom: '4rem',
          textAlign:     'center',
          background:    'linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <span
            style={{
              display:         'inline-block',
              fontFamily:      'var(--font-mono)',
              fontSize:        '0.72rem',
              fontWeight:      600,
              letterSpacing:   '0.1em',
              textTransform:   'uppercase',
              backgroundColor: 'var(--color-accent-light)',
              color:           'var(--color-accent)',
              padding:         '0.3rem 0.9rem',
              borderRadius:    '100px',
              marginBottom:    '1.25rem',
            }}
          >
            Dev Insights
          </span>
          <h1
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight:   800,
              color:        'var(--color-foreground)',
              letterSpacing:'-0.025em',
              margin:       '0 0 1rem',
            }}
          >
            Blog &{' '}
            <span className="gradient-text">Resources</span>
          </h1>
          <p
            style={{
              fontSize:   'clamp(1rem, 2vw, 1.125rem)',
              color:      'var(--color-muted)',
              maxWidth:   '500px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            Web development tips, tutorials, and business insights for Sri Lankan entrepreneurs
            and developers.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
              gap:                 '1.75rem',
            }}
          >
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="card-hover glass-card"
                style={{
                  padding:       '1.75rem',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '1rem',
                }}
              >
                {/* Emoji icon */}
                <div
                  style={{
                    width:           '52px',
                    height:          '52px',
                    borderRadius:    '12px',
                    backgroundColor: 'var(--color-surface)',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    fontSize:        '1.625rem',
                    border:          '1px solid var(--color-border)',
                  }}
                >
                  {post.emoji}
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)' }}>
                    {new Date(post.date).toLocaleDateString('en-LK', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)' }}>
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     '1.05rem',
                    fontWeight:   700,
                    color:        'var(--color-foreground)',
                    lineHeight:   1.4,
                    margin:       0,
                    letterSpacing:'-0.01em',
                  }}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize:   '0.875rem',
                    color:      'var(--color-muted)',
                    lineHeight: 1.75,
                    margin:     0,
                    flexGrow:   1,
                    display:    '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow:   'hidden',
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="muted" size="sm">{tag}</Badge>
                  ))}
                </div>

                {/* Read link */}
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    gap:            '0.375rem',
                    fontFamily:     'var(--font-body)',
                    fontSize:       '0.875rem',
                    fontWeight:     600,
                    color:          'var(--color-accent)',
                    textDecoration: 'none',
                    transition:     'gap 0.2s',
                    marginTop:      '0.25rem',
                  }}
                >
                  Read Article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="section"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderTop:       '1px solid var(--color-border)',
          textAlign:       'center',
        }}
      >
        <div className="container" style={{ maxWidth: '520px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 0.75rem' }}>
            Want More Dev Tips?
          </h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Subscribe to get new articles about MERN Stack, Next.js, and web business
            in Sri Lanka — no spam.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
