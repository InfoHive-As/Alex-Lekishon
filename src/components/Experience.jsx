import React from 'react';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase size={24} /> Work Experience
        </h2>
        <p className="section-subtitle">
          Proven track record across public sector, conservancy networks, and international NGOs
        </p>
      </div>

      <div className="timeline">
        {experienceData.map((job) => (
          <div
            key={job.id}
            className={`timeline-item ${job.current ? 'current' : ''}`}
          >
            <div className="timeline-icon">
              <Briefcase size={18} />
            </div>

            <div className="timeline-content">
              <div className="timeline-head">
                <h3 className="timeline-title">{job.role}</h3>
                <div className="timeline-meta">
                  <span className="timeline-company">
                    <Building2 size={14} style={{ display: 'inline', marginRight: 4 }} />
                    {job.company}
                  </span>
                  {job.location && (
                    <span className="timeline-location">
                      · <MapPin size={12} style={{ display: 'inline', marginRight: 2 }} />
                      {job.location}
                    </span>
                  )}
                  <span className="timeline-period">
                    <Calendar size={12} style={{ display: 'inline', marginRight: 4 }} />
                    {job.period}
                  </span>
                </div>
              </div>

              <ul className="timeline-bullets">
                {job.highlights.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              {job.tags && job.tags.length > 0 && (
                <div className="timeline-tags">
                  {job.tags.map((tag, idx) => (
                    <span key={idx} className="skill-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
