'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLeads, updateLead, deleteLead, type Lead } from '@/lib/adminApi';

const STATUS_OPTIONS = ['new', 'contacted', 'in-progress', 'closed'] as const;
const STATUS_META: Record<string, { bg: string; color: string; label: string }> = {
  'new':         { bg: 'rgba(59,130,246,0.15)', color: '#93C5FD', label: 'New'         },
  'contacted':   { bg: 'rgba(234,179,8,0.15)',  color: '#FCD34D', label: 'Contacted'   },
  'in-progress': { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7', label: 'In Progress' },
  'closed':      { bg: 'rgba(107,114,128,0.15)',color: '#9CA3AF', label: 'Closed'      },
};

function ConfirmModal({ message, onConfirm, onCancel }: {
  message: string; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' }}>
      <div style={{ background: '#1A1F2E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.75rem', maxWidth: '400px', width: '100%' }}>
        <p style={{ color: '#E2E8F0', fontSize: '0.95rem', margin: '0 0 1.5rem' }}>{message}</p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          <button onClick={onCancel} style={{ padding: '0.6rem 1.25rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.875rem' }}>Cancel</button>
          <button onClick={onConfirm} style={{ padding: '0.6rem 1.25rem', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', color: '#FCA5A5', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem' }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

function LeadDetailPanel({ lead, onClose, onStatusChange }: {
  lead: Lead; onClose: () => void; onStatusChange: (id: string, status: string) => void;
}) {
  const [notes,    setNotes]    = useState(lead.notes ?? '');
  const [saving,   setSaving]   = useState(false);

  const saveNotes = async () => {
    setSaving(true);
    await updateLead(lead._id, { notes });
    setSaving(false);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', zIndex: 40, padding: '1rem' }}>
      <div style={{ background: '#1A1F2E', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.25rem' }}>{lead.name}</h2>
            <a href={`mailto:${lead.email}`} style={{ color: '#6EA8FF', fontSize: '0.84rem', textDecoration: 'none' }}>{lead.email}</a>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: '1.25rem', padding: 0, lineHeight: 1 }}>×</button>
        </div>

        {/* Status selector */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.4rem' }}>Status</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {STATUS_OPTIONS.map((s) => {
              const m = STATUS_META[s];
              const active = lead.status === s;
              return (
                <button key={s} onClick={() => onStatusChange(lead._id, s)} style={{ padding: '0.3rem 0.75rem', borderRadius: '100px', background: active ? m.bg : 'rgba(255,255,255,0.05)', border: `1px solid ${active ? m.color.replace('FD','80').replace('4D','80').replace('B7','80').replace('AF','80') : 'rgba(255,255,255,0.1)'}`, color: active ? m.color : 'rgba(255,255,255,0.45)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: active ? 700 : 400 }}>
                  {m.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Lead details */}
        {[
          { label: 'Phone',        value: lead.phone || 'Not provided' },
          { label: 'Project Type', value: lead.projectType },
          { label: 'Budget Range', value: `LKR ${lead.budgetRange}` },
          { label: 'Timeline',     value: lead.timeline || 'Not specified' },
          { label: 'Received',     value: new Date(lead.createdAt).toLocaleString('en-GB') },
        ].map(({ label, value }) => (
          <div key={label} style={{ marginBottom: '0.75rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{label}</div>
            <div style={{ color: '#E2E8F0', fontSize: '0.875rem' }}>{value}</div>
          </div>
        ))}

        {/* Description */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Description</div>
          <div style={{ color: '#E2E8F0', fontSize: '0.875rem', lineHeight: 1.7, background: 'rgba(255,255,255,0.04)', padding: '0.75rem', borderRadius: '8px', borderLeft: '3px solid rgba(47,111,237,0.4)' }}>
            {lead.description}
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Admin Notes</div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            placeholder="Add private notes about this lead..."
            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#E2E8F0', fontSize: '0.84rem', padding: '0.6rem 0.75rem', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box', outline: 'none' }}
          />
        </div>
        <button onClick={saveNotes} disabled={saving} style={{ width: '100%', height: '2.5rem', background: 'rgba(47,111,237,0.2)', border: '1px solid rgba(47,111,237,0.3)', borderRadius: '8px', color: '#93C5FD', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem' }}>
          {saving ? 'Saving...' : 'Save Notes'}
        </button>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <a href={`mailto:${lead.email}?subject=Your Code Vibe Project Quote`} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', height: '2.5rem', background: 'linear-gradient(135deg, #2F6FED, #1A56CC)', border: 'none', borderRadius: '8px', color: '#fff', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
            Reply via Email
          </a>
          {lead.phone && (
            <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}?text=Hi ${encodeURIComponent(lead.name)}! Thanks for reaching out about your ${encodeURIComponent(lead.projectType)} project.`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', height: '2.5rem', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.25)', borderRadius: '8px', color: '#4ADE80', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminLeadsPage() {
  const [leads,       setLeads]       = useState<Lead[]>([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState('');
  const [filterStatus, setFilter]     = useState('');
  const [page,        setPage]        = useState(1);
  const [totalPages,  setTotalPages]  = useState(1);
  const [selected,    setSelected]    = useState<Lead | null>(null);
  const [deleteId,    setDeleteId]    = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getLeads({ status: filterStatus || undefined, page });
      setLeads(res.data);
      setTotalPages(res.pages);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  }, [filterStatus, page]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const handleStatusChange = async (id: string, status: string) => {
    await updateLead(id, { status });
    setLeads((prev) => prev.map((l) => l._id === id ? { ...l, status: status as Lead['status'] } : l));
    if (selected?._id === id) setSelected((s) => s ? { ...s, status: status as Lead['status'] } : s);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    await deleteLead(deleteId);
    setLeads((prev) => prev.filter((l) => l._id !== deleteId));
    setDeleteId(null);
    if (selected?._id === deleteId) setSelected(null);
  };

  const allStatuses = [
    { value: '',            label: 'All Leads' },
    { value: 'new',         label: 'New'        },
    { value: 'contacted',   label: 'Contacted'  },
    { value: 'in-progress', label: 'In Progress'},
    { value: 'closed',      label: 'Closed'     },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      {deleteId && (
        <ConfirmModal
          message="Delete this lead? This action cannot be undone."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
      {selected && (
        <LeadDetailPanel
          lead={selected}
          onClose={() => setSelected(null)}
          onStatusChange={handleStatusChange}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, margin: '0 0 0.2rem', letterSpacing: '-0.02em' }}>Leads</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.84rem', margin: 0 }}>Manage all client enquiries</p>
        </div>
        {/* Status filter tabs */}
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {allStatuses.map(({ value, label }) => (
            <button key={value} onClick={() => { setFilter(value); setPage(1); }} style={{ padding: '0.35rem 0.875rem', borderRadius: '100px', background: filterStatus === value ? 'rgba(47,111,237,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${filterStatus === value ? 'rgba(47,111,237,0.4)' : 'rgba(255,255,255,0.1)'}`, color: filterStatus === value ? '#6EA8FF' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: filterStatus === value ? 600 : 400 }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px', padding: '0.75rem 1rem', color: '#FCA5A5', marginBottom: '1.5rem', fontSize: '0.875rem' }}>{error}</div>}

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {['Name', 'Email', 'Project Type', 'Budget', 'Status', 'Date', 'Actions'].map((h) => (
                  <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'rgba(255,255,255,0.35)', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading leads...</td></tr>
              )}
              {!loading && leads.length === 0 && (
                <tr><td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No leads found.</td></tr>
              )}
              {leads.map((lead) => {
                const sm = STATUS_META[lead.status] ?? STATUS_META['new'];
                return (
                  <tr key={lead._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', cursor: 'pointer' }} onClick={() => setSelected(lead)}>
                    <td style={{ padding: '0.75rem 1rem', color: '#E2E8F0', fontWeight: 600 }}>{lead.name}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <a href={`mailto:${lead.email}`} onClick={(e) => e.stopPropagation()} style={{ color: '#6EA8FF', textDecoration: 'none', fontSize: '0.82rem' }}>{lead.email}</a>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.7)' }}>{lead.projectType}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.55)', whiteSpace: 'nowrap' }}>LKR {lead.budgetRange}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <select
                        value={lead.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => { e.stopPropagation(); handleStatusChange(lead._id, e.target.value); }}
                        style={{ background: sm.bg, border: 'none', borderRadius: '100px', color: sm.color, padding: '0.2rem 0.6rem', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', appearance: 'none' }}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{STATUS_META[s].label}</option>)}
                      </select>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                      {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <button onClick={(e) => { e.stopPropagation(); setDeleteId(lead._id); }} style={{ background: 'none', border: 'none', color: 'rgba(239,68,68,0.5)', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600, padding: '0.2rem', lineHeight: 1 }} title="Delete lead">Del</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button key={p} onClick={() => setPage(p)} style={{ width: '32px', height: '32px', borderRadius: '6px', background: page === p ? 'rgba(47,111,237,0.2)' : 'rgba(255,255,255,0.05)', border: `1px solid ${page === p ? 'rgba(47,111,237,0.4)' : 'rgba(255,255,255,0.1)'}`, color: page === p ? '#6EA8FF' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.8rem' }}>
                {p}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
