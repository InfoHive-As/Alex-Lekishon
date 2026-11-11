import React, { useState } from 'react';
import { Wrench, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <Wrench size={24} /> Skills & Core Competencies
        </h2>
        <p className="section-subtitle">
          Specialized expertise across public relations, resource mobilization & monitoring
        </p>
      </div>

      <div className="filter-tabs">
        {skillCategories.map((cat) => (
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

      <div className="skills-grid">
        {filteredSkills.map((card, idx) => (
          <div key={idx} className="skill-card">
            <h4>
              <CheckCircle2 size={16} />
              {card.title}
            </h4>
            <div className="skill-pills">
              {card.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
