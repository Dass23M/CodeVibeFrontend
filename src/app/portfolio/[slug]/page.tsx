import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import Badge from '@/components/ui/Badge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  return generatePageMetadata({
    title: project ? `${project.title} Case Study` : 'Project Case Study',
    description: project?.summary,
    path: `/portfolio/${slug}`,
  });
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section style={{ paddingTop: '9rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-foreground)' }}>Project Not Found</h1>
          <Link href="/portfolio" className="link-arrow" style={{ marginTop: '1.5rem' }}>← Back to Portfolio</Link>
        </div>
      </section>
    );
  }

  const icons     = ['💪', '🔍', '📰'];
  const idx       = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);
  const gradients = [
    'linear-gradient(135deg, #0f1f3d 0%, #2F6FED 100%)',
    'linear-gradient(135deg, #0d1f2d 0%, #0ea5e9 100%)',
    'linear-gradient(135deg, #0a0f1e 0%, #4B87F0 100%)',
  ];

  return (
    <>
      {/* Cover */}
      <div
        style={{
          height:         '380px',
          background:     gradients[idx] ?? gradients[0],
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          position:       'relative',
          overflow:       'hidden',
          marginTop:      '4.5rem',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{icons[idx]}</div>
          <p style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', fontWeight: 600 }}>{project.title}</p>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link href="/portfolio" className="back-link">← All Projects</Link>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 700, color: 'var(--color-foreground)', letterSpacing: '-0.025em', margin: '0 0 1rem' }}>
            {project.title}
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '3rem' }}>
            {project.summary}
          </p>

          {[
            { label: '🎯 The Problem',  content: project.problem },
            { label: '💡 The Solution', content: project.solution },
            { label: '📈 The Result',   content: project.result },
          ].map(({ label, content }) => content ? (
            <div key={label} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 0.75rem', letterSpacing: '-0.01em' }}>
                {label}
              </h2>
              <p style={{ fontSize: '0.975rem', color: 'var(--color-foreground-2)', lineHeight: 1.85 }}>{content}</p>
            </div>
          ) : null)}

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 1rem', letterSpacing: '-0.01em' }}>
              🛠 Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.techStack.map((t) => <Badge key={t} variant="default">{t}</Badge>)}
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                🔗 View Live Site →
              </a>
            )}
            <Link href="/quote" className="btn-outline">Start a Similar Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
