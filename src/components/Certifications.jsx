import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <Award size={24} /> Licenses & Certifications
        </h2>
        <p className="section-subtitle">
          Continuous professional development and accredited credentials
        </p>
      </div>

      <div className="skills-grid">
        {certificationsData.map((cert, idx) => (
          <div key={idx} className="skill-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
              <h4>
                <Award size={16} /> {cert.title}
              </h4>
              <span className="badge os">{cert.badge}</span>
            </div>
            <p style={{ margin: '4px 0 8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              {cert.issuer}
            </p>
            <span className="skill-pill" style={{ display: 'inline-block' }}>
              {cert.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
