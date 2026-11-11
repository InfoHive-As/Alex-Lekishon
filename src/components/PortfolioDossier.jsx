import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Award,
  Globe,
  Briefcase,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function PortfolioDossier() {
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

          {/* Quick PDF Action Buttons */}
          <div className="dossier-action-bar">
            <a
              href="/reports/Alex_Lekishon_Portfolio_Submission.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-btn primary"
            >
              <Download size={16} /> Download Official 2-Page PDF Dossier
            </a>
            <a
              href="/reports/alex-lekishon-portfolio-submission.html"
              target="_blank"
              rel="noopener noreferrer"
              className="dossier-btn secondary"
            >
              <ExternalLink size={16} /> Open Standalone Dossier Page
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

        {/* Section Heading */}
        <div className="dossier-table-intro">
          <h3 className="dossier-table-title">SELECTED WORK PORTFOLIO</h3>
          <div className="dossier-table-subtitle">
            Communications | Reporting | Design | Conservation Storytelling
          </div>
          <p className="dossier-intro-p">
            The selected examples below demonstrate my written communications, reporting, visual communication, and digital storytelling work across conservation and community development. Each entry identifies the purpose, audience, my contribution, and verified supporting evidence.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
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
    </section>
  );
}
