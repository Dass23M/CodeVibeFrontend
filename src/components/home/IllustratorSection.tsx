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
        paddingTop: '5rem',
        paddingBottom: '5rem',
        backgroundColor: '#F4F7FF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(47,111,237,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(91,158,255,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Two-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
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
            }}
          >
            {/* Soft radial glow behind image */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0',
                background: 'radial-gradient(circle at 50% 55%, rgba(47,111,237,0.10) 0%, transparent 68%)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />

            {/* Floating badge — top right */}
            <div
              style={{
                position: 'absolute',
                top: '6%',
                right: '2%',
                background: '#ffffff',
                border: '1px solid #D1DCF5',
                borderRadius: '0.875rem',
                padding: '0.55rem 0.9rem',
                boxShadow: '0 8px 24px rgba(47,111,237,0.13)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: 3,
                animation: 'floatPulse 5s ease-in-out infinite',
              }}
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>🎨</span>
              <div>
                <p style={{ margin: 0, fontSize: '0.73rem', fontWeight: 700, color: '#05070D', lineHeight: 1.3 }}>
                  UI/UX Design
                </p>
                <p style={{ margin: 0, fontSize: '0.63rem', color: '#64748B', lineHeight: 1.3 }}>
                  Figma → Code
                </p>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              style={{
                position: 'absolute',
                bottom: '8%',
                left: '2%',
                background: '#ffffff',
                border: '1px solid #D1DCF5',
                borderRadius: '0.875rem',
                padding: '0.55rem 0.9rem',
                boxShadow: '0 8px 24px rgba(47,111,237,0.13)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                zIndex: 3,
                animation: 'floatPulse 6s ease-in-out 1.2s infinite',
              }}
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>⚡</span>
              <div>
                <p style={{ margin: 0, fontSize: '0.73rem', fontWeight: 700, color: '#05070D', lineHeight: 1.3 }}>
                  Next.js & React
                </p>
                <p style={{ margin: 0, fontSize: '0.63rem', color: '#64748B', lineHeight: 1.3 }}>
                  Production Ready
                </p>
              </div>
            </div>

            {/* The illustration image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero-illustrator-processed.png"
              alt="Creative web design and development illustration"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'contain',
                display: 'block',
                position: 'relative',
                zIndex: 2,
                animation: 'floatPulse 7s ease-in-out infinite',
                filter: 'drop-shadow(0 16px 36px rgba(47,111,237,0.14))',
              }}
            />
          </div>

          {/* ════════════════════════════════
              RIGHT COLUMN — Content
          ════════════════════════════════ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Eyebrow pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                width: 'fit-content',
                background: '#EBF1FD',
                border: '1px solid rgba(47,111,237,0.22)',
                borderRadius: '100px',
                padding: '0.35rem 0.95rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.70rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#2F6FED',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#2F6FED',
                  flexShrink: 0,
                }}
              />
              Why Choose Code Vibe
            </div>

            {/* Heading */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#05070D',
                  margin: '0 0 0.75rem 0',
                }}
              >
                Crafted with{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #2F6FED 0%, #5B9EFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Precision &amp; Passion
                </span>
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#64748B',
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: '460px',
                }}
              >
                I don&apos;t just write code — I build experiences. Every project combines
                thoughtful design, clean architecture, and optimised performance to deliver
                something truly remarkable.
              </p>
            </div>

            {/* Feature cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1rem 1.125rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #D1DCF5',
                    borderRadius: '0.875rem',
                    alignItems: 'flex-start',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateX(5px)';
                    el.style.boxShadow = '0 6px 22px rgba(47,111,237,0.11)';
                    el.style.borderColor = 'rgba(47,111,237,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateX(0)';
                    el.style.boxShadow = 'none';
                    el.style.borderColor = '#D1DCF5';
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      backgroundColor: '#EBF1FD',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {feature.emoji}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: '0 0 0.2rem 0',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: '#05070D',
                        fontFamily: 'var(--font-body)',
                      }}
                    >
                      {feature.title}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '0.8rem',
                        color: '#64748B',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  height: '2.9rem',
                  padding: '0 1.6rem',
                  backgroundColor: '#2F6FED',
                  color: '#ffffff',
                  borderRadius: '0.7rem',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                  boxShadow: '0 4px 16px rgba(47,111,237,0.28)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = '#1A56CC';
                  el.style.transform = 'translateY(-2px)';
                  el.style.boxShadow = '0 8px 24px rgba(47,111,237,0.38)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = '#2F6FED';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 4px 16px rgba(47,111,237,0.28)';
                }}
              >
                Explore Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  height: '2.9rem',
                  padding: '0 1.6rem',
                  backgroundColor: 'transparent',
                  color: '#05070D',
                  border: '1.5px solid #D1DCF5',
                  borderRadius: '0.7rem',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = '#2F6FED';
                  el.style.color = '#2F6FED';
                  el.style.backgroundColor = '#EBF1FD';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = '#D1DCF5';
                  el.style.color = '#05070D';
                  el.style.backgroundColor = 'transparent';
                }}
              >
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
