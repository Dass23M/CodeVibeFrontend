import type { Metadata } from 'next';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Portfolio & Case Studies',
  description:
    "Explore Code Vibe's portfolio: FitSync fitness platform, Lost & Found system, CodeNews.lk — real MERN Stack & Next.js projects with measurable results.",
  path: '/portfolio',
  keywords: ['MERN stack portfolio Sri Lanka', 'Next.js case studies', 'full stack developer projects'],
});

export default function PortfolioPage() {
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
            My Work
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
            Portfolio &amp; <span className="gradient-text">Case Studies</span>
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
            Real problems. Clean solutions. Measurable results. Here&apos;s what I&apos;ve built.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {PORTFOLIO_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            const gradients = [
              'linear-gradient(135deg, #0f1f3d 0%, #2F6FED 100%)',
              'linear-gradient(135deg, #0d1f2d 0%, #0ea5e9 100%)',
              'linear-gradient(135deg, #0a0f1e 0%, #4B87F0 100%)',
            ];
            const icons = ['💪', '🔍', '📰'];

            return (
              <article
                key={project.slug}
                id={project.slug}
                style={{
                  display:             'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                  gap:                 '3rem',
                  alignItems:          'center',
                  direction:           isEven ? 'ltr' : 'rtl',
                }}
              >
                {/* Visual */}
                <div
                  style={{
                    direction:       'ltr',
                    borderRadius:    '1.25rem',
                    overflow:        'hidden',
                    height:          '380px',
                    background:      gradients[idx] ?? gradients[0],
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    position:        'relative',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icons[idx]}</div>
                    <p style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{project.title}</p>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display:         'inline-flex',
                          alignItems:      'center',
                          gap:             '0.4rem',
                          marginTop:       '1rem',
                          padding:         '0.4rem 1rem',
                          backgroundColor: 'rgba(255,255,255,0.15)',
                          border:          '1px solid rgba(255,255,255,0.25)',
                          borderRadius:    '100px',
                          color:           '#ffffff',
                          fontSize:        '0.78rem',
                          fontFamily:      'var(--font-mono)',
                          textDecoration:  'none',
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                        View Live →
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Case Study {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--color-foreground)', margin: 0, letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.8, margin: 0 }}>
                    {project.summary}
                  </p>

                  {[
                    { label: '🎯 Problem',  content: project.problem },
                    { label: '💡 Solution', content: project.solution },
                    { label: '📈 Result',   content: project.result },
                  ].map(({ label, content }) => content ? (
                    <div key={label}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 0.3rem' }}>
                        {label}
                      </p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-foreground-2)', lineHeight: 1.75, margin: 0 }}>
                        {content}
                      </p>
                    </div>
                  ) : null)}

                  <div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Tech Stack
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-surface-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '560px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.875rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 1rem' }}>
            Want Results Like These?
          </h2>
          <p style={{ color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Let&apos;s discuss your project and build something you&apos;re proud of.
          </p>
          <Link href="/quote" className="btn-primary">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  );
}
