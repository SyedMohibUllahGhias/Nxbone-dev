import { services } from '../data/projects';

const SERVICE_ICONS = {
  'AI & LLM Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M4 15h16"/><path d="M8 19h8"/><circle cx="12" cy="22" r="1"/>
    </svg>
  ),
  'Multi-Agent Systems': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
      <line x1="12" y1="7" x2="5" y2="17"/><line x1="12" y1="7" x2="19" y2="17"/>
    </svg>
  ),
  'Full-Stack Web Development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
      <polyline points="8 9 10 11 8 13"/><line x1="12" y1="13" x2="16" y2="13"/>
    </svg>
  ),
  'Data Engineering': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  'MCP & API Integration': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
  ),
  'Voice AI Applications': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0055FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" style={{
      padding: '120px 0',
      background: '#F8FAFC',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-tag">What We Do</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: '1.15',
              color: '#0F172A',
              maxWidth: '520px',
            }}>
              Comprehensive Solutions<br />
              for <span style={{ color: '#0055FF' }}>Enterprise & Growth</span>
            </h2>
            <p style={{
              color: '#64748B',
              fontSize: '16px',
              lineHeight: '1.7',
              maxWidth: '360px',
              fontFamily: 'var(--font-body)',
            }}>
              End-to-end AI and web development — from architecture to deployment.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: '#E2E8F0',
          border: '1px solid #E2E8F0',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {services.map((s, i) => (
            <div key={i} style={{
              padding: '36px 32px',
              background: '#FFFFFF',
              transition: 'background 0.2s',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F8FAFC';
              e.currentTarget.querySelector('.shimmer-border').style.opacity = '1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FFFFFF';
              e.currentTarget.querySelector('.shimmer-border').style.opacity = '0';
            }}
            >
              {/* Shimmer top border on hover */}
              <div className="shimmer-border" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, #0055FF, transparent)',
                opacity: 0,
                transition: 'opacity 0.3s',
              }} />

              {/* Icon */}
              <div style={{
                width: '44px', height: '44px',
                background: '#EEF2FF',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                {SERVICE_ICONS[s.title] || <span style={{ fontSize: '20px' }}>{s.icon}</span>}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '18px',
                color: '#0F172A',
                marginBottom: '10px',
                lineHeight: '1.35',
              }}>{s.title}</h3>

              <p style={{
                color: '#64748B',
                fontSize: '14px',
                lineHeight: '1.7',
                marginBottom: '20px',
              }}>{s.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '3px 10px',
                    borderRadius: '4px',
                    background: '#F1F5F9',
                    color: '#64748B',
                    fontSize: '11px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.03em',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services .service-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #services > div { padding: 0 20px !important; }
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          #services > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
