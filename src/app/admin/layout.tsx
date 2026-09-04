'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { isAdminLoggedIn } from '@/lib/adminApi';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // Don't gate the login page itself
    if (pathname === '/admin/login') {
      setChecked(true);
      return;
    }
    if (!isAdminLoggedIn()) {
      router.replace('/admin/login');
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  // Show nothing while checking auth (prevents flash)
  if (!checked) return null;

  // Login page has its own standalone layout
  if (pathname === '/admin/login') return <>{children}</>;

  return (
    <div style={{
      display:       'flex',
      minHeight:     '100vh',
      background:    '#0A0D14',
      fontFamily:    'var(--font-body, system-ui, sans-serif)',
    }}>
      <AdminSidebar />
      <main style={{
        flex:       1,
        overflowX:  'hidden',
        overflowY:  'auto',
        background: '#0D1117',
        color:      '#E2E8F0',
      }}>
        {children}
      </main>
    </div>
  );
}
