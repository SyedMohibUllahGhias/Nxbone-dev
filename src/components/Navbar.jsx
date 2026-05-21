import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Projects', 'Team', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '68px',
      display: 'flex', alignItems: 'center',
      background: scrolled ? 'rgba(248,250,252,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
      transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
    }}>
      <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src={logo} alt="Nxbone Logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', letterSpacing: '-0.3px', color: '#0F172A' }}>
            Nxbone<span style={{ color: '#0055FF' }}> Dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              padding: '7px 16px', borderRadius: '6px',
              color: '#64748B', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = '#0F172A'; e.target.style.background = '#F2F4F6'; }}
            onMouseLeave={e => { e.target.style.color = '#64748B'; e.target.style.background = 'transparent'; }}
            >{link}</a>
          ))}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nxbone.dev@gmail.com&su=Inquiry"
            target="_blank" rel="noopener noreferrer"
            style={{
              marginLeft: '12px', padding: '9px 22px', borderRadius: '4px',
              background: '#0055FF',
              color: '#fff', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.05em', textTransform: 'uppercase',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#0041C8'; e.target.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background = '#0055FF'; e.target.style.transform = 'none'; }}
          >Hire Us</a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: '1px solid #E2E8F0',
          borderRadius: '6px', padding: '8px 10px', cursor: 'pointer', color: '#0F172A',
          fontSize: '16px',
        }} className="hamburger">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0,
          background: '#F8FAFC', backdropFilter: 'blur(16px)',
          padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '12px 16px', color: '#64748B', textDecoration: 'none', borderRadius: '6px', fontWeight: 500, fontSize: '15px' }}>
              {link}
            </a>
          ))}
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nxbone.dev@gmail.com&su=Inquiry" target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '8px', padding: '13px', textAlign: 'center', borderRadius: '4px',
              background: '#0055FF',
              color: '#fff', fontWeight: 700, textDecoration: 'none', fontSize: '14px',
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>Hire Us</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          nav > div { padding: 0 20px !important; }
        }
      `}</style>
    </nav>
  );
}
