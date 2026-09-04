'use client';

import { useState, useEffect } from 'react';
import { getSubscribers, deleteSubscriber, type Subscriber } from '@/lib/adminApi';

export default function AdminSubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState('');
  const [search,      setSearch]      = useState('');

  useEffect(() => {
    getSubscribers()
      .then((res) => setSubscribers(res.data))
      .catch((e: unknown) => setError(e instanceof Error ? e.message : 'Error'))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string, email: string) => {
    if (!confirm(`Remove ${email} from subscribers?`)) return;
    await deleteSubscriber(id);
    setSubscribers((p) => p.filter((s) => s._id !== id));
  };

  const exportCSV = () => {
    const rows = ['Email,Joined Date'];
    subscribers.forEach((s) => {
      rows.push(`${s.email},${new Date(s.createdAt).toLocaleDateString('en-GB')}`);
    });
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = `codevibe-subscribers-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = subscribers.filter((s) =>
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Subscribers</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>
            {subscribers.length} total subscriber{subscribers.length !== 1 ? 's' : ''}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <input
            type="search"
            placeholder="Search by email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.55rem 0.875rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', fontFamily: 'inherit', fontSize: '0.84rem', outline: 'none', width: '220px' }}
          />
          <button onClick={exportCSV} disabled={subscribers.length === 0} style={{ padding: '0.55rem 1rem', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '8px', color: '#6EE7B7', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.84rem' }}>
            ⬇ Export CSV
          </button>
        </div>
      </div>

      {error && <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#FCA5A5', marginBottom: '1.5rem', fontSize: '0.875rem' }}>⚠️ {error}</div>}

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {['#', 'Email', 'Joined Date', 'Actions'].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,0.35)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading...</td></tr>}
            {!loading && filtered.length === 0 && <tr><td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>{search ? 'No results found.' : 'No subscribers yet.'}</td></tr>}
            {filtered.map((sub, i) => (
              <tr key={sub._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', fontSize: '0.78rem' }}>{i + 1}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <a href={`mailto:${sub.email}`} style={{ color: '#6EA8FF', textDecoration: 'none' }}>{sub.email}</a>
                </td>
                <td style={{ padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem' }}>
                  {new Date(sub.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <button onClick={() => handleDelete(sub._id, sub.email)} style={{ background: 'none', border: 'none', color: 'rgba(239,68,68,0.45)', cursor: 'pointer', fontSize: '1rem', padding: '0.2rem', lineHeight: 1 }} title="Remove subscriber">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
