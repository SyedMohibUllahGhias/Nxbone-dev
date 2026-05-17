import { team } from '../data/projects';

export default function Team() {
  return (
    <section id="team" style={{
      padding: '120px 0',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <div className="section-tag">The Team</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 52px)',
            letterSpacing: '-0.025em',
            lineHeight: '1.15',
            color: '#0F172A',
          }}>
            Meet Our <span style={{ color: '#0055FF' }}>Expert Team</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px, 100%), 1fr))',
          gap: '24px',
        }}>
          {team.map((member, i) => {
            const color = i === 0 ? '#0055FF' : '#0041C8';
            return (
              <div key={i} style={{
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                background: '#FFFFFF',
                overflow: 'hidden',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#0055FF33';
                e.currentTarget.style.boxShadow = '0px 10px 30px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
              >
                {/* Header */}
                <div style={{
                  padding: '32px',
                  background: '#F8FAFC',
                  borderBottom: '1px solid #E2E8F0',
                  display: 'flex', alignItems: 'center', gap: '20px',
                }}>
                  {/* Avatar */}
                  <div style={{
                    width: '68px', height: '68px', borderRadius: '8px',
                    background: '#EEF2FF',
                    border: '1px solid #C7D2FE',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '22px',
                    color: '#0055FF', flexShrink: 0,
                  }}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: '#0F172A', marginBottom: '4px' }}>
                      {member.name}
                    </h3>
                    <div style={{ color: '#0055FF', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-body)' }}>
                      {member.role}
                    </div>
                    <div style={{ color: '#64748B', fontSize: '12px', marginTop: '3px', fontFamily: 'var(--font-body)' }}>
                      {member.education}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.75' }}>{member.bio}</p>

                  {/* Skills */}
                  <div>
                    <div style={{ color: '#64748B', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-body)' }}>
                      Core Skills
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {member.skills.map(s => (
                        <span key={s} style={{
                          padding: '4px 10px', borderRadius: '4px',
                          background: '#F1F5F9',
                          color: '#64748B', fontSize: '12px',
                          fontFamily: 'var(--font-body)', fontWeight: 500,
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Certs */}
                  <div>
                    <div style={{ color: '#64748B', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: 'var(--font-body)' }}>
                      Certifications
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {member.certifications.map(c => (
                        <div key={c} style={{
                          display: 'flex', alignItems: 'center', gap: '10px',
                          color: '#64748B', fontSize: '13px',
                        }}>
                          <span style={{
                            width: '6px', height: '6px',
                            background: '#0055FF',
                            borderRadius: '1px',
                            flexShrink: 0,
                          }} />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, padding: '10px', borderRadius: '4px',
                      border: '1px solid #0055FF',
                      background: '#EEF2FF',
                      color: '#0055FF', textDecoration: 'none', textAlign: 'center',
                      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '12px',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.background = '#C7D2FE'}
                    onMouseLeave={e => e.target.style.background = '#EEF2FF'}
                    >GitHub</a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                      flex: 1, padding: '10px', borderRadius: '4px',
                      border: '1px solid #E2E8F0',
                      background: '#FFFFFF',
                      color: '#64748B', textDecoration: 'none', textAlign: 'center',
                      fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '12px',
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      transition: 'border-color 0.2s, color 0.2s',
                    }}
                    onMouseEnter={e => { e.target.style.borderColor = '#0055FF33'; e.target.style.color = '#0055FF'; }}
                    onMouseLeave={e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.color = '#64748B'; }}
                    >LinkedIn</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #team > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
