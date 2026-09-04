export default function Loading() {
  return (
    <div
      style={{
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        justifyContent:  'center',
        minHeight:       '80vh',
        width:           '100%',
        gap:             '1.5rem',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Pulse Logo */}
      <div
        style={{
          width:           '52px',
          height:          '52px',
          borderRadius:    '12px',
          background:      'linear-gradient(135deg, #2F6FED 0%, #1A56CC 100%)',
          boxShadow:       '0 8px 24px rgba(47,111,237,0.15)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          fontSize:        '22px',
          animation:       'logoPulse 1.6s ease-in-out infinite',
        }}
      >
        ⚡
      </div>

      {/* Loading bar */}
      <div
        style={{
          width:           '120px',
          height:          '3px',
          backgroundColor: 'var(--color-border)',
          borderRadius:    '100px',
          overflow:        'hidden',
          position:        'relative',
        }}
      >
        <div
          style={{
            position:        'absolute',
            top:             0,
            left:            0,
            height:          '100%',
            width:           '60px',
            backgroundColor: 'var(--color-accent)',
            borderRadius:    '100px',
            animation:       'barMove 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1);   opacity: 0.95; }
          50%      { transform: scale(1.08); opacity: 1;    }
        }
        @keyframes barMove {
          0%   { transform: translateX(-60px); }
          100% { transform: translateX(120px); }
        }
      `}</style>
    </div>
  );
}
