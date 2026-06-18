'use client';

import Link from 'next/link';

const FEATURES = [
  {
    emoji: '🎨',
    title: 'Pixel-Perfect UI/UX',
    description:
      'Every interface is carefully crafted to deliver a stunning user experience — from color systems and typography to micro-animations and responsive layouts.',
  },
  {
    emoji: '⚡',
    title: 'Blazing Fast Performance',
    description:
      'Built on Next.js and React with optimized asset loading, code splitting, and server-side rendering to achieve top Core Web Vitals scores.',
  },
  {
    emoji: '🔧',
    title: 'Scalable Architecture',
    description:
      'Clean, modular code with a well-structured component tree, reusable hooks, and industry-standard design patterns that grow with your product.',
  },
  {
    emoji: '📦',
    title: 'End-to-End Delivery',
    description:
      'From initial wireframe to production deployment — I handle the full lifecycle so you can focus on your business, not the tech stack.',
  },
];

export default function IllustratorSection() {
  return (
    <section
      style={{
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: '#F4F7FF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(47,111,237,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-8%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(91,158,255,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* ── Left Column: Illustration ── */}
          <div
            className="animate-fade-in-up"
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Decorative glow ring behind illustration */}
            <div
              style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(47,111,237,0.08) 0%, transparent 65%)',
                pointerEvents: 'none',
              }}
            />

            {/* Floating tool badge — top right */}
            <div
              style={{
                position: 'absolute',
                top: '8%',
                right: '0',
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '0.875rem',
                padding: '0.6rem 1rem',
                boxShadow: '0 6px 24px rgba(47,111,237,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'floatPulse 5s ease-in-out infinite',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '1rem' }}>🎨</span>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-foreground)', fontFamily: 'var(--font-body)' }}>
                  UI/UX Design
                </p>
                <p style={{ margin: 0, fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                  Figma → Code
                </p>
              </div>
            </div>

            {/* Floating tool badge — bottom left */}
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '0',
                background: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: '0.875rem',
                padding: '0.6rem 1rem',
                boxShadow: '0 6px 24px rgba(47,111,237,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                animation: 'floatPulse 6s ease-in-out 1s infinite',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '1rem' }}>💻</span>
              <div>
                <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-foreground)', fontFamily: 'var(--font-body)' }}>
                  Clean Code
                </p>
                <p style={{ margin: 0, fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                  Scalable & Maintainable
                </p>
              </div>
            </div>

            <img
              src="/images/hero-illustrator-processed.png"
              alt="Creative web design and development illustration"
              style={{
                width: '100%',
                maxWidth: '520px',
                height: 'auto',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
                animation: 'floatPulse 7s ease-in-out infinite',
                filter: 'drop-shadow(0 20px 40px rgba(47,111,237,0.12))',
              }}
            />
          </div>

          {/* ── Right Column: Content ── */}
          <div
            className="animate-fade-in-up animate-fade-in-up-delay-2"
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content',
                background: 'var(--color-accent-light)',
                border: '1px solid rgba(47,111,237,0.2)',
                borderRadius: '100px',
                padding: '0.35rem 0.95rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--color-accent)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  flexShrink: 0,
                }}
              />
              Why Choose Code Vibe
            </div>

            {/* Heading */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: 'var(--color-foreground)',
                  margin: 0,
                }}
              >
                Crafted with{' '}
                <span className="gradient-text">Precision & Passion</span>
              </h2>
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                  color: 'var(--color-muted)',
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: '480px',
                }}
              >
                I don&apos;t just write code — I build experiences. Every project combines
                thoughtful design, clean architecture, and optimized performance to deliver
                something truly remarkable.
              </p>
            </div>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.125rem 1.25rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: '0.875rem',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateX(4px)';
                    el.style.boxShadow = '0 6px 20px rgba(47,111,237,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateX(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--color-accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    {feature.emoji}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: 'var(--color-foreground)',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {feature.title}
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--color-muted)',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  height: '3rem',
                  padding: '0 1.75rem',
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 18px rgba(47,111,237,0.25)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-accent-hover)';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 24px rgba(47,111,237,0.35)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = 'var(--color-accent)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 18px rgba(47,111,237,0.25)';
                }}
              >
                Explore Services
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  height: '3rem',
                  padding: '0 1.75rem',
                  backgroundColor: 'transparent',
                  color: 'var(--color-foreground)',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--color-accent)';
                  el.style.color = 'var(--color-accent)';
                  el.style.backgroundColor = 'var(--color-accent-light)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--color-border)';
                  el.style.color = 'var(--color-foreground)';
                  el.style.backgroundColor = 'transparent';
                }}
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
