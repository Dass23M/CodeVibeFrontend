'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getStats, getLeads, type DashboardStats, type Lead } from '@/lib/adminApi';

const STATUS_COLORS: Record<string, { bg: string; color: string; label: string }> = {
  'new':         { bg: 'rgba(59,130,246,0.15)', color: '#93C5FD', label: 'New'         },
  'contacted':   { bg: 'rgba(234,179,8,0.15)',  color: '#FCD34D', label: 'Contacted'   },
  'in-progress': { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7', label: 'In Progress' },
  'closed':      { bg: 'rgba(107,114,128,0.15)',color: '#9CA3AF', label: 'Closed'      },
};

function StatCard({ icon, label, value, sub, color }: {
  icon: string; label: string; value: number | string; sub?: string; color: string;
}) {
  return (
    <div style={{
      background:   'rgba(255,255,255,0.03)',
      border:       '1px solid rgba(255,255,255,0.07)',
      borderRadius: '12px',
      padding:      '1.25rem 1.5rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
        <div style={{
          width:        '36px',
          height:       '36px',
          borderRadius: '8px',
          background:   color,
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'center',
          fontSize:     '1.1rem',
        }}>{icon}</div>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500 }}>{label}</span>
      </div>
      <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.4rem' }}>{sub}</div>}
    </div>
  );
}

export default function AdminDashboardPage() {
  const [stats,        setStats]        = useState<DashboardStats | null>(null);
  const [recentLeads,  setRecentLeads]  = useState<Lead[]>([]);
  const [loadingStats, setLoadingStats] = useState(true);
  const [error,        setError]        = useState('');

  useEffect(() => {
    Promise.all([
      getStats(),
      getLeads({ page: 1 }),
    ])
      .then(([statsRes, leadsRes]) => {
        setStats(statsRes.data);
        setRecentLeads(leadsRes.data.slice(0, 6));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingStats(false));
  }, []);

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.25rem', letterSpacing: '-0.02em' }}>
          Dashboard
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>
          Welcome back! Here's what's happening with Code Vibe.
        </p>
      </div>

      {error && (
        <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#FCA5A5', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      {/* Stats Grid */}
      {loadingStats ? (
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>Loading stats...</div>
      ) : stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <StatCard icon="LD" label="Total Leads"      value={stats.totalLeads}       color="rgba(47,111,237,0.2)"  />
          <StatCard icon="NW" label="New This Week"    value={stats.newLeadsThisWeek} color="rgba(59,130,246,0.2)"  sub={`${stats.openLeads} still open`} />
          <StatCard icon="SB" label="Subscribers"      value={stats.totalSubscribers} color="rgba(16,185,129,0.2)"  />
          <StatCard icon="PJ" label="Projects"         value={stats.totalProjects}    color="rgba(139,92,246,0.2)"  />
          <StatCard icon="TM" label="Testimonials"     value={stats.totalTestimonials} color="rgba(234,179,8,0.2)"  />
        </div>
      )}

      {/* Recent Leads */}
      <div style={{
        background:   'rgba(255,255,255,0.03)',
        border:       '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow:     'hidden',
      }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Recent Leads</h2>
          <Link href="/admin/leads" style={{ color: '#6EA8FF', fontSize: '0.8rem', textDecoration: 'none' }}>View all →</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Name', 'Email', 'Project', 'Budget', 'Status', 'Date'].map((h) => (
                  <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,0.35)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentLeads.length === 0 && (
                <tr><td colSpan={6} style={{ padding: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.875rem' }}>No leads yet</td></tr>
              )}
              {recentLeads.map((lead) => {
                const sc = STATUS_COLORS[lead.status] ?? STATUS_COLORS['new'];
                return (
                  <tr key={lead._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '0.7rem 1rem', color: '#E2E8F0', fontWeight: 600 }}>{lead.name}</td>
                    <td style={{ padding: '0.7rem 1rem', color: 'rgba(255,255,255,0.55)' }}>
                      <a href={`mailto:${lead.email}`} style={{ color: '#6EA8FF', textDecoration: 'none' }}>{lead.email}</a>
                    </td>
                    <td style={{ padding: '0.7rem 1rem', color: 'rgba(255,255,255,0.7)' }}>{lead.projectType}</td>
                    <td style={{ padding: '0.7rem 1rem', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>LKR {lead.budgetRange}</td>
                    <td style={{ padding: '0.7rem 1rem' }}>
                      <span style={{ background: sc.bg, color: sc.color, borderRadius: '100px', padding: '0.2rem 0.6rem', fontSize: '0.72rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                        {sc.label}
                      </span>
                    </td>
                    <td style={{ padding: '0.7rem 1rem', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>
                      {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
