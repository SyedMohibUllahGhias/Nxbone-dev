import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const FILTERS = ['All', 'AI / LLM', 'Agentic Systems', 'Web Development', 'Data Engineering', 'Automation', 'AI / Voice'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" style={{
      padding: '120px 0',
      background: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div className="section-tag">Our Work</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: '1.15',
              color: '#0F172A',
            }}>
              Our Work &{' '}
              <span style={{ color: '#0055FF' }}>Client Outcomes</span>
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', maxWidth: '340px', lineHeight: '1.65' }}>
              Real-world AI and web solutions built by our team.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)} style={{
              padding: '7px 18px',
              borderRadius: '9999px',
              border: active === f ? '1px solid #0055FF' : '1px solid #E2E8F0',
              background: active === f ? '#0055FF' : '#FFFFFF',
              color: active === f ? '#FFFFFF' : '#64748B',
              fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
              cursor: 'pointer', transition: 'all 0.2s',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={e => { if (active !== f) { e.target.style.borderColor = '#0055FF44'; e.target.style.color = '#0F172A'; } }}
            onMouseLeave={e => { if (active !== f) { e.target.style.borderColor = '#E2E8F0'; e.target.style.color = '#64748B'; } }}
            >{f}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
}
