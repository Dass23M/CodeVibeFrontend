import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?:   string;
  title:      string | ReactNode;
  subtitle?:  string;
  align?:     'left' | 'center';
  titleClass?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleClass = '',
}: SectionHeadingProps) {
  const alignStyle: React.CSSProperties = {
    textAlign:  align,
    alignItems: align === 'center' ? 'center' : 'flex-start',
  };

  return (
    <div
      style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           '0.75rem',
        marginBottom:  '3.5rem',
        ...alignStyle,
      }}
    >
      {eyebrow && (
        <span
          style={{
            display:     'inline-flex',
            alignItems:  'center',
            gap:         '0.4rem',
            fontFamily:  'var(--font-mono)',
            fontSize:    '0.72rem',
            fontWeight:  600,
            letterSpacing:'0.1em',
            textTransform:'uppercase',
            color:       'var(--color-accent)',
            background:  'var(--color-accent-light)',
            padding:     '0.3rem 0.75rem',
            borderRadius:'100px',
            width:       'fit-content',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'inline-block' }} />
          {eyebrow}
        </span>
      )}
      <h2
        className={titleClass}
        style={{
          fontFamily:   'var(--font-display)',
          fontSize:     'clamp(1.875rem, 4vw, 2.75rem)',
          fontWeight:   700,
          color:        'var(--color-foreground)',
          lineHeight:   1.15,
          letterSpacing:'-0.025em',
          margin:       0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize:  'clamp(1rem, 2vw, 1.125rem)',
            color:     'var(--color-muted)',
            lineHeight: 1.75,
            maxWidth:  '580px',
            margin:    0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}