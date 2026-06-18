import type { Metadata } from 'next';
import ProjectEstimator from '@/components/quote/ProjectEstimator';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Get a Free Quote — Project Estimator',
  description:
    'Use our interactive project estimator to get an instant cost and timeline estimate for your web development project. Free quote within 24 hours.',
  path: '/quote',
  keywords: ['web development quote Sri Lanka', 'project cost estimator', 'free web development quote'],
});

export default function QuotePage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          paddingTop:    '8rem',
          paddingBottom: '3rem',
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
            Free — No Commitment
          </span>
          <h1
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     'clamp(2rem, 5vw, 3.25rem)',
              fontWeight:   800,
              color:        'var(--color-foreground)',
              letterSpacing:'-0.025em',
              margin:       '0 0 1rem',
            }}
          >
            Project{' '}
            <span className="gradient-text">Cost Estimator</span>
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
            Answer 4 quick questions to get an instant price estimate and timeline.
            Then submit to receive a detailed custom quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Estimator */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <ProjectEstimator />
        </div>
      </section>
    </>
  );
}
