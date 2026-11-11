import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  ZoomIn,
  X,
  Layers,
  Table as TableIcon,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';

export default function PortfolioDossier() {
  const [activeTab, setActiveTab] = useState('images'); // 'images' | 'table'
  const [pageFilter, setPageFilter] = useState('both'); // 'both' | 'page1' | 'page2'
  const [modalImage, setModalImage] = useState(null);

  const portfolioLinks = [
    {
      num: '01',
      category: 'Written Communications & Storytelling',
      title: 'LCA Quarterly Conservation Newsletters & Published Field Stories',
      desc: 'Translating technical rangeland telemetry, pasture recovery, and community heritage into accessible narratives.',
      links: [
        { label: 'LCA Newsletter 2024 (Issue 14)', url: 'https://shoutout.wix.com/so/48OxcupJs?languageTag=en' },
        { label: 'Ecological Monitoring Field Story', url: 'https://www.laikipiaconservancies.org/post/lca-ecological-monitoring-during-the-month-of-march' }
      ]
    },
    {
      num: '02',
      category: 'Donor & Organisational Reporting',
      title: 'LCA Annual Reports & Government M&E Submissions',
      desc: 'Fiduciary reporting and multi-landscape M&E indicators under major $9.58M GEF-8 grant and $54.4M co-finance.',
      links: [
        { label: 'LCA 2025 Annual Report', url: 'https://www.laikipiaconservancies.org/lca-2025-annual-report' },
        { label: 'LCA 2024 Annual Report', url: 'https://www.laikipiaconservancies.org/so/79PNxfXk8?languageTag=en' },
        { label: 'GEF-8 OFP Progress Report (PDF)', url: '/reports/GEF-8_OFP_Progress_Report_FY27Q1.pdf' },
        { label: 'CI-GEF Project Annual Workplan (57 Pages)', url: '/reports/CI-GEF_Project_Annual_Workplan_FY27Q1.pdf' }
      ]
    },
    {
      num: '03',
      category: 'Programme Reporting',
      title: 'Oliveseed Foundation Community Needs Assessment Final Evaluation Report',
      desc: 'Empirical baseline field research report based on 24 KIIs and 6 FGDs across Maasai community conservation landscapes.',
      links: [
        { label: 'Oliveseed Google Doc (71 Pages)', url: 'https://docs.google.com/document/d/1my4pZUJ75U41cM5neogJZvKHpX5dzk6a/edit?usp=sharing&ouid=109810313526103633968&rtpof=true&sd=true' },
        { label: 'Full Report PDF (2.95 MB)', url: '/reports/Oliveseed_Community_Needs_Assessment_Report.pdf' }
      ]
    },
    {
      num: '04',
      category: 'PowerPoint & Visual Communications',
      title: 'Policy, Strategy & Governance Presentation Decks',
      desc: 'Translating complex multi-million dollar donor funding frameworks and policies into executive briefings.',
      links: [
        { label: 'Kishon Consulting Strategy Profile', url: 'https://www.kishonconsulting.co.ke/' }
      ]
    },
    {
      num: '05',
      category: 'Digital Communications & Campaigns',
      title: 'GEF-8 Global Wildlife Program (GWP) Multi-Channel Digital Launch',
      desc: 'National launch campaign amplifying conservation grant milestones and youth engagement across 32+ conservancies.',
      links: [
        { label: 'GEF-8 Project Official Story', url: 'https://www.laikipiaconservancies.org/post/gef-8-global-wildlife-program-gwp-kenya-child-project' }
      ]
    },
    {
      num: '06',
      category: 'Website & Digital Presence',
      title: 'LCA Web Portal Overhaul & Interactive Portfolio Platform',
      desc: 'Digital platform architecture, publication repositories, and modern interactive portfolio interfaces.',
      links: [
        { label: 'LCA Official Web Portal', url: 'https://www.laikipiaconservancies.org' },
        { label: 'Interactive Web Portfolio', url: 'https://alex-lekishon.vercel.app/' }
      ]
    }
  ];

  return (
    <section id="dossier" className="wrap section dossier-section">
      <div className="dossier-card">
        {/* Top Running Banner */}
        <div className="dossier-running-header">
          ALEX LEKISHON / COMMUNICATIONS • REPORTING • CONSERVATION
        </div>

        {/* Title Bar */}
        <div className="dossier-header-block">
          <div className="dossier-sup-title">ALEX LEKISHON PROFESSIONAL PORTFOLIO</div>
          <div className="dossier-link-line">
            <strong>Link:</strong>{' '}
            <a href="https://alex-lekishon.vercel.app/" target="_blank" rel="noopener noreferrer">
              Alex Lekishon — Communications, PR & Grants Portfolio (Live Platform)
            </a>
          </div>

          <div className="dossier-category-pill">
            COMMUNICATIONS | REPORTING | CONSERVATION
          </div>

          <h2 className="dossier-author-name">ALEX LEKISHON, MA</h2>
          <p className="dossier-tagline">
            Strategic communications, conservation storytelling, donor reporting, digital engagement and executive stakeholder relations across Kenya's wildlife and community rangelands.
          </p>

          {/* Action Buttons */}
          <div className="dossier-action-bar">
            <a
              href="/reports/Alex_Lekishon_Portfolio_Submission.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-btn primary"
            >
              <Download size={16} /> Download Official 2-Page PDF
            </a>
            <a
              href="/reports/alex-lekishon-portfolio-submission.html"
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-btn secondary"
            >
              <ExternalLink size={16} /> Open Standalone Web Dossier
            </a>
          </div>
        </div>

        {/* 3 Stats Boxes */}
        <div className="dossier-stats-grid">
          <div className="dossier-stat-box">
            <div className="stat-number">5+ years</div>
            <div className="stat-desc">Communications & conservation experience</div>
          </div>
          <div className="dossier-stat-box">
            <div className="stat-number">32+</div>
            <div className="stat-desc">Member conservancies supported across Laikipia & Mara</div>
          </div>
          <div className="dossier-stat-box">
            <div className="stat-number">$5M+</div>
            <div className="stat-desc">Donor funding mobilized (GEF-8, GBFF, USAID, TNC)</div>
          </div>
        </div>

        {/* Section Heading & View Switcher */}
        <div className="dossier-table-intro">
          <div className="dossier-intro-header-flex">
            <div>
              <h3 className="dossier-table-title">SELECTED WORK PORTFOLIO</h3>
              <div className="dossier-table-subtitle">
                Communications | Reporting | Design | Conservation Storytelling
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="dossier-view-toggle">
              <button
                type="button"
                className={`toggle-btn ${activeTab === 'images' ? 'active' : ''}`}
                onClick={() => setActiveTab('images')}
              >
                <Layers size={15} /> Document Image View
              </button>
              <button
                type="button"
                className={`toggle-btn ${activeTab === 'table' ? 'active' : ''}`}
                onClick={() => setActiveTab('table')}
              >
                <TableIcon size={15} /> Table Text View
              </button>
            </div>
          </div>

          <p className="dossier-intro-p">
            The selected examples below demonstrate my written communications, reporting, visual communication, and digital storytelling work across conservation and community development. You can view the authentic document below like an image, and click any direct link to open the verified work sample.
          </p>
        </div>

        {/* ========================================================== */}
        {/* VIEW 1: AUTHENTIC DOCUMENT IMAGE SHOWCASE (DEFAULT)        */}
        {/* ========================================================== */}
        {activeTab === 'images' && (
          <div className="dossier-image-showcase">
            {/* Page Filter Controls */}
            <div className="image-view-controls">
              <div className="filter-group">
                <span className="control-label">View Pages:</span>
                <button
                  type="button"
                  className={`sub-tab-btn ${pageFilter === 'both' ? 'active' : ''}`}
                  onClick={() => setPageFilter('both')}
                >
                  Both Pages (1 & 2)
                </button>
                <button
                  type="button"
                  className={`sub-tab-btn ${pageFilter === 'page1' ? 'active' : ''}`}
                  onClick={() => setPageFilter('page1')}
                >
                  Page 1 Only
                </button>
                <button
                  type="button"
                  className={`sub-tab-btn ${pageFilter === 'page2' ? 'active' : ''}`}
                  onClick={() => setPageFilter('page2')}
                >
                  Page 2 Only
                </button>
              </div>

              <div className="hint-pill">
                <ZoomIn size={14} /> Click any page to enlarge full screen
              </div>
            </div>

            {/* Document Pages Grid */}
            <div className={`doc-images-grid ${pageFilter}`}>
              {(pageFilter === 'both' || pageFilter === 'page1') && (
                <div className="doc-page-card" onClick={() => setModalImage('/reports/alex_lekishon_portfolio_page_1.png')}>
                  <div className="doc-page-badge">
                    <CheckCircle2 size={13} /> Page 1: Overview & Work Samples 01–04
                  </div>
                  <div className="doc-img-wrapper">
                    <img
                      src="/reports/alex_lekishon_portfolio_page_1.png"
                      alt="Alex Lekishon Professional Portfolio Dossier - Page 1"
                      className="doc-page-img"
                      loading="lazy"
                    />
                    <div className="doc-img-hover-overlay">
                      <Maximize2 size={24} />
                      <span>Click to Enlarge Page 1</span>
                    </div>
                  </div>
                  <div className="doc-page-footer">
                    <span>A4 Publication Document · High Resolution (220 DPI)</span>
                  </div>
                </div>
              )}

              {(pageFilter === 'both' || pageFilter === 'page2') && (
                <div className="doc-page-card" onClick={() => setModalImage('/reports/alex_lekishon_portfolio_page_2.png')}>
                  <div className="doc-page-badge">
                    <CheckCircle2 size={13} /> Page 2: Work Samples 05–06 & Verification
                  </div>
                  <div className="doc-img-wrapper">
                    <img
                      src="/reports/alex_lekishon_portfolio_page_2.png"
                      alt="Alex Lekishon Professional Portfolio Dossier - Page 2"
                      className="doc-page-img"
                      loading="lazy"
                    />
                    <div className="doc-img-hover-overlay">
                      <Maximize2 size={24} />
                      <span>Click to Enlarge Page 2</span>
                    </div>
                  </div>
                  <div className="doc-page-footer">
                    <span>A4 Publication Document · High Resolution (220 DPI)</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* VIEW 2: STRUCTURED TABLE VIEW                             */}
        {/* ========================================================== */}
        {activeTab === 'table' && (
          <div className="dossier-table-wrapper">
            <table className="dossier-table">
              <thead>
                <tr>
                  <th style={{ width: '16%' }}>REF. / AREA</th>
                  <th style={{ width: '25%' }}>WORK SAMPLE</th>
                  <th style={{ width: '25%' }}>PURPOSE & INTENDED AUDIENCE</th>
                  <th style={{ width: '19%' }}>MY CONTRIBUTION</th>
                  <th style={{ width: '15%' }}>EVIDENCE / LINK</th>
                </tr>
              </thead>
              <tbody>
                {/* ROW 01 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">01</span>
                    Written communications & storytelling
                  </td>
                  <td className="col-sample">
                    <strong>LCA Quarterly Conservation Newsletters & Published Field Stories</strong>
                    <ul>
                      <li>LCA Quarterly Conservation Newsletter (Issue 14)</li>
                      <li>LCA Ecological Monitoring During the Month of March</li>
                      <li>MMWCA Cultural Features (Emanyata Oolorikan)</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To translate technical conservation telemetry, pasture recovery, and cultural heritage into accessible, human-interest narratives.
                    <br /><br />
                    <strong>Audience:</strong> 32+ member conservancies, pastoralist communities, conservation donors, partners, and public audiences.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Lead Writer & Editor (Personally Created):</strong>
                    <br />
                    Conducted field interviews with rangers in Il Ngwesi, authored articles, curated photo assets, and published digital editions via Wix ShoutOut.
                  </td>
                  <td className="col-link">
                    <a href="https://shoutout.wix.com/so/48OxcupJs?languageTag=en" target="_blank" rel="noopener noreferrer">
                      LCA Newsletter 2024 →
                    </a>
                    <a href="https://www.laikipiaconservancies.org/post/lca-ecological-monitoring-during-the-month-of-march" target="_blank" rel="noopener noreferrer">
                      Ecological Monitoring Story →
                    </a>
                  </td>
                </tr>

                {/* ROW 02 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">02</span>
                    Donor & organisational reporting
                  </td>
                  <td className="col-sample">
                    <strong>LCA Annual Reports & Government M&E Submissions</strong>
                    <ul>
                      <li>LCA 2025 Annual Report</li>
                      <li>LCA 2024 Annual Report</li>
                      <li>State Department for Wildlife: GEF-8 Q1 OFP Progress Report</li>
                      <li>CI-GEF Project Annual Workplan & Quarterly Report (FY27 Q1)</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To communicate organisational progress, rangeland management milestones, and fiduciary compliance under major multi-million dollar donor funding programs ($9.58M GEF-8 grant + $54.4M co-finance).
                    <br /><br />
                    <strong>Audience:</strong> LCA Board of Trustees, Ministry of Tourism & Wildlife, GEF Operational Focal Point, and USAID/TNC.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Reporting Lead (Personally Drafted & Coordinated):</strong>
                    <br />
                    Synthesized multi-landscape M&E indicators, drafted executive chapters, compiled performance reporting matrices, and directed graphic layout reviews.
                  </td>
                  <td className="col-link">
                    <a href="https://www.laikipiaconservancies.org/lca-2025-annual-report" target="_blank" rel="noopener noreferrer">
                      LCA 2025 Annual Report →
                    </a>
                    <a href="https://www.laikipiaconservancies.org/so/79PNxfXk8?languageTag=en" target="_blank" rel="noopener noreferrer">
                      LCA 2024 Annual Report →
                    </a>
                    <a href="/reports/GEF-8_OFP_Progress_Report_FY27Q1.pdf" target="_blank" rel="noopener noreferrer">
                      GEF-8 OFP Report (PDF) →
                    </a>
                    <a href="/reports/CI-GEF_Project_Annual_Workplan_FY27Q1.pdf" target="_blank" rel="noopener noreferrer">
                      CI-GEF Workplan (57 Pages) →
                    </a>
                  </td>
                </tr>

                {/* ROW 03 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">03</span>
                    Programme reporting
                  </td>
                  <td className="col-sample">
                    <strong>Oliveseed Foundation Community Needs Assessment Final Evaluation Report</strong>
                    <ul>
                      <li>Complete 71-Page Baseline Evaluation Document</li>
                      <li>Participatory Field Appraisals (24 KIIs & 6 FGDs)</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To present empirical field assessment findings and operational workplans for evidence-based decision-making and community-led development initiatives.
                    <br /><br />
                    <strong>Audience:</strong> Oliveseed Foundation US Board, community elders, women's groups, and field partners.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Lead Research Consultant & Author (Personally Created):</strong>
                    <br />
                    Designed participatory appraisal methodologies, conducted 24 key informant interviews (KIIs) and 6 focus group discussions (FGDs), analyzed baseline socio-economic data, and authored the full 71-page evaluation report.
                  </td>
                  <td className="col-link">
                    <a href="https://docs.google.com/document/d/1my4pZUJ75U41cM5neogJZvKHpX5dzk6a/edit?usp=sharing&ouid=109810313526103633968&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                      Oliveseed Google Doc (71 Pages) →
                    </a>
                    <a href="/reports/Oliveseed_Community_Needs_Assessment_Report.pdf" target="_blank" rel="noopener noreferrer">
                      Full Report PDF (2.95 MB) →
                    </a>
                  </td>
                </tr>

                {/* ROW 04 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">04</span>
                    PowerPoint & visual communications
                  </td>
                  <td className="col-sample">
                    <strong>Policy, Strategy & Governance Presentation Decks</strong>
                    <ul>
                      <li>Kishon Consulting Corporate Strategy & Governance Briefings</li>
                      <li>Multi-Landscape Donor & Stakeholder Inception Decks</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To translate complex multi-million dollar donor funding frameworks, conservation rangeland policies, and institutional strategies into visually compelling, executive briefing decks for leadership validation.
                    <br /><br />
                    <strong>Audience:</strong> Ministry officials, development partners, conservancy board chairs, community representatives, and international donor delegations.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Visual Designer & Strategist (Personally Created):</strong>
                    <br />
                    Structured narrative storyboards, developed custom executive infographics and indicator scorecards, and formatted slide decks for high-level multi-stakeholder forums.
                  </td>
                  <td className="col-link">
                    <a href="https://www.kishonconsulting.co.ke/" target="_blank" rel="noopener noreferrer">
                      Kishon Consulting Profile →
                    </a>
                  </td>
                </tr>

                {/* ROW 05 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">05</span>
                    Digital communications & campaigns
                  </td>
                  <td className="col-sample">
                    <strong>GEF-8 Global Wildlife Program (GWP) Multi-Channel Digital Launch</strong>
                    <ul>
                      <li>Kenya Child Project Feature</li>
                      <li>LCA Conservation Social Media & Ranger Spotlight Campaigns</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To elevate the visibility of conservation grant milestones, mobilize public awareness, and deepen online community engagement (&gt;60% audience growth across 32+ member conservancies).
                    <br /><br />
                    <strong>Audience:</strong> Global conservation networks, youth advocates, eco-tourism stakeholders, and the Kenyan public.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Digital Campaign Lead (Personally Created & Supervised):</strong>
                    <br />
                    Formulated campaign messaging pillars, authored digital features and social media copy, directed creative assets, and monitored engagement analytics.
                  </td>
                  <td className="col-link">
                    <a href="https://www.laikipiaconservancies.org/post/gef-8-global-wildlife-program-gwp-kenya-child-project" target="_blank" rel="noopener noreferrer">
                      GEF-8 Project Official Story →
                    </a>
                  </td>
                </tr>

                {/* ROW 06 */}
                <tr>
                  <td className="col-ref">
                    <span className="ref-num">06</span>
                    Website & digital presence
                  </td>
                  <td className="col-sample">
                    <strong>LCA Web Portal Overhaul & Personal Professional Portfolio Platform</strong>
                    <ul>
                      <li>LCA Official Web Platform (Wix/CMS)</li>
                      <li>Alex Lekishon Interactive Web Portfolio</li>
                    </ul>
                  </td>
                  <td className="col-purpose">
                    To create a responsive, modern digital platform ensuring institutional reports, newsletters, and programmatic achievements are discoverable and interactive for external audiences.
                    <br /><br />
                    <strong>Audience:</strong> Donors, conservation partners, researchers, media, and hiring committees.
                  </td>
                  <td className="col-contrib">
                    <strong className="contrib-role">Content Strategist & Web Lead (Personally Created & Managed):</strong>
                    <br />
                    Structured information architecture, curated report attachment workflows, drafted copy, and deployed modern interactive web portfolio with in-app document readers.
                  </td>
                  <td className="col-link">
                    <a href="https://www.laikipiaconservancies.org" target="_blank" rel="noopener noreferrer">
                      LCA Official Portal →
                    </a>
                    <a href="https://alex-lekishon.vercel.app/" target="_blank" rel="noopener noreferrer">
                      Interactive Web Portfolio →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* ========================================================== */}
        {/* DIRECT PORTFOLIO LINKS HUB (ALWAYS VISIBLE FOR QUICK CLICKS) */}
        {/* ========================================================== */}
        <div className="dossier-links-hub">
          <div className="links-hub-header">
            <div className="hub-badge">DIRECT VERIFIED EVIDENCE</div>
            <h4 className="hub-title">Explore Portfolio Samples & Publications</h4>
            <p className="hub-desc">
              Click any link below to open the authentic publication, interactive article, donor report, or 71-page evaluation directly:
            </p>
          </div>

          <div className="links-hub-grid">
            {portfolioLinks.map((item) => (
              <div key={item.num} className="hub-card">
                <div className="hub-card-top">
                  <span className="hub-num">{item.num}</span>
                  <span className="hub-category">{item.category}</span>
                </div>
                <h5 className="hub-card-title">{item.title}</h5>
                <p className="hub-card-desc">{item.desc}</p>
                <div className="hub-card-links">
                  {item.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hub-link-btn"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div className="dossier-verify-box">
          <strong className="verify-title">Direct Portfolio Platform Verification:</strong>
          <span className="verify-desc">
            Access all full multi-page PDF documents, in-app readers, and interactive presentations online at:
          </span>
          <a
            href="https://alex-lekishon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="verify-url"
          >
            https://alex-lekishon.vercel.app/
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Enlarge View */}
      {modalImage && (
        <div className="dossier-modal-backdrop" onClick={() => setModalImage(null)}>
          <div className="dossier-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setModalImage(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="modal-header-info">
              <span>Alex Lekishon Professional Portfolio Dossier (Full Resolution Preview)</span>
              <a
                href={modalImage}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-ext-link"
              >
                Open Original in New Tab <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="modal-img-container">
              <img src={modalImage} alt="Portfolio Document Page Enlarge" className="modal-full-img" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
