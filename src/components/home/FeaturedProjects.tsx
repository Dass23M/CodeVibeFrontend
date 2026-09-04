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
                  height:         '240px',
                  backgroundColor: 'var(--color-surface-2)',
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  position:       'relative',
                  overflow:       'hidden',
                }}
              >
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--color-muted)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    {['FitSync', 'Lost & Found', 'CodeNews.lk'][idx]}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--color-accent)' }}>
                    {/* Project SVG Icons */}
                    {idx === 0 && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6.5 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" /><path d="M14 14l-4-4" /><path d="M10 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6z" />
                      </svg>
                    )}
                  </div>
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

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link href="/portfolio" className="btn-outline">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
