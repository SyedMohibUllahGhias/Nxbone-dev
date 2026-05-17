const techs = [
  { name: 'LangChain', icon: '🔗' },
  { name: 'LangGraph', icon: '🕸️' },
  { name: 'OpenAI SDK', icon: '⚡' },
  { name: 'Ollama', icon: '🦙' },
  { name: 'Claude API', icon: '🤖' },
  { name: 'FastAPI', icon: '🚀' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'PostgreSQL', icon: '🗄️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Python', icon: '🐍' },
  { name: 'LiveKit', icon: '🎙️' },
  { name: 'TensorFlow', icon: '🧠' },
];

export default function TechStack() {
  return (
    <section style={{
      padding: '48px 0',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{
          color: '#64748B', fontSize: '11px', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-body)',
        }}>
          Technologies We Master
        </span>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Fade left */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(90deg, #FFFFFF, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />
        {/* Fade right */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(270deg, #FFFFFF, transparent)',
          zIndex: 2, pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex', gap: '12px',
          animation: 'marquee 35s linear infinite',
          width: 'max-content',
        }}>
          {[...techs, ...techs].map((t, i) => (
            <div key={i} style={{
              padding: '10px 20px', borderRadius: '4px',
              border: '1px solid #E2E8F0', background: '#F8FAFC',
              display: 'flex', alignItems: 'center', gap: '8px',
              flexShrink: 0,
              transition: 'border-color 0.2s, background 0.2s',
            }}>
              <span style={{ fontSize: '16px' }}>{t.icon}</span>
              <span style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: '#64748B', whiteSpace: 'nowrap',
              }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
