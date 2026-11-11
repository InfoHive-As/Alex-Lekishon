import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Leaf } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="header-brand">
          <a href="#" className="logo-avatar" aria-label="Home">
            AL
          </a>
          <div className="logo-text">
            <span>{personalInfo.name}</span>
            <span>Comm's, PR & Grants Specialist</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.substring(1) ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
