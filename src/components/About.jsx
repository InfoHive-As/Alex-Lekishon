import React from 'react';
import { UserCheck } from 'lucide-react';
import { aboutParagraphs } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="wrap section">
      <div className="section-header">
        <h2 className="section-title">
          <UserCheck size={24} /> About Me
        </h2>
        <p className="section-subtitle">
          Strategic communications, public relations & grant management background
        </p>
      </div>

      <div className="about-text">
        {aboutParagraphs.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </section>
  );
}
