'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAdmin } from '@/lib/adminApi';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const [showPw,   setShowPw]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await loginAdmin(email.trim(), password);
      router.replace('/admin');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight:       '100vh',
      background:      'linear-gradient(135deg, #0B0F1A 0%, #0F1629 60%, #0B1236 100%)',
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      padding:         '1rem',
      fontFamily:      '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      {/* Background grid */}
      <div style={{
        position:         'fixed',
        inset:            0,
        backgroundImage:  'linear-gradient(rgba(47,111,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(47,111,237,0.03) 1px, transparent 1px)',
        backgroundSize:   '48px 48px',
        pointerEvents:    'none',
      }} />

      <div style={{ width: '100%', maxWidth: '400px', position: 'relative' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width:          '56px',
            height:         '56px',
            borderRadius:   '16px',
            background:     'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontSize:       '1.75rem',
            margin:         '0 auto 1rem',
            boxShadow:      '0 8px 32px rgba(47,111,237,0.35)',
          }}>⚡</div>
          <h1 style={{ color: '#fff', fontWeight: 800, fontSize: '1.5rem', margin: '0 0 0.25rem', letterSpacing: '-0.025em' }}>
            Code Vibe Admin
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', margin: 0 }}>
            Sign in to your dashboard
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          style={{
            background:   'rgba(255,255,255,0.04)',
            border:       '1px solid rgba(47,111,237,0.2)',
            borderRadius: '16px',
            padding:      '2rem',
            backdropFilter: 'blur(12px)',
          }}
        >
          {/* Email */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Email Address
            </label>
            <input
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@codevibe.lk"
              style={{
                width:           '100%',
                height:          '2.875rem',
                padding:         '0 0.875rem',
                background:      'rgba(255,255,255,0.06)',
                border:          '1.5px solid rgba(255,255,255,0.1)',
                borderRadius:    '8px',
                color:           '#fff',
                fontSize:        '0.9rem',
                fontFamily:      'inherit',
                outline:         'none',
                boxSizing:       'border-box',
                transition:      'border-color 0.2s',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(47,111,237,0.6)'; }}
              onBlur={(e)  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPw ? 'text' : 'password'}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width:           '100%',
                  height:          '2.875rem',
                  padding:         '0 3rem 0 0.875rem',
                  background:      'rgba(255,255,255,0.06)',
                  border:          '1.5px solid rgba(255,255,255,0.1)',
                  borderRadius:    '8px',
                  color:           '#fff',
                  fontSize:        '0.9rem',
                  fontFamily:      'inherit',
                  outline:         'none',
                  boxSizing:       'border-box',
                  transition:      'border-color 0.2s',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(47,111,237,0.6)'; }}
                onBlur={(e)  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                style={{
                  position:   'absolute',
                  right:      '0.75rem',
                  top:        '50%',
                  transform:  'translateY(-50%)',
                  background: 'none',
                  border:     'none',
                  color:      'rgba(255,255,255,0.4)',
                  cursor:     'pointer',
                  fontSize:   '1rem',
                  padding:    '0',
                  lineHeight: 1,
                }}
              >
                {showPw ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              padding:      '0.65rem 0.875rem',
              background:   'rgba(239,68,68,0.12)',
              border:       '1px solid rgba(239,68,68,0.25)',
              borderRadius: '8px',
              color:        '#FCA5A5',
              fontSize:     '0.84rem',
              marginBottom: '1rem',
              display:      'flex',
              alignItems:   'center',
              gap:          '0.5rem',
            }}>
              ⚠️ {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width:           '100%',
              height:          '3rem',
              background:      loading ? '#1A2A4A' : 'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
              border:          'none',
              borderRadius:    '8px',
              color:           '#fff',
              fontFamily:      'inherit',
              fontWeight:      700,
              fontSize:        '0.95rem',
              cursor:          loading ? 'not-allowed' : 'pointer',
              transition:      'all 0.2s ease',
              opacity:         loading ? 0.7 : 1,
              boxShadow:       loading ? 'none' : '0 4px 16px rgba(47,111,237,0.4)',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In →'}
          </button>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', marginTop: '1.25rem', marginBottom: 0 }}>
            🔐 Secure admin access · Code Vibe
          </p>
        </form>
      </div>
    </div>
  );
}
