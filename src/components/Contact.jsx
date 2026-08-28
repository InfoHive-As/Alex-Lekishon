import React, { useState } from 'react';
import { Mail, Phone, Globe, Linkedin, Copy, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { personalInfo, referencesData } from '../data/portfolioData';

export default function Contact({ onCopyEmail }) {
  const [showReferences, setShowReferences] = useState(true);

  return (
    <section id="contact" className="wrap section">
      <div className="contact-box">
        <h2 className="section-title" style={{ marginBottom: 12 }}>
          <Mail size={24} /> Let's Connect
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: 20 }}>
          I am always interested in discussing strategic communications roles, grant opportunities, M&E frameworks, partnership development, or advisory initiatives. Feel free to connect or reach out directly:
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <Phone size={16} />
            <strong>Direct Line:</strong>
            <span>{personalInfo.phones.join(' / ')}</span>
          </div>

          <div className="contact-item">
            <Mail size={16} />
            <strong>Email:</strong>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>

          <div className="contact-item">
            <Globe size={16} />
            <strong>Consultancy:</strong>
            <a href={personalInfo.consultancy} target="_blank" rel="noopener noreferrer">
              kishonconsulting.co.ke
            </a>
          </div>
        </div>

        <div className="cta-row" style={{ marginTop: 24 }}>
          <a className="btn primary" href={`mailto:${personalInfo.email}`}>
            <Mail size={16} /> Email me
          </a>
          <a
            className="btn"
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} /> LinkedIn Profile
          </a>
          <a
            className="btn"
            href={personalInfo.consultancy}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={16} /> Kishon Consulting
          </a>
          <button
            className="btn"
            onClick={() => onCopyEmail(personalInfo.email)}
            type="button"
          >
            <Copy size={16} /> Copy Email
          </button>
        </div>

        <div className="references-section">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              cursor: 'pointer'
            }}
            onClick={() => setShowReferences(!showReferences)}
          >
            <h3 style={{ fontSize: '1.05rem', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Users size={18} /> Professional References
            </h3>
            <button
              className="theme-toggle-btn"
              style={{ width: 28, height: 28 }}
              type="button"
              aria-label="Toggle References"
            >
              {showReferences ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {showReferences && (
            <div className="references-grid">
              {referencesData.map((ref, idx) => (
                <div key={idx} className="reference-card">
                  <strong>{ref.name}</strong>
                  <p>{ref.role}</p>
                  <a
                    href={`mailto:${ref.email}`}
                    style={{ fontSize: '0.84rem', color: 'var(--primary)', textDecoration: 'underline' }}
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
