import { useState } from 'react';
import { config } from '../config';
import './Navigation.css';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation" role="navigation">
      <div className="nav-container">
        <div className="nav-doodles">
          {/* Cat face 1 - filled with happy expression */}
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="12" fill="var(--color-text)" />
            <path d="M 7 10 L 10 7 L 12 10 Z" fill="var(--color-text)" />
            <path d="M 25 10 L 22 7 L 20 10 Z" fill="var(--color-text)" />
            <circle cx="12" cy="15" r="2" fill="var(--color-bg)" />
            <circle cx="20" cy="15" r="2" fill="var(--color-bg)" />
            <path d="M 13 20 Q 16 22 19 20" stroke="var(--color-bg)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <line x1="6" y1="16" x2="10" y2="16" stroke="var(--color-bg)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="16" x2="26" y2="16" stroke="var(--color-bg)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Cat face 2 - outline with closed happy eyes */}
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" fill="none" stroke="var(--color-text)" strokeWidth="2.5" />
            <path d="M 8 10 L 11 7 L 13 11 Z" fill="none" stroke="var(--color-text)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 24 10 L 21 7 L 19 11 Z" fill="none" stroke="var(--color-text)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 11 15 Q 13 13 15 15" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M 17 15 Q 19 13 21 15" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="16" cy="18" r="1.5" fill="var(--color-text)" />
            <path d="M 13 21 Q 16 23 19 21" stroke="var(--color-text)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <line x1="7" y1="16" x2="11" y2="16" stroke="var(--color-text)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="21" y1="16" x2="25" y2="16" stroke="var(--color-text)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>

          {/* Cat face 3 - simple outline */}
          <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="11" fill="none" stroke="var(--color-text)" strokeWidth="2.5" />
            <path d="M 9 11 L 12 7 L 14 12 Z" fill="none" stroke="var(--color-text)" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M 23 11 L 20 7 L 18 12 Z" fill="none" stroke="var(--color-text)" strokeWidth="2.5" strokeLinejoin="round" />
            <circle cx="12" cy="15" r="1.5" fill="var(--color-text)" />
            <circle cx="20" cy="15" r="1.5" fill="var(--color-text)" />
            <circle cx="16" cy="19" r="1.2" fill="var(--color-text)" />
            <path d="M 14 21 Q 16 22 18 21" stroke="var(--color-text)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="6" y1="16" x2="10" y2="16" stroke="var(--color-text)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="16" x2="26" y2="16" stroke="var(--color-text)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="nav-toggle-icon"></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
          {config.resumeUrl ? (
            <a
              href={config.resumeUrl}
              className="nav-link nav-link-resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : (
            <button
              className="nav-link nav-link-resume nav-link-disabled"
              disabled
              title="Resume not available yet"
            >
              Resume
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
