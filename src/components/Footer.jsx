import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="wrap footer-content">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        
        <span className="back-to-top" onClick={scrollToTop}>
          Back to top <ArrowUp size={16} />
        </span>
      </div>
    </footer>
  );
}
