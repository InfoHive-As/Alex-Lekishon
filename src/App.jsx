import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Initiatives from './components/Initiatives';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleCopyEmail = (email) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email)
        .then(() => {
          showToast('Email address copied to clipboard!');
        })
        .catch(() => {
          window.location.href = `mailto:${email}`;
        });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-container">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero onCopyEmail={handleCopyEmail} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Initiatives />
        <Contact onCopyEmail={handleCopyEmail} />
      </main>

      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}
