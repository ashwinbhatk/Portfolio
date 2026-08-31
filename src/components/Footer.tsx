import { config } from '../config';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2026 {config.name}</p>
        <div className="footer-mascot">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="footer-cat"
          >
            <path d="M 8 4 L 8 10 L 10 10 L 10 6 L 12 6 L 12 4 Z" fill="var(--color-accent)" />
            <path d="M 20 4 L 20 6 L 22 6 L 22 10 L 24 10 L 24 4 Z" fill="var(--color-accent)" />
            <rect x="10" y="8" width="12" height="14" fill="var(--color-accent)" />
            <rect x="12" y="12" width="3" height="3" fill="var(--color-bg)" />
            <rect x="17" y="12" width="3" height="3" fill="var(--color-bg)" />
            <rect x="15" y="17" width="2" height="2" fill="var(--color-bg)" />
            <line x1="6" y1="16" x2="10" y2="16" stroke="var(--color-bg)" strokeWidth="1" />
            <line x1="6" y1="18" x2="10" y2="18" stroke="var(--color-bg)" strokeWidth="1" />
            <line x1="22" y1="16" x2="26" y2="16" stroke="var(--color-bg)" strokeWidth="1" />
            <line x1="22" y1="18" x2="26" y2="18" stroke="var(--color-bg)" strokeWidth="1" />
            <line x1="15" y1="19" x2="14" y2="20" stroke="var(--color-bg)" strokeWidth="1" />
            <line x1="17" y1="19" x2="18" y2="20" stroke="var(--color-bg)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </footer>
  );
};
