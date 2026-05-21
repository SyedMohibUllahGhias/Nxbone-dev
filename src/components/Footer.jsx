import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E2E8F0',
      padding: '56px 0 36px',
      background: '#FFFFFF',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        {/* Top */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: '40px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <img src={logo} alt="Nxbone Logo" style={{ height: '34px', width: 'auto', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '16px', color: '#0F172A' }}>
                Nxbone<span style={{ color: '#0055FF' }}> Developers</span>
              </span>
            </div>
            <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.7' }}>
              AI-first development agency. We build LLM-powered applications, multi-agent systems, and full-stack web solutions.
            </p>
            <a href="mailto:nxbone.dev@gmail.com" style={{
              display: 'block', marginTop: '14px',
              color: '#0055FF', fontSize: '13px', textDecoration: 'none', fontWeight: 600,
            }}>nxbone.dev@gmail.com</a>
          </div>

          {/* Nav groups */}
          <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px',
                color: '#0F172A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px',
              }}>Services</div>
              {['AI & LLM Dev', 'Multi-Agent Systems', 'Full-Stack Web', 'Data Engineering', 'MCP Integration', 'Voice AI'].map(s => (
                <a key={s} href="#services" style={{
                  display: 'block', color: '#64748B', fontSize: '13px',
                  textDecoration: 'none', marginBottom: '9px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#0055FF'}
                onMouseLeave={e => e.target.style.color = '#64748B'}>{s}</a>
              ))}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '11px',
                color: '#0F172A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px',
              }}>Company</div>
              {[['Projects', '#projects'], ['Team', '#team'], ['Contact', '#contact']].map(([label, href]) => (
                <a key={label} href={href} style={{
                  display: 'block', color: '#64748B', fontSize: '13px',
                  textDecoration: 'none', marginBottom: '9px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#0055FF'}
                onMouseLeave={e => e.target.style.color = '#64748B'}>{label}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid #E2E8F0', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <span style={{ color: '#64748B', fontSize: '12px' }}>
            © {new Date().getFullYear()} Nxbone Developers. All rights reserved.
          </span>
          <span style={{ color: '#64748B', fontSize: '12px' }}>
            Built with <span style={{ color: '#0055FF' }}>❤</span> & AI
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div { padding: 0 20px !important; }
        }
      `}</style>
    </footer>
  );
}
