'use client';

import { TRUST_BADGES } from '@/lib/constants';

const BADGE_ICONS = [
  // 1. Fiverr Rating (Star)
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  // 2. Upwork Score (Shield Check)
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 11 11 13 15 9" />
    </svg>
  ),
  // 3. Projects Done (Activity Graph)
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  // 4. Experience (Code Tags)
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  // 5. Based in (Location Marker)
  (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
];

export default function TrustBadges() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderBottom:    '1px solid var(--color-border)',
        padding:         '3rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:                 '1.5rem',
            alignItems:          'stretch',
          }}
        >
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={badge.label}
              className="glass-card"
              style={{
                display:         'flex',
                alignItems:      'center',
                gap:             '1rem',
                padding:         '1.25rem 1.5rem',
                borderRadius:    '1rem',
                border:          '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                transition:      'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor:          'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'var(--color-accent)';
                el.style.boxShadow = '0 12px 30px rgba(47, 111, 237, 0.08)';
                el.style.backgroundColor = '#ffffff';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--color-border)';
                el.style.boxShadow = 'none';
                el.style.backgroundColor = 'var(--color-surface)';
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width:           '42px',
                  height:          '42px',
                  borderRadius:    '12px',
                  backgroundColor: 'var(--color-accent-light)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  border:          '1px solid rgba(47, 111, 237, 0.12)',
                  flexShrink:      0,
                }}
              >
                {BADGE_ICONS[idx]}
              </div>

              {/* Text Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <p
                  style={{
                    margin:      0,
                    fontFamily:  'var(--font-display)',
                    fontWeight:  800,
                    fontSize:    '1.125rem',
                    color:       'var(--color-foreground)',
                    lineHeight:  1.2,
                  }}
                >
                  {badge.value}
                </p>
                <p
                  style={{
                    margin:     0,
                    fontFamily: 'var(--font-body)',
                    fontSize:   '0.75rem',
                    color:      'var(--color-muted)',
                    lineHeight: 1.3,
                    fontWeight: 500,
                  }}
                >
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
