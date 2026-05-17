import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\nMessage:\n${form.message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=nxbone.dev@gmail.com&subject=${subject}&body=${body}`;
    const a = document.createElement('a');
    a.href = mailtoLink;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.click();
    setSent(true);
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '4px',
    border: '1px solid #E2E8F0', background: '#FFFFFF',
    color: '#0F172A', fontSize: '14px', fontFamily: 'var(--font-body)',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '14px',
    paddingRight: '40px',
  };

  const focusInput = e => { e.target.style.borderColor = '#0055FF'; e.target.style.boxShadow = '0 0 0 3px #0055FF18'; };
  const blurInput = e => { e.target.style.borderColor = '#E2E8F0'; e.target.style.boxShadow = 'none'; };

  return (
    <section id="contact" style={{
      padding: '120px 0',
      background: '#F8FAFC',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 80px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left */}
          <div>
            <div className="section-tag">Get In Touch</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 52px)',
              letterSpacing: '-0.025em',
              lineHeight: '1.15',
              color: '#0F172A',
              marginBottom: '20px',
            }}>
              Ready to Build<br />
              <span style={{ color: '#0055FF' }}>Something Great?</span>
            </h2>

            <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.7', marginBottom: '48px' }}>
              Whether you need an AI chatbot, a multi-agent pipeline, or a full web application —
              we're ready to build it. Let's talk about your project.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '✉️', label: 'Email', value: 'nxbone.dev@gmail.com', href: 'mailto:nxbone.dev@gmail.com' },
                { icon: '📍', label: 'Location', value: 'Remote Worldwide' },
                { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '16px 20px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  background: '#FFFFFF',
                }}>
                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                  <div>
                    <div style={{ color: '#64748B', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px', fontFamily: 'var(--font-body)' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: '#0055FF', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ color: '#0F172A', fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            padding: '36px',
            borderRadius: '8px',
            border: '1px solid #E2E8F0',
            background: '#FFFFFF',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{
                  width: '56px', height: '56px', borderRadius: '8px',
                  background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', margin: '0 auto 20px',
                }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', marginBottom: '10px', color: '#0F172A' }}>Message Sent!</h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.65' }}>Your email client should have opened. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: '24px', padding: '11px 28px', borderRadius: '4px',
                  background: '#0055FF',
                  border: 'none', color: '#FFFFFF', fontFamily: 'var(--font-body)', fontWeight: 700,
                  fontSize: '13px', cursor: 'pointer', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', marginBottom: '4px', color: '#0F172A' }}>
                  Start Your Project
                </h3>

                <input name="name" value={form.name} onChange={handle} required placeholder="Your Name" style={inputStyle}
                  onFocus={focusInput} onBlur={blurInput} />

                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="Your Email" style={inputStyle}
                  onFocus={focusInput} onBlur={blurInput} />

                <select name="project" value={form.project} onChange={handle} required style={selectStyle}
                  onFocus={focusInput} onBlur={blurInput}>
                  <option value="" disabled>Select Project Type</option>
                  <option>AI / LLM Application</option>
                  <option>Multi-Agent System</option>
                  <option>RAG Chatbot</option>
                  <option>Full-Stack Web App</option>
                  <option>Data Pipeline</option>
                  <option>MCP Integration</option>
                  <option>Other</option>
                </select>

                <textarea name="message" value={form.message} onChange={handle} required placeholder="Tell us about your project..." rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={focusInput} onBlur={blurInput} />

                <button type="submit" style={{
                  padding: '14px', borderRadius: '4px',
                  background: '#0055FF',
                  border: 'none', color: '#FFFFFF',
                  fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '13px',
                  cursor: 'pointer', letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0041C8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0055FF'; e.currentTarget.style.transform = 'none'; }}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { padding: 0 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
