export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#F8FAFC',
      overflow: 'hidden',
      paddingTop: '68px',
    }}>
      {/* Geometric grid lines background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(#E2E8F0 1px, transparent 1px),
          linear-gradient(90deg, #E2E8F0 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        opacity: 0.6,
      }} />

      {/* Blue accent blob top right */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '560px', height: '560px', borderRadius: '50%',
        background: 'radial-gradient(circle, #0055FF14 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, #0055FF08 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '80px 80px', position: 'relative' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px',
            border: '1px solid #E2E8F0', borderRadius: '9999px',
            background: '#FFFFFF',
            marginBottom: '32px',
            animation: 'fadeUp 0.5s ease both',
          }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#0055FF',
              display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-body)',
              letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0055FF',
            }}>
              AI-First Development Agency
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
            color: '#0F172A',
            marginBottom: '28px',
            animation: 'fadeUp 0.6s 0.08s ease both',
          }}>
            Delivering Intelligent<br />
            <span style={{
              color: '#0055FF',
            }}>Software Solutions</span><br />
            That Drive Growth
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 2vw, 19px)',
            fontWeight: 400,
            lineHeight: '1.65',
            color: '#64748B',
            maxWidth: '560px',
            marginBottom: '48px',
            animation: 'fadeUp 0.6s 0.16s ease both',
          }}>
            From RAG chatbots to multi-agent systems — we engineer LLM-powered solutions
            that scale. Lahore-based, globally deployed.
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '12px', flexWrap: 'wrap',
            animation: 'fadeUp 0.6s 0.24s ease both',
          }}>
            <a href="#projects" style={{
              padding: '14px 32px', borderRadius: '4px',
              background: '#0055FF',
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#0041C8'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.background = '#0055FF'; e.target.style.transform = 'none'; }}
            >
              View Our Work
            </a>
            <a href="mailto:nxbone.dev@gmail.com" style={{
              padding: '14px 32px', borderRadius: '4px',
              border: '1px solid #E2E8F0', background: '#FFFFFF',
              color: '#0F172A', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = '#0055FF'; e.target.style.background = '#F2F4F6'; e.target.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.background = '#FFFFFF'; e.target.style.transform = 'none'; }}
            >
              Start a Project
            </a>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: '80px',
            display: 'flex', gap: '0', flexWrap: 'wrap',
            border: '1px solid #E2E8F0', borderRadius: '8px', background: '#FFFFFF',
            overflow: 'hidden',
            animation: 'fadeUp 0.6s 0.32s ease both',
            maxWidth: '520px',
          }}>
            {[
              { num: '100+', label: 'AI Projects Shipped' },
              { num: '50+', label: 'Expert Engineers' },
              { num: '100%', label: 'Client Focused' },
            ].map((s, i) => (
              <div key={s.label} style={{
                flex: 1, padding: '24px 28px',
                borderRight: i < 2 ? '1px solid #E2E8F0' : 'none',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '28px', color: '#0055FF', letterSpacing: '-0.02em' }}>{s.num}</div>
                <div style={{ color: '#64748B', fontSize: '12px', marginTop: '4px', fontWeight: 500, letterSpacing: '0.02em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}
