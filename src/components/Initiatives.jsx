import React, { useState } from 'react';
import { Rocket, ExternalLink, Paperclip, FileText, Eye, Sparkles } from 'lucide-react';
import { initiativeCategories, initiativesData } from '../data/portfolioData';
import DocumentModal from './DocumentModal';

export default function Initiatives({ onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedInitiative, setSelectedInitiative] = useState(null);

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
          Major initiatives, annual reports, conservation newsletters & published field reports
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
        {filteredInitiatives.map((item) => {
          const hasAttachments = item.attachments && item.attachments.length > 0;
          const attachmentCount = item.attachments?.length || 0;

          return (
            <article
              key={item.id}
              className={`card ${hasAttachments ? 'has-attachments' : ''}`}
            >
              <div className="card-header">
                <div>
                  <h3>{item.title}</h3>
                  {hasAttachments && (
                    <span className="card-attachment-pill">
                      <Paperclip size={12} /> {attachmentCount} {attachmentCount === 1 ? 'Report' : 'Reports & Attachments'}
                    </span>
                  )}
                </div>
                {item.badge && (
                  <span className={`badge ${item.badgeType}`}>{item.badge}</span>
                )}
              </div>

              <p className="card-desc">{item.description}</p>

              {/* Mini preview of top attached reports */}
              {hasAttachments && (
                <div className="card-doc-previews">
                  <span className="doc-preview-label">Attached Documents:</span>
                  <div className="doc-preview-list">
                    {item.attachments.slice(0, 2).map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        className="doc-mini-chip"
                        onClick={() => setSelectedInitiative(item)}
                        title={`Click to open ${doc.title}`}
                      >
                        <FileText size={12} />
                        <span className="chip-text">{doc.title}</span>
                      </button>
                    ))}
                    {attachmentCount > 2 && (
                      <button
                        type="button"
                        className="doc-mini-chip more-chip"
                        onClick={() => setSelectedInitiative(item)}
                      >
                        +{attachmentCount - 2} more
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="card-stack">
                {item.stack.map((tag, idx) => (
                  <span key={idx} className="skill-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="card-actions-row">
                {hasAttachments ? (
                  <button
                    type="button"
                    className="card-btn-primary"
                    onClick={() => setSelectedInitiative(item)}
                  >
                    <Eye size={15} /> Open & View Reports ({attachmentCount})
                  </button>
                ) : (
                  item.link && (
                    <a
                      className="card-link"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel || 'View Details'} <ExternalLink size={14} />
                    </a>
                  )
                )}

                {hasAttachments && item.link && (
                  <a
                    className="card-link-subtle"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.linkLabel || 'Visit portal'}
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* DOCUMENT VIEWER & ATTACHMENT MODAL */}
      {selectedInitiative && (
        <DocumentModal
          initiative={selectedInitiative}
          onClose={() => setSelectedInitiative(null)}
          onShowToast={onShowToast}
        />
      )}
    </section>
  );
}
