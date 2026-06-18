import Link from 'next/link';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';

export default function FeaturedProjects() {
  const projects = PORTFOLIO_PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Featured <span className="gradient-text">Case Studies</span></>}
          subtitle="Real projects. Real results. Here are three of my recent builds."
        />

        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap:                 '1.75rem',
          }}
        >
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="card-hover glass-card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Cover Image */}
              <div
                style={{
                  height:         '200px',
                  background:     idx === 0
                    ? 'linear-gradient(135deg, #1e3a5f 0%, #2F6FED 100%)'
                    : idx === 1
                    ? 'linear-gradient(135deg, #1a2840 0%, #0ea5e9 100%)'
                    : 'linear-gradient(135deg, #0f1923 0%, #4B87F0 100%)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  position:       'relative',
                  overflow:       'hidden',
                }}
              >
                <div
                  style={{
                    position:       'absolute',
                    inset:          0,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {['// FitSync', '// Lost & Found', '// CodeNews.lk'][idx]}
                  </p>
                  <p style={{ fontSize: '2.5rem', margin: 0 }}>
                    {['💪', '🔍', '📰'][idx]}
                  </p>
                </div>

                {project.liveUrl && (
                  <div
                    style={{
                      position:        'absolute',
                      top:             '0.75rem',
                      right:           '0.75rem',
                      backgroundColor: 'rgba(34,197,94,0.15)',
                      border:          '1px solid rgba(34,197,94,0.3)',
                      borderRadius:    '100px',
                      padding:         '0.2rem 0.6rem',
                      display:         'flex',
                      alignItems:      'center',
                      gap:             '0.35rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#22c55e', fontWeight: 600 }}>Live</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flexGrow: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.175rem', fontWeight: 700, color: 'var(--color-foreground)', margin: 0, letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.7, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {project.summary}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="muted" size="sm">{tech}</Badge>
                  ))}
                  {project.techStack.length > 4 && (
                    <Badge variant="muted" size="sm">+{project.techStack.length - 4}</Badge>
                  )}
                </div>

                <Link href={`/portfolio#${project.slug}`} className="link-arrow" style={{ marginTop: '0.25rem' }}>
                  View Case Study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/portfolio" className="btn-outline">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
