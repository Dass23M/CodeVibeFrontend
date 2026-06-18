import Link from 'next/link';
import { CALENDLY_URL } from '@/lib/constants';

export default function CTASection() {
  return (
    <section
      className="bg-accent-section"
      style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position:       'absolute',
          inset:          0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents:  'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '700px' }}>
        <span
          style={{
            display:         'inline-block',
            fontFamily:      'var(--font-mono)',
            fontSize:        '0.72rem',
            fontWeight:      600,
            letterSpacing:   '0.1em',
            textTransform:   'uppercase',
            backgroundColor: 'rgba(255,255,255,0.15)',
            color:           'rgba(255,255,255,0.9)',
            padding:         '0.3rem 0.9rem',
            borderRadius:    '100px',
            marginBottom:    '1.5rem',
          }}
        >
          Let&apos;s build something great
        </span>

        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 5vw, 3.25rem)',
            fontWeight:    800,
            color:         '#ffffff',
            lineHeight:    1.15,
            letterSpacing: '-0.025em',
            margin:        '0 0 1.25rem',
          }}
        >
          Ready to Turn Your Idea
          <br />
          Into a Real Product?
        </h2>

        <p
          style={{
            fontSize:   'clamp(1rem, 2vw, 1.125rem)',
            color:      'rgba(255,255,255,0.8)',
            lineHeight: 1.8,
            margin:     '0 0 2.5rem',
          }}
        >
          Tell me about your project and get a{' '}
          <strong style={{ color: '#ffffff' }}>free custom quote</strong> within 24 hours.
          No commitment, no pressure — just a clear plan and honest pricing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/quote" className="btn-white">
            ✦ Start a Project
          </Link>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-white"
          >
            📅 Book a Free Call
          </a>
        </div>

        <div
          style={{
            display:        'flex',
            flexWrap:       'wrap',
            justifyContent: 'center',
            gap:            '1.5rem',
            marginTop:      '2rem',
          }}
        >
          {['✓ Free Quote in 24hrs', '✓ No Upfront Payment', '✓ Fixed Pricing (LKR)', '✓ Direct WhatsApp Access'].map((item) => (
            <span key={item} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-body)' }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
