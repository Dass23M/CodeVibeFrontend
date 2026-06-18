import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'About — Code Vibe Developer',
  description:
    'Meet Code Vibe — a MERN Stack & Next.js developer based in Gampaha, Sri Lanka. 3+ years building scalable web applications for startups and businesses.',
  path: '/about',
});

const SKILLS = [
  { category: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Redux', 'React Query'] },
  { category: 'Backend',   items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth', 'Mongoose', 'Prisma'] },
  { category: 'Database',  items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
  { category: 'DevOps',    items: ['Docker', 'Vercel', 'AWS (EC2/S3)', 'Nginx', 'CI/CD', 'Git/GitHub'] },
  { category: 'Tools',     items: ['VS Code', 'Postman', 'Figma', 'Linux', 'Webpack', 'Turborepo'] },
];

const TIMELINE = [
  { year: '2021', milestone: 'Started self-learning web development with HTML/CSS/JS' },
  { year: '2022', milestone: 'Built first MERN stack project — a task management app' },
  { year: '2023', milestone: 'Joined Fiverr and Upwork, completed first freelance projects' },
  { year: '2023', milestone: 'Launched CodeNews.lk — ranked #1 in 6 months' },
  { year: '2024', milestone: 'Achieved Top Rated status on Upwork, Level 2 on Fiverr' },
  { year: '2025', milestone: 'Code Vibe officially launched as a freelance studio' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '8rem', paddingBottom: '4rem', background: 'linear-gradient(180deg, var(--color-surface) 0%, #ffffff 100%)' }}>
        <div
          className="container"
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap:                 '4rem',
            alignItems:          'center',
          }}
        >
          {/* Text */}
          <div>
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
              The Developer
            </span>
            <h1
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem, 5vw, 3rem)',
                fontWeight:    800,
                color:         'var(--color-foreground)',
                letterSpacing: '-0.025em',
                margin:        '0 0 1.25rem',
              }}
            >
              Hi, I&apos;m the mind behind <span className="gradient-text">Code Vibe</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
              I&apos;m a self-taught full-stack developer based in{' '}
              <strong style={{ color: 'var(--color-foreground)' }}>Gampaha, Sri Lanka 🇱🇰</strong>, specializing in
              the MERN stack and Next.js. I build fast, scalable, production-quality web applications
              for startups, businesses, and entrepreneurs.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
              Code Vibe started as a passion project and grew into a freelance studio. Every project I take
              on gets my full attention — clean architecture, clear communication, and results that matter
              to your business.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
              <Link href="/quote" className="btn-primary">Work With Me →</Link>
              <Link href="/portfolio" className="btn-outline">See My Work</Link>
            </div>
          </div>

          {/* Avatar & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                width:           '100%',
                maxWidth:        '340px',
                aspectRatio:     '1 / 1',
                borderRadius:    '1.5rem',
                background:      'linear-gradient(135deg, #1e3a5f 0%, #2F6FED 100%)',
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
                fontSize:        '5rem',
                margin:          '0 auto',
                boxShadow:       '0 12px 40px rgba(47,111,237,0.2)',
              }}
            >
              👨‍💻
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '340px', margin: '0 auto', width: '100%' }}>
              {[
                { value: '3+',   label: 'Years Coding' },
                { value: '15+',  label: 'Projects Done' },
                { value: '5.0★', label: 'Fiverr Rating' },
                { value: '98%',  label: 'Client Satisfaction' },
              ].map(({ value, label }) => (
                <div key={label} className="glass-card" style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', margin: '0 0 0.25rem' }}>{value}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-muted)', margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section bg-surface-section">
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="glass-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 1rem' }}>
                  {category}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily:      'var(--font-mono)',
                        fontSize:        '0.75rem',
                        padding:         '0.25rem 0.6rem',
                        borderRadius:    '100px',
                        backgroundColor: 'var(--color-surface)',
                        border:          '1px solid var(--color-border)',
                        color:           'var(--color-foreground-2)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-foreground)', margin: '0 0 2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
            My Journey
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {TIMELINE.map(({ year, milestone }) => (
              <div key={`${year}-${milestone}`} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontFamily:      'var(--font-mono)',
                    fontSize:        '0.8rem',
                    fontWeight:      700,
                    color:           'var(--color-accent)',
                    backgroundColor: 'var(--color-accent-light)',
                    padding:         '0.3rem 0.75rem',
                    borderRadius:    '100px',
                    flexShrink:      0,
                    marginTop:       '0.15rem',
                  }}
                >
                  {year}
                </span>
                <p style={{ fontSize: '0.925rem', color: 'var(--color-foreground-2)', lineHeight: 1.7, margin: 0 }}>
                  {milestone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
