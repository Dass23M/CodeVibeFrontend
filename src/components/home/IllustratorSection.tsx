'use client';

import Link from 'next/link';

const FEATURES = [
  {
    emoji: '🎨',
    title: 'Pixel-Perfect UI/UX',
    description:
      'Every interface is carefully crafted — from color systems and typography to micro-animations and fully responsive layouts.',
  },
  {
    emoji: '⚡',
    title: 'Blazing Fast Performance',
    description:
      'Built on Next.js with optimized asset loading, code splitting, and SSR to achieve top Core Web Vitals scores.',
  },
  {
    emoji: '🔧',
    title: 'Scalable Architecture',
    description:
      'Clean, modular code with reusable components, custom hooks, and industry-standard design patterns that grow with your product.',
  },
  {
    emoji: '📦',
    title: 'End-to-End Delivery',
    description:
      'From initial wireframe to production deployment — I handle the full lifecycle so you can focus on your business.',
  },
];

export default function IllustratorSection() {
  return (
    <section
      id="why-code-vibe"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* ════════════════════════════════
              LEFT COLUMN — Illustration
          ════════════════════════════════ */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '420px',
              backgroundColor: '#ffffff',
              borderRadius: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
              padding: '3rem',
              overflow: 'hidden'
            }}
          >
            {/* The illustration image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-illustrator-processed.png"
              alt="Creative web design and development illustration"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                position: 'relative',
                zIndex: 2,
              }}
            />
          </div>

          {/* ════════════════════════════════
              RIGHT COLUMN — Content
          ════════════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  color: 'var(--color-foreground)',
                  margin: '0 0 1rem 0',
                }}
              >
                Crafted with precision.
              </h2>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--color-foreground-2)',
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: '480px',
                }}
              >
                I don&apos;t just write code — I build experiences. Every project combines
                thoughtful design, clean architecture, and optimised performance.
              </p>
            </div>

            {/* Feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {FEATURES.map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                    }}
                  >
                    {feature.emoji}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
                      {feature.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* ── Mobile: stack columns vertically ── */}
        <style>{`
          @media (max-width: 768px) {
            #why-code-vibe > div > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
