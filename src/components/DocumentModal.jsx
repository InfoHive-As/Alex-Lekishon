import React, { useState, useEffect } from 'react';
import {
  X,
  FileText,
  Download,
  ExternalLink,
  Eye,
  Paperclip,
  Plus,
  Trash2,
  Calendar,
  CheckCircle2,
  Info,
  ArrowLeft,
  Sparkles,
  UploadCloud
} from 'lucide-react';

export default function DocumentModal({ initiative, onClose, onShowToast }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'reader' | 'attach'
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Form state for attaching a new document
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Annual Report');
  const [newPeriod, setNewPeriod] = useState(new Date().getFullYear().toString());
  const [newFormat, setNewFormat] = useState('PDF');
  const [newSize, setNewSize] = useState('1.5 MB');
  const [newSummary, setNewSummary] = useState('');
  const [sourceType, setSourceType] = useState('url'); // 'url' | 'upload'
  const [fileUrl, setFileUrl] = useState('');
  const [fileName, setFileName] = useState('');

  // Custom user-attached documents loaded from localStorage
  const storageKey = `custom_attachments_${initiative?.id || 'default'}`;
  const [customDocs, setCustomDocs] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Combine default attachments with any user-attached ones
  const allAttachments = [
    ...(initiative?.attachments || []),
    ...customDocs
  ];

  // Save to localStorage when customDocs change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(customDocs));
    } catch (e) {
      console.error('Failed to save attachments to localStorage', e);
    }
  }, [customDocs, storageKey]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (activeTab === 'reader') {
          setActiveTab('list');
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!initiative) return null;

  // Categories present in this initiative
  const categories = ['all', ...new Set(allAttachments.map((doc) => doc.category))];

  // Filtered docs
  const filteredDocs = allAttachments.filter((doc) => {
    const matchesCategory = filterCategory === 'all' || doc.category === filterCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (doc.summary && doc.summary.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (doc.tags && doc.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      setFileName(file.name);
      if (!newTitle) {
        setNewTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setNewSize(`${sizeMb} MB`);
      if (file.type.includes('pdf')) setNewFormat('PDF');
    }
  };

  // Handle submit new attachment
  const handleAddAttachment = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      if (onShowToast) onShowToast('Please provide a document title');
      return;
    }

    const docObj = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      period: newPeriod.trim() || '2024',
      format: newFormat || 'PDF',
      size: newSize || '2.0 MB',
      summary: newSummary.trim() || 'Attached report/document.',
      fileUrl: fileUrl || '/reports/lca-annual-report-2024.html',
      downloadUrl: fileUrl || '/reports/lca-annual-report-2024.html',
      tags: [newCategory, 'Attached'],
      isCustom: true
    };

    setCustomDocs((prev) => [docObj, ...prev]);
    setActiveTab('list');
    setNewTitle('');
    setNewSummary('');
    setFileUrl('');
    setFileName('');
    if (onShowToast) onShowToast(`Successfully attached "${docObj.title}"!`);
  };

  // Remove custom attachment
  const handleRemoveCustomDoc = (id, title) => {
    setCustomDocs((prev) => prev.filter((d) => d.id !== id));
    if (onShowToast) onShowToast(`Removed "${title}"`);
  };

  // Open in Reader view
  const handleOpenReader = (doc) => {
    setSelectedDoc(doc);
    setActiveTab('reader');
  };

  return (
    <div className="doc-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="doc-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* MODAL HEADER */}
        <div className="doc-modal-header">
          <div className="doc-modal-header-info">
            <div className="doc-modal-badge-row">
              <span className={`badge ${initiative.badgeType || 'os'}`}>
                {initiative.badge || 'Published'}
              </span>
              <span className="doc-count-pill">
                <Paperclip size={13} /> {allAttachments.length} Reports & Attachments
              </span>
            </div>
            <h2 className="doc-modal-title">{initiative.title}</h2>
            <p className="doc-modal-subtitle">{initiative.description}</p>
          </div>
          <button className="doc-modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* READER VIEW (If active) */}
        {activeTab === 'reader' && selectedDoc ? (
          <div className="doc-reader-view">
            <div className="doc-reader-toolbar">
              <button
                className="reader-back-btn"
                onClick={() => setActiveTab('list')}
                type="button"
              >
                <ArrowLeft size={16} /> Back to Reports List
              </button>
              <div className="reader-doc-meta">
                <strong>{selectedDoc.title}</strong>
                <span>({selectedDoc.period} · {selectedDoc.format})</span>
              </div>
              <div className="reader-actions">
                <a
                  className="reader-action-btn"
                  href={selectedDoc.downloadUrl || selectedDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download size={15} /> Download
                </a>
                {selectedDoc.googleDocUrl && (
                  <a
                    className="reader-action-btn"
                    href={selectedDoc.googleDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open live Google Doc"
                  >
                    <ExternalLink size={15} /> Open in Google Docs
                  </a>
                )}
              </div>
            </div>

            {selectedDoc.fileUrl?.startsWith('http') && (
              <div className="reader-external-banner">
                <div className="reader-external-text">
                  <span className="live-dot" />
                  <span>
                    Official publication hosted live on <strong>{new URL(selectedDoc.fileUrl).hostname}</strong>
                  </span>
                </div>
                <a
                  href={selectedDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reader-open-external-btn"
                >
                  Open Full Interactive Edition <ExternalLink size={14} />
                </a>
              </div>
            )}

            <div className="doc-reader-frame-wrapper">
              {selectedDoc.fileUrl?.includes('docs.google.com') ? (
                <div className="gdoc-reader-placeholder">
                  <div className="gdoc-icon-badge">📄</div>
                  <h3 className="gdoc-placeholder-title">{selectedDoc.title}</h3>
                  <p className="gdoc-placeholder-desc">
                    This official evaluation report is hosted securely on Google Docs ({selectedDoc.category} · {selectedDoc.period}).
                  </p>
                  <a
                    href={selectedDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} /> Open Document on Google Docs
                  </a>
                </div>
              ) : (
                <iframe
                  title={selectedDoc.title}
                  src={selectedDoc.fileUrl}
                  className="doc-reader-iframe"
                />
              )}
            </div>
          </div>
        ) : (
          /* LIST & ATTACH VIEW */
          <div className="doc-modal-body">
            
            {/* Top Toolbar / Tab switch */}
            <div className="doc-toolbar">
              <div className="doc-toolbar-tabs">
                <button
                  type="button"
                  className={`doc-tab-btn ${activeTab === 'list' ? 'active' : ''}`}
                  onClick={() => setActiveTab('list')}
                >
                  <FileText size={15} /> Attached Reports ({allAttachments.length})
                </button>
                <button
                  type="button"
                  className={`doc-tab-btn ${activeTab === 'attach' ? 'active' : ''}`}
                  onClick={() => setActiveTab('attach')}
                >
                  <Plus size={15} /> + Attach New Report / Newsletter
                </button>
              </div>

              {activeTab === 'list' && (
                <div className="doc-search-box">
                  <input
                    type="text"
                    placeholder="Search reports by title or keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="doc-search-input"
                  />
                  {searchTerm && (
                    <button
                      className="doc-search-clear"
                      onClick={() => setSearchTerm('')}
                      type="button"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* TAB: ATTACH NEW REPORT FORM */}
            {activeTab === 'attach' && (
              <div className="doc-attach-panel">
                <div className="attach-panel-header">
                  <h3>
                    <UploadCloud size={20} className="icon-emerald" /> Attach Report or Newsletter
                  </h3>
                  <p>
                    Add a new report, annual document, newsletter, or field publication to this portfolio card.
                  </p>
                </div>

                <form onSubmit={handleAddAttachment} className="attach-form">
                  <div className="form-row">
                    <div className="form-group flex-2">
                      <label>Document / Report Title *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. LCA Annual Report 2025: Strategic Horizon"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group flex-1">
                      <label>Category</label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="form-select"
                      >
                        <option value="Annual Report">Annual Report</option>
                        <option value="Newsletter">Newsletter</option>
                        <option value="Field Report">Field Report</option>
                        <option value="Policy Brief">Policy Brief</option>
                        <option value="Grant Proposal">Grant Proposal</option>
                        <option value="Publication">Publication</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Period / Year</label>
                      <input
                        type="text"
                        placeholder="e.g. 2025 or Q4 2024"
                        value={newPeriod}
                        onChange={(e) => setNewPeriod(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Document Format</label>
                      <input
                        type="text"
                        placeholder="e.g. PDF"
                        value={newFormat}
                        onChange={(e) => setNewFormat(e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Approx. Size</label>
                      <input
                        type="text"
                        placeholder="e.g. 3.5 MB"
                        value={newSize}
                        onChange={(e) => setNewSize(e.target.value)}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Attachment Source Selection */}
                  <div className="form-group">
                    <label>Attachment File Source</label>
                    <div className="source-options">
                      <label className={`source-radio ${sourceType === 'upload' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="sourceType"
                          value="upload"
                          checked={sourceType === 'upload'}
                          onChange={() => setSourceType('upload')}
                        />
                        <span>📁 Upload Local PDF/File</span>
                      </label>
                      <label className={`source-radio ${sourceType === 'url' ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="sourceType"
                          value="url"
                          checked={sourceType === 'url'}
                          onChange={() => setSourceType('url')}
                        />
                        <span>🔗 External Link / Project Path (URL)</span>
                      </label>
                    </div>

                    {sourceType === 'upload' ? (
                      <div className="file-drop-zone">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.html"
                          id="file-upload-input"
                          onChange={handleFileUpload}
                          className="file-input-hidden"
                        />
                        <label htmlFor="file-upload-input" className="file-drop-label">
                          <UploadCloud size={32} />
                          {fileName ? (
                            <span className="file-selected-name">
                              ✅ Selected: <strong>{fileName}</strong>
                            </span>
                          ) : (
                            <span>
                              Click here to select a PDF or report from your computer
                            </span>
                          )}
                        </label>
                      </div>
                    ) : (
                      <input
                        type="text"
                        placeholder="e.g. /reports/lca-annual-report-2024.pdf or Google Drive / LCA portal link"
                        value={fileUrl}
                        onChange={(e) => setFileUrl(e.target.value)}
                        className="form-input"
                      />
                    )}
                  </div>

                  <div className="form-group">
                    <label>Summary / Key Takeaways</label>
                    <textarea
                      rows={3}
                      placeholder="Brief 1-2 sentence description of what this report covers (e.g. conservation achievements, donor milestones, rangeland restoration data)..."
                      value={newSummary}
                      onChange={(e) => setNewSummary(e.target.value)}
                      className="form-textarea"
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-primary">
                      <Paperclip size={16} /> Attach This Document
                    </button>
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setActiveTab('list')}
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                {/* Permanent Project Guide */}
                <div className="project-guide-card">
                  <div className="guide-title">
                    <Info size={18} />
                    <span>Permanent Project PDF Setup Guide</span>
                  </div>
                  <p>
                    Files uploaded via this form are saved directly in your browser. To make PDF files <strong>permanent for all website visitors</strong>:
                  </p>
                  <ol className="guide-steps">
                    <li>Copy your PDF file into the project folder: <code>public/reports/</code> (e.g. <code>public/reports/lca-annual-report-2024.pdf</code>).</li>
                    <li>Open <code>src/data/portfolioData.js</code> and add your file link: <code>fileUrl: "/reports/lca-annual-report-2024.pdf"</code>.</li>
                  </ol>
                </div>
              </div>
            )}

            {/* TAB: ATTACHMENTS LIST */}
            {activeTab === 'list' && (
              <>
                {/* Category Filter Pills */}
                {categories.length > 2 && (
                  <div className="doc-filter-pills">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className={`doc-filter-pill ${filterCategory === cat ? 'active' : ''}`}
                        onClick={() => setFilterCategory(cat)}
                      >
                        {cat === 'all' ? 'All Documents' : cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Document Cards List */}
                {filteredDocs.length === 0 ? (
                  <div className="no-docs-box">
                    <FileText size={40} className="text-subtle" />
                    <p>No documents found matching your search.</p>
                    <button
                      className="btn-secondary btn-sm"
                      onClick={() => {
                        setSearchTerm('');
                        setFilterCategory('all');
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="doc-cards-list">
                    {filteredDocs.map((doc) => (
                      <article key={doc.id} className="doc-item-card">
                        <div className="doc-item-icon">
                          <FileText size={28} />
                          <span className="doc-item-fmt">{doc.format || 'PDF'}</span>
                        </div>

                        <div className="doc-item-content">
                          <div className="doc-item-top">
                            <span className="doc-category-badge">{doc.category}</span>
                            <span className="doc-period-badge">
                              <Calendar size={12} /> {doc.period}
                            </span>
                            {doc.size && <span className="doc-size-badge">{doc.size}</span>}
                            {doc.featured && (
                              <span className="doc-featured-badge">
                                <Sparkles size={11} /> Featured
                              </span>
                            )}
                          </div>

                          <h4 className="doc-item-title">{doc.title}</h4>
                          <p className="doc-item-summary">{doc.summary}</p>

                          {doc.tags && (
                            <div className="doc-item-tags">
                              {doc.tags.map((tag, idx) => (
                                <span key={idx} className="doc-mini-tag">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="doc-item-actions">
                          {doc.fileUrl?.includes('docs.google.com') ? (
                            <a
                              className="doc-action-btn primary"
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open official Google Doc in new window"
                            >
                              <ExternalLink size={15} /> Open Google Doc
                            </a>
                          ) : (doc.isExternal || doc.fileUrl?.startsWith('http')) ? (
                            <a
                              className="doc-action-btn primary"
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open live publication on official domain"
                            >
                              <ExternalLink size={15} /> Open Live Report
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="doc-action-btn primary"
                              onClick={() => handleOpenReader(doc)}
                              title="Read / Preview Report"
                            >
                              <Eye size={15} /> Read / Preview
                            </button>
                          )}

                          <button
                            type="button"
                            className="doc-action-btn secondary"
                            onClick={() => handleOpenReader(doc)}
                            title="In-App Preview"
                          >
                            <Eye size={15} /> Preview
                          </button>

                          {(!doc.isExternal && !doc.fileUrl?.startsWith('http')) && (
                            <a
                              className="doc-action-btn ghost"
                              href={doc.downloadUrl || doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              title="Download document"
                            >
                              <Download size={15} />
                            </a>
                          )}

                          {doc.googleDocUrl && (
                            <a
                              className="doc-action-btn ghost"
                              href={doc.googleDocUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Open in Google Docs"
                            >
                              <ExternalLink size={14} /> Google Doc
                            </a>
                          )}

                          {doc.isCustom && (
                            <button
                              type="button"
                              className="doc-action-btn danger"
                              onClick={() => handleRemoveCustomDoc(doc.id, doc.title)}
                              title="Delete attached file"
                            >
                              <Trash2 size={15} />
                            </button>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* MODAL FOOTER */}
        <div className="doc-modal-footer">
          <div className="modal-footer-info">
            <CheckCircle2 size={15} className="icon-emerald" />
            <span>All reports and documents are verified official publications.</span>
          </div>
          {initiative.link && (
            <a
              href={initiative.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-footer-link"
            >
              {initiative.linkLabel || 'Visit Official Website'} <ExternalLink size={13} />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
