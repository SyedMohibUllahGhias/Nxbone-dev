export default function ProjectCard({ project: p }) {
  return (
    <div style={{
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      borderRadius: '8px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
      cursor: 'default',
      position: 'relative',
      overflow: 'hidden',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = '#0055FF44';
      e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0,0,0,0.04)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = '#E2E8F0';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'none';
    }}
    >
      {/* Category + Icon row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          padding: '3px 10px',
          borderRadius: '4px',
          background: '#F1F5F9',
          color: '#64748B',
          fontSize: '11px',
          fontWeight: 700,
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>{p.category}</span>
        <span style={{ fontSize: '24px' }}>{p.icon}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '17px',
        color: '#0F172A',
        lineHeight: '1.3',
      }}>{p.title}</h3>

      {/* Description */}
      <p style={{
        color: '#64748B',
        fontSize: '13px',
        lineHeight: '1.7',
        flex: 1,
      }}>{p.description}</p>

      {/* Highlight */}
      {p.highlight && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '6px 12px',
          background: '#EEF2FF',
          borderRadius: '4px',
          border: '1px solid #C7D2FE',
        }}>
          <span style={{ width: '6px', height: '6px', background: '#0055FF', borderRadius: '50%', flexShrink: 0 }} />
          <span style={{ fontSize: '12px', fontWeight: 600, color: '#0055FF', fontFamily: 'var(--font-body)' }}>{p.highlight}</span>
        </div>
      )}

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {p.tech.map(t => (
          <span key={t} style={{
            padding: '3px 8px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '4px',
            fontSize: '11px',
            color: '#64748B',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
          }}>{t}</span>
        ))}
      </div>

      {/* Author + GitHub */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid #F2F4F6' }}>
        <span style={{ fontSize: '12px', color: '#64748B', fontFamily: 'var(--font-body)' }}>
          by <span style={{ color: '#0F172A', fontWeight: 600 }}>{p.author}</span>
        </span>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '12px', fontWeight: 700, color: '#0055FF',
            textDecoration: 'none', fontFamily: 'var(--font-body)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => e.target.style.textDecoration = 'underline'}
          onMouseLeave={e => e.target.style.textDecoration = 'none'}
          >GitHub →</a>
        )}
      </div>
    </div>
  );
}
