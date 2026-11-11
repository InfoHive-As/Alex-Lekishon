import React from 'react';
import { Mail, Linkedin, Globe, Copy, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  return (
    <section className="hero wrap">
      <div className="eyebrow-badge">
        <MapPin size={14} />
        <span>{personalInfo.location}</span>
      </div>

      <h1>{personalInfo.name}</h1>
      <p className="hero-role">{personalInfo.title}</p>
      
      <p className="hero-tagline">{personalInfo.tagline}</p>

      <div className="cta-row">
        <a className="btn primary" href="#dossier">
          <Award size={16} /> View Selected Work Portfolio
        </a>
        <a
          className="btn"
          href="/reports/Alex_Lekishon_Portfolio_Submission.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Award size={16} /> Download Official PDF (2 Pages)
        </a>
        <a className="btn" href={`mailto:${personalInfo.email}`}>
          <Mail size={16} /> Email me
        </a>
        <a
          className="btn"
          href={personalInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          className="btn"
          href={personalInfo.consultancy}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={16} /> {personalInfo.consultancyName}
        </a>
      </div>
    </section>
  );
}
