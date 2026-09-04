'use client';

import Link from 'next/link';

/* ── SVG Icon Components ── */
const IconPalette = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="14" cy="9" r="1.5" fill="currentColor" />
    <circle cx="9" cy="10.5" r="1.5" fill="currentColor" />
    <circle cx="10" cy="15" r="1.5" fill="currentColor" />
    <circle cx="15.5" cy="14" r="1.5" fill="currentColor" />
  </svg>
);

const IconBolt = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconBox = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const FEATURES = [
  {
    icon: <IconPalette />,
    title: 'Pixel-Perfect UI/UX',
    description: 'Every interface is carefully crafted — from color systems and typography to micro-animations and fully responsive layouts.',
  },
  {
    icon: <IconBolt />,
    title: 'Blazing Fast Performance',
    description: 'Built on Next.js with optimized asset loading, code splitting, and SSR to achieve top Core Web Vitals scores.',
  },
  {
    icon: <IconLayers />,
    title: 'Scalable Architecture',
    description: 'Clean, modular code with reusable components, custom hooks, and industry-standard design patterns that grow with your product.',
  },
  {
    icon: <IconBox />,
    title: 'End-to-End Delivery',
    description: 'From initial wireframe to production deployment — I handle the full lifecycle so you can focus on your business.',
  },
];

export default function IllustratorSection() {
  return (
    <section
      id="why-code-vibe"
      style={{
        paddingTop: '7rem',
        paddingBottom: '7rem',
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN — Illustration */}
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
              overflow: 'hidden',
            }}
          >
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

          {/* RIGHT COLUMN — Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.04em',
                  color: 'var(--color-foreground)',
                  margin: '0 0 1.25rem 0',
                }}
              >
                Crafted with precision.
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--color-foreground-2)',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: '480px',
                }}
              >
                I don&apos;t just write code — I build experiences. Every project combines thoughtful design, clean architecture, and optimised performance.
              </p>
            </div>

            {/* Feature cards as 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
                      {feature.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.55 }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
              <Link href="/services" className="btn-primary">
                Explore Services
              </Link>
              <Link href="/portfolio" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

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
