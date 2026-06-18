'use client';

import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  children:  ReactNode;
  className?: string;
  loading?:  boolean;
  icon?:     ReactNode;
}

interface ButtonAsLink extends BaseButtonProps {
  href:      string;
  external?: boolean;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?:     undefined;
  external?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantMap: Record<ButtonVariant, { bg: string; color: string; border: string; hoverBg: string; hoverColor: string }> = {
  primary: {
    bg: 'var(--color-accent)',
    color: '#ffffff',
    border: 'var(--color-accent)',
    hoverBg: 'var(--color-accent-hover)',
    hoverColor: '#ffffff',
  },
  secondary: {
    bg: 'var(--color-surface)',
    color: 'var(--color-foreground)',
    border: 'var(--color-border)',
    hoverBg: 'var(--color-surface-2)',
    hoverColor: 'var(--color-foreground)',
  },
  outline: {
    bg: 'transparent',
    color: 'var(--color-accent)',
    border: 'var(--color-accent)',
    hoverBg: 'var(--color-accent-light)',
    hoverColor: 'var(--color-accent)',
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--color-foreground-2)',
    border: 'transparent',
    hoverBg: 'var(--color-surface)',
    hoverColor: 'var(--color-accent)',
  },
};

const sizeMap: Record<ButtonSize, { padding: string; fontSize: string; height: string }> = {
  sm: { padding: '0 1rem',    fontSize: '0.8125rem', height: '2.125rem' },
  md: { padding: '0 1.375rem', fontSize: '0.9rem',   height: '2.625rem' },
  lg: { padding: '0 1.875rem', fontSize: '1rem',     height: '3.125rem' },
};

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={{ animation: 'spin 0.75s linear infinite' }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function buildStyle(variant: ButtonVariant, size: ButtonSize, disabled: boolean) {
  const v = variantMap[variant];
  const s = sizeMap[size];
  return {
    display:        'inline-flex',
    alignItems:     'center',
    justifyContent: 'center',
    gap:            '0.5rem',
    height:         s.height,
    padding:        s.padding,
    fontSize:       s.fontSize,
    fontFamily:     'var(--font-body)',
    fontWeight:     600,
    borderRadius:   '0.625rem',
    border:         `1.5px solid ${v.border}`,
    backgroundColor: v.bg,
    color:          v.color,
    cursor:         disabled ? 'not-allowed' : 'pointer',
    opacity:        disabled ? 0.55 : 1,
    textDecoration: 'none',
    transition:     'all 0.2s ease',
    whiteSpace:     'nowrap' as const,
    letterSpacing:  '0.01em',
  };
}

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '', loading = false, icon } = props;
  const v = variantMap[variant];

  const content = (
    <>
      {loading ? <Spinner /> : icon}
      {children}
    </>
  );

  const onEnter = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.backgroundColor = v.hoverBg;
    el.style.color = v.hoverColor;
    if (!loading) {
      el.style.transform = 'translateY(-1px)';
      el.style.boxShadow = variant === 'primary'
        ? '0 4px 14px rgba(47,111,237,0.35)'
        : '0 2px 8px rgba(0,0,0,0.08)';
    }
  };

  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.backgroundColor = v.bg;
    el.style.color = v.color;
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'none';
  };

  const style = buildStyle(variant, size, loading || (props as ButtonAsButton).disabled === true);

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          style={style}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={className} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, children: _c, className: _cl, loading: _l, icon: _i, href: _h, external: _e, ...buttonProps } =
    props as ButtonAsButton;

  return (
    <button
      className={className}
      style={style}
      disabled={loading || _l || buttonProps.disabled}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      {...buttonProps}
    >
      {content}
    </button>
  );
}