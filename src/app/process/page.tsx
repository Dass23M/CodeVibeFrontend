import type { Metadata } from 'next';
import Link from 'next/link';
import { PROCESS_STEPS } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'How I Work — Development Process',
  description:
    'A transparent 6-step development process: Discovery → Proposal → Design → Development → Deploy → Support. Know exactly what to expect.',
  path: '/process',
});

export default function ProcessPage() {
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
            Transparent &amp; Structured
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
            How I <span className="gradient-text">Work With You</span>
          </h1>
          <p
            style={{
              fontSize:   'clamp(1rem, 2vw, 1.125rem)',
              color:      'var(--color-muted)',
              maxWidth:   '520px',
              margin:     '0 auto',
              lineHeight: 1.8,
            }}
          >
            A clear, structured process so you always know what&apos;s happening and what comes next.
            No surprises — just clean execution.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="glass-card card-hover"
                style={{
                  display:             'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap:                 '1.75rem',
                  padding:             '2rem',
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    width:           '56px',
                    height:          '56px',
                    borderRadius:    '50%',
                    backgroundColor: 'var(--color-accent)',
                    color:           '#ffffff',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    fontFamily:      'var(--font-mono)',
                    fontWeight:      700,
                    fontSize:        '0.875rem',
                    flexShrink:      0,
                    boxShadow:       '0 4px 14px rgba(47,111,237,0.3)',
                  }}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{step.icon}</span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-foreground)', margin: 0, letterSpacing: '-0.01em' }}>
                      {step.title}
                    </h2>
                    <span
                      style={{
                        fontFamily:      'var(--font-mono)',
                        fontSize:        '0.7rem',
                        fontWeight:      600,
                        backgroundColor: 'var(--color-surface)',
                        border:          '1px solid var(--color-border)',
                        borderRadius:    '100px',
                        padding:         '0.2rem 0.65rem',
                        color:           'var(--color-muted)',
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--color-muted)', lineHeight: 1.8, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface-section">
        <div className="container" style={{ maxWidth: '680px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 2rem', letterSpacing: '-0.02em' }}>
            Common Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            {[
              { q: 'Do I need to pay upfront?', a: 'A 50% deposit is required to start, with the remaining 50% due upon delivery. No hidden fees.' },
              { q: 'What if I need changes after delivery?', a: '30 days of free bug fixes are included. Feature additions are quoted separately at a fair rate.' },
              { q: 'How do we communicate?', a: "Primarily WhatsApp for quick updates and Google Meet for calls. You'll always have direct access — no account managers." },
              { q: 'Do you sign NDAs?', a: 'Yes. NDAs are standard practice and can be arranged before project discussions begin.' },
            ].map(({ q, a }) => (
              <div key={q} className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-foreground)', margin: '0 0 0.5rem' }}>{q}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.75, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 0.75rem' }}>
            Ready to Start?
          </h2>
          <p style={{ color: 'var(--color-muted)', marginBottom: '2rem' }}>
            Step 1 is a free 15-min discovery call. No pressure, just a conversation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/quote" className="btn-primary">Get a Free Quote →</Link>
            <Link href="/contact" className="btn-outline">Contact Me</Link>
          </div>
        </div>
      </section>
    </>
  );
}
