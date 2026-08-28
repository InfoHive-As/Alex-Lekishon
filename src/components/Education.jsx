import React from 'react';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <GraduationCap size={24} /> Education & Academic Background
        </h2>
        <p className="section-subtitle">
          Higher education in journalism, mass media & corporate communications
        </p>
      </div>

      <div className="edu-grid">
        {educationData.map((edu) => (
          <div key={edu.id} className="edu-card">
            <div className="edu-degree">
              {edu.degree}{' '}
              {edu.specialization && (
                <span style={{ fontWeight: 500, color: 'var(--primary)' }}>
                  ({edu.specialization})
                </span>
              )}
            </div>

            <div className="edu-institution">
              <BookOpen size={15} />
              <span>{edu.institution}</span>
              <span>·</span>
              <Calendar size={14} />
              <span>{edu.period}</span>
              {edu.status && (
                <span className="badge os" style={{ marginLeft: 'auto' }}>
                  {edu.status}
                </span>
              )}
            </div>

            {edu.details && <div className="edu-details">{edu.details}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
