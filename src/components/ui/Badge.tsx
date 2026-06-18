import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'muted' | 'outline';

interface BadgeProps {
  children:  ReactNode;
  variant?:  BadgeVariant;
  size?:     'sm' | 'md';
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'var(--color-accent-light)',
    color:           'var(--color-accent)',
    border:          '1px solid rgba(47,111,237,0.2)',
  },
  accent: {
    backgroundColor: 'var(--color-accent)',
    color:           '#ffffff',
    border:          '1px solid var(--color-accent)',
  },
  success: {
    backgroundColor: 'rgba(34,197,94,0.1)',
    color:           '#16a34a',
    border:          '1px solid rgba(34,197,94,0.2)',
  },
  warning: {
    backgroundColor: 'rgba(245,158,11,0.1)',
    color:           '#d97706',
    border:          '1px solid rgba(245,158,11,0.2)',
  },
  muted: {
    backgroundColor: 'var(--color-surface)',
    color:           'var(--color-muted)',
    border:          '1px solid var(--color-border)',
  },
  outline: {
    backgroundColor: 'transparent',
    color:           'var(--color-foreground-2)',
    border:          '1px solid var(--color-border)',
  },
};

export default function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
  return (
    <span
      className={className}
      style={{
        display:       'inline-flex',
        alignItems:    'center',
        borderRadius:  '100px',
        fontFamily:    'var(--font-mono)',
        fontWeight:    500,
        whiteSpace:    'nowrap',
        padding:       size === 'sm' ? '0.2rem 0.6rem' : '0.3rem 0.875rem',
        fontSize:      size === 'sm' ? '0.72rem' : '0.8rem',
        letterSpacing: '0.03em',
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
}