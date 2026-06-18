'use client';

import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

export default function WhatsAppWidget() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-pulse"
      style={{
        position: 'fixed',
        bottom: '1.75rem',
        right: '1.75rem',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '3.25rem',
        height: '3.25rem',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#ffffff',
        textDecoration: 'none',
        boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = 'scale(1.1)';
        el.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.55)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement;
        el.style.transform = 'scale(1)';
        el.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.4)';
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M16 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.339.619 4.62 1.795 6.617L2.667 29.333l6.937-1.764A13.29 13.29 0 0016 29.333c7.363 0 13.333-5.97 13.333-13.333S23.363 2.667 16 2.667zm7.31 18.357c-.3.849-1.77 1.624-2.44 1.71-.656.085-1.464.12-2.36-.147a21.61 21.61 0 01-2.137-.79c-3.758-1.622-6.209-5.41-6.397-5.661-.186-.253-1.518-2.02-1.518-3.852s.96-2.735 1.3-3.109c.34-.375.74-.469.987-.469h.707c.228 0 .535-.086.836.638.3.723 1.022 2.507 1.113 2.689.09.183.15.397.03.638-.12.24-.18.39-.36.6-.18.21-.378.468-.54.63-.18.18-.368.374-.158.735.21.36.934 1.54 2.003 2.494 1.378 1.228 2.54 1.608 2.9 1.788.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1 1.0 2.46 1.18.36.18.6.27.69.42.09.15.09.87-.21 1.716z"
        />
      </svg>
    </a>
  );
}
