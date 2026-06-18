import { STATIC_TESTIMONIALS } from '@/lib/constants';

interface Testimonial {
  _id:        string;
  clientName: string;
  clientRole?: string;
  platform:   'Fiverr' | 'Upwork' | 'Direct' | 'Other';
  message:    string;
  rating:     number;
  avatar?:    string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  maxDisplay?:   number;
}

const platformColors: Record<string, { bg: string; color: string; label: string }> = {
  Fiverr: { bg: 'rgba(29,191,115,0.1)', color: '#1dbf73',   label: 'Fiverr' },
  Upwork: { bg: 'rgba(20,133,90,0.1)',  color: '#14855a',   label: 'Upwork' },
  Direct: { bg: 'var(--color-accent-light)', color: 'var(--color-accent)', label: 'Direct' },
  Other:  { bg: 'var(--color-surface)', color: 'var(--color-muted)', label: 'Other' },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#F59E0B' : 'var(--color-border)'}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        width={44}
        height={44}
        style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-border)' }}
      />
    );
  }

  // Generate a deterministic hue from name
  const hue = name.charCodeAt(0) * 137 % 360;

  return (
    <div
      style={{
        width:           '44px',
        height:          '44px',
        borderRadius:    '50%',
        background:      `hsl(${hue}, 60%, 55%)`,
        color:           '#ffffff',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        fontFamily:      'var(--font-display)',
        fontWeight:      700,
        fontSize:        '0.9rem',
        flexShrink:      0,
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials({ testimonials, maxDisplay = 6 }: TestimonialsProps) {
  const items = (testimonials ?? STATIC_TESTIMONIALS).slice(0, maxDisplay) as Testimonial[];

  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap:                 '1.5rem',
      }}
    >
      {items.map((t) => {
        const plat = platformColors[t.platform] ?? platformColors.Other;
        return (
          <div
            key={t._id}
            className="card-hover glass-card"
            style={{
              padding:       '1.75rem',
              display:       'flex',
              flexDirection: 'column',
              gap:           '1rem',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <StarRating rating={t.rating} />
              <span
                style={{
                  fontSize:        '0.7rem',
                  fontFamily:      'var(--font-mono)',
                  fontWeight:      600,
                  padding:         '0.2rem 0.6rem',
                  borderRadius:    '100px',
                  backgroundColor: plat.bg,
                  color:           plat.color,
                  letterSpacing:   '0.05em',
                }}
              >
                {plat.label}
              </span>
            </div>

            {/* Quote */}
            <blockquote
              style={{
                margin:     0,
                padding:    0,
                fontSize:   '0.925rem',
                color:      'var(--color-foreground-2)',
                lineHeight: 1.75,
                flexGrow:   1,
              }}
            >
              &ldquo;{t.message}&rdquo;
            </blockquote>

            {/* Client */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              <Avatar name={t.clientName} avatarUrl={t.avatar} />
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-foreground)', fontFamily: 'var(--font-display)' }}>
                  {t.clientName}
                </p>
                {t.clientRole && (
                  <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--color-muted)' }}>
                    {t.clientRole}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
