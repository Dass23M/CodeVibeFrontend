'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { logoutAdmin } from '@/lib/adminApi';

const NAV_ITEMS = [
  { href: '/admin',              icon: '📊', label: 'Dashboard'    },
  { href: '/admin/leads',        icon: '📬', label: 'Leads'        },
  { href: '/admin/projects',     icon: '🗂️', label: 'Projects'     },
  { href: '/admin/testimonials', icon: '⭐', label: 'Testimonials' },
  { href: '/admin/blog',         icon: '✍️', label: 'Blog Posts'   },
  { href: '/admin/subscribers',  icon: '📧', label: 'Subscribers'  },
];

export default function AdminSidebar() {
  const router   = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    logoutAdmin();
    router.push('/admin/login');
  };

  return (
    <aside style={{
      width:           collapsed ? '64px' : '220px',
      minHeight:       '100vh',
      background:      'linear-gradient(180deg, #0B0F1A 0%, #0F1629 100%)',
      borderRight:     '1px solid rgba(47,111,237,0.15)',
      display:         'flex',
      flexDirection:   'column',
      transition:      'width 0.25s ease',
      flexShrink:      0,
      position:        'relative',
      zIndex:          10,
    }}>
      {/* Logo */}
      <div style={{
        padding:        '1.25rem 1rem',
        borderBottom:   '1px solid rgba(255,255,255,0.06)',
        display:        'flex',
        alignItems:     'center',
        gap:            '0.6rem',
        overflow:       'hidden',
        whiteSpace:     'nowrap',
      }}>
        <div style={{
          width:        '32px',
          height:       '32px',
          borderRadius: '8px',
          background:   'linear-gradient(135deg, #2F6FED, #1A56CC)',
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'center',
          flexShrink:   0,
          fontSize:     '16px',
        }}>⚡</div>
        {!collapsed && (
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '-0.01em' }}>Code Vibe</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Admin Panel</div>
          </div>
        )}
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            marginLeft:      'auto',
            background:      'none',
            border:          'none',
            color:           'rgba(255,255,255,0.35)',
            cursor:          'pointer',
            padding:         '4px',
            borderRadius:    '4px',
            fontSize:        '14px',
            flexShrink:      0,
          }}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.href === '/admin'
            ? pathname === '/admin'
            : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : undefined}
              style={{
                display:        'flex',
                alignItems:     'center',
                gap:            '0.65rem',
                padding:        '0.6rem 0.75rem',
                borderRadius:   '8px',
                background:     isActive ? 'rgba(47,111,237,0.18)' : 'transparent',
                border:         isActive ? '1px solid rgba(47,111,237,0.3)' : '1px solid transparent',
                color:          isActive ? '#6EA8FF' : 'rgba(255,255,255,0.55)',
                textDecoration: 'none',
                fontSize:       '0.84rem',
                fontWeight:     isActive ? 600 : 400,
                transition:     'all 0.15s ease',
                overflow:       'hidden',
                whiteSpace:     'nowrap',
              }}
            >
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '0.75rem 0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button
          onClick={handleLogout}
          title={collapsed ? 'Logout' : undefined}
          style={{
            display:        'flex',
            alignItems:     'center',
            gap:            '0.65rem',
            width:          '100%',
            padding:        '0.6rem 0.75rem',
            borderRadius:   '8px',
            background:     'none',
            border:         '1px solid transparent',
            color:          'rgba(255,255,255,0.4)',
            cursor:         'pointer',
            fontSize:       '0.84rem',
            fontFamily:     'inherit',
            transition:     'all 0.15s ease',
            overflow:       'hidden',
            whiteSpace:     'nowrap',
            textAlign:      'left',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)';
            (e.currentTarget as HTMLButtonElement).style.color = '#FCA5A5';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.2)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'none';
            (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'transparent';
          }}
        >
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>🚪</span>
          {!collapsed && 'Logout'}
        </button>
      </div>
    </aside>
  );
}
