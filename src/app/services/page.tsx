import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICE_PACKAGES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Services & Pricing',
  description:
    'Professional web development services in Sri Lanka. Landing pages from LKR 15,000, Full web apps from LKR 80,000. MERN Stack, Next.js, Restaurant, Tourism & E-commerce websites.',
  path: '/services',
  keywords: ['web development pricing Sri Lanka', 'affordable website Sri Lanka', 'LKR web development'],
});

function formatLKR(amount: number) {
  return `LKR ${amount.toLocaleString('en-LK')}`;
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
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
            Transparent Pricing
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
            Services &amp; <span className="gradient-text">Pricing Packages</span>
          </h1>
          <p
            style={{
              fontSize:   'clamp(1rem, 2vw, 1.125rem)',
              color:      'var(--color-muted)',
              maxWidth:   '540px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            Fixed-price packages in LKR. No hidden fees, no surprises. Pick a package
            or get a custom quote for your unique project.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section" id="packages">
        <div className="container">
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
              gap:                 '1.5rem',
              alignItems:          'stretch',
            }}
          >
            {SERVICE_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                id={pkg.id}
                className="card-hover"
                style={{
                  border:          pkg.recommended ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                  borderRadius:    '1rem',
                  backgroundColor: '#ffffff',
                  display:         'flex',
                  flexDirection:   'column',
                  overflow:        'hidden',
                  position:        'relative',
                  boxShadow:       pkg.recommended ? '0 8px 30px rgba(47,111,237,0.15)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {pkg.recommended && (
                  <div
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color:           '#ffffff',
                      textAlign:       'center',
                      padding:         '0.35rem',
                      fontFamily:      'var(--font-mono)',
                      fontSize:        '0.7rem',
                      fontWeight:      700,
                      letterSpacing:   '0.08em',
                      textTransform:   'uppercase',
                    }}
                  >
                    ✦ Most Popular
                  </div>
                )}

                <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Header */}
                  <div>
                    <h2
                      style={{
                        fontFamily:    'var(--font-display)',
                        fontSize:      '1.25rem',
                        fontWeight:    700,
                        color:         'var(--color-foreground)',
                        margin:        '0 0 0.3rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {pkg.name}
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', margin: 0 }}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div
                    style={{
                      padding:         '1.25rem',
                      backgroundColor: 'var(--color-surface)',
                      borderRadius:    '0.75rem',
                      border:          '1px solid var(--color-border)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                      <span
                        style={{
                          fontFamily:    'var(--font-display)',
                          fontSize:      '1.875rem',
                          fontWeight:    800,
                          color:         pkg.recommended ? 'var(--color-accent)' : 'var(--color-foreground)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {formatLKR(pkg.priceMin)}
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                        – {formatLKR(pkg.priceMax)}
                      </span>
                    </div>
                    <p style={{ margin: '0.35rem 0 0', fontSize: '0.8rem', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                      ⏱ {pkg.deliveryDays} delivery
                    </p>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', flexGrow: 1 }}>
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-foreground-2)', lineHeight: 1.5 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                    {pkg.notIncluded?.map((item) => (
                      <li
                        key={item}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.5, opacity: 0.6 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — CSS class-based hover, no JS handlers */}
                  <Link
                    href={`/quote?package=${pkg.id}`}
                    className={pkg.recommended ? 'btn-service-recommended' : 'btn-service-normal'}
                  >
                    {pkg.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Custom Project CTA */}
          <div
            style={{
              marginTop:       '3.5rem',
              padding:         '2.5rem',
              borderRadius:    '1rem',
              background:      'linear-gradient(135deg, var(--color-surface) 0%, var(--color-accent-light) 100%)',
              border:          '1px solid var(--color-border)',
              display:         'flex',
              flexWrap:        'wrap',
              alignItems:      'center',
              justifyContent:  'space-between',
              gap:             '1.5rem',
            }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-foreground)', margin: '0 0 0.4rem' }}>
                Need something custom?
              </h3>
              <p style={{ color: 'var(--color-muted)', fontSize: '0.925rem', margin: 0 }}>
                Don&apos;t see what you need? Let&apos;s talk and build a custom package just for your project.
              </p>
            </div>
            <Link href="/contact" className="btn-primary-sm">
              Let&apos;s Discuss →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-surface-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
            All packages include{' '}
            <strong style={{ color: 'var(--color-foreground)' }}>mobile-responsive design</strong>,{' '}
            <strong style={{ color: 'var(--color-foreground)' }}>SEO basics</strong>, and{' '}
            <strong style={{ color: 'var(--color-foreground)' }}>direct WhatsApp support</strong>.
          </p>
          <Link href="/quote" className="link-arrow" style={{ fontSize: '1rem' }}>
            Use the Project Estimator → Get an instant cost estimate
          </Link>
        </div>
      </section>
    </>
  );
}
