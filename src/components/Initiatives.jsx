import React, { useState } from 'react';
import { Rocket, ExternalLink, Bookmark } from 'lucide-react';
import { initiativeCategories, initiativesData } from '../data/portfolioData';

export default function Initiatives() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredInitiatives =
    activeCategory === 'all'
      ? initiativesData
      : initiativesData.filter((item) => item.category === activeCategory);

  return (
    <section id="initiatives" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <Rocket size={24} /> Key Achievements & Publications
        </h2>
        <p className="section-subtitle">
          Major initiatives, conservation campaigns, grant proposals & field reports
        </p>
      </div>

      <div className="filter-tabs">
        {initiativeCategories.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredInitiatives.map((item) => (
          <article key={item.id} className="card">
            <div className="card-header">
              <h3>{item.title}</h3>
              {item.badge && (
                <span className={`badge ${item.badgeType}`}>{item.badge}</span>
              )}
            </div>

            <p className="card-desc">{item.description}</p>

            <div className="card-stack">
              {item.stack.map((tag, idx) => (
                <span key={idx} className="skill-pill">
                  {tag}
                </span>
              ))}
            </div>

            {item.link && (
              <a
                className="card-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkLabel || 'View Details'} <ExternalLink size={14} />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
