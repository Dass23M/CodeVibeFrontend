import SectionHeading from '@/components/ui/SectionHeading';

const PILLARS = [
  {
    title: 'Modern Frontend & UX',
    description: 'Highly responsive, interactive user experiences built with Next.js and React. Using server-rendered components for absolute speed and interactive elements for seamless user flows.',
    image: '/images/illustrations/frontend.png',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Robust Full-Stack Power',
    description: 'Scalable MERN-stack architectures with Node.js, Express, and MongoDB. Secure, rate-limited APIs with strict schema validation and production-ready email dispatch engines.',
    image: '/images/illustrations/backend.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'SEO & Performance Core',
    description: 'Meticulously crafted for Google search indexers. Optimized with dynamic sitemaps, semantic HTML headings, pre-rendered metadata structures, and blazing fast sub-second load times.',
    image: '/images/illustrations/performance.png',
    tags: ['SEO Ready', 'Sub-1s Load', 'Web Vitals', 'Metadata'],
  },
];

export default function PillarsSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <SectionHeading
          eyebrow="Core Competencies"
          title={<>Engaged. Scalable. <span className="gradient-text">Search-Ready.</span></>}
          subtitle="Combining high-impact design aesthetics with solid software engineering principles."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card card-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '1.25rem',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Illustration Header */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  width: '100%',
                  backgroundColor: 'var(--color-accent-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '1rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--color-foreground)',
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {pillar.title}
                </h3>
                
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    paddingTop: '0.5rem',
                  }}
                >
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.6rem',
                        backgroundColor: 'var(--color-accent-light)',
                        color: 'var(--color-accent)',
                        borderRadius: '0.375rem',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
