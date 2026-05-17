const partners = [
  {
    id: 'corvit',
    name: 'Corvit',
    tagline: 'Reaching end to end',
    accent: '#E63946',
    logo: (
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <polygon points="20,52 60,18 100,52 92,52 60,28 28,52" fill="#E63946" />
        <polygon points="60,18 100,52 96,52 60,22" fill="#B02030" opacity="0.5" />
        <text x="60" y="66" textAnchor="middle" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="15" fill="#0F172A" letterSpacing="3">CORVIT</text>
        <text x="60" y="76" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="400" fontSize="7" fill="#64748B" letterSpacing="1">Reaching end to end</text>
      </svg>
    ),
  },
  {
    id: 'quicktech',
    name: 'Quick Tech',
    tagline: 'IT Solutions',
    accent: '#1976D2',
    logo: (
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <circle cx="60" cy="34" r="22" stroke="#1976D2" strokeWidth="2.5" fill="none" />
        <ellipse cx="60" cy="34" rx="12" ry="22" stroke="#1976D2" strokeWidth="1.5" fill="none" />
        <line x1="38" y1="34" x2="82" y2="34" stroke="#1976D2" strokeWidth="1.5" />
        <line x1="40" y1="24" x2="80" y2="24" stroke="#1976D2" strokeWidth="1" />
        <line x1="40" y1="44" x2="80" y2="44" stroke="#1976D2" strokeWidth="1" />
        <polygon points="64,14 54,36 62,36 56,54 72,30 63,30" fill="#1976D2" />
        <circle cx="44" cy="30" r="2" fill="#1976D2" />
        <circle cx="76" cy="38" r="2" fill="#1976D2" />
        <text x="60" y="67" textAnchor="middle" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="12" fill="#0F172A" letterSpacing="2">QUICK TECH</text>
        <text x="60" y="77" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="500" fontSize="7.5" fill="#64748B" letterSpacing="2">IT SOLUTIONS</text>
      </svg>
    ),
  },
  {
    id: 'tyketech',
    name: 'TykeTech',
    tagline: 'Innovation Platform',
    accent: '#8B5CF6',
    logo: (
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <polygon points="60,14 76,23 76,41 60,50 44,41 44,23" fill="url(#tykeGrad)" stroke="url(#tykeStroke)" strokeWidth="2" />
        <polygon points="60,22 70,27.5 70,38.5 60,44 50,38.5 50,27.5" fill="#F8FAFC" />
        <circle cx="60" cy="32" r="4" fill="url(#tykeGrad)" />
        <defs>
          <linearGradient id="tykeGrad" x1="44" y1="14" x2="76" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EC4899" /><stop offset="50%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="tykeStroke" x1="44" y1="14" x2="76" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EC4899" /><stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <text x="60" y="66" textAnchor="middle" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="13" fill="#0F172A" letterSpacing="1">
          <tspan fill="#0F172A">Tyke</tspan><tspan fill="#8B5CF6">Tech</tspan>
        </text>
        <text x="60" y="76" textAnchor="middle" fontFamily="'DM Sans', sans-serif" fontWeight="400" fontSize="7" fill="#64748B" letterSpacing="1.5">INNOVATION PLATFORM</text>
      </svg>
    ),
  },
  {
    id: 'devsci',
    name: 'DevSci',
    tagline: 'Healthier Earlier™',
    accent: '#7C3AED',
    logo: (
      <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <ellipse cx="52" cy="34" rx="18" ry="9" stroke="#7C3AED" strokeWidth="1.8" fill="none" />
        <ellipse cx="52" cy="34" rx="18" ry="9" stroke="#7C3AED" strokeWidth="1.8" fill="none" transform="rotate(60 52 34)" />
        <ellipse cx="52" cy="34" rx="18" ry="9" stroke="#7C3AED" strokeWidth="1.8" fill="none" transform="rotate(120 52 34)" />
        <circle cx="52" cy="34" r="4" fill="#7C3AED" />
        <circle cx="70" cy="34" r="2.5" fill="#5B21B6" />
        <circle cx="43" cy="26" r="2" fill="#8B5CF6" />
        <circle cx="43" cy="42" r="1.5" fill="#A78BFA" />
        <text x="79" y="31" fontFamily="'Syne', sans-serif" fontWeight="800" fontSize="14" fill="#0F172A" letterSpacing="0.5">DevSci</text>
        <text x="79" y="42" fontFamily="'DM Sans', sans-serif" fontWeight="400" fontSize="7.5" fill="#00C896" letterSpacing="0.5">Healthier Earlier™</text>
        <line x1="24" y1="52" x2="96" y2="52" stroke="#E2E8F0" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function Partners() {
  return (
    <section style={{
      padding: '96px 0',
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Collaboration Network</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            letterSpacing: '-0.025em',
            color: '#0F172A',
            marginBottom: '16px',
          }}>
            Our Trusted <span style={{ color: '#0055FF' }}>Partners</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '420px', margin: '0 auto', lineHeight: '1.65' }}>
            Collaborating with industry leaders to deliver exceptional solutions across every domain.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {partners.map(p => (
            <div key={p.id} style={{
              background: '#FFFFFF',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              padding: '32px 20px 20px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = `${p.accent}44`;
              e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0,0,0,0.04)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#E2E8F0';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%', height: '2px',
                background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)`,
              }} />

              <div style={{ width: '130px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {p.logo}
              </div>

              <div style={{ width: '32px', height: '1px', background: `${p.accent}60` }} />

              <div style={{
                display: 'flex', alignItems: 'center', gap: '5px',
                padding: '4px 10px',
                background: '#F0FFF8',
                border: '1px solid #BBFFD8',
                borderRadius: '9999px',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
                  Verified Partner
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '1px', background: '#E2E8F0' }} />
          <span style={{ fontSize: '11px', color: '#64748B', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
            Trusted by {partners.length} Industry Partners
          </span>
          <div style={{ width: '48px', height: '1px', background: '#E2E8F0' }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
