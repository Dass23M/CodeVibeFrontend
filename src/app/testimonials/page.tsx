import type { Metadata } from 'next';
import Link from 'next/link';
import Testimonials from '@/components/ui/Testimonials';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Client Testimonials & Reviews',
  description:
    'Read what clients say about Code Vibe. Real reviews from Fiverr, Upwork, and direct clients — 5-star rated Sri Lankan web developer.',
  path: '/testimonials',
  keywords: ['Code Vibe reviews', 'Sri Lanka web developer testimonials', 'Fiverr developer reviews'],
});

export default function TestimonialsPage() {
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
            Social Proof
          </span>
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight:    800,
              color:         'var(--color-foreground)',
              letterSpacing: '-0.025em',
              margin:        '0 0 1rem',
            }}
          >
            What <span className="gradient-text">Clients Say</span>
          </h1>
          <p
            style={{
              fontSize:      'clamp(1rem, 2vw, 1.125rem)',
              color:         'var(--color-muted)',
              maxWidth:      '480px',
              margin:        '0 auto 2rem',
              lineHeight:    1.8,
            }}
          >
            Real reviews from real clients on Fiverr, Upwork, and direct engagements.
          </p>

          {/* Platform badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { platform: 'Fiverr', rating: '5.0 ★', color: '#1dbf73', bg: 'rgba(29,191,115,0.1)' },
              { platform: 'Upwork', rating: 'Top Rated', color: '#14855a', bg: 'rgba(20,133,90,0.1)' },
              { platform: 'Direct', rating: '15+ Projects', color: 'var(--color-accent)', bg: 'var(--color-accent-light)' },
            ].map(({ platform, rating, color, bg }) => (
              <div key={platform} style={{ padding: '0.5rem 1.25rem', backgroundColor: bg, borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.875rem', color, fontFamily: 'var(--font-body)' }}>{platform}</span>
                <span style={{ fontSize: '0.8rem', color, fontFamily: 'var(--font-mono)' }}>{rating}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section">
        <div className="container">
          <Testimonials maxDisplay={12} />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '520px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 1rem' }}>
            Ready to Join the List?
          </h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Let&apos;s build something great together. Get a free quote today.
          </p>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
