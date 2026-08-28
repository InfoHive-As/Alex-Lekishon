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
        <a className="btn primary" href={`mailto:${personalInfo.email}`}>
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
        <button
          className="btn"
          onClick={() => onCopyEmail(personalInfo.email)}
          type="button"
        >
          <Copy size={16} /> Copy Email
        </button>
      </div>
    </section>
  );
}
